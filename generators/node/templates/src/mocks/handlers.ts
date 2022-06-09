import { rest } from 'msw';

export const handlers = [
    rest.get('https://localhost/login', (_, res, ctx) =>
        res(
            ctx.status(200),
            ctx.json({
                result: 'success',
            }),
        ),
    ),
];
