import React from 'react';

export class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.updateOption = this.updateOption.bind(this);
    }
    updateOption(e) {
        this.props.onUpdateOption(e.target.value);
    }
    render() {
        return(
            <label className="radio-inline">
                <input type="radio" value={this.props.value} checked={this.props.checked} onChange={this.updateOption} />
                {this.props.value}
            </label>
        );
    }
}

let style = {
    layout: {
        display: "inline"
    }
};

Radio.propTypes = {
    value: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onUpdateOption: React.PropTypes.func
};
