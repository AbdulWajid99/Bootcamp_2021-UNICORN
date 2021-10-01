"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//  class
class TodoItem {
    //  constructor
    constructor(task_id, task, status) {
        this.task_id = task_id;
        this.task = task;
        this.status = status;
    }
    //  function
    print_details() {
        console.log(`Task: ${this.task_id}   ${this.task}  Status: ${this.status}`);
    }
    update_status(status) {
        this.status = status;
    }
}
exports.TodoItem = TodoItem;
