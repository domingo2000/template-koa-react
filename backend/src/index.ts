import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import koaBody from 'koa-body';
import cors from '@koa/cors';

import router from './router';
import sequelize from './sequelize';

const app = new Koa();

app.use(cors());
app.use(json());
app.use(logger());
// koa body url encoded
app.use(koaBody({ 
    // includeUnparsed: true, // for raw request body access
    multipart: true, // for multipart/form-data (includes images)
}));

app.use( async (ctx, next) => {
    console.log('######## REQUEST ########');
    console.log('BODY', ctx.request.body);
    console.log('PARAMS', ctx.request.query);
    console.log(ctx.request.files); // files access
    console.log('######################');
    await next();
});


app.use(router.routes()).use(router.allowedMethods());


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

})();


