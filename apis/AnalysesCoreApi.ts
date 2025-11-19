// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AnalysisCreateRequest } from '../models/AnalysisCreateRequest';
import { AnalysisUpdateRequest } from '../models/AnalysisUpdateRequest';
import { AnalysisUpdateTagsRequest } from '../models/AnalysisUpdateTagsRequest';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAnalysisCreateResponse } from '../models/BaseResponseAnalysisCreateResponse';
import { BaseResponseAnalysisDetailResponse } from '../models/BaseResponseAnalysisDetailResponse';
import { BaseResponseAnalysisFunctionMapping } from '../models/BaseResponseAnalysisFunctionMapping';
import { BaseResponseAnalysisUpdateTagsResponse } from '../models/BaseResponseAnalysisUpdateTagsResponse';
import { BaseResponseBasic } from '../models/BaseResponseBasic';
import { BaseResponseCreated } from '../models/BaseResponseCreated';
import { BaseResponseDict } from '../models/BaseResponseDict';
import { BaseResponseLogs } from '../models/BaseResponseLogs';
import { BaseResponseParams } from '../models/BaseResponseParams';
import { BaseResponseRecent } from '../models/BaseResponseRecent';
import { BaseResponseStatus } from '../models/BaseResponseStatus';
import { BaseResponseUploadResponse } from '../models/BaseResponseUploadResponse';
import { DynamicExecutionStatusInput } from '../models/DynamicExecutionStatusInput';
import { ModelName } from '../models/ModelName';
import { Order } from '../models/Order';
import { ReAnalysisForm } from '../models/ReAnalysisForm';
import { StatusInput } from '../models/StatusInput';
import { UploadFileType } from '../models/UploadFileType';
import { Workspace } from '../models/Workspace';

/**
 * no description
 */
