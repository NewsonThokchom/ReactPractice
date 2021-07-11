const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Newson ", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home Component</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Newson", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
