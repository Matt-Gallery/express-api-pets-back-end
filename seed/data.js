import db from "../db/connection.js";
import Pet from "../models/Pet.js";

const insertData = async () => {
    await db.dropDatabase();
    const pets = [
        {
            name: "Cherie",
            age: 4,
            breed: "Poodle"
        },
        {
            name: "Buddy",
            age: 2,
            breed: "Labrador"
        },
        {
            name: "Max",
            age: 1,
            breed: "Donkey"
        },
        {
            name: "Bella",
            age: 3,
            breed: "Eagle"
        }
    ]
};

insertData();