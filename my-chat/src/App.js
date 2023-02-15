
import './App.css';
import  {BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import Join from "./component/join/Join"
import Chat from "./component/chat/Chat"


function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Join />}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
