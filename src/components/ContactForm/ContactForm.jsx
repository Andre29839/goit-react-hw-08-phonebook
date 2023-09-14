import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormWrap,
  AddModalBtn,
  UserIcon,
  PhoneIcon,
  InputForm,
  AddModal,
  OpenAddModal,
} from './ContactForm.styled';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const currentContacts = useSelector(state => state.contacts.items);
  const loader = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const formatTel = () => {
      const number = values.phone;
      const phoneLength = number.length;
      if (phoneLength < 7) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`;
      }
      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
        6,
        10
      )}`;
    };

    const newContact = { name: values.name, number: formatTel() };
    const newContactName = newContact.name.toLowerCase();

    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      dispatch(addContact(newContact));
      if (!loader) {
        setOpen(false);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    onSubmit: handleSubmit,
  });

  const showModal = () => {
    setOpen(true);
    formik.values.name = '';
    formik.values.phone = '';
  };

  return (
    <>
      <OpenAddModal onClick={showModal} title="Add new contact">
        <PlusCircleOutlined />
        Add contact
      </OpenAddModal>
      <AddModal
        footer={null}
        title="Add new contact"
        open={open}
        onCancel={() => setOpen(false)}
      >
        <FormWrap onSubmit={formik.handleSubmit}>
          <InputForm
            prefix={<UserIcon />}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            placeholder="Name"
          />
          <InputForm
            prefix={<PhoneIcon />}
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            type="text"
            placeholder="Number"
          />

          <AddModalBtn type="primary" htmlType="submit">
            Create contact
          </AddModalBtn>
        </FormWrap>
      </AddModal>
    </>
  );
};
