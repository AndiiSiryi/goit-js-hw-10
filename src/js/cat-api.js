
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_d6fiC213Ac2c5lUISBnpZeN7aC5ou80plZ9P6kmgj980h1PBxMUjDazZTTgi3ETu';
// отримуємо список порід котів з API
async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}
// отримуємо інформацію про кота за ID
async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { fetchBreeds, fetchCatByBreed };
