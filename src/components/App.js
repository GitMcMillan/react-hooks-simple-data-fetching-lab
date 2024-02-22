// create your App component here
import React, { useState, useEffect } from 'react'

function App() {

  const [dogPic, setDogPic] = useState([])
  const [isLoaded, setIsloaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setDogPic(data.message)
        setIsloaded(true)
      })
  }, [])
  if (!isLoaded) return <h3>Loading...</h3>
  return (
    <div>

      {<img src={dogPic} alt="A Random Dog"></img>}
    </div>)
}

export default App