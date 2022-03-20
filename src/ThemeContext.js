import React, {useContext, useState} from "react";

const ConfigContext = React.createContext();
const ConfigContextUpdate = React.createContext();

export function useConfigContext() {
    return useContext(ConfigContext);
}


export function useUpdateConfigContext() {
    return useContext(ConfigContextUpdate);
}

const Themeprovider = ({children}) => {
    

const [showSignMeUp, setShowSignMeUp] = useState(false);
const  [showSpeakerSpeakingDays, setShowSpeakerSpeakingDays] = useState(false);



const configValue = {
 showSignMeUp,
 showSpeakerSpeakingDays
};

const toggleSignUp = (toggleTarget) => {
    switch(toggleTarget) {
        case 'showSignMeUp':
            setShowSignMeUp(!showSignMeUp);
            break;
        case 'showSpeakerSpeakingDays':
            setShowSpeakerSpeakingDays(!showSpeakerSpeakingDays);
            break;
        default: null;
    }  
};




return (
    <ConfigContext.Provider value={configValue}>
        <ConfigContextUpdate.Provider value={toggleSignUp}>
    {children}
    </ConfigContextUpdate.Provider>
    </ConfigContext.Provider>
);
};

export default Themeprovider;