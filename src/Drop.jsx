import React, {useState, useEffect} from "react";
import Favorites from "./favorites";
import Main from "./main";
import './App.css';


// function select() {

//     const [dropState, setdropState] = useState('');
  

//     return <div className="container pt-5">
//         <select className="select-br" value={dropState} onChange={e=>setdropState(e.target.value)}>
//             <option value="1">Favorites</option>
//             <option value="2">Breeds</option>
//         </select>
//     </div>
   
// }


// export default function select() {
//     const getInitialState = () => {
//       const value = 'Orange';
//       return value;
//     };
  
//     const [value, setValue] = useState(getInitialState);
  
//     const handleChange = (e) => {
//       setValue(e.target.value);
//     };
  
//     return (
//       <div className="container pt-5">
//         <select value={value} onChange={handleChange} className="select-br">
//           <option value="Orange">Favorites</option>
//           <option value="Radish">Breeds</option>
         
//         </select>
//         <br/><br/>
//         {value}
//       </div>
      
//     );
//   }
  
// export default select




export default function Select() {
    const [opt, setopt] = useState("selectOpt");
  
    const [favoritesContentVisible, setFavoritesContentVisible] = useState(false);
    const [mainContentVisible, setMainContentVisible] = useState(false);
   
  
    useEffect(() => {
      opt === "favorites"
        ? setFavoritesContentVisible(true)
        : setFavoritesContentVisible(false);
      opt === "main" ? setMainContentVisible(true) : setMainContentVisible(false);
     
    }, [opt]);
  
    const handleOnChange = (e) => {
      setopt(e.target.value);
    };
  
    const makeFirstLetterCapital = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    const renderResult = () => {
      let result;
      opt === "selectOpt"
        ? (result = "select the option")
        : (result = makeFirstLetterCapital(opt));
      return result;
    };
  
    return (
      <div className="container pt-5">
        <div>
          <h1>{renderResult()}</h1>
        </div>
        <div className="mt-4">
          <select className="select-br" value={opt} onChange={handleOnChange}>
            <option value="selectOpt">Select the option</option>
            <option value="favorites">Favorites</option>
            <option value="main">Breeds</option>
            
          </select>
        </div>
        {favoritesContentVisible && <Favorites />}
        {mainContentVisible && <Main />}

      </div>
    );
  }