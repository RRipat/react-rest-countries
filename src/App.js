
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries () {
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])

//   return(
//     <div>    
//       <h2>visiting every country of the world!!!</h2>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <country name={country.name.common}></country>)
//       }
//   </div>
//   )
// }




// function Country(props){
//   return(
//     <div>
//         <h1>CCountry Name: {props.country.name.common}</h1>
//         <img src={props.country.flags.png} alt="" srcset="" />
//     </div>
//   )
// }
export default App;
