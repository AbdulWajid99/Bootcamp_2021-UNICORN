"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//  class
class TodoItem {
    //public id: number;
    //public task: string;
    // public status: boolean;
    //  constructor
    constructor(id, task, status) {
        //this.id = id;
        //this.task = task;
        //this.status = status;
        //no code required tsc ewilltake care of assigning values
        this.id = id;
        this.task = task;
        this.status = status;
    }
    //  function
    print_details() {
        console.log(`Task: ${this.id}   ${this.task}  Status: ${this.status}`);
    }
}
exports.TodoItem = TodoItem;
