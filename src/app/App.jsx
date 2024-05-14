import React from 'react';
import { Map } from '../widgets/map/Map';
import AOS from "aos";
import Layout from './layout/Layout';
import imgShop from "../assets/images/shop.jpg";
import discountIcon from "../assets/icons/discount.svg";
import handshakeIcon from "../assets/icons/handshake.svg";
import garantyIcon from "../assets/icons/garanty.svg";
import reviewImg1 from "../assets/images/30258560062054200_4e41_250x250.jpg";
import reviewImg2 from "../assets/images/30258560097629298_ca81_250x250.jpg";
import reviewImg3 from "../assets/images/30258560111062707_c0e9_250x250.jpg";
import reviewImg4 from "../assets/images/30258560163256721_c6f9_250x250.jpg";
import aboutImg1 from "../assets/images/Picture1.png";
import aboutImg2 from "../assets/images/Picture2.png";
import aboutImg3 from "../assets/images/Picture3.png";
import aboutImg4 from "../assets/images/Picture4.png";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <section className='first_screen'>
        <h1 className='first_screen__title' data-aos="fade-right">
          <b>Алгино</b> - <br />
          означает <br />
          качество!
        </h1>
        <div className='first_screen__img-wrapper' data-aos="fade-left">
          <img src={imgShop} alt="" className="first_screen__img" />
        </div>
      </section>
      <section className='feature' data-aos="fade-up" data-aos-offset="180">
      <div className='feature-top'></div>
      <div className="feature-mid">
        <h2 className="feature__title">Почему мы?</h2>
        <div className="feature__wrapper-cards">
          <div className="feature__card">
            <img src={handshakeIcon} className="feature__card__img"></img>
            <h3 className="feature__card__title">Индивидуальный подход</h3>
          </div>
          <div className="feature__card">
            <img src={discountIcon} className="feature__card__img"></img>
            <h3 className="feature__card__title">Отличные цены</h3>
          </div>
          <div className="feature__card">
            <img src={garantyIcon} className="feature__card__img"></img>
            <h3 className="feature__card__title">100% гарантия качества</h3>
          </div>
        </div>
      </div>
      <div className="feature-bottom"></div>
      </section>
      <section className='contacts'>
        <div className="contacts__map" data-aos="fade-right">
          <Map />
        </div>
        <div className="contacts__info" data-aos="fade-left">
          <div className="contacts__info__title">Алгино</div>
          <ul className='contacts__info-list'>
            <li className='contacts__info-list__item'>
              <p className="contacts__info-list__item-description">ИП Обгадзе Илья Алексеевич</p>
            </li>
            <li className='contacts__info-list__item'>
              <h3 className="contacts__info-list__item-title">Адрес</h3>
              <a target='_blank' href='https://yandex.ru/maps/-/CDbnqIjo' className="contacts__info-list__item-description">Ст-ца Курская, ул. Комарова, д. 11</a>
            </li>
            <li className='contacts__info-list__item'>
              <h3 className="contacts__info-list__item-title">График работы</h3>
              <p className="contacts__info-list__item-description">Ежедневно: 8:00 - 21:00</p>
            </li>
            <li className='contacts__info-list__item'>
              <h3 className="contacts__info-list__item-title">Эл. почта</h3>
              <a href='mailto:alginoshop@mail.ru' className="contacts__info__-list__item-description">alginoshop@mail.ru</a>
            </li>
            <li className='contacts__info-list__item'>
              <h3 className="contacts__info-list__item-title">Телефон</h3>
              <a href='tel:+79288252539' className="contacts__info-list__item-description">+7 (928) 825-25-39</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="reviews" data-aos="fade-up" data-aos-offset="180">
        <h2 className="reviews__title" data-aos="fade-up" data-aos-offset="180">Отзывы</h2>
        <div className="reviews__wrapper-cards" data-aos="fade-up" data-aos-offset="180">
          <div className="reviews__card">
            <h3 className="reviews__card-name">Ольга Богачева</h3>
            <img src={reviewImg1} className="reviews__card-img" />
            <p className="reviews__card-text">Отличный магазин с широким ассортиментом продуктов и хозяйственных товаров, всегда свежие продукты и удобное расположение.</p>
          </div>
          <div className="reviews__card">
            <h3 className="reviews__card-name">Дмитрий Иванов</h3>
            <img src={reviewImg2} className="reviews__card-img" />
            <p className="reviews__card-text">Магазин порадовал разнообразием товаров, отличным качеством и дружелюбным персоналом. Рекомендую всем</p>
          </div>
          <div className="reviews__card">
            <h3 className="reviews__card-name">Василий Шумченко</h3>
            <img src={reviewImg3} className="reviews__card-img" />
            <p className="reviews__card-text">Огромный респект за большой ассортимент продуктов, Галя лучшая :)</p>
          </div>
          <div className="reviews__card">
            <h3 className="reviews__card-name">Галина Белова</h3>
            <img src={reviewImg4} className="reviews__card-img" />
            <p className="reviews__card-text">Цены здесь всегда приятно удивляют, особенно акции и скидки. Я часто делаю здесь покупки и всегда остаюсь довольна.</p>
          </div>
        </div>
      </section>
      <section className='about' data-aos="fade-up">
        <p className="about__text"><b>Алгино</b> - ваш надежный партнер в создании атмосферы уюта и комфорта в вашем доме. У нас вы найдете широкий выбор высококачественных товаров для дома и продуктов, чтобы сделать вашу жизнь еще более приятной и удобной. Наш опытный персонал всегда готов помочь вам с выбором и ответить на все ваши вопросы. Посетите наш магазин и ощутите атмосферу уюта и радушия, которую мы создали специально для вас. Спасибо, что выбрали нас!</p>
        <div className='about__wrapper-img' data-aos="fade-up"><img className='about__img' src={aboutImg1} /></div>
        <div className='about__wrapper-img' data-aos="fade-up"><img className='about__img' src={aboutImg2} /></div>
        <div className='about__wrapper-img' data-aos="fade-up"><img className='about__img' src={aboutImg3} /></div>
        <div className='about__wrapper-img' data-aos="fade-up"><img className='about__img' src={aboutImg4} /></div>
      </section>
    </Layout>
  )
}

export default App
