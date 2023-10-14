import { useState } from "react";
import "../style/LoginForm.css";

function LoginForm() {
  let [user,setUser]=useState({
    first:"",
    last:"",
    username:"",
    password:""
  });
  // const [first, setFirst] = useState("");
  // const [last, setLast] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  function changeHandler(e){
    setUser((prev)=>{
      const temp={...prev}
      temp[e.target.id]=e.target.value;
      return temp
    })
  }

  // function firstChangeHandler(e) {
  //   setFirst(e.target.value);
  // }
  // function lastChangeHandler(e) {
  //   setLast(e.target.value);
  // }
  // function usernameChangeHandler(e) {
  //   setUserName(e.target.value);
  // }
  // function passwordChangeHandler(e) {
  //   setPassword(e.target.value);
  // }
  function submitHandler(e){
    e.preventDefault();
    // const userDetails={
    //     first:first,
    //     last:last,
    //     userName:username,
    //     password:password
    // };
    console.log(user)

  }
  
  return (
    <div>
      <form className="login-form" onSubmit={submitHandler}>
        <input
          type="text"
          id="first"
          placeholder="First Name"
          value={user.first}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="last"
          placeholder="Last Name"
          value={user.last}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="username"
          placeholder="UserName"
          value={user.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={changeHandler}
        />
        <button type="submit">Submittttt</button>
      </form>
    </div>
  );
}

export default LoginForm;
