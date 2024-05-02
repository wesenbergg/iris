"use server";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import bcrypt from "bcrypt";

/**
 * Frontend usage:
 * <form action={createUserAction}>
 */
export const createUserAction = async (fd: FormData) => {
  let err;
  try {
    await dbConnect();

    const { password, confirmPassword, ...data } = Object.fromEntries(fd);

    if (password !== confirmPassword) throw new Error("Password not matching");

    const rounds = Number(process.env.SALT_ROUNDS);
    const salt = bcrypt.genSaltSync(rounds);
    const passwordHash = bcrypt.hashSync(String(password), salt);

    const user = new User({
      ...data,
      passwordHash,
    });

    await user.save();
  } catch (error) {
    console.log("e, ", error);
    err = error;
  }
  if (!err) redirect("/");
};
