import { Head } from '../component/Head/Head'
import './contents.scss'

export const Contents = () => {
  return (
    <main className='contents'>
      <Head head={'Спальня'}/>
      <section className='content'></section>
      <section className='compilation'></section>
      <section className='variation'></section>
    </main>
  )
}