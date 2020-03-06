const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('')
        console.log(`MongoDB connected..`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;