// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BaseResponse } from '../models/BaseResponse';

/**
 * no description
 */
export class FirmwareApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param taskId 
     * @param apiKey 
     */
    public async getBinariesForFirmwareTask(taskId: string, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("FirmwareApi", "getBinariesForFirmwareTask", "taskId");
        }



        // Path Params
        const localVarPath = '/v2/firmware/get-binaries/{task_id}'
            .replace('{' + 'task_id' + '}', encodeURIComponent(String(taskId)));

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
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param file 
     * @param apiKey 
     * @param password 
     */
    public async uploadFirmware(file: HttpFile, apiKey?: string, password?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError("FirmwareApi", "uploadFirmware", "file");
        }




        // Path Params
        const localVarPath = '/v2/firmware';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (password !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('password', password as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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

export class FirmwareApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBinariesForFirmwareTask
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBinariesForFirmwareTaskWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadFirmware
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadFirmwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
