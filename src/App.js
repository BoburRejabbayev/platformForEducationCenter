// import { Route, Routes, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "./Header/header/header";
import './app.scss'
import Navbar from "./Header/navbar/nav";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import LogIn from "./login/LogIn";
import MyProfile from "./myProfile/myProfile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeUser } from "./slices/profileSlice";
import Footer from './footer/footer';


export const ShowMasterContext = React.createContext()


function App() {
  const dispatch = useDispatch()
  const [showMaster, setShowMaster] = React.useState()
  const [ifShow, setIfShow] = React.useState(false)
  // const [isLogin, setIsLogin] = React.useState(false)

  const { isLogin, user } = useSelector(state => state.userSlice)

  const navigate = useNavigate()

  // React.useEffect(() => {
  //   console.log(isLogin);
  // },[isLogin])

  React.useEffect(() => {
    // !isLogin && (dispatch(closeUser()))
    navigate('/#header')
    // window.scrollTo(0, 0)
  }, [])


  return (


    <ShowMasterContext.Provider value={{ showMaster, setShowMaster, ifShow, setIfShow, isLogin }}>

      <div className="app" id="app">
        <Navbar />
        {/* <Header /> */}


        {/* <Router> */}
        <Routes>
          {/* <Switch> */}

          <Route path="/" element={<Header />} />
          <Route path="*" element={<Navigate to='/' />} />
          {!isLogin
            ? <Route path="/login" element={<LogIn />} />
            : <Route path="/myProfile" element={<MyProfile />} />
          }
          {user
            ? <Route path="/myProfile" element={<MyProfile />} />
            : <Route path="/login" element={<LogIn />} />
          }

          {/* <Navigate to="/" /> */}
        </Routes>
        {/* </Switch> */}
        {/* </Router> */}
        {ifShow &&
          <div className='show_master' onClick={() => setIfShow(false)} >
            <div className="show_master-info" onClick={(e) => e.stopPropagation()} >
              <div className="master_photo">
                <img src={showMaster.photo} alt="" />
              </div>
              <div className="master_main">
                <h1>{showMaster.name} {showMaster.surname}</h1>
                <h3>{showMaster.job}</h3>
                <p>{showMaster.about}</p>
                <p>{showMaster.quality}</p>
              </div>
            </div>
            <AiOutlineClose fontSize={'48px'} onClick={() => setIfShow(false)} className="close_show-item" />
          </div>
        }
        <Footer />
      </div>
    </ShowMasterContext.Provider>
  );
}

export default App;
