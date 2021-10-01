"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_do_item_1 = require("./to_do_item");
const to_do_list_1 = require("./to_do_list");
console.clear();
//  create einstance for single task
let task1 = new to_do_item_1.TodoItem(1, "Pickup glasses from shop", false);
let task2 = new to_do_item_1.TodoItem(2, "Join gym", false);
// for all task in a listItems
let itemlist = new to_do_list_1.TodoList();
itemlist.addlist("From list");
itemlist.addlist("Auto generated id nymbers");
itemlist.addlist("From");
itemlist.addlist("list");
itemlist.print_all();
//  calling fucntion
task1.print_details();
task2.print_details();
