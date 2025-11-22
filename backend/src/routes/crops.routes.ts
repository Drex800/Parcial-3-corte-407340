import { Router } from "express";
import {
  getCrops,
  addCrop,
  getCropById,
  updateCrop,
  deleteCrop
} from "../controllers/crops.controller";

const router = Router();

router.get("/", getCrops);
router.post("/", addCrop);
router.get("/:id", getCropById);
router.put("/:id", updateCrop);
router.delete("/:id", deleteCrop);

export default router;
