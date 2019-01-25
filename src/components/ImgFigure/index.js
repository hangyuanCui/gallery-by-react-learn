import React from 'react';

export default class ImgFigure extends React.Component {
    render() {
      const { title, imageURL } = this.props.data;
      return (
        <figure>
          <img src={imageURL} alt={title}/>
          <figcaption>
              <h2></h2>
          </figcaption>
        </figure>
      )
    }
  }