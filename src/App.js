import React, {useState} from 'react';
import Home from './Home';
import Speakers from './Speakers';
import Themeprovider from './ThemeContext';

const pageToShow = pageName => {
    if (pageName === "Home") return <Home></Home>;
    if (pageName === "Speakers") return <Speakers></Speakers>;
    return <div>Not Found</div>;
};

const App = ({pageName}) => {
    console.log('App')
    return (  <Themeprovider>
  <div>{pageToShow(pageName)}</div>;
 </Themeprovider>
 );
};

export default App;