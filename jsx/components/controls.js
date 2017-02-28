import React from 'react';
import {Radio} from './radio';
import {Amount} from './amount';

export class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    updateCount(new_count) {
        this.props.onUpdateCount(new_count);
    }
    updateOption(new_option) {
        this.props.onUpdateOption(new_option);
    }
    handleClick(e) {
        e.preventDefault();
    }
    render() {
        return(
            <form style={style.layout} className="form-inline">
                <div className="form-group">
                    <label>Amount</label>
                    <Radio value="word" checked={this.props.selectedOption==="word"} onUpdateOption={this.updateOption.bind(this)} />
                    <Radio value="sentence" checked={this.props.selectedOption==="sentence"} onUpdateOption={this.updateOption.bind(this)} />
                    <Radio value="paragraph" checked={this.props.selectedOption==="paragraph"} onUpdateOption={this.updateOption.bind(this)} />
                </div>
                <div className="form-group">
                    <Amount value={this.props.count} onUpdateCount={this.updateCount.bind(this)} maxCount={this.props.maxCount} />
                    <button className="btn btn-default" onClick={this.handleClick}>Copy</button>
                </div>
            </form>
        );
    }
}

let style = {
    layout: {

    },
};

Controls.propTypes = {
    count: React.PropTypes.number,
    maxCount: React.PropTypes.number,
    selectedOption: React.PropTypes.string,
    onUpdateCount: React.PropTypes.func,
    onUpdateOption: React.PropTypes.func,
};
