// import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Card from './components/Card/Card'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const App = () => {
    return (
        <div className="container">
            <div className='container-box'>
                <SearchBox />
                <div className='container-list'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default App
