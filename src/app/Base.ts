export class Base {
    id: string;
    createdDate: Date;
    updatedDate?: Date;
    removedDate?: Date;
    removed: boolean;

    constructor() {
        this.id = crypto.randomUUID();
        this.createdDate = new Date();
        this.removed = false;
    }
}