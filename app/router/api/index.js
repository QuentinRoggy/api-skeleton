const express = require("express");

const controllerHandler = require("../../helpers/controllerHandler");
const coreController = require("../../controllers/coreController");

const { ApiError } = require("../../helpers/errorHandler");

const router = express.Router();

router.get("/restaurant", controllerHandler(coreController.getAll));
router.get("/manager", controllerHandler(coreController.getAll));

router.get("/restaurant/:id", controllerHandler(coreController.getOneByPk));
router.get("/manager/:id", controllerHandler(coreController.getOneByPk));


router.delete("/restaurant/:id", controllerHandler(coreController.delete));

router.use(()=>{
  throw new ApiError("API Route nod found", { statusCode: 404 });
});

module.exports = router;
