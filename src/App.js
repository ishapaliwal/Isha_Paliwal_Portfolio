import './App.css';
import TwinkleParticles from './components/special_components/TwinkleParticles';
import BorderAtTop from './components/BorderAtTop';
import BorderAtBottom from './components/BorderAtBottom';
import BorderAtLeft from './components/BorderAtLeft';
import BorderAtRight from './components/BorderAtRight';

function App() {
  return (
    <div>
      <BorderAtTop />
      <BorderAtLeft />
      <BorderAtRight />
      <BorderAtBottom />
      <div className='mainContent'></div>
      <TwinkleParticles />
    </div>
  );
}

export default App;
