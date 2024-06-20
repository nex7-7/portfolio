export const RotaryKnob = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <div className="relative">
        <div className=" bg-transparent h-50 w-40 hover:rotate-45 transition-all ease-out duration-1000 box-border">
          <svg
            className="h-40 w-40"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="160" height="160" fill="white" fill-opacity="0" />
            <circle
              cx="80"
              cy="80"
              r="80"
              className="fill-foreground shadow-md dark:shadow-test"
            />
            <circle
              cx="145"
              cy="80"
              r="5"
              className="fill-primary-foreground shadow-test"
            />
            <circle
              cx="136"
              cy="47"
              r="5"
              className="fill-primary-foreground"
            />
            <circle
              cx="24"
              cy="112"
              r="5"
              className="fill-primary-foreground"
            />
            <circle
              cx="47"
              cy="136"
              r="5"
              className="fill-primary-foreground"
            />
            <circle cx="80" cy="15" r="5" className="fill-primary-foreground" />
            <circle
              cx="80"
              cy="145"
              r="5"
              className="fill-primary-foreground"
            />
            <circle
              cx="112"
              cy="136"
              r="5"
              className="fill-primary-foreground"
            />
            <circle cx="47" cy="24" r="5" className="fill-primary-foreground" />
            <circle cx="24" cy="47" r="5" className="fill-primary-foreground" />
            <circle
              cx="136"
              cy="112"
              r="5"
              className="fill-primary-foreground"
            />
            <circle
              cx="112"
              cy="24"
              r="5"
              className="fill-primary-foreground"
            />
            <circle cx="15" cy="80" r="5" className="fill-primary-foreground" />
          </svg>
          <span>TEST1</span>
          <span>TEST2</span>
          <span>TEST3</span>
          <span>TEST4</span>
        </div>
        <div className="absolute z-10 bottom-0 h-40 w-20 bg-background"></div>
      </div>
    </div>
  );
};
