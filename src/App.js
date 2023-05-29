import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateEvent, HomePage, LogIn, Navbar, SignUp } from './components/components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<HomePage/>} />
      <Route path='/login' exact element={<LogIn/>} />
      <Route path='/signup' exact element={<SignUp/>} />
      <Route path='/createvent' element={<CreateEvent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
