"use strict";
//to avoid using global variables, this function does creating element job
export const createDOMElement = (type, options) => {
  const { id, cssClass } = options || {};
  const element = document.createElement(type);
  if (id !== null) {
    element.id = id;
    element.setAttribute("data-testid", id);
  }
  if (cssClass !== null) {
    element.setAttribute("class", cssClass);
  }
  return element;
};

export const getDOMElement = (id) => {
  return document.getElementById(id);
};
export const clearTextContent = (element) => {
  element.textContent = "";
  return;
};
export const appendToContainer = (container, child) => {
  getDOMElement(container).appendChild(child);
};
