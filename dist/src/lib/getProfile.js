"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = require("../config.json");
async function getProfile(skin) {
    if (!skin)
        throw new Error("Skin is required");
    try {
        const request = await axios_1.default.get(`${config_json_1.baseUrl}/user/${skin}/profile`)
            .then(response => response.data);
        if (request.success) {
            return request.data;
        }
        else {
            throw new Error(request.message || "Unknown error");
        }
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getProfile = getProfile;
