import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service.js'
import { useEffect } from 'react'
import { AuthContext } from './components/context/auth.context.jsx'

const App = () => {

  const { setUser } = useContext(AuthContext);


  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      // success
      setUser(res.data.user);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
