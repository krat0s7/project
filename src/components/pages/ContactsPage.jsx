import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; 

const ContactsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', {
                name,
                email,
                message
            });
            console.log('Відповідь сервера:', response.data);
            setSubmitted(true);
        } catch (error) {
            console.error('Помилка при відправці даних:', error);
        }
    };

    return (
        <div className="contact-container">
            <h1>Контакти</h1>
            <div className="contact-info">
                <p><strong>Адреса:</strong> вул. Володимира Івасюка, 8, м. Луцьк, Україна</p>
                <p><strong>Телефон:</strong> +38 (096) 745 8778</p>
                <p><strong>Email:</strong> pasvadym777@gmail.com</p>
                <p><strong>Години роботи:</strong> Пн-Пт, 9:00 - 18:00</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Напишіть нам</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше повідомлення"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Відправити</button>
                {submitted && <p>Ваше повідомлення було відправлено!</p>}
            </form>
        </div>
    );
};

export default ContactsPage;
