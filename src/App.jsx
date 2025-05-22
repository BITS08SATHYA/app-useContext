import './App.css'

function App() {

    const theme = 'dark';

  return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>App (Parent)</h2>
        <ComponentA theme={theme} />
        </div>
  );
}

function ComponentA({theme}){
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ComponentA (Child)</h2>
            <ComponentB theme={theme} />
        </div>
    );
}

function ComponentB({theme}){
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ComponentB (Grand Child)</h2>
            <ThemedComponent theme={theme} />
        </div>
    );
}

function ThemedComponent({theme}){
    return (
        <div style={{ border: '2px solid black' , padding: '20px'}}>
            <h2>ThemedComponent (Great Grand Child)</h2>
            <div>The current theme is: {theme}</div>
        </div>
    );
}

export default App
