import { CardButton } from "./ui/CardButton";
// animations

export const ProjectView = ({ title, description, buttons }) => {
  const projectShow = (link) => {
    if (link) {
      window.open(link);
    } else {
      toast("Coming Soon!", {
        style: {
          background: "hsl(var(--background))",
          color: "hsl(var(--primary))",
          border: "2px solid hsl(var(--border))",
        },
      });
    }
  };

  return (
    <div className="h-svh flex justify-center items-center">
      <div className="bg-background aspect-laptop sm:aspect-vertical h-4/5 p-2 border-2 rounded-lg shadow-md dark:shadow-test">
        <div className="bg-gray-100 dark:bg-gray-900 h-3/5 rounded-lg flex items-center justify-center text-3xl">
          Placeholder
        </div>
        <div className="text-primary h-2/5 px-1 py-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-sans font-semibold uppercase">
              {title}
            </span>
            <div className="text-md leading-4 text-muted-foreground pt-1.5">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {buttons.map((button) => (
              <CardButton name={button.name} link={button.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
