import { Head } from '../component/Head/Head'
import { Content } from '../component/Content/Content'
import './contents.scss'

export const Contents = () => {
  return (
    <main className='contents'>
      <Head head={'Спальня'}/>
      <Content/>
      <section className='content'></section>
      <section className='compilation'></section>
      <section className='variation'></section>
    </main>
  )
}