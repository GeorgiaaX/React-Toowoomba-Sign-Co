import React from 'react';

function ProductDetail({ data }) {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            {data.images.map((img, index) => (
                <img key={index} src={img} alt={data.name} />
            ))}
        </div>
    );
}

export default ProductDetail;