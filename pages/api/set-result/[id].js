import { User } from "../../../models/user.model";
import { connectDB } from "../../../utils/connectDB";

export default async function setResult(req, res) {
  if (req.method === "PUT") {
    try {
      connectDB();

      const { id } = req.query;

      const body = JSON.parse(req.body);

      const user = await User.findByIdAndUpdate(id, {
        $set: { score: body.score, correctAnswers: body.correctAnswers },
      });
      res.json({ message: "Updated marks" });
    } catch (err) {
      if (err) {
        res.json({ error: "Something wend wrong" });
      }
    }
  }
}
