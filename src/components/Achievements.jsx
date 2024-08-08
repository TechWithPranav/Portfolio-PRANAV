import React from 'react';
import construction from '../assets/construction.gif'

const Achievements = () => {
  return (
    <div id="achievements" className='border border-red-600  max-w-sm mx-auto flex justify-center mt-14' >
      <img src={construction} className="w-full h-auto max-w-full" />
    </div>
  );
};

export default Achievements;
