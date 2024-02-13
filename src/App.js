// import './App.css';
import Home from './pages/Home/Home';
import ThemeContextProvider from './context/ThemeContextProvider';
function App() {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  );
}

export default App;
