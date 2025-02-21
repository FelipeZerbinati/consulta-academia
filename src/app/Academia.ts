import { Base } from "./Base";

export class Academia extends Base {
    name: string;
    aparelhos: Aparelho[];

    constructor(name: string, aparelhos: Aparelho[] = []) {
        super();
        this.name = name;
        this.aparelhos = aparelhos;
    }
}

export class Aparelho extends Base {
    name: string;
    academia?: Academia;
    
    constructor(name: string, academia?: Academia) {
        super();
        this.name = name;
        this.academia = academia;
    }
}