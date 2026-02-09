import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AdditionalDetailsStatusResponse } from '../models/AdditionalDetailsStatusResponse';
import { Addr } from '../models/Addr';
import { AiDecompilationRating } from '../models/AiDecompilationRating';
import { AiUnstripRequest } from '../models/AiUnstripRequest';
import { AnalysisAccessInfo } from '../models/AnalysisAccessInfo';
import { AnalysisConfig } from '../models/AnalysisConfig';
import { AnalysisCreateRequest } from '../models/AnalysisCreateRequest';
import { AnalysisCreateResponse } from '../models/AnalysisCreateResponse';
import { AnalysisDetailResponse } from '../models/AnalysisDetailResponse';
import { AnalysisFunctionMapping } from '../models/AnalysisFunctionMapping';
import { AnalysisFunctionMatchingRequest } from '../models/AnalysisFunctionMatchingRequest';
import { AnalysisFunctions } from '../models/AnalysisFunctions';
import { AnalysisFunctionsList } from '../models/AnalysisFunctionsList';
import { AnalysisRecord } from '../models/AnalysisRecord';
import { AnalysisScope } from '../models/AnalysisScope';
import { AnalysisStringsResponse } from '../models/AnalysisStringsResponse';
import { AnalysisStringsStatusResponse } from '../models/AnalysisStringsStatusResponse';
import { AnalysisTags } from '../models/AnalysisTags';
import { AnalysisUpdateRequest } from '../models/AnalysisUpdateRequest';
import { AnalysisUpdateTagsRequest } from '../models/AnalysisUpdateTagsRequest';
import { AnalysisUpdateTagsResponse } from '../models/AnalysisUpdateTagsResponse';
import { AppApiRestV2AnalysesEnumsDynamicExecutionStatus } from '../models/AppApiRestV2AnalysesEnumsDynamicExecutionStatus';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { AppApiRestV2CollectionsEnumsOrderBy } from '../models/AppApiRestV2CollectionsEnumsOrderBy';
import { AppApiRestV2FunctionsResponsesFunction } from '../models/AppApiRestV2FunctionsResponsesFunction';
import { AppApiRestV2FunctionsTypesFunction } from '../models/AppApiRestV2FunctionsTypesFunction';
import { AppServicesDynamicExecutionSchemasDynamicExecutionStatus } from '../models/AppServicesDynamicExecutionSchemasDynamicExecutionStatus';
import { Argument } from '../models/Argument';
import { AutoUnstripRequest } from '../models/AutoUnstripRequest';
import { AutoUnstripResponse } from '../models/AutoUnstripResponse';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAdditionalDetailsStatusResponse } from '../models/BaseResponseAdditionalDetailsStatusResponse';
import { BaseResponseAnalysisCreateResponse } from '../models/BaseResponseAnalysisCreateResponse';
import { BaseResponseAnalysisDetailResponse } from '../models/BaseResponseAnalysisDetailResponse';
import { BaseResponseAnalysisFunctionMapping } from '../models/BaseResponseAnalysisFunctionMapping';
import { BaseResponseAnalysisFunctions } from '../models/BaseResponseAnalysisFunctions';
import { BaseResponseAnalysisFunctionsList } from '../models/BaseResponseAnalysisFunctionsList';
import { BaseResponseAnalysisStringsResponse } from '../models/BaseResponseAnalysisStringsResponse';
import { BaseResponseAnalysisStringsStatusResponse } from '../models/BaseResponseAnalysisStringsStatusResponse';
import { BaseResponseAnalysisTags } from '../models/BaseResponseAnalysisTags';
import { BaseResponseAnalysisUpdateTagsResponse } from '../models/BaseResponseAnalysisUpdateTagsResponse';
import { BaseResponseBasic } from '../models/BaseResponseBasic';
import { BaseResponseBinariesRelatedStatusResponse } from '../models/BaseResponseBinariesRelatedStatusResponse';
import { BaseResponseBinaryAdditionalResponse } from '../models/BaseResponseBinaryAdditionalResponse';
import { BaseResponseBinaryDetailsResponse } from '../models/BaseResponseBinaryDetailsResponse';
import { BaseResponseBinaryExternalsResponse } from '../models/BaseResponseBinaryExternalsResponse';
import { BaseResponseBinarySearchResponse } from '../models/BaseResponseBinarySearchResponse';
import { BaseResponseBlockCommentsGenerationForFunctionResponse } from '../models/BaseResponseBlockCommentsGenerationForFunctionResponse';
import { BaseResponseBlockCommentsOverviewGenerationResponse } from '../models/BaseResponseBlockCommentsOverviewGenerationResponse';
import { BaseResponseBool } from '../models/BaseResponseBool';
import { BaseResponseCalleesCallerFunctionsResponse } from '../models/BaseResponseCalleesCallerFunctionsResponse';
import { BaseResponseCapabilities } from '../models/BaseResponseCapabilities';
import { BaseResponseCheckSecurityChecksTaskResponse } from '../models/BaseResponseCheckSecurityChecksTaskResponse';
import { BaseResponseChildBinariesResponse } from '../models/BaseResponseChildBinariesResponse';
import { BaseResponseCollectionBinariesUpdateResponse } from '../models/BaseResponseCollectionBinariesUpdateResponse';
import { BaseResponseCollectionResponse } from '../models/BaseResponseCollectionResponse';
import { BaseResponseCollectionSearchResponse } from '../models/BaseResponseCollectionSearchResponse';
import { BaseResponseCollectionTagsUpdateResponse } from '../models/BaseResponseCollectionTagsUpdateResponse';
import { BaseResponseCommentResponse } from '../models/BaseResponseCommentResponse';
import { BaseResponseCommunities } from '../models/BaseResponseCommunities';
import { BaseResponseConfigResponse } from '../models/BaseResponseConfigResponse';
import { BaseResponseCreated } from '../models/BaseResponseCreated';
import { BaseResponseDict } from '../models/BaseResponseDict';
import { BaseResponseDynamicExecutionStatus } from '../models/BaseResponseDynamicExecutionStatus';
import { BaseResponseExternalResponse } from '../models/BaseResponseExternalResponse';
import { BaseResponseFunctionBlocksResponse } from '../models/BaseResponseFunctionBlocksResponse';
import { BaseResponseFunctionCapabilityResponse } from '../models/BaseResponseFunctionCapabilityResponse';
import { BaseResponseFunctionDataTypes } from '../models/BaseResponseFunctionDataTypes';
import { BaseResponseFunctionDataTypesList } from '../models/BaseResponseFunctionDataTypesList';
import { BaseResponseFunctionSearchResponse } from '../models/BaseResponseFunctionSearchResponse';
import { BaseResponseFunctionStringsResponse } from '../models/BaseResponseFunctionStringsResponse';
import { BaseResponseFunctionTaskResponse } from '../models/BaseResponseFunctionTaskResponse';
import { BaseResponseFunctionsDetailResponse } from '../models/BaseResponseFunctionsDetailResponse';
import { BaseResponseGenerateFunctionDataTypes } from '../models/BaseResponseGenerateFunctionDataTypes';
import { BaseResponseGenerationStatusList } from '../models/BaseResponseGenerationStatusList';
import { BaseResponseGetAiDecompilationRatingResponse } from '../models/BaseResponseGetAiDecompilationRatingResponse';
import { BaseResponseGetAiDecompilationTask } from '../models/BaseResponseGetAiDecompilationTask';
import { BaseResponseGetMeResponse } from '../models/BaseResponseGetMeResponse';
import { BaseResponseGetPublicUserResponse } from '../models/BaseResponseGetPublicUserResponse';
import { BaseResponseListCollectionResults } from '../models/BaseResponseListCollectionResults';
import { BaseResponseListCommentResponse } from '../models/BaseResponseListCommentResponse';
import { BaseResponseListDieMatch } from '../models/BaseResponseListDieMatch';
import { BaseResponseListFunctionNameHistory } from '../models/BaseResponseListFunctionNameHistory';
import { BaseResponseListSBOM } from '../models/BaseResponseListSBOM';
import { BaseResponseListUserActivityResponse } from '../models/BaseResponseListUserActivityResponse';
import { BaseResponseLoginResponse } from '../models/BaseResponseLoginResponse';
import { BaseResponseLogs } from '../models/BaseResponseLogs';
import { BaseResponseModelsResponse } from '../models/BaseResponseModelsResponse';
import { BaseResponseNetworkOverviewResponse } from '../models/BaseResponseNetworkOverviewResponse';
import { BaseResponseParams } from '../models/BaseResponseParams';
import { BaseResponseProcessDumps } from '../models/BaseResponseProcessDumps';
import { BaseResponseProcessRegistry } from '../models/BaseResponseProcessRegistry';
import { BaseResponseProcessTree } from '../models/BaseResponseProcessTree';
import { BaseResponseQueuedSecurityChecksTaskResponse } from '../models/BaseResponseQueuedSecurityChecksTaskResponse';
import { BaseResponseRecent } from '../models/BaseResponseRecent';
import { BaseResponseSecurityChecksResponse } from '../models/BaseResponseSecurityChecksResponse';
import { BaseResponseStatus } from '../models/BaseResponseStatus';
import { BaseResponseStr } from '../models/BaseResponseStr';
import { BaseResponseTTPS } from '../models/BaseResponseTTPS';
import { BaseResponseTagSearchResponse } from '../models/BaseResponseTagSearchResponse';
import { BaseResponseTaskResponse } from '../models/BaseResponseTaskResponse';
import { BaseResponseUploadResponse } from '../models/BaseResponseUploadResponse';
import { BaseResponseVulnerabilities } from '../models/BaseResponseVulnerabilities';
import { Basic } from '../models/Basic';
import { BinariesRelatedStatusResponse } from '../models/BinariesRelatedStatusResponse';
import { BinariesTaskStatus } from '../models/BinariesTaskStatus';
import { BinaryAdditionalDetailsDataResponse } from '../models/BinaryAdditionalDetailsDataResponse';
import { BinaryAdditionalResponse } from '../models/BinaryAdditionalResponse';
import { BinaryConfig } from '../models/BinaryConfig';
import { BinaryDetailsResponse } from '../models/BinaryDetailsResponse';
import { BinaryExternalsResponse } from '../models/BinaryExternalsResponse';
import { BinarySearchResponse } from '../models/BinarySearchResponse';
import { BinarySearchResult } from '../models/BinarySearchResult';
import { BinaryTaskStatus } from '../models/BinaryTaskStatus';
import { Block } from '../models/Block';
import { BlockCommentsGenerationForFunctionResponse } from '../models/BlockCommentsGenerationForFunctionResponse';
import { CalleeFunctionInfo } from '../models/CalleeFunctionInfo';
import { CalleesCallerFunctionsResponse } from '../models/CalleesCallerFunctionsResponse';
import { CallerFunctionInfo } from '../models/CallerFunctionInfo';
import { Capabilities } from '../models/Capabilities';
import { Capability } from '../models/Capability';
import { CheckSecurityChecksTaskResponse } from '../models/CheckSecurityChecksTaskResponse';
import { ChildBinariesResponse } from '../models/ChildBinariesResponse';
import { CodeSignatureModel } from '../models/CodeSignatureModel';
import { CollectionBinariesUpdateRequest } from '../models/CollectionBinariesUpdateRequest';
import { CollectionBinariesUpdateResponse } from '../models/CollectionBinariesUpdateResponse';
import { CollectionBinaryResponse } from '../models/CollectionBinaryResponse';
import { CollectionCreateRequest } from '../models/CollectionCreateRequest';
import { CollectionListItem } from '../models/CollectionListItem';
import { CollectionResponse } from '../models/CollectionResponse';
import { CollectionResponseBinariesInner } from '../models/CollectionResponseBinariesInner';
import { CollectionScope } from '../models/CollectionScope';
import { CollectionSearchResponse } from '../models/CollectionSearchResponse';
import { CollectionSearchResult } from '../models/CollectionSearchResult';
import { CollectionTagsUpdateRequest } from '../models/CollectionTagsUpdateRequest';
import { CollectionTagsUpdateResponse } from '../models/CollectionTagsUpdateResponse';
import { CollectionUpdateRequest } from '../models/CollectionUpdateRequest';
import { CommentBase } from '../models/CommentBase';
import { CommentResponse } from '../models/CommentResponse';
import { CommentUpdateRequest } from '../models/CommentUpdateRequest';
import { Communities } from '../models/Communities';
import { CommunityMatchPercentages } from '../models/CommunityMatchPercentages';
import { ConfidenceType } from '../models/ConfidenceType';
import { ConfigResponse } from '../models/ConfigResponse';
import { Context } from '../models/Context';
import { Created } from '../models/Created';
import { DecompilationCommentContext } from '../models/DecompilationCommentContext';
import { DieMatch } from '../models/DieMatch';
import { DynamicExecutionStatusInput } from '../models/DynamicExecutionStatusInput';
import { ELFImportModel } from '../models/ELFImportModel';
import { ELFModel } from '../models/ELFModel';
import { ELFRelocation } from '../models/ELFRelocation';
import { ELFSection } from '../models/ELFSection';
import { ELFSecurity } from '../models/ELFSecurity';
import { ELFSegment } from '../models/ELFSegment';
import { ELFSymbol } from '../models/ELFSymbol';
import { ElfDynamicEntry } from '../models/ElfDynamicEntry';
import { EntrypointModel } from '../models/EntrypointModel';
import { Enumeration } from '../models/Enumeration';
import { ErrorModel } from '../models/ErrorModel';
import { ExportModel } from '../models/ExportModel';
import { ExternalResponse } from '../models/ExternalResponse';
import { FileFormat } from '../models/FileFormat';
import { FileHashes } from '../models/FileHashes';
import { FileMetadata } from '../models/FileMetadata';
import { Filters } from '../models/Filters';
import { FunctionBlockDestinationResponse } from '../models/FunctionBlockDestinationResponse';
import { FunctionBlockResponse } from '../models/FunctionBlockResponse';
import { FunctionBlocksResponse } from '../models/FunctionBlocksResponse';
import { FunctionBoundary } from '../models/FunctionBoundary';
import { FunctionCapabilityResponse } from '../models/FunctionCapabilityResponse';
import { FunctionCommentCreateRequest } from '../models/FunctionCommentCreateRequest';
import { FunctionDataTypes } from '../models/FunctionDataTypes';
import { FunctionDataTypesList } from '../models/FunctionDataTypesList';
import { FunctionDataTypesListItem } from '../models/FunctionDataTypesListItem';
import { FunctionDataTypesParams } from '../models/FunctionDataTypesParams';
import { FunctionDataTypesStatus } from '../models/FunctionDataTypesStatus';
import { FunctionHeader } from '../models/FunctionHeader';
import { FunctionInfoInput } from '../models/FunctionInfoInput';
import { FunctionInfoInputFuncDepsInner } from '../models/FunctionInfoInputFuncDepsInner';
import { FunctionInfoOutput } from '../models/FunctionInfoOutput';
import { FunctionListItem } from '../models/FunctionListItem';
import { FunctionLocalVariableResponse } from '../models/FunctionLocalVariableResponse';
import { FunctionMapping } from '../models/FunctionMapping';
import { FunctionMappingFull } from '../models/FunctionMappingFull';
import { FunctionMatch } from '../models/FunctionMatch';
import { FunctionMatchingFilters } from '../models/FunctionMatchingFilters';
import { FunctionMatchingRequest } from '../models/FunctionMatchingRequest';
import { FunctionMatchingResponse } from '../models/FunctionMatchingResponse';
import { FunctionNameHistory } from '../models/FunctionNameHistory';
import { FunctionParamResponse } from '../models/FunctionParamResponse';
import { FunctionRename } from '../models/FunctionRename';
import { FunctionRenameMap } from '../models/FunctionRenameMap';
import { FunctionSearchResponse } from '../models/FunctionSearchResponse';
import { FunctionSearchResult } from '../models/FunctionSearchResult';
import { FunctionSourceType } from '../models/FunctionSourceType';
import { FunctionString } from '../models/FunctionString';
import { FunctionStringsResponse } from '../models/FunctionStringsResponse';
import { FunctionTaskResponse } from '../models/FunctionTaskResponse';
import { FunctionTaskStatus } from '../models/FunctionTaskStatus';
import { FunctionTypeInput } from '../models/FunctionTypeInput';
import { FunctionTypeOutput } from '../models/FunctionTypeOutput';
import { FunctionsDetailResponse } from '../models/FunctionsDetailResponse';
import { FunctionsListRename } from '../models/FunctionsListRename';
import { GenerateFunctionDataTypes } from '../models/GenerateFunctionDataTypes';
import { GenerationStatusList } from '../models/GenerationStatusList';
import { GetAiDecompilationRatingResponse } from '../models/GetAiDecompilationRatingResponse';
import { GetAiDecompilationTask } from '../models/GetAiDecompilationTask';
import { GetMeResponse } from '../models/GetMeResponse';
import { GetPublicUserResponse } from '../models/GetPublicUserResponse';
import { GlobalVariable } from '../models/GlobalVariable';
import { ISA } from '../models/ISA';
import { IconModel } from '../models/IconModel';
import { ImportModel } from '../models/ImportModel';
import { InverseFunctionMapItem } from '../models/InverseFunctionMapItem';
import { InverseStringMapItem } from '../models/InverseStringMapItem';
import { InverseValue } from '../models/InverseValue';
import { ListCollectionResults } from '../models/ListCollectionResults';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Logs } from '../models/Logs';
import { MatchedFunction } from '../models/MatchedFunction';
import { MatchedFunctionSuggestion } from '../models/MatchedFunctionSuggestion';
import { MetaModel } from '../models/MetaModel';
import { ModelName } from '../models/ModelName';
import { ModelsResponse } from '../models/ModelsResponse';
import { NameConfidence } from '../models/NameConfidence';
import { NameSourceType } from '../models/NameSourceType';
import { NetworkOverviewDns } from '../models/NetworkOverviewDns';
import { NetworkOverviewDnsAnswer } from '../models/NetworkOverviewDnsAnswer';
import { NetworkOverviewMetadata } from '../models/NetworkOverviewMetadata';
import { NetworkOverviewResponse } from '../models/NetworkOverviewResponse';
import { Order } from '../models/Order';
import { PDBDebugModel } from '../models/PDBDebugModel';
import { PEModel } from '../models/PEModel';
import { PaginationModel } from '../models/PaginationModel';
import { Params } from '../models/Params';
import { Platform } from '../models/Platform';
import { Process } from '../models/Process';
import { ProcessDump } from '../models/ProcessDump';
import { ProcessDumpMetadata } from '../models/ProcessDumpMetadata';
import { ProcessDumps } from '../models/ProcessDumps';
import { ProcessDumpsData } from '../models/ProcessDumpsData';
import { ProcessRegistry } from '../models/ProcessRegistry';
import { ProcessTree } from '../models/ProcessTree';
import { QueuedSecurityChecksTaskResponse } from '../models/QueuedSecurityChecksTaskResponse';
import { ReAnalysisForm } from '../models/ReAnalysisForm';
import { Recent } from '../models/Recent';
import { Registry } from '../models/Registry';
import { RelativeBinaryResponse } from '../models/RelativeBinaryResponse';
import { SBOM } from '../models/SBOM';
import { SBOMPackage } from '../models/SBOMPackage';
import { SandboxOptions } from '../models/SandboxOptions';
import { ScrapeThirdPartyConfig } from '../models/ScrapeThirdPartyConfig';
import { SectionModel } from '../models/SectionModel';
import { SecurityChecksResponse } from '../models/SecurityChecksResponse';
import { SecurityChecksResult } from '../models/SecurityChecksResult';
import { SecurityModel } from '../models/SecurityModel';
import { SeverityType } from '../models/SeverityType';
import { SingleCodeCertificateModel } from '../models/SingleCodeCertificateModel';
import { SingleCodeSignatureModel } from '../models/SingleCodeSignatureModel';
import { SinglePDBEntryModel } from '../models/SinglePDBEntryModel';
import { SingleSectionModel } from '../models/SingleSectionModel';
import { StackVariable } from '../models/StackVariable';
import { StatusInput } from '../models/StatusInput';
import { StatusOutput } from '../models/StatusOutput';
import { StringFunctions } from '../models/StringFunctions';
import { Structure } from '../models/Structure';
import { StructureMember } from '../models/StructureMember';
import { Symbols } from '../models/Symbols';
import { TTPS } from '../models/TTPS';
import { TTPSAttack } from '../models/TTPSAttack';
import { TTPSData } from '../models/TTPSData';
import { TTPSElement } from '../models/TTPSElement';
import { TTPSOccurance } from '../models/TTPSOccurance';
import { Tag } from '../models/Tag';
import { TagItem } from '../models/TagItem';
import { TagResponse } from '../models/TagResponse';
import { TagSearchResponse } from '../models/TagSearchResponse';
import { TagSearchResult } from '../models/TagSearchResult';
import { TaskResponse } from '../models/TaskResponse';
import { TaskStatus } from '../models/TaskStatus';
import { TimestampModel } from '../models/TimestampModel';
import { TypeDefinition } from '../models/TypeDefinition';
import { UpdateFunctionDataTypes } from '../models/UpdateFunctionDataTypes';
import { UploadFileType } from '../models/UploadFileType';
import { UploadResponse } from '../models/UploadResponse';
import { UpsertAiDecomplationRatingRequest } from '../models/UpsertAiDecomplationRatingRequest';
import { UserActivityResponse } from '../models/UserActivityResponse';
import { Vulnerabilities } from '../models/Vulnerabilities';
import { Vulnerability } from '../models/Vulnerability';
import { VulnerabilityType } from '../models/VulnerabilityType';
import { Workspace } from '../models/Workspace';

