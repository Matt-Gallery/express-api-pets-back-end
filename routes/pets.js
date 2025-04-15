import { Router } from "express";
import * as controllers from "../controllers/pets.js";

const router = Router();

router.get("/", controllers.getPets);
router.get("/:id", controllers.getPet);
router.post("/", controllers.createPet);
router.put("/:id", controllers.updatePet);
router.delete("/:id", controllers.deletePet);

export default router;