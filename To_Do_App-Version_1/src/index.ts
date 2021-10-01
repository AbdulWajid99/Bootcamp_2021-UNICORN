import { TodoItem } from "./to_do_item"
import { TodoList } from "./to_do_list"

console.clear();

//  create einstance for single task
let task1: TodoItem = new TodoItem(1, "Pickup glasses from shop", false)
let task2: TodoItem = new TodoItem(2, "Join gym", false)

// for all task in a listItems
let itemlist: TodoList = new TodoList();
itemlist.addlist("From list")
itemlist.addlist("Auto generated id nymbers")
itemlist.addlist("From")
itemlist.addlist("list")

itemlist.print_all();
//  calling fucntion
task1.print_details();
task2.print_details();