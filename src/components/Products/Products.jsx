import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { products } from "../../constants";
import { FaAmazon, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Premium Collection</h2>
          <p className="section-subtitle">
            Discover our exquisite range of luxury lighting solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="products-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="product-category">{product.category}</div>

              <div className="product-carousel">
                <Slider {...imageSliderSettings}>
                  {product.images.map((image, idx) => (
                    <div key={idx} className="carousel-slide">
                      <div className="product-image">
                        <img src={image} alt={`${product.name} - ${idx + 1}`} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-link"
                  >
                    <FaAmazon />
                    <span>Buy on Amazon</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
