import React, { useState } from "react";
import { useDispatch} from "react-redux";
// import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        const data = await dispatch(signUp(username, email, password));
        console.log('data', data);
        if (data) {
          console.log('data', data);
          setErrors(data);
        }
      } else {
          setErrors(["Confirm Password field must be the same as the Password"]);
        };
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (password === confirmPassword) {
    //     setErrors([]);
    //     return dispatch(
    //       sessionActions.signUp( username, email, password )
    //     ).catch(async (res) => {
    //       const data = await res.json();
    //       console.log('data', data);
    //       if (data && data.errors) setErrors(data.errors);
    //       console.log(data.errors);
    //     });
    //   }
    //   return setErrors([
    //     "Confirm Password field must be the same as the Password field",
    //   ]);
    // };

  return (
    <div className="signup-form-container">
      <h2>Become a cocktail pro from home!</h2>
    <form className = "signup-form" onSubmit={handleSubmit}>
      <div className="errors">
        {errors.map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </div>
      <div className="username-label">
        <label>
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
      </div>
      <div className="email-label">
        <label>
        Email
        </label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
        />
      </div>
      <div className="password-label">
      <label>
        Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // required
        />
      </div>
      <div className="confirm-password-label">
      <label>
        Confirm Password
      </label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          // required
        />
      </div>
      <div className="submit-button">
      <button type="submit">Create account</button>
      </div>
    </form>
    <h6>10 lucky winners will receive a $10 gift card to Chili's</h6>
    </div>
  );
}

export default SignupForm;
