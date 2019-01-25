import React from 'react';
import ImgFigure from '../components/ImgFigure';

let imageDatas = require('../assets/data/image-data.json');

imageDatas = (function(imageDatas) {
    return imageDatas.map((item) => {
        item.imageURL = require('../assets/images/' + item.fileName);
        return item;
    })
})(imageDatas);

export default class Main extends React.Component {

  render() {
    let controllerUnits = [];
    let imgFigures = [];

    imageDatas.forEach((item) => {
      imgFigures.push(<ImgFigure data={item} key={item.id}/>);
    })

    return (
        <section className="stage">
            <section className="img-sec">
            {imgFigures}
            </section>
            <nav className="controller-nav">
            {controllerUnits}
            </nav>
        </section>
    );
  }
}