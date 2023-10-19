module.exports = ({ env }) => ({
  url: env("HEROKU__URL"),
});
