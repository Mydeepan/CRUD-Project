import { DataProvider } from './dataContainer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Feed } from './Feed';
import { Update } from './update';

function App() {
 

  return (
    <DataProvider>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </DataProvider>
  )
}

export default App
