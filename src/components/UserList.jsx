import UserCard from "./UserCard";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { getUsers } from "../utils";
import styles from "../css-modules/userList.module.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        setError("Sorry, couldn't load users");
      });
  }, []);

  return (
    <div className={styles.userPage}>
      <Nav />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Our Users:</h2>
          <ul className={styles.UserListLi}>
            {users.map((a_user) => {
              return (
                <li key={a_user.username}>
                  <UserCard username={a_user.username} />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserList;
