import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { getUser } from "../../../features/users/usersSlice";
import { db } from "../../../firebase-config";
import useDebounce from "../../../hooks/useDebounce";
import {
  useAppDispatch,
  useTypedSelector,
} from "../../../hooks/useTypedSelector";
import { InputChangeEventHandler, User } from "../../../typing";
import * as styles from "./ChatSearch.styles";

export function ChatSearch() {
  const { loggedUser } = useTypedSelector((state) => state.users);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState<User[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [err, setErr] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const debouncedValue = useDebounce(username, 500);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (debouncedValue) {
      handleSearch(debouncedValue);
    }
  }, [debouncedValue]);

  const onChange: InputChangeEventHandler = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async (value: string) => {
    const q = query(collection(db, "users"), where("name", "==", value));

    try {
      let usersArray: User[] = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData: User = {
          birthdate: doc.data().birthdate,
          email: doc.data().email,
          id: doc.data().id,
          name: doc.data().name,
          profileImg: doc.data().profileImg,
          surname: doc.data().surname,
          timestamp: doc.data().timestamp,
          description: doc.data().description,
          instagram: doc.data().instagram,
          facebook: doc.data().facebook,
          beReal: doc.data().beReal,
          snapchat: doc.data().snapchat,
          nationality: doc.data().nationality,
          hobbies: doc.data().hobbies,
        };
        usersArray.push(userData);
      });
      setSearchedUser(usersArray);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    handleSearch(username);
  };

  const handleSelect = async (element: User) => {
    if (loggedUser && element) {
      const combinedId =
        loggedUser.id > element.id
          ? loggedUser.id + element.id
          : element.id + loggedUser.id;
      try {
        const res = await getDoc(doc(db, "chats", combinedId));
        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });

          await updateDoc(doc(db, "userChats", loggedUser.id), {
            [combinedId + ".userInfo"]: {
              id: element.id,
              name: element.name,
              surname: element.surname,
              profileImg: element.profileImg,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });

          await updateDoc(doc(db, "userChats", element.id), {
            [combinedId + ".userInfo"]: {
              id: loggedUser.id,
              name: loggedUser.name,
              surname: loggedUser.surname,
              profileImg: loggedUser.profileImg,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }

      //create user chats
    } else console.log("x");

    setSearchedUser(null);
    setUsername("");
    toast.success(`You have just added ${username} to your chats`);
  };

  return (
    <div css={styles.search}>
      <div css={styles.searchForm}>
        <form onSubmit={onSubmit}>
          <input
            css={styles.editInput}
            type="text"
            placeholder="find a user by typing his name"
            onChange={onChange}
            value={username}
          />
        </form>
      </div>
      {err && <span>User not found</span>}
      {searchedUser &&
        searchedUser.map((element: User) => (
          <div key={element.id}>
            <div css={styles.userChat} onClick={() => handleSelect(element)}>
              <Image
                css={styles.editImage}
                src={element.profileImg}
                alt="profpic"
                width={100}
                height={100}
              />
              <div>
                <span>
                  {element.name} {element.surname}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ChatSearch;
