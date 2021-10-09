"use-strict";

import { getAnAdvise } from "../utils/asyncUtils.js";
import { getDOMElement, createDOMElement } from "../utils/DOMUtils.js";
import { ADVICE_CONTANER_ID, TEXT_CLASS } from "../constants.js";
import {
  createImageElement,
  createMessageElement,
} from "../views/startView.js";
import { changeTheMusic } from "./destinyHandler.js";

//Gets Advice from the API
export const handleAnAdvise = () => {
  getAnAdvise(true);
  changeTheMusic();
};

//According to response, changes web app
export const displayAdvice = (advice, link) => {
  const adviceContainer = getDOMElement(ADVICE_CONTANER_ID);
  adviceContainer.textContent = "";
  const imageElement = createImageElement();
  const adviseElement = createMessageElement(advice);

  adviceContainer.appendChild(imageElement);
  adviceContainer.appendChild(adviseElement);

  if (link !== undefined) {
    const linkElement = createDOMElement("a", { cssClass: TEXT_CLASS });
    linkElement.textContent = "Let's Do Now";
    linkElement.href = link;
    linkElement.target = "_blank";
    adviceContainer.appendChild(linkElement);
  }
};
