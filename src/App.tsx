import * as React from 'react';
import './App.css';

// components
import CampusCard from "./Components/CampusCard"; 
import Header from './Components/Header'; 

// images 
import fjerdingen_image from "./Images/Campuses/fjerdingen.png"; 
import kvadraturen_image from "./Images/Campuses/kvadraturen.png"; 
import vulkan_image from "./Images/Campuses/vulkan.png"; 

import logo from './Images/logo.png'; 

// all campuses in list
const campuses: ICampus[] = 
[
    {name : 'Kvadraturen', image : kvadraturen_image},
    {name: 'Fjerdingen', image: fjerdingen_image },
    {name: 'Vulkan', image: vulkan_image }
]


class App extends React.Component {

  public renderCampuses()
  {
    return campuses.map(campus => 
    {
      return <CampusCard image={campus.image} text={campus.name} key={campus.name} />
    }); 
  }

  public render() {
    return <div className="App">
        <Header image={logo} text="Trykk på ditt campus." />
        <div>
          {this.renderCampuses()} 
        </div>
      </div>;
  }
}

export default App ;

// handy interfaces 

interface ICampus {
  name : string; 
  image : string; 
  // add more 
}
