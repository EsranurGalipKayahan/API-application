"use-strict";
import { displayAdvice } from "../handlers/categoryHandler.js";
import { getType } from "../views/categoryView.js";
import { API_URL, URL_PARAMETER } from "../constants.js";
//Via requestData function, fecthing data form url
export const getAnAdvise = async (type) => {
  let activityType = "";

  if (type) {
    activityType = "type=" + getType();
  }

  const endPoint = API_URL + URL_PARAMETER + activityType;

  try {
    const data = await requestData(endPoint);

    if (data.link.length > 0) {
      displayAdvice(data.activity, data.link);
    } else {
      displayAdvice(data.activity);
    }
  } catch (error) {
    console.log(error);
  }
};
//Requesting data from url
const requestData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};
