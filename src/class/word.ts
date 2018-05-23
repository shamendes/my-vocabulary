import { Group } from './group';
import { GenericRecord } from './generic-record';

export class Word {
    id: number;
    name: string;
    meaning: string;
    groups: Group[];

    constructor() {
        this.groups = [];
    }

    asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);

    }

}
