const mongoose = require('mongoose');


const app = require('./app');
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/foodService', {})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));




// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});