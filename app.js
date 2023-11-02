const mongoose = require('mongoose');
const db = require('./config/key').MongoURI;
const path = require('path');
const express = require('express');
const seedDB = require('./seed');
const app= express();
const productRoutes= require('./routes/productRoutes');
const reviewRoutes= require('./routes/reviewRoutes');
const methodOverride = require('method-override');
 
// seedDB()
mongoose.connect
(
    db, { useNewUrlParser: true, useUnifiedTopology: true }
).then
(
    () => console.log('MongoDB Atlas connected...')
    // () => console.log('MongoDB Local connected...')
).catch
(
    (err) => console.log(err)
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(productRoutes);
app.use(reviewRoutes);



let PORT=8089;
app.listen(PORT, ()=>{
    console.log(`Server connected at port ${PORT}`)
});
