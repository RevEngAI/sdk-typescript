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
import { BaseResponseBool } from '../models/BaseResponseBool';
import { BaseResponseCollectionBinariesUpdateResponse } from '../models/BaseResponseCollectionBinariesUpdateResponse';
import { BaseResponseCollectionResponse } from '../models/BaseResponseCollectionResponse';
import { BaseResponseCollectionTagsUpdateResponse } from '../models/BaseResponseCollectionTagsUpdateResponse';
import { BaseResponseListCollectionResults } from '../models/BaseResponseListCollectionResults';
import { CollectionBinariesUpdateRequest } from '../models/CollectionBinariesUpdateRequest';
import { CollectionCreateRequest } from '../models/CollectionCreateRequest';
import { CollectionTagsUpdateRequest } from '../models/CollectionTagsUpdateRequest';
import { CollectionUpdateRequest } from '../models/CollectionUpdateRequest';
import { Filters } from '../models/Filters';
import { Order } from '../models/Order';

/**
 * no description
 */
export class CollectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param collectionCreateRequest 
     * @param apiKey 
     */
    public async createCollection(collectionCreateRequest: CollectionCreateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionCreateRequest' is not null or undefined
        if (collectionCreateRequest === null || collectionCreateRequest === undefined) {
            throw new RequiredError("CollectionsApi", "createCollection", "collectionCreateRequest");
        }



        // Path Params
        const localVarPath = '/v2/collections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionCreateRequest, "CollectionCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Deletes a collection
     * Deletes a collection
     * @param collectionId 
     * @param apiKey 
     */
    public async deleteCollection(collectionId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("CollectionsApi", "deleteCollection", "collectionId");
        }



        // Path Params
        const localVarPath = '/v2/collections/{collection_id}'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param collectionId 
     * @param includeTags 
     * @param includeBinaries 
     * @param apiKey 
     */
    public async getCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("CollectionsApi", "getCollection", "collectionId");
        }





        // Path Params
        const localVarPath = '/v2/collections/{collection_id}'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeTags !== undefined) {
            requestContext.setQueryParam("include_tags", ObjectSerializer.serialize(includeTags, "boolean", ""));
        }

        // Query Params
        if (includeBinaries !== undefined) {
            requestContext.setQueryParam("include_binaries", ObjectSerializer.serialize(includeBinaries, "boolean", ""));
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
     * Returns a list of collections
     * Gets basic collections information
     * @param searchTerm 
     * @param filters 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param order 
     * @param apiKey 
     */
    public async listCollections(searchTerm?: string, filters?: Array<Filters>, limit?: number, offset?: number, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, order?: Order, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/v2/collections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (searchTerm !== undefined) {
            requestContext.setQueryParam("search_term", ObjectSerializer.serialize(searchTerm, "string", ""));
        }

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<Filters>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("filters", serializedParam);
            }
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "AppApiRestV2CollectionsEnumsOrderBy", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "Order", ""));
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
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param collectionId 
     * @param collectionUpdateRequest 
     * @param apiKey 
     */
    public async updateCollection(collectionId: number, collectionUpdateRequest: CollectionUpdateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollection", "collectionId");
        }


        // verify required parameter 'collectionUpdateRequest' is not null or undefined
        if (collectionUpdateRequest === null || collectionUpdateRequest === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollection", "collectionUpdateRequest");
        }



        // Path Params
        const localVarPath = '/v2/collections/{collection_id}'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionUpdateRequest, "CollectionUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param collectionId 
     * @param collectionBinariesUpdateRequest 
     * @param apiKey 
     */
    public async updateCollectionBinaries(collectionId: number, collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollectionBinaries", "collectionId");
        }


        // verify required parameter 'collectionBinariesUpdateRequest' is not null or undefined
        if (collectionBinariesUpdateRequest === null || collectionBinariesUpdateRequest === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollectionBinaries", "collectionBinariesUpdateRequest");
        }



        // Path Params
        const localVarPath = '/v2/collections/{collection_id}/binaries'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionBinariesUpdateRequest, "CollectionBinariesUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param collectionId 
     * @param collectionTagsUpdateRequest 
     * @param apiKey 
     */
    public async updateCollectionTags(collectionId: number, collectionTagsUpdateRequest: CollectionTagsUpdateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollectionTags", "collectionId");
        }


        // verify required parameter 'collectionTagsUpdateRequest' is not null or undefined
        if (collectionTagsUpdateRequest === null || collectionTagsUpdateRequest === undefined) {
            throw new RequiredError("CollectionsApi", "updateCollectionTags", "collectionTagsUpdateRequest");
        }



        // Path Params
        const localVarPath = '/v2/collections/{collection_id}/tags'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionTagsUpdateRequest, "CollectionTagsUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class CollectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBool >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBool", ""
            ) as BaseResponseBool;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseBool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBool", ""
            ) as BaseResponseBool;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCollections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCollectionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseListCollectionResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseListCollectionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListCollectionResults", ""
            ) as BaseResponseListCollectionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseListCollectionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListCollectionResults", ""
            ) as BaseResponseListCollectionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionResponse", ""
            ) as BaseResponseCollectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCollectionBinaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCollectionBinariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionBinariesUpdateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionBinariesUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionBinariesUpdateResponse", ""
            ) as BaseResponseCollectionBinariesUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionBinariesUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionBinariesUpdateResponse", ""
            ) as BaseResponseCollectionBinariesUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCollectionTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCollectionTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCollectionTagsUpdateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCollectionTagsUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionTagsUpdateResponse", ""
            ) as BaseResponseCollectionTagsUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCollectionTagsUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCollectionTagsUpdateResponse", ""
            ) as BaseResponseCollectionTagsUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
