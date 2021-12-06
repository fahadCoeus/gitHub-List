import client from "./client";

const endpoint = "/search/users?q=";
const singleuser = "/users/";
const rate_limit = "/rate_limit"
const licenses = "/licenses"
const organizations = "/organizations"


const getListings = (name, page) => client.get(`${endpoint}${name}&page=${page}`);
const getUser = (name, page) => client.get(`${singleuser}${name}`);
const getLimitList=()=>client.get(`${rate_limit}`);
const getLicensesList=()=>client.get(`${licenses}`);
const getorganizationsList=()=>client.get(`${organizations}`);


export default {
  getListings,
  getUser,
  getLimitList,
  getLicensesList,
  getorganizationsList
};
