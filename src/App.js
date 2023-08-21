import './App.css';
import Header from "./components/Header"
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
// import {  ToastContainer }
function App() {
  return(
    <div>
       <Provider store={store}>
          <Header/>
          <Outlet/>
          <Footer/>
          {/* // <ToastContainer /> */}
       </Provider>
    </div>
  )
}


export default App;
