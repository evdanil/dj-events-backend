"use strict";
const { createCoreService } = require("@strapi/strapi").factories;
/**
 * events service
 */
// const _ = require("lodash");
const utils = require("@strapi/utils");

const { sanitize, validate } = utils;

const sanitizeOutput = async (user, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = {
  async event_list(ctx) {
    const authUser = ctx.state.user;
    // console.log("Service HIT!");
    if (!authUser) {
      return ctx.unauthorized();
    }
    // console.log(authUser);
    try {
      const entries = await strapi.entityService.findMany("api::event.event", {
        fields: [
          "name",
          "address",
          "perfomers",
          "createdAt",
          "publishedAt",
          "slug",
          "time",
          "venue",
          "description",
          "id",
        ],
        populate: {
          image: true,
        },
        filters: { user: authUser.id },
      });
      // console.log(entries);
      if (!entries) {
        return ctx.notFound();
      }
      const sanitizeData = await sanitizeOutput(entries, ctx);
      return sanitizeData;
    } catch (error) {
      console.log(error);
    }
  },
};
