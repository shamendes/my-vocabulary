import {Language} from '../class/language';
import {GenericRecord} from '../class/generic-record';


export const LANGUAGES: Language[] = [

    {id: 1, name: 'English', asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}
];
