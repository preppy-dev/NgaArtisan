import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from './../components/LoadingBox';
import MessageBox from './../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import AvatarUpload from "./../assets/avatar-upload.png";

const UploadComponent = props => (
  <form>
    <label>
      File Upload URL:
          <input id="urlInput" type="text" onChange={props.onUrlChange} value={props.url}></input>
    </label>
    <ImageUploader
      key="image-uploader"
      singleImage={true}
      withPreview={true}
      label="Maximum size file: 5MB"
      buttonText="Choose an image"
      onChange={props.onImage}
      imgExtension={['.jpg', '.png', '.jpeg']}
      maxFileSize={5242880}
    ></ImageUploader>
  </form>
);

const FormProfile = styled.form` 

  max-width: 60rem;
  margin: 0 auto;

& > div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
& label {
  margin: 1rem 0;
}
input {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input:hover,
select:hover,
textarea:hover,
button:hover {
  border: 0.1rem #624193 solid;
}
.fileContainer{
  box-shadow:none;
  margin: 0 auto;
  padding: 10px 0;
  .chooseFileButton{
    padding: 4px 20px;
    background: #624193;
    border-radius: 30px;
    color: white;
    font-weight: 300;
    font-size: 14px;
    margin: 8px 0;
  }
}

`;
const ImageProfile = styled.div` 
display:flex;
justify-content: center;
img{
  width: 140px;
    height: 140px;
    border-radius: 100px;
}
`;

export default function ProfileScreen() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');
  const [image, setImage] = useState('');
  const [profil, setUserProfil] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setEmail(user.email);
      setUserProfil(user.profil);
      setUserName(user.username);
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Le mot de passe et la confirmation du mot de passe ne correspondent pas');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          firstname,
          lastname,
          email,
          profil,
          username,
          password,  
        })
      );
    }
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const uploadFileHandler = async (pictureFiles, pictureDataURLs) => {
    /* const file = e.target.files[0]; */
    const file = pictureFiles[0];
    console.log(pictureDataURLs)
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    console.log(file)
    /* const bodyFormData = new FormData();
    bodyFormData.append('image', file); */
    setLoadingUpload(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log("la data" + data)
      setUserProfil(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <FormProfile onSubmit={submitHandler}>
        <div>
          <h1>Editer le profil</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Mise à jour du profil réussie
              </MessageBox>
            )}

            <div>
              <div>
                <ImageProfile >
                  <img src={!profil ? AvatarUpload : profil} alt={firstname+lastname} />
                </ImageProfile>
                <ImageUploader
                  key="image-uploader"
                  withIcon={false}
                  withPreview={false}
                  singleImage={true}
                  accept="accept=image/*"
                  label=""
                  buttonText={!profil ? "ajouter un photo":"Changer l'image"}
                  onChange={uploadFileHandler}
                  imgExtension={['.jpg', '.png', '.jpeg']}
                  maxFileSize={5242880}
                ></ImageUploader>
                {loadingUpload && <LoadingBox></LoadingBox>}
                {/* {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )} */}
              </div>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                id="username"
                type="text"
                placeholder="entrer votre nom d'utilisateur"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="firstName">Prénom</label>
              <input
                id="fname"
                type="text"
                placeholder="Entrer votre Prénom"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="lname">Nom</label>
              <input
                id="lname"
                type="text"
                placeholder="Entrer votre Nom"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Entrez l'email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                placeholder="Entrer le mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Entrer Confirmez le mot de passe"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            {/* {user.isProductor && (
              <>
                <h2>Producteur</h2>
                <div>
                  <label htmlFor="sellerName">Nom du producteur</label>
                  <input
                    id="sellerName"
                    type="text"
                    placeholder="Enter Seller Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userprofil">Productor profil</label>
                  <input
                    id="userprofil"
                    type="text"
                    placeholder="Enter Seller profil"
                    value={profil}
                    onChange={(e) => setuserProfil(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerDescription">Seller Description</label>
                  <input
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Seller Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></input>
                </div>
              </>
            )} */}
            <div>
              <label />
              <button className="primary button" type="submit">
                Mise à jour
              </button>
            </div>
          </>
        )}
      </FormProfile>

    </div>
  );
}

