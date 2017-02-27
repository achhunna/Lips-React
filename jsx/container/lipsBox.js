import React from 'react';
import axios from 'axios';

import {Section} from '../components/section';
import {Controls} from '../components/controls';
/*
var lorem = require('lorem-ipsum');

console.log(lorem({
    units: 'words',
    count: 1,
}));*/

export class LipsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipsums: [],
            count: 5,
            selectedOption: "Paragraph",
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
                case "Paragraph":
                    return content;
                case "Word":
                    return content.split(" ")[0];
                case "Sentence":
                    return content.split(".")[0] +". ";
            }
        }
    }
    render() {

        let output = [];
        let counter = 1;

        for (let i = 0; i < this.state.count; i++) {
            let random_index = Math.floor(Math.random() * this.state.ipsums.length);
            let random = this.state.ipsums[random_index];
            let return_text = this.parseText(random);
            output.push(<Section text={return_text} key={counter} selectedOption={this.state.selectedOption} />);
            counter++;
        }

        return(
            <div>
                <div className="row" style={style.layout}>
                    <Controls count={this.state.count} onUpdateCount={this.updateCount.bind(this)} selectedOption={this.state.selectedOption} onUpdateOption={this.updateOption.bind(this)} />
                    <div id="lipsum">
                        {output}
                    </div>
                </div>
            </div>
        );
    }
}
let style = {
    layout: {
        height: "400px",
        overflow: "scroll",
        border: "1px solid black",
        padding: "20px",
        borderRadius: "5px",
    },
};
