import HomePageView from "./Components/HomePageView/HomePageView";
import NavBarMain from "./Components/NavBarMain";
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  return(
    <div className="App">
      <NavBarMain />
      <HomePageView />
    </div>
  )
}
export default App