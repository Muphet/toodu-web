import { CONNECTED, DISCONNECTED } from "./metaConstants";

export function connected(authenticated) {
  return {
    type: CONNECTED
  };
}

export function disconnected(user) {
  return { type: DISCONNECTED };
}
