import { useState } from "react";

const Home = () => {
  //   let name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("Luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Home Component</h2>
      <p>
        {name} is {age} old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
