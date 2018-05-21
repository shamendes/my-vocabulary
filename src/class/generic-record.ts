export class GenericRecord {
    id: number;
    name: string;
    action: string;

    static sortByName(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    }
}
