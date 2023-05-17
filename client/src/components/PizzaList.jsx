import styles from '../styles/PizzaList.module.css'
// import PizzaCard from '../PizzaCard/PizzaCard';
import ProductCard from './ProductCard';

const PizzaList = () => {
    const pizzaList = [{
      id: 1,
      image:
        "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000",
      name: "Fajita Pizza",
      description:
        "Description should be big enough to check the spacing problem",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000",
      name: "California Pizza",
      description:
        "Description should be big enough to check the spacing problem",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000",
      name: "Fajita Pizza",
      description:
        "Description should be big enough to check the spacing problem",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000",
      name: "California Pizza",
      description:
        "Description should be big enough to check the spacing problem",
    },];
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>THE BEST PIZZA IN THE CITY</h2>
        <p className={styles.desc}>Enjoy authentic pizza made with fresh ingredients and baked to perfection. Vegetarian and gluten-free options available. Cozy atmosphere for dining with family and friends. Come taste our mouth-watering pizzas!</p>
    
        <div style={{display: 'flex', justifyContent: 'space-between', margin: 40, flexWrap: 'wrap', width: '100%'}}>
            {pizzaList.map((pizza)=> (
              <ProductCard key={pizza.id} product={pizza} />
            ))}
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20, cursor: 'pointer'}}>
          <a href="/menu" style={{padding: '16px 32px', backgroundColor: '#7d0d15', color: '#fff', borderRadius: 6}}>View All Products</a>
        </div>
    </div>
  )
}

export default PizzaList