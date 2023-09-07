
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


// вішаємо обробник на вибір породи
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  loader.style.display = 'block';
  catInfo.style.display = 'none';
  error.style.display = 'none'; 

  // відображаємо інф по вибраній породи
  fetchCatByBreed(selectedBreedId)
    .then(catData => {
     
      loader.style.display = 'none';
      catInfo.style.display = 'block';
      displayCatInfo(catData);
    })
    .catch(err => {
      // якщо виникає помилка запиту
      loader.style.display = 'none';
      error.style.display = 'block';
    });
});

// функція для наповнення вибору породи
function fillBreedSelect(breeds) {
    breedSelect.innerHTML = '';
    
    // початковий пункт
  const initialOption = document.createElement('option');
  initialOption.text = 'Select a breed';
  initialOption.value = '';
    breedSelect.appendChild(initialOption);
    
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;
    breedSelect.appendChild(option);
  });
}

// функція для відображення інформації про кота
function displayCatInfo(catData) {
  const cat = catData[0];
    catInfo.innerHTML = `
  <img src="${cat.url}" alt="${cat.breeds[0].name}" />
    <p><strong>Name:</strong> ${cat.breeds[0].name}</p>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
    `;
}
// Приховуємо повідомлення про помилку на початку
error.style.display = 'none';

// отримати список порід при завантаженні сторінки
loader.style.display = 'block'; 
breedSelect.style.display = 'none'; 
fetchBreeds()
  .then(breeds => {
    fillBreedSelect(breeds);
    loader.style.display = 'none'; 
    breedSelect.style.display = 'block'; 
  })
  .catch(err => {
    loader.style.display = 'none'; 
    error.style.display = 'block';
  });


