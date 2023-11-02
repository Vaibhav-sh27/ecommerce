const mongoose = require('mongoose');
const Product = require('./model/Product');

let products=[
    {
        name:"Laptop",
        img: "https://th.bing.com/th/id/OIP.qcNPuPJojLbi1zCF-TEK6wAAAA?pid=ImgDet&rs=1",
        price: 57000,
        desc: "11th Generation Intel® Core™ i3 processor"
    },{
        name:"Smart Phone",
        img: "https://th.bing.com/th/id/OIP.bSfdt5vLVpSDs-_PL0lKKAHaHa?pid=ImgDet&rs=1",
        price: 20000,
        desc: "Simply smart"
    },{
        name:"Airdopes",
        img: "https://www.fullspecs.net/images/products/1441_4_boat-airdopes-381-4ca9c7f0c1a59e1ee841aadf82463a64.jpg",
        price: 2000,
        desc: "Immersive experience"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded");
}

module.exports = seedDB;