import {expect} from 'mochaccino';
import {EntryPoint, getEntryPoint} from '../../lib/decorators/entry-point';


describe('Decorators::EntryPoint', () => {

    it('should have two exports', () => {
        expect(typeof EntryPoint)
            .toBe('function', 'Entry point should be a function.');

        expect(typeof getEntryPoint)
            .toBe('function', 'getEntryPoint should be a function.')

    });

    it('should set the Entry Point', () => {
        const PATH_1 = '/path1';
        const PATH_2 = '/path2';

        @EntryPoint(PATH_1)
        class Test {

        }

        @EntryPoint(PATH_2)
        class Test2{

        }

        expect(getEntryPoint(Test2))
            .toBe(PATH_2, 'Get the right entry point from a test class.');


        expect(getEntryPoint(new Test2))
            .toBe(PATH_2, 'Get the right entry point from a test class object.');
    });

    it('should not throw exceptions', () => {
        getEntryPoint(null);
        getEntryPoint(undefined);
        getEntryPoint({})
    });
});
