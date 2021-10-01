import { TodoItem } from "./to_do_item"; // since we have already defined variable and print function so ust import them

export class TodoList {
    // variable access witin a class
    private automated_id: number = 1;

    public constructor(public listItems: TodoItem[] = []) {
        //no code required tsc ewilltake care of assigning values
    }

    public addlist(task: string): void {
        //  create instance
        let item: TodoItem = new TodoItem(this.automated_id, task, false)
        this.automated_id++;
        this.listItems.push(item);
    }   

    public update_status(automated_id: number) {
        let item: TodoItem = this.listItems.find((item) => item.automated_id == automated_id);
    }

    public print_all(): void {
        this.listItems.forEach((item: TodoItem) => item.print_details())
    }


}