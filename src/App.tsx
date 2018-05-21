import * as React from 'react';
import './App.css';

// TypeScript interfaces 
import {ICampus as ICampus} from './Interfaces/ICampus'; 

// components
import Campus from "./Components/Campus"; 
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


class App extends React.Component 
{
  public render() {
    return (
      <div className="App">
        <div id="first-page">
          <Header image={logo} text="Trykk på ditt campus." />
          <div className="cards">{this.renderCampusCards()}</div>
        </div>
        <div id="second-page">
          {this.renderCampuses()}
        </div>
      </div>
    );
  }

  private onCardClicked(event: any) 
  {
    alert(event.target.parentNode.id);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  private renderCampusCards() 
  {
    return campuses.map(campus => 
    {
      return (
        <div onClick={this.onCardClicked} id={campus.name} key={campus.name}>
          <CampusCard text={campus.name} image={campus.image} />
        </div>
      );
    });
  }

  private renderCampuses()
  {
    return campuses.map(campus => 
    {
      return <div id={campus.name} key={campus.name}>
          <Campus title={campus.name} image={campus.image} />
        </div>;
    })
  }
}

export default App ;

