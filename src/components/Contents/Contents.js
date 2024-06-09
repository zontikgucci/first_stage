import { Head } from '../component/Head/Head'
import { Content } from '../component/Content/Content'
import { Compilation } from '../component/Compilation/Compilation'

import { products } from '../data/products'

import './contents.scss'


export const Contents = () => {
  return (
    <main className='contents'>
      <Head head={'Спальня'}/>
      <Content />
      <Compilation dataProducts={products}/>
      <section className='variation'></section>
    </main>
  )
}