const fetch = require('node-fetch');
const accessToken = 'eURNR25iZFdiS1d3c3B4WTllVjg2QT09';
//example
const url ='https://trefle.io/api/plants?common_name=blackwood';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
}
//get request don't need this
// const data = {
//   "name": "Wade Wilson",
//   "occupation": "Murderer",
//   "age": "30 (forever)"
// }
fetch(url, { method: 'GET', headers: headers})
  .then((res) => {
     return res.json()
})
.then((json) => {
  console.log(json);
  // Do something with the returned data.
});