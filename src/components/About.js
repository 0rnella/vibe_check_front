import React from 'react';

function AboutPage (props) {
  return (
    <main>
      <div className='intro' >
        <p>Intro paragraph</p>
      </div>
      <div className='group-member'>
        <img className='member-pic' />
        <p>Person's description</p>
      </div>
    </main>
  );
}

export default AboutPage;