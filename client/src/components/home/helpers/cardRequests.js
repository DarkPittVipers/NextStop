import axios from 'axios';

export function createCard(body) {
  return axios.post('/api/cards', body)
    .then((response) => response.data);
}

export function createComment(body, cardId) {
  return axios.post(`/api/cards/${cardId}/comments`, body)
    .then((response) => response.data);
}

export function likeCard(cardId, value) {
  return axios.put(`/api/cards/${cardId}`, { value })
    .then((response) => response.data);
}