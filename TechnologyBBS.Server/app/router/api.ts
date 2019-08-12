export default app => {
  const { controller, router } = app;

  const apiV1Router = router.namespace('/api/v1');
  const { account } = controller.api;

  apiV1Router.get('/', account.login);
};
