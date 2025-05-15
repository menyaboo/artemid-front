import Echo from "laravel-echo";
import { io } from "socket.io-client";
import { getAccessToken } from "@shared/utils";

// @ts-expect-error ts(2339)
window.io = io;

const echo = new Echo({
  broadcaster: "socket.io",
  host: import.meta.env.VITE_ECHO_SERVER_URL,
  auth: {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`
    }
  },
  transports: ['websocket'],
  withCredentials: true,
  forceNew: true,
});

export {
  echo
}