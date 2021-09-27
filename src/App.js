import 'bulma/css/bulma.min.css';
import Routes from './Routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (  
    <> 
    <Routes/>
    <GlobalStyle />
    </>
  );
}

export default App;
