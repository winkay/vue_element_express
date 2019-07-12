module.exports = function (options, context) {
  var express = require('express');
  var router = express.Router();

  var proxy = context.getResource('proxy');
  /* GET users listing. */
  router.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache");
    proxy.web(req, res);
  });
  return router;
}
