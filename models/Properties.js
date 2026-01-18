import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        status: {
            type: String,
            required: true,
            enum: ["available", "reserved", "sold", "rented"],
            default: "available",
        },
        type: {
            type: String,
            required: true,
            enum: ["apartment", "house", "studio", "commercial", "land"],
            default: "apartment",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Property", propertySchema);