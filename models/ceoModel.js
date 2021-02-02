'use strict';
const db = require('./conn');

class CEOModel {
    constructor(name, slug, year) {
        this.name = name;
        this.slug = slug;
        this.year = year;
    };

    // 'static' creates methods in JS classes 'async await' works on any Promise
    static async getAll() {
        const response = await db.any(`SELECT * FROM apple_ceos;`);
        return response;
    }
}

module.exports = CEOModel;