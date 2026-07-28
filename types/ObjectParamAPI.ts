import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AIDecompFunctionMapping } from '../models/AIDecompFunctionMapping';
import { AIDecompInverseFunctionMapItem } from '../models/AIDecompInverseFunctionMapItem';
import { AIDecompInverseStringMapItem } from '../models/AIDecompInverseStringMapItem';
import { APIError } from '../models/APIError';
import { AddCalleeInputBody } from '../models/AddCalleeInputBody';
import { AddIssuerDomainInputBody } from '../models/AddIssuerDomainInputBody';
import { AddOwnerInputBody } from '../models/AddOwnerInputBody';
import { AddTeamMemberInputBody } from '../models/AddTeamMemberInputBody';
import { AddUserStringInputBody } from '../models/AddUserStringInputBody';
import { AddUserStringToFunctionInputBody } from '../models/AddUserStringToFunctionInputBody';
import { AnalysisBasicInfoOutputBody } from '../models/AnalysisBasicInfoOutputBody';
import { AnalysisFunctionEntry } from '../models/AnalysisFunctionEntry';
import { AnalysisLogMessage } from '../models/AnalysisLogMessage';
import { AnalysisLogs } from '../models/AnalysisLogs';
import { AnalysisRecordBody } from '../models/AnalysisRecordBody';
import { AnalysisReport } from '../models/AnalysisReport';
import { AnalysisStringFunction } from '../models/AnalysisStringFunction';
import { AnalysisStringItem } from '../models/AnalysisStringItem';
import { AnalysisTagBody } from '../models/AnalysisTagBody';
import { ApiCall } from '../models/ApiCall';
import { ArchiveContentEntry } from '../models/ArchiveContentEntry';
import { Artifact } from '../models/Artifact';
import { AttemptFailedEvent } from '../models/AttemptFailedEvent';
import { AttemptStartedEvent } from '../models/AttemptStartedEvent';
import { AutoUnstripStatusOutputBody } from '../models/AutoUnstripStatusOutputBody';
import { BatchBinaryMatchResult } from '../models/BatchBinaryMatchResult';
import { BatchMatchingOutputBody } from '../models/BatchMatchingOutputBody';
import { BatchRenameInputBody } from '../models/BatchRenameInputBody';
import { BatchRenameItem } from '../models/BatchRenameItem';
import { BatchRenameOutputBody } from '../models/BatchRenameOutputBody';
import { BatchUpdateDataTypesInputBody } from '../models/BatchUpdateDataTypesInputBody';
import { BatchUpdateDataTypesItem } from '../models/BatchUpdateDataTypesItem';
import { BatchUpdateDataTypesOutputBody } from '../models/BatchUpdateDataTypesOutputBody';
import { BatchUpdateDataTypesResult } from '../models/BatchUpdateDataTypesResult';
import { Binary } from '../models/Binary';
import { BulkCreateUserResult } from '../models/BulkCreateUserResult';
import { BulkCreateUsersOutputBody } from '../models/BulkCreateUsersOutputBody';
import { CallEdge } from '../models/CallEdge';
import { CallEdgesOutputBody } from '../models/CallEdgesOutputBody';
import { CanonicalName } from '../models/CanonicalName';
import { CanonicalizeNamesInputBody } from '../models/CanonicalizeNamesInputBody';
import { CanonicalizeNamesOutputBody } from '../models/CanonicalizeNamesOutputBody';
import { CapabilitiesOutputBody } from '../models/CapabilitiesOutputBody';
import { CapabilityEntry } from '../models/CapabilityEntry';
import { CollectionListItemBody } from '../models/CollectionListItemBody';
import { CommentsData } from '../models/CommentsData';
import { ConfirmToolInputBody } from '../models/ConfirmToolInputBody';
import { Connection } from '../models/Connection';
import { ConsoleOutputEntry } from '../models/ConsoleOutputEntry';
import { Conversation } from '../models/Conversation';
import { ConversationContext } from '../models/ConversationContext';
import { ConversationWithEvents } from '../models/ConversationWithEvents';
import { CreateAIDecompOutputBody } from '../models/CreateAIDecompOutputBody';
import { CreateCheckoutSessionInputBody } from '../models/CreateCheckoutSessionInputBody';
import { CreateCollectionInputBody } from '../models/CreateCollectionInputBody';
import { CreateCollectionOutputBody } from '../models/CreateCollectionOutputBody';
import { CreateConversationRequest } from '../models/CreateConversationRequest';
import { CreateGroupInputBody } from '../models/CreateGroupInputBody';
import { CreateIdentityInputBody } from '../models/CreateIdentityInputBody';
import { CreateIssuerInputBody } from '../models/CreateIssuerInputBody';
import { CreateOrganisationInputBody } from '../models/CreateOrganisationInputBody';
import { CreatePortalSessionInputBody } from '../models/CreatePortalSessionInputBody';
import { CreateTeamInputBody } from '../models/CreateTeamInputBody';
import { CreateUserInputBody } from '../models/CreateUserInputBody';
import { DataTypesEntry } from '../models/DataTypesEntry';
import { DecompFailedEvent } from '../models/DecompFailedEvent';
import { DecompFinishedEvent } from '../models/DecompFinishedEvent';
import { DecompilationData } from '../models/DecompilationData';
import { DisassemblyOutputBody } from '../models/DisassemblyOutputBody';
import { DnsQuery } from '../models/DnsQuery';
import { DrakvufFileMetadata } from '../models/DrakvufFileMetadata';
import { DynamicExecutionStatusResponse } from '../models/DynamicExecutionStatusResponse';
import { ErrorBody } from '../models/ErrorBody';
import { Event } from '../models/Event';
import { EventAttemptFailed } from '../models/EventAttemptFailed';
import { EventAttemptStarted } from '../models/EventAttemptStarted';
import { EventCONTEXTCOMPACTED } from '../models/EventCONTEXTCOMPACTED';
import { EventDecompFailed } from '../models/EventDecompFailed';
import { EventDecompFinished } from '../models/EventDecompFinished';
import { EventProse } from '../models/EventProse';
import { EventRUNCANCELLED } from '../models/EventRUNCANCELLED';
import { EventRUNERROR } from '../models/EventRUNERROR';
import { EventRUNFINISHED } from '../models/EventRUNFINISHED';
import { EventRUNSTARTED } from '../models/EventRUNSTARTED';
import { EventRenameApplied } from '../models/EventRenameApplied';
import { EventSTEPFINISHED } from '../models/EventSTEPFINISHED';
import { EventSTEPSTARTED } from '../models/EventSTEPSTARTED';
import { EventSourceDelta } from '../models/EventSourceDelta';
import { EventSourceReset } from '../models/EventSourceReset';
import { EventTEXTMESSAGECONTENT } from '../models/EventTEXTMESSAGECONTENT';
import { EventTEXTMESSAGEEND } from '../models/EventTEXTMESSAGEEND';
import { EventTEXTMESSAGESTART } from '../models/EventTEXTMESSAGESTART';
import { EventTITLEUPDATED } from '../models/EventTITLEUPDATED';
import { EventTOOLCALLARGSDELTA } from '../models/EventTOOLCALLARGSDELTA';
import { EventTOOLCALLEND } from '../models/EventTOOLCALLEND';
import { EventTOOLCALLPROGRESS } from '../models/EventTOOLCALLPROGRESS';
import { EventTOOLCALLRESULT } from '../models/EventTOOLCALLRESULT';
import { EventTOOLCALLSTART } from '../models/EventTOOLCALLSTART';
import { EventTOOLCONFIRMATIONREQUIRED } from '../models/EventTOOLCONFIRMATIONREQUIRED';
import { EventWarning } from '../models/EventWarning';
import { Example } from '../models/Example';
import { ExtractedURL } from '../models/ExtractedURL';
import { FileActivityEntry } from '../models/FileActivityEntry';
import { FormFile } from '../models/FormFile';
import { FunctionArgument } from '../models/FunctionArgument';
import { FunctionCallEdges } from '../models/FunctionCallEdges';
import { FunctionDependency } from '../models/FunctionDependency';
import { FunctionDetailsOutputBody } from '../models/FunctionDetailsOutputBody';
import { FunctionHeader } from '../models/FunctionHeader';
import { FunctionInfo } from '../models/FunctionInfo';
import { FunctionMatch } from '../models/FunctionMatch';
import { FunctionStackVariable } from '../models/FunctionStackVariable';
import { FunctionStringItem } from '../models/FunctionStringItem';
import { FunctionType } from '../models/FunctionType';
import { GeneratePDFOutputBody } from '../models/GeneratePDFOutputBody';
import { GetAdditionalDetailsOutputBody } from '../models/GetAdditionalDetailsOutputBody';
import { GetAdditionalDetailsStatusOutputBody } from '../models/GetAdditionalDetailsStatusOutputBody';
import { GetAnalysisStringsStatusOutputBody } from '../models/GetAnalysisStringsStatusOutputBody';
import { GetCollectionOutputBody } from '../models/GetCollectionOutputBody';
import { GetMatchesOutputBody } from '../models/GetMatchesOutputBody';
import { GetMatchesStatusOutputBody } from '../models/GetMatchesStatusOutputBody';
import { GetProductsOutputBody } from '../models/GetProductsOutputBody';
import { GetSubscriptionOutputBody } from '../models/GetSubscriptionOutputBody';
import { HistoryEntry } from '../models/HistoryEntry';
import { HttpRequest } from '../models/HttpRequest';
import { ImportedFunctionCallerEntry } from '../models/ImportedFunctionCallerEntry';
import { ImportedFunctionDetailOutputBody } from '../models/ImportedFunctionDetailOutputBody';
import { ImportedFunctionEntry } from '../models/ImportedFunctionEntry';
import { IndirectCallSite } from '../models/IndirectCallSite';
import { IndirectCallSitesOutputBody } from '../models/IndirectCallSitesOutputBody';
import { InlineComment } from '../models/InlineComment';
import { InviteUserInputBody } from '../models/InviteUserInputBody';
import { IssuerAllowedDomain } from '../models/IssuerAllowedDomain';
import { ListAnalysesOutputBody } from '../models/ListAnalysesOutputBody';
import { ListAnalysisFunctionsDataTypesOutputBody } from '../models/ListAnalysisFunctionsDataTypesOutputBody';
import { ListAnalysisFunctionsOutputBody } from '../models/ListAnalysisFunctionsOutputBody';
import { ListAnalysisStringsOutputBody } from '../models/ListAnalysisStringsOutputBody';
import { ListArchiveContentsOutputBody } from '../models/ListArchiveContentsOutputBody';
import { ListCollectionsOutputBody } from '../models/ListCollectionsOutputBody';
import { ListExampleAnalysesOutputBody } from '../models/ListExampleAnalysesOutputBody';
import { ListFunctionStringsOutputBody } from '../models/ListFunctionStringsOutputBody';
import { ListFunctionsDataTypesOutputBody } from '../models/ListFunctionsDataTypesOutputBody';
import { ListImportedFunctionsOutputBody } from '../models/ListImportedFunctionsOutputBody';
import { ListTeamsOutputBody } from '../models/ListTeamsOutputBody';
import { ListUsersOutputBody } from '../models/ListUsersOutputBody';
import { LocationOutputBody } from '../models/LocationOutputBody';
import { MatchFilters } from '../models/MatchFilters';
import { MatchedFunction } from '../models/MatchedFunction';
import { MemdumpEntry } from '../models/MemdumpEntry';
import { MessageBody } from '../models/MessageBody';
import { ModuleLoadEntry } from '../models/ModuleLoadEntry';
import { MutexEntry } from '../models/MutexEntry';
import { NameConfidence } from '../models/NameConfidence';
import { NetworkActivity } from '../models/NetworkActivity';
import { OIDCCallbackInputBody } from '../models/OIDCCallbackInputBody';
import { Organisation } from '../models/Organisation';
import { OrganisationGroup } from '../models/OrganisationGroup';
import { OrganisationIssuer } from '../models/OrganisationIssuer';
import { OrganisationOwner } from '../models/OrganisationOwner';
import { PasswordResetInputBody } from '../models/PasswordResetInputBody';
import { PatchCollectionBinariesInputBody } from '../models/PatchCollectionBinariesInputBody';
import { PatchCollectionBinariesOutputBody } from '../models/PatchCollectionBinariesOutputBody';
import { PatchCollectionInputBody } from '../models/PatchCollectionInputBody';
import { PatchCollectionOutputBody } from '../models/PatchCollectionOutputBody';
import { PatchCollectionTagsInputBody } from '../models/PatchCollectionTagsInputBody';
import { PatchCollectionTagsOutputBody } from '../models/PatchCollectionTagsOutputBody';
import { PatchCommentBody } from '../models/PatchCommentBody';
import { PcapBodyInfo } from '../models/PcapBodyInfo';
import { Permissions } from '../models/Permissions';
import { PriceOutput } from '../models/PriceOutput';
import { PriceSummary } from '../models/PriceSummary';
import { ProcessActivityEntry } from '../models/ProcessActivityEntry';
import { ProcessMemdumps } from '../models/ProcessMemdumps';
import { ProcessNode } from '../models/ProcessNode';
import { ProcessTree } from '../models/ProcessTree';
import { ProductOutput } from '../models/ProductOutput';
import { ProductSummary } from '../models/ProductSummary';
import { ProgressMessage } from '../models/ProgressMessage';
import { ProseEvent } from '../models/ProseEvent';
import { RefreshBody } from '../models/RefreshBody';
import { RegenerateOutputBody } from '../models/RegenerateOutputBody';
import { RegisterUserInputBody } from '../models/RegisterUserInputBody';
import { RegistryOperation } from '../models/RegistryOperation';
import { RenameAppliedEvent } from '../models/RenameAppliedEvent';
import { RenameInputBody } from '../models/RenameInputBody';
import { RenameOutputBody } from '../models/RenameOutputBody';
import { ReplacementValue } from '../models/ReplacementValue';
import { ReportEvent } from '../models/ReportEvent';
import { ReportInfo } from '../models/ReportInfo';
import { ReportOptions } from '../models/ReportOptions';
import { RevokeBody } from '../models/RevokeBody';
import { SSOProvider } from '../models/SSOProvider';
import { SSOProvidersOutputBody } from '../models/SSOProvidersOutputBody';
import { ScheduledTaskEntry } from '../models/ScheduledTaskEntry';
import { SendMessageRequest } from '../models/SendMessageRequest';
import { ServiceEntry } from '../models/ServiceEntry';
import { SessionOutputBody } from '../models/SessionOutputBody';
import { SourceDeltaEvent } from '../models/SourceDeltaEvent';
import { SourceResetEvent } from '../models/SourceResetEvent';
import { SseEventContextCompactedData } from '../models/SseEventContextCompactedData';
import { SseEventRunCancelledData } from '../models/SseEventRunCancelledData';
import { SseEventRunErrorData } from '../models/SseEventRunErrorData';
import { SseEventRunFinishedData } from '../models/SseEventRunFinishedData';
import { SseEventRunStartedData } from '../models/SseEventRunStartedData';
import { SseEventStepFinishedData } from '../models/SseEventStepFinishedData';
import { SseEventStepStartedData } from '../models/SseEventStepStartedData';
import { SseEventTextMessageContentData } from '../models/SseEventTextMessageContentData';
import { SseEventTextMessageEndData } from '../models/SseEventTextMessageEndData';
import { SseEventTextMessageStartData } from '../models/SseEventTextMessageStartData';
import { SseEventTitleUpdatedData } from '../models/SseEventTitleUpdatedData';
import { SseEventToolCallArgsDeltaData } from '../models/SseEventToolCallArgsDeltaData';
import { SseEventToolCallEndData } from '../models/SseEventToolCallEndData';
import { SseEventToolCallProgressData } from '../models/SseEventToolCallProgressData';
import { SseEventToolCallResultData } from '../models/SseEventToolCallResultData';
import { SseEventToolCallStartData } from '../models/SseEventToolCallStartData';
import { SseEventToolConfirmationRequiredData } from '../models/SseEventToolConfirmationRequiredData';
import { StartBatchMatchingInputBody } from '../models/StartBatchMatchingInputBody';
import { StartMatchingForAnalysisInputBody } from '../models/StartMatchingForAnalysisInputBody';
import { StartMatchingForFunctionsInputBody } from '../models/StartMatchingForFunctionsInputBody';
import { StartMatchingOutputBody } from '../models/StartMatchingOutputBody';
import { StartupInfo } from '../models/StartupInfo';
import { StatusResponse } from '../models/StatusResponse';
import { StreamAiDecompilation200ResponseInner } from '../models/StreamAiDecompilation200ResponseInner';
import { StreamEvents200ResponseInner } from '../models/StreamEvents200ResponseInner';
import { SummaryData } from '../models/SummaryData';
import { TcpCarvedFile } from '../models/TcpCarvedFile';
import { Team } from '../models/Team';
import { TeamMember } from '../models/TeamMember';
import { TokenInputBody } from '../models/TokenInputBody';
import { TokenResponse } from '../models/TokenResponse';
import { TokenisedData } from '../models/TokenisedData';
import { TriggerDynamicExecutionInputBody } from '../models/TriggerDynamicExecutionInputBody';
import { Ttp } from '../models/Ttp';
import { UpdateDataTypesInputBody } from '../models/UpdateDataTypesInputBody';
import { UpdateDataTypesOutputBody } from '../models/UpdateDataTypesOutputBody';
import { UpdateIssuerInputBody } from '../models/UpdateIssuerInputBody';
import { UpdateOrganisationInputBody } from '../models/UpdateOrganisationInputBody';
import { UpdatePasswordInputBody } from '../models/UpdatePasswordInputBody';
import { UpdateProfileInputBody } from '../models/UpdateProfileInputBody';
import { UpdateTeamInputBody } from '../models/UpdateTeamInputBody';
import { UpdateUserCreditsInputBody } from '../models/UpdateUserCreditsInputBody';
import { UpdateUserInputBody } from '../models/UpdateUserInputBody';
import { UpdateUserPasswordInputBody } from '../models/UpdateUserPasswordInputBody';
import { UpsertOverridesData } from '../models/UpsertOverridesData';
import { UpsertOverridesInputBody } from '../models/UpsertOverridesInputBody';
import { User } from '../models/User';
import { UserCredits } from '../models/UserCredits';
import { UserIdentity } from '../models/UserIdentity';
import { UserProfile } from '../models/UserProfile';
import { WarningEvent } from '../models/WarningEvent';
import { WorkflowProgress } from '../models/WorkflowProgress';

