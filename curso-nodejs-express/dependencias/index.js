const colors = require('colors');
const axios = require('axios').default;

console.log('Andio son arcoiri!'.rainbow); // rainbow

axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })