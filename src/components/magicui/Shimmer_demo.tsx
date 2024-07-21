import ShimmerButton from "../magicui/ShimmerButton";
import React from 'react'

export function ShimmerButtonDemo(props) {
  return (
    <div className="z-10 flex items-center justify-start mr-6 mt-4">
      <ShimmerButton className="shadow-2xl ">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {props.btn}
        </span>
      </ShimmerButton>
    </div>
  );
}
