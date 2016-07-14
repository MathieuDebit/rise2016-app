import axios from 'axios';

const ApiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/110028156';

const BaseAPI = {
  getLastPost: () => axios.get(`${ApiUrl}/posts?number=1`),
  getPost: (postId) => axios.get(`${ApiUrl}/posts/${postId}`),
};

export default BaseAPI;
