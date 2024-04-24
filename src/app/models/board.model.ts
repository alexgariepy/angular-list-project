import { Column } from "./column.model";

export class Board {
    private columns : Column[];
    private name : string; 

    constructor(name : string, columns : Column[]){
        this.columns = columns;
        this.name = name;
    }

    public get Columns() : Column[] {
        return this.columns;
    }

    public get Name() : string {
        return this.name;
    }
}