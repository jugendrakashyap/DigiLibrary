const route = require("express").Router();
const { register, login, search } = require("../controller/api");

route.post("/register", register);
route.post("/login", login);
route.get("/search", search);

module.exports = route;