const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /*useFindAndModify: false,
            useCreateIndex: true*/ //these are no longer supported or necessary on mongoose v6+
        })

        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch(err){
        console.log(err);
        process.exit(1);//1 means true
    }
}

module.exports = connectDB