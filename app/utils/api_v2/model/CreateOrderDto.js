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
    define(['ApiClient', 'model/CreateOrderItemDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateOrderItemDto'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.CreateOrderDto = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.CreateOrderItemDto);
  }
}(this, function(ApiClient, CreateOrderItemDto) {
  'use strict';

  /**
   * The CreateOrderDto model module.
   * @module model/CreateOrderDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateOrderDto</code>.
   * @alias module:model/CreateOrderDto
   * @class
   * @param source {module:model/CreateOrderDto.SourceEnum} 
   */
  var exports = function(source) {
    this.source = source;
  };

  /**
   * Constructs a <code>CreateOrderDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrderDto} obj Optional instance to populate.
   * @return {module:model/CreateOrderDto} The populated <code>CreateOrderDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hint'))
        obj.hint = ApiClient.convertToType(data['hint'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CreateOrderItemDto]);
      if (data.hasOwnProperty('maxPrice'))
        obj.maxPrice = ApiClient.convertToType(data['maxPrice'], 'Number');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} hint
   */
  exports.prototype.hint = undefined;

  /**
   * @member {Array.<module:model/CreateOrderItemDto>} items
   */
  exports.prototype.items = undefined;

  /**
   * @member {Number} maxPrice
   */
  exports.prototype.maxPrice = undefined;

  /**
   * @member {module:model/CreateOrderDto.SourceEnum} source
   */
  exports.prototype.source = undefined;

  /**
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "ADMIN"
     * @const
     */
    ADMIN: "ADMIN",

    /**
     * value: "APP"
     * @const
     */
    APP: "APP",

    /**
     * value: "HOTLINE"
     * @const
     */
    HOTLINE: "HOTLINE"
  };

  return exports;

}));