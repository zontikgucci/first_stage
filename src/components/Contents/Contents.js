import { Head } from '../component/Head/Head'
import { Content } from '../component/Content/Content'
import { Compilation } from '../component/Compilation/Compilation'

import { products } from '../data/products'

import './contents.scss'
import { Variation } from '../component/Variation/Variation'


export const Contents = () => {
  return (
    <main className='contents'>
      <Head head={'Спальня'}/>
      <Content />
      <Compilation dataProducts={products}/>
      <Variation/>
    </main>
  )
}