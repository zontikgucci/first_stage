import {useState} from 'react';
import { Card } from "../Card/Card";

import './compilation.scss'

export const Compilation = ({ dataProducts }) => {
  const [checkedIds, setCheckedIds] = useState([]);
  const [sumProducts, setSumProducts] = useState(0)

  const handleCheckboxChange = (productId) => {
    setCheckedIds(prevCheckedIds => {
    const newCheckedIds = prevCheckedIds.includes(productId)
    ? prevCheckedIds.filter(id => id !== productId)
    : [...prevCheckedIds, productId];

    const newSumProducts = dataProducts.reduce((sum, product) => {
      return newCheckedIds.includes(product.id) ? sum + product.price.priceNumber : sum;
    }, 0)

    setSumProducts(newSumProducts)
    return newCheckedIds
  })
  }

  return (
    <section className="compilation">
      <div className="container">
        <h2 className="compilation__title title">Подборка один</h2>
        <div className="compilation__body">
          <div className="compilation__products">
          {dataProducts.map(product => (
              <label
              htmlFor={`checkbox-${product.id}`}
              className={`compilation__item ${product.absent ? 'compilation__item--absent' : ''}`}
              key={product.id}
              >
              <h3 className="compilation__name">{product.title}</h3>
              <div className="compilation__info">
              <p className="compilation__price">{product.price.priceString}</p>
              <input
              type="checkbox"
              className="compilation__checked"
              checked={checkedIds.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
              id={`checkbox-${product.id}`}
              name="productCheckbox"
              />
              </div>
              </label>
              ))}
            <div className="compilation__item">
              <h3 className="compilation__name">Итого</h3>
              <div className="compilation__info">
                  <p className="compilation__price">{`${sumProducts} ₽`}</p>
                  <span className="compilation__checked compilation__checked--none"></span>
                </div>
            </div>
            <button className="compilation__button">
              <p className="compilation__text">Добавить товары в корзину</p>
              <svg className='compilation__img' width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.70703 5.70837V0.958374H7.29036V5.70837H12.0404V7.29171H7.29036V12.0417H5.70703V7.29171H0.957031V5.70837H5.70703Z"/>
              </svg>
            </button>
          </div>
          <Card />
        </div>
      </div>
    </section>
  )
}