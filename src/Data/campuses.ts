// Custom interfaces 
import ICampus from '../Interfaces/ICampus'; 

// images 
import brenneriveien_image from "../Images/Campuses/brenneriveien.jpg";
import fjerdingen_image from "../Images/Campuses/fjerdingen.png";
import kvadraturen_image from "../Images/Campuses/kvadraturen.png";
import vulkan_image from "../Images/Campuses/vulkan.png"; 


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
                    "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30113707)Kirkegata 24 (Oslo)/etter/#st:0,sp:0,bp:0",
                text: "Ruter"
            },
            {
                color: "brown",
                icon: "coffee",
                link:
                    "https://www.google.com/maps/search/kafeer+n%C3%A6r+kirkegata+24+oslo/@59.9135629,10.7423991,16z",
                text: "Kafeer"
            },
            {
                color: "#1737b8",
                icon: "bicycle",
                link: "https://oslobysykkel.no/en/map",
                text: "Bysykkel"
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
                    "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30113707)Kirkegata 24 (Oslo)/etter/#st:0,sp:0,bp:0",
                text: "Ruter"
            },
            {
                color: "#207fa2",
                icon: "book",
                link: "http://biblioteket.kristiania.no/westerdals/",
                text: "Bibliotek"
            },
            {
                color: "#1737b8",
                icon: "bicycle",
                link: "https://oslobysykkel.no/en/map",
                text: "Bysykkel",
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
                    "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30121649)Vulkan 19 (Oslo)/etter/#st:0,sp:0,bp:0",
                text: "Ruter"
            },
            {
                color: "#207fa2",
                icon: "book",
                link: "http://biblioteket.kristiania.no/westerdals/",
                text: "Bibliotek"
            },
            {
                color: "#1737b8",
                icon: "bicycle",
                link: "https://oslobysykkel.no/en/map",
                text: "Bysykkel",
            }
        ]
    },
    {
        color: "#68789B",
        image: brenneriveien_image,
        name: "Brenneriveien",
        navigationLinks: [
            {
                color: "#E60000",
                icon: "train",
                link:
                    "https://ruter.no/reiseplanlegger/Mellom/Fra/Min posisjon/til/(30121649)Vulkan 19 (Oslo)/etter/#st:0,sp:0,bp:0",
                text: "Ruter"
            },
            {
                color: "#1737b8",
                icon: "bicycle",
                link: "https://oslobysykkel.no/en/map",
                text: "Bysykkel"
            }
        ]
    }
];

export default campuses; 