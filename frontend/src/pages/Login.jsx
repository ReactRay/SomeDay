import { useNavigate } from "react-router";
import { login } from "../store/actions/user.actions";
import { useState } from "react";
import { AppHeader } from "../cmps/AppHeader";
import { Link } from "react-router-dom";
import { utilService } from "../services/util.service";

export function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!user.email || !user.password) {
      return;
    }
    await login(user)
      .then((returnedUser) => {
        navigate(`/${utilService.getNameFromEmail(returnedUser?.email)}s-team.someday.com`);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  return (
    <>
      <AppHeader />
      <div className="login">
        <h1>Log in to your account</h1>
        <form className="login-form " onSubmit={handleSubmit}>
          <p className="req-msg">Enter your work email address and password</p>
          <div className="form-section">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Example@company.com"
            />
          </div>
          <div className="form-section">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <hr className="login-line"/>
        <div>
          <p>
            {" "}
            don't have an account ? <Link to={"/signup"}>sign up</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
