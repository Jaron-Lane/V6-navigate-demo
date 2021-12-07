import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        {/* Routes before login */}
        <Route path="/login" element={<Login userLogsIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup userLogsIn={setIsLoggedIn}/>}></Route>
        
        {/* Routes after login */}
        {isLoggedIn && (
          <>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout userLogsIn={setIsLoggedIn}/>}></Route>
          </>
        )}
        
        {/* Routes for everyone */}
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} userLogsIn={setIsLoggedIn}/>}></Route>
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

function Home({isLoggedIn, userLogsIn}) {
  return (
    <div>
      {isLoggedIn ? <About /> : <Login userLogsIn={userLogsIn} />}
    </div>
  )
};

function Login({ userLogsIn }) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Login Page</h3>
      <button onClick={() => {
        userLogsIn(true)
        navigate('/')
      }}>
        Login here
      </button>
    </div>
  )
};

function Signup({ userLogsIn }) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Signup Page</h3>
      <button onClick={() => {
        userLogsIn(true)
        navigate('/')
      }}>Signup here</button>
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

function Logout({ userLogsIn }) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Logout Page</h3>
      <button onClick={() => {
        navigate('/')
        userLogsIn(false)
      }}>Logout here</button>
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
