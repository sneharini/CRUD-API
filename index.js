import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';  //importing routes from routes folder coz we have all our routes form users.js file you fool!!!


const app = express(); // initializing express application
const PORT = 5000;      ///port for our app

app.use(bodyParser.json());  // read the request through json file

app.use('/users',usersRoutes);  // request sent to users.js file


app.get('/',(req,res)=>{                   /// creating routes ==> request from client
    
    res.send("Hello from Homepage")          // response send back to browser
});           

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // callback to listen                 