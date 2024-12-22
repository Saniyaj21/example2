import React from 'react'

const Product = ({item}) => {
    return (

        <div className="card">
            <img src={item.url} alt="Card Image" className="card-img" />
            <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.desc}</p>
                <a href="#" className="card-btn">Read More</a>
            </div>
        </div>

    )
}

export default Product
