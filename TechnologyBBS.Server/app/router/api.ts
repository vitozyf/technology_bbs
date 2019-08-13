export default app => {
  const { controller, router } = app;

  const apiV1Router = router.namespace('/api/v1');
  const { account } = controller.api;

  apiV1Router.post('/login', account.login);
  apiV1Router.post('/signin', account.signin);
};
