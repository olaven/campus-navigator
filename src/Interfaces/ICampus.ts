import INaviationLink from "./INavigationLink";

export default interface ICampus {
    name : string;
    image : string;
    color : string; 
    description? : string; 
    location? : {
        longitude : number;
        latitude : number;
    };
    navigationLinks : INaviationLink[]; 
}

