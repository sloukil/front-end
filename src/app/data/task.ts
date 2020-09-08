export class Task {
    private _id : number;
    private _description: string;

    constructor(id: number = null, desc: string) {
        if (id) {
          this._id = id;
        }
        this._description = desc;
      }

      //getters and setters
    get id (): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get description() : string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
}