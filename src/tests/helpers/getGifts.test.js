import '@testing-library/jest-dom';
import { getGifts } from '../../helpers/getGifts';

describe('Test about "getGifts" function', () => {
    test('the function should return 3 items',async () => {
        const gifts = await getGifts('Batman');

        expect(gifts.length).toBe(3);
    });  
    test('the function should return 0 items if de category undefined',async () => {
        const gifts = await getGifts('');

        expect(gifts.length).toBe(0);
    });  
})
