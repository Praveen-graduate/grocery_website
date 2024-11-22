import React, { useState } from 'react';
import ima1 from './img/category-thumb-1.jpg';
import ima2 from './img/category-thumb-2.jpg';
import ima3 from './img/category-thumb-3.jpg';
import ima4 from './img/category-thumb-4.jpg';
import ima5 from './img/category-thumb-5.jpg';
import ima6 from './img/category-thumb-6.jpg';
import ima7 from './img/category-thumb-7.jpg';
import ima8 from './img/category-thumb-8.jpg';
import './Style.css';

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { image: ima1, title: 'Fruits & Veges' },
    { image: ima2, title: 'Breads & Sweets' },
    { image: ima3, title: 'Fruits & Veges' },
    { image: ima4, title: 'Beverages' },
    { image: ima5, title: 'Meat Products' },
    { image: ima6, title: 'Breads' },
    { image: ima7, title: 'Fruits & Veges' },
    { image: ima8, title: 'Breads & Sweets' },
  ];

  const slidesToShow = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, categories.length - slidesToShow)
    );
  };
  
  

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <button onClick={handlePrev} className="btn btn-yellow me-2">
                  ❮
                </button>
                <button onClick={handleNext} className="btn btn-yellow">
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="d-flex overflow-hidden">
              <div
                className="category-carousel d-flex"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                  transition: '0.5s',
                }}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="category-item text-center"
                    style={{
                      flex: `0 0 ${100 / slidesToShow}%`,
                      maxWidth: `${100 / slidesToShow}%`,
                    }}
                  >
                    <a href="category.html" className="nav-link">
                      <img
                        src={category.image}
                        className="rounded-circle"
                        alt={category.title}
                      />
                      <h4 className="fs-6 mt-3 fw-normal category-title">
                        {category.title}
                      </h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
