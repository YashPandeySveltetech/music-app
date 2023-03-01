// import { STORAGES } from "./appConstants";

export const setLocalStorageItem = (key, value) => {
  try {
    const stringify = JSON.stringify(value);
    localStorage.setItem(key, stringify);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

export const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (e) {
    console.error(e);
    return item;
  }
};

export const logoutFromLocalStorage = () => {
  removeLocalStorageItem("token");
  removeLocalStorageItem("id");
};

export const loginToLocalStorage = (token, id) => {
  setLocalStorageItem("token", token);
  setLocalStorageItem("id", id);
};
