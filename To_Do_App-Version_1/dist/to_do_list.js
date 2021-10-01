"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const to_do_item_1 = require("./to_do_item"); // since we have already defined variable and print function so ust import them
class TodoList {
    constructor(listItems = []) {
        this.listItems = listItems;
        // variable access witin a class
        this.automated_id = 1;
        //no code required tsc ewilltake care of assigning values
    }
    addlist(task) {
        //  create instance
        let item = new to_do_item_1.TodoItem(this.automated_id, task, false);
        this.automated_id++;
        this.listItems.push(item);
    }
    print_all() {
        this.listItems.forEach((item) => item.print_details());
    }
}
exports.TodoList = TodoList;
