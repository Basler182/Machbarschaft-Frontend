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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.CreateHelpRequestDto = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateHelpRequestDto model module.
   * @module model/CreateHelpRequestDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateHelpRequestDto</code>.
   * @alias module:model/CreateHelpRequestDto
   * @class
   * @param helpSeeker {String} 
   * @param requestStatus {module:model/CreateHelpRequestDto.RequestStatusEnum} 
   * @param requestText {String} 
   */
  var exports = function(helpSeeker, requestStatus, requestText) {
    this.helpSeeker = helpSeeker;
    this.requestStatus = requestStatus;
    this.requestText = requestText;
  };

  /**
   * Constructs a <code>CreateHelpRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateHelpRequestDto} obj Optional instance to populate.
   * @return {module:model/CreateHelpRequestDto} The populated <code>CreateHelpRequestDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('helpSeeker'))
        obj.helpSeeker = ApiClient.convertToType(data['helpSeeker'], 'String');
      if (data.hasOwnProperty('requestStatus'))
        obj.requestStatus = ApiClient.convertToType(data['requestStatus'], 'String');
      if (data.hasOwnProperty('requestText'))
        obj.requestText = ApiClient.convertToType(data['requestText'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} helpSeeker
   */
  exports.prototype.helpSeeker = undefined;

  /**
   * @member {module:model/CreateHelpRequestDto.RequestStatusEnum} requestStatus
   */
  exports.prototype.requestStatus = undefined;

  /**
   * @member {String} requestText
   */
  exports.prototype.requestText = undefined;


  /**
   * Allowed values for the <code>requestStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RequestStatusEnum = {
    /**
     * value: "CLOSED"
     * @const
     */
    CLOSED: "CLOSED",

    /**
     * value: "OPEN"
     * @const
     */
    OPEN: "OPEN",

    /**
     * value: "WIP"
     * @const
     */
    WIP: "WIP"
  };

  return exports;

}));