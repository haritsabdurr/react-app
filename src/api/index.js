import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl, urlAccount } from 'utils/Url';
import { urlPhotos } from 'utils/Url';

export async function getMetas() {
  try {
    const response = await axios.get(`${baseUrl}/metas`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getBanners() {
  try {
    const response = await axios.get(`${baseUrl}/banners`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${baseUrl}/descs`);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function getUserById() {
  try {
    const response = await axios.get(`${urlAccount}/descs`);
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
