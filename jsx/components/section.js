import React from 'react';

export class Section extends React.Component {
    render() {
        return(
            <p>
                {this.props.text}
            </p>

        );
    }
}

let style = {
    layout: {
        fontSize: "15px",
        marginBottom: "20px",
    },
};
