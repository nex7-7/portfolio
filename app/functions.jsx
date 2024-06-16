export const scrollToSection = (id) => {
  const element = document.querySelector(id);
  console.log(element);
  element?.scrollIntoView({ behavior: "smooth" });
};
