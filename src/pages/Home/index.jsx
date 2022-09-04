import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmit } from "./handleSubmit";

const Home = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");

  return (
    <div className="p-5 my-5">
      <form
        onSubmit={() => {
          handleSubmit(userName);
          navigate("/todos", { replace: true });
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Lütfen isminizi giriniz."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="submit"
          className="btn btn-block btn-secondary mt-5 text-uppercase"
          value="Giriş"
        />
      </form>
    </div>
  );
};

export default Home;
