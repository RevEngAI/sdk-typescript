// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { APIError } from '../models/APIError';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseFunctionDataTypes } from '../models/BaseResponseFunctionDataTypes';
import { BaseResponseFunctionDataTypesList } from '../models/BaseResponseFunctionDataTypesList';
import { BaseResponseGenerateFunctionDataTypes } from '../models/BaseResponseGenerateFunctionDataTypes';
import { BaseResponseGenerationStatusList } from '../models/BaseResponseGenerationStatusList';
import { BatchUpdateDataTypesInputBody } from '../models/BatchUpdateDataTypesInputBody';
import { BatchUpdateDataTypesOutputBody } from '../models/BatchUpdateDataTypesOutputBody';
import { FunctionDataTypesParams } from '../models/FunctionDataTypesParams';

/**
 * no description
 */
export class FunctionsDataTypesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param analysisId Analysis ID
     * @param batchUpdateDataTypesInputBody 
     */
    public async batchUpdateFunctionDataTypes(analysisId: number, batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "batchUpdateFunctionDataTypes", "analysisId");
        }


        // verify required parameter 'batchUpdateDataTypesInputBody' is not null or undefined
        if (batchUpdateDataTypesInputBody === null || batchUpdateDataTypesInputBody === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "batchUpdateFunctionDataTypes", "batchUpdateDataTypesInputBody");
        }


        // Path Params
        const localVarPath = '/v3/analyses/{analysis_id}/functions/data-types'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchUpdateDataTypesInputBody, "BatchUpdateDataTypesInputBody", ""),
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
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param analysisId 
     * @param functionDataTypesParams 
     */
    public async generateFunctionDataTypesForAnalysis(analysisId: number, functionDataTypesParams: FunctionDataTypesParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "generateFunctionDataTypesForAnalysis", "analysisId");
        }


        // verify required parameter 'functionDataTypesParams' is not null or undefined
        if (functionDataTypesParams === null || functionDataTypesParams === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "generateFunctionDataTypesForAnalysis", "functionDataTypesParams");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/data_types'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(functionDataTypesParams, "FunctionDataTypesParams", ""),
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
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param functionDataTypesParams 
     */
    public async generateFunctionDataTypesForFunctions(functionDataTypesParams: FunctionDataTypesParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionDataTypesParams' is not null or undefined
        if (functionDataTypesParams === null || functionDataTypesParams === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "generateFunctionDataTypesForFunctions", "functionDataTypesParams");
        }


        // Path Params
        const localVarPath = '/v2/functions/data_types';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(functionDataTypesParams, "FunctionDataTypesParams", ""),
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
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param analysisId 
     * @param functionId 
     */
    public async getFunctionDataTypes(analysisId: number, functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "getFunctionDataTypes", "analysisId");
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "getFunctionDataTypes", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/{function_id}/data_types'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)))
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param analysisId 
     * @param functionIds 
     */
    public async listFunctionDataTypesForAnalysis(analysisId: number, functionIds?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsDataTypesApi", "listFunctionDataTypesForAnalysis", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/data_types'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (functionIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(functionIds, "Array<number>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("function_ids", serializedParam);
            }
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
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param functionIds 
     */
    public async listFunctionDataTypesForFunctions(functionIds?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v2/functions/data_types';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (functionIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(functionIds, "Array<number>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("function_ids", serializedParam);
            }
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

export class FunctionsDataTypesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchUpdateFunctionDataTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchUpdateFunctionDataTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchUpdateDataTypesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchUpdateDataTypesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchUpdateDataTypesOutputBody", ""
            ) as BatchUpdateDataTypesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIError", ""
            ) as APIError;
            throw new ApiException<APIError>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: BatchUpdateDataTypesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchUpdateDataTypesOutputBody", ""
            ) as BatchUpdateDataTypesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateFunctionDataTypesForAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateFunctionDataTypesForAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseGenerateFunctionDataTypes >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BaseResponseGenerateFunctionDataTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseGenerateFunctionDataTypes", ""
            ) as BaseResponseGenerateFunctionDataTypes;
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
            const body: BaseResponseGenerateFunctionDataTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseGenerateFunctionDataTypes", ""
            ) as BaseResponseGenerateFunctionDataTypes;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateFunctionDataTypesForFunctions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateFunctionDataTypesForFunctionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseGenerationStatusList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BaseResponseGenerationStatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseGenerationStatusList", ""
            ) as BaseResponseGenerationStatusList;
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
            const body: BaseResponseGenerationStatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseGenerationStatusList", ""
            ) as BaseResponseGenerationStatusList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionDataTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionDataTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionDataTypes >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionDataTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypes", ""
            ) as BaseResponseFunctionDataTypes;
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
            const body: BaseResponseFunctionDataTypes = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypes", ""
            ) as BaseResponseFunctionDataTypes;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFunctionDataTypesForAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFunctionDataTypesForAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionDataTypesList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionDataTypesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypesList", ""
            ) as BaseResponseFunctionDataTypesList;
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
            const body: BaseResponseFunctionDataTypesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypesList", ""
            ) as BaseResponseFunctionDataTypesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFunctionDataTypesForFunctions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFunctionDataTypesForFunctionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionDataTypesList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionDataTypesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypesList", ""
            ) as BaseResponseFunctionDataTypesList;
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
            const body: BaseResponseFunctionDataTypesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionDataTypesList", ""
            ) as BaseResponseFunctionDataTypesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
