/* tslint:disable */
/* eslint-disable */
/**
 * Authentication & Authorization Management
 * The Walmart Marketplace APIs use OAuth for token-based authentication and authorization.
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
 * @interface IAMTokenDTO
 */
export interface IAMTokenDTO {
  /**
   * The type of access token to be issued
   * @type {string}
   * @memberof IAMTokenDTO
   */
  grant_type: string;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   * The timestamp when the token expires
   * @type {string}
   * @memberof InlineResponse200
   */
  expire_at?: string;
  /**
   * The timestamp when the token is issued
   * @type {string}
   * @memberof InlineResponse200
   */
  issued_at?: string;
  /**
   * Whether the token is valid; boolean value of true or false
   * @type {boolean}
   * @memberof InlineResponse200
   */
  is_valid?: boolean;
  /**
   * Whether the keys Seller used are correctly associated
   * @type {boolean}
   * @memberof InlineResponse200
   */
  is_channel_match?: boolean;
  /**
   *
   * @type {InlineResponse200Scopes}
   * @memberof InlineResponse200
   */
  scopes?: InlineResponse200Scopes;
}
/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
  /**
   * Unique token string generated by the API call
   * @type {string}
   * @memberof InlineResponse2001
   */
  accessToken: string;
  /**
   * Type of token according to user. (e.g., \'BEARER\')
   * @type {string}
   * @memberof InlineResponse2001
   */
  tokenType?: string;
  /**
   * Seconds until expiration of token
   * @type {number}
   * @memberof InlineResponse2001
   */
  expiresIn?: number;
}
/**
 * The API categories with their corresponding access levels
 * @export
 * @interface InlineResponse200Scopes
 */
export interface InlineResponse200Scopes {
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  reports?: InlineResponse200ScopesReportsEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  item?: InlineResponse200ScopesItemEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  shipping?: InlineResponse200ScopesShippingEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  price?: InlineResponse200ScopesPriceEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  lagtime?: InlineResponse200ScopesLagtimeEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  feeds?: InlineResponse200ScopesFeedsEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  returns?: InlineResponse200ScopesReturnsEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  orders?: InlineResponse200ScopesOrdersEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  rules?: InlineResponse200ScopesRulesEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  inventory?: InlineResponse200ScopesInventoryEnum;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Scopes
   */
  content?: InlineResponse200ScopesContentEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesReportsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesItemEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesShippingEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesPriceEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesLagtimeEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesFeedsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesReturnsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesOrdersEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesRulesEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesInventoryEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse200ScopesContentEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}

/**
 *
 * @export
 * @interface OAuthToken
 */
export interface OAuthToken {
  /**
   * Unique token string generated by the API call
   * @type {string}
   * @memberof OAuthToken
   */
  access_token: string;
  /**
   * Type of token according to user. (e.g., \'BEARER\')
   * @type {string}
   * @memberof OAuthToken
   */
  token_type?: string;
  /**
   * Seconds until expiration of token
   * @type {number}
   * @memberof OAuthToken
   */
  expires_in?: number;
}
/**
 *
 * @export
 * @interface OAuthTokenDTO
 */
export interface OAuthTokenDTO {
  /**
   * Unique token string generated by the API call
   * @type {string}
   * @memberof OAuthTokenDTO
   */
  accessToken: string;
  /**
   * Type of token according to user. (e.g., \'BEARER\')
   * @type {string}
   * @memberof OAuthTokenDTO
   */
  tokenType?: string;
  /**
   * Seconds until expiration of token
   * @type {number}
   * @memberof OAuthTokenDTO
   */
  expiresIn?: number;
}
/**
 * The API categories with their corresponding access levels
 * @export
 * @interface Scopes
 */
export interface Scopes {
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  reports?: ScopesReportsEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  item?: ScopesItemEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  shipping?: ScopesShippingEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  price?: ScopesPriceEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  lagtime?: ScopesLagtimeEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  feeds?: ScopesFeedsEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  returns?: ScopesReturnsEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  orders?: ScopesOrdersEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  rules?: ScopesRulesEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  inventory?: ScopesInventoryEnum;
  /**
   *
   * @type {string}
   * @memberof Scopes
   */
  content?: ScopesContentEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ScopesReportsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesItemEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesShippingEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesPriceEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesLagtimeEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesFeedsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesReturnsEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesOrdersEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesRulesEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesInventoryEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}
/**
 * @export
 * @enum {string}
 */
