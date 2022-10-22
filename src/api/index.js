import axios from 'axios';

const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

export async function getUser() {
  try {
    const response = await axios.get(urlUsers);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getTodos() {
  try {
    const response = await axios.get(urlTodos);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getPhotos() {
  try {
    const response = await axios.get(urlPhotos);
    return response;
  } catch (error) {
    throw error;
  }
}
