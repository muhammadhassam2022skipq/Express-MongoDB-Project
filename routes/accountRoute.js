const express = require ("express");
const accountsController = require("../controller/accountsController");
const router = express.Router();


router.get ("/signup", accountsController.getSignUP);
router.post ("/signup", accountsController.postSignUP);
router.get ("/signin", accountsController.getSignIn);
router.post ("/signin", accountsController.postSignIn);

module.exports= router;