import "./App.css";
import Header from "./component/Header";
import HeroSelection from "./component/home/HeroSelection";

function App() {
  return (
    <div className=''>
      <Header />
      <HeroSelection />
      <div className='h-[800px] w-full bg-yellow-100'></div>
    </div>
  );
}

export default App;
