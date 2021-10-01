//  class
export class TodoItem {
    //public id: number;
    //public task: string;
    // public status: boolean;

    //  constructor
    public constructor(public id: number, public task: string, public status: boolean) {
        //this.id = id;
        //this.task = task;
        //this.status = status;
        //no code required tsc ewilltake care of assigning values

    }
    //  function
    public print_details(): void {
        console.log(`Task: ${this.id}   ${this.task}  Status: ${this.status}`);
    }
}

