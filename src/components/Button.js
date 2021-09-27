import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button =styled(Link) `
background:${({primary})=>(primary ? '#FF6201' :
'#fff')};
white-space:nowrap;
outline:none;
border:none;
border-radius:200px;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:center;
display:flex;
justify-content:center;
align-items:center;
padding: ${({big})=>(big ? '16px':'14px')};
color: ${({primary})=>(primary ? '#fff':'#FF6201')};
font-size: ${({big})=>(big ? '20px':'14px')};
font-weight: bold;
&:hover {
  transform:translateY(-2px);
}
`;