import './SwiperNavButton.scss'

export const SwiperNavButton = ({nameClass}) => {
  return (
    <div className={`swiperNavButton__navigation swiperNavButton__navigation--${nameClass}`}>
      <button className={`swiperNavButton__prev swiperNavButton__prev--${nameClass}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8647 7.07408L6.898 2.10742L8.20726 0.798157L15.4091 8.00001L8.20726 15.2019L6.898 13.8926L11.8647 8.92593H0.594299V7.07408H11.8647Z"/>
        </svg>
      </button>
      <button className={`swiperNavButton__next swiperNavButton__next--${nameClass}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8647 7.07408L6.898 2.10742L8.20726 0.798157L15.4091 8.00001L8.20726 15.2019L6.898 13.8926L11.8647 8.92593H0.594299V7.07408H11.8647Z"/>
        </svg>
      </button>
    </div>
  )
}