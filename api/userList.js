import client from "./client";

const endpoint = "/search/users?q=";
const singleuser = "/users/";
const getListings = (name, page) =>
  client.get(`${endpoint}${name}&page=${page}`);
const getUser = (name, page) => client.get(`${singleuser}${name}`);

export default {
  getListings,
  getUser,
};
