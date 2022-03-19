import React from "react";
import ImageToToggle from "../src/ImageToggleOnHover";

const ImageChangeOnMouseOver = () => {
    return (
        <>    
        <p>'ello World</p>
            <ImageToToggle bwImg="..\static\speakers\bw/Speaker-187.jpg" colImg="..\static\speakers/Speaker-187.jpg"/>
    <br/>
    <ImageToToggle bwImg="..\static\speakers\bw/Speaker-1124.jpg" colImg="..\static\speakers\/Speaker-1124.jpg"/>
        </>
    )
}

export default ImageChangeOnMouseOver