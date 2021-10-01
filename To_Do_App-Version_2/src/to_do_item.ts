//  class
export class TodoItem {

    //  constructor
    public constructor(public task_id: number, public task: string, public status: boolean) {
    }

    //  function
    public print_details(): void {
        console.log(`Task: ${this.task_id}   ${this.task}  Status: ${this.status}`);
    }
    public update_status(status: boolean): void {
        this.status = status
    }

}

