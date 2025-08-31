import e from "express";
import User from "../model/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user is not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log("UserController error");
    return res
      .status(500)
      .json({ message: `UserController getCurrent user error ${err}` });
  }
};

// Admin
export const getAdmin = async (req, res) => {
  try {
    let adminEmail = req.adminEmail;

    if (!adminEmail) {
      return res.status(400).json({ message: "Admin not found" });
    }

    return res.status(201).json({ email: adminEmail, role: "admin" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Get admin error" });
  }
};
