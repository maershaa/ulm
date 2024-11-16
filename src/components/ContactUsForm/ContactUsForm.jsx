import React from 'react';
import axios from 'axios'; // Для отправки запросов на сервер
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from './ContactUsForm.styled'; // Подключите свои стили

// Начальные значения формы
const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  message: '',
};

// Схема валидации формы с использованием Yup
const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Введіть ваше ім'я"),
  phone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Введіть правильний номер телефону')
    .required('Введіть ваш телефон'),
  email: Yup.string().email('Невірний формат email').required('Введіть вашу електронну адресу'),
  message: Yup.string()
    .min(10, 'Повідомлення повинно містити принаймні 10 символів')
    .required('Введіть ваше повідомлення'),
});

// Основной компонент формы
const ContactUsForm = () => {
  // Обработчик отправки данных формы
  const handleContactSubmit = (values, actions) => {
    axios
      .post('http://localhost:5001/api/sendMail', values) // Отправка данных на сервер
      .then((response) => {
        toast.success('Ваше повідомлення успішно відправлено');
        actions.resetForm(); // Очистка формы после успешной отправки
      })
      .catch((error) => {
        toast.error('Сталася помилка під час відправки повідомлення');
        console.error(error);
      });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleContactSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="fullName">Повне Ім'я</FormLabel>
              <FormInput
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ваше повне ім'я"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="fullName" component="div" style={{ color: 'red' }} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone">Телефон</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ваш телефон"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Електронна Адреса</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Ваш email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Текст повідомлення</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ваше повідомлення"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
            </FormGroup>

            <FormButton type="submit">Зв'яжіться з нами</FormButton>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ContactUsForm;
