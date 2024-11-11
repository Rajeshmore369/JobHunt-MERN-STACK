import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJob,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/Post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
