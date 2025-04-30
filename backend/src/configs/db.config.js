const mongoose = requier('mongoose');

function connectDb() {
    mongoose.connect('mongodb://localhost:27017/MyFolioHub')
    .then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error in connection: ",err);
    });
}

module.exports = connectDb;