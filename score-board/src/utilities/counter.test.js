import { strikes, ball } from './counter';

describe('counter.js', () => {

    describe('strike()', () => {
        it('should return incremention by 1', () => {
            expect(strikes()).toBe(1)
            expect(strikes()).toBe(2)
        })
        it('should return 0 when the number equals 3', () => {
            expect(strikes()).toBe(0)
        })
    })

    describe('ball()', () => {
        it('should return incremention by 1', () => {
            expect(ball()).toBe(1)
            expect(ball()).toBe(2)
            expect(ball()).toBe(3)
        })
        it('should return 0 when the number equals 4', () => {
            expect(ball()).toBe(0)
        })
    })
})