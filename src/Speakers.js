import React, {useEffect, useState, useContext} from "react";

import {Header} from './Header';
import {Menu} from './Menu';
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import SpeakerDays from "./SpeakerDays";


const Speakers = ({}) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsLoading(true);
        const fetchData = async() => {
            await setTimeout(function() {
                 setIsLoading(false);
                setSpeakerList(SpeakerData);
            }, 5000);
         
        };
        fetchData();
        return() => {
            console.log('cleanup');
        };
    }, []);

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
            <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
              <SpeakerDays />
            </div>
            <div className="row">
              <div className="card-deck">
                {speakerListFiltered.map(
                  ({ id, firstName, lastName, bio, favorite }) => {
                    return (
                      <SpeakerDetail
                        key={id}
                        id={id}
                        favorite={favorite}
                        onHeartFavoriteHandler={heartFavoriteHandler}
                        firstName={firstName}
                        lastName={lastName}
                        bio={bio}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      );
                };

export default Speakers;