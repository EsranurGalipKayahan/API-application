"use strict";

import {
  createAdviceContainer,
  createAudioElement,
} from "../views/startView.js";
import { createCategoryAdviceContainer } from "../views/categoryView.js";
import { createDestinyAdviceContainer } from "../views/destinyView.js";
import { MAIN_CONTAINER_ID } from "../constants.js";
import { appendToContainer, getDOMElement } from "../utils/DOMUtils.js";

//creates dynamic contents' elements
export const createPage = () => {
  const categoryAdviceContainer = createCategoryAdviceContainer();
  const adviceContainer = createAdviceContainer();
  const destinyAdviceContainer = createDestinyAdviceContainer();
  const musicElement = createAudioElement();

  appendToContainer(MAIN_CONTAINER_ID, categoryAdviceContainer);
  appendToContainer(MAIN_CONTAINER_ID, adviceContainer);
  appendToContainer(MAIN_CONTAINER_ID, destinyAdviceContainer);

  document.body.addEventListener("click", playMusic);
  document.body.appendChild(musicElement);
};
export const playMusic = () => {
  getDOMElement("music").play();
};
