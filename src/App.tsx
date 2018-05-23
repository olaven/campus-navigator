import * as React from 'react';
import './App.css';

// components
import Campus from "./Components/Campus"; 
import CampusCard from "./Components/CampusCard"; 


// Data 
import campuses from './Data/campuses'; 



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
    window.scrollTo({ top: window.outerHeight, behavior: "smooth" });
  }

  private renderCampusCards() 
  {
    return campuses.map(campus => 
    {
      return (
        <div onClick={this.onCardClicked} id={campus.name} key={campus.name}>
          <CampusCard text={campus.name} color={campus.color} />
        </div>
      );
    });
  }

  private renderCampuses()
  {
    return campuses.map(campus => 
    {
      return <div id={campus.name} className="campuses" key={campus.name}>
        <Campus title={campus.name} image={campus.image} navigationLinks={campus.navigationLinks} color={campus.color}/>
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
    campus.setAttribute("style", "display : " + (campus.id === identifier ? "block" : "none"));
  }
}