import { ObservableAnalysesCoreApi } from "./ObservableAPI";
import { AnalysesCoreApiRequestFactory, AnalysesCoreApiResponseProcessor} from "../apis/AnalysesCoreApi";

export interface AnalysesCoreApiAddUserStringToAnalysisRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiaddUserStringToAnalysis
     */
    analysisId: number
    /**
     * 
     * @type AddUserStringInputBody
     * @memberof AnalysesCoreApiaddUserStringToAnalysis
     */
    addUserStringInputBody: AddUserStringInputBody
}

export interface AnalysesCoreApiGetAnalysisBasicInfoRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisBasicInfo
     */
    analysisId: number
}

export interface AnalysesCoreApiGetAnalysisBytesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisBytes
     */
    analysisId: number
    /**
     * 64kb page of binary data
     * Minimum: 0
     * Maximum: 16777216
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisBytes
     */
    page?: number
}

export interface AnalysesCoreApiGetAnalysisFunctionMatchesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMatches
     */
    analysisId: number
    /**
     * Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMatches
     */
    matchId?: string
}

export interface AnalysesCoreApiGetAnalysisFunctionMatchingStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMatchingStatus
     */
    analysisId: number
    /**
     * Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMatchingStatus
     */
    matchId?: string
}

export interface AnalysesCoreApiGetDynamicExecutionReportRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetDynamicExecutionReport
     */
    analysisId: number
}

