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
            <div style={style.layout}>
                <label className="radio-inline">
                    <input type="radio" value={this.props.value} name="amount-radio" checked={this.props.checked} onChange={this.updateOption} />
                    {this.props.value}
                </label>
            </div>
        );
    }
}

let style = {
    layout: {
        display: "inline",
    },
};

Radio.propTypes = {
    value: React.PropTypes.string,
    onUpdateOption: React.PropTypes.func,
};
