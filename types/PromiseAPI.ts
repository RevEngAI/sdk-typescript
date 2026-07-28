import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAnalysesCoreApi } from './ObservableAPI';

import { AnalysesCoreApiRequestFactory, AnalysesCoreApiResponseProcessor} from "../apis/AnalysesCoreApi";
export class PromiseAnalysesCoreApi {
    private api: ObservableAnalysesCoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesCoreApiRequestFactory,
        responseProcessor?: AnalysesCoreApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param analysisId Analysis ID
     * @param addUserStringInputBody
     */
    public addUserStringToAnalysisWithHttpInfo(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToAnalysisWithHttpInfo(analysisId, addUserStringInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param analysisId Analysis ID
     * @param addUserStringInputBody
     */
    public addUserStringToAnalysis(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToAnalysis(analysisId, addUserStringInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfoWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisBasicInfoOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfoWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisBasicInfoOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param analysisId Analysis ID
     * @param [page] 64kb page of binary data
     */
    public getAnalysisBytesWithHttpInfo(analysisId: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBytesWithHttpInfo(analysisId, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param analysisId Analysis ID
     * @param [page] 64kb page of binary data
     */
    public getAnalysisBytes(analysisId: number, page?: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBytes(analysisId, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchesWithHttpInfo(analysisId: number, matchId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchesWithHttpInfo(analysisId, matchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatches(analysisId: number, matchId?: string, _options?: PromiseConfigurationOptions): Promise<GetMatchesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatches(analysisId, matchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId: number, matchId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId, matchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchingStatus(analysisId: number, matchId?: string, _options?: PromiseConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchingStatus(analysisId, matchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionReportWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisReport>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionReportWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionReport(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisReport> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionReport(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DynamicExecutionStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<DynamicExecutionStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param analysisId Analysis ID
     * @param startMatchingForAnalysisInputBody
     */
    public startAnalysisFunctionMatchingWithHttpInfo(analysisId: number, startMatchingForAnalysisInputBody: StartMatchingForAnalysisInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StartMatchingOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startAnalysisFunctionMatchingWithHttpInfo(analysisId, startMatchingForAnalysisInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param analysisId Analysis ID
     * @param startMatchingForAnalysisInputBody
     */
    public startAnalysisFunctionMatching(analysisId: number, startMatchingForAnalysisInputBody: StartMatchingForAnalysisInputBody, _options?: PromiseConfigurationOptions): Promise<StartMatchingOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startAnalysisFunctionMatching(analysisId, startMatchingForAnalysisInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisAutoUnstripStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoUnstripStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisAutoUnstripStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisAutoUnstripStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AutoUnstripStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisAutoUnstripStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param analysisId Analysis ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     * @param [searchOperator] How the search term matches string values.
     * @param [functionSearch] Filter by function name (case-insensitive substring match).
     * @param [orderBy] Field to order results by.
     * @param [sortOrder] Sort direction.
     */
    public v3GetAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, searchOperator?: 'CONTAINS' | 'STARTS_WITH', functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysisStringsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, searchOperator, functionSearch, orderBy, sortOrder, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param analysisId Analysis ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     * @param [searchOperator] How the search term matches string values.
     * @param [functionSearch] Filter by function name (case-insensitive substring match).
     * @param [orderBy] Field to order results by.
     * @param [sortOrder] Sort direction.
     */
    public v3GetAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, searchOperator?: 'CONTAINS' | 'STARTS_WITH', functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListAnalysisStringsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStrings(analysisId, page, pageSize, search, searchOperator, functionSearch, orderBy, sortOrder, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisStringsStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAnalysisStringsStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStringsStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisStringsStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GetAnalysisStringsStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStringsStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param [searchTerm]
     * @param [analysisScope] Leave empty for no filter
     * @param [status]
     * @param [modelName]
     * @param [usernames]
     * @param [sha256Hash]
     * @param [pageSize]
     * @param [nextPageToken] Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination).
     * @param [orderBy]
     * @param [order]
     */
    public v3ListAnalysesWithHttpInfo(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysesWithHttpInfo(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, pageSize, nextPageToken, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param [searchTerm]
     * @param [analysisScope] Leave empty for no filter
     * @param [status]
     * @param [modelName]
     * @param [usernames]
     * @param [sha256Hash]
     * @param [pageSize]
     * @param [nextPageToken] Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination).
     * @param [orderBy]
     * @param [order]
     */
    public v3ListAnalyses(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListAnalysesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalyses(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, pageSize, nextPageToken, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     */
    public v3ListExampleAnalysesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListExampleAnalysesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListExampleAnalysesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     */
    public v3ListExampleAnalyses(_options?: PromiseConfigurationOptions): Promise<ListExampleAnalysesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListExampleAnalyses(observableOptions);
        return result.toPromise();
    }


}



import { ObservableBinariesApi } from './ObservableAPI';

import { BinariesApiRequestFactory, BinariesApiResponseProcessor} from "../apis/BinariesApi";
export class PromiseBinariesApi {
    private api: ObservableBinariesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BinariesApiRequestFactory,
        responseProcessor?: BinariesApiResponseProcessor
    ) {
        this.api = new ObservableBinariesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetAdditionalDetailsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetails(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetAdditionalDetailsStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatus(binaryId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCollectionsApi } from './ObservableAPI';

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";
export class PromiseCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param createCollectionInputBody
     */
    public v3CreateCollectionWithHttpInfo(createCollectionInputBody: CreateCollectionInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCollectionOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CreateCollectionWithHttpInfo(createCollectionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param createCollectionInputBody
     */
    public v3CreateCollection(createCollectionInputBody: CreateCollectionInputBody, _options?: PromiseConfigurationOptions): Promise<CreateCollectionOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CreateCollection(createCollectionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param collectionId
     */
    public v3DeleteCollectionWithHttpInfo(collectionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DeleteCollectionWithHttpInfo(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param collectionId
     */
    public v3DeleteCollection(collectionId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DeleteCollection(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single collection by ID. Optionally include tags and paginated binaries.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a collection.
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     * @param [pageSize]
     * @param [pageNumber]
     * @param [binarySearchStr]
     */
    public v3GetCollectionWithHttpInfo(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCollectionOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCollectionWithHttpInfo(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single collection by ID. Optionally include tags and paginated binaries.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a collection.
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     * @param [pageSize]
     * @param [pageNumber]
     * @param [binarySearchStr]
     */
    public v3GetCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: PromiseConfigurationOptions): Promise<GetCollectionOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCollection(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param [searchTerm]
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public v3ListCollectionsWithHttpInfo(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCollectionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListCollectionsWithHttpInfo(searchTerm, filters, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param [searchTerm]
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public v3ListCollections(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListCollectionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListCollections(searchTerm, filters, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param collectionId
     * @param patchCollectionInputBody
     */
    public v3PatchCollectionWithHttpInfo(collectionId: number, patchCollectionInputBody: PatchCollectionInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PatchCollectionOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollectionWithHttpInfo(collectionId, patchCollectionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param collectionId
     * @param patchCollectionInputBody
     */
    public v3PatchCollection(collectionId: number, patchCollectionInputBody: PatchCollectionInputBody, _options?: PromiseConfigurationOptions): Promise<PatchCollectionOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollection(collectionId, patchCollectionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param collectionId
     * @param patchCollectionBinariesInputBody
     */
    public v3PatchCollectionBinariesWithHttpInfo(collectionId: number, patchCollectionBinariesInputBody: PatchCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PatchCollectionBinariesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollectionBinariesWithHttpInfo(collectionId, patchCollectionBinariesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param collectionId
     * @param patchCollectionBinariesInputBody
     */
    public v3PatchCollectionBinaries(collectionId: number, patchCollectionBinariesInputBody: PatchCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<PatchCollectionBinariesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollectionBinaries(collectionId, patchCollectionBinariesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param collectionId
     * @param patchCollectionTagsInputBody
     */
    public v3PatchCollectionTagsWithHttpInfo(collectionId: number, patchCollectionTagsInputBody: PatchCollectionTagsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PatchCollectionTagsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollectionTagsWithHttpInfo(collectionId, patchCollectionTagsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param collectionId
     * @param patchCollectionTagsInputBody
     */
    public v3PatchCollectionTags(collectionId: number, patchCollectionTagsInputBody: PatchCollectionTagsInputBody, _options?: PromiseConfigurationOptions): Promise<PatchCollectionTagsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PatchCollectionTags(collectionId, patchCollectionTagsInputBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConversationsApi } from './ObservableAPI';

import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";
export class PromiseConversationsApi {
    private api: ObservableConversationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversationsApiRequestFactory,
        responseProcessor?: ConversationsApiResponseProcessor
    ) {
        this.api = new ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param id Conversation UUID
     */
    public cancelRunWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelRunWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param id Conversation UUID
     */
    public cancelRun(id: string, _options?: PromiseConfigurationOptions): Promise<StatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelRun(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param id Conversation UUID
     * @param confirmToolInputBody
     */
    public confirmToolWithHttpInfo(id: string, confirmToolInputBody: ConfirmToolInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.confirmToolWithHttpInfo(id, confirmToolInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param id Conversation UUID
     * @param confirmToolInputBody
     */
    public confirmTool(id: string, confirmToolInputBody: ConfirmToolInputBody, _options?: PromiseConfigurationOptions): Promise<StatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.confirmTool(id, confirmToolInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param createConversationRequest
     */
    public createConversationWithHttpInfo(createConversationRequest: CreateConversationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Conversation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConversationWithHttpInfo(createConversationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param createConversationRequest
     */
    public createConversation(createConversationRequest: CreateConversationRequest, _options?: PromiseConfigurationOptions): Promise<Conversation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConversation(createConversationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param id Conversation UUID
     */
    public getConversationWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConversationWithEvents>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConversationWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param id Conversation UUID
     */
    public getConversation(id: string, _options?: PromiseConfigurationOptions): Promise<ConversationWithEvents> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConversation(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     */
    public listConversationsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<Conversation>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConversationsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     */
    public listConversations(_options?: PromiseConfigurationOptions): Promise<Array<Conversation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConversations(observableOptions);
        return result.toPromise();
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param id Conversation UUID
     * @param sendMessageRequest
     */
    public sendMessageWithHttpInfo(id: string, sendMessageRequest: SendMessageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendMessageWithHttpInfo(id, sendMessageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param id Conversation UUID
     * @param sendMessageRequest
     */
    public sendMessage(id: string, sendMessageRequest: SendMessageRequest, _options?: PromiseConfigurationOptions): Promise<StatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendMessage(id, sendMessageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param id Conversation UUID
     * @param [lastEventId] Replay events after this ID
     */
    public streamEventsWithHttpInfo(id: string, lastEventId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<StreamEvents200ResponseInner>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamEventsWithHttpInfo(id, lastEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param id Conversation UUID
     * @param [lastEventId] Replay events after this ID
     */
    public streamEvents(id: string, lastEventId?: number, _options?: PromiseConfigurationOptions): Promise<Array<StreamEvents200ResponseInner>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamEvents(id, lastEventId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsAIDecompilationApi } from './ObservableAPI';

import { FunctionsAIDecompilationApiRequestFactory, FunctionsAIDecompilationApiResponseProcessor} from "../apis/FunctionsAIDecompilationApi";
export class PromiseFunctionsAIDecompilationApi {
    private api: ObservableFunctionsAIDecompilationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsAIDecompilationApiRequestFactory,
        responseProcessor?: FunctionsAIDecompilationApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsAIDecompilationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param functionId Function ID
     * @param [contextAware] Use context-aware decompilation
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     */
    public createAiDecompilationWithHttpInfo(functionId: number, contextAware?: boolean, temperature?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateAIDecompOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationWithHttpInfo(functionId, contextAware, temperature, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param functionId Function ID
     * @param [contextAware] Use context-aware decompilation
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     */
    public createAiDecompilation(functionId: number, contextAware?: boolean, temperature?: number, _options?: PromiseConfigurationOptions): Promise<CreateAIDecompOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilation(functionId, contextAware, temperature, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param functionId Function ID
     * @param line Line number of the comment to delete
     */
    public deleteAiDecompilationInlineCommentWithHttpInfo(functionId: number, line: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAiDecompilationInlineCommentWithHttpInfo(functionId, line, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param functionId Function ID
     * @param line Line number of the comment to delete
     */
    public deleteAiDecompilationInlineComment(functionId: number, line: number, _options?: PromiseConfigurationOptions): Promise<CommentsData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAiDecompilationInlineComment(functionId, line, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param functionId Function ID
     */
    public getAiDecompilationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DecompilationData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param functionId Function ID
     */
    public getAiDecompilation(functionId: number, _options?: PromiseConfigurationOptions): Promise<DecompilationData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationInlineCommentsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param functionId Function ID
     */
    public getAiDecompilationInlineComments(functionId: number, _options?: PromiseConfigurationOptions): Promise<CommentsData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationInlineComments(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsStatusWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationInlineCommentsStatusWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsStatus(functionId: number, _options?: PromiseConfigurationOptions): Promise<WorkflowProgress> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationInlineCommentsStatus(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationStatusWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationStatusWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationStatus(functionId: number, _options?: PromiseConfigurationOptions): Promise<WorkflowProgress> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationStatus(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SummaryData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationSummaryWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param functionId Function ID
     */
    public getAiDecompilationSummary(functionId: number, _options?: PromiseConfigurationOptions): Promise<SummaryData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationSummary(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryStatusWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationSummaryStatusWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryStatus(functionId: number, _options?: PromiseConfigurationOptions): Promise<WorkflowProgress> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationSummaryStatus(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param functionId Function ID
     */
    public getAiDecompilationTokenisedWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenisedData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTokenisedWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param functionId Function ID
     */
    public getAiDecompilationTokenised(functionId: number, _options?: PromiseConfigurationOptions): Promise<TokenisedData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTokenised(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param functionId Function ID
     * @param patchCommentBody
     */
    public patchAiDecompilationInlineCommentWithHttpInfo(functionId: number, patchCommentBody: PatchCommentBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommentsData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchAiDecompilationInlineCommentWithHttpInfo(functionId, patchCommentBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param functionId Function ID
     * @param patchCommentBody
     */
    public patchAiDecompilationInlineComment(functionId: number, patchCommentBody: PatchCommentBody, _options?: PromiseConfigurationOptions): Promise<CommentsData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchAiDecompilationInlineComment(functionId, patchCommentBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineComments(functionId: number, _options?: PromiseConfigurationOptions): Promise<RegenerateOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationInlineComments(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummaryWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationSummaryWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummary(functionId: number, _options?: PromiseConfigurationOptions): Promise<RegenerateOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationSummary(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<StreamAiDecompilation200ResponseInner>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAiDecompilationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilation(functionId: number, _options?: PromiseConfigurationOptions): Promise<Array<StreamAiDecompilation200ResponseInner>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAiDecompilation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public upsertAiDecompilationOverridesWithHttpInfo(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpsertOverridesData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.upsertAiDecompilationOverridesWithHttpInfo(functionId, upsertOverridesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public upsertAiDecompilationOverrides(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: PromiseConfigurationOptions): Promise<UpsertOverridesData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.upsertAiDecompilationOverrides(functionId, upsertOverridesInputBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsCoreApi } from './ObservableAPI';

import { FunctionsCoreApiRequestFactory, FunctionsCoreApiResponseProcessor} from "../apis/FunctionsCoreApi";
export class PromiseFunctionsCoreApi {
    private api: ObservableFunctionsCoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsCoreApiRequestFactory,
        responseProcessor?: FunctionsCoreApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param functionId Function ID
     * @param addCalleeInputBody
     */
    public addFunctionCalleeWithHttpInfo(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFunctionCalleeWithHttpInfo(functionId, addCalleeInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param functionId Function ID
     * @param addCalleeInputBody
     */
    public addFunctionCallee(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFunctionCallee(functionId, addCalleeInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param functionId Function ID
     * @param addUserStringToFunctionInputBody
     */
    public addUserStringToFunctionWithHttpInfo(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToFunctionWithHttpInfo(functionId, addUserStringToFunctionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param functionId Function ID
     * @param addUserStringToFunctionInputBody
     */
    public addUserStringToFunction(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToFunction(functionId, addUserStringToFunctionInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocksWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DisassemblyOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocksWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks(functionId: number, _options?: PromiseConfigurationOptions): Promise<DisassemblyOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocks(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallersWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallersWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers(functionId: number, _options?: PromiseConfigurationOptions): Promise<CallEdgesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallers(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilitiesWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CapabilitiesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilitiesWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities(functionId: number, _options?: PromiseConfigurationOptions): Promise<CapabilitiesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilities(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetailsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionDetailsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetailsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails(functionId: number, _options?: PromiseConfigurationOptions): Promise<FunctionDetailsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetails(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param functionId Function ID
     */
    public getFunctionIndirectCallSitesWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IndirectCallSitesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionIndirectCallSitesWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param functionId Function ID
     */
    public getFunctionIndirectCallSites(functionId: number, _options?: PromiseConfigurationOptions): Promise<IndirectCallSitesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionIndirectCallSites(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStringsWithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFunctionStringsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStringsWithHttpInfo(functionId, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStrings(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<ListFunctionStringsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStrings(functionId, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param functionIds Function IDs to fetch edges for.
     */
    public getFunctionsCalleesCallersWithHttpInfo(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsCalleesCallersWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param functionIds Function IDs to fetch edges for.
     */
    public getFunctionsCalleesCallers(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<CallEdgesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsCalleesCallers(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchesWithHttpInfo(matchId?: string, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchesWithHttpInfo(matchId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatches(matchId?: string, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<GetMatchesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatches(matchId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchingStatusWithHttpInfo(matchId?: string, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchingStatusWithHttpInfo(matchId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchingStatus(matchId?: string, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchingStatus(matchId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param analysisId Analysis ID
     * @param importedFunctionId Imported function ID
     */
    public getImportedFunctionWithHttpInfo(analysisId: number, importedFunctionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ImportedFunctionDetailOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImportedFunctionWithHttpInfo(analysisId, importedFunctionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param analysisId Analysis ID
     * @param importedFunctionId Imported function ID
     */
    public getImportedFunction(analysisId: number, importedFunctionId: number, _options?: PromiseConfigurationOptions): Promise<ImportedFunctionDetailOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImportedFunction(analysisId, importedFunctionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysisFunctionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalysisFunctionsWithHttpInfo(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctions(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListAnalysisFunctionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalysisFunctions(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listImportedFunctionsWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListImportedFunctionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listImportedFunctionsWithHttpInfo(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listImportedFunctions(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListImportedFunctionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listImportedFunctions(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param startMatchingForFunctionsInputBody
     */
    public startFunctionsMatchingWithHttpInfo(startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StartMatchingOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startFunctionsMatchingWithHttpInfo(startMatchingForFunctionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param startMatchingForFunctionsInputBody
     */
    public startFunctionsMatching(startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody, _options?: PromiseConfigurationOptions): Promise<StartMatchingOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startFunctionsMatching(startMatchingForFunctionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param canonicalizeNamesInputBody
     */
    public v3CanonicalizeFunctionNamesWithHttpInfo(canonicalizeNamesInputBody: CanonicalizeNamesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CanonicalizeNamesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CanonicalizeFunctionNamesWithHttpInfo(canonicalizeNamesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param canonicalizeNamesInputBody
     */
    public v3CanonicalizeFunctionNames(canonicalizeNamesInputBody: CanonicalizeNamesInputBody, _options?: PromiseConfigurationOptions): Promise<CanonicalizeNamesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CanonicalizeFunctionNames(canonicalizeNamesInputBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsDataTypesApi } from './ObservableAPI';

import { FunctionsDataTypesApiRequestFactory, FunctionsDataTypesApiResponseProcessor} from "../apis/FunctionsDataTypesApi";
export class PromiseFunctionsDataTypesApi {
    private api: ObservableFunctionsDataTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsDataTypesApiRequestFactory,
        responseProcessor?: FunctionsDataTypesApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsDataTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param analysisId Analysis ID
     * @param batchUpdateDataTypesInputBody
     */
    public batchUpdateFunctionDataTypesWithHttpInfo(analysisId: number, batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchUpdateDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchUpdateFunctionDataTypesWithHttpInfo(analysisId, batchUpdateDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param analysisId Analysis ID
     * @param batchUpdateDataTypesInputBody
     */
    public batchUpdateFunctionDataTypes(analysisId: number, batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<BatchUpdateDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchUpdateFunctionDataTypes(analysisId, batchUpdateDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public getFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataTypesEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDataTypesWithHttpInfo(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public getFunctionDataTypes(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<DataTypesEntry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDataTypes(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsDataTypesWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysisFunctionsDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalysisFunctionsDataTypesWithHttpInfo(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsDataTypes(analysisId: number, offset?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListAnalysisFunctionsDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalysisFunctionsDataTypes(analysisId, offset, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param functionIds Function IDs to fetch data-types for.
     */
    public listFunctionsDataTypesWithHttpInfo(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFunctionsDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionsDataTypesWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param functionIds Function IDs to fetch data-types for.
     */
    public listFunctionsDataTypes(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<ListFunctionsDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionsDataTypes(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateDataTypesInputBody
     */
    public updateFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, updateDataTypesInputBody: UpdateDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionDataTypesWithHttpInfo(analysisId, functionId, updateDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateDataTypesInputBody
     */
    public updateFunctionDataTypes(analysisId: number, functionId: number, updateDataTypesInputBody: UpdateDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<UpdateDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionDataTypes(analysisId, functionId, updateDataTypesInputBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsRenamingHistoryApi } from './ObservableAPI';

import { FunctionsRenamingHistoryApiRequestFactory, FunctionsRenamingHistoryApiResponseProcessor} from "../apis/FunctionsRenamingHistoryApi";
export class PromiseFunctionsRenamingHistoryApi {
    private api: ObservableFunctionsRenamingHistoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsRenamingHistoryApiRequestFactory,
        responseProcessor?: FunctionsRenamingHistoryApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsRenamingHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param batchRenameInputBody
     */
    public batchRenameFunctionsWithHttpInfo(batchRenameInputBody: BatchRenameInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchRenameOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchRenameFunctionsWithHttpInfo(batchRenameInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param batchRenameInputBody
     */
    public batchRenameFunctions(batchRenameInputBody: BatchRenameInputBody, _options?: PromiseConfigurationOptions): Promise<BatchRenameOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchRenameFunctions(batchRenameInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param functionId Function ID
     */
    public getFunctionHistoryWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<HistoryEntry>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionHistoryWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param functionId Function ID
     */
    public getFunctionHistory(functionId: number, _options?: PromiseConfigurationOptions): Promise<Array<HistoryEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionHistory(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param functionId Function ID
     * @param renameInputBody
     */
    public renameFunctionWithHttpInfo(functionId: number, renameInputBody: RenameInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RenameOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFunctionWithHttpInfo(functionId, renameInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param functionId Function ID
     * @param renameInputBody
     */
    public renameFunction(functionId: number, renameInputBody: RenameInputBody, _options?: PromiseConfigurationOptions): Promise<RenameOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFunction(functionId, renameInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionNameWithHttpInfo(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionNameWithHttpInfo(functionId, historyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionName(functionId, historyId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIAMUsersApi } from './ObservableAPI';

import { IAMUsersApiRequestFactory, IAMUsersApiResponseProcessor} from "../apis/IAMUsersApi";
export class PromiseIAMUsersApi {
    private api: ObservableIAMUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IAMUsersApiRequestFactory,
        responseProcessor?: IAMUsersApiResponseProcessor
    ) {
        this.api = new ObservableIAMUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     */
    public getMeWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     */
    public getMe(_options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMe(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     */
    public getMyPermissionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Permissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMyPermissionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     */
    public getMyPermissions(_options?: PromiseConfigurationOptions): Promise<Permissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMyPermissions(observableOptions);
        return result.toPromise();
    }


}



import { ObservableReportsApi } from './ObservableAPI';

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class PromiseReportsApi {
    private api: ObservableReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param analysisId Analysis ID
     */
    public createPdfReportWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GeneratePDFOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfReportWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param analysisId Analysis ID
     */
    public createPdfReport(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GeneratePDFOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfReport(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param analysisId Analysis ID
     */
    public downloadPdfReportWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadPdfReportWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param analysisId Analysis ID
     */
    public downloadPdfReport(analysisId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadPdfReport(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param analysisId Analysis ID
     */
    public getPdfReportStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPdfReportStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param analysisId Analysis ID
     */
    public getPdfReportStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<WorkflowProgress> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPdfReportStatus(analysisId, observableOptions);
        return result.toPromise();
    }


}



