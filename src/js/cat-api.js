
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_d6fiC213Ac2c5lUISBnpZeN7aC5ou80plZ9P6kmgj980h1PBxMUjDazZTTgi3ETu';
// отримуємо список порід котів з API

const BASE_URL = 'https://api.thecatapi.com/v1';

export async function fetchBreeds() {
  try {
    const response = await axios.get(`${BASE_URL}/breeds`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// отримуємо інформацію про кота за ID
export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

