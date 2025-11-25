import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { AnalysisRecord } from '../models/AnalysisRecord';
import { AnalysisScope } from '../models/AnalysisScope';
import { AnalysisStringsResponse } from '../models/AnalysisStringsResponse';
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
import { BaseResponseAnalysisCreateResponse } from '../models/BaseResponseAnalysisCreateResponse';
import { BaseResponseAnalysisDetailResponse } from '../models/BaseResponseAnalysisDetailResponse';
import { BaseResponseAnalysisFunctionMapping } from '../models/BaseResponseAnalysisFunctionMapping';
import { BaseResponseAnalysisFunctions } from '../models/BaseResponseAnalysisFunctions';
import { BaseResponseAnalysisStringsResponse } from '../models/BaseResponseAnalysisStringsResponse';
import { BaseResponseAnalysisTags } from '../models/BaseResponseAnalysisTags';
import { BaseResponseAnalysisUpdateTagsResponse } from '../models/BaseResponseAnalysisUpdateTagsResponse';
import { BaseResponseBasic } from '../models/BaseResponseBasic';
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
import { BaseResponseGetPublicUserResponse } from '../models/BaseResponseGetPublicUserResponse';
import { BaseResponseGetUserResponse } from '../models/BaseResponseGetUserResponse';
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
import { FunctionLocalVariableResponse } from '../models/FunctionLocalVariableResponse';
import { FunctionMapping } from '../models/FunctionMapping';
import { FunctionMappingFull } from '../models/FunctionMappingFull';
import { FunctionMatchingBatchResponse } from '../models/FunctionMatchingBatchResponse';
import { FunctionMatchingFilters } from '../models/FunctionMatchingFilters';
import { FunctionMatchingRequest } from '../models/FunctionMatchingRequest';
import { FunctionMatchingResultWithBestMatch } from '../models/FunctionMatchingResultWithBestMatch';
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
import { GetPublicUserResponse } from '../models/GetPublicUserResponse';
import { GetUserResponse } from '../models/GetUserResponse';
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
import { ObservableAnalysesCommentsApi } from './ObservableAPI';

