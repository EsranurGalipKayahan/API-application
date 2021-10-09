"use-strict";
import { getAnAdvise } from "../utils/asyncUtils.js";
import { getDOMElement } from "../utils/DOMUtils.js";
import { randomNumber } from "../utils/functionUtils.js";
import { playMusic } from "./startHandler.js";
import { MUSIC_PATH, NUMBER_OF_MUSICS } from "../constants.js";

//Gets an random advice from API
export const handleDestiny = () => {
  getAnAdvise(false);
  changeTheMusic();
};
export const changeTheMusic = () => {
  const random = randomNumber(NUMBER_OF_MUSICS);

  getDOMElement("music").src = MUSIC_PATH + random + ".mp3";
  playMusic();
};
