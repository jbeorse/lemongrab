function TaskList(name) {
  this.name = name;
  this.tasks = [];
};

TodoList.prototype.newTask(id, description) {
  this.incompleteTasks[id] = description;
}

TodoList.prototype.completeTask(id) {
  this.completeTasks[id] = this.incompleteTasks[id];
  delete incompleteTasks[id];
}

TodoList.prototype.redoTask(id) {
  this.incompleteTasks[id] = this.completeTasks[id];
  delete completeTasks[id];
}

TodoList.prototype.removeIncompleteTask(id) {
  delete incomplejteTasks[id];
}

TodoList.prototype.removeCompleteTask(id) {
  delete completeTasks[id];
}

TodoList.prototype.JSON() {
  var fullList = { items: []; },
      task;

  for (task in incompleteTasks) {
    fullList.push({
      description: task,
      completed: false
    });
  }

  for (task in completeTasks) {
    fullList.push({
      description: task,
      completed: true
    });
  }

  return fullList;
}
