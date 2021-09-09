/* tslint:disable */
/* eslint-disable */
/**
 * Lag Time
 * This API allows the retrieval of Lag Time for an item with a given SKU.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "./common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "./base";

/**
 *
 * @export
 * @interface AdditionalAttributes
 */
export interface AdditionalAttributes {
  /**
   *
   * @type {string}
   * @memberof AdditionalAttributes
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof AdditionalAttributes
   */
  value: string;
}
/**
 *
 * @export
 * @interface FeedId
 */
export interface FeedId {
  /**
   * A unique ID, returned from the Bulk Upload API, used for tracking the Feed File.
   * @type {string}
   * @memberof FeedId
   */
  feedId?: string;
}
/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
  /**
   *
   * @type {V3FeedsLagTimeHeader}
   * @memberof InlineObject
   */
  lagTimeHeader: V3FeedsLagTimeHeader;
  /**
   *
   * @type {Array<V3FeedsLagTime>}
   * @memberof InlineObject
   */
  lagTime?: Array<V3FeedsLagTime>;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   * A unique ID, returned from the Bulk Upload API, used for tracking the Feed File.
   * @type {string}
   * @memberof InlineResponse200
   */
  feedId?: string;
}
/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
  /**
   * A seller-provided Product ID. Response will have decoded value.
   * @type {string}
   * @memberof InlineResponse2001
   */
  sku: string;
  /**
   * The number of days between when the item is ordered and when it is shipped
   * @type {number}
   * @memberof InlineResponse2001
   */
  fulfillmentLagTime: number;
}
/**
 *
 * @export
 * @interface LagTime
 */
export interface LagTime {
  /**
   * A seller-provided Product ID. Response will have decoded value.
   * @type {string}
   * @memberof LagTime
   */
  sku: string;
  /**
   * The number of days between when the item is ordered and when it is shipped
   * @type {number}
   * @memberof LagTime
   */
  fulfillmentLagTime?: number;
  /**
   *
   * @type {Array<V3FeedsAdditionalAttributes>}
   * @memberof LagTime
   */
  additionalAttributes?: Array<V3FeedsAdditionalAttributes>;
}
/**
 *
 * @export
 * @interface LagTimeFeed
 */
export interface LagTimeFeed {
  /**
   *
   * @type {V3FeedsLagTimeHeader}
   * @memberof LagTimeFeed
   */
  lagTimeHeader: V3FeedsLagTimeHeader;
  /**
   *
   * @type {Array<V3FeedsLagTime>}
   * @memberof LagTimeFeed
   */
  lagTime?: Array<V3FeedsLagTime>;
}
/**
 *
 * @export
 * @interface LagTimeHeader
 */
export interface LagTimeHeader {
  /**
   *
   * @type {string}
   * @memberof LagTimeHeader
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof LagTimeHeader
   */
  feedDate?: string;
}
/**
 *
 * @export
 * @interface LagTimeResponse
 */
export interface LagTimeResponse {
  /**
   * A seller-provided Product ID. Response will have decoded value.
   * @type {string}
   * @memberof LagTimeResponse
   */
  sku: string;
  /**
   * The number of days between when the item is ordered and when it is shipped
   * @type {number}
   * @memberof LagTimeResponse
   */
  fulfillmentLagTime: number;
}
/**
 *
 * @export
 * @interface V3FeedsAdditionalAttributes
 */
export interface V3FeedsAdditionalAttributes {
  /**
   *
   * @type {string}
   * @memberof V3FeedsAdditionalAttributes
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof V3FeedsAdditionalAttributes
   */
  value: string;
}
/**
 *
 * @export
 * @interface V3FeedsLagTime
 */
export interface V3FeedsLagTime {
  /**
   * A seller-provided Product ID. Response will have decoded value.
   * @type {string}
   * @memberof V3FeedsLagTime
   */
  sku: string;
  /**
   * The number of days between when the item is ordered and when it is shipped
   * @type {number}
   * @memberof V3FeedsLagTime
   */
  fulfillmentLagTime?: number;
  /**
   *
   * @type {Array<V3FeedsAdditionalAttributes>}
   * @memberof V3FeedsLagTime
   */
  additionalAttributes?: Array<V3FeedsAdditionalAttributes>;
}
/**
 *
 * @export
 * @interface V3FeedsLagTimeHeader
 */
export interface V3FeedsLagTimeHeader {
  /**
   *
   * @type {string}
   * @memberof V3FeedsLagTimeHeader
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof V3FeedsLagTimeHeader
   */
  feedDate?: string;
}

/**
 * LagTimeApi - axios parameter creator
 * @export
 */
