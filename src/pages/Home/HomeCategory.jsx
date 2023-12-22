import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoryData from "../../category.json";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const HomeCategory = () => {
  const [categoryList, setCategoryList] = useState(
    categoryData.categories || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/category.json"); // Adjust the path as needed
        const data = await response.json();
        setCategoryList(data.categories);
      } catch (error) {
        console.error("Error fetching data from categories.json", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={`${val.iconName}`}></i>
                      </div>
                      <Link to="/shop">
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
