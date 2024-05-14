import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainRoutes from './routes/MainRoutes'
import UserContext from './context/UserContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'
import CartContext from './context/CartContext'
import useCart from './hooks/useCart'

function App() {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(['jwt-token'])

  function accessToken() {
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, { withCredentials: true })
      .then((res) => {
        setToken('jwt-token', res.data.token, { httpOnly: true })
        const tokenDetails = jwtDecode(res.data.token);
        console.log(tokenDetails);
        setUser({ username: tokenDetails.user, id: tokenDetails.id })
      })
  }
  useEffect(() => {
    accessToken()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className='app-wrapper'>

          {/* Common header for all pages */}
          <Header color='light' light={true} expand='md' container='md' />
          <MainRoutes />

          {/* Common footer for all pages */}
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App
