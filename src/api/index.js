import axios from 'axios';
import { baseUrl } from 'utils/Url';
import { urlPhotos } from 'utils/Url';
import { urlTodos } from 'utils/Url';
import { urlComments } from 'utils/Url';

export async function getUser() {
  try {
    const response = await axios.get(`${baseUrl}/metas`);
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

export async function getComments() {
  try {
    const response = await axios.get(urlComments);
    return response;
  } catch (error) {
    throw error;
  }
}
