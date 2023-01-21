import { Router } from "express";

const router = Router();

// Getting all
router.get("/", (req, res) => {

});
// Getting one / :id this is a parameter we can access by typing in request req.params.id
router.get("/:id", (req, res) => {

});
// Creating one
router.post("/", (req, res) => {

});
// Updating one / patch instead of put for put because we only want to udate based on what the user passes us
router.patch()
// Deleting one
