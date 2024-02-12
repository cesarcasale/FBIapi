import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ data }) => {
  return (
    <div className="row py-5">
      {data.filter((fugitive)=>fugitive.images.length && fugitive.images[0].large).map((fugitive, index) => (
        <div key={index} className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card c-gallery_item" style={{ width: '15rem'}}>
                <img src={fugitive.images[0].large} className="card-img-top" alt={fugitive.title.split('-')[0]} />
                <div className="card-body">
                    <h5 className="card-title">{fugitive.title.split('-')[0]}</h5>
                    <Link to={`/details/${fugitive.uid}`} className="btn btn-warning">Details</Link>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

