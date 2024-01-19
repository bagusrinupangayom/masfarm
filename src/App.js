import './App.css';
import '../src/style/style.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coba from './pages/coba';
import NavigationBar from './pages/navigationBar';
import Home from './pages/home';
import Footer from './pages/footer';
import Order from './pages/order';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
    return (
        <>
            <Router>
                {/* Navbar */}
                <div>
                    <NavigationBar />
                </div>
                {/* End of navbar */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/coba" element={<Coba />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                {/* Footer */}
                <div>
                    <Footer />
                </div>
                {/* End of footer */}
            </Router>
        </>
    );
}

export default App;
