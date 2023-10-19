"use strict";

const { parseMultipartData } = require("@strapi/utils");

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event");
