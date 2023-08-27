import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    <Heading title="1st heading" />
    <Heading title="2nd heading" subtitle="subtitle"/>
   </div>
  );
}
function Heading({title,subtitle="hello world"}){
  return <div>
    <h1>{title}</h1>
  <h2>{subtitle}</h2>
  </div>
}

export default App;
