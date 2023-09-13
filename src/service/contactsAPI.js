// https://64fc6d20605a026163ae7ae8.mockapi.io/contacts/contacts

import axios from 'axios';

axios.defaults.baseURL = 'https://64fc825c605a026163ae90f0.mockapi.io/contacts';

export const getContacts = async () => {
  const response = await axios.get('');
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('', contact);
  return response.data;
};

export const removeContact = async id => {
  const response = await axios.delete(`/${id}`);
  return response.data;
};
