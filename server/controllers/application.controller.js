import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.param.id;
    if (!jobId) {
      return res.status(400).json({ message: "Invalid job ID" });
    }
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res
      .status(201)
      .json({ message: "Job Applied successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.body;
    const application = await Application.findById({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });
    if (!application) {
      return res
        .status(404)
        .json({ message: "No job applied", success: false });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplicant = async (req, res, next) => {
  try {
    const jobId = req.param.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({ message: "job not found", success: false });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.param.id;
    if (!status) {
      return res
        .status(404)
        .json({ message: "Invalid status", success: false });
    }

    //find application by applicantion id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res
        .status(404)
        .json({ message: "Application not found", success: false });
    }

    application.status = status.toLowerCase();
    await application.save();
    return res
      .status(200)
      .json({ message: "Application saved", success: true });
  } catch (error) {
    console.log(error);
  }
};
