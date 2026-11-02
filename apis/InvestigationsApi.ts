// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { APIError } from '../models/APIError';
import { BudgetBody } from '../models/BudgetBody';
import { ConversationBody } from '../models/ConversationBody';
import { CreateConversationInputBody } from '../models/CreateConversationInputBody';
import { CreateInvestigationInputBody } from '../models/CreateInvestigationInputBody';
import { GetFindingOutputBody } from '../models/GetFindingOutputBody';
import { GetInvestigationOutputBody } from '../models/GetInvestigationOutputBody';
import { InvestigationBody } from '../models/InvestigationBody';
import { ListAgentRunsOutputBody } from '../models/ListAgentRunsOutputBody';
import { ListConversationsOutputBody } from '../models/ListConversationsOutputBody';
import { ListFindingsOutputBody } from '../models/ListFindingsOutputBody';
import { ListInvestigationsOutputBody } from '../models/ListInvestigationsOutputBody';
import { ListSpendOutputBody } from '../models/ListSpendOutputBody';
import { PatchInvestigationInputBody } from '../models/PatchInvestigationInputBody';
import { SetBudgetInputBody } from '../models/SetBudgetInputBody';

/**
 * no description
 */
export class InvestigationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates an investigation owned by the caller, initially open and empty.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an investigation.
     * @param createInvestigationInputBody 
     */
    public async v3CreateInvestigation(createInvestigationInputBody: CreateInvestigationInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createInvestigationInputBody' is not null or undefined
        if (createInvestigationInputBody === null || createInvestigationInputBody === undefined) {
            throw new RequiredError("InvestigationsApi", "v3CreateInvestigation", "createInvestigationInputBody");
        }


        // Path Params
        const localVarPath = '/v3/investigations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createInvestigationInputBody, "CreateInvestigationInputBody", ""),
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
     * Starts a chat conversation held by the investigation, about the whole investigation or about one of its analyses. Anyone who can see the investigation can start one. Read it, stream it and send messages in it with the /v2/conversations endpoints; only the user who started it can send messages in it. Deleting the investigation deletes its conversations.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Start a conversation in an investigation.
     * @param investigationId 
     * @param createConversationInputBody 
     */
    public async v3CreateInvestigationConversation(investigationId: number, createConversationInputBody: CreateConversationInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3CreateInvestigationConversation", "investigationId");
        }


        // verify required parameter 'createConversationInputBody' is not null or undefined
        if (createConversationInputBody === null || createConversationInputBody === undefined) {
            throw new RequiredError("InvestigationsApi", "v3CreateInvestigationConversation", "createConversationInputBody");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/conversations'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createConversationInputBody, "CreateConversationInputBody", ""),
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
     * Deletes an investigation and its links to analyses. The analyses themselves are not deleted. Only the owner can delete an investigation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an investigation.
     * @param investigationId 
     */
    public async v3DeleteInvestigation(investigationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3DeleteInvestigation", "investigationId");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Gets a single investigation, including the IDs of the analyses in it that the caller may see.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an investigation.
     * @param investigationId 
     */
    public async v3GetInvestigation(investigationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3GetInvestigation", "investigationId");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

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
     * Gets a single finding, including the IDs of the analyses it was derived from that the caller may see.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a finding of an investigation.
     * @param investigationId 
     * @param findingId 
     */
    public async v3GetInvestigationFinding(investigationId: number, findingId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3GetInvestigationFinding", "investigationId");
        }


        // verify required parameter 'findingId' is not null or undefined
        if (findingId === null || findingId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3GetInvestigationFinding", "findingId");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/findings/{finding_id}'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)))
            .replace('{' + 'finding_id' + '}', encodeURIComponent(String(findingId)));

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
     * Lists the runs of agents on the files of the investigations you can see, most recently updated first, each with a summary of its result once it is done. A run on a file held by several investigations is listed once for each. Only files you may see are included. Supports narrowing to one investigation, filtering by the investigations\' owner, status, severity and name, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List agent runs on investigations.
     * @param investigationId Only return runs on the files of this investigation. 0 returns runs across every investigation you can see.
     * @param ownerId Only return runs in investigations owned by one of these user IDs.
     * @param status Only return runs in investigations in one of these statuses.
     * @param severity Only return runs in investigations with one of these severities.
     * @param search Only return runs in investigations whose name contains this text, ignoring case.
     * @param limit 
     * @param offset 
     */
    public async v3ListInvestigationAgentRuns(investigationId?: number, ownerId?: Array<number>, status?: Array<'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'CLOSED'>, severity?: Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>, search?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/v3/investigations/agent-runs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (investigationId !== undefined) {
            requestContext.setQueryParam("investigation_id", ObjectSerializer.serialize(investigationId, "number", "int64"));
        }

        // Query Params
        if (ownerId !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ownerId, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("owner_id", serializedParam);
            }
        }

        // Query Params
        if (status !== undefined) {
            const serializedParams = ObjectSerializer.serialize(status, "Array<'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'CLOSED'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("status", serializedParam);
            }
        }

        // Query Params
        if (severity !== undefined) {
            const serializedParams = ObjectSerializer.serialize(severity, "Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("severity", serializedParam);
            }
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
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
     * Lists the chat conversations held by the investigation, whoever started them, most recently active first. Visible to anyone who can see the investigation. Supports pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the conversations of an investigation.
     * @param investigationId 
     * @param limit 
     * @param offset 
     */
    public async v3ListInvestigationConversations(investigationId: number, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3ListInvestigationConversations", "investigationId");
        }




        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/conversations'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
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
     * Lists what the investigation has found, most severe first and then most recent first. Visible to anyone who can see the investigation. Supports filtering by finding type and severity, and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the findings of an investigation.
     * @param investigationId 
     * @param findingType Only return findings of one of these types.
     * @param severity Only return findings with one of these severities.
     * @param limit 
     * @param offset 
     */
    public async v3ListInvestigationFindings(investigationId: number, findingType?: Array<'IOC' | 'CAPABILITY' | 'VULNERABILITY' | 'CROSS_FILE_FLOW'>, severity?: Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3ListInvestigationFindings", "investigationId");
        }






        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/findings'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (findingType !== undefined) {
            const serializedParams = ObjectSerializer.serialize(findingType, "Array<'IOC' | 'CAPABILITY' | 'VULNERABILITY' | 'CROSS_FILE_FLOW'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("finding_type", serializedParam);
            }
        }

        // Query Params
        if (severity !== undefined) {
            const serializedParams = ObjectSerializer.serialize(severity, "Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("severity", serializedParam);
            }
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
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
     * Lists the credits charged for the investigation\'s conversation turns and the agents run from it, newest first. Visible to anyone who can see the investigation. Supports pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List what an investigation spent.
     * @param investigationId 
     * @param limit 
     * @param offset 
     */
    public async v3ListInvestigationSpend(investigationId: number, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3ListInvestigationSpend", "investigationId");
        }




        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/spend'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
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
     * Lists the investigations the caller owns or that are shared with the caller\'s team, most recently updated first by default. Supports filtering by status, severity, case type and owner, a name search, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List investigations.
     * @param status Only return investigations in one of these statuses.
     * @param severity Only return investigations with one of these severities.
     * @param caseType Only return investigations of one of these case types.
     * @param ownerId Only return investigations owned by one of these user IDs.
     * @param search Only return investigations whose name contains this text, ignoring case.
     * @param orderBy 
     * @param order 
     * @param limit 
     * @param offset 
     */
    public async v3ListInvestigations(status?: Array<'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'CLOSED'>, severity?: Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>, caseType?: Array<'REVERSE_ENGINEERING' | 'MALWARE_ANALYSIS' | 'VULNERABILITY_DISCOVERY'>, ownerId?: Array<number>, search?: string, orderBy?: 'updated' | 'created' | 'name', order?: 'ASC' | 'DESC', limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/v3/investigations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            const serializedParams = ObjectSerializer.serialize(status, "Array<'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'CLOSED'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("status", serializedParam);
            }
        }

        // Query Params
        if (severity !== undefined) {
            const serializedParams = ObjectSerializer.serialize(severity, "Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("severity", serializedParam);
            }
        }

        // Query Params
        if (caseType !== undefined) {
            const serializedParams = ObjectSerializer.serialize(caseType, "Array<'REVERSE_ENGINEERING' | 'MALWARE_ANALYSIS' | 'VULNERABILITY_DISCOVERY'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("case_type", serializedParam);
            }
        }

        // Query Params
        if (ownerId !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ownerId, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("owner_id", serializedParam);
            }
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'updated' | 'created' | 'name'", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ASC' | 'DESC'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int64"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int64"));
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
     * Updates an investigation\'s name, case type, severity, status and/or scope. Omitted fields keep their existing values. Only the owner can update an investigation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an investigation.
     * @param investigationId 
     * @param patchInvestigationInputBody 
     */
    public async v3PatchInvestigation(investigationId: number, patchInvestigationInputBody: PatchInvestigationInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3PatchInvestigation", "investigationId");
        }


        // verify required parameter 'patchInvestigationInputBody' is not null or undefined
        if (patchInvestigationInputBody === null || patchInvestigationInputBody === undefined) {
            throw new RequiredError("InvestigationsApi", "v3PatchInvestigation", "patchInvestigationInputBody");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(patchInvestigationInputBody, "PatchInvestigationInputBody", ""),
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
     * Sets the most credits the investigation may spend on its conversations and the agents run from it, or removes the limit with null. Once the budget is spent, no new message or agent run is started from the investigation; work already under way finishes, so spend can go a little past the budget. Only the owner can set the budget.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Set the budget of an investigation.
     * @param investigationId 
     * @param setBudgetInputBody 
     */
    public async v3SetInvestigationBudget(investigationId: number, setBudgetInputBody: SetBudgetInputBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'investigationId' is not null or undefined
        if (investigationId === null || investigationId === undefined) {
            throw new RequiredError("InvestigationsApi", "v3SetInvestigationBudget", "investigationId");
        }


        // verify required parameter 'setBudgetInputBody' is not null or undefined
        if (setBudgetInputBody === null || setBudgetInputBody === undefined) {
            throw new RequiredError("InvestigationsApi", "v3SetInvestigationBudget", "setBudgetInputBody");
        }


        // Path Params
        const localVarPath = '/v3/investigations/{investigation_id}/budget'
            .replace('{' + 'investigation_id' + '}', encodeURIComponent(String(investigationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(setBudgetInputBody, "SetBudgetInputBody", ""),
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

export class InvestigationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3CreateInvestigation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3CreateInvestigationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InvestigationBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InvestigationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvestigationBody", ""
            ) as InvestigationBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: InvestigationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvestigationBody", ""
            ) as InvestigationBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3CreateInvestigationConversation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3CreateInvestigationConversationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ConversationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversationBody", ""
            ) as ConversationBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ConversationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversationBody", ""
            ) as ConversationBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3DeleteInvestigation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3DeleteInvestigationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GetInvestigation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GetInvestigationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetInvestigationOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetInvestigationOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvestigationOutputBody", ""
            ) as GetInvestigationOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetInvestigationOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvestigationOutputBody", ""
            ) as GetInvestigationOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GetInvestigationFinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GetInvestigationFindingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetFindingOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetFindingOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetFindingOutputBody", ""
            ) as GetFindingOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: GetFindingOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetFindingOutputBody", ""
            ) as GetFindingOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListInvestigationAgentRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListInvestigationAgentRunsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAgentRunsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAgentRunsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAgentRunsOutputBody", ""
            ) as ListAgentRunsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ListAgentRunsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAgentRunsOutputBody", ""
            ) as ListAgentRunsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListInvestigationConversations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListInvestigationConversationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListConversationsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListConversationsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListConversationsOutputBody", ""
            ) as ListConversationsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ListConversationsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListConversationsOutputBody", ""
            ) as ListConversationsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListInvestigationFindings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListInvestigationFindingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListFindingsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFindingsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFindingsOutputBody", ""
            ) as ListFindingsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ListFindingsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFindingsOutputBody", ""
            ) as ListFindingsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListInvestigationSpend
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListInvestigationSpendWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListSpendOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSpendOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSpendOutputBody", ""
            ) as ListSpendOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ListSpendOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSpendOutputBody", ""
            ) as ListSpendOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ListInvestigations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ListInvestigationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListInvestigationsOutputBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListInvestigationsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInvestigationsOutputBody", ""
            ) as ListInvestigationsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ListInvestigationsOutputBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInvestigationsOutputBody", ""
            ) as ListInvestigationsOutputBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PatchInvestigation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PatchInvestigationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InvestigationBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvestigationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvestigationBody", ""
            ) as InvestigationBody;
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
            const body: InvestigationBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvestigationBody", ""
            ) as InvestigationBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3SetInvestigationBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3SetInvestigationBudgetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BudgetBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BudgetBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BudgetBody", ""
            ) as BudgetBody;
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
            const body: BudgetBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BudgetBody", ""
            ) as BudgetBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
