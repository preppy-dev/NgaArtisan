import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsCategory, updateCategory } from '../actions/categoryActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CATEGORY_UPDATE_RESET } from '../constants/categoryConstants';
import ImageUploader from 'react-images-upload';
import AvatarUpload from "./../assets/avatar-upload.png";
import axios from 'axios';
import styled, { css } from 'styled-components'

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
    background: #FF6201;
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

export default function CategoryEditScreen(props) {
  const categoryId = props.match.params.id;
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/categorylist');
    }
    if (!category || category._id !== categoryId || successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET });
      dispatch(detailsCategory(categoryId));
    } else {
      setName(category.name);
      setLink(category.link);
      setIcon(category.icon);
      setImage(category.image);
      setDescription(category.description);
    }
  }, [category, dispatch, categoryId, successUpdate, props.history]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateCategory({
        _id: categoryId,
        name,
        icon,
        link,
        image,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
      setIcon(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const uploadFileHandler2 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <FormProfile className="form" onSubmit={submitHandler}>
        <div>
          <h1>Modifier le categorie {categoryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            
            <div>
              <h1>Icon</h1>
            <ImageProfile >
                  <img src={!icon ? AvatarUpload : icon} alt={icon} />
                </ImageProfile>
                <ImageUploader
                  key="image-uploader"
                  withIcon={false}
                  withPreview={false}
                  singleImage={true}
                  accept="accept=image/*"
                  label=""
                  buttonText={!icon ? "ajouter un photo":"Changer l'image"}
                  onChange={uploadFileHandler}
                  imgExtension={['.jpg', '.png', '.jpeg']}
                  maxFileSize={5242880}
                ></ImageUploader>
                {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Entrer le nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            
            <div>
              <label htmlFor="link">Lien</label>
              <input
                id="link"
                type="text"
                placeholder="Entrer le lien Ex: 'Plomberie et cuisine' => plomberie"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              ></input>
            </div>
            

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Entrer image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="imageFile">Ficher image </label>
              <input
                type="file"
                id="imageFile"
                label="Choisire un Image"
                onChange={uploadFileHandler2}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea"
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="button is-dark primary" type="submit">
                Mise à jours
              </button>
            </div>
          </>
        )}
      </FormProfile>
    </div>
  );
}
