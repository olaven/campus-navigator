import * as React from 'react';

// Components
import Menu from './Menu'; 

interface ICampusProps 
{
    image : string; 
    alt? : string;
    title : string; 
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
                <Menu />
            </section>
        </div>
    }
}

export default Campus; 