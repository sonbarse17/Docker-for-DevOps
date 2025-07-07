const express = require('express');
const app = express();
const axios = require('axios');
const wikip = require('wiki-infobox-parser');

// Middleware
app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(express.json());

// In-memory search history (use database in production)
let searchHistory = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { history: searchHistory.slice(-5) });
});

// Global search endpoint
app.get('/search', async (req, response) => {
    const query = req.query.q;
    const type = req.query.type || 'all';
    
    if (!query) {
        return response.status(400).json({ error: 'Search query required' });
    }

    try {
        // Add to search history
        searchHistory.push({ query, type, timestamp: new Date() });
        if (searchHistory.length > 50) searchHistory.shift();

        const searchResult = await searchWikipedia(query, type);
        response.json(searchResult);
    } catch (error) {
        response.status(500).json({ error: 'Search failed', details: error.message });
    }
});

// Trending/Popular searches endpoint
app.get('/trending', (req, res) => {
    const trending = ['AI technology', 'Climate change', 'Space exploration', 'Cryptocurrency', 'Health tips'];
    res.json(trending);
});

// Get search history with analytics
app.get('/history', (req, res) => {
    const recentHistory = searchHistory.slice(-20);
    const topQueries = getTopQueries();
    res.json({ recent: recentHistory, popular: topQueries });
});

// Analytics helper
function getTopQueries() {
    const queryCount = {};
    searchHistory.forEach(item => {
        queryCount[item.query] = (queryCount[item.query] || 0) + 1;
    });
    return Object.entries(queryCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([query, count]) => ({ query, count }));
}

// Global search function across multiple sources
async function searchWikipedia(query, type) {
    const results = await Promise.allSettled([
        searchWikipediaSource(query),
        searchNewsAPI(query),
        searchDuckDuckGo(query)
    ]);

    const allResults = [];
    results.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value) {
            allResults.push(...result.value);
        }
    });

    if (allResults.length === 0) {
        throw new Error('No results found across all sources');
    }

    return {
        query,
        totalResults: allResults.length,
        sources: ['Wikipedia', 'News', 'Web'],
        results: allResults.slice(0, 10)
    };
}

// Wikipedia search
async function searchWikipediaSource(query) {
    try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=3&namespace=0&format=json`;
        const searchRes = await axios.get(searchUrl);
        const [, titles, descriptions, urls] = searchRes.data;
        
        return titles.map((title, i) => ({
            title,
            description: descriptions[i],
            url: urls[i],
            source: 'Wikipedia',
            type: 'encyclopedia',
            favicon: 'https://wikipedia.org/favicon.ico'
        }));
    } catch {
        return [];
    }
}

// News API search (using free tier)
async function searchNewsAPI(query) {
    try {
        // Using NewsAPI free tier - replace with your API key
        const newsUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=3&sortBy=relevancy&apiKey=demo`;
        const newsRes = await axios.get(newsUrl);
        
        return newsRes.data.articles?.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            source: article.source.name,
            type: 'news',
            thumbnail: article.urlToImage,
            publishedAt: article.publishedAt,
            favicon: 'https://newsapi.org/favicon.ico'
        })) || [];
    } catch {
        return [];
    }
}

// DuckDuckGo Instant Answer API
async function searchDuckDuckGo(query) {
    try {
        const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
        const ddgRes = await axios.get(ddgUrl);
        const data = ddgRes.data;
        
        const results = [];
        
        if (data.Abstract) {
            results.push({
                title: data.Heading || query,
                description: data.Abstract,
                url: data.AbstractURL,
                source: 'DuckDuckGo',
                type: 'instant_answer',
                thumbnail: data.Image,
                favicon: 'https://duckduckgo.com/favicon.ico'
            });
        }
        
        if (data.RelatedTopics) {
            data.RelatedTopics.slice(0, 2).forEach(topic => {
                if (topic.Text && topic.FirstURL) {
                    results.push({
                        title: topic.Text.split(' - ')[0],
                        description: topic.Text,
                        url: topic.FirstURL,
                        source: 'DuckDuckGo',
                        type: 'related',
                        thumbnail: topic.Icon?.URL,
                        favicon: 'https://duckduckgo.com/favicon.ico'
                    });
                }
            });
        }
        
        return results;
    } catch {
        return [];
    }
}

//port
app.listen(3000, console.log("Listening at port 3000..."))