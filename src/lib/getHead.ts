import axios from "axios";
import { baseUrl } from "../config.json";

export async function getHead(name: string) {
    if (!name) throw new Error("Name is required");

    try {
        const request = await axios.get(`${baseUrl}/head/${name}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error("User not found")
            });

        if (request && request.message) {
            throw new Error("User not found");
        } else {
            return `${baseUrl}/head/${name}`;
        }
    } catch (error) {
        throw new Error(error);
    }
}