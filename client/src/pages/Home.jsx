import { useState } from 'react'
import styles from '../styles/Home.module.css'
// import PizzaList from "../components/PizzaList/PizzaList"

import Slider from "../components/Slider/Slider"
import AddButton from "../components/AddButton"
import Add from '../components/Add'

function Home() {
  const [close, setClose] = useState(true)
  
  return (
    <div className={styles.container}>
      <div>
        <title>Pizzajoint | Best Pizza place in Karachi</title>
        <meta name="description" content="Best Pizza in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <Slider />
      <AddButton setClose={setClose} />
      {!close && <Add setClose={setClose}/>}
      
      {/* <PizzaList pizzaList={pizzaList} /> */}
    </div>
  )
}

export default Home