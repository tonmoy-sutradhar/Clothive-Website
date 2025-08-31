import { jwt } from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (token) {
      return res
        .status(400)
        .json({ message: "Not Authorized Admin, Login again" });
    }

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "Not Authorized Admin, Invalid Token" });
    }

    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
  } catch (err) {
    console.log("Admin auth error", err);
    return res
      .status(500)
      .json({ message: "Not Authorized Admin, Admin auth error" });
  }
};

export default adminAuth;
