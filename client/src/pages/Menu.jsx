import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { BASE_URL } from "../urlHandler";

import Typography from "@mui/material/Typography";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Pizza", "Burger", "Side", "Dessert"];

const Menu = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setprice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const [productsData, setProducts] = useState([]);

  const [keyword, setKeyword] = useState("");

  const setCurrentPageNum = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value.toLowerCase();

    setSelectedCheckbox(checkboxValue);
    console.log("Selected category is", checkboxValue);
    console.log("Selected category's type is", typeof checkboxValue);
  };

  const resultPerPage = 10;
  const productsCount = 10;

  const getAllProducts = async () => {
    let result = await axios.get(
      `http://192.168.2.10:4000/products?minPrice=${price[0]}&maxPrice=${price[1]}`
    );
    if (category !== "" && category === "all") {
      result = await axios.get(
        `http://192.168.43.83:4000/products?minPrice=${price[0]}&maxPrice=${price[1]}`
      );
    }
    if (category !== "" && category != "all") {
      let categoryLowercase = category.toLowerCase();
      result = await axios.get(
        `http://192.168.2.10:4000/products?category=${categoryLowercase}`
      );
    }
    console.log("result" + result);
    setProducts(result.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, [category, price, keyword]);

  const loading = false;
  console.log(keyword);

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
            <h2>Filters</h2>
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
                <div
                  key={ind}
                  className="singleCheckBox"
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "baseline",
                  }}
                >
                  <input
                    type="checkbox"
                    value={cate}
                    onChange={handleCheckboxChange}
                    checked={selectedCheckbox === cate.toLowerCase()}
                  />
                  <label>{cate}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
