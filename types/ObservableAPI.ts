import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AnalysesCoreApiRequestFactory, AnalysesCoreApiResponseProcessor} from "../apis/AnalysesCoreApi";
export class ObservableAnalysesCoreApi {
    private requestFactory: AnalysesCoreApiRequestFactory;
    private responseProcessor: AnalysesCoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesCoreApiRequestFactory,
        responseProcessor?: AnalysesCoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesCoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesCoreApiResponseProcessor();
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param analysisId Analysis ID
     * @param addUserStringInputBody
     */
    public addUserStringToAnalysisWithHttpInfo(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addUserStringToAnalysis(analysisId, addUserStringInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserStringToAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param analysisId Analysis ID
     * @param addUserStringInputBody
     */
    public addUserStringToAnalysis(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: ConfigurationOptions): Observable<any> {
        return this.addUserStringToAnalysisWithHttpInfo(analysisId, addUserStringInputBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfoWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisBasicInfoOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisBasicInfo(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisBasicInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisBasicInfoOutputBody> {
        return this.getAnalysisBasicInfoWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisBasicInfoOutputBody>) => apiResponse.data));
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param analysisId Analysis ID
     * @param [page] 64kb page of binary data
     */
    public getAnalysisBytesWithHttpInfo(analysisId: number, page?: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisBytes(analysisId, page, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisBytesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get the bytes of a binary
     * @param analysisId Analysis ID
     * @param [page] 64kb page of binary data
     */
    public getAnalysisBytes(analysisId: number, page?: number, _options?: ConfigurationOptions): Observable<void> {
        return this.getAnalysisBytesWithHttpInfo(analysisId, page, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchesWithHttpInfo(analysisId: number, matchId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetMatchesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisFunctionMatches(analysisId, matchId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisFunctionMatchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatches(analysisId: number, matchId?: string, _options?: ConfigurationOptions): Observable<GetMatchesOutputBody> {
        return this.getAnalysisFunctionMatchesWithHttpInfo(analysisId, matchId, _options).pipe(map((apiResponse: HttpInfo<GetMatchesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId: number, matchId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetMatchesStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisFunctionMatchingStatus(analysisId, matchId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisFunctionMatchingStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     */
    public getAnalysisFunctionMatchingStatus(analysisId: number, matchId?: string, _options?: ConfigurationOptions): Observable<GetMatchesStatusOutputBody> {
        return this.getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId, matchId, _options).pipe(map((apiResponse: HttpInfo<GetMatchesStatusOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionReportWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisReport>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDynamicExecutionReport(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDynamicExecutionReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete
     * Get dynamic execution report
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionReport(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisReport> {
        return this.getDynamicExecutionReportWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisReport>) => apiResponse.data));
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DynamicExecutionStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDynamicExecutionStatus(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDynamicExecutionStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get dynamic execution status
     * @param analysisId Analysis ID
     */
    public getDynamicExecutionStatus(analysisId: number, _options?: ConfigurationOptions): Observable<DynamicExecutionStatusResponse> {
        return this.getDynamicExecutionStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<DynamicExecutionStatusResponse>) => apiResponse.data));
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param analysisId Analysis ID
     * @param startMatchingForAnalysisInputBody
     */
    public startAnalysisFunctionMatchingWithHttpInfo(analysisId: number, startMatchingForAnalysisInputBody: StartMatchingForAnalysisInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<StartMatchingOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startAnalysisFunctionMatching(analysisId, startMatchingForAnalysisInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startAnalysisFunctionMatchingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an analysis
     * @param analysisId Analysis ID
     * @param startMatchingForAnalysisInputBody
     */
    public startAnalysisFunctionMatching(analysisId: number, startMatchingForAnalysisInputBody: StartMatchingForAnalysisInputBody, _options?: ConfigurationOptions): Observable<StartMatchingOutputBody> {
        return this.startAnalysisFunctionMatchingWithHttpInfo(analysisId, startMatchingForAnalysisInputBody, _options).pipe(map((apiResponse: HttpInfo<StartMatchingOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisAutoUnstripStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AutoUnstripStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisAutoUnstripStatus(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisAutoUnstripStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the auto-unstrip status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisAutoUnstripStatus(analysisId: number, _options?: ConfigurationOptions): Observable<AutoUnstripStatusOutputBody> {
        return this.v3GetAnalysisAutoUnstripStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AutoUnstripStatusOutputBody>) => apiResponse.data));
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
    public v3GetAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, searchOperator?: 'CONTAINS' | 'STARTS_WITH', functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysisStringsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisStrings(analysisId, page, pageSize, search, searchOperator, functionSearch, orderBy, sortOrder, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisStringsWithHttpInfo(rsp)));
            }));
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
    public v3GetAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, searchOperator?: 'CONTAINS' | 'STARTS_WITH', functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListAnalysisStringsOutputBody> {
        return this.v3GetAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, searchOperator, functionSearch, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<ListAnalysisStringsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisStringsStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAnalysisStringsStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisStringsStatus(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisStringsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the string-extraction status for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisStringsStatus(analysisId: number, _options?: ConfigurationOptions): Observable<GetAnalysisStringsStatusOutputBody> {
        return this.v3GetAnalysisStringsStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<GetAnalysisStringsStatusOutputBody>) => apiResponse.data));
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
    public v3ListAnalysesWithHttpInfo(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListAnalyses(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, pageSize, nextPageToken, orderBy, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListAnalysesWithHttpInfo(rsp)));
            }));
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
    public v3ListAnalyses(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListAnalysesOutputBody> {
        return this.v3ListAnalysesWithHttpInfo(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, pageSize, nextPageToken, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<ListAnalysesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     */
    public v3ListExampleAnalysesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListExampleAnalysesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListExampleAnalyses(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListExampleAnalysesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the curated example Analyses.
     * List example analyses
     */
    public v3ListExampleAnalyses(_options?: ConfigurationOptions): Observable<ListExampleAnalysesOutputBody> {
        return this.v3ListExampleAnalysesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListExampleAnalysesOutputBody>) => apiResponse.data));
    }

}

import { BinariesApiRequestFactory, BinariesApiResponseProcessor} from "../apis/BinariesApi";
export class ObservableBinariesApi {
    private requestFactory: BinariesApiRequestFactory;
    private responseProcessor: BinariesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BinariesApiRequestFactory,
        responseProcessor?: BinariesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BinariesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BinariesApiResponseProcessor();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAdditionalDetailsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryAdditionalDetails(binaryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryAdditionalDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails(binaryId: number, _options?: ConfigurationOptions): Observable<GetAdditionalDetailsOutputBody> {
        return this.getBinaryAdditionalDetailsWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetAdditionalDetailsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryAdditionalDetailsStatus(binaryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryAdditionalDetailsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus(binaryId: number, _options?: ConfigurationOptions): Observable<GetAdditionalDetailsStatusOutputBody> {
        return this.getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetAdditionalDetailsStatusOutputBody>) => apiResponse.data));
    }

}

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";
export class ObservableCollectionsApi {
    private requestFactory: CollectionsApiRequestFactory;
    private responseProcessor: CollectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionsApiResponseProcessor();
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param createCollectionInputBody
     */
    public v3CreateCollectionWithHttpInfo(createCollectionInputBody: CreateCollectionInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<CreateCollectionOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CreateCollection(createCollectionInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CreateCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create a collection.
     * @param createCollectionInputBody
     */
    public v3CreateCollection(createCollectionInputBody: CreateCollectionInputBody, _options?: ConfigurationOptions): Observable<CreateCollectionOutputBody> {
        return this.v3CreateCollectionWithHttpInfo(createCollectionInputBody, _options).pipe(map((apiResponse: HttpInfo<CreateCollectionOutputBody>) => apiResponse.data));
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param collectionId
     */
    public v3DeleteCollectionWithHttpInfo(collectionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3DeleteCollection(collectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3DeleteCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Delete a collection.
     * @param collectionId
     */
    public v3DeleteCollection(collectionId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.v3DeleteCollectionWithHttpInfo(collectionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public v3GetCollectionWithHttpInfo(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetCollectionOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetCollection(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetCollectionWithHttpInfo(rsp)));
            }));
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
    public v3GetCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: ConfigurationOptions): Observable<GetCollectionOutputBody> {
        return this.v3GetCollectionWithHttpInfo(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, _options).pipe(map((apiResponse: HttpInfo<GetCollectionOutputBody>) => apiResponse.data));
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
    public v3ListCollectionsWithHttpInfo(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListCollectionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListCollections(searchTerm, filters, limit, offset, orderBy, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListCollectionsWithHttpInfo(rsp)));
            }));
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
    public v3ListCollections(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListCollectionsOutputBody> {
        return this.v3ListCollectionsWithHttpInfo(searchTerm, filters, limit, offset, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<ListCollectionsOutputBody>) => apiResponse.data));
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param collectionId
     * @param patchCollectionInputBody
     */
    public v3PatchCollectionWithHttpInfo(collectionId: number, patchCollectionInputBody: PatchCollectionInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<PatchCollectionOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3PatchCollection(collectionId, patchCollectionInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3PatchCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a collection.
     * @param collectionId
     * @param patchCollectionInputBody
     */
    public v3PatchCollection(collectionId: number, patchCollectionInputBody: PatchCollectionInputBody, _options?: ConfigurationOptions): Observable<PatchCollectionOutputBody> {
        return this.v3PatchCollectionWithHttpInfo(collectionId, patchCollectionInputBody, _options).pipe(map((apiResponse: HttpInfo<PatchCollectionOutputBody>) => apiResponse.data));
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param collectionId
     * @param patchCollectionBinariesInputBody
     */
    public v3PatchCollectionBinariesWithHttpInfo(collectionId: number, patchCollectionBinariesInputBody: PatchCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<PatchCollectionBinariesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3PatchCollectionBinaries(collectionId, patchCollectionBinariesInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3PatchCollectionBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Replace the binaries in a collection.
     * @param collectionId
     * @param patchCollectionBinariesInputBody
     */
    public v3PatchCollectionBinaries(collectionId: number, patchCollectionBinariesInputBody: PatchCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<PatchCollectionBinariesOutputBody> {
        return this.v3PatchCollectionBinariesWithHttpInfo(collectionId, patchCollectionBinariesInputBody, _options).pipe(map((apiResponse: HttpInfo<PatchCollectionBinariesOutputBody>) => apiResponse.data));
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param collectionId
     * @param patchCollectionTagsInputBody
     */
    public v3PatchCollectionTagsWithHttpInfo(collectionId: number, patchCollectionTagsInputBody: PatchCollectionTagsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<PatchCollectionTagsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3PatchCollectionTags(collectionId, patchCollectionTagsInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3PatchCollectionTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace the tags on a collection.
     * @param collectionId
     * @param patchCollectionTagsInputBody
     */
    public v3PatchCollectionTags(collectionId: number, patchCollectionTagsInputBody: PatchCollectionTagsInputBody, _options?: ConfigurationOptions): Observable<PatchCollectionTagsOutputBody> {
        return this.v3PatchCollectionTagsWithHttpInfo(collectionId, patchCollectionTagsInputBody, _options).pipe(map((apiResponse: HttpInfo<PatchCollectionTagsOutputBody>) => apiResponse.data));
    }

}

import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";
export class ObservableConversationsApi {
    private requestFactory: ConversationsApiRequestFactory;
    private responseProcessor: ConversationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversationsApiRequestFactory,
        responseProcessor?: ConversationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConversationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConversationsApiResponseProcessor();
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param id Conversation UUID
     */
    public cancelRunWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<StatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelRun(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelRunWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel an active run
     * @param id Conversation UUID
     */
    public cancelRun(id: string, _options?: ConfigurationOptions): Observable<StatusResponse> {
        return this.cancelRunWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<StatusResponse>) => apiResponse.data));
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param id Conversation UUID
     * @param confirmToolInputBody
     */
    public confirmToolWithHttpInfo(id: string, confirmToolInputBody: ConfirmToolInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<StatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.confirmTool(id, confirmToolInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmToolWithHttpInfo(rsp)));
            }));
    }

    /**
     * Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation
     * Approve or reject a pending tool confirmation
     * @param id Conversation UUID
     * @param confirmToolInputBody
     */
    public confirmTool(id: string, confirmToolInputBody: ConfirmToolInputBody, _options?: ConfigurationOptions): Observable<StatusResponse> {
        return this.confirmToolWithHttpInfo(id, confirmToolInputBody, _options).pipe(map((apiResponse: HttpInfo<StatusResponse>) => apiResponse.data));
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param createConversationRequest
     */
    public createConversationWithHttpInfo(createConversationRequest: CreateConversationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Conversation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createConversation(createConversationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConversationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Create a new conversation
     * @param createConversationRequest
     */
    public createConversation(createConversationRequest: CreateConversationRequest, _options?: ConfigurationOptions): Observable<Conversation> {
        return this.createConversationWithHttpInfo(createConversationRequest, _options).pipe(map((apiResponse: HttpInfo<Conversation>) => apiResponse.data));
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param id Conversation UUID
     */
    public getConversationWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<ConversationWithEvents>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConversation(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConversationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found
     * Get a conversation with its events
     * @param id Conversation UUID
     */
    public getConversation(id: string, _options?: ConfigurationOptions): Observable<ConversationWithEvents> {
        return this.getConversationWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ConversationWithEvents>) => apiResponse.data));
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     */
    public listConversationsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<Conversation>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listConversations(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConversationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all conversations owned by the authenticated user, ordered by most recently updated.
     * List conversations for the authenticated user
     */
    public listConversations(_options?: ConfigurationOptions): Observable<Array<Conversation>> {
        return this.listConversationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Conversation>>) => apiResponse.data));
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param id Conversation UUID
     * @param sendMessageRequest
     */
    public sendMessageWithHttpInfo(id: string, sendMessageRequest: SendMessageRequest, _options?: ConfigurationOptions): Observable<HttpInfo<StatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendMessage(id, sendMessageRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active
     * Send a message and start an agentic run
     * @param id Conversation UUID
     * @param sendMessageRequest
     */
    public sendMessage(id: string, sendMessageRequest: SendMessageRequest, _options?: ConfigurationOptions): Observable<StatusResponse> {
        return this.sendMessageWithHttpInfo(id, sendMessageRequest, _options).pipe(map((apiResponse: HttpInfo<StatusResponse>) => apiResponse.data));
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param id Conversation UUID
     * @param [lastEventId] Replay events after this ID
     */
    public streamEventsWithHttpInfo(id: string, lastEventId?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<StreamEvents200ResponseInner>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamEvents(id, lastEventId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.
     * Stream conversation events (SSE)
     * @param id Conversation UUID
     * @param [lastEventId] Replay events after this ID
     */
    public streamEvents(id: string, lastEventId?: number, _options?: ConfigurationOptions): Observable<Array<StreamEvents200ResponseInner>> {
        return this.streamEventsWithHttpInfo(id, lastEventId, _options).pipe(map((apiResponse: HttpInfo<Array<StreamEvents200ResponseInner>>) => apiResponse.data));
    }

}

import { FunctionsAIDecompilationApiRequestFactory, FunctionsAIDecompilationApiResponseProcessor} from "../apis/FunctionsAIDecompilationApi";
export class ObservableFunctionsAIDecompilationApi {
    private requestFactory: FunctionsAIDecompilationApiRequestFactory;
    private responseProcessor: FunctionsAIDecompilationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsAIDecompilationApiRequestFactory,
        responseProcessor?: FunctionsAIDecompilationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsAIDecompilationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsAIDecompilationApiResponseProcessor();
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param functionId Function ID
     * @param [contextAware] Use context-aware decompilation
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     */
    public createAiDecompilationWithHttpInfo(functionId: number, contextAware?: boolean, temperature?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CreateAIDecompOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAiDecompilation(functionId, contextAware, temperature, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAiDecompilationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param functionId Function ID
     * @param [contextAware] Use context-aware decompilation
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     */
    public createAiDecompilation(functionId: number, contextAware?: boolean, temperature?: number, _options?: ConfigurationOptions): Observable<CreateAIDecompOutputBody> {
        return this.createAiDecompilationWithHttpInfo(functionId, contextAware, temperature, _options).pipe(map((apiResponse: HttpInfo<CreateAIDecompOutputBody>) => apiResponse.data));
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param functionId Function ID
     * @param line Line number of the comment to delete
     */
    public deleteAiDecompilationInlineCommentWithHttpInfo(functionId: number, line: number, _options?: ConfigurationOptions): Observable<HttpInfo<CommentsData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAiDecompilationInlineComment(functionId, line, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAiDecompilationInlineCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Delete a single inline comment
     * @param functionId Function ID
     * @param line Line number of the comment to delete
     */
    public deleteAiDecompilationInlineComment(functionId: number, line: number, _options?: ConfigurationOptions): Observable<CommentsData> {
        return this.deleteAiDecompilationInlineCommentWithHttpInfo(functionId, line, _options).pipe(map((apiResponse: HttpInfo<CommentsData>) => apiResponse.data));
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param functionId Function ID
     */
    public getAiDecompilationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DecompilationData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilation(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation result
     * @param functionId Function ID
     */
    public getAiDecompilation(functionId: number, _options?: ConfigurationOptions): Observable<DecompilationData> {
        return this.getAiDecompilationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<DecompilationData>) => apiResponse.data));
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CommentsData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationInlineComments(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationInlineCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation inline comments
     * @param functionId Function ID
     */
    public getAiDecompilationInlineComments(functionId: number, _options?: ConfigurationOptions): Observable<CommentsData> {
        return this.getAiDecompilationInlineCommentsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<CommentsData>) => apiResponse.data));
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsStatusWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkflowProgress>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationInlineCommentsStatus(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationInlineCommentsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get inline comments generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationInlineCommentsStatus(functionId: number, _options?: ConfigurationOptions): Observable<WorkflowProgress> {
        return this.getAiDecompilationInlineCommentsStatusWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<WorkflowProgress>) => apiResponse.data));
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationStatusWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkflowProgress>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationStatus(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationStatus(functionId: number, _options?: ConfigurationOptions): Observable<WorkflowProgress> {
        return this.getAiDecompilationStatusWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<WorkflowProgress>) => apiResponse.data));
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<SummaryData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationSummary(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get AI decompilation summary
     * @param functionId Function ID
     */
    public getAiDecompilationSummary(functionId: number, _options?: ConfigurationOptions): Observable<SummaryData> {
        return this.getAiDecompilationSummaryWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<SummaryData>) => apiResponse.data));
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryStatusWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkflowProgress>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationSummaryStatus(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationSummaryStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get summary generation workflow status
     * @param functionId Function ID
     */
    public getAiDecompilationSummaryStatus(functionId: number, _options?: ConfigurationOptions): Observable<WorkflowProgress> {
        return this.getAiDecompilationSummaryStatusWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<WorkflowProgress>) => apiResponse.data));
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param functionId Function ID
     */
    public getAiDecompilationTokenisedWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TokenisedData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationTokenised(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationTokenisedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get tokenised AI decompilation with function mapping
     * @param functionId Function ID
     */
    public getAiDecompilationTokenised(functionId: number, _options?: ConfigurationOptions): Observable<TokenisedData> {
        return this.getAiDecompilationTokenisedWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<TokenisedData>) => apiResponse.data));
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param functionId Function ID
     * @param patchCommentBody
     */
    public patchAiDecompilationInlineCommentWithHttpInfo(functionId: number, patchCommentBody: PatchCommentBody, _options?: ConfigurationOptions): Observable<HttpInfo<CommentsData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.patchAiDecompilationInlineComment(functionId, patchCommentBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchAiDecompilationInlineCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Update a single inline comment
     * @param functionId Function ID
     * @param patchCommentBody
     */
    public patchAiDecompilationInlineComment(functionId: number, patchCommentBody: PatchCommentBody, _options?: ConfigurationOptions): Observable<CommentsData> {
        return this.patchAiDecompilationInlineCommentWithHttpInfo(functionId, patchCommentBody, _options).pipe(map((apiResponse: HttpInfo<CommentsData>) => apiResponse.data));
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RegenerateOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.regenerateAiDecompilationInlineComments(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regenerateAiDecompilationInlineCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineComments(functionId: number, _options?: ConfigurationOptions): Observable<RegenerateOutputBody> {
        return this.regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<RegenerateOutputBody>) => apiResponse.data));
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummaryWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RegenerateOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.regenerateAiDecompilationSummary(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regenerateAiDecompilationSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummary(functionId: number, _options?: ConfigurationOptions): Observable<RegenerateOutputBody> {
        return this.regenerateAiDecompilationSummaryWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<RegenerateOutputBody>) => apiResponse.data));
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<StreamAiDecompilation200ResponseInner>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamAiDecompilation(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamAiDecompilationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilation(functionId: number, _options?: ConfigurationOptions): Observable<Array<StreamAiDecompilation200ResponseInner>> {
        return this.streamAiDecompilationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<Array<StreamAiDecompilation200ResponseInner>>) => apiResponse.data));
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public upsertAiDecompilationOverridesWithHttpInfo(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<UpsertOverridesData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.upsertAiDecompilationOverrides(functionId, upsertOverridesInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertAiDecompilationOverridesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public upsertAiDecompilationOverrides(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: ConfigurationOptions): Observable<UpsertOverridesData> {
        return this.upsertAiDecompilationOverridesWithHttpInfo(functionId, upsertOverridesInputBody, _options).pipe(map((apiResponse: HttpInfo<UpsertOverridesData>) => apiResponse.data));
    }

}

import { FunctionsCoreApiRequestFactory, FunctionsCoreApiResponseProcessor} from "../apis/FunctionsCoreApi";
export class ObservableFunctionsCoreApi {
    private requestFactory: FunctionsCoreApiRequestFactory;
    private responseProcessor: FunctionsCoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsCoreApiRequestFactory,
        responseProcessor?: FunctionsCoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsCoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsCoreApiResponseProcessor();
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param functionId Function ID
     * @param addCalleeInputBody
     */
    public addFunctionCalleeWithHttpInfo(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addFunctionCallee(functionId, addCalleeInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFunctionCalleeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Add a callee to a function
     * @param functionId Function ID
     * @param addCalleeInputBody
     */
    public addFunctionCallee(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: ConfigurationOptions): Observable<any> {
        return this.addFunctionCalleeWithHttpInfo(functionId, addCalleeInputBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param functionId Function ID
     * @param addUserStringToFunctionInputBody
     */
    public addUserStringToFunctionWithHttpInfo(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addUserStringToFunction(functionId, addUserStringToFunctionInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserStringToFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to a function.
     * @param functionId Function ID
     * @param addUserStringToFunctionInputBody
     */
    public addUserStringToFunction(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: ConfigurationOptions): Observable<any> {
        return this.addUserStringToFunctionWithHttpInfo(functionId, addUserStringToFunctionInputBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocksWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DisassemblyOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionBlocks(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionBlocksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks(functionId: number, _options?: ConfigurationOptions): Observable<DisassemblyOutputBody> {
        return this.getFunctionBlocksWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<DisassemblyOutputBody>) => apiResponse.data));
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallersWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CallEdgesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionCalleesCallers(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionCalleesCallersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers(functionId: number, _options?: ConfigurationOptions): Observable<CallEdgesOutputBody> {
        return this.getFunctionCalleesCallersWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<CallEdgesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilitiesWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CapabilitiesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionCapabilities(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionCapabilitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities(functionId: number, _options?: ConfigurationOptions): Observable<CapabilitiesOutputBody> {
        return this.getFunctionCapabilitiesWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<CapabilitiesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetailsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionDetailsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionDetails(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails(functionId: number, _options?: ConfigurationOptions): Observable<FunctionDetailsOutputBody> {
        return this.getFunctionDetailsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<FunctionDetailsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param functionId Function ID
     */
    public getFunctionIndirectCallSitesWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<IndirectCallSitesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionIndirectCallSites(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionIndirectCallSitesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get indirect call sites for a function
     * @param functionId Function ID
     */
    public getFunctionIndirectCallSites(functionId: number, _options?: ConfigurationOptions): Observable<IndirectCallSitesOutputBody> {
        return this.getFunctionIndirectCallSitesWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<IndirectCallSitesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStringsWithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFunctionStringsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionStrings(functionId, page, pageSize, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionStringsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStrings(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<ListFunctionStringsOutputBody> {
        return this.getFunctionStringsWithHttpInfo(functionId, page, pageSize, search, _options).pipe(map((apiResponse: HttpInfo<ListFunctionStringsOutputBody>) => apiResponse.data));
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param functionIds Function IDs to fetch edges for.
     */
    public getFunctionsCalleesCallersWithHttpInfo(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<CallEdgesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionsCalleesCallers(functionIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionsCalleesCallersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get callees and callers for many functions
     * @param functionIds Function IDs to fetch edges for.
     */
    public getFunctionsCalleesCallers(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<CallEdgesOutputBody> {
        return this.getFunctionsCalleesCallersWithHttpInfo(functionIds, _options).pipe(map((apiResponse: HttpInfo<CallEdgesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchesWithHttpInfo(matchId?: string, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<GetMatchesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionsMatches(matchId, functionIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionsMatchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatches(matchId?: string, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<GetMatchesOutputBody> {
        return this.getFunctionsMatchesWithHttpInfo(matchId, functionIds, _options).pipe(map((apiResponse: HttpInfo<GetMatchesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchingStatusWithHttpInfo(matchId?: string, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<GetMatchesStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionsMatchingStatus(matchId, functionIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionsMatchingStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param [matchId] Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest.
     * @param [functionIds] Source function IDs whose matches to fetch. Required unless match_id is supplied.
     */
    public getFunctionsMatchingStatus(matchId?: string, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<GetMatchesStatusOutputBody> {
        return this.getFunctionsMatchingStatusWithHttpInfo(matchId, functionIds, _options).pipe(map((apiResponse: HttpInfo<GetMatchesStatusOutputBody>) => apiResponse.data));
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param analysisId Analysis ID
     * @param importedFunctionId Imported function ID
     */
    public getImportedFunctionWithHttpInfo(analysisId: number, importedFunctionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ImportedFunctionDetailOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getImportedFunction(analysisId, importedFunctionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImportedFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get an imported function with its callers
     * @param analysisId Analysis ID
     * @param importedFunctionId Imported function ID
     */
    public getImportedFunction(analysisId: number, importedFunctionId: number, _options?: ConfigurationOptions): Observable<ImportedFunctionDetailOutputBody> {
        return this.getImportedFunctionWithHttpInfo(analysisId, importedFunctionId, _options).pipe(map((apiResponse: HttpInfo<ImportedFunctionDetailOutputBody>) => apiResponse.data));
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysisFunctionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAnalysisFunctions(analysisId, offset, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAnalysisFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctions(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<ListAnalysisFunctionsOutputBody> {
        return this.listAnalysisFunctionsWithHttpInfo(analysisId, offset, limit, _options).pipe(map((apiResponse: HttpInfo<ListAnalysisFunctionsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listImportedFunctionsWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListImportedFunctionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listImportedFunctions(analysisId, offset, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listImportedFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List imported functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listImportedFunctions(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<ListImportedFunctionsOutputBody> {
        return this.listImportedFunctionsWithHttpInfo(analysisId, offset, limit, _options).pipe(map((apiResponse: HttpInfo<ListImportedFunctionsOutputBody>) => apiResponse.data));
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param startMatchingForFunctionsInputBody
     */
    public startFunctionsMatchingWithHttpInfo(startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<StartMatchingOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startFunctionsMatching(startMatchingForFunctionsInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startFunctionsMatchingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Start function matching for an explicit set of functions
     * @param startMatchingForFunctionsInputBody
     */
    public startFunctionsMatching(startMatchingForFunctionsInputBody: StartMatchingForFunctionsInputBody, _options?: ConfigurationOptions): Observable<StartMatchingOutputBody> {
        return this.startFunctionsMatchingWithHttpInfo(startMatchingForFunctionsInputBody, _options).pipe(map((apiResponse: HttpInfo<StartMatchingOutputBody>) => apiResponse.data));
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param canonicalizeNamesInputBody
     */
    public v3CanonicalizeFunctionNamesWithHttpInfo(canonicalizeNamesInputBody: CanonicalizeNamesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<CanonicalizeNamesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CanonicalizeFunctionNames(canonicalizeNamesInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CanonicalizeFunctionNamesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable
     * Canonicalize a batch of function names
     * @param canonicalizeNamesInputBody
     */
    public v3CanonicalizeFunctionNames(canonicalizeNamesInputBody: CanonicalizeNamesInputBody, _options?: ConfigurationOptions): Observable<CanonicalizeNamesOutputBody> {
        return this.v3CanonicalizeFunctionNamesWithHttpInfo(canonicalizeNamesInputBody, _options).pipe(map((apiResponse: HttpInfo<CanonicalizeNamesOutputBody>) => apiResponse.data));
    }

}

import { FunctionsDataTypesApiRequestFactory, FunctionsDataTypesApiResponseProcessor} from "../apis/FunctionsDataTypesApi";
export class ObservableFunctionsDataTypesApi {
    private requestFactory: FunctionsDataTypesApiRequestFactory;
    private responseProcessor: FunctionsDataTypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsDataTypesApiRequestFactory,
        responseProcessor?: FunctionsDataTypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsDataTypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsDataTypesApiResponseProcessor();
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param analysisId Analysis ID
     * @param batchUpdateDataTypesInputBody
     */
    public batchUpdateFunctionDataTypesWithHttpInfo(analysisId: number, batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<BatchUpdateDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchUpdateFunctionDataTypes(analysisId, batchUpdateDataTypesInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchUpdateFunctionDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch update function data types
     * @param analysisId Analysis ID
     * @param batchUpdateDataTypesInputBody
     */
    public batchUpdateFunctionDataTypes(analysisId: number, batchUpdateDataTypesInputBody: BatchUpdateDataTypesInputBody, _options?: ConfigurationOptions): Observable<BatchUpdateDataTypesOutputBody> {
        return this.batchUpdateFunctionDataTypesWithHttpInfo(analysisId, batchUpdateDataTypesInputBody, _options).pipe(map((apiResponse: HttpInfo<BatchUpdateDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public getFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DataTypesEntry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionDataTypes(analysisId, functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get data types for a single function
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public getFunctionDataTypes(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<DataTypesEntry> {
        return this.getFunctionDataTypesWithHttpInfo(analysisId, functionId, _options).pipe(map((apiResponse: HttpInfo<DataTypesEntry>) => apiResponse.data));
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsDataTypesWithHttpInfo(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysisFunctionsDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAnalysisFunctionsDataTypes(analysisId, offset, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAnalysisFunctionsDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * List data types for all functions in an analysis
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset. Defaults to 0.
     * @param [limit] Page size. Defaults to 100.
     */
    public listAnalysisFunctionsDataTypes(analysisId: number, offset?: number, limit?: number, _options?: ConfigurationOptions): Observable<ListAnalysisFunctionsDataTypesOutputBody> {
        return this.listAnalysisFunctionsDataTypesWithHttpInfo(analysisId, offset, limit, _options).pipe(map((apiResponse: HttpInfo<ListAnalysisFunctionsDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param functionIds Function IDs to fetch data-types for.
     */
    public listFunctionsDataTypesWithHttpInfo(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<ListFunctionsDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFunctionsDataTypes(functionIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFunctionsDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get data types for many functions
     * @param functionIds Function IDs to fetch data-types for.
     */
    public listFunctionsDataTypes(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<ListFunctionsDataTypesOutputBody> {
        return this.listFunctionsDataTypesWithHttpInfo(functionIds, _options).pipe(map((apiResponse: HttpInfo<ListFunctionsDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateDataTypesInputBody
     */
    public updateFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, updateDataTypesInputBody: UpdateDataTypesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFunctionDataTypes(analysisId, functionId, updateDataTypesInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFunctionDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Update function data types
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateDataTypesInputBody
     */
    public updateFunctionDataTypes(analysisId: number, functionId: number, updateDataTypesInputBody: UpdateDataTypesInputBody, _options?: ConfigurationOptions): Observable<UpdateDataTypesOutputBody> {
        return this.updateFunctionDataTypesWithHttpInfo(analysisId, functionId, updateDataTypesInputBody, _options).pipe(map((apiResponse: HttpInfo<UpdateDataTypesOutputBody>) => apiResponse.data));
    }

}

import { FunctionsRenamingHistoryApiRequestFactory, FunctionsRenamingHistoryApiResponseProcessor} from "../apis/FunctionsRenamingHistoryApi";
export class ObservableFunctionsRenamingHistoryApi {
    private requestFactory: FunctionsRenamingHistoryApiRequestFactory;
    private responseProcessor: FunctionsRenamingHistoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsRenamingHistoryApiRequestFactory,
        responseProcessor?: FunctionsRenamingHistoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsRenamingHistoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsRenamingHistoryApiResponseProcessor();
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param batchRenameInputBody
     */
    public batchRenameFunctionsWithHttpInfo(batchRenameInputBody: BatchRenameInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<BatchRenameOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchRenameFunctions(batchRenameInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchRenameFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param batchRenameInputBody
     */
    public batchRenameFunctions(batchRenameInputBody: BatchRenameInputBody, _options?: ConfigurationOptions): Observable<BatchRenameOutputBody> {
        return this.batchRenameFunctionsWithHttpInfo(batchRenameInputBody, _options).pipe(map((apiResponse: HttpInfo<BatchRenameOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param functionId Function ID
     */
    public getFunctionHistoryWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<HistoryEntry>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionHistory(functionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function name history
     * @param functionId Function ID
     */
    public getFunctionHistory(functionId: number, _options?: ConfigurationOptions): Observable<Array<HistoryEntry>> {
        return this.getFunctionHistoryWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<Array<HistoryEntry>>) => apiResponse.data));
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param functionId Function ID
     * @param renameInputBody
     */
    public renameFunctionWithHttpInfo(functionId: number, renameInputBody: RenameInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<RenameOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.renameFunction(functionId, renameInputBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param functionId Function ID
     * @param renameInputBody
     */
    public renameFunction(functionId: number, renameInputBody: RenameInputBody, _options?: ConfigurationOptions): Observable<RenameOutputBody> {
        return this.renameFunctionWithHttpInfo(functionId, renameInputBody, _options).pipe(map((apiResponse: HttpInfo<RenameOutputBody>) => apiResponse.data));
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionNameWithHttpInfo(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.revertFunctionName(functionId, historyId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revertFunctionNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<any> {
        return this.revertFunctionNameWithHttpInfo(functionId, historyId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { IAMUsersApiRequestFactory, IAMUsersApiResponseProcessor} from "../apis/IAMUsersApi";
export class ObservableIAMUsersApi {
    private requestFactory: IAMUsersApiRequestFactory;
    private responseProcessor: IAMUsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IAMUsersApiRequestFactory,
        responseProcessor?: IAMUsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IAMUsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IAMUsersApiResponseProcessor();
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     */
    public getMeWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMe(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get current user
     */
    public getMe(_options?: ConfigurationOptions): Observable<User> {
        return this.getMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     */
    public getMyPermissionsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Permissions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMyPermissions(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.
     * Get current user permissions
     */
    public getMyPermissions(_options?: ConfigurationOptions): Observable<Permissions> {
        return this.getMyPermissionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Permissions>) => apiResponse.data));
    }

}

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class ObservableReportsApi {
    private requestFactory: ReportsApiRequestFactory;
    private responseProcessor: ReportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportsApiResponseProcessor();
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param analysisId Analysis ID
     */
    public createPdfReportWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GeneratePDFOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPdfReport(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPdfReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an asynchronous PDF report generation workflow for the given analysis. Poll status and download the resulting PDF using the same analysis ID. Idempotent: if a workflow is already running for this analysis and user, the response sets `already_running: true` and the caller rejoins the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Start PDF report generation
     * @param analysisId Analysis ID
     */
    public createPdfReport(analysisId: number, _options?: ConfigurationOptions): Observable<GeneratePDFOutputBody> {
        return this.createPdfReportWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<GeneratePDFOutputBody>) => apiResponse.data));
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param analysisId Analysis ID
     */
    public downloadPdfReportWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.downloadPdfReport(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadPdfReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed
     * Download generated PDF report
     * @param analysisId Analysis ID
     */
    public downloadPdfReport(analysisId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.downloadPdfReportWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param analysisId Analysis ID
     */
    public getPdfReportStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkflowProgress>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPdfReportStatus(analysisId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPdfReportStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns live workflow progress for the given analysis. Returns 404 when no report generation exists for this analysis or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get PDF report workflow status
     * @param analysisId Analysis ID
     */
    public getPdfReportStatus(analysisId: number, _options?: ConfigurationOptions): Observable<WorkflowProgress> {
        return this.getPdfReportStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<WorkflowProgress>) => apiResponse.data));
    }

}
