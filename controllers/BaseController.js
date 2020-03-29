const jsonResponse = (response, statusCode, message) => {
    return response.status(statusCode).json({ message })
};

const success = (response, object) => {
    return response.status(200).json({ success: "true", ...object })
};

const error = (response, error, errorCode) => {
    console.log(error);
    let returnJson = {
        success: "false",
        message: error.toString()
    };

    if(errorCode) {
        returnJson["code"] = errorCode;
    }

    return response.status(500).json(returnJson)
};

module.exports = {
    jsonResponse,
    success,
    error
};
