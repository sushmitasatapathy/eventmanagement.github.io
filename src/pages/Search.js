import React, {useState} from "react";
import '../styles.css';
import data from "../TemplateData.json";
import {Link} from 'react-router-dom';


function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
        
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                  <h3>{val.title}</h3>
                  <Link to="/events">
                  <img src={val.image} alt="" />
                     

                      
                      <p className="price">{val.price}</p>
                      </Link>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;