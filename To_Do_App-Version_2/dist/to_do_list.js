"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const to_do_item_1 = require("./to_do_item"); // since we have already defined variable and print function so ust import them
class TodoList {
    constructor(listItems = []) {
        this.listItems = listItems;
        // variable access witin a class
        this.automated_id = 1;
        this.itemMap = new Map();
        //no code required tsc ewilltake care of assigning values
    }
    addlist(task) {
        //  create instance
        let item = new to_do_item_1.TodoItem(this.automated_id, task, false);
        this.automated_id++;
        this.listItems.push(item);
        this.itemMap.set(this.automated_id, new to_do_item_1.TodoItem(this.automated_id, task, false));
    }
    update_status(task_id) {
        let item = this.listItems.find((item) => item.task_id == task_id);
        item.status = true;
    }
    print_all() {
        this.listItems.forEach((item) => item.print_details());
    }
    get_id(task_id) {
        return this.itemMap.get(task_id);
    }
}
exports.TodoList = TodoList;
