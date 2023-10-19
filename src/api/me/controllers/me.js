"use strict";

/* A set of functions called "actions" for `events`
 */

module.exports = {
  async event_list(ctx, next) {
    try {
      const data = await strapi.service("api::me.me").event_list(ctx);
      // console.log("controller HIT!");
      // console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
