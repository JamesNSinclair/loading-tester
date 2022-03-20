import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';


const SpeakerDetail = ({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler,
}) => {
    console.log('SpeakerDetail')
  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        bwImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        colImg={`/static/speakers/Speaker-${id}.jpg`}
        alt={`${firstName}  ${lastName}`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, !favorite);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
       
             
        <span>{bio}</span>
      </div>
    </div>
  );
};

export default SpeakerDetail;
