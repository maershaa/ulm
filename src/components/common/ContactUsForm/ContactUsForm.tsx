import { useTranslation } from 'react-i18next';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FormErrorText } from '@/components';
import 'react-toastify/dist/ReactToastify.css';
import emailjs, { SERVICE_ID, TEMPLATE_ID } from './emailjs';

import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from './ContactUsForm.styled';
import Honeypot from './Honeypot/Honeypot';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string; // honeypot — реальные люди это поле не видят и не заполняют
}

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
  website: '',
};

// Пропускаем при вводе только цифры, +, пробелы и дефисы. не даёт напечатать буквы в поле телефона
const sanitizePhoneInput = (value: string) => value.replace(/[^\d+\s-]/g, '');

const ContactUsForm = () => {
  const { t } = useTranslation('main');

  // Схема валидации формы с использованием Yup
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .transform((value) => value?.trim())
      .required(t('contactUsForm.nameError')),
    phone: Yup.string()
      .transform((value) => value?.trim())
      .matches(/^\+?\d{10,14}$/, t('contactUsForm.telFormatError'))
      .required(t('contactUsForm.telError')),
    email: Yup.string()
      .transform((value) => value?.trim())
      .email(t('contactUsForm.emailError')),
    message: Yup.string()
      .transform((value) => value?.trim())
      .min(10, t('contactUsForm.messageTooShort'))
      .required(t('contactUsForm.messageError')),
  });

  const handleContactSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    // Honeypot сработал - значит скорее всего был бот. Успешно завершаем, ничего не отправляя, чтобы бот не понял, что его отфильтровали
    if (values.website) {
      actions.resetForm();
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#myForm').then(
      () => {
        toast.success(t('contactUsForm.successToast'));
        actions.resetForm(); // Очистка формы после успешной отправки
      },
      (error) => {
        console.error('EmailJS error:', error);
        toast.error(t('contactUsForm.errorToast'));
      }
    );
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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} id="myForm">
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
                onChange={(e) =>
                  setFieldValue('phone', sanitizePhoneInput(e.target.value))
                }
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
                rows={4}
                placeholder={t('contactUsForm.messagePlaceholder')}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <FormErrorText errorMessage={errors.message} />
              )}
            </FormGroup>

            <Honeypot value={values.website} onChange={handleChange} />

            <FormButton type="submit">{t('contactUsForm.btnText')}</FormButton>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export { ContactUsForm };
