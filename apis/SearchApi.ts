// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AppApiRestV2CollectionsEnumsOrderBy } from '../models/AppApiRestV2CollectionsEnumsOrderBy';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseBinarySearchResponse } from '../models/BaseResponseBinarySearchResponse';
import { BaseResponseCollectionSearchResponse } from '../models/BaseResponseCollectionSearchResponse';
import { BaseResponseFunctionSearchResponse } from '../models/BaseResponseFunctionSearchResponse';
import { BaseResponseTagSearchResponse } from '../models/BaseResponseTagSearchResponse';
import { Filters } from '../models/Filters';
import { Order } from '../models/Order';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Searches for a specific binary
     * Binaries search
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     * @param partialName The partial or full name of the binary being searched
     * @param partialSha256 The partial or full sha256 of the binary being searched
     * @param tags The tags to be searched for
     * @param modelName The name of the model used to analyze the binary the function belongs to
     * @param userFilesOnly Whether to only search user\&#39;s uploaded files
     * @param apiKey 
     */
    public async searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/v2/search/binaries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (partialName !== undefined) {
            requestContext.setQueryParam("partial_name", ObjectSerializer.serialize(partialName, "string", ""));
        }

        // Query Params
        if (partialSha256 !== undefined) {
            requestContext.setQueryParam("partial_sha256", ObjectSerializer.serialize(partialSha256, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            const serializedParams = ObjectSerializer.serialize(tags, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("tags", serializedParam);
            }
        }

        // Query Params
        if (modelName !== undefined) {
            requestContext.setQueryParam("model_name", ObjectSerializer.serialize(modelName, "string", ""));
        }

        // Query Params
        if (userFilesOnly !== undefined) {
            requestContext.setQueryParam("user_files_only", ObjectSerializer.serialize(userFilesOnly, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     * @param partialCollectionName The partial or full name of the collection being searched
     * @param partialBinaryName The partial or full name of the binary belonging to the collection
     * @param partialBinarySha256 The partial or full sha256 of the binary belonging to the collection
     * @param tags The tags to be searched for
     * @param modelName The name of the model used to analyze the binary the function belongs to
     * @param filters The filters to be used for the search
     * @param orderBy The field to sort the order by in the results
     * @param orderByDirection The order direction in which to return results
     * @param apiKey 
     */
    public async searchCollections(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, modelName?: string, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/v2/search/collections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (partialCollectionName !== undefined) {
            requestContext.setQueryParam("partial_collection_name", ObjectSerializer.serialize(partialCollectionName, "string", ""));
        }

        // Query Params
        if (partialBinaryName !== undefined) {
            requestContext.setQueryParam("partial_binary_name", ObjectSerializer.serialize(partialBinaryName, "string", ""));
        }

        // Query Params
        if (partialBinarySha256 !== undefined) {
            requestContext.setQueryParam("partial_binary_sha256", ObjectSerializer.serialize(partialBinarySha256, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            const serializedParams = ObjectSerializer.serialize(tags, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("tags", serializedParam);
            }
        }

        // Query Params
        if (modelName !== undefined) {
            requestContext.setQueryParam("model_name", ObjectSerializer.serialize(modelName, "string", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<Filters>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("filters", serializedParam);
            }
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "AppApiRestV2CollectionsEnumsOrderBy", ""));
        }

        // Query Params
        if (orderByDirection !== undefined) {
            requestContext.setQueryParam("order_by_direction", ObjectSerializer.serialize(orderByDirection, "Order", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     * @param partialName The partial or full name of the function being searched
     * @param modelName The name of the model used to analyze the binary the function belongs to
     * @param apiKey 
     */
    public async searchFunctions(page?: number, pageSize?: number, partialName?: string, modelName?: string, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v2/search/functions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (partialName !== undefined) {
            requestContext.setQueryParam("partial_name", ObjectSerializer.serialize(partialName, "string", ""));
        }

        // Query Params
        if (modelName !== undefined) {
            requestContext.setQueryParam("model_name", ObjectSerializer.serialize(modelName, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param partialName The partial or full name of the tag to search for
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public async searchTags(partialName: string, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partialName' is not null or undefined
        if (partialName === null || partialName === undefined) {
            throw new RequiredError("SearchApi", "searchTags", "partialName");
        }




        // Path Params
        const localVarPath = '/v2/search/tags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (partialName !== undefined) {
            requestContext.setQueryParam("partial_name", ObjectSerializer.serialize(partialName, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchBinaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchBinariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBinarySearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBinarySearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBinarySearchResponse", ""
            ) as BaseResponseBinarySearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "You must provide at least one of the filters; partial_name, partial_sha256, tags or model_name to search", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseBinarySearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBinarySearchResponse", ""
            ) as BaseResponseBinarySearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchCollections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchCollectionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionSearchResponse", ""
            ) as BaseResponseCollectionSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "You must provide at least one of the filters; partial_collection_name, partial_binary_name, partial_binary_sha256, tags or model_name to search", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "The model name provided does not exist", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionSearchResponse", ""
            ) as BaseResponseCollectionSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchFunctions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchFunctionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionSearchResponse", ""
            ) as BaseResponseFunctionSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "You must provide at least one of the filters; partial_name, or model_name to search", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseFunctionSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionSearchResponse", ""
            ) as BaseResponseFunctionSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseTagSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseTagSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTagSearchResponse", ""
            ) as BaseResponseTagSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "You must provide a partial_name to search and it must be greater than 3 characters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseTagSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTagSearchResponse", ""
            ) as BaseResponseTagSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
