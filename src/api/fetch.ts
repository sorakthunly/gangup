const BASE_URL = 'http://10.0.1.149:4000';

export const get = url => fetch(BASE_URL + url).then(res => res.json());