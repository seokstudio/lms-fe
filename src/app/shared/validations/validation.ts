const requiredMessage: { [key: string]: string } = {
  en: 'Required field',
  uk: "Обов'язкове поле",
}

const emailMessage: { [key: string]: string } = {
  en: 'Email format is incorrect',
  uk: 'Неправильний формат електронної пошти',
}

const phoneMessage: { [key: string]: string } = {
  en: 'Incorrect phone format',
  uk: 'Неправильний формат номеру телефону',
}

const minLengthMessage: { [key: string]: string } = {
  en: 'Minimum 2 characters',
  uk: 'Мінімум 2 символи',
}

export const required = (lang: string) => {
  return requiredMessage[lang]
}

export const phonePattern = (lang: string) => {
  return {
    value: /^\+[\d]{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
    message: phoneMessage[lang],
  }
}

export const minLength2Pattern = (lang: string) => {
  return {
    value: /^.{2,}$/,
    message: minLengthMessage[lang],
  }
}
