import {Group} from '../class/group';
import {GenericRecord} from '../class/generic-record';
import { Language } from '../class/language';
import { Word } from '../class/word';

export const WORDS: Word[] = [

    {id: 1, name: 'Stove', meaning: 'Fogão',
    groups: [{id: 1, name: 'Kitchen', language: {id: 1, name: 'English', asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}, asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}],
    asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }
    },
    {id: 2, name: 'Spoon', meaning: 'Colher',
    groups: [{id: 1, name: 'Kitchen', language: {id: 1, name: 'English', asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}, asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}],
    asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }
    },
    {id: 3, name: 'Microwave', meaning: 'Microondas',
    groups: [{id: 1, name: 'Kitchen', language: {id: 1, name: 'English', asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}, asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }}],
    asGenericRecord(): GenericRecord {
        const genericRecord: GenericRecord = {
            id: this.id,
            name: this.name,
            action: ''
        };

        return (genericRecord);
    }
    }
];
