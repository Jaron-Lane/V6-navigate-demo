import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        
        <Route path="/:pageName" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


function NavBar() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '80px',
      margin: '16px',
      backgroundColor: '#0004',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}> 

    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link> 
    <Link to="/about">About</Link> 
    <Link to="/logout">Logout</Link> 
    </div>
  )
};

function Home({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn ? <About /> : <Login />}
    </div>
  )
};

function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <button>Login here</button>
    </div>
  )
};

function Signup() {
  return (
    <div>
      <h3>Signup Page</h3>
      <button>Signup here</button>
    </div>
  )
};

function About() {
  return (
    <div>
      <h3>About Page</h3>
      <button>About</button>
    </div>
  )
};

function Logout() {
  return (
    <div>
      <h3>Logout Page</h3>
      <button>Logout here</button>
    </div>
  )
};

function ErrorPage() {
  const params = useParams()

  return (
    <div>
      <h3>ERROR: {params.pageName} PAGE NOT FOUND</h3>
    </div>
  )
}

export default App;
