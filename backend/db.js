const mongoose = require('mongoose');
const db = process.env.MONGODB_URI;

if (!db) {
    throw new Error('You must provide a string to connect to MongoDB');
}

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
