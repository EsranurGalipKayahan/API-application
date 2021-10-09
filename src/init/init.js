"use-strict";
import { createPage, playMusic } from "../handlers/startHandler.js";
//creates dynamic page
const main = () => {
  createPage();
};
window.addEventListener("load", main);
