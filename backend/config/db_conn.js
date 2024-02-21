const mongoose = require("mongoose");

const dbConn = () => {
  mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`DB connected at ${data.connection.host}`);
  });
};

module.exports = dbConn;
