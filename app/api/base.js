import axios from 'axios';

const ApiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/110028156';

const BaseAPI = {
  getPost: (postId) => axios.get(`${ApiUrl}/posts/${postId}`),

  getPosts: (locale, category) =>
    axios.get(`${ApiUrl}/posts?number=10&tag=${locale},${category}`),

  getLastPost: () => axios.get(`${ApiUrl}/posts?number=1`),


};

export default BaseAPI;
