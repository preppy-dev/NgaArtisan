import styled, { css } from 'styled-components'

export const Container = styled.div`

`;
export const ContactsDetails = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(3,1fr);
margin-top:5rem;
margin-bottom:3rem;

.contacts-details-simple {
  & + div {
    margin-left: 1rem;
  }
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    color: #212223;
  }
  svg{
    font-size: 2rem;
    margin-bottom: .5rem;
    color: #FF6201;
  }
  font-weight:500;
}
`;