import React from 'react';
import axios from 'axios';

import {Section} from '../components/section';
import {Controls} from '../components/controls';

/*
var lorem = require('lorem-ipsum');

console.log(lorem({
    units: 'word',
    count: 10,
}));*/

export class LipsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipsums: [],
            count: 5,
            selectedOption: "paragraph",
        };
        this.updateCount = this.updateCount.bind(this);
        this.updateOption = this.updateOption.bind(this);
    }
    componentDidMount() {
        axios.get('./random.txt').then(response => {
            let response_array = response.data.split("\n");
            response_array = response_array.filter((x) => {return (x !== "");});
            this.setState({ipsums: response_array});
        });
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
    parseText(content) {
        if(content !== undefined) {
            switch(this.state.selectedOption) {
                case "paragraph":
                    return content;
                case "word":
                    return content.split(" ")[0];
                case "sentence":
                    return content.split(".")[0] +". ";
            }
        }
    }
    render() {

        let output = [];
        let counter = 1;
        let maxCount = 100;

        for (let i = 0; i < this.state.count; i++) {
            let random_index = Math.floor(Math.random() * this.state.ipsums.length);
            let random = this.state.ipsums[random_index];
            let return_text = this.parseText(random);
            output.push(<Section text={return_text} key={counter} selectedOption={this.state.selectedOption} />);
            counter++;
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
