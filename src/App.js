
import './App.css';


function App() {
  return (
    
    <div className="App">
      <nav className="navbar">
        <a className="navbarbrand" href="/">
          <img src="../images/ironhack-logo.svg" alt="logo" width="30" height="24" />
        </a>
        <img src="../images/menu-top.svg" alt="menu-top" />
      </nav>

      <header className="App-header">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular fronted library,and become a super Ninja developer.
        </p>
        <button className="Button">Awesome!</button>
      </header>
      <div class="container">
      <ul>
        <li><img src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </li>
        <li><img src="/images/icon2.png" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
          </li>
          <li><img src="/images/icon3.png" />
          <h2>Single-Way</h2>
          <p>A set of inmutable values are passed to the components.</p>
          </li>
        <li><img src="/images/icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed, desinged to run on modern browsers.</p>
          </li>
      </ul>
      </div>
    </div>
  );
}

export default App;
