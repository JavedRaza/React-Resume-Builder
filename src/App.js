import React from 'react'
import UseForm from './Components/UseForm'
import './App.css'

function App() {
  return (
    <div>
        <div className="col-lg-8 mx-auto text-center mt-5">
          <h1><b>Let's generate  Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UseForm/>
    </div>  
  );
}

export default App;
