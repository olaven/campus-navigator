import * as React from 'react';

// Components
import NavigationLink from './NavigationLink';

// Custom interfaces 
import INavigationLink from '../Interfaces/INavigationLink'; 

interface ICampusProps 
{
    color? : string; 
    image : string; 
    alt? : string;
    title : string; 
    navigationLinks : INavigationLink[]; 
}



class Campus extends React.Component<ICampusProps> 
{

    private styles =
    {
        textDecoration: 'underline',
        textDecorationColor: this.props.color || 'white'
    }

    public render() 
    {
        return <div className='Campus'>
            <h2 style={this.styles}>{this.props.title}</h2>
            <div className='navigationLinks'>
                {this.renderNavigationLinks()} 
            </div>   
        </div>
    }

    
    private renderNavigationLinks() {
        return this.props.navigationLinks.map(navigationLink => {
            return <NavigationLink icon={navigationLink.icon} color={navigationLink.color} text={navigationLink.text} link={navigationLink.link} key={navigationLink.link} />
        });
    }
}

export default Campus; 