import React, {useRef, useState, useEffect} from "react";

const ImageToToggleOnScroll = ({colImg, bwImg}) => {
    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect= imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(false);

    const scrollHandler = () => {
        setInView(isInView());
    };

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener('scroll', scrollHandler);
    
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    };
    }, []);

    return(
        <img src={isLoading ? 'https://cdn.dribbble.com/users/28494/screenshots/10485911/media/cb3039bdcf16032e06fc6ca690fca8d7.gif' : inView ? colImg : bwImg} alt="" ref={imageRef} />
    );
};

export default ImageToToggleOnScroll;