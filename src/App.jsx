import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service.js'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context.jsx'
import { Spin } from 'antd'


const App = () => {

  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);


  const fetchUserInfo = async () => {
    setIsAppLoading(false);

    const res = await getAccountAPI();
    if (res.data) {
      // success
      setUser(res.data.user);

    }
    // setIsAppLoading(false);
  }

  useEffect(() => {
    fetchUserInfo();
  }, [])

  return (
    <>
      {isAppLoading === true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate (-50%,-50%)",
        }}>

          <Spin />
        </div>
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
