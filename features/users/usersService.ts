import { getAuth, updateProfile } from "firebase/auth";
import {
  doc,
  updateDoc,
  collection,
  getDoc,
  query,
  where,
  orderBy,
  deleteDoc,
  getDocs,
  limit,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase-config";
import { Post, User } from "../../typing";

//Get logged user data
const getLoggedUser = async (id: string) => {
  const auth = getAuth();
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();

  if (userData) {
    const {
      name,
      surname,
      email,
      birthdate,
      timestamp,
      id,
      profileImg,
      description,
      facebook,
      instagram,
      beReal,
      snapchat,
      nationality,
      hobbies,
    } = userData;

    const data: User = {
      name,
      surname,
      birthdate,
      timestamp,
      id,
      profileImg,
      email,
      description,
      facebook,
      instagram,
      beReal,
      snapchat,
      nationality,
      hobbies,
    };
    return data;
  }
};

const getUserProfile = async (id: string) => {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();

  if (userData) {
    const {
      name,
      surname,
      email,
      birthdate,
      timestamp,
      id,
      profileImg,
      description,
      facebook,
      instagram,
      beReal,
      snapchat,
      nationality,
      hobbies,
    } = userData;

    const data: User = {
      name,
      surname,
      birthdate,
      timestamp,
      id,
      profileImg,
      email,
      description,
      facebook,
      instagram,
      beReal,
      snapchat,
      nationality,
      hobbies,
    };
    return data;
  }
};

const updateProfileData = async (data: User) => {
  try {
    // update dispaly name in firebase
    const auth = getAuth();
    if (auth.currentUser!) {
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });

      //update in firestore
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name: data.name,
        profileImg: data.profileImg,
        surname: data.surname,
        description: data.description,
        instagram: data.instagram,
        beReal: data.beReal,
        facebook: data.facebook,
        snapchat: data.snapchat,
        nationality: data.nationality,
        hobbies: data.hobbies,
      });

      //UPDATE POST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const listingsRef = collection(db, "posts");
      console.log(auth.currentUser.uid);

      // Create a query
      const q = query(
        listingsRef,
        where("author.authorId", "==", auth.currentUser.uid)
      );

      // Execute query
      const querySnap = await getDocs(q);
      querySnap.forEach((element) => {
        const postData: Post = {
          id: element.data().id,
          photo: element.data().photo,
          description: element.data().description,
          timestamp: element.data().timestamp,
          author: {
            authorId: element.data().author.authorId,
            name: element.data().author.name,
            surname: element.data().author.surname,
            profileImg: element.data().author.profileImg,
          },
          comments: element.data().comments,
        };
        const { id, photo, description, timestamp, author } = postData;
        const { authorId, name, surname, profileImg } = postData.author;
        const userRef = doc(db, "posts", element.data().id);
        console.log(id, description, "elo");
        updateDoc(userRef, {
          author: {
            authorId: auth.currentUser?.uid,
            profileImg: data.profileImg,
            name: data.name,
            surname: data.surname,
          },
        });
      });

      ///////////////////////////////////////////

      const updatedUserRef = doc(db, "users", data.id);
      const updatedUserSnap = await getDoc(updatedUserRef);
      const updatedUserData = updatedUserSnap.data();
      if (updatedUserData) {
        if (updatedUserData) {
          const {
            name,
            surname,
            email,
            birthdate,
            timestamp,
            id,
            profileImg,
            description,
            nationality,
            hobbies,
            facebook,
            instagram,
            snapchat,
            beReal,
          } = updatedUserData;

          const updatedData: User = {
            name,
            surname,
            birthdate,
            timestamp,
            id,
            profileImg,
            email,
            description,
            facebook,
            instagram,
            snapchat,
            beReal,
            nationality,
            hobbies,
          };
          return updatedData;
        }
      }
    }
  } catch (error: any) {
    console.log(error);
  }
};

//Get All users
const getUsers = async () => {
  const listingsRef = collection(db, "users");

  const q = query(listingsRef, orderBy("timestamp", "desc"), limit(10));

  const querrySnap = await getDocs(q);

  let usersArray: User[] = [];

  querrySnap.forEach((doc) => {
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

  return usersArray;
};

const usersService = {
  getLoggedUser,
  getUsers,
  getUserProfile,
  updateProfileData,
};

export default usersService;
