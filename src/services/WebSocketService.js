import qs from "qs";
import AuthService from "./AuthService";

class WebSocketService {
  constructor() {
    this.socket = null;
    this.store = null;
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
    return `ws://localhost:3000/cable?${auth}`;
  }

  isConnected() {
    if (!this.socket) return false;
    return this.socket.readyState === this.socket.OPEN;
  }

  handleMessage(message) {
    const data = JSON.parse(message.data);
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;
    if (data.type === "ping") return;

    this.store.dispatch(data.message);
  }

  handleOpen(e) {
    this.subscribe("TeamChannel");
  }

  handleClose(e) {
    console.log(e);
  }

  handleError(e) {
    console.log(e);
  }
}
window.ws = new WebSocketService();
export default window.ws;
