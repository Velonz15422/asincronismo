import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Hola mundo",
    "price": 2222222,
    "description": "A description",
    "categoryId": 1,
    "images": [
      "https://placeimg.com/640/480/any"
    ]
  }
  

  postData(`${API}/products`, data2)
    .then(response => response.json())
    .then (data2 => console.log(data2));



    //actualizar

var url = 'https://api.escuelajs.co/api/v1/products/227';
var data2 = {
    "price": 100
};

fetch(url, {
  method: 'PUT', // or 'PUT'
  body: JSON.stringify(data2), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));