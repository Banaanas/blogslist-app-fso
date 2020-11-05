import blogsService from "../../services/blogs";
import usersService from "../../services/users";
import actionTypes from "./actions-types";
import displayToast from "../../utils/displayToast";

/* ACTIONS CREATORS */

// GET ALL USERS
const getAllUsers = () => async (dispatch) => {
  // Async Action
  const allUsers = await usersService.getAllUsers();
  dispatch({
    type: actionTypes.GET_ALL_USERS,
    allUsers,
  });
};

// GET LOGGED IN USER
const getLoggedInUser = (user) => ({
  type: actionTypes.USER_LOGGED_IN,
  user,
});

// GET ALL BLOGS ALL USERS
const getBlogsAllUsers = () => async (dispatch) => {
  // Async Action
  const allBlogs = await blogsService.getBlogsAllUsers();
  dispatch({
    type: actionTypes.GET_BLOGS_ALL_USERS,
    allBlogs,
  });
};

// GET ALL BLOGS SINGLE USER
// Single User is first retrieved. Then, at the Reducer step, All Blogs
// are retrieved. That's why, to get All Blogs from a Single User, we must
// get Single User first (which includes all User's Blogs)
const getBlogsSingleUser = (id) => async (dispatch) => {
  // Async Action
  const singleUser = await usersService.getUser(id);
  dispatch({
    type: actionTypes.GET_BLOGS_SINGLE_USER, // <-- Single User
    singleUser,
  });
};

// ADD BLOG
const addBlog = (content) => async (dispatch) => {
  try {
    // Async Action
    const blog = await blogsService.create(content);
    dispatch({
      type: actionTypes.ADD_BLOG,
      blog: {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes,
        id: blog.id,
      },
    });

    // Display Success Toast
    displayToast(
      "Blog Added.",
      `You've successfully added ${blog.title}.`,
      "success",
    );
  } catch (e) {
    // Display Error Toast
    displayToast("Error", "Something wrong happened with the Server", "error");
  }
};

// LIKE BLOG
// Unlike general Update, Blog Like is authorized without Authentication
const likeBlog = (id, newObject) => async (dispatch) => {
  try {
    // Async Action
    const blog = await blogsService.like(id, newObject);
    dispatch({
      type: actionTypes.LIKE_BLOG,
      updatedBlog: blog,
    });

    // Display Success Toast
    displayToast("Successful Vote.", "+1 for the Blog.", "success");
  } catch (e) {
    // Display Error Toast
    displayToast("Error", "Something wrong happened with the Server", "error");
  }
};

// DELETE BLOG
const deleteBlog = (id) => async (dispatch) => {
  try {
    // Async Action
    await blogsService.blogDelete(id);
    dispatch({
      type: actionTypes.DELETE_BLOG,
      deletedBlogID: id,
    });

    // Display Success Toast
    displayToast(
      "Successful Deletion.",
      "You've successfully deleted the Blog.",
      "success",
    );
  } catch (e) {
    // Display Error Toast
    displayToast("Error", "Something wrong happened with the Server", "error");
  }
};

// HIDE NOTIFICATION
const hideNotification = () => async (dispatch) => {
  // Async Action
  dispatch({
    type: actionTypes.HIDE_NOTIFICATION,
  });
};

// Variable to store setTimeOut Id (to clear it after)
// The objective is avoiding the Notification bug
// Bug --> For example,  3 Likes in a row for the same Blog
// with a 5 seconds Notification, but only 3 seconds of
// effective notification because the last Display Notification (dispatch)
// was hidden by the first Hide Notification (dispatch).
let timeoutID;

// DISPLAY NOTIFICATION
const displayNotification = (severity, message) => {
  // If vote and timeoutID, clear the precedent and not executed setTimeOut
  // in order to avoid the Notification bug
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  // Async Actions (2 actions)
  return async (dispatch) => {
    // Display Notification
    dispatch({
      type: actionTypes.DISPLAY_NOTIFICATION,
      notification: {
        severity,
        message,
      },
    });

    // Hide Notification
    // Variable to store setTimeOut Id (to clear it after)
    timeoutID = await setTimeout(() => {
      dispatch(hideNotification(""));
    }, 5000);
  };
};

export default {
  getAllUsers,
  getBlogsAllUsers,
  getBlogsSingleUser,
  getLoggedInUser,
  displayNotification,
  addBlog,
  likeBlog,
  deleteBlog,
};
