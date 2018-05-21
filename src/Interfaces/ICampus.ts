export interface ICampus {
    name : string;
    image : string;
    description? : string; 
    location? : {
        longitude : number;
        latitude : number;
    };
}

