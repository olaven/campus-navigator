import * as React from 'react';

interface ICampusCardProps {
    image: string;
    alt?: string; 
    text: string;
    customClickAction?: (event : any) => void; 
}

class CampusCard extends React.Component<ICampusCardProps> {
    public render() {
        return (
            <div className='CampusCard'>
                <h2>{this.props.text}</h2>
                <img src={this.props.image} alt={this.props.alt || "Image of Campus"}/>
            </div>
        );  
    }
}



export default CampusCard; 