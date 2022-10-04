import axios from 'axios';

export function getHeaders() {
  const token = '';
  const user = localStorage.getItem('credenciales');
  if (user !== 'null') {
    const token = JSON.parse(user).token
  }

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${token}`,
  };
  return headers;
}

export async function baseGetAPIRequest(url, params) {
  const headers = getHeaders();
  const response = await axios.get(url, { headers, params });
  return response.data;
}

export function basePostAPIRequest(url, data) {
  const headers = getHeaders();
  return axios.post(url, data, { headers });
}

export function basePutAPIRequest(url, data) {
  const headers = getHeaders();
  return axios.put(url, data, { headers });
}

export function baseDeleteAPIRequest(url) {
  const headers = getHeaders();
  return axios.delete(url, { headers });
}

export function basePatchAPIRequest(url) {
  const headers = getHeaders();
  return axios.patch(url, { headers })
}