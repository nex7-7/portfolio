export const scrollToSection = (id) => {
  const element = document.querySelector(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
