import { online, offline } from "../core/meta/metaActions";

class OnlineService {
  constructor() {
    this.store = null;
    window.addEventListener("online", this.online.bind(this));
    window.addEventListener("offline", this.offline.bind(this));
  }

  init(store) {
    this.store = store;
  }

  online() {
    this.store.dispatch(online());
  }

  offline() {
    this.store.dispatch(offline());
  }
}

export default new OnlineService();
