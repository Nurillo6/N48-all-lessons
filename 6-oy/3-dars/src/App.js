import toast, { Toaster } from 'react-hot-toast';
import './App.scss';
import Carusel from './components/Carusel/Carusel';
import Header from './components/Header/Header';
import Swipe from './components/Swipper/Swipe2';
import Swipper from './components/Swipper/Swipper';
import Todo from './components/Todo/Todo';
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
      {/* <Carusel/> */}
      {/* <Swipper/> */}
      {/* <Swipe/> */}
      {/* <Header/> */}
      {/* <button className='bg-green-500 ' onClick={() => toast.success('Muvaffaqiyatli')}>Success Toast</button> */}
      {/* <button className='bg-red-500 ' onClick={() => toast.error('Muvaffaqiyatsiz')}>Error Toast</button> */}
      <div className='w-[500px] flex flex-col justify-center mx-auto mt-10'>
        <Todo/> 
      </div>
    </>
  );
}

export default App;
