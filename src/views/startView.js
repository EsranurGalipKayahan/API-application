import { createDOMElement } from "../utils/DOMUtils.js";
import {
  ADVICE_CONTANER_ID,
  ADVICE_CONTAINER_CLASS,
  TEXT_CLASS,
  ADVICE_TEXT_ID,
  AUTHOR_ELEMENT_ID,
  AUTHOR_CLASS,
  MUSIC_ELEMENT_ID,
  MUSIC_PATH,
  IMAGE_URL,
} from "../constants.js";

export const createAdviceContainer = () => {
  const adviceContainer = createDOMElement("div", {
    id: ADVICE_CONTANER_ID,
    cssClass: ADVICE_CONTAINER_CLASS,
  });
  const imageElement = createImageElement();
  const messageElement = createMessageElement(
    "There is no time to be bored in a world as beautiful as this..."
  );
  const authorElement = createAuthorElement("FB/QuotesAndSayings");
  adviceContainer.appendChild(imageElement);
  adviceContainer.appendChild(messageElement);
  adviceContainer.appendChild(authorElement);
  return adviceContainer;
};

export const createMessageElement = (message) => {
  const messageElement = createDOMElement("span", {
    id: ADVICE_TEXT_ID,
    cssClass: TEXT_CLASS,
  });
  messageElement.textContent = message;
  return messageElement;
};
export const createAuthorElement = (content) => {
  const authorElement = createDOMElement("span", {
    id: AUTHOR_ELEMENT_ID,
    cssClass: AUTHOR_CLASS,
  });
  authorElement.textContent = content;
  return authorElement;
};
export const createImageElement = () => {
  const imageElement = createDOMElement("img");
  imageElement.src = IMAGE_URL;
  return imageElement;
};
export const createAudioElement = () => {
  const audioElement = createDOMElement("audio", { id: MUSIC_ELEMENT_ID });
  audioElement.setAttribute("loop", true);
  audioElement.type = "audio/mp3";
  audioElement.src = MUSIC_PATH + "default.mp3";
  return audioElement;
};
