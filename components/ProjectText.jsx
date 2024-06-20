// TODO: Add the scroll effect on the text on click

import { useState } from "react";

export const ProjectText = ({ textItems, active, setActive }) => {
  function handleClick(id) {
    setActive(id);
  }

  return (
    <div id="heightCalc" className="overflow-x-hidden px-7 py-2 relative col-span-2 sm:hidden md:hidden">
      {textItems.map((textItem) => {
        let className;
        let bottomPos = (50 + ((active - textItem.id) * 10))
        if (textItem.id == active) {
          className = `absolute text-4xl text-primary drop-shadow-light dark:drop-shadow-dark font-semibold transition-all ease-out duration-500`;
        } else {
          className =
            `absolute text-4xl text-muted-foreground font-semibold transition-all ease-out duration-500`;
        }

        return (
          <p
            key={textItem.id}
            className={className}
            onClick={() => handleClick(textItem.id)}
            style={{bottom: `${bottomPos}%`}}
          >
            {textItem.text}
          </p>
        );
      })}
    </div>
  );
};
