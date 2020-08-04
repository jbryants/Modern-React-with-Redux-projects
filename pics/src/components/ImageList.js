import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    // image.description, image.id, image.urls.regular --> {description, id, urls}
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    })

    return <div className="image-list">{images}</div>;

}

export default ImageList;