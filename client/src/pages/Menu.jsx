import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import Loading from "../layout/loader/Loading";
// import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";

import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const categories = ["Pizza", "Burger", "Pasta", "Fries"];

const Menu = () => {
  // const dispatch = useDispatch();
  // const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setprice] = useState([0, 25000]);
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");
  // const { products, loading, error, productsCount, resultPerPage } =
  //   useSelector((state) => state.products);
  const setCurrentPageNum = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  const resultPerPage = 10;
  const productsCount = 10;
  const products = [
    {
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
  ];
  const keyword = useParams();
  const loading = false;
  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }
    // dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, []);
  // let count=filteredproductscount;
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h2 className={styles.menuHeading}>Products</h2>
          <div className={styles.menu}>
            {products &&
              products.map((product) => (
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
              max={25000}
            />

            {/* categories*/}
            <Typography>Categories</Typography>
            <ul className={styles.categoryBox}>
              {categories.map((category) => (
                <li
                  className={styles.categorylink}
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
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
