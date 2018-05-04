import ConfigService from "../services/ConfigService";
import qs from "qs";
import { TEAM_DESTROYED } from "../core/teams/teamsConstants";
import { disconnected, connected } from "../core/meta/metaActions";
import AuthService from "./AuthService";

class WebSocketService {
  constructor() {
    this.socket = null;
    this.store = null;
    this.lastPing = null;
    this.reconnectInterval = null;
  }

  init(store) {
    this.store = store;
  }

  connect() {
    if (this.isConnected()) return;
    this.socket = new WebSocket(this.getUrl());
    this.socket.onopen = this.handleOpen.bind(this);
    this.socket.onmessage = this.handleMessage.bind(this);
    this.socket.onclose = this.handleClose.bind(this);
    this.socket.onclose = this.handleError.bind(this);
  }

  disconnect() {
    if (this.isConnected()) {
      this.socket.close(1000);
      this.socket = null;
    }
  }

  send(data) {
    this.socket.send(JSON.stringify(data));
  }

  subscribe(channel) {
    this.send({
      command: "subscribe",
      identifier: JSON.stringify({ channel })
    });
  }

  getUrl() {
    const auth = qs.stringify(AuthService.auth);
    return ConfigService.get("websocket_url") + `?${auth}`;
  }

  isConnected() {
    return Date.now() - this.lastPing < 6000;
  }

  handleMessage(message) {
    const data = JSON.parse(message.data);
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;
    if (data.type === "ping") return this.setLastPing(data);
    if (data.message.type === TEAM_DESTROYED) AuthService.logout();
    this.store.dispatch(data.message);
  }

  setLastPing(data) {
    this.lastPing = data.message * 1000;
  }

  startReconnectLoop() {
    this.reconnectInterval = setInterval(() => {
      if (this.isConnected()) return;
      this.store.dispatch(disconnected());
      this.connect();
    }, 10000);
  }

  handleOpen(e) {
    this.store.dispatch(connected());
    this.subscribe("TeamChannel");
    clearInterval(this.reconnectInterval);
    this.startReconnectLoop();
  }

  handleClose(e) {
    clearInterval(this.reconnectInterval);
    console.log(e);
  }

  handleError(e) {
    console.log(e);
  }
}

export default new WebSocketService();
