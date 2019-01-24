import React from 'react';

let imageData = require('../assets/data/image-data.json');

const formatImageData = arrImages => arrImages.map((item) => {
    item.imageURL = require('../assets/images/' + item.fileName);
    return item;
});
  

export default class Main extends React.Component {

    render() {
        return (
            <div>
               {JSON.stringify(formatImageData(imageData))}
            </div>
        );
    }
} 