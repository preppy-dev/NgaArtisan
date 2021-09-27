import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listCategories } from './../../actions/categoryActions';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { prices, ratings } from './../../utils';
import styled, { css } from 'styled-components'
import { Button } from '../../components/Button'

import WorkIcon from "../../assets/autres.png"



const PrestationContainer = styled.section`
background-color: #F3F4F5;
padding: 4rem 0;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
@media screen and (max-width:925px){
  grid-template-columns:1fr ;
  padding: 4rem 2rem;
}
h1{
  color:#FF6201;
  /* font-size: 2.2rem;
  font-weight:bold; */
}
`;
const PrestationCards = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(3,1fr);
@media screen and (max-width:925px){
  grid-template-columns:1fr ;

}
grid-gap:3rem;
margin: 3rem 0;
`;

const PrestationCard = styled.div`
display:flex;
flex-direction: column;
gap:2rem;
  justify-content: center;
  align-items: center;
div{
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:#fff;
  border-radius:50%;
  width: 6rem;
  height: 6rem;
  img{
    width: 50%;
  }
  
}
a{
  font-weight:600;
}
`;

export default function SearchScreen(props) {
  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, products, page, pages } = categoryList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listCategories({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
      })
    );
  }, [category, dispatch, max, min, name,pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/pageNumber/${filterPage}`;
  };
  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products.length} Results</div>
        )}
        <div>
          Sort by{' '}
          <select
            value={order}
            onChange={(e) => {
              props.history.push(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </div>
      </div>
      <div className="row top">
        <div className="col-1">
          <h3>Department</h3>
          <div>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              <ul>
                <li>
                  <Link
                    className={'all' === category ? 'active' : ''}
                    to={getFilterUrl({ category: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === category ? 'active' : ''}
                      to={getFilterUrl({ category: c })}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3>Price</h3>
            <ul>
              {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    to={getFilterUrl({ min: p.min, max: p.max })}
                    className={
                      `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                    }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <PrestationContainer className="row center">
              <PrestationCards className="Prestationcards">
        {
        loading ? <LoadingBox></LoadingBox> : error ? <MessageBox></MessageBox> : 
          <>
            {
            categories.map(category=>(
              <PrestationCard key={category._id} className="workcard">
            <div><img src={category.icon === "sample icon" ? WorkIcon : category.icon} alt="" /></div>
            <Button to={`/reservation/prestation/${category.link}`} primary="false" className="subtitle">{category.name}</Button>
          </PrestationCard>

            ))
            }
            </>
           }      
        </PrestationCards>
              </PrestationContainer>
              
              <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
