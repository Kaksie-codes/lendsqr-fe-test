import './signin.scss'
import logo from '/logo.png'
import Input from '../../components/Input'
import SignInSvg from '/SignInPageSvg.svg'


const SignInPage = () => {
  return (
    <div className='sign-in'>
      <div className="container">
        <img src={logo} alt="logo" className='logo'/>
        <div className='content'>
          <img src={SignInSvg} alt="hero image" className='hero-img'/>
          <div className='content-right'>
            <h1>Welcome!</h1>
            <p className='sub-text'>Enter details to login.</p>
            <form action="">
              <Input placeholder='Email' type='email'/>
              <Input placeholder='Password' type='password'/>
              <p className='sub-text2'>FORGOT PASSWORD</p>
              <button className='login-btn'>LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage