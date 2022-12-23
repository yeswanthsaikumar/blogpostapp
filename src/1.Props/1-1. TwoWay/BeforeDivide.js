import { useState } from "react";

function BeforeDivide() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      {isLogin ? (
        <span>{userName}</span>
      ) : (
        <div>
          <span></span>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} />
            <button>save</button>
          </form>
        </div>
      )}
    </>
  );
}

export default BeforeDivide;
