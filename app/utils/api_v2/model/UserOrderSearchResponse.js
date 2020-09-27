/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnonymizedUserResource', 'model/OrderResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnonymizedUserResource'), require('./OrderResource'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.UserOrderSearchResponse = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.AnonymizedUserResource, root.ApiDocumentation.OrderResource);
  }
}(this, function(ApiClient, AnonymizedUserResource, OrderResource) {
  'use strict';

  /**
   * The UserOrderSearchResponse model module.
   * @module model/UserOrderSearchResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserOrderSearchResponse</code>.
   * @alias module:model/UserOrderSearchResponse
   * @class
   * @param order {module:model/OrderResource} 
   * @param user {module:model/AnonymizedUserResource} 
   */
  var exports = function(order, user) {
    this.order = order;
    this.user = user;
  };

  /**
   * Constructs a <code>UserOrderSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserOrderSearchResponse} obj Optional instance to populate.
   * @return {module:model/UserOrderSearchResponse} The populated <code>UserOrderSearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('order'))
        obj.order = OrderResource.constructFromObject(data['order']);
      if (data.hasOwnProperty('user'))
        obj.user = AnonymizedUserResource.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * @member {module:model/OrderResource} order
   */
  exports.prototype.order = undefined;

  /**
   * @member {module:model/AnonymizedUserResource} user
   */
  exports.prototype.user = undefined;

  return exports;

}));