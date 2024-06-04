import './logo.scss'


export const Logo = () => {

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <a href="javascipt:void(0)" className="logo" title='Test' onClick={handleClick}>
      <p className="logo__name">Test</p>
      <p className="logo__specialization">Сеть мебельных магазинов</p>
    </a>
    </>
  )
}