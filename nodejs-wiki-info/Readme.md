# Global Search Engine

Powerful search engine that aggregates results from multiple sources including Wikipedia, News, and Web.

## Features
- 🌍 **Multi-source search**: Wikipedia, News APIs, DuckDuckGo
- 📱 **Responsive design**: Works on all devices  
- 🕰️ **Search history & analytics**: Track searches with popular queries
- 🖼️ **Rich results**: Images, descriptions, source badges
- 🔥 **Trending searches**: Popular search suggestions
- ⚡ **Fast aggregation**: Parallel search across sources
- 🐋 **Error handling**: Graceful fallbacks

## API Endpoints
- `GET /` - Main search interface
- `GET /search?q=query&type=all|news|encyclopedia` - Global search API
- `GET /history` - Search history with analytics
- `GET /trending` - Popular/trending searches

## Quick Start
```bash
# Docker
docker build -t global-search-engine .
docker run -p 3000:3000 global-search-engine

# Local development
npm install
npm run dev
```

Visit: http://localhost:3000

## Search Sources
- **Wikipedia**: Encyclopedia articles and summaries
- **News API**: Latest news articles (requires API key for production)
- **DuckDuckGo**: Instant answers and related topics

## Configuration
For production use with News API:
1. Get API key from https://newsapi.org
2. Replace 'demo' in code with your API key

---
**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)