import { AnalysesCommentsApiRequestFactory, AnalysesCommentsApiResponseProcessor} from "../apis/AnalysesCommentsApi";
export class PromiseAnalysesCommentsApi {
    private api: ObservableAnalysesCommentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesCommentsApiRequestFactory,
        responseProcessor?: AnalysesCommentsApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param analysisId
     * @param commentBase
     */
    public createAnalysisCommentWithHttpInfo(analysisId: number, commentBase: CommentBase, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAnalysisCommentWithHttpInfo(analysisId, commentBase, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param analysisId
     * @param commentBase
     */
    public createAnalysisComment(analysisId: number, commentBase: CommentBase, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAnalysisComment(analysisId, commentBase, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param analysisId
     */
    public deleteAnalysisCommentWithHttpInfo(commentId: number, analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAnalysisCommentWithHttpInfo(commentId, analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param analysisId
     */
    public deleteAnalysisComment(commentId: number, analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAnalysisComment(commentId, analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param analysisId
     */
    public getAnalysisCommentsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisCommentsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param analysisId
     */
    public getAnalysisComments(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisComments(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param analysisId
     * @param commentUpdateRequest
     */
    public updateAnalysisCommentWithHttpInfo(commentId: number, analysisId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysisCommentWithHttpInfo(commentId, analysisId, commentUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param analysisId
     * @param commentUpdateRequest
     */
    public updateAnalysisComment(commentId: number, analysisId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysisComment(commentId, analysisId, commentUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



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
     * Begins an analysis
     * Create Analysis
     * @param analysisCreateRequest
     * @param [xRevEngApplication]
     */
    public createAnalysisWithHttpInfo(analysisCreateRequest: AnalysisCreateRequest, xRevEngApplication?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAnalysisWithHttpInfo(analysisCreateRequest, xRevEngApplication, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins an analysis
     * Create Analysis
     * @param analysisCreateRequest
     * @param [xRevEngApplication]
     */
    public createAnalysis(analysisCreateRequest: AnalysisCreateRequest, xRevEngApplication?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAnalysis(analysisCreateRequest, xRevEngApplication, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param analysisId
     */
    public deleteAnalysisWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAnalysisWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param analysisId
     */
    public deleteAnalysis(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseDict> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAnalysis(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param analysisId
     */
    public getAnalysisBasicInfoWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBasic>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfoWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param analysisId
     */
    public getAnalysisBasicInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBasic> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param analysisId
     */
    public getAnalysisFunctionMapWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctionMapping>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMapWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param analysisId
     */
    public getAnalysisFunctionMap(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisFunctionMapping> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMap(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param analysisId
     */
    public getAnalysisLogsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseLogs>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisLogsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param analysisId
     */
    public getAnalysisLogs(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseLogs> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisLogs(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param analysisId
     */
    public getAnalysisParamsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseParams>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisParamsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param analysisId
     */
    public getAnalysisParams(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseParams> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisParams(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param analysisId
     */
    public getAnalysisStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param analysisId
     */
    public getAnalysisStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStatus(analysisId, observableOptions);
        return result.toPromise();
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
    public listAnalysesWithHttpInfo(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatusInput, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseRecent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalysesWithHttpInfo(searchTerm, workspace, status, modelName, dynamicExecutionStatus, usernames, sha256Hash, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
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
    public listAnalyses(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatusInput, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<BaseResponseRecent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAnalyses(searchTerm, workspace, status, modelName, dynamicExecutionStatus, usernames, sha256Hash, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param binaryId
     */
    public lookupBinaryIdWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.lookupBinaryIdWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param binaryId
     */
    public lookupBinaryId(binaryId: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.lookupBinaryId(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param analysisId
     * @param reAnalysisForm
     * @param [xRevEngApplication]
     */
    public requeueAnalysisWithHttpInfo(analysisId: number, reAnalysisForm: ReAnalysisForm, xRevEngApplication?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCreated>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requeueAnalysisWithHttpInfo(analysisId, reAnalysisForm, xRevEngApplication, observableOptions);
        return result.toPromise();
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param analysisId
     * @param reAnalysisForm
     * @param [xRevEngApplication]
     */
    public requeueAnalysis(analysisId: number, reAnalysisForm: ReAnalysisForm, xRevEngApplication?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseCreated> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requeueAnalysis(analysisId, reAnalysisForm, xRevEngApplication, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param analysisId
     * @param analysisUpdateRequest
     */
    public updateAnalysisWithHttpInfo(analysisId: number, analysisUpdateRequest: AnalysisUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisDetailResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysisWithHttpInfo(analysisId, analysisUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param analysisId
     * @param analysisUpdateRequest
     */
    public updateAnalysis(analysisId: number, analysisUpdateRequest: AnalysisUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisDetailResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysis(analysisId, analysisUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param analysisId
     * @param analysisUpdateTagsRequest
     */
    public updateAnalysisTagsWithHttpInfo(analysisId: number, analysisUpdateTagsRequest: AnalysisUpdateTagsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisUpdateTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysisTagsWithHttpInfo(analysisId, analysisUpdateTagsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param analysisId
     * @param analysisUpdateTagsRequest
     */
    public updateAnalysisTags(analysisId: number, analysisUpdateTagsRequest: AnalysisUpdateTagsRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisUpdateTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAnalysisTags(analysisId, analysisUpdateTagsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload File
     * @param uploadFileType
     * @param file
     * @param [packedPassword]
     * @param [forceOverwrite]
     */
    public uploadFileWithHttpInfo(uploadFileType: UploadFileType, file: HttpFile, packedPassword?: string, forceOverwrite?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseUploadResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadFileWithHttpInfo(uploadFileType, file, packedPassword, forceOverwrite, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload File
     * @param uploadFileType
     * @param file
     * @param [packedPassword]
     * @param [forceOverwrite]
     */
    public uploadFile(uploadFileType: UploadFileType, file: HttpFile, packedPassword?: string, forceOverwrite?: boolean, _options?: PromiseConfigurationOptions): Promise<BaseResponseUploadResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadFile(uploadFileType, file, packedPassword, forceOverwrite, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAnalysesDynamicExecutionApi } from './ObservableAPI';

import { AnalysesDynamicExecutionApiRequestFactory, AnalysesDynamicExecutionApiResponseProcessor} from "../apis/AnalysesDynamicExecutionApi";
export class PromiseAnalysesDynamicExecutionApi {
    private api: ObservableAnalysesDynamicExecutionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesDynamicExecutionApiRequestFactory,
        responseProcessor?: AnalysesDynamicExecutionApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesDynamicExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the status of a dynamic execution task
     * @param analysisId
     */
    public getDynamicExecutionStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseDynamicExecutionStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the status of a dynamic execution task
     * @param analysisId
     */
    public getDynamicExecutionStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseDynamicExecutionStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDynamicExecutionStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for network overview
     * @param analysisId
     */
    public getNetworkOverviewWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseNetworkOverviewResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNetworkOverviewWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for network overview
     * @param analysisId
     */
    public getNetworkOverview(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseNetworkOverviewResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNetworkOverview(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param analysisId
     * @param dumpName
     */
    public getProcessDumpWithHttpInfo(analysisId: number, dumpName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessDumpWithHttpInfo(analysisId, dumpName, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param analysisId
     * @param dumpName
     */
    public getProcessDump(analysisId: number, dumpName: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessDump(analysisId, dumpName, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param analysisId
     */
    public getProcessDumpsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseProcessDumps>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessDumpsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param analysisId
     */
    public getProcessDumps(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseProcessDumps> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessDumps(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process registry
     * @param analysisId
     */
    public getProcessRegistryWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseProcessRegistry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessRegistryWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process registry
     * @param analysisId
     */
    public getProcessRegistry(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseProcessRegistry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessRegistry(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process tree
     * @param analysisId
     */
    public getProcessTreeWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseProcessTree>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessTreeWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for process tree
     * @param analysisId
     */
    public getProcessTree(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseProcessTree> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProcessTree(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for ttps
     * @param analysisId
     */
    public getTtpsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseTTPS>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTtpsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the dynamic execution results for ttps
     * @param analysisId
     */
    public getTtps(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseTTPS> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTtps(analysisId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAnalysesResultsMetadataApi } from './ObservableAPI';

import { AnalysesResultsMetadataApiRequestFactory, AnalysesResultsMetadataApiResponseProcessor} from "../apis/AnalysesResultsMetadataApi";
export class PromiseAnalysesResultsMetadataApi {
    private api: ObservableAnalysesResultsMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesResultsMetadataApiRequestFactory,
        responseProcessor?: AnalysesResultsMetadataApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesResultsMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the capabilities from the analysis
     * @param analysisId
     */
    public getCapabilitiesWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCapabilities>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCapabilitiesWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the capabilities from the analysis
     * @param analysisId
     */
    public getCapabilities(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseCapabilities> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCapabilities(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the communities found in the analysis
     * @param analysisId
     * @param [userName] The user name to limit communities to
     */
    public getCommunitiesWithHttpInfo(analysisId: number, userName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommunities>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommunitiesWithHttpInfo(analysisId, userName, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the communities found in the analysis
     * @param analysisId
     * @param [userName] The user name to limit communities to
     */
    public getCommunities(analysisId: number, userName?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommunities> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommunities(analysisId, userName, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param analysisId
     * @param [searchTerm]
     * @param [minVAddr]
     * @param [maxVAddr]
     */
    public getFunctionsListWithHttpInfo(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsListWithHttpInfo(analysisId, searchTerm, minVAddr, maxVAddr, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param analysisId
     * @param [searchTerm]
     * @param [minVAddr]
     * @param [maxVAddr]
     */
    public getFunctionsList(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisFunctions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsList(analysisId, searchTerm, minVAddr, maxVAddr, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the PDF found in the analysis
     * @param analysisId
     */
    public getPdfWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPdfWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the PDF found in the analysis
     * @param analysisId
     */
    public getPdf(analysisId: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPdf(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param analysisId
     */
    public getSbomWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListSBOM>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSbomWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param analysisId
     */
    public getSbom(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListSBOM> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSbom(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get function tags with maliciousness score
     * @param analysisId
     */
    public getTagsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisTags>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTagsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get function tags with maliciousness score
     * @param analysisId
     */
    public getTags(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisTags> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTags(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param analysisId
     */
    public getVulnerabilitiesWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseVulnerabilities>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVulnerabilitiesWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param analysisId
     */
    public getVulnerabilities(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseVulnerabilities> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVulnerabilities(analysisId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAnalysesSecurityChecksApi } from './ObservableAPI';

import { AnalysesSecurityChecksApiRequestFactory, AnalysesSecurityChecksApiResponseProcessor} from "../apis/AnalysesSecurityChecksApi";
export class PromiseAnalysesSecurityChecksApi {
    private api: ObservableAnalysesSecurityChecksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesSecurityChecksApiRequestFactory,
        responseProcessor?: AnalysesSecurityChecksApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesSecurityChecksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Queues a security check process
     * @param analysisId
     */
    public createScurityChecksTaskWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QueuedSecurityChecksTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createScurityChecksTaskWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a security check process
     * @param analysisId
     */
    public createScurityChecksTask(analysisId: number, _options?: PromiseConfigurationOptions): Promise<QueuedSecurityChecksTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createScurityChecksTask(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve security checks results with pagination.
     * Get Security Checks
     * @param analysisId
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public getSecurityChecksWithHttpInfo(analysisId: number, page: number, pageSize: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseSecurityChecksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecurityChecksWithHttpInfo(analysisId, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve security checks results with pagination.
     * Get Security Checks
     * @param analysisId
     * @param page The page number to retrieve.
     * @param pageSize Number of items per page.
     */
    public getSecurityChecks(analysisId: number, page: number, pageSize: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseSecurityChecksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecurityChecks(analysisId, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a security check process
     * @param analysisId
     */
    public getSecurityChecksTaskStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CheckSecurityChecksTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecurityChecksTaskStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a security check process
     * @param analysisId
     */
    public getSecurityChecksTaskStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<CheckSecurityChecksTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecurityChecksTaskStatus(analysisId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthenticationUsersApi } from './ObservableAPI';

import { AuthenticationUsersApiRequestFactory, AuthenticationUsersApiResponseProcessor} from "../apis/AuthenticationUsersApi";
export class PromiseAuthenticationUsersApi {
    private api: ObservableAuthenticationUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationUsersApiRequestFactory,
        responseProcessor?: AuthenticationUsersApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the requesters user information
     */
    public getRequesterUserInfoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGetUserResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequesterUserInfoWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the requesters user information
     */
    public getRequesterUserInfo(_options?: PromiseConfigurationOptions): Promise<BaseResponseGetUserResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRequesterUserInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get a user\'s public information
     * @param userId
     */
    public getUserWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGetPublicUserResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a user\'s public information
     * @param userId
     */
    public getUser(userId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseGetPublicUserResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUser(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get auth user activity
     */
    public getUserActivityWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListUserActivityResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivityWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get auth user activity
     */
    public getUserActivity(_options?: PromiseConfigurationOptions): Promise<BaseResponseListUserActivityResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserActivity(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     */
    public getUserCommentsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserCommentsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     */
    public getUserComments(_options?: PromiseConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserComments(observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param loginRequest
     */
    public loginUserWithHttpInfo(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseLoginResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginUserWithHttpInfo(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param loginRequest
     */
    public loginUser(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseLoginResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginUser(loginRequest, observableOptions);
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
     * Downloads a zipped binary with password protection
     * @param binaryId
     */
    public downloadZippedBinaryWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadZippedBinaryWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downloads a zipped binary with password protection
     * @param binaryId
     */
    public downloadZippedBinary(binaryId: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadZippedBinary(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryAdditionalResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetails(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinaryAdditionalResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetails(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the details of a binary
     * @param binaryId
     */
    public getBinaryDetailsWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryDetailsWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the details of a binary
     * @param binaryId
     */
    public getBinaryDetails(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinaryDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryDetails(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param binaryId
     */
    public getBinaryDieInfoWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListDieMatch>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryDieInfoWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param binaryId
     */
    public getBinaryDieInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListDieMatch> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryDieInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param binaryId
     */
    public getBinaryExternalsWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryExternalsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryExternalsWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param binaryId
     */
    public getBinaryExternals(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinaryExternalsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryExternals(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param binaryId
     */
    public getRelatedBinariesWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseChildBinariesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRelatedBinariesWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param binaryId
     */
    public getRelatedBinaries(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseChildBinariesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRelatedBinaries(binaryId, observableOptions);
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
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param collectionCreateRequest
     */
    public createCollectionWithHttpInfo(collectionCreateRequest: CollectionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCollectionWithHttpInfo(collectionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param collectionCreateRequest
     */
    public createCollection(collectionCreateRequest: CollectionCreateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCollection(collectionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param collectionId
     */
    public deleteCollectionWithHttpInfo(collectionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCollectionWithHttpInfo(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param collectionId
     */
    public deleteCollection(collectionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCollection(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     */
    public getCollectionWithHttpInfo(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionWithHttpInfo(collectionId, includeTags, includeBinaries, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param collectionId
     * @param [includeTags]
     * @param [includeBinaries]
     */
    public getCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollection(collectionId, includeTags, includeBinaries, observableOptions);
        return result.toPromise();
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
    public listCollectionsWithHttpInfo(searchTerm?: string, filters?: Array<Filters>, limit?: number, offset?: number, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCollectionResults>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCollectionsWithHttpInfo(searchTerm, filters, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
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
    public listCollections(searchTerm?: string, filters?: Array<Filters>, limit?: number, offset?: number, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<BaseResponseListCollectionResults> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCollections(searchTerm, filters, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param collectionId
     * @param collectionUpdateRequest
     */
    public updateCollectionWithHttpInfo(collectionId: number, collectionUpdateRequest: CollectionUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionWithHttpInfo(collectionId, collectionUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param collectionId
     * @param collectionUpdateRequest
     */
    public updateCollection(collectionId: number, collectionUpdateRequest: CollectionUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollection(collectionId, collectionUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param collectionId
     * @param collectionBinariesUpdateRequest
     */
    public updateCollectionBinariesWithHttpInfo(collectionId: number, collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionBinariesUpdateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionBinariesWithHttpInfo(collectionId, collectionBinariesUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param collectionId
     * @param collectionBinariesUpdateRequest
     */
    public updateCollectionBinaries(collectionId: number, collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionBinariesUpdateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionBinaries(collectionId, collectionBinariesUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param collectionId
     * @param collectionTagsUpdateRequest
     */
    public updateCollectionTagsWithHttpInfo(collectionId: number, collectionTagsUpdateRequest: CollectionTagsUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionTagsUpdateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionTagsWithHttpInfo(collectionId, collectionTagsUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param collectionId
     * @param collectionTagsUpdateRequest
     */
    public updateCollectionTags(collectionId: number, collectionTagsUpdateRequest: CollectionTagsUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionTagsUpdateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCollectionTags(collectionId, collectionTagsUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableExternalSourcesApi } from './ObservableAPI';

import { ExternalSourcesApiRequestFactory, ExternalSourcesApiResponseProcessor} from "../apis/ExternalSourcesApi";
export class PromiseExternalSourcesApi {
    private api: ObservableExternalSourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalSourcesApiRequestFactory,
        responseProcessor?: ExternalSourcesApiResponseProcessor
    ) {
        this.api = new ObservableExternalSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskMbWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseStr>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExternalTaskMbWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskMb(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseStr> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExternalTaskMb(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskVtWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseStr>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExternalTaskVtWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Pulls data from VirusTotal
     * @param analysisId
     */
    public createExternalTaskVt(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseStr> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExternalTaskVt(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get MalwareBazaar data
     * @param analysisId
     */
    public getMbDataWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseExternalResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMbDataWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get MalwareBazaar data
     * @param analysisId
     */
    public getMbData(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseExternalResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMbData(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of MalwareBazaar data retrieval
     * @param analysisId
     */
    public getMbTaskStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMbTaskStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of MalwareBazaar data retrieval
     * @param analysisId
     */
    public getMbTaskStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMbTaskStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get VirusTotal data
     * @param analysisId
     */
    public getVtDataWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseExternalResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVtDataWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get VirusTotal data
     * @param analysisId
     */
    public getVtData(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseExternalResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVtData(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param analysisId
     */
    public getVtTaskStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVtTaskStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param analysisId
     */
    public getVtTaskStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getVtTaskStatus(analysisId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirmwareApi } from './ObservableAPI';

import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi";
export class PromiseFirmwareApi {
    private api: ObservableFirmwareApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirmwareApiRequestFactory,
        responseProcessor?: FirmwareApiResponseProcessor
    ) {
        this.api = new ObservableFirmwareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param taskId
     */
    public getBinariesForFirmwareTaskWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinariesForFirmwareTaskWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param taskId
     */
    public getBinariesForFirmwareTask(taskId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinariesForFirmwareTask(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param file
     * @param [password]
     */
    public uploadFirmwareWithHttpInfo(file: HttpFile, password?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadFirmwareWithHttpInfo(file, password, observableOptions);
        return result.toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param file
     * @param [password]
     */
    public uploadFirmware(file: HttpFile, password?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadFirmware(file, password, observableOptions);
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
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createAiDecompilationCommentWithHttpInfo(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationCommentWithHttpInfo(functionId, functionCommentCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createAiDecompilationComment(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationComment(functionId, functionCommentCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param functionId The ID of the function for which we are creating the decompilation task
     */
    public createAiDecompilationTaskWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationTaskWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param functionId The ID of the function for which we are creating the decompilation task
     */
    public createAiDecompilationTask(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationTask(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteAiDecompilationCommentWithHttpInfo(commentId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAiDecompilationCommentWithHttpInfo(commentId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteAiDecompilationComment(commentId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAiDecompilationComment(commentId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getAiDecompilationCommentsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationCommentsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getAiDecompilationComments(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationComments(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRatingWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGetAiDecompilationRatingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationRatingWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRating(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseGetAiDecompilationRatingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationRating(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param functionId The ID of the function being decompiled
     * @param [summarise] Generate a summary for the decompilation
     * @param [generateInlineComments] Generate inline comments for the decompilation (only works if summarise is enabled)
     */
    public getAiDecompilationTaskResultWithHttpInfo(functionId: number, summarise?: boolean, generateInlineComments?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGetAiDecompilationTask>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTaskResultWithHttpInfo(functionId, summarise, generateInlineComments, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param functionId The ID of the function being decompiled
     * @param [summarise] Generate a summary for the decompilation
     * @param [generateInlineComments] Generate inline comments for the decompilation (only works if summarise is enabled)
     */
    public getAiDecompilationTaskResult(functionId: number, summarise?: boolean, generateInlineComments?: boolean, _options?: PromiseConfigurationOptions): Promise<BaseResponseGetAiDecompilationTask> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTaskResult(functionId, summarise, generateInlineComments, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a function ai decompilation
     * @param functionId The ID of the function being checked
     */
    public getAiDecompilationTaskStatusWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTaskStatusWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a function ai decompilation
     * @param functionId The ID of the function being checked
     */
    public getAiDecompilationTaskStatus(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationTaskStatus(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateAiDecompilationCommentWithHttpInfo(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAiDecompilationCommentWithHttpInfo(commentId, functionId, commentUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateAiDecompilationComment(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAiDecompilationComment(commentId, functionId, commentUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upsert rating for AI decompilation
     * @param functionId The ID of the function being rated
     * @param upsertAiDecomplationRatingRequest
     */
    public upsertAiDecompilationRatingWithHttpInfo(functionId: number, upsertAiDecomplationRatingRequest: UpsertAiDecomplationRatingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.upsertAiDecompilationRatingWithHttpInfo(functionId, upsertAiDecomplationRatingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upsert rating for AI decompilation
     * @param functionId The ID of the function being rated
     * @param upsertAiDecomplationRatingRequest
     */
    public upsertAiDecompilationRating(functionId: number, upsertAiDecomplationRatingRequest: UpsertAiDecomplationRatingRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.upsertAiDecompilationRating(functionId, upsertAiDecomplationRatingRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsBlockCommentsApi } from './ObservableAPI';

import { FunctionsBlockCommentsApiRequestFactory, FunctionsBlockCommentsApiResponseProcessor} from "../apis/FunctionsBlockCommentsApi";
export class PromiseFunctionsBlockCommentsApi {
    private api: ObservableFunctionsBlockCommentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsBlockCommentsApiRequestFactory,
        responseProcessor?: FunctionsBlockCommentsApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsBlockCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate block comments for a specific block in a function
     * @param functionId
     * @param block
     */
    public generateBlockCommentsForBlockInFunctionWithHttpInfo(functionId: number, block: Block, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateBlockCommentsForBlockInFunctionWithHttpInfo(functionId, block, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate block comments for a specific block in a function
     * @param functionId
     * @param block
     */
    public generateBlockCommentsForBlockInFunction(functionId: number, block: Block, _options?: PromiseConfigurationOptions): Promise<BaseResponseBlockCommentsGenerationForFunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateBlockCommentsForBlockInFunction(functionId, block, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate block comments for a function
     * @param functionId
     */
    public generateBlockCommentsForFunctionWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBlockCommentsGenerationForFunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateBlockCommentsForFunctionWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate block comments for a function
     * @param functionId
     */
    public generateBlockCommentsForFunction(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBlockCommentsGenerationForFunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateBlockCommentsForFunction(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate overview comment for a function
     * @param functionId
     */
    public generateOverviewCommentForFunctionWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBlockCommentsOverviewGenerationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateOverviewCommentForFunctionWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate overview comment for a function
     * @param functionId
     */
    public generateOverviewCommentForFunction(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBlockCommentsOverviewGenerationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateOverviewCommentForFunction(functionId, observableOptions);
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
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param aiUnstripRequest
     */
    public aiUnstripWithHttpInfo(analysisId: number, aiUnstripRequest: AiUnstripRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.aiUnstripWithHttpInfo(analysisId, aiUnstripRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param aiUnstripRequest
     */
    public aiUnstrip(analysisId: number, aiUnstripRequest: AiUnstripRequest, _options?: PromiseConfigurationOptions): Promise<AutoUnstripResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.aiUnstrip(analysisId, aiUnstripRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param analysisId
     * @param analysisFunctionMatchingRequest
     */
    public analysisFunctionMatchingWithHttpInfo(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionMatchingBatchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.analysisFunctionMatchingWithHttpInfo(analysisId, analysisFunctionMatchingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param analysisId
     * @param analysisFunctionMatchingRequest
     */
    public analysisFunctionMatching(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<FunctionMatchingBatchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.analysisFunctionMatching(analysisId, analysisFunctionMatchingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param autoUnstripRequest
     */
    public autoUnstripWithHttpInfo(analysisId: number, autoUnstripRequest: AutoUnstripRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.autoUnstripWithHttpInfo(analysisId, autoUnstripRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param analysisId
     * @param autoUnstripRequest
     */
    public autoUnstrip(analysisId: number, autoUnstripRequest: AutoUnstripRequest, _options?: PromiseConfigurationOptions): Promise<AutoUnstripResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.autoUnstrip(analysisId, autoUnstripRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest
     */
    public batchFunctionMatchingWithHttpInfo(functionMatchingRequest: FunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionMatchingBatchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchFunctionMatchingWithHttpInfo(functionMatchingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest
     */
    public batchFunctionMatching(functionMatchingRequest: FunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<FunctionMatchingBatchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchFunctionMatching(functionMatchingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param analysisId
     */
    public cancelAiUnstripWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelAiUnstripWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param analysisId
     */
    public cancelAiUnstrip(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AutoUnstripResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelAiUnstrip(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param analysisId
     */
    public cancelAutoUnstripWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelAutoUnstripWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param analysisId
     */
    public cancelAutoUnstrip(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AutoUnstripResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelAutoUnstrip(analysisId, observableOptions);
        return result.toPromise();
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
    public getAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStringsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, functionSearch, observableOptions);
        return result.toPromise();
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
    public getAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisStringsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStrings(analysisId, page, pageSize, search, functionSearch, observableOptions);
        return result.toPromise();
    }

    /**
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param functionId
     */
    public getFunctionBlocksWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionBlocksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocksWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param functionId
     */
    public getFunctionBlocks(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionBlocksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocks(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of functions that call or are called by the specified function
     * @param functionId
     */
    public getFunctionCalleesCallersWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCalleesCallerFunctionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallersWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of functions that call or are called by the specified function
     * @param functionId
     */
    public getFunctionCalleesCallers(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseCalleesCallerFunctionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallers(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a functions capabilities
     * @param functionId
     */
    public getFunctionCapabilitiesWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionCapabilityResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilitiesWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a functions capabilities
     * @param functionId
     */
    public getFunctionCapabilities(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionCapabilityResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilities(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get function details
     * @param functionId
     */
    public getFunctionDetailsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionsDetailResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetailsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get function details
     * @param functionId
     */
    public getFunctionDetails(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionsDetailResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetails(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get string information found in the function
     * Get string information found in the function
     * @param functionId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     */
    public getFunctionStringsWithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionStringsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStringsWithHttpInfo(functionId, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Get string information found in the function
     * Get string information found in the function
     * @param functionId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [search] Search is applied to string value
     */
    public getFunctionStrings(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionStringsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStrings(functionId, page, pageSize, search, observableOptions);
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
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param analysisId
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForAnalysisWithHttpInfo(analysisId: number, functionDataTypesParams: FunctionDataTypesParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGenerateFunctionDataTypes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateFunctionDataTypesForAnalysisWithHttpInfo(analysisId, functionDataTypesParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param analysisId
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForAnalysis(analysisId: number, functionDataTypesParams: FunctionDataTypesParams, _options?: PromiseConfigurationOptions): Promise<BaseResponseGenerateFunctionDataTypes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateFunctionDataTypesForAnalysis(analysisId, functionDataTypesParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForFunctionsWithHttpInfo(functionDataTypesParams: FunctionDataTypesParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseGenerationStatusList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateFunctionDataTypesForFunctionsWithHttpInfo(functionDataTypesParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param functionDataTypesParams
     */
    public generateFunctionDataTypesForFunctions(functionDataTypesParams: FunctionDataTypesParams, _options?: PromiseConfigurationOptions): Promise<BaseResponseGenerationStatusList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateFunctionDataTypesForFunctions(functionDataTypesParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param analysisId
     * @param functionId
     */
    public getFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDataTypesWithHttpInfo(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param analysisId
     * @param functionId
     */
    public getFunctionDataTypes(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionDataTypes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDataTypes(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param analysisId
     * @param [functionIds]
     */
    public listFunctionDataTypesForAnalysisWithHttpInfo(analysisId: number, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypesList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionDataTypesForAnalysisWithHttpInfo(analysisId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param analysisId
     * @param [functionIds]
     */
    public listFunctionDataTypesForAnalysis(analysisId: number, functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionDataTypesList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionDataTypesForAnalysis(analysisId, functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param [functionIds]
     */
    public listFunctionDataTypesForFunctionsWithHttpInfo(functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypesList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionDataTypesForFunctionsWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param [functionIds]
     */
    public listFunctionDataTypesForFunctions(functionIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionDataTypesList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionDataTypesForFunctions(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param analysisId
     * @param functionId
     * @param updateFunctionDataTypes
     */
    public updateFunctionDataTypesWithHttpInfo(analysisId: number, functionId: number, updateFunctionDataTypes: UpdateFunctionDataTypes, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionDataTypesWithHttpInfo(analysisId, functionId, updateFunctionDataTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param analysisId
     * @param functionId
     * @param updateFunctionDataTypes
     */
    public updateFunctionDataTypes(analysisId: number, functionId: number, updateFunctionDataTypes: UpdateFunctionDataTypes, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionDataTypes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionDataTypes(analysisId, functionId, updateFunctionDataTypes, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsDecompilationApi } from './ObservableAPI';

import { FunctionsDecompilationApiRequestFactory, FunctionsDecompilationApiResponseProcessor} from "../apis/FunctionsDecompilationApi";
export class PromiseFunctionsDecompilationApi {
    private api: ObservableFunctionsDecompilationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsDecompilationApiRequestFactory,
        responseProcessor?: FunctionsDecompilationApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsDecompilationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createDecompilationCommentWithHttpInfo(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDecompilationCommentWithHttpInfo(functionId, functionCommentCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param functionId
     * @param functionCommentCreateRequest
     */
    public createDecompilationComment(functionId: number, functionCommentCreateRequest: FunctionCommentCreateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDecompilationComment(functionId, functionCommentCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteDecompilationCommentWithHttpInfo(commentId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDecompilationCommentWithHttpInfo(commentId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param commentId
     * @param functionId
     */
    public deleteDecompilationComment(commentId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDecompilationComment(commentId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getDecompilationCommentsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDecompilationCommentsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param functionId
     */
    public getDecompilationComments(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDecompilationComments(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateDecompilationCommentWithHttpInfo(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDecompilationCommentWithHttpInfo(commentId, functionId, commentUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param commentId
     * @param functionId
     * @param commentUpdateRequest
     */
    public updateDecompilationComment(commentId: number, functionId: number, commentUpdateRequest: CommentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseCommentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDecompilationComment(commentId, functionId, commentUpdateRequest, observableOptions);
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
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param functionsListRename
     */
    public batchRenameFunctionWithHttpInfo(functionsListRename: FunctionsListRename, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchRenameFunctionWithHttpInfo(functionsListRename, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param functionsListRename
     */
    public batchRenameFunction(functionsListRename: FunctionsListRename, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchRenameFunction(functionsListRename, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param functionId
     */
    public getFunctionNameHistoryWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListFunctionNameHistory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionNameHistoryWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param functionId
     */
    public getFunctionNameHistory(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseListFunctionNameHistory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionNameHistory(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param functionId
     * @param functionRename
     */
    public renameFunctionIdWithHttpInfo(functionId: number, functionRename: FunctionRename, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFunctionIdWithHttpInfo(functionId, functionRename, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param functionId
     * @param functionRename
     */
    public renameFunctionId(functionId: number, functionRename: FunctionRename, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFunctionId(functionId, functionRename, observableOptions);
        return result.toPromise();
    }

    /**
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param functionId
     * @param historyId
     */
    public revertFunctionNameWithHttpInfo(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionNameWithHttpInfo(functionId, historyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param functionId
     * @param historyId
     */
    public revertFunctionName(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionName(functionId, historyId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableModelsApi } from './ObservableAPI';

import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";
export class PromiseModelsApi {
    private api: ObservableModelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelsApiRequestFactory,
        responseProcessor?: ModelsApiResponseProcessor
    ) {
        this.api = new ObservableModelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     */
    public getModelsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseModelsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getModelsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     */
    public getModels(_options?: PromiseConfigurationOptions): Promise<BaseResponseModelsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getModels(observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
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
    public searchBinariesWithHttpInfo(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinarySearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinariesWithHttpInfo(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, observableOptions);
        return result.toPromise();
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
    public searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinarySearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinaries(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, observableOptions);
        return result.toPromise();
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
    public searchCollectionsWithHttpInfo(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, modelName?: string, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCollectionsWithHttpInfo(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, modelName, filters, orderBy, orderByDirection, observableOptions);
        return result.toPromise();
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
    public searchCollections(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, modelName?: string, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCollections(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, modelName, filters, orderBy, orderByDirection, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the function being searched
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     */
    public searchFunctionsWithHttpInfo(page?: number, pageSize?: number, partialName?: string, modelName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchFunctionsWithHttpInfo(page, pageSize, partialName, modelName, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     * @param [partialName] The partial or full name of the function being searched
     * @param [modelName] The name of the model used to analyze the binary the function belongs to
     */
    public searchFunctions(page?: number, pageSize?: number, partialName?: string, modelName?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseFunctionSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchFunctions(page, pageSize, partialName, modelName, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param partialName The partial or full name of the tag to search for
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public searchTagsWithHttpInfo(partialName: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseTagSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchTagsWithHttpInfo(partialName, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param partialName The partial or full name of the tag to search for
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public searchTags(partialName: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseTagSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchTags(partialName, page, pageSize, observableOptions);
        return result.toPromise();
    }


}



