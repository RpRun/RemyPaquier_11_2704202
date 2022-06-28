import "./ImageSlider.scss";
import { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import ImageCounter from "../ImageCounter/ImageCounter";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  if (slides.length === 1) {
    return (
      <section className="slider">
     
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide} alt={`cliché de la maison - ${index}`} />}
          </div>
        );
      })}
       <ImageCounter index={current+1} text={length}/>
      
    </section>

    )
  }

  return (
    <section className="slider">
      <IoChevronBackSharp className="left-arrow" onClick={prevSlide} />
      <IoChevronForwardSharp className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide} alt={`cliché de la maison ${index}`} />}
          </div>
        );
      })}
       <ImageCounter index={current+1} text={length}/>
      
    </section>
       
  );
};

export default ImageSlider;
