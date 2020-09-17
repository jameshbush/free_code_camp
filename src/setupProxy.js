const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:9000",
      // target: "172.16.43.128:5000",
      changeOrigin: true,
    })
  );
};
