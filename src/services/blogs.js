import axios from "axios";

// baseUrl
const baseUrl = "/api/blogs";

// SET TOKEN
let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

// GET ALL BLOGS ALL USERS
const getBlogsAllUsers = async () => {
  // (For example purpose, authentication has not been set for this route)
  const response = await axios.get(baseUrl);
  return response.data;
};

// GET SINGLE BLOG
const getBlog = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

// CREATE BLOG
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

// UPDATE BLOG
const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

// LIKE BLOG - (For not signed up Users to vote, authentication has not been set for this route)
const like = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/like/${id}`, newObject);
  return response.data;
};

// DELETE BLOG
const blogDelete = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {
  setToken,
  getBlogsAllUsers,
  getBlog,
  create,
  update,
  like,
  blogDelete,
};
