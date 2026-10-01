// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { APIError } from '../models/APIError';
import { AnalysisBulkAddTagsRequest } from '../models/AnalysisBulkAddTagsRequest';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAnalysisBulkAddTagsResponse } from '../models/BaseResponseAnalysisBulkAddTagsResponse';
import { BaseResponseDict } from '../models/BaseResponseDict';
import { BulkAddTagsInputBody } from '../models/BulkAddTagsInputBody';
import { BulkAddTagsOutputBody } from '../models/BulkAddTagsOutputBody';
import { BulkDeleteAnalysesInputBody } from '../models/BulkDeleteAnalysesInputBody';
import { BulkDeleteAnalysesRequest } from '../models/BulkDeleteAnalysesRequest';

/**
 * no description
 */
export class AnalysesBulkActionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @deprecated
     *
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest 
     */
    public async bulkAddAnalysisTags(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, _options?: Configuration): Promise<RequestContext> {
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
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
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
     * @deprecated
     *
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest 
     */
    public async bulkDeleteAnalyses(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, _options?: Configuration): Promise<RequestContext> {
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
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
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
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param bulkAddTagsInputBody 
     */
    public async v3BatchAddAnalysisTags(bulkAddTagsInputBody: BulkAddTagsInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkAddTagsInputBody' is not null or undefined
        if (bulkAddTagsInputBody === null || bulkAddTagsInputBody === undefined) {
            throw new RequiredError("AnalysesBulkActionsApi", "v3BatchAddAnalysisTags", "bulkAddTagsInputBody");
        }


        // Path Params
        const localVarPath = '/v3/analyses:batchAddTags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkAddTagsInputBody, "BulkAddTagsInputBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
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
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param bulkDeleteAnalysesInputBody 
     */
    public async v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkDeleteAnalysesInputBody' is not null or undefined
        if (bulkDeleteAnalysesInputBody === null || bulkDeleteAnalysesInputBody === undefined) {
            throw new RequiredError("AnalysesBulkActionsApi", "v3BatchDeleteAnalyses", "bulkDeleteAnalysesInputBody");
        }


        // Path Params
        const localVarPath = '/v3/analyses:batchDelete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkDeleteAnalysesInputBody, "BulkDeleteAnalysesInputBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3BatchAddAnalysisTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3BatchAddAnalysisTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkAddTagsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkAddTagsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkAddTagsOutputBody", ""
            ) as BulkAddTagsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Unprocessable Entity", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkAddTagsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkAddTagsOutputBody", ""
            ) as BulkAddTagsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3BatchDeleteAnalyses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3BatchDeleteAnalysesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Unprocessable Entity", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
