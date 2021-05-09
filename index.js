const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/teste", async (req, res) => {
  let repos = [];

  const url = "https://api.github.com/orgs/takenet/repos?page=1&per_page=6";
  
  try {
    const response = await fetch(url);
    const json = await response.json();
    
    for (var i = 0; i < json.length; i++) {
      repos.push({
        full_name: json[i].full_name,
        avatar_url: json[i].owner.avatar_url,
        description: json[i].description
      });
    }

    res.send(repos);
  } catch (error) {
    res.send(error);
  }
  
});

const listener = app.listen(8080, () => {
  console.log(` Listening on https://localhost:${listener.address().port}`)
});

module.exports = app;