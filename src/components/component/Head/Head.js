import './head.scss'


export const Head = ({head}) => {
  return (
    <section className='head'>
      <div className="container">
        <div className="head__content">
          <div className="head__body">
            <ul className="head__breadcrumbs">
              <li className='head__item'>Заглушка /</li>
            </ul>
            <h1 className='head__title title'>{ head }</h1>
            <p className='head__subtitle subtitle'>Спальня коллекции Альба</p>
          </div>
          <div className="head__img"></div>
        </div>
      </div>
    </section>
  )
}