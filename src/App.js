import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color , setColor] = useState('')
  const [error , setError] = useState(false)
  const [list , setList] = useState(new Values('#f15025').all(10));

  function handleSubmit(event){
    event.preventDefault();
    try {
      const colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      alert("Please provide right hex values")
    }
   
  }
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="" onSubmit = {handleSubmit} >
          <input type="text"  value={color} onChange={(event)=> setColor(event.target.value) } placeholder ='#f15025' 
            className={`${error ? 'error': null}`}
           />
          <button className='btn' type='submit'>Submit</button>
        </form>

      </section>
      <section className="colors">
        {
          list.map((color , colorIndex)=>{
            return <SingleColor key={colorIndex} {...color} index={colorIndex} hexColor={color.hex} />
          })
        }
      </section>


    </>
  );
}

export default App
