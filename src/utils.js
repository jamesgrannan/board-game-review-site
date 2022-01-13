import axios from "axios";

const myAPI = axios.create({
  baseURL: `https://meeple-cafe.herokuapp.com/api`,
});

const getProfileInfo = (user) => {
  return myAPI.get(`/users/${user}`).then(({ data }) => {
    return data.user;
  });
};

const postReview = (review, currentUser) => {
  return myAPI
    .post(`/reviews`, { ...review, owner: currentUser })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.dir(err));
};

const getCategories = () => {
  return myAPI.get("categories").then(({ data }) => data.categories);
};

const postCategory = (category) => {
  const req = { ...category };
  req.slug = req.slug.toLowerCase();
  return myAPI.post("categories", req).then(({ data }) => data.category);
};

const getReviews = (query) => {
  let path = "reviews";
  if (query) {
    if (query.length > 0) {
      path += "?" + query;
    }
  }

  return myAPI.get(path).then(({ data }) => data.reviews);
};

const getAReview = (id) => {
  return myAPI.get(`/reviews/${id}`).then(({ data }) => data.review);
};

const patchReview = (votes, id) => {
  return myAPI
    .patch(`/reviews/${id}`, { inc_votes: votes })
    .then(({ data }) => data.review);
};

const postComment = (comment, currentUser, review_id) => {
  return myAPI
    .post(`/reviews/${review_id}/comments`, {
      username: currentUser,
      body: comment,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.dir(err));
};

const getComments = (review_id) => {
  return myAPI
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => data.comments);
};

const patchComment = (votes, id) => {
  return myAPI
    .patch(`/comments/${id}`, { inc_votes: votes })
    .then(({ data }) => data.comment)
    .catch((err) => {
      console.dir(err);
    });
};

const deleteReview = (id) => {
  return myAPI.delete(`/reviews/${id}`);
};

const deleteComment = (id) => {
  return myAPI.delete(`/comments/${id}`);
};

const getUsers = () => {
  return myAPI.get("users").then(({ data }) => data.users);
};

export {
  getProfileInfo,
  postReview,
  getCategories,
  postCategory,
  getReviews,
  getAReview,
  patchReview,
  postComment,
  getComments,
  patchComment,
  deleteReview,
  deleteComment,
  getUsers,
};
