import { useState } from "react";

function LoginPage(props) {
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginHandler(userName);
  };

  const onChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <span>.</span>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} />
        <button>save</button>
      </form>
    </>
  );
}

export default LoginPage;
