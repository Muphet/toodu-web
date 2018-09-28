import ConfigService from "../services/ConfigService";
import qs from "qs";
import notificationsApi from '../core/notifications/notificationsApi';
import { TEAM_DESTROYED } from "../core/teams/teamsConstants";
import { NOTIFICATION_CREATED } from '../core/notifications/notificationsConstants';
import { disconnected, connected } from "../core/meta/metaActions";
import { addToast } from '../core/toasts/toastsActions';
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

    this.handleSideEffects(data.message);
    
    this.store.dispatch(data.message);
  }

  handleSideEffects(message) {
    switch (message.type) {
      case TEAM_DESTROYED:
        return AuthService.logout();
      case NOTIFICATION_CREATED:
        notificationsApi.update(message.notification.id, { seen: true })
        return this.store.dispatch(
          addToast(message.notification.message)
        );
      default:
        return null; 
    }
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
    this.subscribe("UserChannel");
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