export interface AnalysesCoreApiGetDynamicExecutionStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetDynamicExecutionStatus
     */
    analysisId: number
}

export interface AnalysesCoreApiStartAnalysisFunctionMatchingRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApistartAnalysisFunctionMatching
     */
    analysisId: number
    /**
     * 
     * @type StartMatchingForAnalysisInputBody
     * @memberof AnalysesCoreApistartAnalysisFunctionMatching
     */
    startMatchingForAnalysisInputBody: StartMatchingForAnalysisInputBody
}

export interface AnalysesCoreApiV3GetAnalysisAutoUnstripStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisAutoUnstripStatus
     */
    analysisId: number
}

export interface AnalysesCoreApiV3GetAnalysisStringsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    analysisId: number
    /**
     * Page number (1-indexed).
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    page?: number
    /**
     * Number of results per page.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: 100
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    pageSize?: number
    /**
     * Filter by string value (case-insensitive substring match).
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    search?: string
    /**
     * How the search term matches string values.
     * Defaults to: &#39;CONTAINS&#39;
     * @type &#39;CONTAINS&#39; | &#39;STARTS_WITH&#39;
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    searchOperator?: 'CONTAINS' | 'STARTS_WITH'
    /**
     * Filter by function name (case-insensitive substring match).
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    functionSearch?: string
    /**
     * Field to order results by.
     * Defaults to: &#39;value&#39;
     * @type &#39;value&#39; | &#39;length&#39;
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    orderBy?: 'value' | 'length'
    /**
     * Sort direction.
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AnalysesCoreApiv3GetAnalysisStrings
     */
    sortOrder?: 'ASC' | 'DESC'
}

export interface AnalysesCoreApiV3GetAnalysisStringsStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisStringsStatus
     */
    analysisId: number
}

