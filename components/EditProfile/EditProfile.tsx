import React, { useState } from "react";
import { InputChangeEventHandler, User } from "../../typing";
import { updateUserData } from "../../features/users/usersSlice";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import editYourProfile from "../../assets/pageImages/Construction worker-amico.png";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import faceBookIcon from "../../assets/svg/facebook-color-svgrepo-com.svg";
import beRealIcon from "../../assets/svg/bereal-icon.svg";
import instagramIcon from "../../assets/svg/instagram-1-svgrepo-com.svg";
import snapchatIcon from "../../assets/svg/snapchat-svgrepo-com.svg";
import penIcon from "../../assets/svg/pen-tool-svgrepo-com.svg";
import gameIcon from "../../assets/svg/game-svgrepo-com.svg";
import userIcon from "../../assets/svg/user-svgrepo-com.svg";
import flagIcon from "../../assets/svg/flag-svgrepo-com.svg";
import * as styles from "./EditProfile.style";
import Image from "next/image";

type Props = {
  user: User;
};

function EditProfilePage({ user }: Props) {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File[]>([]);
  const [progressUpload, setProgressUpload] = useState(0);
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    facebook: user.facebook,
    beReal: user.beReal,
    snapchat: user.snapchat,
    instagram: user.instagram,
    hobbies: user.hobbies,
    nationality: user.nationality,
    description: user.description,
    profileImg: user.profileImg,
  });

  const {
    name,
    surname,
    email,
    hobbies,
    nationality,
    description,
    instagram,
    facebook,
    snapchat,
    beReal,
    profileImg,
  } = formData;

  const data: User = {
    name,
    surname,
    email,
    hobbies,
    nationality,
    description,
    instagram,
    facebook,
    snapchat,
    beReal,
    timestamp: user.timestamp,
    profileImg,
    birthdate: user.birthdate,
    id: user.id,
  };

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(updateUserData(data));
  };

  const handleSelectedFile = (file: any) => {
    if (file) {
      setImageFile(file);
    } else {
      console.log("error while sending Image");
    }
  };

  const onChange: InputChangeEventHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const updatePhoto = async () => {
    const storeImage = async (image: File) => {
      return new Promise<string>((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${user.id}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressUpload(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...imageFile].map((image) => storeImage(image))
    ).catch(() => {
      console.log("Images not uploaded");
      return;
    });

    if (imgUrls) {
      const updatedProfileImage = imgUrls[0];
      setFormData((prevState) => ({
        ...prevState,
        profileImg: updatedProfileImage,
      }));
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.leftContainer}>
        <div css={styles.leftContainerWrapper}>
          <p css={styles.leftContainerHeader}>EDIT YOUR PROFILE PAGE DATA</p>
          <div css={styles.photoContainer}>
            <Image
              css={styles.leftContainerPhoto}
              src={editYourProfile}
              alt=""
            />
          </div>

          <button css={styles.leftContainerMyProfile}>
            <Link href={`/profile/${user.id}`}>SHOW RESULTS</Link>
          </button>
        </div>
      </div>
      <div css={styles.centerContainer}>
        <div css={styles.centerWrapper}>
          <div css={styles.centerHeader}>
            <div css={styles.centerHeaderWrapper}>
              <div css={styles.centerProfileContainer}>
                <div css={styles.centerProfilePictureContainer}>
                  <Image
                    css={styles.editCenterProfilePicture}
                    src={profileImg}
                    height={100}
                    width={100}
                    alt="profileImage"
                  />
                </div>
                <div css={styles.centerUploadDiv}>
                  <div css={styles.centerUploadDivTop}>
                    <input
                      css={styles.editFileInput}
                      className="formInputFile"
                      type="file"
                      id="updateProfileImg"
                      onChange={(file) => handleSelectedFile(file.target.files)}
                      max="1"
                      accept=".jpg,.png,.jpeg"
                      multiple
                      required
                    />
                    <button onClick={updatePhoto}>+</button>
                  </div>
                  <p css={styles.progressUpload}>{progressUpload}%</p>
                </div>
              </div>
            </div>
          </div>
          <div css={styles.contentContainer}>
            <div css={styles.contentWrapper}>
              <form css={styles.form} onSubmit={onSubmit}>
                <div css={styles.divInputWrapper}>
                  <p css={styles.inputHeader}>EDIT USER INFO</p>
                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={userIcon}
                        alt="name"
                      />
                    </div>
                    <input
                      css={styles.editInput}
                      type="name"
                      id="name"
                      value={name}
                      placeholder="name"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={userIcon}
                        alt="surname"
                      />
                    </div>
                    <input
                      css={styles.editInput}
                      type="surname"
                      id="surname"
                      value={surname}
                      placeholder="surname"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImageWithoutRadius}
                        src={flagIcon}
                        alt="flag icon"
                      />
                    </div>
                    <input
                      css={styles.editInput}
                      type="name"
                      id="nationality"
                      value={nationality}
                      placeholder="nationality"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div css={styles.divInputWrapper}>
                  <p css={styles.inputHeader}>EDIT SOCIALS</p>
                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={faceBookIcon}
                        alt="facebook"
                      />
                    </div>
                    <input
                      css={styles.editInput}
                      type="name"
                      id="facebook"
                      value={facebook}
                      placeholder="facebook"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={snapchatIcon}
                        alt="snapchat"
                      />
                    </div>
                    <input
                      type="name"
                      id="snapchat"
                      value={snapchat}
                      css={styles.editInput}
                      placeholder="snapchat"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={beRealIcon}
                        alt="beReal"
                      />
                    </div>
                    <input
                      type="name"
                      id="beReal"
                      value={beReal}
                      css={styles.editInput}
                      placeholder="beReal"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={instagramIcon}
                        alt="instagram"
                      />
                    </div>
                    <input
                      type="name"
                      id="instagram"
                      value={instagram}
                      css={styles.editInput}
                      placeholder="instagram"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div css={styles.divInputWrapper}>
                  <p css={styles.inputHeader}>EDIT ABOUT YOU & HOBBIES</p>
                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImageWithoutRadius}
                        src={penIcon}
                        alt="pen Icon"
                      />
                    </div>
                    <input
                      type="name"
                      id="description"
                      value={description}
                      css={styles.editInput}
                      placeholder="description"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>

                  <div css={styles.inputContainer}>
                    <div css={styles.inputPhotoContainer}>
                      <Image
                        css={styles.editInputImage}
                        src={gameIcon}
                        alt="Sign In With Google"
                      />
                    </div>
                    <input
                      type="name"
                      id="hobbies"
                      value={hobbies}
                      css={styles.editInput}
                      placeholder="type your hobbies here"
                      autoComplete="off"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <button css={styles.editSubmitButton} type="submit">
                  CONFIRM CHANGES
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
