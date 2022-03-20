import React, {useState} from 'react';
import { useConfigContext } from "./ThemeContext";





const SpeakerDays = () => {
    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
      };
    
      const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
      };
    

    const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
    const context = useConfigContext();

return (
context.showSpeakerSpeakingDays === false ? null : (
    <div className="hide">
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChangeSaturday}
            checked={speakingSaturday}
          />
          Saturday Speakers
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChangeSunday}
            checked={speakingSunday}
          />
          Sunday Speakers
        </label>
      </div>
    </div>
)
  );
};

export default SpeakerDays;