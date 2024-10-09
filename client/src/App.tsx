import axios from 'axios'
import './App.css'

function App() {
  const handleSubmit = async () => {
   await axios.post("http://localhost:3000/auth/signup", {
      email: "bhai_hai_madar@gmail.com",
      password: "Keyamondal@123"
    })
  }

  return (
    <div>
      <button onClick={handleSubmit}>POST req</button>
    </div>
  )
}

export default App
