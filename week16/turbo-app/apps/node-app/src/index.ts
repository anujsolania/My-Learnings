import express from "express";
import { NUMBER } from "@repo/common";

const app = express()

console.log(NUMBER)
app.get("/", (req, res) => {
    res.json({
        message: `hello world ${NUMBER}`
    });
})

app.listen(3002, () => {
    console.log("Server running on port 3003");
  });