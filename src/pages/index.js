import React from 'react';

let imageData = require('../assets/data/image-data.json');

imageData = (function(imageData) {
    return imageData.map((item) => {
        item.imageURL = require('../assets/images/' + item.fileName);
        return item;
    })
})(imageData);
  

export default class Main extends React.Component {

    render() {
        return (
            <section className="stage">
                <section className="img-sec">
                </section>
                <nav className="controller-nav">
                </nav>
            </section>
        );
    }
}