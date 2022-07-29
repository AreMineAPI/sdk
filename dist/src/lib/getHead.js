"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHead = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = require("../config.json");
async function getHead(name) {
    if (!name)
        throw new Error("Name is required");
    try {
        const request = await axios_1.default.get(`${config_json_1.baseUrl}/head/${name}`)
            .then(response => response.data)
            .catch(err => {
            throw new Error("User not found");
        });
        if (request && request.message) {
            throw new Error("User not found");
        }
        else {
            return `${config_json_1.baseUrl}/head/${name}`;
        }
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getHead = getHead;
