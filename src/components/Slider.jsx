import React, {useState, useEffect} from 'react';


const Slider = () => {
    const images = [
        'images/image1.png',
        'images/image2.png',
        'images/image3.png',
        'images/image4.png',
        'images/image5.png'
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1;
                return res;
            });
        }, 3000);
        return () => clearInterval();
    });
    
    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                    key={prevImgIndex}>
                <img src={images[prevImgIndex]} alt="" />
            </div>
            <div className="slider-img"
                    key={activeIndex}>
                <img src={images[activeIndex]} alt="" />
            </div>
            <div className="slider-img slider-img-next"
                    key={nextImgIndex}>
                <img src={images[nextImgIndex]} alt="" />
            </div>
        </div>
    )
}

export default Slider;