import './App.css'
import {createContext, useContext, useState} from "react";

// Use Context hook

const ThemeContext = createContext('light');

function App() {

    const[theme , setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

  return (
      <ThemeContext.Provider value={theme}>
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>App (Parent)</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        <ComponentA />
        </div>
      </ThemeContext.Provider>
  );
}

function ComponentA(){
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ComponentA (Child)</h2>
            <ComponentB />
        </div>
    );
}

function ComponentB(){
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ComponentB (Grand Child)</h2>
            <ThemedComponent />
        </div>
    );
}

function ThemedComponent(){
    const theme = useContext(ThemeContext);
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ThemedComponent (Great Grand Child)</h2>
            <div>The current theme is: {theme} </div>
        </div>
    );
}

export default App
