module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '338ad0a3a4137ae713acef0f2c5b0550'),
  },
});
