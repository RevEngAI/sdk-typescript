// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseExternalResponse } from '../models/BaseResponseExternalResponse';
import { BaseResponseStr } from '../models/BaseResponseStr';
import { BaseResponseTaskResponse } from '../models/BaseResponseTaskResponse';

/**
 * no description
 */
export class ExternalSourcesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Pulls data from VirusTotal
     * @param analysisId 
     * @param apiKey 
     */
    public async createExternalTaskMb(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "createExternalTaskMb", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/mb'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Pulls data from VirusTotal
     * @param analysisId 
     * @param apiKey 
     */
    public async createExternalTaskVt(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "createExternalTaskVt", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/vt'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Get MalwareBazaar data
     * @param analysisId 
     * @param apiKey 
     */
    public async getMbData(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "getMbData", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/mb'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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
     * Check the status of MalwareBazaar data retrieval
     * @param analysisId 
     * @param apiKey 
     */
    public async getMbTaskStatus(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "getMbTaskStatus", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/mb/status'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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
     * Get VirusTotal data
     * @param analysisId 
     * @param apiKey 
     */
    public async getVtData(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "getVtData", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/vt'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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
     * Check the status of VirusTotal data retrieval
     * @param analysisId 
     * @param apiKey 
     */
    public async getVtTaskStatus(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ExternalSourcesApi", "getVtTaskStatus", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analysis/{analysis_id}/external/vt/status'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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

}

export class ExternalSourcesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createExternalTaskMb
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createExternalTaskMbWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseStr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BaseResponseStr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStr", ""
            ) as BaseResponseStr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Request already queued", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseStr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStr", ""
            ) as BaseResponseStr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createExternalTaskVt
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createExternalTaskVtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseStr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BaseResponseStr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStr", ""
            ) as BaseResponseStr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Invalid request parameters", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Request already queued", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseStr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStr", ""
            ) as BaseResponseStr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMbData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMbDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseExternalResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseExternalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseExternalResponse", ""
            ) as BaseResponseExternalResponse;
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
            throw new ApiException<BaseResponse>(response.httpStatusCode, "No data retrieved from MalwareBazaar for the given analysis_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseExternalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseExternalResponse", ""
            ) as BaseResponseExternalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMbTaskStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMbTaskStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseTaskResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseTaskResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTaskResponse", ""
            ) as BaseResponseTaskResponse;
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
            const body: BaseResponseTaskResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTaskResponse", ""
            ) as BaseResponseTaskResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVtData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVtDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseExternalResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseExternalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseExternalResponse", ""
            ) as BaseResponseExternalResponse;
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
            throw new ApiException<BaseResponse>(response.httpStatusCode, "No data retrieved from VirusTotal for the given analysis_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseExternalResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseExternalResponse", ""
            ) as BaseResponseExternalResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVtTaskStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVtTaskStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseTaskResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseTaskResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTaskResponse", ""
            ) as BaseResponseTaskResponse;
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
            const body: BaseResponseTaskResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseTaskResponse", ""
            ) as BaseResponseTaskResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
