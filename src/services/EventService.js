import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Epiq122/real-world-vue-3/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application.json',
  },
});

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  // added new call
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