export interface AnalysesCoreApiV3ListAnalysesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    searchTerm?: string
    /**
     * Leave empty for no filter
     * Defaults to: undefined
     * @type Array&lt;&#39;PRIVATE&#39; | &#39;PUBLIC&#39; | &#39;TEAM&#39;&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;&#39;Uploaded&#39; | &#39;Queued&#39; | &#39;Complete&#39; | &#39;Error&#39; | &#39;Processing&#39;&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    modelName?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    usernames?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    sha256Hash?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 50
     * Defaults to: 20
     * @type number
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    pageSize?: number
    /**
     * Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination).
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    nextPageToken?: string
    /**
     * 
     * Defaults to: &#39;created&#39;
     * @type &#39;created&#39; | &#39;binary_name&#39; | &#39;binary_size&#39;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    orderBy?: 'created' | 'binary_name' | 'binary_size'
    /**
     * 
     * Defaults to: &#39;DESC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    order?: 'ASC' | 'DESC'
}

export interface AnalysesCoreApiV3ListExampleAnalysesRequest {
}

export class ObjectAnalysesCoreApi {
    private api: ObservableAnalysesCoreApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesCoreApiRequestFactory, responseProcessor?: AnalysesCoreApiResponseProcessor) {
        this.api = new ObservableAnalysesCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param param the request object
     */
    public addUserStringToAnalysisWithHttpInfo(param: AnalysesCoreApiAddUserStringToAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addUserStringToAnalysisWithHttpInfo(param.analysisId, param.addUserStringInputBody,  options).toPromise();
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param param the request object
     */
    public addUserStringToAnalysis(param: AnalysesCoreApiAddUserStringToAnalysisRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.addUserStringToAnalysis(param.analysisId, param.addUserStringInputBody,  options).toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfoWithHttpInfo(param: AnalysesCoreApiGetAnalysisBasicInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisBasicInfoOutputBody>> {
        return this.api.getAnalysisBasicInfoWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfo(param: AnalysesCoreApiGetAnalysisBasicInfoRequest, options?: ConfigurationOptions): Promise<AnalysisBasicInfoOutputBody> {
        return this.api.getAnalysisBasicInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param param the request object
     */
    public getAnalysisBytesWithHttpInfo(param: AnalysesCoreApiGetAnalysisBytesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.getAnalysisBytesWithHttpInfo(param.analysisId, param.page,  options).toPromise();
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param param the request object
     */
    public getAnalysisBytes(param: AnalysesCoreApiGetAnalysisBytesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.getAnalysisBytes(param.analysisId, param.page,  options).toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param param the request object
     */
    public getAnalysisFunctionMatchesWithHttpInfo(param: AnalysesCoreApiGetAnalysisFunctionMatchesRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        return this.api.getAnalysisFunctionMatchesWithHttpInfo(param.analysisId, param.matchId,  options).toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param param the request object
     */
    public getAnalysisFunctionMatches(param: AnalysesCoreApiGetAnalysisFunctionMatchesRequest, options?: ConfigurationOptions): Promise<GetMatchesOutputBody> {
        return this.api.getAnalysisFunctionMatches(param.analysisId, param.matchId,  options).toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param param the request object
     */
    public getAnalysisFunctionMatchingStatusWithHttpInfo(param: AnalysesCoreApiGetAnalysisFunctionMatchingStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        return this.api.getAnalysisFunctionMatchingStatusWithHttpInfo(param.analysisId, param.matchId,  options).toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param param the request object
     */
    public getAnalysisFunctionMatchingStatus(param: AnalysesCoreApiGetAnalysisFunctionMatchingStatusRequest, options?: ConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        return this.api.getAnalysisFunctionMatchingStatus(param.analysisId, param.matchId,  options).toPromise();
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param param the request object
     */
    public getDynamicExecutionReportWithHttpInfo(param: AnalysesCoreApiGetDynamicExecutionReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisReport>> {
        return this.api.getDynamicExecutionReportWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param param the request object
     */
    public getDynamicExecutionReport(param: AnalysesCoreApiGetDynamicExecutionReportRequest, options?: ConfigurationOptions): Promise<AnalysisReport> {
        return this.api.getDynamicExecutionReport(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param param the request object
     */
    public getDynamicExecutionStatusWithHttpInfo(param: AnalysesCoreApiGetDynamicExecutionStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<DynamicExecutionStatusResponse>> {
        return this.api.getDynamicExecutionStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param param the request object
     */
    public getDynamicExecutionStatus(param: AnalysesCoreApiGetDynamicExecutionStatusRequest, options?: ConfigurationOptions): Promise<DynamicExecutionStatusResponse> {
        return this.api.getDynamicExecutionStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param param the request object
     */
    public startAnalysisFunctionMatchingWithHttpInfo(param: AnalysesCoreApiStartAnalysisFunctionMatchingRequest, options?: ConfigurationOptions): Promise<HttpInfo<StartMatchingOutputBody>> {
        return this.api.startAnalysisFunctionMatchingWithHttpInfo(param.analysisId, param.startMatchingForAnalysisInputBody,  options).toPromise();
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param param the request object
     */
    public startAnalysisFunctionMatching(param: AnalysesCoreApiStartAnalysisFunctionMatchingRequest, options?: ConfigurationOptions): Promise<StartMatchingOutputBody> {
        return this.api.startAnalysisFunctionMatching(param.analysisId, param.startMatchingForAnalysisInputBody,  options).toPromise();
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisAutoUnstripStatusWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisAutoUnstripStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoUnstripStatusOutputBody>> {
        return this.api.v3GetAnalysisAutoUnstripStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisAutoUnstripStatus(param: AnalysesCoreApiV3GetAnalysisAutoUnstripStatusRequest, options?: ConfigurationOptions): Promise<AutoUnstripStatusOutputBody> {
        return this.api.v3GetAnalysisAutoUnstripStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisStringsWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisStringsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysisStringsOutputBody>> {
        return this.api.v3GetAnalysisStringsWithHttpInfo(param.analysisId, param.page, param.pageSize, param.search, param.searchOperator, param.functionSearch, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisStrings(param: AnalysesCoreApiV3GetAnalysisStringsRequest, options?: ConfigurationOptions): Promise<ListAnalysisStringsOutputBody> {
        return this.api.v3GetAnalysisStrings(param.analysisId, param.page, param.pageSize, param.search, param.searchOperator, param.functionSearch, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisStringsStatusWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisStringsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAnalysisStringsStatusOutputBody>> {
        return this.api.v3GetAnalysisStringsStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisStringsStatus(param: AnalysesCoreApiV3GetAnalysisStringsStatusRequest, options?: ConfigurationOptions): Promise<GetAnalysisStringsStatusOutputBody> {
        return this.api.v3GetAnalysisStringsStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param param the request object
     */
    public v3ListAnalysesWithHttpInfo(param: AnalysesCoreApiV3ListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysesOutputBody>> {
        return this.api.v3ListAnalysesWithHttpInfo(param.searchTerm, param.analysisScope, param.status, param.modelName, param.usernames, param.sha256Hash, param.pageSize, param.nextPageToken, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param param the request object
     */
    public v3ListAnalyses(param: AnalysesCoreApiV3ListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<ListAnalysesOutputBody> {
        return this.api.v3ListAnalyses(param.searchTerm, param.analysisScope, param.status, param.modelName, param.usernames, param.sha256Hash, param.pageSize, param.nextPageToken, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     * @param param the request object
     */
    public v3ListExampleAnalysesWithHttpInfo(param: AnalysesCoreApiV3ListExampleAnalysesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListExampleAnalysesOutputBody>> {
        return this.api.v3ListExampleAnalysesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     * @param param the request object
     */
    public v3ListExampleAnalyses(param: AnalysesCoreApiV3ListExampleAnalysesRequest = {}, options?: ConfigurationOptions): Promise<ListExampleAnalysesOutputBody> {
        return this.api.v3ListExampleAnalyses( options).toPromise();
    }

}

import { ObservableBinariesApi } from "./ObservableAPI";
import { BinariesApiRequestFactory, BinariesApiResponseProcessor} from "../apis/BinariesApi";

export interface BinariesApiGetBinaryAdditionalDetailsRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    binaryId: number
}

export interface BinariesApiGetBinaryAdditionalDetailsStatusRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    binaryId: number
}

export class ObjectBinariesApi {
    private api: ObservableBinariesApi

    public constructor(configuration: Configuration, requestFactory?: BinariesApiRequestFactory, responseProcessor?: BinariesApiResponseProcessor) {
        this.api = new ObservableBinariesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetailsWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsOutputBody>> {
        return this.api.getBinaryAdditionalDetailsWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetails(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<GetAdditionalDetailsOutputBody> {
        return this.api.getBinaryAdditionalDetails(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        return this.api.getBinaryAdditionalDetailsStatusWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatus(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<GetAdditionalDetailsStatusOutputBody> {
        return this.api.getBinaryAdditionalDetailsStatus(param.binaryId,  options).toPromise();
    }

}

import { ObservableCollectionsApi } from "./ObservableAPI";
import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";

export interface CollectionsApiV3CreateCollectionRequest {
    /**
     * 
     * @type CreateCollectionInputBody
     * @memberof CollectionsApiv3CreateCollection
     */
    createCollectionInputBody: CreateCollectionInputBody
}

export interface CollectionsApiV3DeleteCollectionRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3DeleteCollection
     */
    collectionId: number
}

export interface CollectionsApiV3GetCollectionRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3GetCollection
     */
    collectionId: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof CollectionsApiv3GetCollection
     */
    includeTags?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof CollectionsApiv3GetCollection
     */
    includeBinaries?: boolean
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof CollectionsApiv3GetCollection
     */
    pageSize?: number
    /**
     * 
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof CollectionsApiv3GetCollection
     */
    pageNumber?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApiv3GetCollection
     */
    binarySearchStr?: string
}

export interface CollectionsApiV3ListCollectionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApiv3ListCollections
     */
    searchTerm?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;&#39;official_only&#39; | &#39;user_only&#39; | &#39;team_only&#39; | &#39;public_only&#39; | &#39;hide_empty&#39;&gt;
     * @memberof CollectionsApiv3ListCollections
     */
    filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>
    /**
     * 
     * Minimum: 1
     * Maximum: 50
     * Defaults to: 20
     * @type number
     * @memberof CollectionsApiv3ListCollections
     */
    limit?: number
    /**
     * 
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof CollectionsApiv3ListCollections
     */
    offset?: number
    /**
     * 
     * Defaults to: &#39;collection&#39;
     * @type &#39;created&#39; | &#39;collection&#39; | &#39;collection_size&#39; | &#39;updated&#39; | &#39;owner&#39;
     * @memberof CollectionsApiv3ListCollections
     */
    orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner'
    /**
     * 
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof CollectionsApiv3ListCollections
     */
    order?: 'ASC' | 'DESC'
}

export interface CollectionsApiV3PatchCollectionRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3PatchCollection
     */
    collectionId: number
    /**
     * 
     * @type PatchCollectionInputBody
     * @memberof CollectionsApiv3PatchCollection
     */
    patchCollectionInputBody: PatchCollectionInputBody
}

export interface CollectionsApiV3PatchCollectionBinariesRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3PatchCollectionBinaries
     */
    collectionId: number
    /**
     * 
     * @type PatchCollectionBinariesInputBody
     * @memberof CollectionsApiv3PatchCollectionBinaries
     */
    patchCollectionBinariesInputBody: PatchCollectionBinariesInputBody
}

export interface CollectionsApiV3PatchCollectionTagsRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3PatchCollectionTags
     */
    collectionId: number
    /**
     * 
     * @type PatchCollectionTagsInputBody
     * @memberof CollectionsApiv3PatchCollectionTags
     */
    patchCollectionTagsInputBody: PatchCollectionTagsInputBody
}

export class ObjectCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsApiRequestFactory, responseProcessor?: CollectionsApiResponseProcessor) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param param the request object
     */
    public v3CreateCollectionWithHttpInfo(param: CollectionsApiV3CreateCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateCollectionOutputBody>> {
        return this.api.v3CreateCollectionWithHttpInfo(param.createCollectionInputBody,  options).toPromise();
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param param the request object
     */
    public v3CreateCollection(param: CollectionsApiV3CreateCollectionRequest, options?: ConfigurationOptions): Promise<CreateCollectionOutputBody> {
        return this.api.v3CreateCollection(param.createCollectionInputBody,  options).toPromise();
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param param the request object
     */
    public v3DeleteCollectionWithHttpInfo(param: CollectionsApiV3DeleteCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3DeleteCollectionWithHttpInfo(param.collectionId,  options).toPromise();
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param param the request object
     */
    public v3DeleteCollection(param: CollectionsApiV3DeleteCollectionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3DeleteCollection(param.collectionId,  options).toPromise();
    }

    /**
     * Gets a single collection by ID. Optionally include tags and paginated binaries.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a collection.
     * @param param the request object
     */
    public v3GetCollectionWithHttpInfo(param: CollectionsApiV3GetCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetCollectionOutputBody>> {
        return this.api.v3GetCollectionWithHttpInfo(param.collectionId, param.includeTags, param.includeBinaries, param.pageSize, param.pageNumber, param.binarySearchStr,  options).toPromise();
    }

    /**
     * Gets a single collection by ID. Optionally include tags and paginated binaries.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a collection.
     * @param param the request object
     */
    public v3GetCollection(param: CollectionsApiV3GetCollectionRequest, options?: ConfigurationOptions): Promise<GetCollectionOutputBody> {
        return this.api.v3GetCollection(param.collectionId, param.includeTags, param.includeBinaries, param.pageSize, param.pageNumber, param.binarySearchStr,  options).toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param param the request object
     */
    public v3ListCollectionsWithHttpInfo(param: CollectionsApiV3ListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCollectionsOutputBody>> {
        return this.api.v3ListCollectionsWithHttpInfo(param.searchTerm, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param param the request object
     */
    public v3ListCollections(param: CollectionsApiV3ListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<ListCollectionsOutputBody> {
        return this.api.v3ListCollections(param.searchTerm, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param param the request object
     */
    public v3PatchCollectionWithHttpInfo(param: CollectionsApiV3PatchCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PatchCollectionOutputBody>> {
        return this.api.v3PatchCollectionWithHttpInfo(param.collectionId, param.patchCollectionInputBody,  options).toPromise();
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param param the request object
     */
    public v3PatchCollection(param: CollectionsApiV3PatchCollectionRequest, options?: ConfigurationOptions): Promise<PatchCollectionOutputBody> {
        return this.api.v3PatchCollection(param.collectionId, param.patchCollectionInputBody,  options).toPromise();
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param param the request object
     */
    public v3PatchCollectionBinariesWithHttpInfo(param: CollectionsApiV3PatchCollectionBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PatchCollectionBinariesOutputBody>> {
        return this.api.v3PatchCollectionBinariesWithHttpInfo(param.collectionId, param.patchCollectionBinariesInputBody,  options).toPromise();
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param param the request object
     */
    public v3PatchCollectionBinaries(param: CollectionsApiV3PatchCollectionBinariesRequest, options?: ConfigurationOptions): Promise<PatchCollectionBinariesOutputBody> {
        return this.api.v3PatchCollectionBinaries(param.collectionId, param.patchCollectionBinariesInputBody,  options).toPromise();
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param param the request object
     */
    public v3PatchCollectionTagsWithHttpInfo(param: CollectionsApiV3PatchCollectionTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PatchCollectionTagsOutputBody>> {
        return this.api.v3PatchCollectionTagsWithHttpInfo(param.collectionId, param.patchCollectionTagsInputBody,  options).toPromise();
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param param the request object
     */
    public v3PatchCollectionTags(param: CollectionsApiV3PatchCollectionTagsRequest, options?: ConfigurationOptions): Promise<PatchCollectionTagsOutputBody> {
        return this.api.v3PatchCollectionTags(param.collectionId, param.patchCollectionTagsInputBody,  options).toPromise();
    }

}

import { ObservableConversationsApi } from "./ObservableAPI";
import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";

export interface ConversationsApiCancelRunRequest {
    /**
     * Conversation UUID
     * Defaults to: undefined
     * @type string
     * @memberof ConversationsApicancelRun
     */
    id: string
}

export interface ConversationsApiConfirmToolRequest {
    /**
     * Conversation UUID
     * Defaults to: undefined
     * @type string
     * @memberof ConversationsApiconfirmTool
     */
    id: string
    /**
     * 
     * @type ConfirmToolInputBody
     * @memberof ConversationsApiconfirmTool
     */
    confirmToolInputBody: ConfirmToolInputBody
}

export interface ConversationsApiCreateConversationRequest {
    /**
     * 
     * @type CreateConversationRequest
     * @memberof ConversationsApicreateConversation
     */
    createConversationRequest: CreateConversationRequest
}

export interface ConversationsApiGetConversationRequest {
    /**
     * Conversation UUID
     * Defaults to: undefined
     * @type string
     * @memberof ConversationsApigetConversation
     */
    id: string
}

export interface ConversationsApiListConversationsRequest {
}

export interface ConversationsApiSendMessageRequest {
    /**
     * Conversation UUID
     * Defaults to: undefined
     * @type string
     * @memberof ConversationsApisendMessage
     */
    id: string
    /**
     * 
     * @type SendMessageRequest
     * @memberof ConversationsApisendMessage
     */
    sendMessageRequest: SendMessageRequest
}

export interface ConversationsApiStreamEventsRequest {
    /**
     * Conversation UUID
     * Defaults to: undefined
     * @type string
     * @memberof ConversationsApistreamEvents
     */
    id: string
    /**
     * Replay events after this ID
     * Defaults to: undefined
     * @type number
     * @memberof ConversationsApistreamEvents
     */
    lastEventId?: number
}

export class ObjectConversationsApi {
    private api: ObservableConversationsApi

    public constructor(configuration: Configuration, requestFactory?: ConversationsApiRequestFactory, responseProcessor?: ConversationsApiResponseProcessor) {
        this.api = new ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param param the request object
     */
    public cancelRunWithHttpInfo(param: ConversationsApiCancelRunRequest, options?: ConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        return this.api.cancelRunWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param param the request object
     */
    public cancelRun(param: ConversationsApiCancelRunRequest, options?: ConfigurationOptions): Promise<StatusResponse> {
        return this.api.cancelRun(param.id,  options).toPromise();
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param param the request object
     */
    public confirmToolWithHttpInfo(param: ConversationsApiConfirmToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        return this.api.confirmToolWithHttpInfo(param.id, param.confirmToolInputBody,  options).toPromise();
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param param the request object
     */
    public confirmTool(param: ConversationsApiConfirmToolRequest, options?: ConfigurationOptions): Promise<StatusResponse> {
        return this.api.confirmTool(param.id, param.confirmToolInputBody,  options).toPromise();
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param param the request object
     */
    public createConversationWithHttpInfo(param: ConversationsApiCreateConversationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Conversation>> {
        return this.api.createConversationWithHttpInfo(param.createConversationRequest,  options).toPromise();
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param param the request object
     */
    public createConversation(param: ConversationsApiCreateConversationRequest, options?: ConfigurationOptions): Promise<Conversation> {
        return this.api.createConversation(param.createConversationRequest,  options).toPromise();
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param param the request object
     */
    public getConversationWithHttpInfo(param: ConversationsApiGetConversationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConversationWithEvents>> {
        return this.api.getConversationWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param param the request object
     */
    public getConversation(param: ConversationsApiGetConversationRequest, options?: ConfigurationOptions): Promise<ConversationWithEvents> {
        return this.api.getConversation(param.id,  options).toPromise();
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     * @param param the request object
     */
    public listConversationsWithHttpInfo(param: ConversationsApiListConversationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<Conversation>>> {
        return this.api.listConversationsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     * @param param the request object
     */
    public listConversations(param: ConversationsApiListConversationsRequest = {}, options?: ConfigurationOptions): Promise<Array<Conversation>> {
        return this.api.listConversations( options).toPromise();
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param param the request object
     */
    public sendMessageWithHttpInfo(param: ConversationsApiSendMessageRequest, options?: ConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        return this.api.sendMessageWithHttpInfo(param.id, param.sendMessageRequest,  options).toPromise();
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param param the request object
     */
    public sendMessage(param: ConversationsApiSendMessageRequest, options?: ConfigurationOptions): Promise<StatusResponse> {
        return this.api.sendMessage(param.id, param.sendMessageRequest,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param param the request object
     */
    public streamEventsWithHttpInfo(param: ConversationsApiStreamEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<StreamEvents200ResponseInner>>> {
        return this.api.streamEventsWithHttpInfo(param.id, param.lastEventId,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param param the request object
     */
    public streamEvents(param: ConversationsApiStreamEventsRequest, options?: ConfigurationOptions): Promise<Array<StreamEvents200ResponseInner>> {
        return this.api.streamEvents(param.id, param.lastEventId,  options).toPromise();
    }

}

import { ObservableFunctionsAIDecompilationApi } from "./ObservableAPI";
import { FunctionsAIDecompilationApiRequestFactory, FunctionsAIDecompilationApiResponseProcessor} from "../apis/FunctionsAIDecompilationApi";

export interface FunctionsAIDecompilationApiCreateAiDecompilationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    functionId: number
    /**
     * Use context-aware decompilation
     * Defaults to: false
     * @type boolean
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    contextAware?: boolean
    /**
     * LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * Minimum: -1
     * Maximum: 1
     * Defaults to: -1
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    temperature?: number
}

export interface FunctionsAIDecompilationApiDeleteAiDecompilationInlineCommentRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationInlineComment
     */
    functionId: number
    /**
     * Line number of the comment to delete
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationInlineComment
     */
    line: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilation
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationInlineComments
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsStatusRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationInlineCommentsStatus
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationStatusRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationStatus
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationSummaryRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationSummary
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationSummaryStatusRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationSummaryStatus
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationTokenisedRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationTokenised
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiPatchAiDecompilationInlineCommentRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApipatchAiDecompilationInlineComment
     */
    functionId: number
    /**
     * 
     * @type PatchCommentBody
     * @memberof FunctionsAIDecompilationApipatchAiDecompilationInlineComment
     */
    patchCommentBody: PatchCommentBody
}

export interface FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiregenerateAiDecompilationInlineComments
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiregenerateAiDecompilationSummary
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiStreamAiDecompilationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApistreamAiDecompilation
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiUpsertAiDecompilationOverridesRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiupsertAiDecompilationOverrides
     */
    functionId: number
    /**
     * 
     * @type UpsertOverridesInputBody
     * @memberof FunctionsAIDecompilationApiupsertAiDecompilationOverrides
     */
    upsertOverridesInputBody: UpsertOverridesInputBody
}

export class ObjectFunctionsAIDecompilationApi {
    private api: ObservableFunctionsAIDecompilationApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsAIDecompilationApiRequestFactory, responseProcessor?: FunctionsAIDecompilationApiResponseProcessor) {
        this.api = new ObservableFunctionsAIDecompilationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param param the request object
     */
    public createAiDecompilationWithHttpInfo(param: FunctionsAIDecompilationApiCreateAiDecompilationRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateAIDecompOutputBody>> {
        return this.api.createAiDecompilationWithHttpInfo(param.functionId, param.contextAware, param.temperature,  options).toPromise();
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param param the request object
     */
    public createAiDecompilation(param: FunctionsAIDecompilationApiCreateAiDecompilationRequest, options?: ConfigurationOptions): Promise<CreateAIDecompOutputBody> {
        return this.api.createAiDecompilation(param.functionId, param.contextAware, param.temperature,  options).toPromise();
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param param the request object
     */
    public deleteAiDecompilationInlineCommentWithHttpInfo(param: FunctionsAIDecompilationApiDeleteAiDecompilationInlineCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        return this.api.deleteAiDecompilationInlineCommentWithHttpInfo(param.functionId, param.line,  options).toPromise();
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param param the request object
     */
    public deleteAiDecompilationInlineComment(param: FunctionsAIDecompilationApiDeleteAiDecompilationInlineCommentRequest, options?: ConfigurationOptions): Promise<CommentsData> {
        return this.api.deleteAiDecompilationInlineComment(param.functionId, param.line,  options).toPromise();
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param param the request object
     */
    public getAiDecompilationWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationRequest, options?: ConfigurationOptions): Promise<HttpInfo<DecompilationData>> {
        return this.api.getAiDecompilationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param param the request object
     */
    public getAiDecompilation(param: FunctionsAIDecompilationApiGetAiDecompilationRequest, options?: ConfigurationOptions): Promise<DecompilationData> {
        return this.api.getAiDecompilation(param.functionId,  options).toPromise();
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param param the request object
     */
    public getAiDecompilationInlineCommentsWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        return this.api.getAiDecompilationInlineCommentsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param param the request object
     */
    public getAiDecompilationInlineComments(param: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<CommentsData> {
        return this.api.getAiDecompilationInlineComments(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param param the request object
     */
    public getAiDecompilationInlineCommentsStatusWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        return this.api.getAiDecompilationInlineCommentsStatusWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param param the request object
     */
    public getAiDecompilationInlineCommentsStatus(param: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsStatusRequest, options?: ConfigurationOptions): Promise<WorkflowProgress> {
        return this.api.getAiDecompilationInlineCommentsStatus(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param param the request object
     */
    public getAiDecompilationStatusWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        return this.api.getAiDecompilationStatusWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param param the request object
     */
    public getAiDecompilationStatus(param: FunctionsAIDecompilationApiGetAiDecompilationStatusRequest, options?: ConfigurationOptions): Promise<WorkflowProgress> {
        return this.api.getAiDecompilationStatus(param.functionId,  options).toPromise();
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param param the request object
     */
    public getAiDecompilationSummaryWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<SummaryData>> {
        return this.api.getAiDecompilationSummaryWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param param the request object
     */
    public getAiDecompilationSummary(param: FunctionsAIDecompilationApiGetAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<SummaryData> {
        return this.api.getAiDecompilationSummary(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param param the request object
     */
    public getAiDecompilationSummaryStatusWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationSummaryStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        return this.api.getAiDecompilationSummaryStatusWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param param the request object
     */
    public getAiDecompilationSummaryStatus(param: FunctionsAIDecompilationApiGetAiDecompilationSummaryStatusRequest, options?: ConfigurationOptions): Promise<WorkflowProgress> {
        return this.api.getAiDecompilationSummaryStatus(param.functionId,  options).toPromise();
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param param the request object
     */
    public getAiDecompilationTokenisedWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationTokenisedRequest, options?: ConfigurationOptions): Promise<HttpInfo<TokenisedData>> {
        return this.api.getAiDecompilationTokenisedWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param param the request object
     */
    public getAiDecompilationTokenised(param: FunctionsAIDecompilationApiGetAiDecompilationTokenisedRequest, options?: ConfigurationOptions): Promise<TokenisedData> {
        return this.api.getAiDecompilationTokenised(param.functionId,  options).toPromise();
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param param the request object
     */
    public patchAiDecompilationInlineCommentWithHttpInfo(param: FunctionsAIDecompilationApiPatchAiDecompilationInlineCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        return this.api.patchAiDecompilationInlineCommentWithHttpInfo(param.functionId, param.patchCommentBody,  options).toPromise();
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param param the request object
     */
    public patchAiDecompilationInlineComment(param: FunctionsAIDecompilationApiPatchAiDecompilationInlineCommentRequest, options?: ConfigurationOptions): Promise<CommentsData> {
        return this.api.patchAiDecompilationInlineComment(param.functionId, param.patchCommentBody,  options).toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param param the request object
     */
    public regenerateAiDecompilationInlineCommentsWithHttpInfo(param: FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        return this.api.regenerateAiDecompilationInlineCommentsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param param the request object
     */
    public regenerateAiDecompilationInlineComments(param: FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<RegenerateOutputBody> {
        return this.api.regenerateAiDecompilationInlineComments(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param param the request object
     */
    public regenerateAiDecompilationSummaryWithHttpInfo(param: FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        return this.api.regenerateAiDecompilationSummaryWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param param the request object
     */
    public regenerateAiDecompilationSummary(param: FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<RegenerateOutputBody> {
        return this.api.regenerateAiDecompilationSummary(param.functionId,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param param the request object
     */
    public streamAiDecompilationWithHttpInfo(param: FunctionsAIDecompilationApiStreamAiDecompilationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<StreamAiDecompilation200ResponseInner>>> {
        return this.api.streamAiDecompilationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param param the request object
     */
    public streamAiDecompilation(param: FunctionsAIDecompilationApiStreamAiDecompilationRequest, options?: ConfigurationOptions): Promise<Array<StreamAiDecompilation200ResponseInner>> {
        return this.api.streamAiDecompilation(param.functionId,  options).toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param param the request object
     */
    public upsertAiDecompilationOverridesWithHttpInfo(param: FunctionsAIDecompilationApiUpsertAiDecompilationOverridesRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpsertOverridesData>> {
        return this.api.upsertAiDecompilationOverridesWithHttpInfo(param.functionId, param.upsertOverridesInputBody,  options).toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param param the request object
     */
    public upsertAiDecompilationOverrides(param: FunctionsAIDecompilationApiUpsertAiDecompilationOverridesRequest, options?: ConfigurationOptions): Promise<UpsertOverridesData> {
        return this.api.upsertAiDecompilationOverrides(param.functionId, param.upsertOverridesInputBody,  options).toPromise();
    }

}

import { ObservableFunctionsCoreApi } from "./ObservableAPI";
import { FunctionsCoreApiRequestFactory, FunctionsCoreApiResponseProcessor} from "../apis/FunctionsCoreApi";

export interface FunctionsCoreApiAddFunctionCalleeRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApiaddFunctionCallee
     */
    functionId: number
    /**
     * 
     * @type AddCalleeInputBody
     * @memberof FunctionsCoreApiaddFunctionCallee
     */
    addCalleeInputBody: AddCalleeInputBody
}

export interface FunctionsCoreApiAddUserStringToFunctionRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApiaddUserStringToFunction
     */
    functionId: number
    /**
     * 
     * @type AddUserStringToFunctionInputBody
     * @memberof FunctionsCoreApiaddUserStringToFunction
     */
    addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody
}

export interface FunctionsCoreApiGetFunctionBlocksRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionBlocks
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionCalleesCallersRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCalleesCallers
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionCapabilitiesRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCapabilities
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionDetailsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionDetails
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionIndirectCallSitesRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionIndirectCallSites
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionStringsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    functionId: number
    /**
     * Page number (1-indexed).
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    page?: number
    /**
     * Number of results per page.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: 100
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    pageSize?: number
    /**
     * Filter by string value (case-insensitive substring match).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    search?: string
}

export interface FunctionsCoreApiGetFunctionsCalleesCallersRequest {
    /**
     * Function IDs to fetch edges for.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsCoreApigetFunctionsCalleesCallers
     */
    functionIds: Array<number>
}

export interface FunctionsCoreApiGetFunctionsMatchesRequest {
    /**
     * Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetFunctionsMatches
     */
    matchId?: string
    /**
     * Source function IDs whose matches to fetch. Required unless match_id is supplied.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsCoreApigetFunctionsMatches
     */
    functionIds?: Array<number>
}

export interface FunctionsCoreApiGetFunctionsMatchingStatusRequest {
    /**
     * Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetFunctionsMatchingStatus
     */
    matchId?: string
    /**
     * Source function IDs whose matches to fetch. Required unless match_id is supplied.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsCoreApigetFunctionsMatchingStatus
     */
    functionIds?: Array<number>
}

export interface FunctionsCoreApiGetImportedFunctionRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetImportedFunction
     */
    analysisId: number
    /**
     * Imported function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetImportedFunction
     */
    importedFunctionId: number
}

export interface FunctionsCoreApiListAnalysisFunctionsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistAnalysisFunctions
     */
    analysisId: number
    /**
     * Pagination offset. Defaults to 0.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistAnalysisFunctions
     */
    offset?: number
    /**
     * Page size. Defaults to 100.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistAnalysisFunctions
     */
    limit?: number
}

export interface FunctionsCoreApiListImportedFunctionsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistImportedFunctions
     */
    analysisId: number
    /**
     * Pagination offset. Defaults to 0.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistImportedFunctions
     */
    offset?: number
    /**
     * Page size. Defaults to 100.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApilistImportedFunctions
     */
    limit?: number
}

export interface FunctionsCoreApiStartFunctionsMatchingRequest {
    /**
     * 
     * @type StartMatchingForFunctionsInputBody
     * @memberof FunctionsCoreApistartFunctionsMatching
     */
    startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody
}

export interface FunctionsCoreApiV3CanonicalizeFunctionNamesRequest {
    /**
     * 
     * @type CanonicalizeNamesInputBody
     * @memberof FunctionsCoreApiv3CanonicalizeFunctionNames
     */
    canonicalizeNamesInputBody: CanonicalizeNamesInputBody
}

export class ObjectFunctionsCoreApi {
    private api: ObservableFunctionsCoreApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsCoreApiRequestFactory, responseProcessor?: FunctionsCoreApiResponseProcessor) {
        this.api = new ObservableFunctionsCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param param the request object
     */
    public addFunctionCalleeWithHttpInfo(param: FunctionsCoreApiAddFunctionCalleeRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addFunctionCalleeWithHttpInfo(param.functionId, param.addCalleeInputBody,  options).toPromise();
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param param the request object
     */
    public addFunctionCallee(param: FunctionsCoreApiAddFunctionCalleeRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.addFunctionCallee(param.functionId, param.addCalleeInputBody,  options).toPromise();
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param param the request object
     */
    public addUserStringToFunctionWithHttpInfo(param: FunctionsCoreApiAddUserStringToFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.addUserStringToFunctionWithHttpInfo(param.functionId, param.addUserStringToFunctionInputBody,  options).toPromise();
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param param the request object
     */
    public addUserStringToFunction(param: FunctionsCoreApiAddUserStringToFunctionRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.addUserStringToFunction(param.functionId, param.addUserStringToFunctionInputBody,  options).toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param param the request object
     */
    public getFunctionBlocksWithHttpInfo(param: FunctionsCoreApiGetFunctionBlocksRequest, options?: ConfigurationOptions): Promise<HttpInfo<DisassemblyOutputBody>> {
        return this.api.getFunctionBlocksWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param param the request object
     */
    public getFunctionBlocks(param: FunctionsCoreApiGetFunctionBlocksRequest, options?: ConfigurationOptions): Promise<DisassemblyOutputBody> {
        return this.api.getFunctionBlocks(param.functionId,  options).toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param param the request object
     */
    public getFunctionCalleesCallersWithHttpInfo(param: FunctionsCoreApiGetFunctionCalleesCallersRequest, options?: ConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        return this.api.getFunctionCalleesCallersWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param param the request object
     */
    public getFunctionCalleesCallers(param: FunctionsCoreApiGetFunctionCalleesCallersRequest, options?: ConfigurationOptions): Promise<CallEdgesOutputBody> {
        return this.api.getFunctionCalleesCallers(param.functionId,  options).toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param param the request object
     */
    public getFunctionCapabilitiesWithHttpInfo(param: FunctionsCoreApiGetFunctionCapabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CapabilitiesOutputBody>> {
        return this.api.getFunctionCapabilitiesWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param param the request object
     */
    public getFunctionCapabilities(param: FunctionsCoreApiGetFunctionCapabilitiesRequest, options?: ConfigurationOptions): Promise<CapabilitiesOutputBody> {
        return this.api.getFunctionCapabilities(param.functionId,  options).toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param param the request object
     */
    public getFunctionDetailsWithHttpInfo(param: FunctionsCoreApiGetFunctionDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionDetailsOutputBody>> {
        return this.api.getFunctionDetailsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param param the request object
     */
    public getFunctionDetails(param: FunctionsCoreApiGetFunctionDetailsRequest, options?: ConfigurationOptions): Promise<FunctionDetailsOutputBody> {
        return this.api.getFunctionDetails(param.functionId,  options).toPromise();
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param param the request object
     */
    public getFunctionIndirectCallSitesWithHttpInfo(param: FunctionsCoreApiGetFunctionIndirectCallSitesRequest, options?: ConfigurationOptions): Promise<HttpInfo<IndirectCallSitesOutputBody>> {
        return this.api.getFunctionIndirectCallSitesWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param param the request object
     */
    public getFunctionIndirectCallSites(param: FunctionsCoreApiGetFunctionIndirectCallSitesRequest, options?: ConfigurationOptions): Promise<IndirectCallSitesOutputBody> {
        return this.api.getFunctionIndirectCallSites(param.functionId,  options).toPromise();
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param param the request object
     */
    public getFunctionStringsWithHttpInfo(param: FunctionsCoreApiGetFunctionStringsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFunctionStringsOutputBody>> {
        return this.api.getFunctionStringsWithHttpInfo(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param param the request object
     */
    public getFunctionStrings(param: FunctionsCoreApiGetFunctionStringsRequest, options?: ConfigurationOptions): Promise<ListFunctionStringsOutputBody> {
        return this.api.getFunctionStrings(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param param the request object
     */
    public getFunctionsCalleesCallersWithHttpInfo(param: FunctionsCoreApiGetFunctionsCalleesCallersRequest, options?: ConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        return this.api.getFunctionsCalleesCallersWithHttpInfo(param.functionIds,  options).toPromise();
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param param the request object
     */
    public getFunctionsCalleesCallers(param: FunctionsCoreApiGetFunctionsCalleesCallersRequest, options?: ConfigurationOptions): Promise<CallEdgesOutputBody> {
        return this.api.getFunctionsCalleesCallers(param.functionIds,  options).toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param param the request object
     */
    public getFunctionsMatchesWithHttpInfo(param: FunctionsCoreApiGetFunctionsMatchesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        return this.api.getFunctionsMatchesWithHttpInfo(param.matchId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param param the request object
     */
    public getFunctionsMatches(param: FunctionsCoreApiGetFunctionsMatchesRequest = {}, options?: ConfigurationOptions): Promise<GetMatchesOutputBody> {
        return this.api.getFunctionsMatches(param.matchId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param param the request object
     */
    public getFunctionsMatchingStatusWithHttpInfo(param: FunctionsCoreApiGetFunctionsMatchingStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        return this.api.getFunctionsMatchingStatusWithHttpInfo(param.matchId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param param the request object
     */
    public getFunctionsMatchingStatus(param: FunctionsCoreApiGetFunctionsMatchingStatusRequest = {}, options?: ConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        return this.api.getFunctionsMatchingStatus(param.matchId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param param the request object
     */
    public getImportedFunctionWithHttpInfo(param: FunctionsCoreApiGetImportedFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ImportedFunctionDetailOutputBody>> {
        return this.api.getImportedFunctionWithHttpInfo(param.analysisId, param.importedFunctionId,  options).toPromise();
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param param the request object
     */
    public getImportedFunction(param: FunctionsCoreApiGetImportedFunctionRequest, options?: ConfigurationOptions): Promise<ImportedFunctionDetailOutputBody> {
        return this.api.getImportedFunction(param.analysisId, param.importedFunctionId,  options).toPromise();
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param param the request object
     */
    public listAnalysisFunctionsWithHttpInfo(param: FunctionsCoreApiListAnalysisFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysisFunctionsOutputBody>> {
        return this.api.listAnalysisFunctionsWithHttpInfo(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param param the request object
     */
    public listAnalysisFunctions(param: FunctionsCoreApiListAnalysisFunctionsRequest, options?: ConfigurationOptions): Promise<ListAnalysisFunctionsOutputBody> {
        return this.api.listAnalysisFunctions(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param param the request object
     */
    public listImportedFunctionsWithHttpInfo(param: FunctionsCoreApiListImportedFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListImportedFunctionsOutputBody>> {
        return this.api.listImportedFunctionsWithHttpInfo(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param param the request object
     */
    public listImportedFunctions(param: FunctionsCoreApiListImportedFunctionsRequest, options?: ConfigurationOptions): Promise<ListImportedFunctionsOutputBody> {
        return this.api.listImportedFunctions(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param param the request object
     */
    public startFunctionsMatchingWithHttpInfo(param: FunctionsCoreApiStartFunctionsMatchingRequest, options?: ConfigurationOptions): Promise<HttpInfo<StartMatchingOutputBody>> {
        return this.api.startFunctionsMatchingWithHttpInfo(param.startMatchingForFunctionsInputBody,  options).toPromise();
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param param the request object
     */
    public startFunctionsMatching(param: FunctionsCoreApiStartFunctionsMatchingRequest, options?: ConfigurationOptions): Promise<StartMatchingOutputBody> {
        return this.api.startFunctionsMatching(param.startMatchingForFunctionsInputBody,  options).toPromise();
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param param the request object
     */
    public v3CanonicalizeFunctionNamesWithHttpInfo(param: FunctionsCoreApiV3CanonicalizeFunctionNamesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CanonicalizeNamesOutputBody>> {
        return this.api.v3CanonicalizeFunctionNamesWithHttpInfo(param.canonicalizeNamesInputBody,  options).toPromise();
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param param the request object
     */
    public v3CanonicalizeFunctionNames(param: FunctionsCoreApiV3CanonicalizeFunctionNamesRequest, options?: ConfigurationOptions): Promise<CanonicalizeNamesOutputBody> {
        return this.api.v3CanonicalizeFunctionNames(param.canonicalizeNamesInputBody,  options).toPromise();
    }

}

import { ObservableFunctionsDataTypesApi } from "./ObservableAPI";
import { FunctionsDataTypesApiRequestFactory, FunctionsDataTypesApiResponseProcessor} from "../apis/FunctionsDataTypesApi";

export interface FunctionsDataTypesApiBatchUpdateFunctionDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApibatchUpdateFunctionDataTypes
     */
    analysisId: number
    /**
     * 
     * @type BatchUpdateDataTypesInputBody
     * @memberof FunctionsDataTypesApibatchUpdateFunctionDataTypes
     */
    batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody
}

export interface FunctionsDataTypesApiGetFunctionDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApigetFunctionDataTypes
     */
    analysisId: number
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApigetFunctionDataTypes
     */
    functionId: number
}

export interface FunctionsDataTypesApiListAnalysisFunctionsDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApilistAnalysisFunctionsDataTypes
     */
    analysisId: number
    /**
     * Pagination offset. Defaults to 0.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApilistAnalysisFunctionsDataTypes
     */
    offset?: number
    /**
     * Page size. Defaults to 100.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApilistAnalysisFunctionsDataTypes
     */
    limit?: number
}

export interface FunctionsDataTypesApiListFunctionsDataTypesRequest {
    /**
     * Function IDs to fetch data-types for.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsDataTypesApilistFunctionsDataTypes
     */
    functionIds: Array<number>
}

export interface FunctionsDataTypesApiUpdateFunctionDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    analysisId: number
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    functionId: number
    /**
     * 
     * @type UpdateDataTypesInputBody
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    updateDataTypesInputBody: UpdateDataTypesInputBody
}

export class ObjectFunctionsDataTypesApi {
    private api: ObservableFunctionsDataTypesApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsDataTypesApiRequestFactory, responseProcessor?: FunctionsDataTypesApiResponseProcessor) {
        this.api = new ObservableFunctionsDataTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param param the request object
     */
    public batchUpdateFunctionDataTypesWithHttpInfo(param: FunctionsDataTypesApiBatchUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchUpdateDataTypesOutputBody>> {
        return this.api.batchUpdateFunctionDataTypesWithHttpInfo(param.analysisId, param.batchUpdateDataTypesInputBody,  options).toPromise();
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param param the request object
     */
    public batchUpdateFunctionDataTypes(param: FunctionsDataTypesApiBatchUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<BatchUpdateDataTypesOutputBody> {
        return this.api.batchUpdateFunctionDataTypes(param.analysisId, param.batchUpdateDataTypesInputBody,  options).toPromise();
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param param the request object
     */
    public getFunctionDataTypesWithHttpInfo(param: FunctionsDataTypesApiGetFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataTypesEntry>> {
        return this.api.getFunctionDataTypesWithHttpInfo(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param param the request object
     */
    public getFunctionDataTypes(param: FunctionsDataTypesApiGetFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<DataTypesEntry> {
        return this.api.getFunctionDataTypes(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param param the request object
     */
    public listAnalysisFunctionsDataTypesWithHttpInfo(param: FunctionsDataTypesApiListAnalysisFunctionsDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysisFunctionsDataTypesOutputBody>> {
        return this.api.listAnalysisFunctionsDataTypesWithHttpInfo(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param param the request object
     */
    public listAnalysisFunctionsDataTypes(param: FunctionsDataTypesApiListAnalysisFunctionsDataTypesRequest, options?: ConfigurationOptions): Promise<ListAnalysisFunctionsDataTypesOutputBody> {
        return this.api.listAnalysisFunctionsDataTypes(param.analysisId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param param the request object
     */
    public listFunctionsDataTypesWithHttpInfo(param: FunctionsDataTypesApiListFunctionsDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFunctionsDataTypesOutputBody>> {
        return this.api.listFunctionsDataTypesWithHttpInfo(param.functionIds,  options).toPromise();
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param param the request object
     */
    public listFunctionsDataTypes(param: FunctionsDataTypesApiListFunctionsDataTypesRequest, options?: ConfigurationOptions): Promise<ListFunctionsDataTypesOutputBody> {
        return this.api.listFunctionsDataTypes(param.functionIds,  options).toPromise();
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param param the request object
     */
    public updateFunctionDataTypesWithHttpInfo(param: FunctionsDataTypesApiUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateDataTypesOutputBody>> {
        return this.api.updateFunctionDataTypesWithHttpInfo(param.analysisId, param.functionId, param.updateDataTypesInputBody,  options).toPromise();
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param param the request object
     */
    public updateFunctionDataTypes(param: FunctionsDataTypesApiUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<UpdateDataTypesOutputBody> {
        return this.api.updateFunctionDataTypes(param.analysisId, param.functionId, param.updateDataTypesInputBody,  options).toPromise();
    }

}

import { ObservableFunctionsRenamingHistoryApi } from "./ObservableAPI";
import { FunctionsRenamingHistoryApiRequestFactory, FunctionsRenamingHistoryApiResponseProcessor} from "../apis/FunctionsRenamingHistoryApi";

export interface FunctionsRenamingHistoryApiBatchRenameFunctionsRequest {
    /**
     * 
     * @type BatchRenameInputBody
     * @memberof FunctionsRenamingHistoryApibatchRenameFunctions
     */
    batchRenameInputBody: BatchRenameInputBody
}

export interface FunctionsRenamingHistoryApiGetFunctionHistoryRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApigetFunctionHistory
     */
    functionId: number
}

export interface FunctionsRenamingHistoryApiRenameFunctionRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirenameFunction
     */
    functionId: number
    /**
     * 
     * @type RenameInputBody
     * @memberof FunctionsRenamingHistoryApirenameFunction
     */
    renameInputBody: RenameInputBody
}

export interface FunctionsRenamingHistoryApiRevertFunctionNameRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirevertFunctionName
     */
    functionId: number
    /**
     * History ID to revert to
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirevertFunctionName
     */
    historyId: number
}

export class ObjectFunctionsRenamingHistoryApi {
    private api: ObservableFunctionsRenamingHistoryApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsRenamingHistoryApiRequestFactory, responseProcessor?: FunctionsRenamingHistoryApiResponseProcessor) {
        this.api = new ObservableFunctionsRenamingHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param param the request object
     */
    public batchRenameFunctionsWithHttpInfo(param: FunctionsRenamingHistoryApiBatchRenameFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchRenameOutputBody>> {
        return this.api.batchRenameFunctionsWithHttpInfo(param.batchRenameInputBody,  options).toPromise();
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param param the request object
     */
    public batchRenameFunctions(param: FunctionsRenamingHistoryApiBatchRenameFunctionsRequest, options?: ConfigurationOptions): Promise<BatchRenameOutputBody> {
        return this.api.batchRenameFunctions(param.batchRenameInputBody,  options).toPromise();
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param param the request object
     */
    public getFunctionHistoryWithHttpInfo(param: FunctionsRenamingHistoryApiGetFunctionHistoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<HistoryEntry>>> {
        return this.api.getFunctionHistoryWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param param the request object
     */
    public getFunctionHistory(param: FunctionsRenamingHistoryApiGetFunctionHistoryRequest, options?: ConfigurationOptions): Promise<Array<HistoryEntry>> {
        return this.api.getFunctionHistory(param.functionId,  options).toPromise();
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param param the request object
     */
    public renameFunctionWithHttpInfo(param: FunctionsRenamingHistoryApiRenameFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RenameOutputBody>> {
        return this.api.renameFunctionWithHttpInfo(param.functionId, param.renameInputBody,  options).toPromise();
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param param the request object
     */
    public renameFunction(param: FunctionsRenamingHistoryApiRenameFunctionRequest, options?: ConfigurationOptions): Promise<RenameOutputBody> {
        return this.api.renameFunction(param.functionId, param.renameInputBody,  options).toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param param the request object
     */
    public revertFunctionNameWithHttpInfo(param: FunctionsRenamingHistoryApiRevertFunctionNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.revertFunctionNameWithHttpInfo(param.functionId, param.historyId,  options).toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param param the request object
     */
    public revertFunctionName(param: FunctionsRenamingHistoryApiRevertFunctionNameRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.revertFunctionName(param.functionId, param.historyId,  options).toPromise();
    }

}

import { ObservableIAMUsersApi } from "./ObservableAPI";
import { IAMUsersApiRequestFactory, IAMUsersApiResponseProcessor} from "../apis/IAMUsersApi";

export interface IAMUsersApiGetMeRequest {
}

export interface IAMUsersApiGetMyPermissionsRequest {
}

export class ObjectIAMUsersApi {
    private api: ObservableIAMUsersApi

    public constructor(configuration: Configuration, requestFactory?: IAMUsersApiRequestFactory, responseProcessor?: IAMUsersApiResponseProcessor) {
        this.api = new ObservableIAMUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     * @param param the request object
     */
    public getMeWithHttpInfo(param: IAMUsersApiGetMeRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.getMeWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     * @param param the request object
     */
    public getMe(param: IAMUsersApiGetMeRequest = {}, options?: ConfigurationOptions): Promise<User> {
        return this.api.getMe( options).toPromise();
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     * @param param the request object
     */
    public getMyPermissionsWithHttpInfo(param: IAMUsersApiGetMyPermissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Permissions>> {
        return this.api.getMyPermissionsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     * @param param the request object
     */
    public getMyPermissions(param: IAMUsersApiGetMyPermissionsRequest = {}, options?: ConfigurationOptions): Promise<Permissions> {
        return this.api.getMyPermissions( options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";

export interface ReportsApiCreatePdfReportRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ReportsApicreatePdfReport
     */
    analysisId: number
}

export interface ReportsApiDownloadPdfReportRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ReportsApidownloadPdfReport
     */
    analysisId: number
}

export interface ReportsApiGetPdfReportStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ReportsApigetPdfReportStatus
     */
    analysisId: number
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param param the request object
     */
    public createPdfReportWithHttpInfo(param: ReportsApiCreatePdfReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<GeneratePDFOutputBody>> {
        return this.api.createPdfReportWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param param the request object
     */
    public createPdfReport(param: ReportsApiCreatePdfReportRequest, options?: ConfigurationOptions): Promise<GeneratePDFOutputBody> {
        return this.api.createPdfReport(param.analysisId,  options).toPromise();
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param param the request object
     */
    public downloadPdfReportWithHttpInfo(param: ReportsApiDownloadPdfReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.downloadPdfReportWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param param the request object
     */
    public downloadPdfReport(param: ReportsApiDownloadPdfReportRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.downloadPdfReport(param.analysisId,  options).toPromise();
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param param the request object
     */
    public getPdfReportStatusWithHttpInfo(param: ReportsApiGetPdfReportStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        return this.api.getPdfReportStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param param the request object
     */
    public getPdfReportStatus(param: ReportsApiGetPdfReportStatusRequest, options?: ConfigurationOptions): Promise<WorkflowProgress> {
        return this.api.getPdfReportStatus(param.analysisId,  options).toPromise();
    }

}
