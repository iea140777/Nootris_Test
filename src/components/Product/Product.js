import {useState} from "react";
import cn from "classnames";
import logo from './images/logo.svg';
import basket from './images/basket.svg';
import productImage from './images/productImage.svg';

import   './Product.css';

export default function Pproduct () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return ( 
    <section className="product">
      <nav className="nav__container">
        <div className={cn(
          "nav__mask",
          {"nav__mask-visible": isMenuOpen},
        )} onClick={toggleMobileMenu}></div>
        <div className="nav__logo">
          <img className="nav__logo__image" src={logo} alt="logo"></img>
        </div>
        <div className={cn(
          "nav__menu",
          {"nav__menu-hidden": !isMenuOpen},
        )}
        >
          <a href="#" className="nav__menu__item">
            FAQ
          </a>
          <a href="#" className="nav__menu__item">
            Оплата и доставка
          </a>
          <a href="#" className="nav__menu__item">
            Возврат
          </a>
          <a href="#" className="nav__menu__item">
            Исследования
          </a>
          <a href="#" className="nav__menu__item">
            Личный кабинет
          </a>
          <a href="#" className="nav__menu__item">
            8 8 (800) 600-09-90
          </a>
        </div>
        <a href="#" className="nav__basket">
          <img src={basket} className="nav__basket__image" alt="basket"></img>
          <div className="nav__basket__counter">1</div>
        </a>
        <button type="button" className="nav__menu__burger-icon" onClick={toggleMobileMenu}> &#9776; </button>
      </nav>     
      <img src={productImage} className="product__image" alt="product"/>
      <div className="product__description">
        <span className="product__description-item__1">активируй <br/>иммунитет!</span>
        <span className="product__description-item__2">Всего пять секунд в день помогут укрепить иммунитет
          и повысить защитные силы организма</span>
      </div>
      <div className="product__description">
        <span className="product__description-item__3">NOOTRIS ПОМОГАЕТ</span>
        <span className="product__description-item__4">Вашему организму во время пандемии 
          и сезонных простуд</span>
      </div>
    </section>
  )
}