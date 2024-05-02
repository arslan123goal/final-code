// const express = require("express");
// const path = require("path");
// const app = express();
// const mongoose = require('mongoose');
// const bodyparser = require("body-parser")

// async function main() {
//     // await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
//     await mongoose.connect('mongodb://localhost/contactDance');
// }

// const port = 80;

// // Define mongoose schema
// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });
// var contact = mongoose.model('Contact', contactSchema);

// app.use('/static', express.static('static'));
// app.use(express.urlencoded());
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res) => {
//     const parms = {};
//     res.status(200).render('home.pug', parms);
// })
// app.get('/contact', (req, res) => {
//     const parms = {};
//     res.status(200).render('contact.pug', parms);
// })

// app.post('/contact', (req, res)=>{
//     var myData = new contact(req.body);
//     myData.save().then(() => {
//         res.send("This item has been saved to the database")
//     }).catch(() =>{
//         res.status(400).send("Item was not saved to the database")
//     });
//     // res.status(200).render('contact.pug', params);
// });


// app.listen(port, () => {
//     console.log(`The application started successfully on port ${port}`);
// })



const express = require("express");
const path = require("path");
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = 8000;

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

const contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static')); // for serving static file
app.use(express.urlencoded());

app.set('view engine', 'pug');  //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
});
app.get('/about', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params)
})
app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.pug', params)
})
app.get('/class', (req, res) => {
    const params = {};
    res.status(200).render('class.pug', params)
})
app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() =>{
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug', params);
});


// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})