import { useState } from "react";

function StatefulForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
    console.log(email);
    console.log(password);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <br />
        {error && error}
        {error && <br />}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StatefulForm;
