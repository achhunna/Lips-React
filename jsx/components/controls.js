import React from 'react';
import {Radio} from './radio';
import {Amount} from './amount';
import {COPYTEXT} from '../helper/copy';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    updateCount(new_count) {
        this.props.onUpdateCount(new_count);
        //dispatch(updateCount(new_count));
    }
    updateOption(new_option) {
        this.props.onUpdateOption(new_option);
        //dispatch(updateSelectedOption(new_option));
    }
    handleClick() {
        COPYTEXT('#lipsum');
    }

    render() {
        return(
            <form style={style.layout} className="form-inline">
                <div className="form-group">
                    <label className="radio-inline">Unit</label>
                    <Radio value="words" checked={this.props.selectedOption === "words"} onUpdateOption={this.updateOption} />
                    <Radio value="sentences" checked={this.props.selectedOption === "sentences"} onUpdateOption={this.updateOption} />
                    <Radio value="paragraphs" checked={this.props.selectedOption === "paragraphs"} onUpdateOption={this.updateOption} />
                </div>
                <Amount value={this.props.count} onUpdateCount={this.updateCount} maxCount={this.props.maxCount} onClickHandle={this.handleClick} />
            </form>
        );
    }
}

let style = {
    layout: {

    }
};

Controls.propTypes = {
    count: React.PropTypes.number,
    maxCount: React.PropTypes.number,
    selectedOption: React.PropTypes.string,
    onUpdateCount: React.PropTypes.func,
    onUpdateOption: React.PropTypes.func,
};

//export default connect(mapStoreToProps, mapDispatchToProps)(Controls);
export default Controls;
