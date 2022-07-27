import React, {useState, useEffect} from 'react';
import './App.scss';
import WebFont from 'webfontloader';

export default function EducationTile() {
  const [school, setSchool] = useState('')
  const [longSchool, setLongSchool] = useState('')
  const [year, setYear] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (props.level == 'undergrad'){
      setSchool('SAIC');
      setLongSchool('School of the Art Institute of Chicago')
      setYear('2018');
      setTitle("BFA in Studio, Photography and Art + Technology")
    } else if (props.level == 'bootcamp'){
      setSchool('DBC');
      setLongSchool('Dev Bootcamp');
      setYear('2017');
      setTitle('Web Development Certificate, Full Stack Development');
    } else if (props.level == 'grad') {
      setSchool('MICA');
      setLongSchool('Maryland Institute College of Art');
      setYear('2021');
      setTitle('Master in Professional Studies, UX Design');
    }
  }, [props.level])

  return(
      <div className="education-tile">
        <h1 className="school-logo">{school}</h1>
        <h3>{longSchool}</h3>
        <h5>{title}, {year}</h5>
      </div>
  )
}
