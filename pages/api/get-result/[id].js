import { User } from "../../../models/user.model";
import { connectDB } from "../../../utils/connectDB";

export default async function getResult(req, res) {
  try {
    if (req.method === "GET") {
      connectDB();

      const { id } = req.query;

      const user = await User.findById(id).select("score correctAnswers");

      if (user) {
        return res.json(user);
      } else {
        return res.json({ error: "User not found" });
      }
    }
  } catch (err) {
    if (err) res.json({ error: "ID required" });
  }
}
