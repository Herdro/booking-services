const { userAdapter } = require('../../adapters');
const {
  createUserSchema, validateUserSchema, updateUserSchema, getUserSchema, createBookmarkSchema,
} = require('./schema');

async function UserRouter(fastify) {
  // users endpoints
  await fastify.post('/', { schema: createUserSchema }, userAdapter.createUser);
  await fastify.post('/:userId/validate', { schema: validateUserSchema }, userAdapter.validateUser);
  await fastify.put('/:userId/', { schema: updateUserSchema }, userAdapter.updateUser);
  await fastify.delete('/:userId/', { schema: getUserSchema }, userAdapter.deleteUser);

  // bookmark endpoints
  await fastify.post('/:userId/bookmark', { schema: createBookmarkSchema }, userAdapter.createBookmark);
}

module.exports = UserRouter;
