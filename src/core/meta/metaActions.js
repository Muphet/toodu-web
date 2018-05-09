import { CONNECTED, DISCONNECTED, ONLINE, OFFLINE } from "./metaConstants";

export function connected(authenticated) {
  return {
    type: CONNECTED
  };
}

export function disconnected(user) {
  return { type: DISCONNECTED };
}

export function online(authenticated) {
  return {
    type: ONLINE
  };
}

export function offline(user) {
  return { type: OFFLINE };
}
