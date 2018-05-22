import * as React from 'react';

// Components
import NavigationLink from './NavigationLink';

// Custom interfaces 
import INavigationLink from '../Interfaces/INavigationLink'; 

interface ICampusProps 
{
    image : string; 
    alt? : string;
    title : string; 
    navigationLinks : INavigationLink[]; 
}



class Campus extends React.Component<ICampusProps> 
{
    public render() {
        return <div className='Campus'>
            <section>
                <img src={this.props.image} alt={this.props.alt || 'Image of campus'}/>
                <div>
                    <h2>{this.props.title}</h2>
                </div>
            </section>
            <section>
                <div className='navigationLinks'>
                    {this.renderNavigationLinks()} 
                </div>              
            </section>
        </div>
    }
    
    private renderNavigationLinks() {
        return this.props.navigationLinks.map(navigationLink => {
            return <NavigationLink icon={navigationLink.icon} color={navigationLink.icon} link={navigationLink.link} key={navigationLink.link} />
        });
    }
}

export default Campus; 