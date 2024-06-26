import './catalog.scss'

export const Catalog = () => {
  return (
    <>
    <div className="catalog">
      <a href='$' className="catalog__button" onClick={e => e.preventDefault()}>
        <div className="catalog__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        Каталог
      </a>
      <input type="text" className='catalog__input' placeholder='Поиск'/>
      <svg className='catalog__img' width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2745 13.1552L17.6652 16.5451L16.545 17.6653L13.1551 14.2746C11.8938 15.2857 10.3249 15.8357 8.70833 15.8334C4.77533 15.8334 1.58333 12.6414 1.58333 8.70837C1.58333 4.77537 4.77533 1.58337 8.70833 1.58337C12.6413 1.58337 15.8333 4.77537 15.8333 8.70837C15.8356 10.325 15.2857 11.8938 14.2745 13.1552ZM12.6865 12.5677C13.6912 11.5345 14.2523 10.1495 14.25 8.70837C14.25 5.64621 11.7697 3.16671 8.70833 3.16671C5.64616 3.16671 3.16666 5.64621 3.16666 8.70837C3.16666 11.7697 5.64616 14.25 8.70833 14.25C10.1495 14.2523 11.5345 13.6912 12.5677 12.6865L12.6865 12.5677Z"/>
      </svg>
    </div>
    </>
  )
}