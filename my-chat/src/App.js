
import './App.css';
import  {BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import Join from "./component/join/Join"

const ENDPOINT = "http://localhost:8081/";

function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Join />}/>
          <Route path='/chat' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
