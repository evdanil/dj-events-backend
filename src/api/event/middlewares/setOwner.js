"use strict";

const { parseMultipartData } = require("@strapi/utils");

/**
 * `setOwner` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // console.log("Set OWner policy!");
    const user = ctx.state.user;
    // console.log(user);
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = user.id;

      ctx.request.body = { data, files };
    } else {
      ctx.request.body.data.user = user.id;
    }
    // console.log(ctx.request.body);
    return next();
  };
};
