const express = require('express');
const app = express();
const axios = require('axios');
const wikip = require('wiki-infobox-parser');

//ejs
app.set("view engine", 'ejs');

//routes
app.get('/', (req,res) =>{
    res.render('index');
});

app.get('/index', (req,response) =>{
    let url = "https://en.wikipedia.org/w/api.php"
    let params = {
        action: "opensearch",
        search: req.query.person,
        limit: "1",
        namespace: "0",
        format: "json"
    }

    url = url + "?"
    Object.keys(params).forEach( (key) => {
        url += '&' + key + '=' + params[key]; 
    });

    //get wikip search string
    axios.get(url).then(res => {
        const result = res.data;
        if (result[3] && result[3][0]) {
            let x = result[3][0];
            x = x.substring(30, x.length); 
            //get wikip json
            wikip(x , (err, final) => {
                if (err){
                    response.status(404).send('Person not found');
                }
                else{
                    response.json(final);
                }
            });
        } else {
            response.status(404).send('Person not found');
        }
    }).catch(err => {
        response.status(500).send('Error fetching data');
    });

    
});

//port
app.listen(3000, console.log("Listening at port 3000..."))