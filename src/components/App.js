import React from "react";
import ralphJpg from "../images/ralph.jpg";

const App = () => {
  return (
    <>
      <h1>🧟‍♀️ Webpack Demo</h1>

      <div>
        <input type="checkbox" name="awesome" id="awesome" />
        <label htmlFor="awesome">Check if you're awesome!</label>
      </div>
      <img src={ralphJpg} alt="Ralph in Pajamas" />
    </>
  );
};

export default App;
