import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";

export async function getUserData() {
  "use server";
  try {
    await dbConnect();
    const events = await User.find(
      {},
    ).exec(); /* find all the data in our database */
    return events;
  } catch (error) {
    return error;
  }
}
