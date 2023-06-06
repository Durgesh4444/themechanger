import { useState, useEffect } from "react";
import "./App.css";
import Post from "./component/Post";
import { ThemeContext, themes } from "./context/themecontext";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleclick = ()=>{
   theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
    // eslint-disable-next-line
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{theme, handleclick}}>
        <div className="maincontainer">
          <h1 className="text-center">Light Dark Theme</h1>
          <Post theme={theme} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
