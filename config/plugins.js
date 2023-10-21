module.exports = ({ env }) => ({
  users-permissions: {
    jwtSecret: "2Fj1le5TfmxFi2/e0wBV6Q==",
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        event: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
