import { Head } from '../component/Head/Head'
import './main.scss'

export const Main = () => {
  return (
    <main className='main'>
      <Head head={'Спальня'}/>
      <section className='content'></section>
      <section className='compilation'></section>
      <section className='variation'></section>
    </main>
  )
}