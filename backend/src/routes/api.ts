import Router from 'koa-router';
import tricksRouter from './api/tricks';
import usersRouter from './api/users';

const apiRouter = new Router();

// apiRouter.use("/_resources", _resourcesRouter.routes(), _resourcesRouter.allowedMethods());
apiRouter.use('/tricks', tricksRouter.routes(), tricksRouter.allowedMethods());
apiRouter.use('/users', usersRouter.routes(), usersRouter.allowedMethods());

export default apiRouter;
