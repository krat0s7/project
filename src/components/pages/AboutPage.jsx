import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>Про нас</h1>
            <div className="welcome-message">
              <p>Ласкаво просимо до нашого онлайн-магазину! Ми пропонуємо великий вибір свіжих та якісних продуктів харчування, приготованих з <span>любов'ю</span> та <span>дбайливістю</span>.</p>
            </div>
            <h2>Наші цінності</h2>
            <ul>
                <li><strong>Свіжість:</strong> Ми гарантуємо свіжість усіх наших продуктів, щоб ви завжди могли насолоджуватися смаком натуральних інгредієнтів.</li>
                <figure className="image-container">
                <img src="./img/sw.jpg" className="about-image1" />
                </figure>
                <li><strong>Якість:</strong> Ми обираємо тільки найкращі інгредієнти для наших страв, щоб ви могли насолоджуватися смачним та здоровим харчуванням.</li>
                <figure className="image-container">
                <img src="./img/yak.jpg" className="about-image2" />
                </figure>
                <li><strong>Здоров'я:</strong> Наша мета - підтримувати ваше здоров'я та добробут, надаючи смачні та поживні продукти.</li>
                <figure className="image-container">
                <img src="./img/helth.jpg" className="about-image3" />
                </figure>
                <li><strong>Відповідальність:</strong> Ми дбаємо про довкілля та відповідально ставимося до усіх аспектів нашої діяльності, від вибору інгредієнтів до упаковки та доставки.</li>
                <figure className="image-container">
                <img src="./img/vid.jpg" className="about-image3" />
                </figure>
                <li><strong>Смак:</strong> Наші шеф-кухарі ретельно розробляють рецепти, щоб кожен шматочок їжі був справжнім відкриттям смаку.</li>
            </ul>
            <figure className="image-container">
                <img src="./img/smak.jpg" className="about-image" />
            </figure>
            
            <h2>Наші продукти</h2>
            <p>
                У нас ви знайдете широкий вибір страв, включаючи сніданки, обіди, вечері та солодощі. Всі наші страви приготовані з натуральних інгредієнтів та можуть бути доставлені прямо до ваших дверей.
            </p>
            <p>
                Ми також пропонуємо спеціальні дієтичні опції, такі як вегетаріанська, веганська, безглютенова та безлактозна їжа, щоб кожен міг знайти щось смачне для себе.
            </p>
            <p>
                Безперечно, ваше задоволення - наш пріоритет. Ми завжди стежимо за вашими потребами та відгуками, щоб надати вам найкращий сервіс та продукти.
            </p>
            <figure className="image-container">
            <img src="./img/smie.jpg" className="about-image" />
            <figcaption>Смачного♥</figcaption>
            </figure>
        </div>
    );
};

export default AboutPage;