import React, { useState, useEffect } from "react";
import Ratting from "../components/Ratting";
import { Link } from "react-router-dom";
import showCategroiesData from "./../showCategories.json";
const title = "Our Products";

const CategoryShowCase = () => {
  const [items, setItems] = useState(showCategroiesData);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./showCategories.json");
        const data = await response.json();
        setItems(data);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  // category based filtering
  const filterItem = (categItem) => {
    const updateItems = showCategroiesData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(showCategroiesData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                brand,
                authorName,
                price,
              } = elem;
              return (
                <div className="col" key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={imgUrl} alt="" />
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="#">{cate}</a>
                          </div>
                          <div className="course-reiew">
                            <Ratting />
                          </div>
                        </div>
                      </div>

                      {/* content  */}
                      <div className="course-content">
                        <Link to="/course-single">
                          <h5>{title}</h5>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/team-single" className="ca-name">
                              {brand}
                            </Link>
                          </div>
                          <div className="course-price">{price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
