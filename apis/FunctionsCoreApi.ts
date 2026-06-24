// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { APIError } from '../models/APIError';
import { AddCalleeInputBody } from '../models/AddCalleeInputBody';
import { AddUserStringToFunctionInputBody } from '../models/AddUserStringToFunctionInputBody';
import { AiUnstripRequest } from '../models/AiUnstripRequest';
import { AnalysisFunctionMatchingRequest } from '../models/AnalysisFunctionMatchingRequest';
import { AutoUnstripRequest } from '../models/AutoUnstripRequest';
import { AutoUnstripResponse } from '../models/AutoUnstripResponse';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAnalysisStringsResponse } from '../models/BaseResponseAnalysisStringsResponse';
import { BaseResponseAnalysisStringsStatusResponse } from '../models/BaseResponseAnalysisStringsStatusResponse';
import { BaseResponseCalleesCallerFunctionsResponse } from '../models/BaseResponseCalleesCallerFunctionsResponse';
import { BaseResponseFunctionBlocksResponse } from '../models/BaseResponseFunctionBlocksResponse';
import { BaseResponseFunctionCapabilityResponse } from '../models/BaseResponseFunctionCapabilityResponse';
import { BaseResponseFunctionStringsResponse } from '../models/BaseResponseFunctionStringsResponse';
import { BaseResponseFunctionsDetailResponse } from '../models/BaseResponseFunctionsDetailResponse';
import { BaseResponseListCalleesCallerFunctionsResponse } from '../models/BaseResponseListCalleesCallerFunctionsResponse';
import { CallEdgesOutputBody } from '../models/CallEdgesOutputBody';
import { CapabilitiesOutputBody } from '../models/CapabilitiesOutputBody';
import { DisassemblyOutputBody } from '../models/DisassemblyOutputBody';
import { FunctionDetailsOutputBody } from '../models/FunctionDetailsOutputBody';
import { FunctionMatchingRequest } from '../models/FunctionMatchingRequest';
import { FunctionMatchingResponse } from '../models/FunctionMatchingResponse';
import { GetMatchesOutputBody } from '../models/GetMatchesOutputBody';
import { GetMatchesStatusOutputBody } from '../models/GetMatchesStatusOutputBody';
import { ListAnalysisFunctionsOutputBody } from '../models/ListAnalysisFunctionsOutputBody';
import { ListFunctionStringsOutputBody } from '../models/ListFunctionStringsOutputBody';
import { StartMatchingForFunctionsInputBody } from '../models/StartMatchingForFunctionsInputBody';
import { StartMatchingOutputBody } from '../models/StartMatchingOutputBody';

/**
 * no description
 */
