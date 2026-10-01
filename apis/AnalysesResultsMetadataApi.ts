// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { APIError } from '../models/APIError';
import { AnalysisCapabilitiesOutputBody } from '../models/AnalysisCapabilitiesOutputBody';
import { AnalysisTagsOutputBody } from '../models/AnalysisTagsOutputBody';
import { AnalysisXrefOutputBody } from '../models/AnalysisXrefOutputBody';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAnalysisFunctions } from '../models/BaseResponseAnalysisFunctions';
import { BaseResponseAnalysisFunctionsList } from '../models/BaseResponseAnalysisFunctionsList';
import { BaseResponseAnalysisTags } from '../models/BaseResponseAnalysisTags';
import { BaseResponseCapabilities } from '../models/BaseResponseCapabilities';

/**
 * no description
 */
export class AnalysesResultsMetadataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @deprecated
     *
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param analysisId 
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public async getAnalysisFunctionsPaginated(analysisId: number, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "getAnalysisFunctionsPaginated", "analysisId");
        }




        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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
     * Gets the capabilities from the analysis
     * @param analysisId 
     */
    public async getCapabilities(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "getCapabilities", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/capabilities'
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
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param analysisId 
     * @param searchTerm 
     * @param minVAddr 
     * @param maxVAddr 
     * @param includeEmbeddings 
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public async getFunctionsList(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, includeEmbeddings?: boolean, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "getFunctionsList", "analysisId");
        }








        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/list'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (searchTerm !== undefined) {
            requestContext.setQueryParam("search_term", ObjectSerializer.serialize(searchTerm, "string", ""));
        }

        // Query Params
        if (minVAddr !== undefined) {
            requestContext.setQueryParam("min_v_addr", ObjectSerializer.serialize(minVAddr, "number", ""));
        }

        // Query Params
        if (maxVAddr !== undefined) {
            requestContext.setQueryParam("max_v_addr", ObjectSerializer.serialize(maxVAddr, "number", ""));
        }

        // Query Params
        if (includeEmbeddings !== undefined) {
            requestContext.setQueryParam("include_embeddings", ObjectSerializer.serialize(includeEmbeddings, "boolean", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }


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
     * Get function tags with maliciousness score
     * @param analysisId 
     */
    public async getTags(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "getTags", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/tags'
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
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param analysisId Analysis ID
     * @param vaddr Virtual address to match against xrefs
     */
    public async v3GetAnalysisXref(analysisId: number, vaddr: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "v3GetAnalysisXref", "analysisId");
        }


        // verify required parameter 'vaddr' is not null or undefined
        if (vaddr === null || vaddr === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "v3GetAnalysisXref", "vaddr");
        }


        // Path Params
        const localVarPath = '/v3/analyses/{analysis_id}/xrefs/{vaddr}'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)))
            .replace('{' + 'vaddr' + '}', encodeURIComponent(String(vaddr)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param analysisId Analysis ID
     */
    public async v3ListAnalysisCapabilities(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "v3ListAnalysisCapabilities", "analysisId");
        }


        // Path Params
        const localVarPath = '/v3/analyses/{analysis_id}/capabilities'
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
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param analysisId Analysis ID
     */
    public async v3ListAnalysisTags(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesResultsMetadataApi", "v3ListAnalysisTags", "analysisId");
        }


        // Path Params
        const localVarPath = '/v3/analyses/{analysis_id}/tags'
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

export class AnalysesResultsMetadataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisFunctionsPaginated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisFunctionsPaginatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisFunctionsList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisFunctionsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctionsList", ""
            ) as BaseResponseAnalysisFunctionsList;
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
            const body: BaseResponseAnalysisFunctionsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctionsList", ""
            ) as BaseResponseAnalysisFunctionsList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCapabilitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCapabilities >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCapabilities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCapabilities", ""
            ) as BaseResponseCapabilities;
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
            const body: BaseResponseCapabilities = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCapabilities", ""
            ) as BaseResponseCapabilities;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisFunctions >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisFunctions = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctions", ""
            ) as BaseResponseAnalysisFunctions;
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
            const body: BaseResponseAnalysisFunctions = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctions", ""
            ) as BaseResponseAnalysisFunctions;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisTags >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisTags", ""
            ) as BaseResponseAnalysisTags;
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
            const body: BaseResponseAnalysisTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisTags", ""
            ) as BaseResponseAnalysisTags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GetAnalysisXref
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GetAnalysisXrefWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisXrefOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisXrefOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisXrefOutputBody", ""
            ) as AnalysisXrefOutputBody;
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
            const body: AnalysisXrefOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisXrefOutputBody", ""
            ) as AnalysisXrefOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListAnalysisCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListAnalysisCapabilitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisCapabilitiesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisCapabilitiesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisCapabilitiesOutputBody", ""
            ) as AnalysisCapabilitiesOutputBody;
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
            const body: AnalysisCapabilitiesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisCapabilitiesOutputBody", ""
            ) as AnalysisCapabilitiesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListAnalysisTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListAnalysisTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisTagsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisTagsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisTagsOutputBody", ""
            ) as AnalysisTagsOutputBody;
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
            const body: AnalysisTagsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisTagsOutputBody", ""
            ) as AnalysisTagsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
