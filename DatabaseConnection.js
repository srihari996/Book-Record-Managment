const mongoose =require("mongoose");

function DBconnection() {
    const DB_URL =process.env.MONGOOSE_URI;

    mongoose.connect(DB_URL, {
        useNewUrlparser : true,
        useUnifiedTopology : true,
    });

    const db =mongoose.connection;

    db.on("error", console.error.bind("Connection Error"));
    db.once("open", function () {
        console.log("Db Connected !!");
    });
}

//CURD => Create, Update, Read & Delete
module.exports = DBconnection;