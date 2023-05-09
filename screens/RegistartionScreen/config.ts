import * as yup from 'yup'

export const REG_INITIAL_VALUES = {
  name: '',
  university: '',
  course: '',
  phone_number: '',
  password: '',
  confirmPassword: '',
}

export const validationSchema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  university: yup.string().required('Обязательное поле'),
  course: yup.string().required('Обязательное поле'),
  phone_number: yup.string().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Обязательное поле'),
})
