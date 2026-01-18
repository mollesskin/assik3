import express from "express";
import Properties from "../models/Properties.js";
import { validateProperties } from "../middleware/validateProperties.js";

const router = express.Router();

// CREATE
router.post("/", validateProperties, async (req, res, next) => {
    try {
        const created = await Properties.create(req.body);
        res.status(201).json(created);
    } catch (e) {
        next(e);
    }
});

// READ ALL
router.get("/", async (req, res, next) => {
    try {
        const properties = await Properties.find().sort({ createdAt: -1 });
        res.json(properties);
    } catch (e) {
        next(e);
    }
});

// READ ONE
router.get("/:id", async (req, res, next) => {
    try {
        const properties = await Properties.findById(req.params.id);
        if (!properties) return res.status(404).json({ message: "Not found" });
        res.json(properties);
    } catch (e) {
        next(e);
    }
});

// UPDATE
router.put("/:id", validateProperties, async (req, res, next) => {
    try {
        const updated = await Properties.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updated) return res.status(404).json({ message: "Not found" });
        res.json(updated);
    } catch (e) {
        next(e);
    }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
    try {
        const deleted = await Properties.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted" });
    } catch (e) {
        next(e);
    }
});

export default router;