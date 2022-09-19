import ginger from './images/ginger.svg';
import nootris from './images/nootris.svg';
import vorus from './images/vorus.svg';

import './Discount.css';

export default function Discount () {

  return (
    <section className="discount">
      <div className="discount__title">
        <span>
          получи защиту иммунитета
        </span>
        <span className="discount__title-orange">
          со скидкой -15% первым!
        </span>
      </div>
      <div className="discount__price">
        <span className="discount__price-old">
          750&#8381;
        </span>
        <span className="discount__price-new">
          690&#8381;
        </span>
        </div>
      <div className="discount__image-left">
        <img src={ginger} className="discount__image-left__image" alt=""/>
        <div className="discount__image-left__description">
          <span>
            Содержит
          </span> 
          <span className="discount__image-left__description-orange">
            имбирь
          </span>
        </div>
      </div>
      <div className="discount__image-center">
        <img src={nootris} className="discount__image-center__image" alt=""/>
        <div className="discount__image-center__description">
          <span>
            &#43; Бесплатная доставка
          </span> 
          <span className="discount__image-center__description-orange">
            Специальная цена
          </span>
        </div>
      </div>
      <div className="discount__image-right">
        <img src={vorus} className="discount__image-right__image" alt=""/>
        <div className="discount__image-right__description">
          <span>
            Нейтрализует
          </span> 
          <span className="discount__image-right__description-orange">
            вирусы
          </span>
        </div>
      </div>
      <div className="discount__button__container">
        <button type="button" className="discount__button__button">Оформить заказ!</button>
      </div>
    </section>
  )
} 