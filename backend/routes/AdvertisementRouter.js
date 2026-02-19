import express from "express";

import {
  getAllAdvertisements,
  getAdvertisementById,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
} from "../controllers/AdvertisementController.js";

const router = express.Router();

router.get("/", getAllAdvertisements);
router.get("/:id", getAdvertisementById);
router.post("/", createAdvertisement);
router.put("/:id", updateAdvertisement);
router.delete("/:id", deleteAdvertisement);

export default router;
