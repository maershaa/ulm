import axios from 'axios'; // Для отправки запросов на сервер
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FormErrorText } from '@/components';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from './ContactUsForm.styled';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

// Схема валидации формы с использованием Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Введіть ваше ім'я"),
  phone: Yup.string()
    .matches(
      /^\+?\d{10,14}$/,
      'Введіть номер телефону у форматі +380 XX XXX XX XX'
    )
    .required('Введіть ваш телефон'),
  email: Yup.string().email('Невірний формат email'),
  message: Yup.string()
    .min(10, 'Повідомлення повинно містити принаймні 10 символів')
    .required('Введіть ваше повідомлення'),
});

const ContactUsForm = () => {
  const handleContactSubmit = (values, actions) => {
    axios
      .post('http://localhost:5001/api/sendMail', values) // Отправка данных на сервер
      .then((response) => {
        toast.success('Дякуємо! Ми вже отримали ваше повідомлення');
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Ваше ім’я*</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Наприклад: Олександр"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <FormErrorText errorMessage={errors.name} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone">Номер телефону*</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                placeholder="+380 XX XXX XX XX"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && (
                <FormErrorText errorMessage={errors.phone} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <FormErrorText errorMessage={errors.email} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Що вас цікавить?*</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                rows="4"
                placeholder="Розкажіть, що вас цікавить, або задайте запитання. Ми допоможемо!"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <FormErrorText errorMessage={errors.message} />
              )}
            </FormGroup>

            <FormButton type="submit">Надіслати</FormButton>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export { ContactUsForm };