export enum ScopesContentEnum {
  FullAccess = "full_access",
  ViewOnly = "view_only",
  NoAccess = "no_access",
}

/**
 *
 * @export
 * @interface TokenDetailResponse
 */
export interface TokenDetailResponse {
  /**
   * The timestamp when the token expires
   * @type {string}
   * @memberof TokenDetailResponse
   */
  expire_at?: string;
  /**
   * The timestamp when the token is issued
   * @type {string}
   * @memberof TokenDetailResponse
   */
  issued_at?: string;
  /**
   * Whether the token is valid; boolean value of true or false
   * @type {boolean}
   * @memberof TokenDetailResponse
   */
  is_valid?: boolean;
  /**
   * Whether the keys Seller used are correctly associated
   * @type {boolean}
   * @memberof TokenDetailResponse
   */
  is_channel_match?: boolean;
  /**
   *
   * @type {InlineResponse200Scopes}
   * @memberof TokenDetailResponse
   */
  scopes?: InlineResponse200Scopes;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves information on the access levels delegated by Sellers for their Solution Providers. The scope includes a range of API categories and their corresponding access levels, for example Reports: View Only, Item: Full Access, etc.
     * @summary Token Detail
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenDetail: async (
      wMSECACCESSTOKEN: string,
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'wMSECACCESSTOKEN' is not null or undefined
      assertParamExists("getTokenDetail", "wMSECACCESSTOKEN", wMSECACCESSTOKEN);
      // verify required parameter 'authorization' is not null or undefined
      assertParamExists("getTokenDetail", "authorization", authorization);
      // verify required parameter 'wMQOSCORRELATIONID' is not null or undefined
      assertParamExists(
        "getTokenDetail",
        "wMQOSCORRELATIONID",
        wMQOSCORRELATIONID
      );
      // verify required parameter 'wMSVCNAME' is not null or undefined
      assertParamExists("getTokenDetail", "wMSVCNAME", wMSVCNAME);
      const localVarPath = `/v3/token/detail`;
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

      if (wMSECACCESSTOKEN !== undefined && wMSECACCESSTOKEN !== null) {
        localVarHeaderParameter["WM_SEC.ACCESS_TOKEN"] =
          String(wMSECACCESSTOKEN);
      }

      if (authorization !== undefined && authorization !== null) {
        localVarHeaderParameter["Authorization"] = String(authorization);
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
     * Get access token by providing Client ID and Client Secret.
     * @summary Token API
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} grantType The type of access token to be issued
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tokenAPI: async (
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      grantType: string,
      wMCONSUMERCHANNELTYPE?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'authorization' is not null or undefined
      assertParamExists("tokenAPI", "authorization", authorization);
      // verify required parameter 'wMQOSCORRELATIONID' is not null or undefined
      assertParamExists("tokenAPI", "wMQOSCORRELATIONID", wMQOSCORRELATIONID);
      // verify required parameter 'wMSVCNAME' is not null or undefined
      assertParamExists("tokenAPI", "wMSVCNAME", wMSVCNAME);
      // verify required parameter 'grantType' is not null or undefined
      assertParamExists("tokenAPI", "grantType", grantType);
      const localVarPath = `/v3/token`;
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
      const localVarFormParams = new URLSearchParams();

      // authentication basicScheme required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      if (authorization !== undefined && authorization !== null) {
        localVarHeaderParameter["Authorization"] = String(authorization);
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

      if (grantType !== undefined) {
        localVarFormParams.set("grant_type", grantType as any);
      }

      localVarHeaderParameter["Content-Type"] =
        "application/x-www-form-urlencoded";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams.toString();

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    AuthenticationApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves information on the access levels delegated by Sellers for their Solution Providers. The scope includes a range of API categories and their corresponding access levels, for example Reports: View Only, Item: Full Access, etc.
     * @summary Token Detail
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenDetail(
      wMSECACCESSTOKEN: string,
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse200>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenDetail(
        wMSECACCESSTOKEN,
        authorization,
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
     * Get access token by providing Client ID and Client Secret.
     * @summary Token API
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} grantType The type of access token to be issued
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async tokenAPI(
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      grantType: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse2001>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.tokenAPI(
        authorization,
        wMQOSCORRELATIONID,
        wMSVCNAME,
        grantType,
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
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AuthenticationApiFp(configuration);
  return {
    /**
     * Retrieves information on the access levels delegated by Sellers for their Solution Providers. The scope includes a range of API categories and their corresponding access levels, for example Reports: View Only, Item: Full Access, etc.
     * @summary Token Detail
     * @param {string} wMSECACCESSTOKEN The access token retrieved in the Token API call
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenDetail(
      wMSECACCESSTOKEN: string,
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): AxiosPromise<InlineResponse200> {
      return localVarFp
        .getTokenDetail(
          wMSECACCESSTOKEN,
          authorization,
          wMQOSCORRELATIONID,
          wMSVCNAME,
          wMCONSUMERCHANNELTYPE,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get access token by providing Client ID and Client Secret.
     * @summary Token API
     * @param {string} authorization Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
     * @param {string} wMQOSCORRELATIONID A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     * @param {string} wMSVCNAME Walmart Service Name
     * @param {string} grantType The type of access token to be issued
     * @param {string} [wMCONSUMERCHANNELTYPE] A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tokenAPI(
      authorization: string,
      wMQOSCORRELATIONID: string,
      wMSVCNAME: string,
      grantType: string,
      wMCONSUMERCHANNELTYPE?: string,
      options?: any
    ): AxiosPromise<InlineResponse2001> {
      return localVarFp
        .tokenAPI(
          authorization,
          wMQOSCORRELATIONID,
          wMSVCNAME,
          grantType,
          wMCONSUMERCHANNELTYPE,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for getTokenDetail operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiGetTokenDetailRequest
 */
export interface AuthenticationApiGetTokenDetailRequest {
  /**
   * The access token retrieved in the Token API call
   * @type {string}
   * @memberof AuthenticationApiGetTokenDetail
   */
  readonly wMSECACCESSTOKEN: string;

  /**
   * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
   * @type {string}
   * @memberof AuthenticationApiGetTokenDetail
   */
  readonly authorization: string;

  /**
   * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
   * @type {string}
   * @memberof AuthenticationApiGetTokenDetail
   */
  readonly wMQOSCORRELATIONID: string;

  /**
   * Walmart Service Name
   * @type {string}
   * @memberof AuthenticationApiGetTokenDetail
   */
  readonly wMSVCNAME: string;

  /**
   * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
   * @type {string}
   * @memberof AuthenticationApiGetTokenDetail
   */
  readonly wMCONSUMERCHANNELTYPE?: string;
}

/**
 * Request parameters for tokenAPI operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiTokenAPIRequest
 */
export interface AuthenticationApiTokenAPIRequest {
  /**
   * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.
   * @type {string}
   * @memberof AuthenticationApiTokenAPI
   */
  readonly authorization: string;

  /**
   * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
   * @type {string}
   * @memberof AuthenticationApiTokenAPI
   */
  readonly wMQOSCORRELATIONID: string;

  /**
   * Walmart Service Name
   * @type {string}
   * @memberof AuthenticationApiTokenAPI
   */
  readonly wMSVCNAME: string;

  /**
   * The type of access token to be issued
   * @type {string}
   * @memberof AuthenticationApiTokenAPI
   */
  readonly grantType: string;

  /**
   * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
   * @type {string}
   * @memberof AuthenticationApiTokenAPI
   */
  readonly wMCONSUMERCHANNELTYPE?: string;
}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
  /**
   * Retrieves information on the access levels delegated by Sellers for their Solution Providers. The scope includes a range of API categories and their corresponding access levels, for example Reports: View Only, Item: Full Access, etc.
   * @summary Token Detail
   * @param {AuthenticationApiGetTokenDetailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthenticationApi
   */
  public getTokenDetail(
    requestParameters: AuthenticationApiGetTokenDetailRequest,
    options?: any
  ) {
    return AuthenticationApiFp(this.configuration)
      .getTokenDetail(
        requestParameters.wMSECACCESSTOKEN,
        requestParameters.authorization,
        requestParameters.wMQOSCORRELATIONID,
        requestParameters.wMSVCNAME,
        requestParameters.wMCONSUMERCHANNELTYPE,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get access token by providing Client ID and Client Secret.
   * @summary Token API
   * @param {AuthenticationApiTokenAPIRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthenticationApi
   */
  public tokenAPI(
    requestParameters: AuthenticationApiTokenAPIRequest,
    options?: any
  ) {
    return AuthenticationApiFp(this.configuration)
      .tokenAPI(
        requestParameters.authorization,
        requestParameters.wMQOSCORRELATIONID,
        requestParameters.wMSVCNAME,
        requestParameters.grantType,
        requestParameters.wMCONSUMERCHANNELTYPE,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
