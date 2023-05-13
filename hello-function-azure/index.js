import {jsonData} from "./data.js";

export default async (context, req) => {
    const responseData = {...jsonData, ...req.query};
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(responseData),
    };
    context.res = response;
}