export const LagTimeApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * This API allows the retrieval of Lag Time for an item with a given SKU.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.  Download the Lag Time JSON schema from the below directory:  xsd/LagTimeException.zip.
     * @summary Lag Time
     * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: \&#39;:\&#39;, \&#39;/\&#39;, \&#39;?\&#39;, \&#39;#\&#39;, \&#39;[\&#39;, \&#39;]\&#39;, \&#39;@\&#39;, \&#39;!\&#39;, \&#39;$\&#39;, \&#39;&amp;\&#39;, \&quot;\&#39;\&quot;, \&#39;(\&#39;, \&#39;)\&#39;, \&#39;*\&#39;, \&#39;+\&#39;, \&#39;,\&#39;, \&#39;;\&#39;, \&#39;&#x3D;\&#39;, ‘ ’, \&#39;{\&#39;, \&#39;}\&#39; as well as \&#39;%\&#39; itself if it\&#39;s a part of sku. Make sure to encode space with %20. Other characters don\&#39;t need to be encoded.
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLagTime: async (
      sku: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'sku' is not null or undefined
      assertParamExists("getLagTime", "sku", sku);
      // verify required parameter 'authorization' is not null or undefined
      assertParamExists("getLagTime", "authorization", authorization);
      // verify required parameter 'wMSECACCESSTOKEN' is not null or undefined
      assertParamExists("getLagTime", "wMSECACCESSTOKEN", wMSECACCESSTOKEN);
      // verify required parameter 'wMQOSCORRELATIONID' is not null or undefined
      assertParamExists("getLagTime", "wMQOSCORRELATIONID", wMQOSCORRELATIONID);
      // verify required parameter 'wMSVCNAME' is not null or undefined
      assertParamExists("getLagTime", "wMSVCNAME", wMSVCNAME);
      const localVarPath = `/v3/lagtime`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicScheme required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      if (sku !== undefined) {
        localVarQueryParameter["sku"] = sku;
      }

      if (authorization !== undefined && authorization !== null) {
        localVarHeaderParameter["Authorization"] = String(authorization);
      }

      if (wMSECACCESSTOKEN !== undefined && wMSECACCESSTOKEN !== null) {
        localVarHeaderParameter["WM_SEC.ACCESS_TOKEN"] =
          String(wMSECACCESSTOKEN);
      }

      if (
        wMCONSUMERCHANNELTYPE !== undefined &&
        wMCONSUMERCHANNELTYPE !== null
      ) {
        localVarHeaderParameter["WM_CONSUMER.CHANNEL.TYPE"] = String(
          wMCONSUMERCHANNELTYPE
        );
      }

      if (wMQOSCORRELATIONID !== undefined && wMQOSCORRELATIONID !== null) {
        localVarHeaderParameter["WM_QOS.CORRELATION_ID"] =
          String(wMQOSCORRELATIONID);
      }

      if (wMSVCNAME !== undefined && wMSVCNAME !== null) {
        localVarHeaderParameter["WM_SVC.NAME"] = String(wMSVCNAME);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This API allows the update of lag time for items in bulk.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.
     * @summary Update lag time
     * @param {string} feedType Use \&#39;lagtime\&#39;
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {InlineObject} inlineObject
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLagTimeBulk: async (
      feedType: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      inlineObject: InlineObject,
      wMCONSUMERCHANNELTYPE?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'feedType' is not null or undefined
      assertParamExists("updateLagTimeBulk", "feedType", feedType);
      // verify required parameter 'authorization' is not null or undefined
      assertParamExists("updateLagTimeBulk", "authorization", authorization);
      // verify required parameter 'wMSECACCESSTOKEN' is not null or undefined
      assertParamExists(
        "updateLagTimeBulk",
        "wMSECACCESSTOKEN",
        wMSECACCESSTOKEN
      );
      // verify required parameter 'wMQOSCORRELATIONID' is not null or undefined
      assertParamExists(
        "updateLagTimeBulk",
        "wMQOSCORRELATIONID",
        wMQOSCORRELATIONID
      );
      // verify required parameter 'wMSVCNAME' is not null or undefined
      assertParamExists("updateLagTimeBulk", "wMSVCNAME", wMSVCNAME);
      // verify required parameter 'inlineObject' is not null or undefined
      assertParamExists("updateLagTimeBulk", "inlineObject", inlineObject);
      const localVarPath = `/v3/feeds`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicScheme required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      if (feedType !== undefined) {
        localVarQueryParameter["feedType"] = feedType;
      }

      if (authorization !== undefined && authorization !== null) {
        localVarHeaderParameter["Authorization"] = String(authorization);
      }

      if (wMSECACCESSTOKEN !== undefined && wMSECACCESSTOKEN !== null) {
        localVarHeaderParameter["WM_SEC.ACCESS_TOKEN"] =
          String(wMSECACCESSTOKEN);
      }

      if (
        wMCONSUMERCHANNELTYPE !== undefined &&
        wMCONSUMERCHANNELTYPE !== null
      ) {
        localVarHeaderParameter["WM_CONSUMER.CHANNEL.TYPE"] = String(
          wMCONSUMERCHANNELTYPE
        );
      }

      if (wMQOSCORRELATIONID !== undefined && wMQOSCORRELATIONID !== null) {
        localVarHeaderParameter["WM_QOS.CORRELATION_ID"] =
          String(wMQOSCORRELATIONID);
      }

      if (wMSVCNAME !== undefined && wMSVCNAME !== null) {
        localVarHeaderParameter["WM_SVC.NAME"] = String(wMSVCNAME);
      }

      localVarHeaderParameter["Content-Type"] = "application/xml";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        inlineObject,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * LagTimeApi - functional programming interface
 * @export
 */
export const LagTimeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LagTimeApiAxiosParamCreator(configuration);
  return {
    /**
     * This API allows the retrieval of Lag Time for an item with a given SKU.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.  Download the Lag Time JSON schema from the below directory:  xsd/LagTimeException.zip.
     * @summary Lag Time
     * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: \&#39;:\&#39;, \&#39;/\&#39;, \&#39;?\&#39;, \&#39;#\&#39;, \&#39;[\&#39;, \&#39;]\&#39;, \&#39;@\&#39;, \&#39;!\&#39;, \&#39;$\&#39;, \&#39;&amp;\&#39;, \&quot;\&#39;\&quot;, \&#39;(\&#39;, \&#39;)\&#39;, \&#39;*\&#39;, \&#39;+\&#39;, \&#39;,\&#39;, \&#39;;\&#39;, \&#39;&#x3D;\&#39;, ‘ ’, \&#39;{\&#39;, \&#39;}\&#39; as well as \&#39;%\&#39; itself if it\&#39;s a part of sku. Make sure to encode space with %20. Other characters don\&#39;t need to be encoded.
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLagTime(
      sku: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse2001>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLagTime(
        sku,
        authorization,
        wMSECACCESSTOKEN,
        wMQOSCORRELATIONID,
        wMSVCNAME,
        wMCONSUMERCHANNELTYPE,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * This API allows the update of lag time for items in bulk.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.
     * @summary Update lag time
     * @param {string} feedType Use \&#39;lagtime\&#39;
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {InlineObject} inlineObject
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLagTimeBulk(
      feedType: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      inlineObject: InlineObject,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse200>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateLagTimeBulk(
          feedType,
          authorization,
          wMSECACCESSTOKEN,
          wMQOSCORRELATIONID,
          wMSVCNAME,
          inlineObject,
          wMCONSUMERCHANNELTYPE,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * LagTimeApi - factory interface
 * @export
 */
export const LagTimeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LagTimeApiFp(configuration);
  return {
    /**
     * This API allows the retrieval of Lag Time for an item with a given SKU.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.  Download the Lag Time JSON schema from the below directory:  xsd/LagTimeException.zip.
     * @summary Lag Time
     * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: \&#39;:\&#39;, \&#39;/\&#39;, \&#39;?\&#39;, \&#39;#\&#39;, \&#39;[\&#39;, \&#39;]\&#39;, \&#39;@\&#39;, \&#39;!\&#39;, \&#39;$\&#39;, \&#39;&amp;\&#39;, \&quot;\&#39;\&quot;, \&#39;(\&#39;, \&#39;)\&#39;, \&#39;*\&#39;, \&#39;+\&#39;, \&#39;,\&#39;, \&#39;;\&#39;, \&#39;&#x3D;\&#39;, ‘ ’, \&#39;{\&#39;, \&#39;}\&#39; as well as \&#39;%\&#39; itself if it\&#39;s a part of sku. Make sure to encode space with %20. Other characters don\&#39;t need to be encoded.
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLagTime(
      sku: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): AxiosPromise<InlineResponse2001> {
      return localVarFp
        .getLagTime(
          sku,
          authorization,
          wMSECACCESSTOKEN,
          wMQOSCORRELATIONID,
          wMSVCNAME,
          wMCONSUMERCHANNELTYPE,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This API allows the update of lag time for items in bulk.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.
     * @summary Update lag time
     * @param {string} feedType Use \&#39;lagtime\&#39;
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {InlineObject} inlineObject
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLagTimeBulk(
      feedType: string,
      authorization: string,
      wMSECACCESSTOKEN: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      inlineObject: InlineObject,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): AxiosPromise<InlineResponse200> {
      return localVarFp
        .updateLagTimeBulk(
          feedType,
          authorization,
          wMSECACCESSTOKEN,
          wMQOSCORRELATIONID,
          wMSVCNAME,
          inlineObject,
          wMCONSUMERCHANNELTYPE,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for getLagTime operation in LagTimeApi.
 * @export
 * @interface LagTimeApiGetLagTimeRequest
 */
export interface LagTimeApiGetLagTimeRequest {
  /**
   * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: \&#39;:\&#39;, \&#39;/\&#39;, \&#39;?\&#39;, \&#39;#\&#39;, \&#39;[\&#39;, \&#39;]\&#39;, \&#39;@\&#39;, \&#39;!\&#39;, \&#39;$\&#39;, \&#39;&amp;\&#39;, \&quot;\&#39;\&quot;, \&#39;(\&#39;, \&#39;)\&#39;, \&#39;*\&#39;, \&#39;+\&#39;, \&#39;,\&#39;, \&#39;;\&#39;, \&#39;&#x3D;\&#39;, ‘ ’, \&#39;{\&#39;, \&#39;}\&#39; as well as \&#39;%\&#39; itself if it\&#39;s a part of sku. Make sure to encode space with %20. Other characters don\&#39;t need to be encoded.
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly sku: string;

  /**
   * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly authorization: string;

  /**
   * The access token retrieved in the Token API call
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly wMSECACCESSTOKEN: string;

  /**
   * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly wMQOSCORRELATIONID: string;

  /**
   * Walmart Service Name
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly wMSVCNAME: string;

  /**
   * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
   * @type {string}
   * @memberof LagTimeApiGetLagTime
   */
  readonly wMCONSUMERCHANNELTYPE?: string;
}

/**
 * Request parameters for updateLagTimeBulk operation in LagTimeApi.
 * @export
 * @interface LagTimeApiUpdateLagTimeBulkRequest
 */
export interface LagTimeApiUpdateLagTimeBulkRequest {
  /**
   * Use \&#39;lagtime\&#39;
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly feedType: string;

  /**
   * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly authorization: string;

  /**
   * The access token retrieved in the Token API call
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly wMSECACCESSTOKEN: string;

  /**
   * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly wMQOSCORRELATIONID: string;

  /**
   * Walmart Service Name
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly wMSVCNAME: string;

  /**
   *
   * @type {InlineObject}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly inlineObject: InlineObject;

  /**
   * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
   * @type {string}
   * @memberof LagTimeApiUpdateLagTimeBulk
   */
  readonly wMCONSUMERCHANNELTYPE?: string;
}

/**
 * LagTimeApi - object-oriented interface
 * @export
 * @class LagTimeApi
 * @extends {BaseAPI}
 */
export class LagTimeApi extends BaseAPI {
  /**
   * This API allows the retrieval of Lag Time for an item with a given SKU.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.  Download the Lag Time JSON schema from the below directory:  xsd/LagTimeException.zip.
   * @summary Lag Time
   * @param {LagTimeApiGetLagTimeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LagTimeApi
   */
  public getLagTime(
    requestParameters: LagTimeApiGetLagTimeRequest,
    options?: any
  ) {
    return LagTimeApiFp(this.configuration)
      .getLagTime(
        requestParameters.sku,
        requestParameters.authorization,
        requestParameters.wMSECACCESSTOKEN,
        requestParameters.wMQOSCORRELATIONID,
        requestParameters.wMSVCNAME,
        requestParameters.wMCONSUMERCHANNELTYPE,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * This API allows the update of lag time for items in bulk.  Lag Time is the number of days between when an item is ordered and when it is shipped. Lag time of two days or more requires approval at the item setup category level. Please refer to the Request Lag Time Exceptions article for more details on this process.  Download the Lag Time Exception XSDs from the below directory:  xsd/LagTimeException.zip.
   * @summary Update lag time
   * @param {LagTimeApiUpdateLagTimeBulkRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LagTimeApi
   */
  public updateLagTimeBulk(
    requestParameters: LagTimeApiUpdateLagTimeBulkRequest,
    options?: any
  ) {
    return LagTimeApiFp(this.configuration)
      .updateLagTimeBulk(
        requestParameters.feedType,
        requestParameters.authorization,
        requestParameters.wMSECACCESSTOKEN,
        requestParameters.wMQOSCORRELATIONID,
        requestParameters.wMSVCNAME,
        requestParameters.inlineObject,
        requestParameters.wMCONSUMERCHANNELTYPE,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}