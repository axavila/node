const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'))

// app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.json());

// app.get('/:id', (req, res) => {
//     // console.log(req.query);
//     // req.body
//     // console.log(req.header);
//     console.log(req.params);



//     res.status(404).send("not found");
// });



app.listen(3000)