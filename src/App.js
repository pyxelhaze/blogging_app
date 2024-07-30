import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Errorpage from './components/Erorrpage';
import Footer from './components/Footer';
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
