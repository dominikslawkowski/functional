/*
    Napisz funkcję "groupBy", przyjmującą jako parametr kolekcję i funkcję grupującą,
    a zwracającą obiekt z elementami tablicy pogrupowanymi wg. zwróconych przez funkcję 
    grupującą kluczy.

    Przykład:

    groupBy([1,2,3,4,5], elem => elem % 2) === { '1': [1,3,5], '0': [2,4] }

*/

const groupBy = (arr, func) =>
    arr.reduce((obj, elem) => {
        const key = func(elem);
        const groupedUnderThisKey = obj[key] || [];

        return {
            ...obj,
            [key]: [...groupedUnderThisKey, elem],
        };
    });

describe('problem1 - groupBy', () => {
    it('returns an object', () => {
        expect(groupBy([1, 2, 3], v => v)).toBeInstanceOf(Object);
        expect(groupBy([1, 2, 3], v => v)).not.toBeInstanceOf(Function);
    });

    it('groups items by the keys returned by the supplied function', () => {
        const result = groupBy([1, 2, 3, 4], number => number % 2);

        const keys = Object.keys(result);

        expect(keys.length).toBe(2);
        expect(keys.indexOf('1') > -1).toBe(true);
        expect(keys.indexOf('0') > -1).toBe(true);
    });
});
