import React from 'react';
import aboutData from '../about-page.json';

function GroupMember (props) {
  return (
    <div className='group-member'>
      <h3>{props.name}</h3>
      <img className='member-pic' alt={props.name} src={props.image} />
      <p>{props.bio}</p>
      <a href={props.link} >Get in touch</a>
    </div>
  );
}

function AboutPage (props) {
  return (
    <main>
      <div className='intro' >
        <p>{aboutData.intro}</p>
      </div>
      {aboutData.groupMembers.map(member => {
        const { bio, name, image, link } = member;
        return <GroupMember bio={bio} name={name} image={image} link={link} />;
      })}
    </main>
  );
}

export default AboutPage;