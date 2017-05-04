import React from 'react';

export class Section extends React.Component {
  render() {
    const selectedOption = this.props.selectedOption;
    let section_render = "";

    if (selectedOption === "paragraphs") {
      section_render = <p>{this.props.text}</p>;
    } else {
      section_render = this.props.text + " ";
    }
    return (
      <div style={style.layout}>
        {section_render}
      </div>

    );
  }
}

let style = {
  layout: {
    fontSize: "15px",
    marginBottom: "20px",
    display: "inline"
  }
};
