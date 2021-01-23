import React, { Fragment } from 'react';
import aboutData from '../about-page.json';
import Header from './Header';

function GroupMember (props) {
  return (
    <div className='group-member'>
      {props.image && <img className='member-pic' alt={props.name} src={props.image} />}
      <div className='member-bio'>
        <h3>{props.name}</h3>
        <p>{props.bio}</p>
        <a href={props.link} >Get in touch</a>
      </div>
    </div>
  );
}

function AboutPage (props) {
  return (
    <Fragment>
      <Header />
      <main className="info-page">
        <h2>About</h2>
        <p>{aboutData.intro}</p>
        <h2>The team</h2>
        {aboutData.groupMembers.map(member => {
          const { bio, name, image, link } = member;
          return <GroupMember key={name} bio={bio} name={name} image={image} link={link} />;
        })}
      </main>
    </Fragment>
  );
}

export default AboutPage;