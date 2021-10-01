import { TodoItem } from "./to_do_item";
import { TodoList } from "./to_do_list";

//console.clear();

//  create einstance for single task
let task: TodoList = new TodoList()
//let task2: TodoItem = new TodoItem(2, "Join gym", false)


//  calling fucntion
task.addlist("Pickup glasses from shop")
task.addlist("visit gym")
task.addlist("Buy bulbs")

task.update_status(2)
task.get_id(2)
task.print_all();


