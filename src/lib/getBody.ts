import axios from "axios";
import { baseUrl } from "../config.json";

export async function getBody(name: string) {
    if (!name) throw new Error("Name is required");

    try {
        const request = await axios.get(`${baseUrl}/body/${name}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error("User not found")
            });

        if (request && request.message) {
            throw new Error("User not found");
        } else {
            return `${baseUrl}/body/${name}`;
        }
    } catch (error) {
        throw new Error(error);
    }
}