"use-strict";

import { handleDestiny } from "../handlers/destinyHandler.js";
//Listens to the get destiny advise action
export const callAnDestiny = () => {
  handleDestiny();
};
