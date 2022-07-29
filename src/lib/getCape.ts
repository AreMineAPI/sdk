import axios from "axios";
import { baseUrl } from "../config.json";

export async function getCape(name: string, type: "optifine" | "mojang") {
    if (!name) throw new Error("Name is required");
    if (!type) throw new Error("Type is required");

    try {
        const request = await axios.get(`${baseUrl}/cape/${name}?type=${type}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error("User dont have a cape")
            });

        if (request && request.message) {
            throw new Error("User dont have a cape");
        } else {
            return `${baseUrl}/cape/${name}?type=${type}`;
        }
    } catch (error) {
        throw new Error(error);
    }
}