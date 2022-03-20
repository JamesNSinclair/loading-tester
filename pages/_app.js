import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/static/bootstrap.css';
import '../public/static/site.css';

export default function myApp({Component, pageProps}) {
    return <Component {...pageProps} />;
}