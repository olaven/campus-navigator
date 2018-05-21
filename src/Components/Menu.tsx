import * as React from 'react';


class Menu extends React.Component 
{
    public render()
    {
        return <div className="Menu">
            <div>
                {this.renderOptions()}
            </div>
        </div>
    }

    private renderOptions()
    {
        return "test"; 
    }
}


export default Menu; 