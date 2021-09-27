/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styled, { css } from 'styled-components'
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';
import { withRouter } from 'react-router';


//import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="/reservations"
      target="_blank"
      rel="noopener noreferrer"
    >
      Plus
    </a>
  </span>
);

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Categories'),
    options: [renderItem('electricite'), renderItem('froid'),renderItem('serrurerie'),renderItem('montage'),renderItem('fixation')],
  },
 /*  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  }, */
];
/* 
const options = [
  { value: 'light', label: 'Light' },
  { value: 'bamboo', label: 'Bamboo' },
]; */



const SearchBox = styled.form`
width: 23rem;
display:grid;
grid-template-columns: 90% 10%;
align-items: center;
background-color: #fff;
border: 1px #707070 solid;
border-radius:5rem;
padding:.4rem;
input{
  border: none;
  outline:none;
  font-size: 1rem;
  margin:0 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: none;
}
input::placeholder {
  font-size: 12px;
}

button{
  width:30px;
  height: 30px;
  border-radius: 50%;
  background-color:#FF6201;
  color:#fff;
  white-space:nowrap;
outline:none;
border:none;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
cursor:pointer;
display:flex;
align-items: center;
justify-content: center;
}

.no-suggestions {
  color: #999;
  padding: 0.5rem;
}

.suggestions {
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
}

.suggestions li {
  padding: 0.5rem;
}

.suggestion-active,
.suggestions li:hover {
  background-color: #008f68;
  color: #fae042;
  cursor: pointer;
  font-weight: 700;
}

.suggestions li:not(:last-of-type) {
  border-bottom: 1px solid #999;
}

`;


function HomeSearchBox(props) {
  const [name, setName] = useState('');

    const submitHandler = (e) => {
    e.preventDefault();
    name === "" ? props.history.push(`/reservations`):
    props.history.push(`/reservation/prestation/${name}`);
  };

  return (
    <SearchBox onSubmit={submitHandler}>
  
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={350}
    style={{
      width: 230,
    }}
    options={options}
    onChange={(e) => setName(e)}
  >
    {/* <Input.Search size="large" placeholder="input here" /> */}
    <input 
  type="text" 
  value={name}
  /* onChange={(e) => setName(e.target.value)} */
  placeholder="Quelles genre de service procurez-vous ?"
  />
  </AutoComplete>

  <button type="submit">
    <FaSearch/>
  </button>
</SearchBox>
 

  )
}

export default withRouter(HomeSearchBox)





/* const Complete = () => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{
      width: 250,
    }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);

ReactDOM.render(<Complete />, mountNode); */