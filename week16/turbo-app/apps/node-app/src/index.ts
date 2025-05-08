import express from "express";
import { secret2 } from "@repo/common";

const app = express()

console.log(secret2)
app.get("/", (req, res) => {
    res.json({
        message: `hello world ${secret2}`
    });
})

app.listen(3002, () => {
    console.log("Server running on port 3003");
  });