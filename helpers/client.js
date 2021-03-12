var axios = require('axios');

const onePostUrl = 'https://jsonplaceholder.typicode.com/posts/1'
const commentsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments'


function getPost() {
  let config = {
    method: 'get',
    url: onePostUrl }
   return axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error;
    }) }

function getComments() {
  let config = {
    method: 'get',
    url: commentsUrl }
    axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error;
    }) }

module.exports = {
  getPost,
  getComments
}