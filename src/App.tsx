import HomePageView from "./Components/HomePageView/HomePageView";
import NavBarMain from "./Components/NavBarMain";
import ProjectPageView from "./Components/ProjectPageView/ProjectPageView";
import PurchaseView from './Components/PurchaseView/PurchaseView'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
const App = () => {
  return(
    <Router>
        <div className="App">
          <NavBarMain />
          <Routes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePageView />} />
            <Route path="/projects/:projectName" element={<ProjectPageView />}/>
            <Route path="/purchase/:sku" element={<PurchaseView />}/>
          </Routes>
      </div>
    </Router>
  )
}
export default App