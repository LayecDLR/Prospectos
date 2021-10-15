const express = require ('express')
const morgan = require ('morgan')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const mongoose = require ('mongoose')
require ('dotenv').config()
const Prospect = require('./models/prospecto');

//import routes
const prospectRoutes= require('./routes/prospecto')
// app
const app = express()

//db
const conection = mongoose.connect(process.env.DATABASE
)
.then(()=> console.log('DB connected'))
.catch(err => console.log(err));

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//routes middleware
app.use('/api', prospectRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on:  ${port}`))