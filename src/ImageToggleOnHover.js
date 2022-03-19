import React, {useRef} from "react";

const ImageToToggle = ({bwImg, colImg}) => {
    const imageRef = useRef(null)
    return(
        <img
         onMouseOver={() => {imageRef.current.src = colImg; }}
    onMouseOut={() => {imageRef.current.src = bwImg; }}
         src={bwImg} alt="" ref={imageRef} />
    )
}

export default ImageToToggle