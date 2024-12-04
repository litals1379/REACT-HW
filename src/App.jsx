
import './App.css'
import CCHomePage from './ClassComps/CCHomePage'
function App() {
  return (
    <div style={{border:'solid purple 2px',margin:5,padding:5,borderRadius:10}}>   
      <div className='card'>
        <CCHomePage/>
      </div>
    </div>
     
  )
}

export default App
