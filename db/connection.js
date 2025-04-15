import mongoose from 'mongoose';
import chalk from 'chalk';
import "dotenv/config";

mongoose.set("returnOriginal", false);

mongoose.connect(process.env.MONGODB_URI);
console.log(`Error connecting to MongoDB`);

mongoose.connection.on("disconnected", () => {
    console.log(chalk.red("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (error) => {
    console.log(chalk.red(`MongoDB connection error`));
});


export default mongoose.connection;




