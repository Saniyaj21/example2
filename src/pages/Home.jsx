import React from 'react'
import About from './About'
import Product from '../components/Product'

const Home = () => {

    const products = [
        { title: "title 1", desc: "desc1", url: "url1" },
        { title: "title 2", desc: "desc1", url: "url1" },
        { title: "title 3", desc: "desc1", url: "url1" }
    ]


    return (
        <main>
            
            {
                products.map((item)=>{
                    return <Product key={item.title} item = {item} />
                })
            }


        </main>
    )
}

export default Home
