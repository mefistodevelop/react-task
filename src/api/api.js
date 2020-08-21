import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const api = {
  getUser(name) {
    return (
      instance.get(name)
    );
  },
};