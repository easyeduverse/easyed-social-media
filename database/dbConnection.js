const mongoose = require("mongoose");
const Connection = async () => {
  const URI = process.env.MONGO_URL;
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("you got this ", error);
  }
};
module.exports = Connection;
