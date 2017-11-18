import axios from 'axios'
export const FETCH_MOIM = 'FETCH_MOIM';

export function fetchMoim() {
  const request = axios.get('/api/moim/');
  return {
    type: FETCH_MOIM,
    payload: request
  }
}
