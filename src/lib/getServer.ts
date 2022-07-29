import axios from "axios";
import { baseUrl } from "../config.json";

export async function getServer(server: string) {
    if (!server) throw new Error("Server is required");
    
    try {
        const request = await axios.get(`${baseUrl}/server/${server}/`)
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