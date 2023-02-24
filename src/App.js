import Header from './components/Header';
import SectionCart from './components/SectionCart';
import './components/styles/_base.scss'
import './components/styles/_reset.scss'
import './components/styles/_vars.scss'
import data from './data';

function App() {
  return (
    <section className="section-cart">
      <Header/>
      <SectionCart data={data}/>
    </section>
  );
}

export default App;
