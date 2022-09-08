const express = require("express");

const controllerHandler = require("../../helpers/controllerHandler");
const coreController = require("../../controllers/coreController");

const { ApiError } = require("../../helpers/errorHandler");

const router = express.Router();

router.get("/posts", controllerHandler(coreController.getAll));
router.get("/categories", controllerHandler(coreController.getAll));

router.get("/posts/:id", controllerHandler(coreController.getOneByPk));

router.use(()=>{
  throw new ApiError("API Route nod found", { statusCode: 404 });
});

module.exports = router;
