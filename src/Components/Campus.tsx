import * as React from 'react';

interface ICampusProps 
{
    image : string; 
    alt? : string;
    title : string; 
}

class Campus extends React.Component<ICampusProps> {
    public render() {
        return <div className="Campus">
            <section>
                <img src={this.props.image} alt={this.props.alt || "Image of campus"}/>
                <div>
                    <h2>{this.props.title}</h2>
                </div>
            </section>
            <section>part 2</section>
        </div>
    }
}

export default Campus; 