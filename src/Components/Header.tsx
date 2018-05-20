import * as React from 'react';

interface IHeaderProps{
    image : string; 
    alt? : string; 
    text : string; 
}

class Header extends React.Component<IHeaderProps> {
    public render() {
        return (
        <div className='Header'>
            <img src={this.props.image} alt={this.props.alt || "Logo"} />
            <h1>{this.props.text}</h1>
        </div>
        );
    }
}


export default Header; 