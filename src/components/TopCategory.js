import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link, NavLink, useParams } from 'react-router-dom'
import CategoryImg from "./../assets/electric.png"
import AutresImg from "./../assets/autres.png"
import { useDispatch, useSelector } from 'react-redux'
import { topListCategories } from '../actions/categoryActions'
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';


const TopCategorySection = styled.div` 

`;
const TopCategoryCards = styled.div` 
/* height: 13vh; */

background-color: #F3F4F5;
padding: 1rem 3rem;
display:grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 3rem;
align-items: center;
@media screen and (max-width:1024px){
  grid-template-columns: repeat(3,1fr);

}
@media screen and (max-width:925px){
  grid-template-columns: repeat(2,1fr);
  padding: 1rem 2rem;

}
`;
const CategoryCard = styled(Link)` 

background-color: #fff;
width:100%;
span{
  font-size:1rem;
  font-weight: 700;
}
img{
  width: 20px;
  margin-right: 0.7rem;
  @media screen and (max-width:925px){
    margin-right: 1.5rem;


}
}

  color:#FF6201;
  display:flex;
align-items: center;
justify-content: center;
outline:none;
border:none;
`;


function TopCategory() {
  const { pageNumber = 1,pageSize = 4 } = useParams();
  const topCategoryList = useSelector((state) => state.topCategoryList);
  const { loading, error, topcategories } = topCategoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      topListCategories({pageSize,pageNumber})
    );
  }, [dispatch,pageSize,pageNumber]);
  console.log(topcategories)

  return (
    <TopCategoryCards className="">
      {
        loading ? <LoadingBox></LoadingBox> : error ? "" : 
          <>
            {
              topcategories.map(category => (
                 
                <CategoryCard to={`/reservation/prestation/${category.link}`} key={category._id} className="button is-large is-rounded">
                  <span><img src={category.icon} alt="" /></span> <span>{category.name === "Plomberie et Cusine"? "Plomberie":category.name   }</span>

                </CategoryCard>
              ))
            }
            <CategoryCard to="/reservations" className="button is-large is-rounded">
              <span><img src={AutresImg} alt="" /></span> <span>Autre</span>
            </CategoryCard>
          </>
        
      }

    </TopCategoryCards>

  )
}

export default TopCategory
