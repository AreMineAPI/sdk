"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = require("../config.json");
async function getUUID(name) {
    if (!name)
        throw new Error("Name is required");
    try {
        const request = await axios_1.default.get(`${config_json_1.baseUrl}/user/${name}/uuid`)
            .then(response => response.data);
        if (request.data?.id?.error) {
            throw new Error(request.data?.id?.message || "Unknown error");
        }
        else {
            return request.data?.id;
        }
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getUUID = getUUID;
