import { useState, useEffect } from "react";

export const scrollToSection = (id) => {
  const element = document.querySelector(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

export const heightCalc = () => {
  let targetContainer = document.querySelector("#heightCalc");
  if (targetContainer) {
    let ht = window.getComputedStyle(targetContainer).height;
    ht = parseFloat(ht);
    let wd = (9 * ht) / 16;
    let cards = document.querySelectorAll(".cards");
    cards.forEach((card) => {
      card.height = `${ht}px`;
      card.width = `${wd}px`;
      console.log(card.height);
    });
  }
};
