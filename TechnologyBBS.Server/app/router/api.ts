export default app => {
  const { controller, router } = app;

  const apiV1Router = router.namespace('/api/v1');
  const { account, topics } = controller.api;

  apiV1Router.post('/login', account.login);
  apiV1Router.post('/signin', account.signin);
  apiV1Router.post('/changePwd', account.changePwd);
  apiV1Router.get('/logout', account.logout);

  apiV1Router.get('/topics', topics.getTopics);
};
