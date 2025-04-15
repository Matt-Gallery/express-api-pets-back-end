import mongoose from 'mongoose';
import chalk from 'chalk';
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URI);

