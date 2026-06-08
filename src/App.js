import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./app/Navbar";
import Footer from "./app/Footer";
import RecipeListsContainer from "./containers/RecipeListsContainer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeListsContainer />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
