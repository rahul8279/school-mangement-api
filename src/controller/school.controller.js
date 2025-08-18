import SchoolModel from "../model/school.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { calculateDistance } from "../utils/calculateDistance.js";
import {errorHandler} from "../utils/errorhandler.js"


export const addSchool = asyncHandler(async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude === undefined || longitude === undefined) {
    return next(new errorHandler("All fields are required", 400));
  }
  if (typeof name !== "string" || typeof address !== "string") {
    return next(new errorHandler("Name and Address must be strings", 400));
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return next(
      new errorHandler("Latitude and Longitude must be numbers", 400)
    );
  }

  if (latitude < -90 || latitude > 90) {
    return next(new errorHandler("Latitude must be between -90 and 90", 400));
  }
  if (longitude < -180 || longitude > 180) {
    return next(
      new errorHandler("Longitude must be between -180 and 180", 400)
    );
  }

  const newSchool = await SchoolModel.addSchool({ name, address, latitude, longitude });

  res.status(201).json({
    success: true,
    message: "School added successfully",
    data: newSchool,
  });
});

export const getAllSchools = asyncHandler(async (req, res) => {
  const schools = await SchoolModel.getAllSchools();
  res.status(200).json({
    success: true,
    data: schools,
  });
});


export const listSchools = asyncHandler(async (req, res, next) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return next(new errorHandler("Latitude and Longitude are required", 400));
  }  
  const schools = await SchoolModel.getAllSchools();
  const sortedSchools = schools.map((school) => {
    const distance = calculateDistance(
      parseFloat(latitude),
      parseFloat(longitude),
      parseFloat(school.latitude),
      parseFloat(school.longitude)
    );
    return { ...school, distance : parseFloat(distance.toFixed(2)) };
  }).sort((a, b) => a.distance - b.distance);

  res.status(200).json({
    success: true,
    count: sortedSchools.length,
    data: sortedSchools,
  });
});