import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import Loading from "../layout/loader/Loading";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import axios from "axios";

import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const categories = ["Pizza", "Burger", "Pasta", "Fries"];


const Menu = () => {
  // const dispatch = useDispatch();
  // const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setprice] = useState([0, 5000]);
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");
  const [productsData, setProducts] = useState([]);

  // const { products, loading, error, productsCount, resultPerPage } =
  // useSelector((state) => state.products);
  const setCurrentPageNum = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  const resultPerPage = 10;
  const productsCount = 10;

  const getAllProducts = async () => {
    let result = await axios.get(
      `http://192.168.2.10:4000/products?minPrice=${price[0]}&maxPrice=${price[1]}`
    );
    if (category !== "") {
      let categoryLowercase = category.toLowerCase();
      result = await axios.get(
        `http://192.168.2.10:4000/products?category=${categoryLowercase}`
      );
    }

    console.log(result);
    setProducts(result.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, [category, price]);

  const keyword = useParams();
  const loading = false;

  // useEffect(() => {
  //   // if (error) {
  //   //   alert.error(error);
  //   //   dispatch(clearErrors());
  //   // }
  //   // dispatch(getProduct(keyword, currentPage, price, category, ratings));
  // }, []);
  // let count=filteredproductscount;
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h2 className={styles.menuHeading}>Products</h2>
          <div className={styles.menu}>
            {productsData &&
              productsData.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className={styles.filterBox}>
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              aria-labelledby="range-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5000}
            />

            {/* categories*/}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" key="">
                Categories
              </option>
              {categories.map((cate, index) => (
                <option key={index} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
            <fieldset>
              <Typography>Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => setRatings(newRating)}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {resultPerPage < productsCount && (
            <div className={styles.paginationBox}>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNum}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Menu;
