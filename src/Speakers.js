import React, {useEffect, useState} from "react";

import {Header} from './Header';
import {Menu} from './Menu';
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";

const Speakers = ({}) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const fetchData = async() => {
            await setTimeout(function() {
                console.log(isLoading);
            }, 1000);
            setIsLoading(false);
        };
        fetchData();
        setSpeakerList(SpeakerData);
        return() => {
            console.log('cleanup');
        };
    }, []);
    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
      };
    
      const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
      };
    
      const speakerListFiltered = isLoading
        ? []
        : speakerList
            .filter(
              ({ sat, sun }) =>
                (speakingSaturday && sat) || (speakingSunday && sun),
            )
            .sort(function (a, b) {
              if (a.firstName < b.firstName) {
                return -1;
              }
              if (a.firstName > b.firstName) {
                return 1;
              }
              return 0;
            });
    
      const heartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
        setSpeakerList(
          speakerList.map((item) => {
            if (item.id === sessionId) {
              return { ...item, favorite: favoriteValue };
            }
            return item;
          }),
        );
      };
    

    if (isLoading) return <div>Loading....</div>;
    return (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                          {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />);
              }
                          )};
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;