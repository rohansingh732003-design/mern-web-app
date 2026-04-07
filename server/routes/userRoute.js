import express from "express";

import { create, getAll, getUserById, update, deleteUser } from "../controller/userController.js";

const route = express.Router();
route.post("/user", create);
route.get("/user", getAll);
route.get("/user/:id",getUserById);
route.put("/user/:id", update);
route.delete("/user/:id", deleteUser);
export default route;