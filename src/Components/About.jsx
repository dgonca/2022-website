import React, {useEffect, useState} from 'react';
import EducationTile

export default function About() {
  const [aboutTile, setAboutTile] = useState('about');

  return (
    <div className="second-wrapper">
      <div className="header">
        <h3>dg</h3>
        <div className="nav">
          <h4 onClick={() => setPage('home')}>HOME</h4>
          <h4 onClick={() => setPage('about')}>ABOUT</h4>
          <h4 onClick={() => setPage('projects')}>PROJECTS</h4>
          <h4 onClick={() => setPage('art')}>ART WORK</h4>
        </div>
      </div>
      <div className="inner-second-wrap">
        <div className="about-menu">
          <h4 onClick={() => setAboutTile('about')}>about dominique</h4>
          <h4 onClick={() => setAboutTile('education')}>education</h4>
          <h4>skills</h4>
          <h4>links</h4>
        </div>
        <div className="about-dom-section">
          {
            aboutTile == 'about' &&
            <>
              <img src="/profile_picture.jpg"/>
              <div className="bio">
                <h1>hello, my name is <br/> dominique goncalves</h1>
                <p>and I am a software developer, UX designer, and artist. I am a Co-Founder and Senior Product Design Engineer at <a href="https://ekta.co">Ekta Flow</a> where I help build a range of web and mobile applications for our clients mostly in the manufacturing industry. I belive that art and technology balance each other and pairing the two learning styles together in a tech company enhances learning, worklife and productivity.</p>
              </div>
            </>
          }
          {
            aboutTile == 'education' &&
            <>
              <EducationTile level='undergrad'/>
              <EducationTile level='bootcamp' />
              <EducationTile level='grad' />
            </>
          }
        </div>
      </div>
    </div>

  )
}
