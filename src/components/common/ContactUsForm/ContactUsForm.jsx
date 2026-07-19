import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
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

const ContactUsForm = () => {
  const { t } = useTranslation('main');

  // Схема валидации формы с использованием Yup
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(t('contactUsForm.nameError')),
    phone: Yup.string()
      .matches(/^\+?\d{10,14}$/, t('contactUsForm.telFormatError'))
      .required(t('contactUsForm.telError')),
    email: Yup.string().email(t('contactUsForm.emailError')),
    message: Yup.string()
      .min(10, t('contactUsForm.messageTooShort'))
      .required(t('contactUsForm.messageError')),
  });

  const handleContactSubmit = (values, actions) => {
    axios
      .post(import.meta.env.VITE_API_URL, values) // Отправка данных на сервер
      .then((response) => {
        toast.success(t('contactUsForm.successToast'));
        actions.resetForm(); // Очистка формы после успешной отправки
      })
      .catch((error) => {
        toast.error(t('contactUsForm.errorToast'));
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
              <FormLabel htmlFor="name">
                {t('contactUsForm.nameInput')}
              </FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder={t('contactUsForm.namePlaceholder')}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <FormErrorText errorMessage={errors.name} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone">
                {t('contactUsForm.telInput')}
              </FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                placeholder={t('contactUsForm.telPlaceholder')}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && (
                <FormErrorText errorMessage={errors.phone} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">
                {t('contactUsForm.emailInput')}
              </FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder={t('contactUsForm.emailPlaceholder')}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <FormErrorText errorMessage={errors.email} />
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">
                {t('contactUsForm.messageInput')}
              </FormLabel>
              <FormTextarea
                id="message"
                name="message"
                rows="4"
                placeholder={t('contactUsForm.messagePlaceholder')}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <FormErrorText errorMessage={errors.message} />
              )}
            </FormGroup>

            <FormButton type="submit">{t('contactUsForm.btnText')}</FormButton>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export { ContactUsForm };
