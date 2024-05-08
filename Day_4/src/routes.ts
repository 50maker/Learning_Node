import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

router.get("/home", async (req, res) => {
  //   res.json({ hello: "World" });
  const filePath = path.join(__dirname, "./static/index.html");
  const indexHtml = await fs.readFile(filePath);
  return res.end(indexHtml);
});

router.get("/contacts", async (req, res) => {
  //   res.json({ hello: "World" });
  const filePath = path.join(__dirname, "./static/contacts.html");
  const indexHtml = await fs.readFile(filePath);
  return res.end(indexHtml);
});

export default router;
