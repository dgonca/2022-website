import logo from './logo.svg';
import './App.scss';
import WebFont from 'webfontloader';
import React, {useState, useEffect} from 'react';
import About from './Components/About';

export default function Home() {
  const [page, setPage] = useState('home');
  // const [aboutTile, setAboutTile] = useState('about');

  useEffect(() => {
  WebFont.load({
    google: {
      families: ['Chicle', 'Playfair Display', 'Bodoni Moda']
    }
  });
 }, []);

  return (
    <div className="App">
    {
      page == 'home' &&
      <div className="first-wrapper">
        <div className="cta">
          <div className="row1">
            <div className="row1text">
              <h1>dominique goncalves</h1>
              <h3>programmer - designer - dadaist</h3>
            </div>
            <img src="/Icon.png"/>
          </div>
          <div className="row2text">
            <h3 onClick={() => setPage('about')}>ABOUT</h3>
            <h3 onClick={() => setPage('projects')}>PROJECTS</h3>
            <h3 onClick={() => setPage('art')}>ART WORK</h3>
          </div>
        </div>
      </div>
    }

      {
        page == 'about' &&
        <About />
      }

    </div>
  );
}



// https://coolors.co/dbb3b1-9b5960-a67f8e-fce9f1-6c534e-271719
// https://fonts.google.com/specimen/Playfair+Display
// https://fonts.google.com/specimen/Inria+Serif
// https://fonts.google.com/specimen/BioRhyme+Expanded
// https://fonts.google.com/specimen/Aclonica
// https://fonts.google.com/specimen/Junge
// https://fonts.google.com/specimen/Righteous#standard-styles
// https://fonts.google.com/specimen/Shippori+Mincho
// https://fonts.google.com/specimen/Chicle
// https://fonts.google.com/specimen/Bodoni+Moda
// https://fonts.google.com/specimen/Libre+Baskerville
