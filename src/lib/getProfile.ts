import axios from "axios";
import { baseUrl } from "../config.json";

export async function getProfile(skin: string) {
    if (!skin) throw new Error("Skin is required");

    try {
        const request = await axios.get(`${baseUrl}/user/${skin}/profile`)
            .then(response => response.data);

        if (request.success) {
            return request.data;
        } else {
            throw new Error(request.message || "Unknown error");
        }
    } catch (error) {
        throw new Error(error);
    }
}