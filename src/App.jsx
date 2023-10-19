import { useEffect, useState } from 'react'
import './App.css'
import TheLoader from './components/TheLoader';

function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fakeFetch = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    };

    fakeFetch();
  }, [])

  return isLoading ? (
    <TheLoader />
  ) : (
    <div className='max-w-6xl mx-auto border-4 '>
      <div className='text-center'>
        <button className='btn btn-warning'>click me</button>
      </div>
    </div>
  )
}

export default App
