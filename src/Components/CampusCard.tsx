import * as React from 'react';

interface ICampusCardProps 
{
    color : string; 
    text : string;
    customClickAction?: (event : any) => void; 
}

class CampusCard extends React.Component<ICampusCardProps> 
{
    public render() 
    {
        return <div className='CampusCard' style={{backgroundColor : this.props.color}}>
            {this.props.text}
        </div>
    }
}



export default CampusCard; 