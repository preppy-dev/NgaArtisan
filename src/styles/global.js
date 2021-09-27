import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('./font/Montserrat/Montserrat-Bold.ttf') format('ttf');
  src: url('./font/Montserrat/Montserrat-Regular.ttf') format('ttf');
  src: url('./font/Montserrat/Montserrat-Light.ttf') format('ttf');
/*   font-weight: normal;
  font-style: normal; */
  font-weight: 100 bold;
  font-style: normal;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat',sans-serif;
  scrollbar-color: #454a4d #202324;
  
}
body{
  font-family:'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* font-size: 1.6rem; */
}
#root {
  height: 100%;
}
.no-header nav{
  display: none;
}

.button:hover {
    transform:translateY(-2px);
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.row.center {
  justify-content: center;
}
.row.top {
  align-items: flex-start;
}
.row.start {
  justify-content: flex-start;
}

/* Alert */
.loading {
  display: block !important;
}
.success {
  color: #20a020;
}
.danger {
  color: #a02020;
}
.alert {
  padding: 1rem;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
}
.alert-info {
  color: #2020a0;
  background-color: #e0e0ff;
}
.alert-danger {
  color: #a02020;
  background-color: #ffe0e0;
}
.alert-success {
  color: #20a020;
  background-color: #eeffe0;
}

/* Table */
.table {
  width: 100%;
  border-collapse: collapse;
}
.table tbody tr:nth-of-type(odd) {
  background-color: #f4f4f4;
}
.table td,
.table th {
  text-align: left;
  border: 0.1rem solid #e4e4e4;
  padding: 0.5rem;
}
.table button {
  margin: 0 0.2rem;
}

`;
