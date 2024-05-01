/**
 * Author: Vercel
 * Copy of: https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose
 */
import mongoose from "mongoose";
declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
    console.log("Connected to: ", MONGODB_URI);
  } catch (e) {
    console.log("ERROR: ", e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
