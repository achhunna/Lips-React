import React from 'react';

export class Amount extends React.Component {
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this);
    }
    updateCount(e) {
        this.props.onUpdateCount(e.target.value);
    }
    render() {
        return(
            <div style={style.layout}>
                <label>Count</label>
                <input type="number" className="form-control" value={this.props.value} onChange={this.updateCount} />
            </div>
        );
    }
}

let style = {
    layout: {
        display: "inline",
    },
};

Amount.propTypes = {
    value: React.PropTypes.number,
    onUpdateCount: React.PropTypes.func,
};
