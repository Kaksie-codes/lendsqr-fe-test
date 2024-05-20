import { Navigate, Route, Routes } from 'react-router-dom'
import SignInPage from './pages/signin/SignInPage'
import NotFoundPage from './pages/notfound/NotFoundPage'
import DashBoardPage from './pages/dashboard/DashBoardPage'
import UsersPage from './pages/users/UsersPage'
import UserDetailsPage from './pages/userdetails/UserDetailsPage'
import './app.scss'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/signin' />} />
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/dashboard' element={<DashBoardPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/users/:id' element={<UserDetailsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
