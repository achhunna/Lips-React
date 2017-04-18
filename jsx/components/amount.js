import React from 'react';
import {connect} from 'react-redux';
import {updateCount} from '../actions';

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
            //this.props.dispatch(updateCount(count));
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.onClickHandle();
    }
    render() {
        return(
            <div className="form-group">
                <label className="radio-inline">Count (max 100)</label>
                <input type="number" className="form-control radio-inline" style={style.layout} value={this.props.value} onChange={this.updateCount} />
                <button className="btn btn-default radio-inline" onClick={this.handleClick}>Copy</button>
                <div className="message">#</div>
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
    onUpdateCount: React.PropTypes.func,
    updateCount: React.PropTypes.func
};

const mapStoreToProps = (store) => {
    return {
        num: store.num
    }
};

export default connect(mapStoreToProps, {updateCount})(Amount);
