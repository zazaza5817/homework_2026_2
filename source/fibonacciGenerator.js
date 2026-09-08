'use strict';

/**
 * Генератор, возвращающий первые n чисел последовательности Фибоначчи
 * @param {Number} n - количество чисел Фибоначчи, которые нужно сгенерировать
 *
 * @example
 * // returns [0, 1, 1, 2, 3]
 * [...fibonacciGenerator(5)];
 *
 * @returns {Generator<Number>}
 */
function* fibonacciGenerator(n) {
    let previous = 0;
    let current = 1;

    for (let i = 0; i < n; i++) {
        yield previous;
        [previous, current] = [current, previous + current];
    }
}
