import Pet from "../models/pets.js";

// READ - GET - /pets
export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - GET - /pets/:id
export const getPet = async (req, res) => {
  try {
    const { petId } = req.params;
    const pet = await Pet.findById(petId);
    if (!pet) {
      throw new Error("Pet not found");
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE - POST - /pets
export const createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - PUT - /pets/:id
export const updatePet = async (req, res) => {
  try {
    const { petId } = req.params;
    const pet = await Pet.findByIdAndUpdate(petId, req.body, { new: true });
    if (!updatedPet) {
      res.status(404).json({ error: "Pet not found" });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - DELETE - /pets/:id
export const deletePet = async (req, res) => {
  try {
    const { petId } = req.params;
    const pet = await Pet.findByIdAndDelete(petId);
    if (!pet) {
      res.status(404).json({ error: "Pet not found" });
    }
    res.json({ message: "Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};