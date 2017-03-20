import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Section} from '../components/section';
import {Controls} from '../components/controls';

var lorem = require('lorem-ipsum');

class LipsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //ipsums: [],
            count: 5,
            selectedOption: "paragraphs",
        };
        this.updateCount = this.updateCount.bind(this);
        this.updateOption = this.updateOption.bind(this);
    }
    /*
    componentDidMount() {
        axios.get('./random.txt').then(response => {
            let response_array = response.data.split("\n");
            response_array = response_array.filter((x) => {return (x !== "");});
            this.setState({ipsums: response_array});
        });
    }
    parseText(content) {
        if(content !== undefined) {
            switch(this.state.selectedOption) {
                case "paragraphs":
                    return content;
                case "words":
                    return content.split(" ")[0];
                case "sentences":
                    return content.split(".")[0] +". ";
            }
        }
    }
    */
    componentDidMount() {
        console.log(this.props);
    }
    updateCount(new_count) {
        this.setState({
            count: new_count,
        })
    }
    updateOption(new_option) {
        this.setState({
            selectedOption: new_option,
        })
    }
    render() {
        /*
        for (let i = 0; i < this.state.count; i++) {
            let random_index = Math.floor(Math.random() * this.state.ipsums.length);
            let random = this.state.ipsums[random_index];
            let return_text = this.parseText(random);
            output.push(<Section text={return_text} key={counter} selectedOption={this.state.selectedOption} />);
            counter++;
        }
        */
        let maxCount = 100;
        let generatedText = "";
        let output = [];
        let counter = 0;
        let count = this.state.count;
        let selectedOption = this.state.selectedOption;

        if (selectedOption === "paragraphs") {

            for (let i = 0; i < count; i++) {
                generatedText = lorem({
                    units: selectedOption,
                    count: 1
                });
                output.push(<Section text={generatedText} key={counter} selectedOption={selectedOption} />);
                counter++;
            }
        } else if(count !== 0) {
            generatedText = lorem({
                units: selectedOption,
                count: count
            });
            output.push(<Section text={generatedText} key={counter} selectedOption={selectedOption} />);
        }
        return(
            <div className="row">
                <div style={style.controls}>
                    <Controls count={this.state.count} onUpdateCount={this.updateCount} selectedOption={this.state.selectedOption} onUpdateOption={this.updateOption} maxCount={maxCount} />
                </div>
                <div id="lipsum" style={style.output}>
                    {output}
                </div>
            </div>
        );
    }
}
let style = {
    controls: {
        marginBottom: '10px'
    },
    output: {
        height: "350px",
        overflow: "scroll",
        border: "1px solid #aaa",
        padding: "20px",
        borderRadius: "5px"
    }
};

const mapStoreToProps = (store) => {
    return {
        num: store.num
    }
};

export default connect(mapStoreToProps)(LipsBox);
