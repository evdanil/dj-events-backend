module.exports = {
  routes: [
    {
      method: "GET",
      path: "/me/events",
      handler: "me.event_list",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
