import Image from "next/image";

// components
import { CardButton } from "./ui/CardButton";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const ProjectCard = ({ textItems, active, setActive }) => {
  const maxLen = textItems.length;
  function handleClick(id) {
    if (id == 0) id = 4;
    else if (id == maxLen) id = 1;
    setActive(id);
  }

  return (
    <div className="flex justify-end items-center h-full py-2 pr-7 sm:px-0 md:px-0 ">
      <div className="relative flex flex-row items-center justify-between h-full w-full">
        <div className="mr-2">
          <ArrowLeftIcon
            className="hidden sm:block md:block h-6 w-6 text-muted-foreground"
            onClick={() => handleClick(active - 1)}
          />
        </div>
        {textItems.map((textItem) => {
          const id = textItem.id;
          const title = textItem.text;
          const description = textItem.description;
          const img = textItem.img;
          const vid = textItem.vid;
          const buttons = textItem.buttons;

          return (
            <div
              key={id}
              className={
                active === id
                  ? "cards bg-background h-full lg:w-full p-2 border-2 rounded-lg shadow-md dark:shadow-test opacity-100 transition-opacity ease-out duration-500"
                  : "hidden opacity-0"
              }
            >
              <div className="bg-gray-100 dark:bg-gray-900 h-3/5 rounded-md flex items-center justify-center relative">
                {img && (
                  <Image
                    src={img}
                    fill={true}
                    alt={`${title} Image`}
                    className="object-cover"
                  />
                )}
                {vid && (
                  <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover"
                    type="video/MP4"
                  ></video>
                )}
              </div>
              <div className="text-primary h-2/5 px-1 py-1 2xl:py-4 flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl 2xl:text-4xl font-sans font-semibold uppercase text-clip">
                    {title}
                  </span>
                  <div className="text-sm 2xl:text-xl leading-4 2xl:leading-none text-muted-foreground pt-1.5 2xl:pt-3.5 text-ellipsis">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-end items-end gap-2">
                  {buttons.map((button) => (
                    <CardButton
                      name={button.name}
                      link={button.link}
                      key={button.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <div className="ml-2">
          <ArrowRightIcon
            className="hidden sm:block md:block h-6 w-6 text-muted-foreground"
            onClick={() => handleClick(active + 1)}
          />
        </div>
      </div>
    </div>
  );
};
