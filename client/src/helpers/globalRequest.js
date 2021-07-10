import axios from 'axios';

export function getImages(count = 100) {
  return axios.get('/api/images', {
    params: {
      count
    }
  }).then((response) => response.data);
}

export function getCards(count = 5) {
  return axios.get('/api/cards', {
    params: {
      count
    }
  }).then((response) => response.data);
}

export function anotherRequest() { }

// Validates if a file extension matches common image formats
const validateFile = (file) => new Promise((resolve, reject) => {
  const allowedExtension = ['jpeg', 'jpg', 'png', 'gif'];
  const fileExtension = file.name.split('.').pop().toLowerCase();
  let isValidFile = false;

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < allowedExtension.length; index++) {
    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      break;
    }
  }

  if (!isValidFile) {
    reject(new Error(`Allowed Extensions are : *.${allowedExtension.join(', *.')}`));
    return;
  }

  const reader = new FileReader();

  // Read the contents of Image File.
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    // Initiate the JavaScript Image object.
    const image = new Image();

    // Set the Base64 string return from FileReader as source.
    image.src = e.target.result;

    // Validate the File Height and Width.
    image.onload = function load() {
      const { height, width } = this;
      if (height > 64 || width > 64) {
        reject(new Error('Width and height must not exceed 64px.'));
        return;
      }
      resolve();
    };
  };
});

/**
 * Uploads a form data file to imgbb
 * @param  {Object} file object containing file information
 * @return {Promise} Promise that will resolve to an object
 * containing remote image info
 */
export function uploadPhoto(file) {
  return validateFile(file)
    .then(() => {
      const formData = new FormData();
      formData.append('image', file);

      return axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: {
          key: '811b6930fa34cc442fd5f319e9d975f6'
        }
      });
    })
    .then((response) => response.data.data);
}
