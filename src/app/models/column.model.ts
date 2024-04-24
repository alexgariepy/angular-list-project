export class Column {
    private tasks: string[];
    private name: string;

    constructor(name: string, tasks : string[]) {
        this.tasks = tasks;
        this.name = name;
    }

    public get Tasks() : string[] {
        return this.tasks;
    }

    public get Name() : string {
        return this.name;
    }
}