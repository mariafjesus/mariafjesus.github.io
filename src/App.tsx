import blob1 from './assets/images/background/blob1.png'
import blob2 from './assets/images/background/blob2.png'
import blob3 from './assets/images/background/blob3.png'
import './App.css'
import TextAnimation from './components/TextAnimation'

function App() {
  return (
    <>
      <div className="row">
        <h1>Welcome I'm</h1>
        <TextAnimation />
      </div>
      
      <p className="read-the-docs">
        Content coming soon...
      </p>
      <img src={blob1} id="blob1" className="background" alt="React logo" />
      <img src={blob2} id="blob2" className="background" alt="React logo" />
      <img src={blob3} id="blob3" className="background" alt="React logo" />
    </>
  )
}

export default App
