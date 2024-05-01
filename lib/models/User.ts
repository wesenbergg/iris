import mongoose from "mongoose";

export type IUser = mongoose.Document & {
  name: string;
  email: string;
  image?: string;
  firstName?: string;
  lastName?: string;
  passwordHash: string;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  passwordHash: {
    type: String,
    required: true,
  },
});

UserSchema.set("toJSON", {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

export default mongoose.models.User ??
  mongoose.model<IUser>("User", UserSchema);
