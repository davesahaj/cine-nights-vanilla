import { io } from "socket.io-client";
const baseURL = `http://localhost:4000`;
export const socket = io.connect(baseURL, { path: "/liveData" });
