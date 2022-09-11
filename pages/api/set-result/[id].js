import { User } from "../../../models/user.model";

export default async function setResult(req, res) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;

      const body = JSON.parse(req.body);

      console.log(body);

      const user = await User.findByIdAndUpdate(id, {
        $set: { score: body.score, correctAnswers: body.correctAnswers },
      });
      console.log(user);
      res.json({ message: "Updated marks" });
    } catch (err) {
      if (err) {
        console.log(err);
        res.json({ error: "Something wend wrong" });
      }
    }
  }
}
