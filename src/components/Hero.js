import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components'
import { listAllCategories } from '../actions/categoryActions';
import banner from './../assets/banner_home.png';
import HomeSearchBox from './HomeSearchBox';


const HeroSection = styled.section `
height: 77vh;

  background:url(${banner}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;
const HeroWrapper = styled.div` 
background-color: rgba(0,0,0,0.4);
width:100%;
height: 100%;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,p{
  
  color:#ffffff;
}
h1{
  font-size: 2.5em;
  text-align: center;
}
p{
  margin:1rem 0;
  font-size: 14px;
  font-weight: normal;
}

`;

function Hero() {
  const allCategoryList = useSelector((state) => state.allCategoryList);
  /* const [state, setstate] = useState([{}]) */

  const { loading, error, categories } = allCategoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      listAllCategories()
    );
  }, [dispatch]);
  return (
    <HeroSection>
      <HeroWrapper>
      <h1>
        Rendre le service autrement
       </h1>
       <p>
       Trouvez un artisan qualifié près de chez vous
       </p>
       <HomeSearchBox suggestions={categories}/>
       </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
