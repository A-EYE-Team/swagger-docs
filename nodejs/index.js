'use strict';

/*
 * Node.js entry point for Swagger Docs
*/

module.exports = {

  /*
   * A connect middle-ware for using Swagger Docs with Express
  */
  middleWare: function swaggerDocsMiddleWare(specs) {

    return function (req, res) {

      // TODO
      throw new Error('not yet implemented.');
    }
  }
};
