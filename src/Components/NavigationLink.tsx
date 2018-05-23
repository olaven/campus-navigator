import * as React from 'react';


interface INavigationLinkProps {
    icon : string; 
    color : string; 
    link : string; 
}

class NavigationLink extends React.Component<INavigationLinkProps>
{
    private styles = {
        color: this.props.color, 
    }

    public render() {
        const faClass = "fa fa-" + this.props.icon; 
        return <a href={this.props.link} target="_blank" className='NavigationLink'>
            <div className='NavigationLink' style={this.styles}>
                <i className={faClass} />
            </div>
        </a>
    }
}


export default NavigationLink; 