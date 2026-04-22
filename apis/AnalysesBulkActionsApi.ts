// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AnalysisBulkAddTagsRequest } from '../models/AnalysisBulkAddTagsRequest';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAnalysisBulkAddTagsResponse } from '../models/BaseResponseAnalysisBulkAddTagsResponse';
import { BaseResponseDict } from '../models/BaseResponseDict';
import { BulkDeleteAnalysesRequest } from '../models/BulkDeleteAnalysesRequest';

/**
 * no description
 */
export class AnalysesBulkActionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest 
     * @param endpointUrl 
     * @param localCacheDir 
     * @param localCacheMaxSizeMb 
     * @param customerSamplesBucket 
     * @param firmwareSamplesBucket 
     * @param maxRetryAttempts 
     */
    public async bulkAddAnalysisTags(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, endpointUrl?: string, localCacheDir?: string, localCacheMaxSizeMb?: number, customerSamplesBucket?: string, firmwareSamplesBucket?: string, maxRetryAttempts?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisBulkAddTagsRequest' is not null or undefined
        if (analysisBulkAddTagsRequest === null || analysisBulkAddTagsRequest === undefined) {
            throw new RequiredError("AnalysesBulkActionsApi", "bulkAddAnalysisTags", "analysisBulkAddTagsRequest");
        }








        // Path Params
        const localVarPath = '/v2/analyses/tags/add';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (endpointUrl !== undefined) {
            requestContext.setQueryParam("endpoint_url", ObjectSerializer.serialize(endpointUrl, "string", ""));
        }

        // Query Params
        if (localCacheDir !== undefined) {
            requestContext.setQueryParam("local_cache_dir", ObjectSerializer.serialize(localCacheDir, "string", ""));
        }

        // Query Params
        if (localCacheMaxSizeMb !== undefined) {
            requestContext.setQueryParam("local_cache_max_size_mb", ObjectSerializer.serialize(localCacheMaxSizeMb, "number", ""));
        }

        // Query Params
        if (customerSamplesBucket !== undefined) {
            requestContext.setQueryParam("customer_samples_bucket", ObjectSerializer.serialize(customerSamplesBucket, "string", ""));
        }

        // Query Params
        if (firmwareSamplesBucket !== undefined) {
            requestContext.setQueryParam("firmware_samples_bucket", ObjectSerializer.serialize(firmwareSamplesBucket, "string", ""));
        }

        // Query Params
        if (maxRetryAttempts !== undefined) {
            requestContext.setQueryParam("max_retry_attempts", ObjectSerializer.serialize(maxRetryAttempts, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(analysisBulkAddTagsRequest, "AnalysisBulkAddTagsRequest", ""),
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
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest 
     * @param endpointUrl 
     * @param localCacheDir 
     * @param localCacheMaxSizeMb 
     * @param customerSamplesBucket 
     * @param firmwareSamplesBucket 
     * @param maxRetryAttempts 
     */
    public async bulkDeleteAnalyses(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, endpointUrl?: string, localCacheDir?: string, localCacheMaxSizeMb?: number, customerSamplesBucket?: string, firmwareSamplesBucket?: string, maxRetryAttempts?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkDeleteAnalysesRequest' is not null or undefined
        if (bulkDeleteAnalysesRequest === null || bulkDeleteAnalysesRequest === undefined) {
            throw new RequiredError("AnalysesBulkActionsApi", "bulkDeleteAnalyses", "bulkDeleteAnalysesRequest");
        }








        // Path Params
        const localVarPath = '/v2/analyses/delete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (endpointUrl !== undefined) {
            requestContext.setQueryParam("endpoint_url", ObjectSerializer.serialize(endpointUrl, "string", ""));
        }

        // Query Params
        if (localCacheDir !== undefined) {
            requestContext.setQueryParam("local_cache_dir", ObjectSerializer.serialize(localCacheDir, "string", ""));
        }

        // Query Params
        if (localCacheMaxSizeMb !== undefined) {
            requestContext.setQueryParam("local_cache_max_size_mb", ObjectSerializer.serialize(localCacheMaxSizeMb, "number", ""));
        }

        // Query Params
        if (customerSamplesBucket !== undefined) {
            requestContext.setQueryParam("customer_samples_bucket", ObjectSerializer.serialize(customerSamplesBucket, "string", ""));
        }

        // Query Params
        if (firmwareSamplesBucket !== undefined) {
            requestContext.setQueryParam("firmware_samples_bucket", ObjectSerializer.serialize(firmwareSamplesBucket, "string", ""));
        }

        // Query Params
        if (maxRetryAttempts !== undefined) {
            requestContext.setQueryParam("max_retry_attempts", ObjectSerializer.serialize(maxRetryAttempts, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkDeleteAnalysesRequest, "BulkDeleteAnalysesRequest", ""),
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

export class AnalysesBulkActionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkAddAnalysisTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkAddAnalysisTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisBulkAddTagsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisBulkAddTagsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisBulkAddTagsResponse", ""
            ) as BaseResponseAnalysisBulkAddTagsResponse;
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
            const body: BaseResponseAnalysisBulkAddTagsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisBulkAddTagsResponse", ""
            ) as BaseResponseAnalysisBulkAddTagsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkDeleteAnalyses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkDeleteAnalysesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseDict >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseDict = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseDict", ""
            ) as BaseResponseDict;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseDict = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseDict", ""
            ) as BaseResponseDict;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
