import React from 'react';
import './Contact.css'; 

const ContactsPage = () => {
    return (
        <div className="contact-container">
            <h1>Контакти</h1>
            <div className="contact-info">
                <p><strong>Адреса:</strong> вул. Івасюка, 8, м. Луцьк, Україна</p>
                <p><strong>Телефон:</strong> +38 (096) 745 8778</p>
                <p><strong>Email:</strong> pasvadym777@gmail.com</p>
                <p><strong>Години роботи:</strong> Пн-Пт, 9:00 - 18:00</p>
            </div>
            <form className="contact-form">
                <h2>Напишіть нам</h2>
                <input type="text" name="name" placeholder="Ваше ім'я" required />
                <input type="email" name="email" placeholder="Ваш email" required />
                <textarea name="message" placeholder="Ваше повідомлення" required></textarea>
                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default ContactsPage;
