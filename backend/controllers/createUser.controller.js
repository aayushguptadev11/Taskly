import { createuser } from "../services/user.service.js";

export const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "allfields are required",
      });
    }

    const user = await createuser({ name, email, password });

    return res.status(201).json({
      success: true,
      message: "succesfull create user",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
