import express from "express";

import {
  getAllColleges,
  searchColleges,
  getCollegeById,
} from "../controllers/collegeController.js";

const router = express.Router();

router.get("/", getAllColleges);

router.get("/search", searchColleges);

router.get("/:id", getCollegeById);

export default router;