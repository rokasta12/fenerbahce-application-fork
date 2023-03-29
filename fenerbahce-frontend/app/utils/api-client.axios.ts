import axios from "axios";
import { getTokens } from "./getTokens";
import { BACKEND_URL } from "~/constants";

export const APIClientInstance =
	typeof window === "undefined"
		? axios.create({
				baseURL: BACKEND_URL,
		  })
		: axios.create({
				baseURL: BACKEND_URL,
				headers: { Authorization: `Bearer ${getTokens().accessToken}` },
		  });

export const ParibuAPIClient = axios.create({
	baseURL: "https://www.paribu.com",
});
