import { Router } from "express";
import { 
  getFarms, 
  addFarm,
  getFarmById,
  updateFarm,
  deleteFarm
} from "../controllers/farms.controller";

const router = Router();

router.get("/", getFarms);
router.post("/", addFarm);
router.get("/:id", getFarmById);
router.put("/:id", updateFarm);
router.delete("/:id", deleteFarm);

export default router;
