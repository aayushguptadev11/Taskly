import User from "../models/user.models.js";
import bcrypt from "bcrypt";

export const getUser = async () => {
  try {
    const res = await User.find();
    return res;
  } catch (error) {
    throw new Error("internal error");
  }
};

export const createuser = async ({ name, email, password }) => {
  let userSearch = await User.findOne({ email });

  if (userSearch) {
    const error = "user already register";
    error.statusCode = 403;
    throw error;
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
