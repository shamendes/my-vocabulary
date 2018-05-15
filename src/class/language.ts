import { GenericRecord } from './generic-record';

export class Language {
    id: number;
    name: string;

    asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);

    }


}
