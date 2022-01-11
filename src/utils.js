import axios from "axios";

const myAPI = axios.create({
  baseURL: `https://meeple-cafe.herokuapp.com/api`,
});

const signIn = (details) => {
  return myAPI.get("/users").then(({ data }) => {
    return data.users.some((user) => user.username === details);
  });
};

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
    path += query;
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

export {
  signIn,
  getProfileInfo,
  postReview,
  getCategories,
  postCategory,
  getReviews,
  getAReview,
  patchReview,
  postComment,
};
