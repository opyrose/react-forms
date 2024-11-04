import { useState } from "react";


const SignUpForm = ({ setToken }) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`try catch`)
    try {
      const response = await fetch(` https://fsa-jwt-practice.herokuapp.com/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "userName",
            password: "password"
          })
        }
      )
      const responseJSON = await response.json();
      setToken(result.token);
      console.log(responseJSON)
    }
    catch (error) {
      setError(error.message)
    };
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={userName}
            onChange={(event) => { setUserName(event.target.value) }} />
        </label>
        <label>
          Password: <input value={password}
            onChange={(event) => { setPassword(event.target.value) }} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
};
export default SignUpForm;