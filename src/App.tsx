import * as React from 'react';
import './App.css';

// components
import Campus from "./Components/Campus"; 
import CampusCard from "./Components/CampusCard"; 
// import Header from './Components/Header'; // left out for now

// images 
import fjerdingen_image from "./Images/Campuses/fjerdingen.png"; 
import kvadraturen_image from "./Images/Campuses/kvadraturen.png"; 
import vulkan_image from "./Images/Campuses/vulkan.png"; 

// Custom interfaces 
import ICampus from './Interfaces/ICampus';

// all campuses in list
const campuses: ICampus[] = [
  {
    color: "#C9243F",
    image: kvadraturen_image,
    name: "Kvadraturen",
    navigationLinks: [
      {
        color: "#E60000",
        icon: "train",
        link:
          "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30113707)Kirkegata 24 (Oslo)/etter/#st:0,sp:0,bp:0"
      },
      {
        color: "#E60000",
        icon: "coffee",
        link:
          "https://www.google.com/maps/search/kafeer+n%C3%A6r+kirkegata+24+oslo/@59.9135629,10.7423991,16z"
      },
      {
        color: "#1737b8",
        icon: "bicycle",
        link: "https://oslobysykkel.no/en/map"
      }
    ]
  },
  {
    color: "#8D285C",
    image: fjerdingen_image,
    name: "Fjerdingen",
    navigationLinks: [
      {
        color: "#E60000",
        icon: "train",
        link:
          "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30113707)Kirkegata 24 (Oslo)/etter/#st:0,sp:0,bp:0"
      },
      {
        color: "#207fa2",
        icon: "book",
        link: "http://biblioteket.kristiania.no/westerdals/"
      },
      {
        color: "#1737b8",
        icon: "bicycle",
        link: "https://oslobysykkel.no/en/map"
      }
    ]
  },
  {
    color: "#502C78", 
    image: vulkan_image,
    name: "Vulkan",
    navigationLinks: [
      {
        color: "#E60000",
        icon: "train",
        link:
          "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30121649)Vulkan 19 (Oslo)/etter/#st:0,sp:0,bp:0"
      },
      {
        color: "#1737b8",
        icon: "bicycle",
        link: "https://oslobysykkel.no/en/map"
      }
    ]
  }
];


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
        <Campus title={campus.name} image={campus.image} navigationLinks={campus.navigationLinks}/>
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