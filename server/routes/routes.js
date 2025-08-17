const route = require("express").Router();
const { register, login, forgotPassword, search } = require("../controller/api");

route.post("/register", register);
route.post("/login", login);
route.post("/forgot-password", forgotPassword)
route.get("/search", search);

module.exports = route;