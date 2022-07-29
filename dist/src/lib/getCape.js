"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCape = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = require("../config.json");
async function getCape(name, type) {
    if (!name)
        throw new Error("Name is required");
    if (!type)
        throw new Error("Type is required");
    try {
        const request = await axios_1.default.get(`${config_json_1.baseUrl}/cape/${name}?type=${type}`)
            .then(response => response.data)
            .catch(err => {
            throw new Error("User dont have a cape");
        });
        if (request && request.message) {
            throw new Error("User dont have a cape");
        }
        else {
            return `${config_json_1.baseUrl}/cape/${name}?type=${type}`;
        }
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getCape = getCape;
