const dbOperations = require("./databaseOperations.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const PORT = 5000 || process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

router.use((req, res, next) => {
  console.log(
    "Middleware. It is executed before any route and generally used to include code related to authentication etc"
  );
  next();
});

router.route("/blogs").get((req, res) => {
  dbOperations.getBlogs().then((result) => res.json(result[0]));
});

router.route("/blogs/:id").get((req, res) => {
  dbOperations.getBlog(req.params.id).then((result) => res.json(result[0]));
});

router.route("/blogs/").post((req, res) => {
  let blog = { ...req.body };
  dbOperations.submitBlog(blog).then((result) => res.status(201).json(result));
});

router.route("/blogs/:id").put((req, res) => {
  let blog = { ...req.body };
  dbOperations
    .updateBlog(req.params.id, blog)
    .then((result) => res.status(201).json(result));
});

router.route("/blogs/:id").delete((req, res) => {
  dbOperations
    .deleteBlog(req.params.id)
    .then((result) => res.status(201).json(result));
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
