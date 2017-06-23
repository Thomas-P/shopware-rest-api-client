/**
 * should be the base class for all models
 * id is one time set able
 */
export class Base {
    private $id: number;

    constructor(id: number) {
        this.$id = id;
    }

    /**
     * return the id
     * @returns {number}
     */
    get id(): number {
        return this.$id;
    }

    /**
     * set the id if not already set
     * @param id
     */
    set id(id: number) {
        if (this.$id === undefined) {
           this.$id = id;
        }
    }
}
