"use strict";
import { createDOMElement } from "../utils/DOMUtils.js";
import { callAnDestiny } from "../listeners/destinyListener.js";
import {
  DESTINY_CONTAINER_ID,
  DESTINY_CLASS,
  DESTINY_BUTTON_CLASS,
} from "../constants.js";

//creates destiny container
export const createDestinyAdviceContainer = () => {
  const destinyAdviceContainer = createDOMElement("div", {
    id: DESTINY_CONTAINER_ID,
    cssClass: DESTINY_CLASS,
  });
  const destinyButton = createDOMElement("button", {
    cssClass: DESTINY_BUTTON_CLASS,
  });
  const textContainer = createDOMElement("span");
  destinyButton.textContent = "Find The Action of My Destiny";
  destinyButton.addEventListener("click", callAnDestiny);

  textContainer.textContent =
    '"Destiny is not a matter of chance; it is a matter of choice"';
  destinyAdviceContainer.appendChild(textContainer);
  destinyAdviceContainer.appendChild(destinyButton);

  return destinyAdviceContainer;
};
