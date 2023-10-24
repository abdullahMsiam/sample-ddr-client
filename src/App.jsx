import { useEffect, useState } from 'react'
import './App.css'
import TheLoader from './components/TheLoader';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

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
    <div className='max-w-7xl mx-auto '>
      <Home />
    </div>
  )
}

export default App
