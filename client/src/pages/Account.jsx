import SignUp from "../components/account/signUp/SignUp";
import Login from "../components/account/login/Login";
import { useState } from "react";

function Account() {
  const [our, setOur] = useState(true);
  return (
    <div className=" bg-[#fefefe] m-0 p-0 h-dvh w-dvw flex flex-col justify-center items-center text-black ">
      <div className="w-full md:w-[66rem] h-[80%] text-white flex flex-col justify-center items-center text-justify gap-4">
        <div className="flex flex-row gap-4 w-fit h-fit">
          <button
            className="bg-blue-600 text-white p-2 rounded-md"
            onClick={() => {
              setOur(false);
            }}
          >
            Se Connecter
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded-md"
            onClick={() => {
              setOur(true);
            }}
          >
            Creer un compte
          </button>
        </div>
        <div className=" w-full h-1/2">{our ? <SignUp /> : <Login />}</div>
      </div>
    </div>
  );
}

export default Account;
