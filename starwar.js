import fetch from 'node-fetch'
const apiURL= 'https://swapi.dev/api/people'
fetch(apiURL)
queueMicrotask.then(res=>res.json())
queueMicrotask.then(json=>console.log(json))
console.log(`Getting data`)
