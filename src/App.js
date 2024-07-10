import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Errorpage from './Erorrpage';
import './index.css';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/"
              element={<Main />}
            >
            </Route>
            <Route path="/create"
              element={<Create />}
            >
            </Route>
            <Route path="/blogs/:id"
              element={<BlogDetails />}
            >
            </Route>
            <Route path="*"
              element={<Errorpage />}
            >
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
