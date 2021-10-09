"use strict";

import { handleAnAdvise } from "../handlers/categoryHandler.js";
//Listens to the get advise action
export const callAnAdvice = () => {
  handleAnAdvise();
};
