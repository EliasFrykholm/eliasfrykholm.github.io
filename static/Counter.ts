export default class Counter {
    count: number;
    constructor() {
        this.count = 0;
    }

    getCount() {
        this.count ++;
        return this.count - 1;
    }
}