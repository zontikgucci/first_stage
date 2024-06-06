import { useState } from 'react';
import './footer.scss'



export const Footer = () => {
  const [nameActive, setNameActive] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);

  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')

  const [sub, setSub] = useState(false)


  const handleInputChange = (setInput) => (event) => {
    const { value } = event.target
    // setIsValid(validateEmail(value))
    setInput(value)
  }

  const handleFocus = (nameActive) => () => nameActive(true)

  const handleBlur = (nameActive, setNameActive) => () => {
    if (nameActive.trim() === '') {
      setNameActive(false)
    }
  }

  const handleClick = (e) => {
    if (inputName.trim() && inputPhone.trim() && inputEmail.trim()){
      e.preventDefault()

      setSub(true)
      setNameActive(false)
      setPhoneActive(false)
      setEmailActive(false)

      setInputName('')
      setInputPhone('')
      setInputEmail('')
      setTimeout(() => setSub(false), 1000)
    }
  }

  // валидация
  // const [isValid, setIsValid] = useState(true)

  // const EMAIL_REGEXP = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

  // const validateEmail = (value) => {
  //   console.log(EMAIL_REGEXP.test(value))
  //   return EMAIL_REGEXP.test(value);
  // }


  return (
    <footer className='footer'>
      <div className="container container--footer">
        <div className="footer__top">
          <h1 className='title title--footer'>Сайт рыбатекст поможет дизайнеру, верстальщику</h1>
             <form action="#" method="post" className='form'>
              <h2 className='form__title'>Оставьте заявку и мы пришлем вам ссылку</h2>
              <div className="form__body">
                <div className='form__group'>
                  <div className={`form__hint ${nameActive ? 'form__hint--inputActive' : ''}`}>
                    <label className='form__label' htmlFor="name">Ваше имя</label>
                    <svg className='form__img' width="13" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8333 17.4166H11.25V15.8333C11.25 15.2034 10.9998 14.5993 10.5544 14.1539C10.109 13.7085 9.50488 13.4583 8.87499 13.4583H4.12499C3.4951 13.4583 2.89101 13.7085 2.44561 14.1539C2.00021 14.5993 1.74999 15.2034 1.74999 15.8333V17.4166H0.166656V15.8333C0.166656 14.7835 0.583694 13.7767 1.32603 13.0343C2.06836 12.292 3.07517 11.875 4.12499 11.875H8.87499C9.9248 11.875 10.9316 12.292 11.674 13.0343C12.4163 13.7767 12.8333 14.7835 12.8333 15.8333V17.4166ZM6.49999 10.2916C5.87621 10.2916 5.25854 10.1688 4.68224 9.93005C4.10595 9.69134 3.58231 9.34146 3.14123 8.90038C2.70015 8.45931 2.35027 7.93567 2.11156 7.35937C1.87285 6.78308 1.74999 6.16541 1.74999 5.54163C1.74999 4.91785 1.87285 4.30018 2.11156 3.72388C2.35027 3.14758 2.70015 2.62395 3.14123 2.18287C3.58231 1.74179 4.10595 1.39191 4.68224 1.1532C5.25854 0.914488 5.87621 0.791626 6.49999 0.791626C7.75977 0.791626 8.96795 1.29207 9.85875 2.18287C10.7495 3.07367 11.25 4.28185 11.25 5.54163C11.25 6.8014 10.7495 8.00959 9.85875 8.90038C8.96795 9.79118 7.75977 10.2916 6.49999 10.2916ZM6.49999 8.70829C7.33984 8.70829 8.1453 8.37466 8.73916 7.7808C9.33303 7.18693 9.66666 6.38148 9.66666 5.54163C9.66666 4.70177 9.33303 3.89632 8.73916 3.30245C8.1453 2.70859 7.33984 2.37496 6.49999 2.37496C5.66014 2.37496 4.85468 2.70859 4.26082 3.30245C3.66695 3.89632 3.33332 4.70177 3.33332 5.54163C3.33332 6.38148 3.66695 7.18693 4.26082 7.7808C4.85468 8.37466 5.66014 8.70829 6.49999 8.70829Z" />
                    </svg>
                  </div>
                  <input
                    className='form__input'
                    type="text" id="name"
                    name="name" required
                    value={inputName}
                    onChange={handleInputChange(setInputName)}
                    onFocus={handleFocus(setNameActive)}
                    onBlur={handleBlur(inputName, setNameActive)}
                  />
                </div>
                <div className='form__group'>
                  <div className={`form__hint ${ phoneActive ? 'form__hint--inputActive' : ''}`}>
                    <label className='form__label' htmlFor="phone">Ваш телефон</label>
                    <svg className='form__img' width="16" height="22" viewBox="0 0 16 22"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7031 15.1078C15.2961 15.1078 15.7773 14.6266 15.7773 14.0336V3.66523C15.7773 1.6457 14.1316 0 12.1121 0H3.88789C1.86836 0 0.222656 1.6457 0.222656 3.66523V18.3391C0.222656 20.3586 1.86836 22.0043 3.88789 22.0043H12.1164C14.1359 22.0043 15.7816 20.3586 15.7816 18.3391C15.7816 17.7461 15.3004 17.2648 14.7074 17.2648C14.1145 17.2648 13.6332 17.7461 13.6332 18.3391C13.6332 19.1727 12.9543 19.8559 12.1164 19.8559H3.88789C3.0543 19.8559 2.37109 19.177 2.37109 18.3391V3.66523C2.37109 2.83164 3.05 2.14844 3.88789 2.14844H12.1164C12.95 2.14844 13.6332 2.82734 13.6332 3.66523V14.0336C13.6289 14.6266 14.1102 15.1078 14.7031 15.1078Z" />
                      <path d="M6.67657 15.6536C6.08361 15.6536 5.60236 16.1348 5.60236 16.7278C5.60236 17.3208 6.08361 17.802 6.67657 17.802H9.32345C9.91641 17.802 10.3977 17.3208 10.3977 16.7278C10.3977 16.1348 9.91641 15.6536 9.32345 15.6536H6.67657Z" />
                    </svg>
                  </div>
                  <input
                    className='form__input'
                    type="tel" id="phone"
                    name="phone" required
                    value={inputPhone}
                    onChange={handleInputChange(setInputPhone)}
                    onFocus={handleFocus(setPhoneActive)}
                    onBlur={handleBlur(inputPhone, setPhoneActive)}
                  />
                </div>
                <div className='form__group'>
                  <div className={`form__hint ${ emailActive ? 'form__hint--inputActive' : ''}`}>
                    <label className='form__label' htmlFor="email">Ваша почта</label>
                    <svg className='form__img form__img--email' width="29" height="22" viewBox="0 0 29 22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5833 0H2.41669C1.08382 0 0 1.08382 0 2.41669V19.3334C0 20.6662 1.08382 21.75 2.41669 21.75H26.5834C27.9162 21.75 29 20.6662 29 19.3333V2.41669C29 1.08382 27.9162 0 26.5833 0ZM2.41669 1.20831H26.5834C26.6724 1.20831 26.7509 1.24077 26.8344 1.25912C24.7422 3.17397 17.8046 9.52067 15.3768 11.7081C15.1868 11.8792 14.8806 12.0833 14.5001 12.0833C14.1195 12.0833 13.8133 11.8792 13.6227 11.7075C11.1951 9.52044 4.25717 3.1734 2.16526 1.25923C2.24897 1.24088 2.32759 1.20831 2.41669 1.20831ZM1.20831 19.3333V2.41669C1.20831 2.29831 1.244 2.19092 1.27594 2.08273C2.87729 3.54837 7.71802 7.97676 10.8568 10.831C7.72822 13.5185 2.88624 18.1091 1.27215 19.6482C1.24366 19.5455 1.20831 19.445 1.20831 19.3333ZM26.5833 20.5417H2.41669C2.32017 20.5417 2.23436 20.508 2.14424 20.4865C3.81214 18.8965 8.68493 14.2795 11.7585 11.6501C12.1592 12.0135 12.5252 12.3449 12.8138 12.6049C13.3117 13.0545 13.8946 13.2917 14.5 13.2917C15.1054 13.2917 15.6883 13.0545 16.1856 12.6055C16.4743 12.3454 16.8406 12.0137 17.2415 11.6501C20.3152 14.2792 25.1873 18.8959 26.8558 20.4865C26.7656 20.508 26.6799 20.5417 26.5833 20.5417ZM27.7917 19.3333C27.7917 19.445 27.7563 19.5455 27.7279 19.6482C26.1132 18.1083 21.2718 13.5182 18.1432 10.8311C21.2821 7.97681 26.1221 3.54882 27.7241 2.08262C27.756 2.1908 27.7917 2.29825 27.7917 2.41663V19.3333Z" />
                    </svg>
                  </div>
                  <input
                    className='form__input'
                    type="email" id="email"
                    name="email" required
                    value={inputEmail}
                    onChange={handleInputChange(setInputEmail)}
                    onFocus={handleFocus(setEmailActive)}
                    onBlur={handleBlur(inputEmail, setEmailActive)}
                    // style={{color : isValid ? 'green' : 'red'}}
                  />
                </div>
                <button
                  className='form__button'
                  onClick={handleClick}
                >
                  Подписаться
                </button>
              </div>
            </form>
        </div>
      </div>
      <div className={`subscription ${sub ? 'subscription--active' : ''}`} >
        <p className='subscription__text'>Отправлено</p>
      </div>
  </footer>
  )
}