import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({
  models: {
    post: Model,
  },

  seeds(server): void{
    server.db.loadData({
      posts: [
        {
          id: 1,
          author: "Victor",
          title: "My day",
          post: "My day was considerably busy. I studied a lot. Pokemon, pokemon, pokemon,pokemon,pokemon",
        },
        {
          id: 2,
          author: "Andrade",
          title: "My day",
          post: "My day was chill. I studied little. Digimon, digimon, digimon, digimon",
        }
      ],
    })
  },

  routes(): void{
    this.namespace = 'api';

    this.get('/posts', () => {
      return  this.schema.all('post')
    })

    this.post('/posts', (schema, request) =>{
      const data = JSON.parse(request.requestBody);
      return schema.create('post', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);