import { AnalysesCommentsApiRequestFactory, AnalysesCommentsApiResponseProcessor} from "../apis/AnalysesCommentsApi";
export class ObservableAnalysesCommentsApi {
    private requestFactory: AnalysesCommentsApiRequestFactory;
    private responseProcessor: AnalysesCommentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesCommentsApiRequestFactory,
        responseProcessor?: AnalysesCommentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesCommentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesCommentsApiResponseProcessor();
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param analysisId
     * @param commentBase
     */
    public createAnalysisCommentWithHttpInfo(analysisId: number, commentBase: CommentBase, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAnalysisComment(analysisId, commentBase, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAnalysisCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param analysisId
     * @param commentBase
     */
    public createAnalysisComment(analysisId: number, commentBase: CommentBase, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.createAnalysisCommentWithHttpInfo(analysisId, commentBase, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param analysisId
     */
    public deleteAnalysisCommentWithHttpInfo(commentId: number, analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBool>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAnalysisComment(commentId, analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAnalysisCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param analysisId
     */
    public deleteAnalysisComment(commentId: number, analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseBool> {
        return this.deleteAnalysisCommentWithHttpInfo(commentId, analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBool>) => apiResponse.data));
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param analysisId
     */
    public getAnalysisCommentsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisComments(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param analysisId
     */
    public getAnalysisComments(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseListCommentResponse> {
        return this.getAnalysisCommentsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListCommentResponse>) => apiResponse.data));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param analysisId
     * @param commentUpdateRequest
     */
    public updateAnalysisCommentWithHttpInfo(commentId: number, analysisId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAnalysisComment(commentId, analysisId, commentUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnalysisCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param analysisId
     * @param commentUpdateRequest
     */
    public updateAnalysisComment(commentId: number, analysisId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.updateAnalysisCommentWithHttpInfo(commentId, analysisId, commentUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
    }

}

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
     * Begins an analysis
     * Create Analysis
     * @param analysisCreateRequest
     * @param [xRevEngApplication]
     */
    public createAnalysisWithHttpInfo(analysisCreateRequest: AnalysisCreateRequest, xRevEngApplication?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisCreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAnalysis(analysisCreateRequest, xRevEngApplication, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Begins an analysis
     * Create Analysis
     * @param analysisCreateRequest
     * @param [xRevEngApplication]
     */
    public createAnalysis(analysisCreateRequest: AnalysisCreateRequest, xRevEngApplication?: string, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisCreateResponse> {
        return this.createAnalysisWithHttpInfo(analysisCreateRequest, xRevEngApplication, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisCreateResponse>) => apiResponse.data));
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param analysisId
     */
    public deleteAnalysisWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseDict>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAnalysis(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param analysisId
     */
    public deleteAnalysis(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseDict> {
        return this.deleteAnalysisWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseDict>) => apiResponse.data));
    }

    /**
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param analysisId
     */
    public getAnalysisBasicInfoWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBasic>> {
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
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param analysisId
     */
    public getAnalysisBasicInfo(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseBasic> {
        return this.getAnalysisBasicInfoWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBasic>) => apiResponse.data));
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param analysisId
     */
    public getAnalysisFunctionMapWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisFunctionMapping>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisFunctionMap(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisFunctionMapWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param analysisId
     */
    public getAnalysisFunctionMap(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisFunctionMapping> {
        return this.getAnalysisFunctionMapWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisFunctionMapping>) => apiResponse.data));
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param analysisId
     */
    public getAnalysisLogsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseLogs>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisLogs(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param analysisId
     */
    public getAnalysisLogs(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseLogs> {
        return this.getAnalysisLogsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseLogs>) => apiResponse.data));
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param analysisId
     */
    public getAnalysisParamsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseParams>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisParams(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisParamsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param analysisId
     */
    public getAnalysisParams(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseParams> {
        return this.getAnalysisParamsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseParams>) => apiResponse.data));
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param analysisId
     */
    public getAnalysisStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisStatus(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param analysisId
     */
    public getAnalysisStatus(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseStatus> {
        return this.getAnalysisStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseStatus>) => apiResponse.data));
    }

    /**
     * Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit
     * Gets the most recent analyses
     * @param [searchTerm]
     * @param [workspace] The workspace to be viewed
     * @param [status] The status of the analysis
     * @param [modelName] Show analysis belonging to the model
     * @param [dynamicExecutionStatus] Show analysis that have a dynamic execution with the given status
     * @param [usernames] Show analysis belonging to the user
     * @param [sha256Hash]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public listAnalysesWithHttpInfo(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatusInput, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseRecent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAnalyses(searchTerm, workspace, status, modelName, dynamicExecutionStatus, usernames, sha256Hash, limit, offset, orderBy, order, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAnalysesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit
     * Gets the most recent analyses
     * @param [searchTerm]
     * @param [workspace] The workspace to be viewed
     * @param [status] The status of the analysis
     * @param [modelName] Show analysis belonging to the model
     * @param [dynamicExecutionStatus] Show analysis that have a dynamic execution with the given status
     * @param [usernames] Show analysis belonging to the user
     * @param [sha256Hash]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public listAnalyses(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatusInput, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<BaseResponseRecent> {
        return this.listAnalysesWithHttpInfo(searchTerm, workspace, status, modelName, dynamicExecutionStatus, usernames, sha256Hash, limit, offset, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<BaseResponseRecent>) => apiResponse.data));
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param binaryId
     */
    public lookupBinaryIdWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.lookupBinaryId(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupBinaryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param binaryId
     */
    public lookupBinaryId(binaryId: number, _options?: ConfigurationOptions): Observable<any> {
        return this.lookupBinaryIdWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param analysisId
     * @param reAnalysisForm
     * @param [xRevEngApplication]
     */
    public requeueAnalysisWithHttpInfo(analysisId: number, reAnalysisForm: ReAnalysisForm, xRevEngApplication?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCreated>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.requeueAnalysis(analysisId, reAnalysisForm, xRevEngApplication, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requeueAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param analysisId
     * @param reAnalysisForm
     * @param [xRevEngApplication]
     */
    public requeueAnalysis(analysisId: number, reAnalysisForm: ReAnalysisForm, xRevEngApplication?: string, _options?: ConfigurationOptions): Observable<BaseResponseCreated> {
        return this.requeueAnalysisWithHttpInfo(analysisId, reAnalysisForm, xRevEngApplication, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCreated>) => apiResponse.data));
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param analysisId
     * @param analysisUpdateRequest
     */
    public updateAnalysisWithHttpInfo(analysisId: number, analysisUpdateRequest: AnalysisUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisDetailResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAnalysis(analysisId, analysisUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param analysisId
     * @param analysisUpdateRequest
     */
    public updateAnalysis(analysisId: number, analysisUpdateRequest: AnalysisUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisDetailResponse> {
        return this.updateAnalysisWithHttpInfo(analysisId, analysisUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisDetailResponse>) => apiResponse.data));
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param analysisId
     * @param analysisUpdateTagsRequest
     */
    public updateAnalysisTagsWithHttpInfo(analysisId: number, analysisUpdateTagsRequest: AnalysisUpdateTagsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisUpdateTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAnalysisTags(analysisId, analysisUpdateTagsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnalysisTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param analysisId
     * @param analysisUpdateTagsRequest
     */
    public updateAnalysisTags(analysisId: number, analysisUpdateTagsRequest: AnalysisUpdateTagsRequest, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisUpdateTagsResponse> {
        return this.updateAnalysisTagsWithHttpInfo(analysisId, analysisUpdateTagsRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisUpdateTagsResponse>) => apiResponse.data));
    }

    /**
     * Upload File
     * @param uploadFileType
     * @param file
     * @param [packedPassword]
     * @param [forceOverwrite]
     */
    public uploadFileWithHttpInfo(uploadFileType: UploadFileType, file: HttpFile, packedPassword?: string, forceOverwrite?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseUploadResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadFile(uploadFileType, file, packedPassword, forceOverwrite, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload File
     * @param uploadFileType
     * @param file
     * @param [packedPassword]
     * @param [forceOverwrite]
     */
    public uploadFile(uploadFileType: UploadFileType, file: HttpFile, packedPassword?: string, forceOverwrite?: boolean, _options?: ConfigurationOptions): Observable<BaseResponseUploadResponse> {
        return this.uploadFileWithHttpInfo(uploadFileType, file, packedPassword, forceOverwrite, _options).pipe(map((apiResponse: HttpInfo<BaseResponseUploadResponse>) => apiResponse.data));
    }

}

import { AnalysesDynamicExecutionApiRequestFactory, AnalysesDynamicExecutionApiResponseProcessor} from "../apis/AnalysesDynamicExecutionApi";
export class ObservableAnalysesDynamicExecutionApi {
    private requestFactory: AnalysesDynamicExecutionApiRequestFactory;
    private responseProcessor: AnalysesDynamicExecutionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesDynamicExecutionApiRequestFactory,
        responseProcessor?: AnalysesDynamicExecutionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesDynamicExecutionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesDynamicExecutionApiResponseProcessor();
    }

    /**
     * Get the status of a dynamic execution task
     * @param analysisId
     */
    public getDynamicExecutionStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseDynamicExecutionStatus>> {
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
     * Get the status of a dynamic execution task
     * @param analysisId
     */
    public getDynamicExecutionStatus(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseDynamicExecutionStatus> {
        return this.getDynamicExecutionStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseDynamicExecutionStatus>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for network overview
     * @param analysisId
     */
    public getNetworkOverviewWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseNetworkOverviewResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNetworkOverview(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNetworkOverviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for network overview
     * @param analysisId
     */
    public getNetworkOverview(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseNetworkOverviewResponse> {
        return this.getNetworkOverviewWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseNetworkOverviewResponse>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param analysisId
     * @param dumpName
     */
    public getProcessDumpWithHttpInfo(analysisId: number, dumpName: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProcessDump(analysisId, dumpName, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProcessDumpWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param analysisId
     * @param dumpName
     */
    public getProcessDump(analysisId: number, dumpName: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getProcessDumpWithHttpInfo(analysisId, dumpName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param analysisId
     */
    public getProcessDumpsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseProcessDumps>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProcessDumps(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProcessDumpsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param analysisId
     */
    public getProcessDumps(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseProcessDumps> {
        return this.getProcessDumpsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseProcessDumps>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for process registry
     * @param analysisId
     */
    public getProcessRegistryWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseProcessRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProcessRegistry(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProcessRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for process registry
     * @param analysisId
     */
    public getProcessRegistry(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseProcessRegistry> {
        return this.getProcessRegistryWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseProcessRegistry>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for process tree
     * @param analysisId
     */
    public getProcessTreeWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseProcessTree>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProcessTree(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProcessTreeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for process tree
     * @param analysisId
     */
    public getProcessTree(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseProcessTree> {
        return this.getProcessTreeWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseProcessTree>) => apiResponse.data));
    }

    /**
     * Get the dynamic execution results for ttps
     * @param analysisId
     */
    public getTtpsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseTTPS>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTtps(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTtpsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the dynamic execution results for ttps
     * @param analysisId
     */
    public getTtps(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseTTPS> {
        return this.getTtpsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseTTPS>) => apiResponse.data));
    }

}

import { AnalysesResultsMetadataApiRequestFactory, AnalysesResultsMetadataApiResponseProcessor} from "../apis/AnalysesResultsMetadataApi";
export class ObservableAnalysesResultsMetadataApi {
    private requestFactory: AnalysesResultsMetadataApiRequestFactory;
    private responseProcessor: AnalysesResultsMetadataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesResultsMetadataApiRequestFactory,
        responseProcessor?: AnalysesResultsMetadataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesResultsMetadataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesResultsMetadataApiResponseProcessor();
    }

    /**
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getAnalysisFunctionsPaginatedWithHttpInfo(analysisId: number, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisFunctionsList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisFunctionsPaginated(analysisId, page, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisFunctionsPaginatedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getAnalysisFunctionsPaginated(analysisId: number, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisFunctionsList> {
        return this.getAnalysisFunctionsPaginatedWithHttpInfo(analysisId, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisFunctionsList>) => apiResponse.data));
    }

    /**
     * Gets the capabilities from the analysis
     * @param analysisId
     */
    public getCapabilitiesWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCapabilities>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCapabilities(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCapabilitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the capabilities from the analysis
     * @param analysisId
     */
    public getCapabilities(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseCapabilities> {
        return this.getCapabilitiesWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCapabilities>) => apiResponse.data));
    }

    /**
     * Gets the communities found in the analysis
     * @param analysisId
     * @param [userName] The user name to limit communities to
     */
    public getCommunitiesWithHttpInfo(analysisId: number, userName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommunities>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCommunities(analysisId, userName, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommunitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the communities found in the analysis
     * @param analysisId
     * @param [userName] The user name to limit communities to
     */
    public getCommunities(analysisId: number, userName?: string, _options?: ConfigurationOptions): Observable<BaseResponseCommunities> {
        return this.getCommunitiesWithHttpInfo(analysisId, userName, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommunities>) => apiResponse.data));
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param analysisId
     * @param [searchTerm]
     * @param [minVAddr]
     * @param [maxVAddr]
     * @param [includeEmbeddings]
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getFunctionsListWithHttpInfo(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, includeEmbeddings?: boolean, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisFunctions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionsList(analysisId, searchTerm, minVAddr, maxVAddr, includeEmbeddings, page, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param analysisId
     * @param [searchTerm]
     * @param [minVAddr]
     * @param [maxVAddr]
     * @param [includeEmbeddings]
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getFunctionsList(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, includeEmbeddings?: boolean, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisFunctions> {
        return this.getFunctionsListWithHttpInfo(analysisId, searchTerm, minVAddr, maxVAddr, includeEmbeddings, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisFunctions>) => apiResponse.data));
    }

    /**
     * Gets the PDF found in the analysis
     * @param analysisId
     */
    public getPdfWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPdf(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the PDF found in the analysis
     * @param analysisId
     */
    public getPdf(analysisId: number, _options?: ConfigurationOptions): Observable<any> {
        return this.getPdfWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param analysisId
     */
    public getSbomWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListSBOM>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSbom(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSbomWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param analysisId
     */
    public getSbom(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseListSBOM> {
        return this.getSbomWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListSBOM>) => apiResponse.data));
    }

    /**
     * Get function tags with maliciousness score
     * @param analysisId
     */
    public getTagsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisTags>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTags(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get function tags with maliciousness score
     * @param analysisId
     */
    public getTags(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisTags> {
        return this.getTagsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisTags>) => apiResponse.data));
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param analysisId
     */
    public getVulnerabilitiesWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseVulnerabilities>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVulnerabilities(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVulnerabilitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param analysisId
     */
    public getVulnerabilities(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseVulnerabilities> {
        return this.getVulnerabilitiesWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseVulnerabilities>) => apiResponse.data));
    }

}

import { AnalysesSecurityChecksApiRequestFactory, AnalysesSecurityChecksApiResponseProcessor} from "../apis/AnalysesSecurityChecksApi";
export class ObservableAnalysesSecurityChecksApi {
    private requestFactory: AnalysesSecurityChecksApiRequestFactory;
    private responseProcessor: AnalysesSecurityChecksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesSecurityChecksApiRequestFactory,
        responseProcessor?: AnalysesSecurityChecksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesSecurityChecksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesSecurityChecksApiResponseProcessor();
    }

    /**
     * Queues a security check process
     * @param analysisId
     */
    public createScurityChecksTaskWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QueuedSecurityChecksTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createScurityChecksTask(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createScurityChecksTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a security check process
     * @param analysisId
     */
    public createScurityChecksTask(analysisId: number, _options?: ConfigurationOptions): Observable<QueuedSecurityChecksTaskResponse> {
        return this.createScurityChecksTaskWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<QueuedSecurityChecksTaskResponse>) => apiResponse.data));
    }

    /**
     * Retrieve security checks results with pagination.
     * Get Security Checks
     * @param analysisId
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public getSecurityChecksWithHttpInfo(analysisId: number, page: number, pageSize: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseSecurityChecksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSecurityChecks(analysisId, page, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecurityChecksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve security checks results with pagination.
     * Get Security Checks
     * @param analysisId
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public getSecurityChecks(analysisId: number, page: number, pageSize: number, _options?: ConfigurationOptions): Observable<BaseResponseSecurityChecksResponse> {
        return this.getSecurityChecksWithHttpInfo(analysisId, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<BaseResponseSecurityChecksResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a security check process
     * @param analysisId
     */
    public getSecurityChecksTaskStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CheckSecurityChecksTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSecurityChecksTaskStatus(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecurityChecksTaskStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a security check process
     * @param analysisId
     */
    public getSecurityChecksTaskStatus(analysisId: number, _options?: ConfigurationOptions): Observable<CheckSecurityChecksTaskResponse> {
        return this.getSecurityChecksTaskStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<CheckSecurityChecksTaskResponse>) => apiResponse.data));
    }

}

import { AuthenticationUsersApiRequestFactory, AuthenticationUsersApiResponseProcessor} from "../apis/AuthenticationUsersApi";
export class ObservableAuthenticationUsersApi {
    private requestFactory: AuthenticationUsersApiRequestFactory;
    private responseProcessor: AuthenticationUsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationUsersApiRequestFactory,
        responseProcessor?: AuthenticationUsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationUsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationUsersApiResponseProcessor();
    }

    /**
     * Get the requesters user information
     */
    public getRequesterUserInfoWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGetMeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRequesterUserInfo(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRequesterUserInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the requesters user information
     */
    public getRequesterUserInfo(_options?: ConfigurationOptions): Observable<BaseResponseGetMeResponse> {
        return this.getRequesterUserInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BaseResponseGetMeResponse>) => apiResponse.data));
    }

    /**
     * Get a user\'s public information
     * @param userId
     */
    public getUserWithHttpInfo(userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGetPublicUserResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUser(userId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a user\'s public information
     * @param userId
     */
    public getUser(userId: number, _options?: ConfigurationOptions): Observable<BaseResponseGetPublicUserResponse> {
        return this.getUserWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseGetPublicUserResponse>) => apiResponse.data));
    }

    /**
     * Get auth user activity
     */
    public getUserActivityWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListUserActivityResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserActivity(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get auth user activity
     */
    public getUserActivity(_options?: ConfigurationOptions): Observable<BaseResponseListUserActivityResponse> {
        return this.getUserActivityWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BaseResponseListUserActivityResponse>) => apiResponse.data));
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     */
    public getUserCommentsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserComments(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     */
    public getUserComments(_options?: ConfigurationOptions): Observable<BaseResponseListCommentResponse> {
        return this.getUserCommentsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BaseResponseListCommentResponse>) => apiResponse.data));
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param loginRequest
     */
    public loginUserWithHttpInfo(loginRequest: LoginRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseLoginResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginUser(loginRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param loginRequest
     */
    public loginUser(loginRequest: LoginRequest, _options?: ConfigurationOptions): Observable<BaseResponseLoginResponse> {
        return this.loginUserWithHttpInfo(loginRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseLoginResponse>) => apiResponse.data));
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
     * Downloads a zipped binary with password protection
     * @param binaryId
     */
    public downloadZippedBinaryWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<HttpFile>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.downloadZippedBinary(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadZippedBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downloads a zipped binary with password protection
     * @param binaryId
     */
    public downloadZippedBinary(binaryId: number, _options?: ConfigurationOptions): Observable<HttpFile> {
        return this.downloadZippedBinaryWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Gets the additional details of a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinaryAdditionalResponse>> {
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
     * Gets the additional details of a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetails(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseBinaryAdditionalResponse> {
        return this.getBinaryAdditionalDetailsWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinaryAdditionalResponse>) => apiResponse.data));
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAdditionalDetailsStatusResponse>> {
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
     * Gets the status of the additional details task for a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsStatus(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseAdditionalDetailsStatusResponse> {
        return this.getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAdditionalDetailsStatusResponse>) => apiResponse.data));
    }

    /**
     * Gets the details of a binary
     * @param binaryId
     */
    public getBinaryDetailsWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinaryDetailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryDetails(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the details of a binary
     * @param binaryId
     */
    public getBinaryDetails(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseBinaryDetailsResponse> {
        return this.getBinaryDetailsWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinaryDetailsResponse>) => apiResponse.data));
    }

    /**
     * Gets the die info of a binary
     * @param binaryId
     */
    public getBinaryDieInfoWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListDieMatch>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryDieInfo(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryDieInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the die info of a binary
     * @param binaryId
     */
    public getBinaryDieInfo(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseListDieMatch> {
        return this.getBinaryDieInfoWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListDieMatch>) => apiResponse.data));
    }

    /**
     * Gets the external details of a binary
     * @param binaryId
     */
    public getBinaryExternalsWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinaryExternalsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryExternals(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryExternalsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the external details of a binary
     * @param binaryId
     */
    public getBinaryExternals(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseBinaryExternalsResponse> {
        return this.getBinaryExternalsWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinaryExternalsResponse>) => apiResponse.data));
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param binaryId
     */
    public getBinaryRelatedStatusWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinariesRelatedStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryRelatedStatus(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryRelatedStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param binaryId
     */
    public getBinaryRelatedStatus(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseBinariesRelatedStatusResponse> {
        return this.getBinaryRelatedStatusWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinariesRelatedStatusResponse>) => apiResponse.data));
    }

    /**
     * Gets the related binaries of a binary.
     * @param binaryId
     */
    public getRelatedBinariesWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseChildBinariesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRelatedBinaries(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRelatedBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the related binaries of a binary.
     * @param binaryId
     */
    public getRelatedBinaries(binaryId: number, _options?: ConfigurationOptions): Observable<BaseResponseChildBinariesResponse> {
        return this.getRelatedBinariesWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseChildBinariesResponse>) => apiResponse.data));
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
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param collectionCreateRequest
     */
    public createCollectionWithHttpInfo(collectionCreateRequest: CollectionCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCollection(collectionCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param collectionCreateRequest
     */
    public createCollection(collectionCreateRequest: CollectionCreateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCollectionResponse> {
        return this.createCollectionWithHttpInfo(collectionCreateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionResponse>) => apiResponse.data));
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param collectionId
     */
    public deleteCollectionWithHttpInfo(collectionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBool>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCollection(collectionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param collectionId
     */
    public deleteCollection(collectionId: number, _options?: ConfigurationOptions): Observable<BaseResponseBool> {
        return this.deleteCollectionWithHttpInfo(collectionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBool>) => apiResponse.data));
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     * @param [pageSize]
     * @param [pageNumber]
     * @param [binarySearchStr]
     */
    public getCollectionWithHttpInfo(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCollection(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     * @param [pageSize]
     * @param [pageNumber]
     * @param [binarySearchStr]
     */
    public getCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: ConfigurationOptions): Observable<BaseResponseCollectionResponse> {
        return this.getCollectionWithHttpInfo(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionResponse>) => apiResponse.data));
    }

    /**
     * Returns a list of collections
     * Gets basic collections information
     * @param [searchTerm]
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public listCollectionsWithHttpInfo(searchTerm?: string, filters?: Array<Filters>, limit?: number, offset?: number, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCollectionResults>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCollections(searchTerm, filters, limit, offset, orderBy, order, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCollectionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of collections
     * Gets basic collections information
     * @param [searchTerm]
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public listCollections(searchTerm?: string, filters?: Array<Filters>, limit?: number, offset?: number, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<BaseResponseListCollectionResults> {
        return this.listCollectionsWithHttpInfo(searchTerm, filters, limit, offset, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListCollectionResults>) => apiResponse.data));
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param collectionId
     * @param collectionUpdateRequest
     */
    public updateCollectionWithHttpInfo(collectionId: number, collectionUpdateRequest: CollectionUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCollection(collectionId, collectionUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param collectionId
     * @param collectionUpdateRequest
     */
    public updateCollection(collectionId: number, collectionUpdateRequest: CollectionUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCollectionResponse> {
        return this.updateCollectionWithHttpInfo(collectionId, collectionUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionResponse>) => apiResponse.data));
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param collectionId
     * @param collectionBinariesUpdateRequest
     */
    public updateCollectionBinariesWithHttpInfo(collectionId: number, collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionBinariesUpdateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCollectionBinaries(collectionId, collectionBinariesUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCollectionBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param collectionId
     * @param collectionBinariesUpdateRequest
     */
    public updateCollectionBinaries(collectionId: number, collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCollectionBinariesUpdateResponse> {
        return this.updateCollectionBinariesWithHttpInfo(collectionId, collectionBinariesUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionBinariesUpdateResponse>) => apiResponse.data));
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param collectionId
     * @param collectionTagsUpdateRequest
     */
    public updateCollectionTagsWithHttpInfo(collectionId: number, collectionTagsUpdateRequest: CollectionTagsUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionTagsUpdateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCollectionTags(collectionId, collectionTagsUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCollectionTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param collectionId
     * @param collectionTagsUpdateRequest
     */
    public updateCollectionTags(collectionId: number, collectionTagsUpdateRequest: CollectionTagsUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCollectionTagsUpdateResponse> {
        return this.updateCollectionTagsWithHttpInfo(collectionId, collectionTagsUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionTagsUpdateResponse>) => apiResponse.data));
    }

}

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class ObservableConfigApi {
    private requestFactory: ConfigApiRequestFactory;
    private responseProcessor: ConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigApiResponseProcessor();
    }

    /**
     * General configuration endpoint
     * Get Config
     */
    public getConfigWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseConfigResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConfig(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * General configuration endpoint
     * Get Config
     */
    public getConfig(_options?: ConfigurationOptions): Observable<BaseResponseConfigResponse> {
        return this.getConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BaseResponseConfigResponse>) => apiResponse.data));
    }

}

import { ExternalSourcesApiRequestFactory, ExternalSourcesApiResponseProcessor} from "../apis/ExternalSourcesApi";
export class ObservableExternalSourcesApi {
    private requestFactory: ExternalSourcesApiRequestFactory;
    private responseProcessor: ExternalSourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalSourcesApiRequestFactory,
        responseProcessor?: ExternalSourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExternalSourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExternalSourcesApiResponseProcessor();
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskVtWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseStr>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createExternalTaskVt(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExternalTaskVtWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskVt(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseStr> {
        return this.createExternalTaskVtWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseStr>) => apiResponse.data));
    }

    /**
     * Get VirusTotal data
     * @param analysisId
     */
    public getVtDataWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseExternalResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVtData(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVtDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get VirusTotal data
     * @param analysisId
     */
    public getVtData(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseExternalResponse> {
        return this.getVtDataWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseExternalResponse>) => apiResponse.data));
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param analysisId
     */
    public getVtTaskStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getVtTaskStatus(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVtTaskStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param analysisId
     */
    public getVtTaskStatus(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseTaskResponse> {
        return this.getVtTaskStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseTaskResponse>) => apiResponse.data));
    }

}

import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi";
export class ObservableFirmwareApi {
    private requestFactory: FirmwareApiRequestFactory;
    private responseProcessor: FirmwareApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FirmwareApiRequestFactory,
        responseProcessor?: FirmwareApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FirmwareApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FirmwareApiResponseProcessor();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param taskId
     */
    public getBinariesForFirmwareTaskWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinariesForFirmwareTask(taskId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinariesForFirmwareTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param taskId
     */
    public getBinariesForFirmwareTask(taskId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getBinariesForFirmwareTaskWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param file
     * @param [password]
     */
    public uploadFirmwareWithHttpInfo(file: HttpFile, password?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadFirmware(file, password, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFirmwareWithHttpInfo(rsp)));
            }));
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param file
     * @param [password]
     */
    public uploadFirmware(file: HttpFile, password?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.uploadFirmwareWithHttpInfo(file, password, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createAiDecompilationCommentWithHttpInfo(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAiDecompilationComment(functionId, functionCommentCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAiDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createAiDecompilationComment(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.createAiDecompilationCommentWithHttpInfo(functionId, functionCommentCreateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param functionId The ID of the function for which we are creating the decompilation task
     */
    public createAiDecompilationTaskWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAiDecompilationTask(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAiDecompilationTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param functionId The ID of the function for which we are creating the decompilation task
     */
    public createAiDecompilationTask(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.createAiDecompilationTaskWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteAiDecompilationCommentWithHttpInfo(commentId: number, functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBool>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAiDecompilationComment(commentId, functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAiDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteAiDecompilationComment(commentId: number, functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseBool> {
        return this.deleteAiDecompilationCommentWithHttpInfo(commentId, functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBool>) => apiResponse.data));
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getAiDecompilationCommentsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationComments(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getAiDecompilationComments(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseListCommentResponse> {
        return this.getAiDecompilationCommentsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListCommentResponse>) => apiResponse.data));
    }

    /**
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRatingWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGetAiDecompilationRatingResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationRating(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationRatingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRating(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseGetAiDecompilationRatingResponse> {
        return this.getAiDecompilationRatingWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseGetAiDecompilationRatingResponse>) => apiResponse.data));
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param functionId The ID of the function being decompiled
     * @param [summarise] Generate a summary for the decompilation
     * @param [generateInlineComments] Generate inline comments for the decompilation (only works if summarise is enabled)
     */
    public getAiDecompilationTaskResultWithHttpInfo(functionId: number, summarise?: boolean, generateInlineComments?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGetAiDecompilationTask>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationTaskResult(functionId, summarise, generateInlineComments, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationTaskResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param functionId The ID of the function being decompiled
     * @param [summarise] Generate a summary for the decompilation
     * @param [generateInlineComments] Generate inline comments for the decompilation (only works if summarise is enabled)
     */
    public getAiDecompilationTaskResult(functionId: number, summarise?: boolean, generateInlineComments?: boolean, _options?: ConfigurationOptions): Observable<BaseResponseGetAiDecompilationTask> {
        return this.getAiDecompilationTaskResultWithHttpInfo(functionId, summarise, generateInlineComments, _options).pipe(map((apiResponse: HttpInfo<BaseResponseGetAiDecompilationTask>) => apiResponse.data));
    }

    /**
     * Check the status of a function ai decompilation
     * @param functionId The ID of the function being checked
     */
    public getAiDecompilationTaskStatusWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAiDecompilationTaskStatus(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAiDecompilationTaskStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a function ai decompilation
     * @param functionId The ID of the function being checked
     */
    public getAiDecompilationTaskStatus(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseFunctionTaskResponse> {
        return this.getAiDecompilationTaskStatusWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionTaskResponse>) => apiResponse.data));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateAiDecompilationCommentWithHttpInfo(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAiDecompilationComment(commentId, functionId, commentUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAiDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateAiDecompilationComment(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.updateAiDecompilationCommentWithHttpInfo(commentId, functionId, commentUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
    }

    /**
     * Upsert rating for AI decompilation
     * @param functionId The ID of the function being rated
     * @param upsertAiDecomplationRatingRequest
     */
    public upsertAiDecompilationRatingWithHttpInfo(functionId: number, upsertAiDecomplationRatingRequest: UpsertAiDecomplationRatingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.upsertAiDecompilationRating(functionId, upsertAiDecomplationRatingRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertAiDecompilationRatingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upsert rating for AI decompilation
     * @param functionId The ID of the function being rated
     * @param upsertAiDecomplationRatingRequest
     */
    public upsertAiDecompilationRating(functionId: number, upsertAiDecomplationRatingRequest: UpsertAiDecomplationRatingRequest, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.upsertAiDecompilationRatingWithHttpInfo(functionId, upsertAiDecomplationRatingRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

}

import { FunctionsBlockCommentsApiRequestFactory, FunctionsBlockCommentsApiResponseProcessor} from "../apis/FunctionsBlockCommentsApi";
export class ObservableFunctionsBlockCommentsApi {
    private requestFactory: FunctionsBlockCommentsApiRequestFactory;
    private responseProcessor: FunctionsBlockCommentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsBlockCommentsApiRequestFactory,
        responseProcessor?: FunctionsBlockCommentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsBlockCommentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsBlockCommentsApiResponseProcessor();
    }

    /**
     * Generate block comments for a specific block in a function
     * @param functionId
     * @param block
     */
    public generateBlockCommentsForBlockInFunctionWithHttpInfo(functionId: number, block: Block, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateBlockCommentsForBlockInFunction(functionId, block, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateBlockCommentsForBlockInFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate block comments for a specific block in a function
     * @param functionId
     * @param block
     */
    public generateBlockCommentsForBlockInFunction(functionId: number, block: Block, _options?: ConfigurationOptions): Observable<BaseResponseBlockCommentsGenerationForFunctionResponse> {
        return this.generateBlockCommentsForBlockInFunctionWithHttpInfo(functionId, block, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>) => apiResponse.data));
    }

    /**
     * Generate block comments for a function
     * @param functionId
     */
    public generateBlockCommentsForFunctionWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateBlockCommentsForFunction(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateBlockCommentsForFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate block comments for a function
     * @param functionId
     */
    public generateBlockCommentsForFunction(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseBlockCommentsGenerationForFunctionResponse> {
        return this.generateBlockCommentsForFunctionWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>) => apiResponse.data));
    }

    /**
     * Generate overview comment for a function
     * @param functionId
     */
    public generateOverviewCommentForFunctionWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBlockCommentsOverviewGenerationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateOverviewCommentForFunction(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateOverviewCommentForFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate overview comment for a function
     * @param functionId
     */
    public generateOverviewCommentForFunction(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseBlockCommentsOverviewGenerationResponse> {
        return this.generateOverviewCommentForFunctionWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBlockCommentsOverviewGenerationResponse>) => apiResponse.data));
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
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param aiUnstripRequest
     */
    public aiUnstripWithHttpInfo(analysisId: number, aiUnstripRequest: AiUnstripRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutoUnstripResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.aiUnstrip(analysisId, aiUnstripRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aiUnstripWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param aiUnstripRequest
     */
    public aiUnstrip(analysisId: number, aiUnstripRequest: AiUnstripRequest, _options?: ConfigurationOptions): Observable<AutoUnstripResponse> {
        return this.aiUnstripWithHttpInfo(analysisId, aiUnstripRequest, _options).pipe(map((apiResponse: HttpInfo<AutoUnstripResponse>) => apiResponse.data));
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param analysisId
     * @param analysisFunctionMatchingRequest
     */
    public analysisFunctionMatchingWithHttpInfo(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionMatchingResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.analysisFunctionMatching(analysisId, analysisFunctionMatchingRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.analysisFunctionMatchingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param analysisId
     * @param analysisFunctionMatchingRequest
     */
    public analysisFunctionMatching(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: ConfigurationOptions): Observable<FunctionMatchingResponse> {
        return this.analysisFunctionMatchingWithHttpInfo(analysisId, analysisFunctionMatchingRequest, _options).pipe(map((apiResponse: HttpInfo<FunctionMatchingResponse>) => apiResponse.data));
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param autoUnstripRequest
     */
    public autoUnstripWithHttpInfo(analysisId: number, autoUnstripRequest: AutoUnstripRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutoUnstripResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.autoUnstrip(analysisId, autoUnstripRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.autoUnstripWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param autoUnstripRequest
     */
    public autoUnstrip(analysisId: number, autoUnstripRequest: AutoUnstripRequest, _options?: ConfigurationOptions): Observable<AutoUnstripResponse> {
        return this.autoUnstripWithHttpInfo(analysisId, autoUnstripRequest, _options).pipe(map((apiResponse: HttpInfo<AutoUnstripResponse>) => apiResponse.data));
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest
     */
    public batchFunctionMatchingWithHttpInfo(functionMatchingRequest: FunctionMatchingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionMatchingResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchFunctionMatching(functionMatchingRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchFunctionMatchingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest
     */
    public batchFunctionMatching(functionMatchingRequest: FunctionMatchingRequest, _options?: ConfigurationOptions): Observable<FunctionMatchingResponse> {
        return this.batchFunctionMatchingWithHttpInfo(functionMatchingRequest, _options).pipe(map((apiResponse: HttpInfo<FunctionMatchingResponse>) => apiResponse.data));
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param analysisId
     */
    public cancelAiUnstripWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AutoUnstripResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelAiUnstrip(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelAiUnstripWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param analysisId
     */
    public cancelAiUnstrip(analysisId: number, _options?: ConfigurationOptions): Observable<AutoUnstripResponse> {
        return this.cancelAiUnstripWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AutoUnstripResponse>) => apiResponse.data));
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param analysisId
     */
    public cancelAutoUnstripWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AutoUnstripResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelAutoUnstrip(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelAutoUnstripWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param analysisId
     */
    public cancelAutoUnstrip(analysisId: number, _options?: ConfigurationOptions): Observable<AutoUnstripResponse> {
        return this.cancelAutoUnstripWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AutoUnstripResponse>) => apiResponse.data));
    }

    /**
     * Get string information found in the analysis
     * Get string information found in the Analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     * @param [functionSearch] Search is applied to function names
     */
    public getAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisStringsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisStrings(analysisId, page, pageSize, search, functionSearch, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisStringsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get string information found in the analysis
     * Get string information found in the Analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     * @param [functionSearch] Search is applied to function names
     */
    public getAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisStringsResponse> {
        return this.getAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, functionSearch, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisStringsResponse>) => apiResponse.data));
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param analysisId
     */
    public getAnalysisStringsStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisStringsStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisStringsStatus(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisStringsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param analysisId
     */
    public getAnalysisStringsStatus(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisStringsStatusResponse> {
        return this.getAnalysisStringsStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisStringsStatusResponse>) => apiResponse.data));
    }

    /**
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param functionId
     */
    public getFunctionBlocksWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionBlocksResponse>> {
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
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param functionId
     */
    public getFunctionBlocks(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseFunctionBlocksResponse> {
        return this.getFunctionBlocksWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionBlocksResponse>) => apiResponse.data));
    }

    /**
     * Get list of functions that call or are called by the specified function
     * @param functionId
     */
    public getFunctionCalleesCallersWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCalleesCallerFunctionsResponse>> {
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
     * Get list of functions that call or are called by the specified function
     * @param functionId
     */
    public getFunctionCalleesCallers(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseCalleesCallerFunctionsResponse> {
        return this.getFunctionCalleesCallersWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCalleesCallerFunctionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a functions capabilities
     * @param functionId
     */
    public getFunctionCapabilitiesWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionCapabilityResponse>> {
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
     * Retrieve a functions capabilities
     * @param functionId
     */
    public getFunctionCapabilities(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseFunctionCapabilityResponse> {
        return this.getFunctionCapabilitiesWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionCapabilityResponse>) => apiResponse.data));
    }

    /**
     * Get function details
     * @param functionId
     */
    public getFunctionDetailsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionsDetailResponse>> {
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
     * Get function details
     * @param functionId
     */
    public getFunctionDetails(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseFunctionsDetailResponse> {
        return this.getFunctionDetailsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionsDetailResponse>) => apiResponse.data));
    }

    /**
     * Get string information found in the function
     * Get string information found in the function
     * @param functionId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     */
    public getFunctionStringsWithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionStringsResponse>> {
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
     * Get string information found in the function
     * Get string information found in the function
     * @param functionId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     */
    public getFunctionStrings(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<BaseResponseFunctionStringsResponse> {
        return this.getFunctionStringsWithHttpInfo(functionId, page, pageSize, search, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionStringsResponse>) => apiResponse.data));
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
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param analysisId
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForAnalysisWithHttpInfo(analysisId: number, functionDataTypesParams: FunctionDataTypesParams, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGenerateFunctionDataTypes>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateFunctionDataTypesForAnalysis(analysisId, functionDataTypesParams, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateFunctionDataTypesForAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param analysisId
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForAnalysis(analysisId: number, functionDataTypesParams: FunctionDataTypesParams, _options?: ConfigurationOptions): Observable<BaseResponseGenerateFunctionDataTypes> {
        return this.generateFunctionDataTypesForAnalysisWithHttpInfo(analysisId, functionDataTypesParams, _options).pipe(map((apiResponse: HttpInfo<BaseResponseGenerateFunctionDataTypes>) => apiResponse.data));
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForFunctionsWithHttpInfo(functionDataTypesParams: FunctionDataTypesParams, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseGenerationStatusList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateFunctionDataTypesForFunctions(functionDataTypesParams, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateFunctionDataTypesForFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForFunctions(functionDataTypesParams: FunctionDataTypesParams, _options?: ConfigurationOptions): Observable<BaseResponseGenerationStatusList> {
        return this.generateFunctionDataTypesForFunctionsWithHttpInfo(functionDataTypesParams, _options).pipe(map((apiResponse: HttpInfo<BaseResponseGenerationStatusList>) => apiResponse.data));
    }

    /**
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param analysisId
     * @param functionId
     */
    public getFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionDataTypes>> {
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
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param analysisId
     * @param functionId
     */
    public getFunctionDataTypes(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseFunctionDataTypes> {
        return this.getFunctionDataTypesWithHttpInfo(analysisId, functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionDataTypes>) => apiResponse.data));
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param analysisId
     * @param [functionIds]
     */
    public listFunctionDataTypesForAnalysisWithHttpInfo(analysisId: number, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionDataTypesList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFunctionDataTypesForAnalysis(analysisId, functionIds, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFunctionDataTypesForAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param analysisId
     * @param [functionIds]
     */
    public listFunctionDataTypesForAnalysis(analysisId: number, functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<BaseResponseFunctionDataTypesList> {
        return this.listFunctionDataTypesForAnalysisWithHttpInfo(analysisId, functionIds, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionDataTypesList>) => apiResponse.data));
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param [functionIds]
     */
    public listFunctionDataTypesForFunctionsWithHttpInfo(functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionDataTypesList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFunctionDataTypesForFunctions(functionIds, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFunctionDataTypesForFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param [functionIds]
     */
    public listFunctionDataTypesForFunctions(functionIds?: Array<number>, _options?: ConfigurationOptions): Observable<BaseResponseFunctionDataTypesList> {
        return this.listFunctionDataTypesForFunctionsWithHttpInfo(functionIds, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionDataTypesList>) => apiResponse.data));
    }

    /**
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param analysisId
     * @param functionId
     * @param updateFunctionDataTypes
     */
    public updateFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, updateFunctionDataTypes: UpdateFunctionDataTypes, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionDataTypes>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFunctionDataTypes(analysisId, functionId, updateFunctionDataTypes, _config);
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
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param analysisId
     * @param functionId
     * @param updateFunctionDataTypes
     */
    public updateFunctionDataTypes(analysisId: number, functionId: number, updateFunctionDataTypes: UpdateFunctionDataTypes, _options?: ConfigurationOptions): Observable<BaseResponseFunctionDataTypes> {
        return this.updateFunctionDataTypesWithHttpInfo(analysisId, functionId, updateFunctionDataTypes, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionDataTypes>) => apiResponse.data));
    }

}

import { FunctionsDecompilationApiRequestFactory, FunctionsDecompilationApiResponseProcessor} from "../apis/FunctionsDecompilationApi";
export class ObservableFunctionsDecompilationApi {
    private requestFactory: FunctionsDecompilationApiRequestFactory;
    private responseProcessor: FunctionsDecompilationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsDecompilationApiRequestFactory,
        responseProcessor?: FunctionsDecompilationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsDecompilationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsDecompilationApiResponseProcessor();
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createDecompilationCommentWithHttpInfo(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDecompilationComment(functionId, functionCommentCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createDecompilationComment(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.createDecompilationCommentWithHttpInfo(functionId, functionCommentCreateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteDecompilationCommentWithHttpInfo(commentId: number, functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBool>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDecompilationComment(commentId, functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteDecompilationComment(commentId: number, functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseBool> {
        return this.deleteDecompilationCommentWithHttpInfo(commentId, functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBool>) => apiResponse.data));
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getDecompilationCommentsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDecompilationComments(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDecompilationCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getDecompilationComments(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseListCommentResponse> {
        return this.getDecompilationCommentsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListCommentResponse>) => apiResponse.data));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateDecompilationCommentWithHttpInfo(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCommentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDecompilationComment(commentId, functionId, commentUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDecompilationCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateDecompilationComment(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: ConfigurationOptions): Observable<BaseResponseCommentResponse> {
        return this.updateDecompilationCommentWithHttpInfo(commentId, functionId, commentUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCommentResponse>) => apiResponse.data));
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
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param functionsListRename
     */
    public batchRenameFunctionWithHttpInfo(functionsListRename: FunctionsListRename, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchRenameFunction(functionsListRename, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchRenameFunctionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param functionsListRename
     */
    public batchRenameFunction(functionsListRename: FunctionsListRename, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.batchRenameFunctionWithHttpInfo(functionsListRename, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param functionId
     */
    public getFunctionNameHistoryWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListFunctionNameHistory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionNameHistory(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionNameHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param functionId
     */
    public getFunctionNameHistory(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseListFunctionNameHistory> {
        return this.getFunctionNameHistoryWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListFunctionNameHistory>) => apiResponse.data));
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param functionId
     * @param functionRename
     */
    public renameFunctionIdWithHttpInfo(functionId: number, functionRename: FunctionRename, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.renameFunctionId(functionId, functionRename, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameFunctionIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param functionId
     * @param functionRename
     */
    public renameFunctionId(functionId: number, functionRename: FunctionRename, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.renameFunctionIdWithHttpInfo(functionId, functionRename, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

    /**
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param functionId
     * @param historyId
     */
    public revertFunctionNameWithHttpInfo(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
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
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param functionId
     * @param historyId
     */
    public revertFunctionName(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.revertFunctionNameWithHttpInfo(functionId, historyId, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

}

import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";
export class ObservableModelsApi {
    private requestFactory: ModelsApiRequestFactory;
    private responseProcessor: ModelsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelsApiRequestFactory,
        responseProcessor?: ModelsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ModelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ModelsApiResponseProcessor();
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     */
    public getModelsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseModelsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getModels(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getModelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     */
    public getModels(_options?: ConfigurationOptions): Observable<BaseResponseModelsResponse> {
        return this.getModelsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BaseResponseModelsResponse>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Searches for a specific binary
     * Binaries search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the binary being searched
     * @param [partialSha256] The partial or full sha256 of the binary being searched
     * @param [tags] The tags to be searched for
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     * @param [userFilesOnly] Whether to only search user\&#39;s uploaded files
     */
    public searchBinariesWithHttpInfo(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinarySearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchBinaries(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for a specific binary
     * Binaries search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the binary being searched
     * @param [partialSha256] The partial or full sha256 of the binary being searched
     * @param [tags] The tags to be searched for
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     * @param [userFilesOnly] Whether to only search user\&#39;s uploaded files
     */
    public searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, _options?: ConfigurationOptions): Observable<BaseResponseBinarySearchResponse> {
        return this.searchBinariesWithHttpInfo(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinarySearchResponse>) => apiResponse.data));
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialCollectionName] The partial or full name of the collection being searched
     * @param [partialBinaryName] The partial or full name of the binary belonging to the collection
     * @param [partialBinarySha256] The partial or full sha256 of the binary belonging to the collection
     * @param [tags] The tags to be searched for
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     * @param [filters] The filters to be used for the search
     * @param [orderBy] The field to sort the order by in the results
     * @param [orderByDirection] The order direction in which to return results
     */
    public searchCollectionsWithHttpInfo(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, modelName?: string, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchCollections(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, modelName, filters, orderBy, orderByDirection, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchCollectionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialCollectionName] The partial or full name of the collection being searched
     * @param [partialBinaryName] The partial or full name of the binary belonging to the collection
     * @param [partialBinarySha256] The partial or full sha256 of the binary belonging to the collection
     * @param [tags] The tags to be searched for
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     * @param [filters] The filters to be used for the search
     * @param [orderBy] The field to sort the order by in the results
     * @param [orderByDirection] The order direction in which to return results
     */
    public searchCollections(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, modelName?: string, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, _options?: ConfigurationOptions): Observable<BaseResponseCollectionSearchResponse> {
        return this.searchCollectionsWithHttpInfo(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, modelName, filters, orderBy, orderByDirection, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionSearchResponse>) => apiResponse.data));
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the function being searched
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     */
    public searchFunctionsWithHttpInfo(page?: number, pageSize?: number, partialName?: string, modelName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseFunctionSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchFunctions(page, pageSize, partialName, modelName, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the function being searched
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     */
    public searchFunctions(page?: number, pageSize?: number, partialName?: string, modelName?: string, _options?: ConfigurationOptions): Observable<BaseResponseFunctionSearchResponse> {
        return this.searchFunctionsWithHttpInfo(page, pageSize, partialName, modelName, _options).pipe(map((apiResponse: HttpInfo<BaseResponseFunctionSearchResponse>) => apiResponse.data));
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param partialName The partial or full name of the tag to search for
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public searchTagsWithHttpInfo(partialName: string, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseTagSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchTags(partialName, page, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param partialName The partial or full name of the tag to search for
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public searchTags(partialName: string, page?: number, pageSize?: number, _options?: ConfigurationOptions): Observable<BaseResponseTagSearchResponse> {
        return this.searchTagsWithHttpInfo(partialName, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<BaseResponseTagSearchResponse>) => apiResponse.data));
    }

}
