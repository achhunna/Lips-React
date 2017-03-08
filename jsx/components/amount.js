import React from 'react';

export class Amount extends React.Component {
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    updateCount(e) {
        let count = Number(e.target.value);
        if(count >= 0 && count <= this.props.maxCount) {
            this.props.onUpdateCount(count);
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.onClickHandle();
    }
    render() {
        return(
            <div className="form-group">
                <label className="radio-inline">Count</label>
                <input type="number" className="form-control radio-inline" style={style.layout} value={this.props.value} onChange={this.updateCount} />
                <button className="btn btn-default radio-inline" onClick={this.handleClick}>Copy</button>
            </div>
        );
    }
}

let style = {
    layout: {
        width: "72px"
    }
};

Amount.propTypes = {
    value: React.PropTypes.number,
    maxCount: React.PropTypes.number,
    onUpdateCount: React.PropTypes.func
};
