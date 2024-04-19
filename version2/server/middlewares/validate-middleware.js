const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 400; // Corrected status code
        const message = "Failed to validate input.";
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails,
        };
        // console.error("Validation Error:", error); // Corrected error object
        // res.status(status).json({ msg: message });
        next(error); // Moved this line before sending the response
    }
};

export default validate;
