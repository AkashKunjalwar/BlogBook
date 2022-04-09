import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Gallery from "./components/Gallery/Gallery";
import Business from "./components/Business/Business";
import Profile from "./components/Profile/Profile";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import BlogPost from "./components/BlogPost/BlogPost";
import UpdateBlog from "./components/UpdateBlog/UpdateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/business" element={<Business />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/updateblog/:id" element={<UpdateBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
