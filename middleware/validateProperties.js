const ALLOWED_STATUS = ["available", "reserved", "sold", "rented" ];
const ALLOWED_TYPE = ["apartment", "house", "studio", "commercial", "land"]

export function validateProperties(req, res, next) {
    const { title, description, status, priority } = req.body;

    if (!title || !description || !status || !priority) {
        return res.status(400).json({
            message: "title, description, price, status, type are required"
        });
    }

    if (!ALLOWED_STATUS.includes(status)) {
        return res.status(400).json({
            message: `status must be one of: ${ALLOWED_STATUS.join(", ")}`,
        });
    }

    if (!ALLOWED_TYPE.includes(type)) {
        return res.status(400).json({
            message: `type must be one of: ${ALLOWED_TYPE.join(", ")}`,
        });
    }

    next();
}