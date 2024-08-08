import React from 'react';
import ShimmerButton from '../magicui/ShimmerButton';

export function ShimmerButtonDemo(props) {
  const handleClick = () => {
    if (props.btn === "Resume") {
      window.open("https://drive.google.com/file/d/13QIlUuwCPbZuYvGqS-ACo4rhc93fbrCE/view?usp=sharing", "_blank");
    } else if (props.btn === "My Projects") {
      const element = document.getElementById('works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="z-10 flex items-center justify-start mr-6 mt-4">
      <ShimmerButton className="shadow-2xl" onClick={handleClick}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {props.btn}
        </span>
      </ShimmerButton>
    </div>
  );
}
