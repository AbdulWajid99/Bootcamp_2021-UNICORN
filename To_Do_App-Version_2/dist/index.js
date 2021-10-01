"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_do_list_1 = require("./to_do_list");
//console.clear();
//  create einstance for single task
let task = new to_do_list_1.TodoList();
//let task2: TodoItem = new TodoItem(2, "Join gym", false)
//  calling fucntion
task.addlist("Pickup glasses from shop");
task.addlist("visit gym");
task.addlist("Buy bulbs");
task.update_status(2);
task.print_all();
