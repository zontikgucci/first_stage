export const SwiperNavButton = ({nameClass}) => {
  return (
    <div className={`${nameClass}__navigation`}>
      <button className={`${nameClass}__prev`}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8647 7.07408L6.898 2.10742L8.20726 0.798157L15.4091 8.00001L8.20726 15.2019L6.898 13.8926L11.8647 8.92593H0.594299V7.07408H11.8647Z"/>
        </svg>
      </button>
      <button className={`${nameClass}__next`}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8647 7.07408L6.898 2.10742L8.20726 0.798157L15.4091 8.00001L8.20726 15.2019L6.898 13.8926L11.8647 8.92593H0.594299V7.07408H11.8647Z"/>
        </svg>
      </button>
    </div>
  )
}