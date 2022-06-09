import {get} from '.';

describe('Test', () => {
    it('dummy', async () => {
        // Test with msw
        const res = await get();
        expect(res.result).toBe('success');
    })
})
