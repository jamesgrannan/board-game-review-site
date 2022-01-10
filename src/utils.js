import axios from "axios";

const myAPI = axios.create({
  baseURL: `https://meeple-cafe.herokuapp.com/api`,
});

const signIn = (details) => {
  return myAPI.get("/users").then(({ data }) => {
    return data.users.some((user) => user.username === details);
  });
};

const getProfilePic = (user) => {
  return myAPI.get(`/users/${user}`).then(({ data }) => {
    return data.user.avatar_url;
  });
};

export { signIn, getProfilePic };
