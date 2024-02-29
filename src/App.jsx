import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
function App() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/test1" element={<h1>Test 1!!</h1>} /> 
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