export class AnalysesCoreApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Begins an analysis
     * Create Analysis
     * @param analysisCreateRequest 
     * @param apiKey 
     */
    public async createAnalysis(analysisCreateRequest: AnalysisCreateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisCreateRequest' is not null or undefined
        if (analysisCreateRequest === null || analysisCreateRequest === undefined) {
            throw new RequiredError("AnalysesCoreApi", "createAnalysis", "analysisCreateRequest");
        }



        // Path Params
        const localVarPath = '/v2/analyses';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(analysisCreateRequest, "AnalysisCreateRequest", ""),
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
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param analysisId 
     * @param apiKey 
     */
    public async deleteAnalysis(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "deleteAnalysis", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

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
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param analysisId 
     * @param apiKey 
     */
    public async getAnalysisBasicInfo(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "getAnalysisBasicInfo", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/basic'
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
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param analysisId 
     * @param apiKey 
     */
    public async getAnalysisFunctionMap(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "getAnalysisFunctionMap", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/func_maps'
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
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param analysisId 
     * @param apiKey 
     */
    public async getAnalysisLogs(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "getAnalysisLogs", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/logs'
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
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param analysisId 
     * @param apiKey 
     */
    public async getAnalysisParams(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "getAnalysisParams", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/params'
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
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param analysisId 
     * @param apiKey 
     */
    public async getAnalysisStatus(analysisId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "getAnalysisStatus", "analysisId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/status'
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
     * Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit
     * Gets the most recent analyses
     * @param searchTerm 
     * @param workspace The workspace to be viewed
     * @param status The status of the analysis
     * @param modelName Show analysis belonging to the model
     * @param dynamicExecutionStatus Show analysis that have a dynamic execution with the given status
     * @param usernames Show analysis belonging to the user
     * @param sha256Hash 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param order 
     * @param apiKey 
     */
    public async listAnalyses(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatusInput, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/v2/analyses/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (searchTerm !== undefined) {
            requestContext.setQueryParam("search_term", ObjectSerializer.serialize(searchTerm, "string", ""));
        }

        // Query Params
        if (workspace !== undefined) {
            const serializedParams = ObjectSerializer.serialize(workspace, "Array<Workspace>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("workspace", serializedParam);
            }
        }

        // Query Params
        if (status !== undefined) {
            const serializedParams = ObjectSerializer.serialize(status, "Array<StatusInput>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("status", serializedParam);
            }
        }

        // Query Params
        if (modelName !== undefined) {
            const serializedParams = ObjectSerializer.serialize(modelName, "Array<ModelName>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("model_name", serializedParam);
            }
        }

        // Query Params
        if (dynamicExecutionStatus !== undefined) {
            requestContext.setQueryParam("dynamic_execution_status", ObjectSerializer.serialize(dynamicExecutionStatus, "DynamicExecutionStatusInput", ""));
        }

        // Query Params
        if (usernames !== undefined) {
            const serializedParams = ObjectSerializer.serialize(usernames, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("usernames", serializedParam);
            }
        }

        // Query Params
        if (sha256Hash !== undefined) {
            requestContext.setQueryParam("sha256_hash", ObjectSerializer.serialize(sha256Hash, "string", ""));
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
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "AppApiRestV2AnalysesEnumsOrderBy", ""));
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
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param binaryId 
     * @param apiKey 
     */
    public async lookupBinaryId(binaryId: number, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'binaryId' is not null or undefined
        if (binaryId === null || binaryId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "lookupBinaryId", "binaryId");
        }



        // Path Params
        const localVarPath = '/v2/analyses/lookup/{binary_id}'
            .replace('{' + 'binary_id' + '}', encodeURIComponent(String(binaryId)));

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
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param analysisId 
     * @param reAnalysisForm 
     * @param apiKey 
     */
    public async requeueAnalysis(analysisId: number, reAnalysisForm: ReAnalysisForm, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "requeueAnalysis", "analysisId");
        }


        // verify required parameter 'reAnalysisForm' is not null or undefined
        if (reAnalysisForm === null || reAnalysisForm === undefined) {
            throw new RequiredError("AnalysesCoreApi", "requeueAnalysis", "reAnalysisForm");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/requeue'
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
            ObjectSerializer.serialize(reAnalysisForm, "ReAnalysisForm", ""),
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
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param analysisId 
     * @param analysisUpdateRequest 
     * @param apiKey 
     */
    public async updateAnalysis(analysisId: number, analysisUpdateRequest: AnalysisUpdateRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "updateAnalysis", "analysisId");
        }


        // verify required parameter 'analysisUpdateRequest' is not null or undefined
        if (analysisUpdateRequest === null || analysisUpdateRequest === undefined) {
            throw new RequiredError("AnalysesCoreApi", "updateAnalysis", "analysisUpdateRequest");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(analysisUpdateRequest, "AnalysisUpdateRequest", ""),
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
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param analysisId 
     * @param analysisUpdateTagsRequest 
     * @param apiKey 
     */
    public async updateAnalysisTags(analysisId: number, analysisUpdateTagsRequest: AnalysisUpdateTagsRequest, apiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("AnalysesCoreApi", "updateAnalysisTags", "analysisId");
        }


        // verify required parameter 'analysisUpdateTagsRequest' is not null or undefined
        if (analysisUpdateTagsRequest === null || analysisUpdateTagsRequest === undefined) {
            throw new RequiredError("AnalysesCoreApi", "updateAnalysisTags", "analysisUpdateTagsRequest");
        }



        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/tags'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(analysisUpdateTagsRequest, "AnalysisUpdateTagsRequest", ""),
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
     * Upload File
     * @param uploadFileType 
     * @param file 
     * @param packedPassword 
     * @param apiKey 
     * @param forceOverwrite 
     */
    public async uploadFile(uploadFileType: UploadFileType, file: HttpFile, packedPassword?: string, apiKey?: string, forceOverwrite?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uploadFileType' is not null or undefined
        if (uploadFileType === null || uploadFileType === undefined) {
            throw new RequiredError("AnalysesCoreApi", "uploadFile", "uploadFileType");
        }


        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError("AnalysesCoreApi", "uploadFile", "file");
        }





        // Path Params
        const localVarPath = '/v2/upload';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (packedPassword !== undefined) {
            requestContext.setQueryParam("packed_password", ObjectSerializer.serialize(packedPassword, "string", ""));
        }

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

        if (uploadFileType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('upload_file_type', uploadFileType as any);
        }
        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (forceOverwrite !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('force_overwrite', forceOverwrite as any);
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

export class AnalysesCoreApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisCreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BaseResponseAnalysisCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisCreateResponse", ""
            ) as BaseResponseAnalysisCreateResponse;
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseAnalysisCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisCreateResponse", ""
            ) as BaseResponseAnalysisCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseDict >> {
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
     * @params response Response returned by the server for a request to getAnalysisBasicInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisBasicInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseBasic >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseBasic = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBasic", ""
            ) as BaseResponseBasic;
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
            const body: BaseResponseBasic = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseBasic", ""
            ) as BaseResponseBasic;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisFunctionMap
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisFunctionMapWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisFunctionMapping >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisFunctionMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctionMapping", ""
            ) as BaseResponseAnalysisFunctionMapping;
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
            const body: BaseResponseAnalysisFunctionMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisFunctionMapping", ""
            ) as BaseResponseAnalysisFunctionMapping;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseLogs >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseLogs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseLogs", ""
            ) as BaseResponseLogs;
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
            const body: BaseResponseLogs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseLogs", ""
            ) as BaseResponseLogs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisParams
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisParamsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseParams >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseParams = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseParams", ""
            ) as BaseResponseParams;
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
            const body: BaseResponseParams = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseParams", ""
            ) as BaseResponseParams;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStatus", ""
            ) as BaseResponseStatus;
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
            const body: BaseResponseStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseStatus", ""
            ) as BaseResponseStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAnalyses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAnalysesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseRecent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseRecent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseRecent", ""
            ) as BaseResponseRecent;
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
            const body: BaseResponseRecent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseRecent", ""
            ) as BaseResponseRecent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupBinaryId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupBinaryIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
     * @params response Response returned by the server for a request to requeueAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async requeueAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCreated >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BaseResponseCreated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCreated", ""
            ) as BaseResponseCreated;
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponse", ""
            ) as BaseResponse;
            throw new ApiException<BaseResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseCreated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCreated", ""
            ) as BaseResponseCreated;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAnalysisWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisDetailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisDetailResponse", ""
            ) as BaseResponseAnalysisDetailResponse;
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
            const body: BaseResponseAnalysisDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisDetailResponse", ""
            ) as BaseResponseAnalysisDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAnalysisTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAnalysisTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisUpdateTagsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisUpdateTagsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisUpdateTagsResponse", ""
            ) as BaseResponseAnalysisUpdateTagsResponse;
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
            const body: BaseResponseAnalysisUpdateTagsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisUpdateTagsResponse", ""
            ) as BaseResponseAnalysisUpdateTagsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadFileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseUploadResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseUploadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseUploadResponse", ""
            ) as BaseResponseUploadResponse;
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
            const body: BaseResponseUploadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseUploadResponse", ""
            ) as BaseResponseUploadResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
