export default app => {
  const { controller, router } = app;

  const apiV1Router = router.namespace('/api/v1');
  const { account, topics, clocking } = controller.api;

  apiV1Router.post('/login', account.login);
  apiV1Router.post('/signin', account.signin);
  apiV1Router.post('/changePwd', account.changePwd);
  apiV1Router.get('/logout', account.logout);

  apiV1Router.post('/topics', topics.getTopics);

  apiV1Router.post('/clocking', clocking.saveClocking);
  apiV1Router.post('/attendance', clocking.saveAttendance);
};
