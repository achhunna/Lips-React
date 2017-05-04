import React from 'react';
import {connect} from 'react-redux';

import {Section} from '../components/section';
import Controls from '../components/controls';

var lorem = require('lorem-ipsum');

const mapStoreToProps = (store) => {
  return {count: store.count, selectedOption: store.selectedOption}
};

class LipsBox extends React.Component {
  render() {
    const maxCount = 100;
    let generatedText = "";
    let output = [];
    let counter = 0;
    const count = this.props.count;
    const selectedOption = this.props.selectedOption;

    if (selectedOption === "paragraphs") {

      for (let i = 0; i < count; i++) {
        generatedText = lorem({units: selectedOption, count: 1});
        output.push(<Section text={generatedText} key={counter} selectedOption={selectedOption}/>);
        counter++;
      }
    } else if (count !== 0) {
      generatedText = lorem({units: selectedOption, count: count});
      output.push(<Section text={generatedText} key={counter} selectedOption={selectedOption}/>);
    }
    return (
      <div className="row">
        <div style={style.controls}>
          <Controls count={this.props.count} selectedOption={this.props.selectedOption} maxCount={maxCount}/>
        </div>
        <div id="lipsum" style={style.output}>
          {output}
        </div>
      </div>
    );
  }
}
const style = {
  controls: {
    marginBottom: '10px'
  },
  output: {
    height: "calc(100vh - 350px)",
    overflow: "scroll",
    border: "1px solid #aaa",
    padding: "20px",
    borderRadius: "5px"
  }
};

LipsBox.propTypes = {
  count: React.PropTypes.number,
  selectedOption: React.PropTypes.string
};

export default connect(mapStoreToProps)(LipsBox);
