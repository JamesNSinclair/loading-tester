import React from "react";
import ImageToToggleOnScroll from "../src/ImageToggleOnScroll";


const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1124, 187, 1269, 1530].map((speakerId) => {
                return (
                    <div key={speakerId}>
                        <ImageToToggleOnScroll
                        bwImg={`../static/speakers/bw/Speaker-${speakerId}.jpg`} colImg={`../static/speakers/Speaker-${speakerId}.jpg`} alt=""/>
                            </div>
                );
            })}
        </div> 
    );
};

export default ImageChangeOnScroll;