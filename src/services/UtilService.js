class UtilService {
  merge(old, updated) {
    if (!Array.isArray(updated)) updated = [updated];

    const obj = {};
    old.forEach(item => (obj[item.id] = item));
    updated.forEach(item => (obj[item.id] = item));

    const arr = [];

    for (let id in obj) {
      if (obj.hasOwnProperty(id)) arr.push(obj[id]);
    }

    return arr;
  }

  removeById(data, item) {
    const index = data.indexOf(data.find(el => el.id === item.id));
    if (index < 0) return data;
    return data.slice(0, index).concat(data.slice(index + 1, data.length));
  }

  checkDateOffset(date, offset = 0) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() + offset &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  dueDateInWords(dueDate) {
    const date = new Date(dueDate);
    if (this.checkDateOffset(date, 0)) return "Today";
    else if (this.checkDateOffset(date, 1)) return "Tomorrow";
    else if (this.checkDateOffset(date, -1)) return "Yesterday";
    else return dueDate;
  }
}

export default new UtilService();
