import createHistory from "history/createBrowserHistory";

class HistoryService {
  constructor() {
    this.history = createHistory();
  }

  push(path) {
    this.history.push(path);
  }

  get() {
    return this.history;
  }
}

export default new HistoryService();
