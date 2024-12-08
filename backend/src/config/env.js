require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongodbUri: process.env.MONGODB_URI || "mongodb://localhost:27017",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  clientUrl: process.env.CLIENT_URL,
  senderEmail: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudKey: process.env.CLOUDINARY_API_KEY,
  cloudSecret: process.env.CLOUDINARY_API_SECRET,
};
