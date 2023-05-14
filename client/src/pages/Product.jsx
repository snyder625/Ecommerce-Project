import styles from '../styles/Product.module.css';
// import { useEffect, useState } from 'react';

const Product = () => {

    // const [size, setSize] = useState(0);
    // const [price, setPrice] = useState(pizza.prices[0]);
    // const [quantity, setQuantity] = useState(1)
    // const [extras, setExtras] = useState([])

    // const changePrice = (index) => {
    //     setPrice(price + index)
    // }

    // const handleSize = (sizeIndex) => {
    //     const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    //     setSize(sizeIndex);
    //     changePrice(difference);
    // };

    // const handleChange = (e, option) => {
    //     const checked = e.target.checked;

    //     if(checked) {
    //         changePrice(option.price);
    //         setExtras((prev)=>[...prev, option])
    //     } else {
    //         changePrice(-option.price);
    //         setExtras(extras.filter(extra => extra._id !== option._id))
    //     }
    // };

  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <img src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000" alt="" style={{width: '100%', objectFit: 'cover'}} />
            </div>
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>Fajita Pizza</h1>
            <span className={styles.price}>Rs. 1245</span>
            <p className={styles.desc}>Pizza aysa k baar baar khanay ko mann chahay</p>
            <h3 className={styles.choose}>Choose the size:</h3>

            <div className={styles.sizes}>
                <div className={styles.size} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
            {/* {pizza.extraOptions.map((option)=>(
                <div className={styles.option} key={option._id}>
                    <input type="checkbox" id={option.text} name={option.text} className={styles.checkbox} onChange={(e)=> handleChange(e, option)}/>
                    <label htmlFor="double">{option.text}</label>
                </div>
            ))} */}
                
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product