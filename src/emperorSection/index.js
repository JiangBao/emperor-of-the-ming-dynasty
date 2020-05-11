import React, { Component } from 'react';
import './index.css';

class EmperorSection extends Component {
  render() {
    const {title, imgUrl, link} = this.props.emperor;
    return (
      <div className="section" data-anchor={title}>
        <a href={link} target="_blank">
        <img className="emperor-img" src={imgUrl} alt={title} />
        </a>
        <p>{title}</p>
        {/* <button onClick={() => {this.props.fullpageApi.moveTo(1)}}>回到顶部</button> */}
      </div>
    )
  }
}

export default EmperorSection;