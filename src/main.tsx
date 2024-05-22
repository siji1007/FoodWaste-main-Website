
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './Design/Home.css';
import './Design/About.css';
import './Design/Login.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