export class FunctionsCoreApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param functionId Function ID
     * @param addCalleeInputBody 
     */
    public async addFunctionCallee(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "addFunctionCallee", "functionId");
        }


        // verify required parameter 'addCalleeInputBody' is not null or undefined
        if (addCalleeInputBody === null || addCalleeInputBody === undefined) {
            throw new RequiredError("FunctionsCoreApi", "addFunctionCallee", "addCalleeInputBody");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}/callees'
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
            ObjectSerializer.serialize(addCalleeInputBody, "AddCalleeInputBody", ""),
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
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param functionId Function ID
     * @param addUserStringToFunctionInputBody 
     */
    public async addUserStringToFunction(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "addUserStringToFunction", "functionId");
        }


        // verify required parameter 'addUserStringToFunctionInputBody' is not null or undefined
        if (addUserStringToFunctionInputBody === null || addUserStringToFunctionInputBody === undefined) {
            throw new RequiredError("FunctionsCoreApi", "addUserStringToFunction", "addUserStringToFunctionInputBody");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}/user-provided-strings'
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
            ObjectSerializer.serialize(addUserStringToFunctionInputBody, "AddUserStringToFunctionInputBody", ""),
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
     * @deprecated
     *
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId 
     * @param aiUnstripRequest 
     */
    public async aiUnstrip(analysisId: number, aiUnstripRequest: AiUnstripRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "aiUnstrip", "analysisId");
        }


        // verify required parameter 'aiUnstripRequest' is not null or undefined
        if (aiUnstripRequest === null || aiUnstripRequest === undefined) {
            throw new RequiredError("FunctionsCoreApi", "aiUnstrip", "aiUnstripRequest");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/ai-unstrip'
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
            ObjectSerializer.serialize(aiUnstripRequest, "AiUnstripRequest", ""),
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
     * @deprecated
     *
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param analysisId 
     * @param analysisFunctionMatchingRequest 
     */
    public async analysisFunctionMatching(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "analysisFunctionMatching", "analysisId");
        }


        // verify required parameter 'analysisFunctionMatchingRequest' is not null or undefined
        if (analysisFunctionMatchingRequest === null || analysisFunctionMatchingRequest === undefined) {
            throw new RequiredError("FunctionsCoreApi", "analysisFunctionMatching", "analysisFunctionMatchingRequest");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/matches'
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
            ObjectSerializer.serialize(analysisFunctionMatchingRequest, "AnalysisFunctionMatchingRequest", ""),
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
     * @deprecated
     *
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId 
     * @param autoUnstripRequest 
     */
    public async autoUnstrip(analysisId: number, autoUnstripRequest: AutoUnstripRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "autoUnstrip", "analysisId");
        }


        // verify required parameter 'autoUnstripRequest' is not null or undefined
        if (autoUnstripRequest === null || autoUnstripRequest === undefined) {
            throw new RequiredError("FunctionsCoreApi", "autoUnstrip", "autoUnstripRequest");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/auto-unstrip'
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
            ObjectSerializer.serialize(autoUnstripRequest, "AutoUnstripRequest", ""),
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
     * @deprecated
     *
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest 
     */
    public async batchFunctionMatching(functionMatchingRequest: FunctionMatchingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionMatchingRequest' is not null or undefined
        if (functionMatchingRequest === null || functionMatchingRequest === undefined) {
            throw new RequiredError("FunctionsCoreApi", "batchFunctionMatching", "functionMatchingRequest");
        }


        // Path Params
        const localVarPath = '/v2/functions/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(functionMatchingRequest, "FunctionMatchingRequest", ""),
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
     * @deprecated
     *
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param analysisId 
     */
    public async cancelAiUnstrip(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "cancelAiUnstrip", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/ai-unstrip/cancel'
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
     * @deprecated
     *
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param analysisId 
     */
    public async cancelAutoUnstrip(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "cancelAutoUnstrip", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/unstrip/cancel'
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
     * @deprecated
     *
     * Get string information found in the analysis
     * Get string information found in the Analysis
     * @param analysisId 
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     * @param search Search is applied to string value
     * @param functionSearch Search is applied to function names
     * @param orderBy Order by field
     * @param sortOrder Sort order for the results
     */
    public async getAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'length' | 'value', sortOrder?: 'ASC' | 'DESC', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getAnalysisStrings", "analysisId");
        }








        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/strings'
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

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (functionSearch !== undefined) {
            requestContext.setQueryParam("function_search", ObjectSerializer.serialize(functionSearch, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'length' | 'value'", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "'ASC' | 'DESC'", ""));
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
     * @deprecated
     *
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param analysisId 
     */
    public async getAnalysisStringsStatus(analysisId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getAnalysisStringsStatus", "analysisId");
        }


        // Path Params
        const localVarPath = '/v2/analyses/{analysis_id}/functions/strings/status'
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
     * @deprecated
     *
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param functionId 
     */
    public async getFunctionBlocks(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionBlocks", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/blocks'
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
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public async getFunctionBlocks_1(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionBlocks_1", "functionId");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}/blocks'
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
     * @deprecated
     *
     * Get list of functions that call or are called by the specified function
     * @param functionId 
     */
    public async getFunctionCalleesCallers(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionCalleesCallers", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/callees_callers'
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
     * @deprecated
     *
     * Get list of functions that call or are called for a list of functions
     * @param functionIds 
     */
    public async getFunctionCalleesCallersBulk(functionIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionIds' is not null or undefined
        if (functionIds === null || functionIds === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionCalleesCallersBulk", "functionIds");
        }


        // Path Params
        const localVarPath = '/v2/functions/callees_callers';

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
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public async getFunctionCalleesCallers_2(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionCalleesCallers_2", "functionId");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}/callees-callers'
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
     * @deprecated
     *
     * Retrieve a functions capabilities
     * @param functionId 
     */
    public async getFunctionCapabilities(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionCapabilities", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}/capabilities'
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
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public async getFunctionCapabilities_3(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionCapabilities_3", "functionId");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}/capabilities'
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
     * @deprecated
     *
     * Get function details
     * @param functionId 
     */
    public async getFunctionDetails(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionDetails", "functionId");
        }


        // Path Params
        const localVarPath = '/v2/functions/{function_id}'
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
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public async getFunctionDetails_4(functionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionDetails_4", "functionId");
        }


        // Path Params
        const localVarPath = '/v3/functions/{function_id}'
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
     * @deprecated
     *
     * Get string information found in the function
     * Get string information found in the function
     * @param functionId 
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     * @param search Search is applied to string value
     */
    public async getFunctionStrings(functionId: number, page?: number, pageSize?: number, search?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionStrings", "functionId");
        }





        // Path Params
        const localVarPath = '/v2/functions/{function_id}/strings'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

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

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
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
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param page Page number (1-indexed).
     * @param pageSize Number of results per page.
     * @param search Filter by string value (case-insensitive substring match).
     */
    public async getFunctionStrings_5(functionId: number, page?: number, pageSize?: number, search?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionStrings_5", "functionId");
        }





        // Path Params
        const localVarPath = '/v3/functions/{function_id}/strings'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(functionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
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
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param functionIds Function IDs to fetch edges for.
     */
    public async getFunctionsCalleesCallers(functionIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionIds' is not null or undefined
        if (functionIds === null || functionIds === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionsCalleesCallers", "functionIds");
        }


        // Path Params
        const localVarPath = '/v3/functions/callees-callers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (functionIds !== undefined) {
            requestContext.setQueryParam("function_ids", ObjectSerializer.serialize(functionIds, "Array<number>", "int64"));
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
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public async getFunctionsMatches(functionIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionIds' is not null or undefined
        if (functionIds === null || functionIds === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionsMatches", "functionIds");
        }


        // Path Params
        const localVarPath = '/v3/functions/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (functionIds !== undefined) {
            requestContext.setQueryParam("function_ids", ObjectSerializer.serialize(functionIds, "Array<number>", "int64"));
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
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public async getFunctionsMatchingStatus(functionIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'functionIds' is not null or undefined
        if (functionIds === null || functionIds === undefined) {
            throw new RequiredError("FunctionsCoreApi", "getFunctionsMatchingStatus", "functionIds");
        }


        // Path Params
        const localVarPath = '/v3/functions/matches/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (functionIds !== undefined) {
            requestContext.setQueryParam("function_ids", ObjectSerializer.serialize(functionIds, "Array<number>", "int64"));
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
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param analysisId Analysis ID
     * @param offset Pagination offset. Defaults to 0.
     * @param limit Page size. Defaults to 100.
     */
    public async listAnalysisFunctions(analysisId: number, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'analysisId' is not null or undefined
        if (analysisId === null || analysisId === undefined) {
            throw new RequiredError("FunctionsCoreApi", "listAnalysisFunctions", "analysisId");
        }




        // Path Params
        const localVarPath = '/v3/analyses/{analysis_id}/functions'
            .replace('{' + 'analysis_id' + '}', encodeURIComponent(String(analysisId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
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
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param startMatchingForFunctionsInputBody 
     */
    public async startFunctionsMatching(startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'startMatchingForFunctionsInputBody' is not null or undefined
        if (startMatchingForFunctionsInputBody === null || startMatchingForFunctionsInputBody === undefined) {
            throw new RequiredError("FunctionsCoreApi", "startFunctionsMatching", "startMatchingForFunctionsInputBody");
        }


        // Path Params
        const localVarPath = '/v3/functions/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startMatchingForFunctionsInputBody, "StartMatchingForFunctionsInputBody", ""),
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

export class FunctionsCoreApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addFunctionCallee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addFunctionCalleeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: any; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
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
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserStringToFunction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addUserStringToFunctionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: any; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
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
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aiUnstrip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aiUnstripWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutoUnstripResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
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
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analysisFunctionMatching
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analysisFunctionMatchingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FunctionMatchingResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FunctionMatchingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionMatchingResponse", ""
            ) as FunctionMatchingResponse;
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
            const body: FunctionMatchingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionMatchingResponse", ""
            ) as FunctionMatchingResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to autoUnstrip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async autoUnstripWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutoUnstripResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
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
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchFunctionMatching
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchFunctionMatchingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FunctionMatchingResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FunctionMatchingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionMatchingResponse", ""
            ) as FunctionMatchingResponse;
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
            const body: FunctionMatchingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionMatchingResponse", ""
            ) as FunctionMatchingResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelAiUnstrip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelAiUnstripWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutoUnstripResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
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
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelAutoUnstrip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelAutoUnstripWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutoUnstripResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
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
            const body: AutoUnstripResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoUnstripResponse", ""
            ) as AutoUnstripResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisStrings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisStringsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisStringsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisStringsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisStringsResponse", ""
            ) as BaseResponseAnalysisStringsResponse;
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
            const body: BaseResponseAnalysisStringsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisStringsResponse", ""
            ) as BaseResponseAnalysisStringsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAnalysisStringsStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAnalysisStringsStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseAnalysisStringsStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseAnalysisStringsStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisStringsStatusResponse", ""
            ) as BaseResponseAnalysisStringsStatusResponse;
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
            const body: BaseResponseAnalysisStringsStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseAnalysisStringsStatusResponse", ""
            ) as BaseResponseAnalysisStringsStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionBlocks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionBlocksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionBlocksResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionBlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionBlocksResponse", ""
            ) as BaseResponseFunctionBlocksResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseFunctionBlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionBlocksResponse", ""
            ) as BaseResponseFunctionBlocksResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionBlocks_1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionBlocks_1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<DisassemblyOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisassemblyOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisassemblyOutputBody", ""
            ) as DisassemblyOutputBody;
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
            const body: DisassemblyOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisassemblyOutputBody", ""
            ) as DisassemblyOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionCalleesCallers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionCalleesCallersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseCalleesCallerFunctionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseCalleesCallerFunctionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCalleesCallerFunctionsResponse", ""
            ) as BaseResponseCalleesCallerFunctionsResponse;
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
            const body: BaseResponseCalleesCallerFunctionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseCalleesCallerFunctionsResponse", ""
            ) as BaseResponseCalleesCallerFunctionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionCalleesCallersBulk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionCalleesCallersBulkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseListCalleesCallerFunctionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseListCalleesCallerFunctionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListCalleesCallerFunctionsResponse", ""
            ) as BaseResponseListCalleesCallerFunctionsResponse;
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
            const body: BaseResponseListCalleesCallerFunctionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseListCalleesCallerFunctionsResponse", ""
            ) as BaseResponseListCalleesCallerFunctionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionCalleesCallers_2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionCalleesCallers_2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CallEdgesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallEdgesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallEdgesOutputBody", ""
            ) as CallEdgesOutputBody;
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
            const body: CallEdgesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallEdgesOutputBody", ""
            ) as CallEdgesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionCapabilitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionCapabilityResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionCapabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionCapabilityResponse", ""
            ) as BaseResponseFunctionCapabilityResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseResponseFunctionCapabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionCapabilityResponse", ""
            ) as BaseResponseFunctionCapabilityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionCapabilities_3
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionCapabilities_3WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CapabilitiesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CapabilitiesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CapabilitiesOutputBody", ""
            ) as CapabilitiesOutputBody;
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
            const body: CapabilitiesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CapabilitiesOutputBody", ""
            ) as CapabilitiesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionsDetailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionsDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionsDetailResponse", ""
            ) as BaseResponseFunctionsDetailResponse;
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
            const body: BaseResponseFunctionsDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionsDetailResponse", ""
            ) as BaseResponseFunctionsDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionDetails_4
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionDetails_4WithHttpInfo(response: ResponseContext): Promise<HttpInfo<FunctionDetailsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FunctionDetailsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionDetailsOutputBody", ""
            ) as FunctionDetailsOutputBody;
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
            const body: FunctionDetailsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FunctionDetailsOutputBody", ""
            ) as FunctionDetailsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionStrings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionStringsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BaseResponseFunctionStringsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseResponseFunctionStringsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionStringsResponse", ""
            ) as BaseResponseFunctionStringsResponse;
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
            const body: BaseResponseFunctionStringsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseResponseFunctionStringsResponse", ""
            ) as BaseResponseFunctionStringsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionStrings_5
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionStrings_5WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListFunctionStringsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFunctionStringsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunctionStringsOutputBody", ""
            ) as ListFunctionStringsOutputBody;
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
            const body: ListFunctionStringsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunctionStringsOutputBody", ""
            ) as ListFunctionStringsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsCalleesCallers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsCalleesCallersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CallEdgesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallEdgesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallEdgesOutputBody", ""
            ) as CallEdgesOutputBody;
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
            const body: CallEdgesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallEdgesOutputBody", ""
            ) as CallEdgesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsMatches
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsMatchesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMatchesOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMatchesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMatchesOutputBody", ""
            ) as GetMatchesOutputBody;
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
            const body: GetMatchesOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMatchesOutputBody", ""
            ) as GetMatchesOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFunctionsMatchingStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFunctionsMatchingStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMatchesStatusOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMatchesStatusOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMatchesStatusOutputBody", ""
            ) as GetMatchesStatusOutputBody;
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
            const body: GetMatchesStatusOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMatchesStatusOutputBody", ""
            ) as GetMatchesStatusOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAnalysisFunctions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAnalysisFunctionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAnalysisFunctionsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAnalysisFunctionsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnalysisFunctionsOutputBody", ""
            ) as ListAnalysisFunctionsOutputBody;
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
            const body: ListAnalysisFunctionsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnalysisFunctionsOutputBody", ""
            ) as ListAnalysisFunctionsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startFunctionsMatching
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startFunctionsMatchingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StartMatchingOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: StartMatchingOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StartMatchingOutputBody", ""
            ) as StartMatchingOutputBody;
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
            const body: StartMatchingOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StartMatchingOutputBody", ""
            ) as StartMatchingOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
