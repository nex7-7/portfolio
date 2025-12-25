// TODO: Add the scroll effect on the text on click

import { useState } from "react";

export const ProjectText = ({ textItems, active, setActive }) => {
  function handleClick(id) {
    setActive(id);
  }

  return (
    <div className="overflow-x-hidden px-7 py-2 relative col-span-2 sm:hidden md:hidden">
      {textItems.map((textItem) => {
        let className;
        let bottomPos = 50 + (active - textItem.id) * 12;
        let padding =
          active - textItem.id >= 0
            ? (active - textItem.id) * 0.725
            : (textItem.id - active) * 0.725;
        if (textItem.id == active) {
          className = `uppercase cursor-pointer absolute text-5xl 2xl:text-[3.375rem] text-primary drop-shadow-light dark:drop-shadow-dark font-semibold transition-all ease-out duration-500`;
        } else {
          className = `uppercase cursor-pointer absolute text-4xl 2xl:text-[3rem] text-muted-foreground font-semibold transition-all ease-out duration-500`;
        }

        return (
          <p
            key={textItem.id}
            className={className}
            onClick={() => handleClick(textItem.id)}
            style={{ bottom: `${bottomPos}%`, paddingLeft: `${padding}rem` }}
          >
            {textItem.text}
          </p>
        );
      })}
    </div>
  );
};
