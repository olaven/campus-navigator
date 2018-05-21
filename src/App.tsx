import * as React from 'react';
import './App.css';

// TypeScript interfaces 
import {ICampus as ICampus} from './Interfaces/ICampus'; 

// components
import Campus from "./Components/Campus"; 
import CampusCard from "./Components/CampusCard"; 
// import Header from './Components/Header'; // left out for now

// images 
import fjerdingen_image from "./Images/Campuses/fjerdingen.png"; 
import kvadraturen_image from "./Images/Campuses/kvadraturen.png"; 
import vulkan_image from "./Images/Campuses/vulkan.png"; 

// import logo from './Images/logo.png'; // not used when header is not used

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
    const identifier = event.target.id; 
    toggleCampus(identifier); 
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
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
      return <div id={campus.name} className="campuses" key={campus.name}>
          <Campus title={campus.name} image={campus.image} />
        </div>;
    })
  }
}

export default App ;


/**
 * Toggles which campus is visible to the user, based on the clicked card
 */
const toggleCampus = (identifier : string) => 
{
  const campusSections = Array.from(document.getElementsByClassName('campuses')); 
  for(const campus of campusSections)
  {
    if(campus.id === identifier)
    {
      campus.setAttribute('style', 'visibility : visible');
    } else
    {
      campus.setAttribute('style', 'visibility : hidden');
    }
  }
}