import {Group} from '../class/group';
import {GenericRecord} from '../class/generic-record';
import { Language } from '../class/language';


export const GROUPS: Group[] = [

    {id: 1, name: 'Kitchen', language: {id: 1, name: 'English', asGenericRecord(): GenericRecord {
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
    }}];
