import { useEffect, useState } from 'react';
import styles from '../styles/Product.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Product = () => {

    const {id} = useParams()

    const [pizza, setPizza] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try {
              const response = await axios.get(`http://localhost:3000/products/${id}`);
              setPizza(response.data);
            } catch (error) {
              console.error(error);
            }
          };
      
        fetchData();
    }, [id])

    const [size, setSize] = useState(0);
    // const [price, setPrice] = useState(pizza.prices[0]);
    // const [quantity, setQuantity] = useState(1)
    // const [extras, setExtras] = useState([])

    const changePrice = (index) => {
        setPrice(price + index)
    }

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

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
                <img src={pizza.img} alt="" style={{width: '100%', objectFit: 'cover'}} />
            </div>
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            {/* <span className={styles.price}>Rs. {price}</span> */}
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size:</h3>

            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>handleSize(0)} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(1)} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(2)} >
                    <img src="/img/size.png" alt="" style={{width: '100%'}} />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients: </h3>
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
                <button className={styles.cartbtn}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product