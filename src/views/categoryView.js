"use strict";

import { createDOMElement, getDOMElement } from "../utils/DOMUtils.js";
import { callAnAdvice } from "../listeners/categoryListener.js";
import { types } from "../data.js";
import { capitalizeFirstLetter } from "../utils/functionUtils.js";
import {
  CATEGORY_CONTAINER_ID,
  CATEGORY_CLASS,
  ADVISE_BUTTON_CLASS,
  TYPE_CLASS,
  TYPE_LIST_ID,
  ACTIVITY_LIST_ID,
} from "../constants.js";

export function createCategoryAdviceContainer() {
  const categoryAdviceContainer = createDOMElement("div", {
    id: CATEGORY_CONTAINER_ID,
    cssClass: CATEGORY_CLASS,
  });
  const categoryTextElement = createDOMElement("span");
  const listElement = createList();

  categoryTextElement.textContent = "CATEGORY : ";
  categoryAdviceContainer.appendChild(categoryTextElement);
  categoryAdviceContainer.appendChild(listElement);
  categoryAdviceContainer.appendChild(createGetButton());

  return categoryAdviceContainer;
}
export function createGetButton() {
  const buttonElement = createDOMElement("button", {
    cssClass: ADVISE_BUTTON_CLASS,
  });
  buttonElement.textContent = "Give me an Advise!";
  buttonElement.type = "submit";
  buttonElement.addEventListener("click", callAnAdvice);
  return buttonElement;
}
//creates select list
export function createList() {
  const listElement = createDOMElement("select", {
    id: TYPE_LIST_ID,
    cssClass: TYPE_CLASS,
  });

  types.forEach((element) => {
    const optionElement = createDOMElement("option");
    optionElement.value = element;
    optionElement.textContent = capitalizeFirstLetter(element);
    listElement.appendChild(optionElement);
  });

  return listElement;
}
export const getType = () => {
  const listElement = getDOMElement(ACTIVITY_LIST_ID);
  return listElement.value;
};
