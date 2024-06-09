import './variation.scss'
import { Card } from '../Card/Card';


export const Variation = () => {
  return (
    <section className='variation'>
      <div className="container">
        <h2 className='variation__title title'>Для спальни</h2>
        <Card
          slidesPerView={5}
          spaceBetween={20}
          nameClass={'variation'}
          discount={true}
          loop={true}
          />
      </div>
    </section>
  )
}