import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../Slider/slider.css";

import { items } from "../../items/items";
import Items from "../Items";

const images = [
  {
    id: 1,
    text: "YUMBOX",
    bottomText: "СЕТ 21 934 ГРН",
    images: ["../../img/slider1.png", "../../img/slider.png", "../../img/Vector 1.png"]
  },
  {
    id: 2,
    images: ["../../img/slider2.jpg"]
  },
  {
    id: 3,
    images: ["../../img/slider3.jpg"]
  },
];

export default function MainPage() {
  const [orders, setOrders] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [sliderVisible, setSliderVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef(null);

  const handleAddToCart = (item) => {
    const existingOrder = orders.find((order) => order.id === item.id);

    if (existingOrder) {
      const updatedOrders = orders.map((order) =>
        order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = { ...item, quantity: 1 };
      setOrders([...orders, newOrder]);
    }
  };

  const handlePaginationClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  const formatBottomText = (text) => {
    const parts = text.split(" ");
    return (
      <>
        {parts.slice(0, -2).join(" ")}{" "}
        <span className="price-highlight">{parts.slice(-2).join(" ")}</span>
      </>
    );
  };

  return (
    <>
      {sliderVisible && (
        <div className="main-slider-wrapper">
          <div className="main-slider-container">
            <Splide
              options={{
                type: "fade",
                rewind: true,
                width: 1276,
                height: 500,
                perPage: 1,
                pagination: false,
                arrows: true,
              }}
              ref={splideRef}
              onMoved={(splide) => setActiveIndex(splide.index)}
            >
              {images.map((imageSet) => (
                <SplideSlide key={imageSet.id} autoWidth>
                  {imageSet.text && (
                    <div className="slide-text-container">
                      <p className="slide-text">{imageSet.text}</p>
                      {imageSet.additionalText && (
                        <p className="additional-text">{imageSet.additionalText}</p>
                      )}
                    </div>
                  )}
                  {imageSet.images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${imageSet.text} image ${index + 1}`}
                      className={`slide-image slide-image-${imageSet.id}-${index}`}
                      width={index === 2 && "100%"}
                      height={index === 2 && "100%"}
                    />
                  ))}
                  {imageSet.bottomText && (
                    <p className="slide-bottom-text">{formatBottomText(imageSet.bottomText)}</p>
                  )}
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="custom-pagination">
            {images.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => handlePaginationClick(index)}
              />
            ))}
          </div>
        </div>
      )}
      <div>
        <p className="text2">Найчастіше замовляють</p>
      </div>

      <Items items={filteredItems} addToCart={handleAddToCart} />
    </>
  );
}
