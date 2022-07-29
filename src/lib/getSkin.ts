import axios from "axios";
import { baseUrl } from "../config.json";

export async function getSkin(name: string) {
    if (!name) throw new Error("Name is required");

    try {
        const request = await axios.get(`${baseUrl}/user/${name}/profile`)
            .then(response => response.data);

        if (request.success) {
            return `${baseUrl}/skin/${request?.data?.name}`;
        } else {
            throw new Error(request.message || "Unknown error");
        }
    } catch (error) {
        throw new Error(error);
    }
}