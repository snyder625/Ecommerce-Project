// import { useState } from 'react'
import styles from '../styles/Home.module.css'
// import PizzaList from "../components/PizzaList/PizzaList"

import Slider from "../components/Slider/Slider"
// import AddButton from "../components/AddButton"
// import Add from '../components/Add'
import ProductCard from '../components/ProductCard'

const Data = [
  {}, {}, {}, {}
]

function Home() {
  // const [close, setClose] = useState(true)
  
  return (
    <div className={styles.container}>
      <Slider />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
        <h2>Pizzajoint | Best Pizza place in Karachi</h2>
        <meta name="description" content="Best Pizza in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      {/* <AddButton setClose={setClose} />
      {!close && <Add setClose={setClose}/>} */}

      <div style={{display: 'flex', justifyContent: 'space-between', margin: 60, flexWrap: 'wrap'}}>
      {Data.map((data)=> (
          <ProductCard key={data.id} />
      ))}

      </div>

      <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
        <button style={{padding: '16px 32px', backgroundColor: '#7d0d15', color: '#fff'}}>View All Products</button>
      </div>
      
      {/* <PizzaList pizzaList={pizzaList} /> */}
    </div>
  )
}

export default Home