import { Router } from "express";
import * as controllers from "../controllers/pets.js";
// import the pets route
import petsRoutes from "./pets.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to the Pet API");
});
// use pets routes
router.use("/pets", petsRoutes);

export default router;