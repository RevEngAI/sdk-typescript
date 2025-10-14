// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseBlockCommentsGenerationForFunctionResponse } from '../models/BaseResponseBlockCommentsGenerationForFunctionResponse';
import { BaseResponseBlockCommentsOverviewGenerationResponse } from '../models/BaseResponseBlockCommentsOverviewGenerationResponse';
import { Block } from '../models/Block';

/**
 * no description
 */
export class FunctionsBlockCommentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Generate block comments for a specific block in a function
     * @param functionId 
     * @param block 
     */
    public async generateBlockCommentsForBlockInFunction(functionId: number, block: Block, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsBlockCommentsApi", "generateBlockCommentsForBlockInFunction", "functionId");
        }


        // verify required parameter 'block' is not null or undefined
        if (block === null || block === undefined) {
            throw new RequiredError("FunctionsBlockCommentsApi", "generateBlockCommentsForBlockInFunction", "block");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/block-comments/single'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(block, "Block", ""),
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
     * Generate block comments for a function
     * @param functionId 
     */
    public async generateBlockCommentsForFunction(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsBlockCommentsApi", "generateBlockCommentsForFunction", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/block-comments'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

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
     * Generate overview comment for a function
     * @param functionId 
     */
    public async generateOverviewCommentForFunction(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsBlockCommentsApi", "generateOverviewCommentForFunction", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/block-comments/overview'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

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

}

export class FunctionsBlockCommentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateBlockCommentsForBlockInFunction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateBlockCommentsForBlockInFunctionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBlockCommentsGenerationForFunctionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsGenerationForFunctionResponse", ""
            ) as BaseResponseBlockCommentsGenerationForFunctionResponse;
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
            const body: BaseResponseBlockCommentsGenerationForFunctionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsGenerationForFunctionResponse", ""
            ) as BaseResponseBlockCommentsGenerationForFunctionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateBlockCommentsForFunction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateBlockCommentsForFunctionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBlockCommentsGenerationForFunctionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsGenerationForFunctionResponse", ""
            ) as BaseResponseBlockCommentsGenerationForFunctionResponse;
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
            const body: BaseResponseBlockCommentsGenerationForFunctionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsGenerationForFunctionResponse", ""
            ) as BaseResponseBlockCommentsGenerationForFunctionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateOverviewCommentForFunction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateOverviewCommentForFunctionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBlockCommentsOverviewGenerationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBlockCommentsOverviewGenerationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsOverviewGenerationResponse", ""
            ) as BaseResponseBlockCommentsOverviewGenerationResponse;
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
            const body: BaseResponseBlockCommentsOverviewGenerationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBlockCommentsOverviewGenerationResponse", ""
            ) as BaseResponseBlockCommentsOverviewGenerationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
