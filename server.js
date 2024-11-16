// Импорт необходимых библиотек
import nodemailer from 'nodemailer'; // Для отправки email сообщений
import dotenv from 'dotenv'; // Для работы с переменными окружения
import express from 'express'; // Для создания сервера
import bodyParser from 'body-parser'; // Для обработки входящих данных в формате JSON
import cors from 'cors'; // Для настройки CORS (разрешение запросов с других доменов)

// Загрузка переменных окружения
dotenv.config(); // Загружаем переменные из файла .env

// Проверка наличия необходимых переменных окружения
if (!process.env.PASSWORD) {
  console.error('Помилка: змінна PASSWORD не встановлена у файлі .env');
  process.exit(1); // Завершаем выполнение, если переменная не установлена
}

const app = express(); // Создаем экземпляр приложения Express

// Настройка middleware
app.use(cors({
  origin: 'https://maershaa.github.io/ulm/', // Вказуємо адресу вашого клієнта
  methods: ['POST', 'GET'], // Дозволяємо тільки POST та GET запити
}));
app.use(bodyParser.json()); // Настроили сервер для обработки JSON данных

// Настройка Nodemailer для отправки писем
const transporter = nodemailer.createTransport({
  host: 'smtp.meta.ua', // Хост почтового сервера
  port: 465, // Порт для защищенного соединения
  secure: true, // Включаем SSL/TLS
  auth: {
    user: 'maershaa@meta.ua', // Ваш email
    pass: process.env.PASSWORD, // Пароль из .env файла
  },
});

// Проверка соединения с SMTP-сервером
transporter.verify((error) => {
  if (error) {
    console.error('Помилка з’єднання з SMTP сервером:', error);
  } else {
    console.log('SMTP сервер доступний');
  }
});

// Обработчик POST-запроса для отправки письма
app.post('/api/sendMail', (req, res) => {
  console.log(req.body); // Логируем полученные данные
  
  const { fullName, phone, email, message } = req.body;

  // Проверка входных данных
  if (!fullName || !phone || !email || !message) {
    return res.status(400).send({ message: 'Будь ласка, заповніть усі поля' });
  }

  // Настройка письма
  const mailOptions = {
    from: 'maershaa@meta.ua', // Звідки відправляємо
    to: 'valeria.work2022@gmail.com', // Почта отримувача
    subject: `Новое сообщение от ${fullName}`, // Тема листа
    text: `
      Ім'я: ${fullName}
      Телефон: ${phone}
      Email: ${email}
      
      Повідомлення:
      ${message}
    `, // Текст повідомлення
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Помилка при відправці листа:', error);
      return res.status(500).send({ message: 'Помилка при відправці повідомлення', error });
    }
    console.log('Лист успішно відправлений:', info.response); // Логируем успешную отправку
    res.status(200).send({ message: 'Повідомлення успішно відправлено' });
  });
});

// Запуск сервера
const PORT = 5001; // Номер порта, на котором будет слушать сервер
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`); 
});
