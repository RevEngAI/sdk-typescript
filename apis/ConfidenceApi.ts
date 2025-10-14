// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseBoxPlotConfidence } from '../models/BaseResponseBoxPlotConfidence';
import { BaseResponseListFunctionBoxPlotConfidence } from '../models/BaseResponseListFunctionBoxPlotConfidence';
import { BaseResponseListTagOriginBoxPlotConfidence } from '../models/BaseResponseListTagOriginBoxPlotConfidence';
import { FunctionNameConfidenceBody } from '../models/FunctionNameConfidenceBody';
import { TagConfidenceBody } from '../models/TagConfidenceBody';
import { ThreatScoreFunctionBody } from '../models/ThreatScoreFunctionBody';

/**
 * no description
 */
export class ConfidenceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Accepts a analysis ID and a list of tags, returns the confidence score for each tag in the list
     * Calculate Tag Confidence Score for an Analysis
     * @param analysisId The analysis to calculate the tag scores for
     * @param tagConfidenceBody 
     */
    public async getAnalysisTagScore(analysisId: number, tagConfidenceBody: TagConfidenceBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ConfidenceApi", "getAnalysisTagScore", "analysisId");
        }


        // verify required parameter 'tagConfidenceBody' is not null or undefined
        if (tagConfidenceBody === null || tagConfidenceBody === undefined) {
            throw new RequiredError("ConfidenceApi", "getAnalysisTagScore", "tagConfidenceBody");
        }


        // Path Params
        const localVarPath = '/v2/confidence/analysis/{analysis_id}/tag_score'
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
            ObjectSerializer.serialize(tagConfidenceBody, "TagConfidenceBody", ""),
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
     * Accepts a binary ID and returns the threat score for that binary
     * Calculate Threat Score for Binary
     * @param analysisId The analysis to calculate the threat score for
     */
    public async getAnalysisThreatScore(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("ConfidenceApi", "getAnalysisThreatScore", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/confidence/analysis/{analysis_id}/threat_score'
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
     * Accepts a list of function ids mapped to a function name, for each function we return a confidence score in that being the correct name for each function. Each function must be from the same model, or you may find some functions missing in the return.
     * Calculate function name confidence for a set of Functions
     * @param functionNameConfidenceBody 
     */
    public async getFunctionsNameScore(functionNameConfidenceBody: FunctionNameConfidenceBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionNameConfidenceBody' is not null or undefined
        if (functionNameConfidenceBody === null || functionNameConfidenceBody === undefined) {
            throw new RequiredError("ConfidenceApi", "getFunctionsNameScore", "functionNameConfidenceBody");
        }


        // Path Params
        const localVarPath = '/v2/confidence/functions/name_score';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(functionNameConfidenceBody, "FunctionNameConfidenceBody", ""),
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
     * Accepts a list of function ids and returns the threat score for each function. Each function must be from the same model, or you may find some functions missing in the return.
     * Calculate Threat Score for a set of Functions
     * @param threatScoreFunctionBody 
     */
    public async getFunctionsThreatScore(threatScoreFunctionBody: ThreatScoreFunctionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'threatScoreFunctionBody' is not null or undefined
        if (threatScoreFunctionBody === null || threatScoreFunctionBody === undefined) {
            throw new RequiredError("ConfidenceApi", "getFunctionsThreatScore", "threatScoreFunctionBody");
        }


        // Path Params
        const localVarPath = '/v2/confidence/functions/threat_score';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(threatScoreFunctionBody, "ThreatScoreFunctionBody", ""),
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

export class ConfidenceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisTagScore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisTagScoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseListTagOriginBoxPlotConfidence >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseListTagOriginBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListTagOriginBoxPlotConfidence", ""
            ) as BaseResponseListTagOriginBoxPlotConfidence;
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
            const body: BaseResponseListTagOriginBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListTagOriginBoxPlotConfidence", ""
            ) as BaseResponseListTagOriginBoxPlotConfidence;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisThreatScore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisThreatScoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBoxPlotConfidence >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBoxPlotConfidence", ""
            ) as BaseResponseBoxPlotConfidence;
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
            const body: BaseResponseBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBoxPlotConfidence", ""
            ) as BaseResponseBoxPlotConfidence;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsNameScore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsNameScoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseListFunctionBoxPlotConfidence >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseListFunctionBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListFunctionBoxPlotConfidence", ""
            ) as BaseResponseListFunctionBoxPlotConfidence;
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
            const body: BaseResponseListFunctionBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListFunctionBoxPlotConfidence", ""
            ) as BaseResponseListFunctionBoxPlotConfidence;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsThreatScore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsThreatScoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseListFunctionBoxPlotConfidence >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseListFunctionBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListFunctionBoxPlotConfidence", ""
            ) as BaseResponseListFunctionBoxPlotConfidence;
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
            const body: BaseResponseListFunctionBoxPlotConfidence = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListFunctionBoxPlotConfidence", ""
            ) as BaseResponseListFunctionBoxPlotConfidence;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
