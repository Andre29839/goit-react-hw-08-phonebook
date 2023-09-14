import { instance } from 'redux/auth/operations';

export const getContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export const postContact = async contact => {
  const response = await instance.post('/contacts', contact);
  return response.data;
};

export const removeContact = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};

export const redactionContact = async data => {
  const response = await instance.patch(`/contacts/${data.id}`, {
    name: data.name,
    number: data.number,
  });
  return response.data;
};
