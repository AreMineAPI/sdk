import axios from "axios";
import { baseUrl } from "../config.json";

export async function getUUID(name: string) {
    if (!name) throw new Error("Name is required");

    try {
        const request = await axios.get(`${baseUrl}/user/${name}/uuid`)
            .then(response => response.data);

        if (request.data?.id?.error) {
            throw new Error(request.data?.id?.message || "Unknown error");
        } else {
            return request.data?.id;
        }
    } catch (error) {
        throw new Error(error);
    }
}