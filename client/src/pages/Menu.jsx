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

  const [keyword, setKeyword] = useState("");

  // const { products, loading, error, productsCount, resultPerPage } =
  // useSelector((state) => state.products);
  const setCurrentPageNum = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value.toLowerCase();

    setCategory(checkboxValue);
    console.log("Categeeery is", category);
  };
  const resultPerPage = 10;
  const productsCount = 10;

  const getAllProducts = async () => {
    let result = await axios.get(
      `http://192.168.56.1:4000/products?minPrice=${price[0]}&maxPrice=${price[1]}`
    );
    if (category !== "") {
      let categoryLowercase = category.toLowerCase();
      result = await axios.get(
        `http://192.168.2.10:4000/products?category=${categoryLowercase}`
      );
    }
    setProducts(result.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, [category, price, keyword]);

  const loading = false;
  console.log(keyword);

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
          <form className={styles.searchBox}>
            <input
              type="text"
              placeholder="search a product.."
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
          <h2 className={styles.menuHeading}>Products</h2>
          <div className={styles.menu}>
            {productsData.length == 0 && (
              <h1 style={{ textAlign: "center", width: "70%" }}>
                No Available Items
              </h1>
            )}
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
            <div className="pricesSelected" style={{ width: "fit-content" }}>
              <p>Min Price:{price[0]}</p>
              <p>Max Price:{price[1]}</p>
            </div>

            {/* categories*/}

            <div>
              <h2 style={{ marginTop: "30px", marginBottom: "6px" }}>
                Categories
              </h2>
              {categories.map((cate, ind) => (
                <div key={ind} className="singleCheckBox">
                  <input
                    type="checkbox"
                    value={cate}
                    checked={selectedCheckbox === cate}
                    onChange={handleCheckboxChange}
                  />
                  <label>{cate}</label>
                </div>
              ))}
            </div>
          </div>

          {/*resultPerPage < productsCount && (
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
          )*/}
        </>
      )}
    </>
  );
};

export default Menu;
