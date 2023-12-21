import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Search Your Need From <span>Thousands</span> of Products{" "}
  </h2>
);
const desc = "We have the Largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);
  //   console.log(productData);

  //Rendering the search fnctionality
  const handleSearch = (e) => {
    //loggint the value intered to search bar
    // console.log(e.target.value);
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    //filtering products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Your Product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {/*facing key prop error*/}
            {searchInput &&
              filterProducts.map((product, index) => (
                <li key={index}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
