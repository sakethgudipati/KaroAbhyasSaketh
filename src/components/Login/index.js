import Navbar from '../Navbar/index'
import './index.css'

const Login = () => (
  <>
    <Navbar />
    <div className="login-form">
      <div className="login-container">
        <input type="text" className="input-element" placeholder="NAME" />
        <input type="text" className="input-element" placeholder="EMAIL" />
        <div className="otp-container">
          <input
            type="text"
            className="input-element"
            placeholder="PHONE NUMBER"
          />
          <button className="otp-button" type="button">
            Send OTP
          </button>
        </div>
        <p className="otp-msg">
          Didn't Recieve It? <span className="resend">RESEND</span>
        </p>
        <input type="text" className="input-element" placeholder="OTP" />
        <button className="otp-button2" type="button">
          Sign In
        </button>
        <p className="otp-msg">
          Already Have An Account? <span className="resend">Log In</span>
        </p>
      </div>
    </div>
  </>
)

export default Login
