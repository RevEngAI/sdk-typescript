import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AdditionalDetailsStatusResponse } from '../models/AdditionalDetailsStatusResponse';
import { Addr } from '../models/Addr';
import { AiDecompilationRating } from '../models/AiDecompilationRating';
import { AiDecompilationTaskStatus } from '../models/AiDecompilationTaskStatus';
import { AiUnstripRequest } from '../models/AiUnstripRequest';
import { AnalysisAccessInfo } from '../models/AnalysisAccessInfo';
import { AnalysisBulkAddTagsRequest } from '../models/AnalysisBulkAddTagsRequest';
import { AnalysisBulkAddTagsResponse } from '../models/AnalysisBulkAddTagsResponse';
import { AnalysisBulkAddTagsResponseItem } from '../models/AnalysisBulkAddTagsResponseItem';
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
import { AnalysisStage } from '../models/AnalysisStage';
import { AnalysisStageStatus } from '../models/AnalysisStageStatus';
import { AnalysisStagesResponse } from '../models/AnalysisStagesResponse';
import { AnalysisStringInput } from '../models/AnalysisStringInput';
import { AnalysisStringsResponse } from '../models/AnalysisStringsResponse';
import { AnalysisStringsStatusResponse } from '../models/AnalysisStringsStatusResponse';
import { AnalysisTags } from '../models/AnalysisTags';
import { AnalysisUpdateRequest } from '../models/AnalysisUpdateRequest';
import { AnalysisUpdateTagsRequest } from '../models/AnalysisUpdateTagsRequest';
import { AnalysisUpdateTagsResponse } from '../models/AnalysisUpdateTagsResponse';
import { AppApiRestV2AgentSchemaCapability } from '../models/AppApiRestV2AgentSchemaCapability';
import { AppApiRestV2AnalysesEnumsDynamicExecutionStatus } from '../models/AppApiRestV2AnalysesEnumsDynamicExecutionStatus';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { AppApiRestV2CollectionsEnumsOrderBy } from '../models/AppApiRestV2CollectionsEnumsOrderBy';
import { AppApiRestV2FunctionsResponsesFunction } from '../models/AppApiRestV2FunctionsResponsesFunction';
import { AppApiRestV2FunctionsTypesFunction } from '../models/AppApiRestV2FunctionsTypesFunction';
import { AppApiRestV2InfoTypesCapability } from '../models/AppApiRestV2InfoTypesCapability';
import { AppServicesDynamicExecutionSchemasDynamicExecutionStatus } from '../models/AppServicesDynamicExecutionSchemasDynamicExecutionStatus';
import { Argument } from '../models/Argument';
import { AutoRunAgents } from '../models/AutoRunAgents';
import { AutoUnstripRequest } from '../models/AutoUnstripRequest';
import { AutoUnstripResponse } from '../models/AutoUnstripResponse';
import { BaseResponse } from '../models/BaseResponse';
import { BaseResponseAdditionalDetailsStatusResponse } from '../models/BaseResponseAdditionalDetailsStatusResponse';
import { BaseResponseAnalysisBulkAddTagsResponse } from '../models/BaseResponseAnalysisBulkAddTagsResponse';
import { BaseResponseAnalysisCreateResponse } from '../models/BaseResponseAnalysisCreateResponse';
import { BaseResponseAnalysisDetailResponse } from '../models/BaseResponseAnalysisDetailResponse';
import { BaseResponseAnalysisFunctionMapping } from '../models/BaseResponseAnalysisFunctionMapping';
import { BaseResponseAnalysisFunctions } from '../models/BaseResponseAnalysisFunctions';
import { BaseResponseAnalysisFunctionsList } from '../models/BaseResponseAnalysisFunctionsList';
import { BaseResponseAnalysisStagesResponse } from '../models/BaseResponseAnalysisStagesResponse';
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
import { BaseResponseBool } from '../models/BaseResponseBool';
import { BaseResponseCalleesCallerFunctionsResponse } from '../models/BaseResponseCalleesCallerFunctionsResponse';
import { BaseResponseCapabilities } from '../models/BaseResponseCapabilities';
import { BaseResponseCapabilitiesAgentResponse } from '../models/BaseResponseCapabilitiesAgentResponse';
import { BaseResponseChildBinariesResponse } from '../models/BaseResponseChildBinariesResponse';
import { BaseResponseCollectionBinariesUpdateResponse } from '../models/BaseResponseCollectionBinariesUpdateResponse';
import { BaseResponseCollectionResponse } from '../models/BaseResponseCollectionResponse';
import { BaseResponseCollectionSearchResponse } from '../models/BaseResponseCollectionSearchResponse';
import { BaseResponseCollectionTagsUpdateResponse } from '../models/BaseResponseCollectionTagsUpdateResponse';
import { BaseResponseCommentResponse } from '../models/BaseResponseCommentResponse';
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
import { BaseResponseGetAiDecompilationTask } from '../models/BaseResponseGetAiDecompilationTask';
import { BaseResponseGetMeResponse } from '../models/BaseResponseGetMeResponse';
import { BaseResponseGetPublicUserResponse } from '../models/BaseResponseGetPublicUserResponse';
import { BaseResponseListCalleesCallerFunctionsResponse } from '../models/BaseResponseListCalleesCallerFunctionsResponse';
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
import { BaseResponsePipelineStatusResponse } from '../models/BaseResponsePipelineStatusResponse';
import { BaseResponseProcessDumps } from '../models/BaseResponseProcessDumps';
import { BaseResponseProcessRegistry } from '../models/BaseResponseProcessRegistry';
import { BaseResponseProcessTree } from '../models/BaseResponseProcessTree';
import { BaseResponseQueuedWorkflowTaskResponse } from '../models/BaseResponseQueuedWorkflowTaskResponse';
import { BaseResponseRecent } from '../models/BaseResponseRecent';
import { BaseResponseReportAnalysisResponse } from '../models/BaseResponseReportAnalysisResponse';
import { BaseResponseStatus } from '../models/BaseResponseStatus';
import { BaseResponseStr } from '../models/BaseResponseStr';
import { BaseResponseTTPS } from '../models/BaseResponseTTPS';
import { BaseResponseTagSearchResponse } from '../models/BaseResponseTagSearchResponse';
import { BaseResponseTaskResponse } from '../models/BaseResponseTaskResponse';
import { BaseResponseTaskStatusResponse } from '../models/BaseResponseTaskStatusResponse';
import { BaseResponseTriageReportResponse } from '../models/BaseResponseTriageReportResponse';
import { BaseResponseUnionGetAiDecompilationRatingResponseNoneType } from '../models/BaseResponseUnionGetAiDecompilationRatingResponseNoneType';
import { BaseResponseUploadResponse } from '../models/BaseResponseUploadResponse';
import { BaseResponseVulnerabilities } from '../models/BaseResponseVulnerabilities';
import { BaseResponseXrefResponse } from '../models/BaseResponseXrefResponse';
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
import { BulkDeleteAnalysesRequest } from '../models/BulkDeleteAnalysesRequest';
import { CalleeFunctionInfo } from '../models/CalleeFunctionInfo';
import { CalleesCallerFunctionsResponse } from '../models/CalleesCallerFunctionsResponse';
import { CallerFunctionInfo } from '../models/CallerFunctionInfo';
import { Capabilities } from '../models/Capabilities';
import { CapabilitiesAgentResponse } from '../models/CapabilitiesAgentResponse';
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
import { IOC } from '../models/IOC';
import { ISA } from '../models/ISA';
import { IconModel } from '../models/IconModel';
import { ImportModel } from '../models/ImportModel';
import { InsertAnalysisLogRequest } from '../models/InsertAnalysisLogRequest';
import { InverseFunctionMapItem } from '../models/InverseFunctionMapItem';
import { InverseStringMapItem } from '../models/InverseStringMapItem';
import { InverseValue } from '../models/InverseValue';
import { ListCollectionResults } from '../models/ListCollectionResults';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Logs } from '../models/Logs';
import { MITRETechnique } from '../models/MITRETechnique';
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
import { PipelineStageStatus } from '../models/PipelineStageStatus';
import { PipelineStatusResponse } from '../models/PipelineStatusResponse';
import { Platform } from '../models/Platform';
import { Process } from '../models/Process';
import { ProcessDump } from '../models/ProcessDump';
import { ProcessDumpMetadata } from '../models/ProcessDumpMetadata';
import { ProcessDumps } from '../models/ProcessDumps';
import { ProcessDumpsData } from '../models/ProcessDumpsData';
import { ProcessRegistry } from '../models/ProcessRegistry';
import { ProcessTree } from '../models/ProcessTree';
import { PutAnalysisStringsRequest } from '../models/PutAnalysisStringsRequest';
import { QueuedWorkflowTaskResponse } from '../models/QueuedWorkflowTaskResponse';
import { ReAnalysisForm } from '../models/ReAnalysisForm';
import { Recent } from '../models/Recent';
import { Registry } from '../models/Registry';
import { RelativeBinaryResponse } from '../models/RelativeBinaryResponse';
import { ReportAnalysisResponse } from '../models/ReportAnalysisResponse';
import { SBOM } from '../models/SBOM';
import { SBOMPackage } from '../models/SBOMPackage';
import { SandboxOptions } from '../models/SandboxOptions';
import { ScrapeThirdPartyConfig } from '../models/ScrapeThirdPartyConfig';
import { SectionModel } from '../models/SectionModel';
import { SecurityModel } from '../models/SecurityModel';
import { SegmentInfo } from '../models/SegmentInfo';
import { SingleCodeCertificateModel } from '../models/SingleCodeCertificateModel';
import { SingleCodeSignatureModel } from '../models/SingleCodeSignatureModel';
import { SinglePDBEntryModel } from '../models/SinglePDBEntryModel';
import { SingleSectionModel } from '../models/SingleSectionModel';
import { StackVariable } from '../models/StackVariable';
import { StageEvent } from '../models/StageEvent';
import { StageStatus } from '../models/StageStatus';
import { StatusInput } from '../models/StatusInput';
import { StatusOutput } from '../models/StatusOutput';
import { StringFunctions } from '../models/StringFunctions';
import { StringSource } from '../models/StringSource';
import { Structure } from '../models/Structure';
import { StructureMember } from '../models/StructureMember';
import { SubmitUserFeedbackRequest } from '../models/SubmitUserFeedbackRequest';
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
import { TaskStatusResponse } from '../models/TaskStatusResponse';
import { TimestampModel } from '../models/TimestampModel';
import { TriageFunctionResponse } from '../models/TriageFunctionResponse';
import { TriageReportResponse } from '../models/TriageReportResponse';
import { TypeDefinition } from '../models/TypeDefinition';
import { UpdateFunctionDataTypes } from '../models/UpdateFunctionDataTypes';
import { UploadFileType } from '../models/UploadFileType';
import { UploadResponse } from '../models/UploadResponse';
import { UpsertAiDecomplationRatingRequest } from '../models/UpsertAiDecomplationRatingRequest';
import { UserActivityResponse } from '../models/UserActivityResponse';
import { Vulnerabilities } from '../models/Vulnerabilities';
import { Vulnerability } from '../models/Vulnerability';
import { Workspace } from '../models/Workspace';
import { XrefFromResponse } from '../models/XrefFromResponse';
import { XrefResponse } from '../models/XrefResponse';
import { XrefToResponse } from '../models/XrefToResponse';

import { ObservableAgentApi } from "./ObservableAPI";
import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";

export interface AgentApiCheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet
     */
    analysisId: number
}

export interface AgentApiCheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet
     */
    analysisId: number
}

export interface AgentApiCheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet
     */
    analysisId: number
}

export interface AgentApiCreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost
     */
    analysisId: number
}

export interface AgentApiCreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost
     */
    analysisId: number
}

export interface AgentApiCreateTriageTaskV2AnalysesAnalysisIdAgentTriagePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateTriageTaskV2AnalysesAnalysisIdAgentTriagePost
     */
    analysisId: number
}

export interface AgentApiGetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet
     */
    analysisId: number
}

export interface AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet
     */
    analysisId: number
}

export interface AgentApiGetTriageResultV2AnalysesAnalysisIdAgentTriageGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetTriageResultV2AnalysesAnalysisIdAgentTriageGet
     */
    analysisId: number
}

export class ObjectAgentApi {
    private api: ObservableAgentApi

    public constructor(configuration: Configuration, requestFactory?: AgentApiRequestFactory, responseProcessor?: AgentApiResponseProcessor) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param param the request object
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(param: AgentApiCheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param param the request object
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(param: AgentApiCheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a report analysis workflow
     * @param param the request object
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(param: AgentApiCheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a report analysis workflow
     * @param param the request object
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(param: AgentApiCheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a triage analysis workflow
     * @param param the request object
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(param: AgentApiCheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a triage analysis workflow
     * @param param the request object
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(param: AgentApiCheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param param the request object
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(param: AgentApiCreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        return this.api.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param param the request object
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(param: AgentApiCreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostRequest, options?: ConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        return this.api.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a combined report analysis workflow process
     * @param param the request object
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(param: AgentApiCreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueuedWorkflowTaskResponse>> {
        return this.api.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a combined report analysis workflow process
     * @param param the request object
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(param: AgentApiCreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostRequest, options?: ConfigurationOptions): Promise<QueuedWorkflowTaskResponse> {
        return this.api.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a triage analysis workflow process
     * @param param the request object
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(param: AgentApiCreateTriageTaskV2AnalysesAnalysisIdAgentTriagePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        return this.api.createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a triage analysis workflow process
     * @param param the request object
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(param: AgentApiCreateTriageTaskV2AnalysesAnalysisIdAgentTriagePostRequest, options?: ConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        return this.api.createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(param.analysisId,  options).toPromise();
    }

    /**
     * Get Capabilities Result
     * @param param the request object
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(param: AgentApiGetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCapabilitiesAgentResponse>> {
        return this.api.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get Capabilities Result
     * @param param the request object
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(param: AgentApiGetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetRequest, options?: ConfigurationOptions): Promise<BaseResponseCapabilitiesAgentResponse> {
        return this.api.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(param.analysisId,  options).toPromise();
    }

    /**
     * Get Report Analysis Result
     * @param param the request object
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(param: AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseReportAnalysisResponse>> {
        return this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get Report Analysis Result
     * @param param the request object
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(param: AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest, options?: ConfigurationOptions): Promise<BaseResponseReportAnalysisResponse> {
        return this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(param.analysisId,  options).toPromise();
    }

    /**
     * Get Triage Result
     * @param param the request object
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(param: AgentApiGetTriageResultV2AnalysesAnalysisIdAgentTriageGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseTriageReportResponse>> {
        return this.api.getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get Triage Result
     * @param param the request object
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGet(param: AgentApiGetTriageResultV2AnalysesAnalysisIdAgentTriageGetRequest, options?: ConfigurationOptions): Promise<BaseResponseTriageReportResponse> {
        return this.api.getTriageResultV2AnalysesAnalysisIdAgentTriageGet(param.analysisId,  options).toPromise();
    }

}

import { ObservableAnalysesCommentsApi } from "./ObservableAPI";
import { AnalysesCommentsApiRequestFactory, AnalysesCommentsApiResponseProcessor} from "../apis/AnalysesCommentsApi";

export interface AnalysesCommentsApiCreateAnalysisCommentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    analysisId: number
    /**
     * 
     * @type CommentBase
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    commentBase: CommentBase
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCommentsApicreateAnalysisComment
     */
    maxRetryAttempts?: number
}

export interface AnalysesCommentsApiDeleteAnalysisCommentRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    commentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCommentsApideleteAnalysisComment
     */
    maxRetryAttempts?: number
}

export interface AnalysesCommentsApiGetAnalysisCommentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    maxRetryAttempts?: number
}

export interface AnalysesCommentsApiUpdateAnalysisCommentRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    commentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    analysisId: number
    /**
     * 
     * @type CommentUpdateRequest
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    commentUpdateRequest: CommentUpdateRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCommentsApiupdateAnalysisComment
     */
    maxRetryAttempts?: number
}

export class ObjectAnalysesCommentsApi {
    private api: ObservableAnalysesCommentsApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesCommentsApiRequestFactory, responseProcessor?: AnalysesCommentsApiResponseProcessor) {
        this.api = new ObservableAnalysesCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param param the request object
     */
    public createAnalysisCommentWithHttpInfo(param: AnalysesCommentsApiCreateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        return this.api.createAnalysisCommentWithHttpInfo(param.analysisId, param.commentBase, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param param the request object
     */
    public createAnalysisComment(param: AnalysesCommentsApiCreateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.createAnalysisComment(param.analysisId, param.commentBase, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAnalysisCommentWithHttpInfo(param: AnalysesCommentsApiDeleteAnalysisCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        return this.api.deleteAnalysisCommentWithHttpInfo(param.commentId, param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAnalysisComment(param: AnalysesCommentsApiDeleteAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseBool> {
        return this.api.deleteAnalysisComment(param.commentId, param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param param the request object
     */
    public getAnalysisCommentsWithHttpInfo(param: AnalysesCommentsApiGetAnalysisCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        return this.api.getAnalysisCommentsWithHttpInfo(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param param the request object
     */
    public getAnalysisComments(param: AnalysesCommentsApiGetAnalysisCommentsRequest, options?: ConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        return this.api.getAnalysisComments(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAnalysisCommentWithHttpInfo(param: AnalysesCommentsApiUpdateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        return this.api.updateAnalysisCommentWithHttpInfo(param.commentId, param.analysisId, param.commentUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAnalysisComment(param: AnalysesCommentsApiUpdateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.updateAnalysisComment(param.commentId, param.analysisId, param.commentUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

}

import { ObservableAnalysesCoreApi } from "./ObservableAPI";
import { AnalysesCoreApiRequestFactory, AnalysesCoreApiResponseProcessor} from "../apis/AnalysesCoreApi";

export interface AnalysesCoreApiBulkAddAnalysisTagsRequest {
    /**
     * 
     * @type AnalysisBulkAddTagsRequest
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApibulkAddAnalysisTags
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiBulkDeleteAnalysesRequest {
    /**
     * 
     * @type BulkDeleteAnalysesRequest
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApibulkDeleteAnalyses
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiCreateAnalysisRequest {
    /**
     * 
     * @type AnalysisCreateRequest
     * @memberof AnalysesCoreApicreateAnalysis
     */
    analysisCreateRequest: AnalysisCreateRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApicreateAnalysis
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApicreateAnalysis
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApicreateAnalysis
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApicreateAnalysis
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApicreateAnalysis
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApicreateAnalysis
     */
    maxRetryAttempts?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApicreateAnalysis
     */
    xRevEngApplication?: string
}

export interface AnalysesCoreApiDeleteAnalysisRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApideleteAnalysis
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApideleteAnalysis
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApideleteAnalysis
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApideleteAnalysis
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApideleteAnalysis
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApideleteAnalysis
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApideleteAnalysis
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiGetAnalysisBasicInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisBasicInfo
     */
    analysisId: number
}

export interface AnalysesCoreApiGetAnalysisFunctionMapRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiGetAnalysisLogsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiGetAnalysisParamsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiGetAnalysisStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisStatus
     */
    analysisId: number
}

export interface AnalysesCoreApiInsertAnalysisLogRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    analysisId: number
    /**
     * 
     * @type InsertAnalysisLogRequest
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    insertAnalysisLogRequest: InsertAnalysisLogRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApiinsertAnalysisLog
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiListAnalysesRequest {
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof AnalysesCoreApilistAnalyses
     */
    searchTerm?: string
    /**
     * The workspace to be viewed
     * Defaults to: undefined
     * @type Array&lt;Workspace&gt;
     * @memberof AnalysesCoreApilistAnalyses
     */
    workspace?: Array<Workspace>
    /**
     * The status of the analysis
     * Defaults to: undefined
     * @type Array&lt;StatusInput&gt;
     * @memberof AnalysesCoreApilistAnalyses
     */
    status?: Array<StatusInput>
    /**
     * Show analysis belonging to the model
     * Defaults to: undefined
     * @type Array&lt;ModelName&gt;
     * @memberof AnalysesCoreApilistAnalyses
     */
    modelName?: Array<ModelName>
    /**
     * Show analysis that have a dynamic execution with the given status
     * Defaults to: undefined
     * @type DynamicExecutionStatusInput
     * @memberof AnalysesCoreApilistAnalyses
     */
    dynamicExecutionStatus?: DynamicExecutionStatusInput
    /**
     * Show analysis belonging to the user
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AnalysesCoreApilistAnalyses
     */
    usernames?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApilistAnalyses
     */
    sha256Hash?: string
    /**
     * 
     * Minimum: 5
     * Maximum: 50
     * Defaults to: 20
     * @type number
     * @memberof AnalysesCoreApilistAnalyses
     */
    limit?: number
    /**
     * 
     * Defaults to: 0
     * @type number
     * @memberof AnalysesCoreApilistAnalyses
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type AppApiRestV2AnalysesEnumsOrderBy
     * @memberof AnalysesCoreApilistAnalyses
     */
    orderBy?: AppApiRestV2AnalysesEnumsOrderBy
    /**
     * 
     * Defaults to: undefined
     * @type Order
     * @memberof AnalysesCoreApilistAnalyses
     */
    order?: Order
}

export interface AnalysesCoreApiLookupBinaryIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApilookupBinaryId
     */
    binaryId: number
}

export interface AnalysesCoreApiPutAnalysisStringsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiputAnalysisStrings
     */
    analysisId: number
    /**
     * 
     * @type PutAnalysisStringsRequest
     * @memberof AnalysesCoreApiputAnalysisStrings
     */
    putAnalysisStringsRequest: PutAnalysisStringsRequest
}

export interface AnalysesCoreApiRequeueAnalysisRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    analysisId: number
    /**
     * 
     * @type ReAnalysisForm
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    reAnalysisForm: ReAnalysisForm
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    maxRetryAttempts?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApirequeueAnalysis
     */
    xRevEngApplication?: string
}

export interface AnalysesCoreApiUpdateAnalysisRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    analysisId: number
    /**
     * 
     * @type AnalysisUpdateRequest
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    analysisUpdateRequest: AnalysisUpdateRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysis
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiUpdateAnalysisTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    analysisId: number
    /**
     * 
     * @type AnalysisUpdateTagsRequest
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    analysisUpdateTagsRequest: AnalysisUpdateTagsRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApiupdateAnalysisTags
     */
    maxRetryAttempts?: number
}

export interface AnalysesCoreApiUploadFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type UploadFileType
     * @memberof AnalysesCoreApiuploadFile
     */
    uploadFileType: UploadFileType
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof AnalysesCoreApiuploadFile
     */
    file: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiuploadFile
     */
    packedPassword?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiuploadFile
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiuploadFile
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiuploadFile
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiuploadFile
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiuploadFile
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AnalysesCoreApiuploadFile
     */
    maxRetryAttempts?: number
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof AnalysesCoreApiuploadFile
     */
    forceOverwrite?: boolean
}

export class ObjectAnalysesCoreApi {
    private api: ObservableAnalysesCoreApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesCoreApiRequestFactory, responseProcessor?: AnalysesCoreApiResponseProcessor) {
        this.api = new ObservableAnalysesCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param param the request object
     */
    public bulkAddAnalysisTagsWithHttpInfo(param: AnalysesCoreApiBulkAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisBulkAddTagsResponse>> {
        return this.api.bulkAddAnalysisTagsWithHttpInfo(param.analysisBulkAddTagsRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param param the request object
     */
    public bulkAddAnalysisTags(param: AnalysesCoreApiBulkAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisBulkAddTagsResponse> {
        return this.api.bulkAddAnalysisTags(param.analysisBulkAddTagsRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param param the request object
     */
    public bulkDeleteAnalysesWithHttpInfo(param: AnalysesCoreApiBulkDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        return this.api.bulkDeleteAnalysesWithHttpInfo(param.bulkDeleteAnalysesRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param param the request object
     */
    public bulkDeleteAnalyses(param: AnalysesCoreApiBulkDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<BaseResponseDict> {
        return this.api.bulkDeleteAnalyses(param.bulkDeleteAnalysesRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Begins an analysis
     * Create Analysis
     * @param param the request object
     */
    public createAnalysisWithHttpInfo(param: AnalysesCoreApiCreateAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisCreateResponse>> {
        return this.api.createAnalysisWithHttpInfo(param.analysisCreateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Begins an analysis
     * Create Analysis
     * @param param the request object
     */
    public createAnalysis(param: AnalysesCoreApiCreateAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisCreateResponse> {
        return this.api.createAnalysis(param.analysisCreateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param param the request object
     */
    public deleteAnalysisWithHttpInfo(param: AnalysesCoreApiDeleteAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        return this.api.deleteAnalysisWithHttpInfo(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param param the request object
     */
    public deleteAnalysis(param: AnalysesCoreApiDeleteAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseDict> {
        return this.api.deleteAnalysis(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfoWithHttpInfo(param: AnalysesCoreApiGetAnalysisBasicInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBasic>> {
        return this.api.getAnalysisBasicInfoWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns basic analysis information for an analysis
     * Gets basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfo(param: AnalysesCoreApiGetAnalysisBasicInfoRequest, options?: ConfigurationOptions): Promise<BaseResponseBasic> {
        return this.api.getAnalysisBasicInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param param the request object
     */
    public getAnalysisFunctionMapWithHttpInfo(param: AnalysesCoreApiGetAnalysisFunctionMapRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctionMapping>> {
        return this.api.getAnalysisFunctionMapWithHttpInfo(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param param the request object
     */
    public getAnalysisFunctionMap(param: AnalysesCoreApiGetAnalysisFunctionMapRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisFunctionMapping> {
        return this.api.getAnalysisFunctionMap(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param param the request object
     */
    public getAnalysisLogsWithHttpInfo(param: AnalysesCoreApiGetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseLogs>> {
        return this.api.getAnalysisLogsWithHttpInfo(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param param the request object
     */
    public getAnalysisLogs(param: AnalysesCoreApiGetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<BaseResponseLogs> {
        return this.api.getAnalysisLogs(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param param the request object
     */
    public getAnalysisParamsWithHttpInfo(param: AnalysesCoreApiGetAnalysisParamsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseParams>> {
        return this.api.getAnalysisParamsWithHttpInfo(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param param the request object
     */
    public getAnalysisParams(param: AnalysesCoreApiGetAnalysisParamsRequest, options?: ConfigurationOptions): Promise<BaseResponseParams> {
        return this.api.getAnalysisParams(param.analysisId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param param the request object
     */
    public getAnalysisStatusWithHttpInfo(param: AnalysesCoreApiGetAnalysisStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseStatus>> {
        return this.api.getAnalysisStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Given an analysis ID gets the current status of the analysis
     * Gets the status of an analysis
     * @param param the request object
     */
    public getAnalysisStatus(param: AnalysesCoreApiGetAnalysisStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseStatus> {
        return this.api.getAnalysisStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param param the request object
     */
    public insertAnalysisLogWithHttpInfo(param: AnalysesCoreApiInsertAnalysisLogRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.insertAnalysisLogWithHttpInfo(param.analysisId, param.insertAnalysisLogRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param param the request object
     */
    public insertAnalysisLog(param: AnalysesCoreApiInsertAnalysisLogRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.insertAnalysisLog(param.analysisId, param.insertAnalysisLogRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit
     * Gets the most recent analyses
     * @param param the request object
     */
    public listAnalysesWithHttpInfo(param: AnalysesCoreApiListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseRecent>> {
        return this.api.listAnalysesWithHttpInfo(param.searchTerm, param.workspace, param.status, param.modelName, param.dynamicExecutionStatus, param.usernames, param.sha256Hash, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit
     * Gets the most recent analyses
     * @param param the request object
     */
    public listAnalyses(param: AnalysesCoreApiListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseRecent> {
        return this.api.listAnalyses(param.searchTerm, param.workspace, param.status, param.modelName, param.dynamicExecutionStatus, param.usernames, param.sha256Hash, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param param the request object
     */
    public lookupBinaryIdWithHttpInfo(param: AnalysesCoreApiLookupBinaryIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.lookupBinaryIdWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Given an binary ID gets the ID of an analysis
     * Gets the analysis ID from binary ID
     * @param param the request object
     */
    public lookupBinaryId(param: AnalysesCoreApiLookupBinaryIdRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.lookupBinaryId(param.binaryId,  options).toPromise();
    }

    /**
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param param the request object
     */
    public putAnalysisStringsWithHttpInfo(param: AnalysesCoreApiPutAnalysisStringsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.putAnalysisStringsWithHttpInfo(param.analysisId, param.putAnalysisStringsRequest,  options).toPromise();
    }

    /**
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param param the request object
     */
    public putAnalysisStrings(param: AnalysesCoreApiPutAnalysisStringsRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.putAnalysisStrings(param.analysisId, param.putAnalysisStringsRequest,  options).toPromise();
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param param the request object
     */
    public requeueAnalysisWithHttpInfo(param: AnalysesCoreApiRequeueAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCreated>> {
        return this.api.requeueAnalysisWithHttpInfo(param.analysisId, param.reAnalysisForm, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param param the request object
     */
    public requeueAnalysis(param: AnalysesCoreApiRequeueAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseCreated> {
        return this.api.requeueAnalysis(param.analysisId, param.reAnalysisForm, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param param the request object
     */
    public updateAnalysisWithHttpInfo(param: AnalysesCoreApiUpdateAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisDetailResponse>> {
        return this.api.updateAnalysisWithHttpInfo(param.analysisId, param.analysisUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param param the request object
     */
    public updateAnalysis(param: AnalysesCoreApiUpdateAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisDetailResponse> {
        return this.api.updateAnalysis(param.analysisId, param.analysisUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param param the request object
     */
    public updateAnalysisTagsWithHttpInfo(param: AnalysesCoreApiUpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisUpdateTagsResponse>> {
        return this.api.updateAnalysisTagsWithHttpInfo(param.analysisId, param.analysisUpdateTagsRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param param the request object
     */
    public updateAnalysisTags(param: AnalysesCoreApiUpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisUpdateTagsResponse> {
        return this.api.updateAnalysisTags(param.analysisId, param.analysisUpdateTagsRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Upload File
     * @param param the request object
     */
    public uploadFileWithHttpInfo(param: AnalysesCoreApiUploadFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseUploadResponse>> {
        return this.api.uploadFileWithHttpInfo(param.uploadFileType, param.file, param.packedPassword, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.forceOverwrite,  options).toPromise();
    }

    /**
     * Upload File
     * @param param the request object
     */
    public uploadFile(param: AnalysesCoreApiUploadFileRequest, options?: ConfigurationOptions): Promise<BaseResponseUploadResponse> {
        return this.api.uploadFile(param.uploadFileType, param.file, param.packedPassword, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.forceOverwrite,  options).toPromise();
    }

}

import { ObservableAnalysesDynamicExecutionApi } from "./ObservableAPI";
import { AnalysesDynamicExecutionApiRequestFactory, AnalysesDynamicExecutionApiResponseProcessor} from "../apis/AnalysesDynamicExecutionApi";

export interface AnalysesDynamicExecutionApiGetDynamicExecutionStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetDynamicExecutionStatus
     */
    analysisId: number
}

export interface AnalysesDynamicExecutionApiGetNetworkOverviewRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetNetworkOverview
     */
    analysisId: number
}

export interface AnalysesDynamicExecutionApiGetProcessDumpRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetProcessDump
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesDynamicExecutionApigetProcessDump
     */
    dumpName: string
}

export interface AnalysesDynamicExecutionApiGetProcessDumpsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetProcessDumps
     */
    analysisId: number
}

export interface AnalysesDynamicExecutionApiGetProcessRegistryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetProcessRegistry
     */
    analysisId: number
}

export interface AnalysesDynamicExecutionApiGetProcessTreeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetProcessTree
     */
    analysisId: number
}

export interface AnalysesDynamicExecutionApiGetTtpsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesDynamicExecutionApigetTtps
     */
    analysisId: number
}

export class ObjectAnalysesDynamicExecutionApi {
    private api: ObservableAnalysesDynamicExecutionApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesDynamicExecutionApiRequestFactory, responseProcessor?: AnalysesDynamicExecutionApiResponseProcessor) {
        this.api = new ObservableAnalysesDynamicExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the status of a dynamic execution task
     * @param param the request object
     */
    public getDynamicExecutionStatusWithHttpInfo(param: AnalysesDynamicExecutionApiGetDynamicExecutionStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseDynamicExecutionStatus>> {
        return this.api.getDynamicExecutionStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the status of a dynamic execution task
     * @param param the request object
     */
    public getDynamicExecutionStatus(param: AnalysesDynamicExecutionApiGetDynamicExecutionStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseDynamicExecutionStatus> {
        return this.api.getDynamicExecutionStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for network overview
     * @param param the request object
     */
    public getNetworkOverviewWithHttpInfo(param: AnalysesDynamicExecutionApiGetNetworkOverviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseNetworkOverviewResponse>> {
        return this.api.getNetworkOverviewWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for network overview
     * @param param the request object
     */
    public getNetworkOverview(param: AnalysesDynamicExecutionApiGetNetworkOverviewRequest, options?: ConfigurationOptions): Promise<BaseResponseNetworkOverviewResponse> {
        return this.api.getNetworkOverview(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param param the request object
     */
    public getProcessDumpWithHttpInfo(param: AnalysesDynamicExecutionApiGetProcessDumpRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getProcessDumpWithHttpInfo(param.analysisId, param.dumpName,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for a specific process dump
     * @param param the request object
     */
    public getProcessDump(param: AnalysesDynamicExecutionApiGetProcessDumpRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getProcessDump(param.analysisId, param.dumpName,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param param the request object
     */
    public getProcessDumpsWithHttpInfo(param: AnalysesDynamicExecutionApiGetProcessDumpsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseProcessDumps>> {
        return this.api.getProcessDumpsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process dumps
     * @param param the request object
     */
    public getProcessDumps(param: AnalysesDynamicExecutionApiGetProcessDumpsRequest, options?: ConfigurationOptions): Promise<BaseResponseProcessDumps> {
        return this.api.getProcessDumps(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process registry
     * @param param the request object
     */
    public getProcessRegistryWithHttpInfo(param: AnalysesDynamicExecutionApiGetProcessRegistryRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseProcessRegistry>> {
        return this.api.getProcessRegistryWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process registry
     * @param param the request object
     */
    public getProcessRegistry(param: AnalysesDynamicExecutionApiGetProcessRegistryRequest, options?: ConfigurationOptions): Promise<BaseResponseProcessRegistry> {
        return this.api.getProcessRegistry(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process tree
     * @param param the request object
     */
    public getProcessTreeWithHttpInfo(param: AnalysesDynamicExecutionApiGetProcessTreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseProcessTree>> {
        return this.api.getProcessTreeWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for process tree
     * @param param the request object
     */
    public getProcessTree(param: AnalysesDynamicExecutionApiGetProcessTreeRequest, options?: ConfigurationOptions): Promise<BaseResponseProcessTree> {
        return this.api.getProcessTree(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for ttps
     * @param param the request object
     */
    public getTtpsWithHttpInfo(param: AnalysesDynamicExecutionApiGetTtpsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseTTPS>> {
        return this.api.getTtpsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get the dynamic execution results for ttps
     * @param param the request object
     */
    public getTtps(param: AnalysesDynamicExecutionApiGetTtpsRequest, options?: ConfigurationOptions): Promise<BaseResponseTTPS> {
        return this.api.getTtps(param.analysisId,  options).toPromise();
    }

}

import { ObservableAnalysesResultsMetadataApi } from "./ObservableAPI";
import { AnalysesResultsMetadataApiRequestFactory, AnalysesResultsMetadataApiResponseProcessor} from "../apis/AnalysesResultsMetadataApi";

export interface AnalysesResultsMetadataApiGetAnalysisFunctionsPaginatedRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetAnalysisFunctionsPaginated
     */
    analysisId: number
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof AnalysesResultsMetadataApigetAnalysisFunctionsPaginated
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof AnalysesResultsMetadataApigetAnalysisFunctionsPaginated
     */
    pageSize?: number
}

export interface AnalysesResultsMetadataApiGetCapabilitiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetCapabilities
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiGetFunctionsListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    searchTerm?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    minVAddr?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    maxVAddr?: number
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    includeEmbeddings?: boolean
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof AnalysesResultsMetadataApigetFunctionsList
     */
    pageSize?: number
}

export interface AnalysesResultsMetadataApiGetPdfRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetPdf
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiGetSbomRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetSbom
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiGetTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetTags
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiGetVulnerabilitiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetVulnerabilities
     */
    analysisId: number
}

export class ObjectAnalysesResultsMetadataApi {
    private api: ObservableAnalysesResultsMetadataApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesResultsMetadataApiRequestFactory, responseProcessor?: AnalysesResultsMetadataApiResponseProcessor) {
        this.api = new ObservableAnalysesResultsMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param param the request object
     */
    public getAnalysisFunctionsPaginatedWithHttpInfo(param: AnalysesResultsMetadataApiGetAnalysisFunctionsPaginatedRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctionsList>> {
        return this.api.getAnalysisFunctionsPaginatedWithHttpInfo(param.analysisId, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param param the request object
     */
    public getAnalysisFunctionsPaginated(param: AnalysesResultsMetadataApiGetAnalysisFunctionsPaginatedRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisFunctionsList> {
        return this.api.getAnalysisFunctionsPaginated(param.analysisId, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Gets the capabilities from the analysis
     * @param param the request object
     */
    public getCapabilitiesWithHttpInfo(param: AnalysesResultsMetadataApiGetCapabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCapabilities>> {
        return this.api.getCapabilitiesWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the capabilities from the analysis
     * @param param the request object
     */
    public getCapabilities(param: AnalysesResultsMetadataApiGetCapabilitiesRequest, options?: ConfigurationOptions): Promise<BaseResponseCapabilities> {
        return this.api.getCapabilities(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param param the request object
     */
    public getFunctionsListWithHttpInfo(param: AnalysesResultsMetadataApiGetFunctionsListRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctions>> {
        return this.api.getFunctionsListWithHttpInfo(param.analysisId, param.searchTerm, param.minVAddr, param.maxVAddr, param.includeEmbeddings, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Gets the functions identified during analysis
     * Gets functions from analysis
     * @param param the request object
     */
    public getFunctionsList(param: AnalysesResultsMetadataApiGetFunctionsListRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisFunctions> {
        return this.api.getFunctionsList(param.analysisId, param.searchTerm, param.minVAddr, param.maxVAddr, param.includeEmbeddings, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Gets the PDF found in the analysis
     * @param param the request object
     */
    public getPdfWithHttpInfo(param: AnalysesResultsMetadataApiGetPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getPdfWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the PDF found in the analysis
     * @param param the request object
     */
    public getPdf(param: AnalysesResultsMetadataApiGetPdfRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getPdf(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param param the request object
     */
    public getSbomWithHttpInfo(param: AnalysesResultsMetadataApiGetSbomRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListSBOM>> {
        return this.api.getSbomWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the software-bill-of-materials (SBOM) found in the analysis
     * @param param the request object
     */
    public getSbom(param: AnalysesResultsMetadataApiGetSbomRequest, options?: ConfigurationOptions): Promise<BaseResponseListSBOM> {
        return this.api.getSbom(param.analysisId,  options).toPromise();
    }

    /**
     * Get function tags with maliciousness score
     * @param param the request object
     */
    public getTagsWithHttpInfo(param: AnalysesResultsMetadataApiGetTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisTags>> {
        return this.api.getTagsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get function tags with maliciousness score
     * @param param the request object
     */
    public getTags(param: AnalysesResultsMetadataApiGetTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisTags> {
        return this.api.getTags(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param param the request object
     */
    public getVulnerabilitiesWithHttpInfo(param: AnalysesResultsMetadataApiGetVulnerabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseVulnerabilities>> {
        return this.api.getVulnerabilitiesWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the vulnerabilities found in the analysis
     * @param param the request object
     */
    public getVulnerabilities(param: AnalysesResultsMetadataApiGetVulnerabilitiesRequest, options?: ConfigurationOptions): Promise<BaseResponseVulnerabilities> {
        return this.api.getVulnerabilities(param.analysisId,  options).toPromise();
    }

}

import { ObservableAnalysesXRefsApi } from "./ObservableAPI";
import { AnalysesXRefsApiRequestFactory, AnalysesXRefsApiResponseProcessor} from "../apis/AnalysesXRefsApi";

export interface AnalysesXRefsApiGetXrefByVaddrRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesXRefsApigetXrefByVaddr
     */
    analysisId: number
    /**
     * Virtual address to match against xrefs
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesXRefsApigetXrefByVaddr
     */
    vaddr: number
}

export class ObjectAnalysesXRefsApi {
    private api: ObservableAnalysesXRefsApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesXRefsApiRequestFactory, responseProcessor?: AnalysesXRefsApiResponseProcessor) {
        this.api = new ObservableAnalysesXRefsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param param the request object
     */
    public getXrefByVaddrWithHttpInfo(param: AnalysesXRefsApiGetXrefByVaddrRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseXrefResponse>> {
        return this.api.getXrefByVaddrWithHttpInfo(param.analysisId, param.vaddr,  options).toPromise();
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param param the request object
     */
    public getXrefByVaddr(param: AnalysesXRefsApiGetXrefByVaddrRequest, options?: ConfigurationOptions): Promise<BaseResponseXrefResponse> {
        return this.api.getXrefByVaddr(param.analysisId, param.vaddr,  options).toPromise();
    }

}

import { ObservableAnalysisStagesApi } from "./ObservableAPI";
import { AnalysisStagesApiRequestFactory, AnalysisStagesApiResponseProcessor} from "../apis/AnalysisStagesApi";

export interface AnalysisStagesApiGetAnalysisStagesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysisStagesApigetAnalysisStages
     */
    analysisId: number
}

export interface AnalysisStagesApiGetPipelineStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysisStagesApigetPipelineStatus
     */
    analysisId: number
}

export class ObjectAnalysisStagesApi {
    private api: ObservableAnalysisStagesApi

    public constructor(configuration: Configuration, requestFactory?: AnalysisStagesApiRequestFactory, responseProcessor?: AnalysisStagesApiResponseProcessor) {
        this.api = new ObservableAnalysisStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all stage events for an analysis ordered by timestamp.
     * Get Analysis Stages
     * @param param the request object
     */
    public getAnalysisStagesWithHttpInfo(param: AnalysisStagesApiGetAnalysisStagesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStagesResponse>> {
        return this.api.getAnalysisStagesWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns all stage events for an analysis ordered by timestamp.
     * Get Analysis Stages
     * @param param the request object
     */
    public getAnalysisStages(param: AnalysisStagesApiGetAnalysisStagesRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisStagesResponse> {
        return this.api.getAnalysisStages(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the latest status for each core pipeline stage with the number of analyses ahead in the queue.
     * Get Pipeline Status
     * @param param the request object
     */
    public getPipelineStatusWithHttpInfo(param: AnalysisStagesApiGetPipelineStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponsePipelineStatusResponse>> {
        return this.api.getPipelineStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the latest status for each core pipeline stage with the number of analyses ahead in the queue.
     * Get Pipeline Status
     * @param param the request object
     */
    public getPipelineStatus(param: AnalysisStagesApiGetPipelineStatusRequest, options?: ConfigurationOptions): Promise<BaseResponsePipelineStatusResponse> {
        return this.api.getPipelineStatus(param.analysisId,  options).toPromise();
    }

}

import { ObservableAuthenticationUsersApi } from "./ObservableAPI";
import { AuthenticationUsersApiRequestFactory, AuthenticationUsersApiResponseProcessor} from "../apis/AuthenticationUsersApi";

export interface AuthenticationUsersApiGetRequesterUserInfoRequest {
}

export interface AuthenticationUsersApiGetUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthenticationUsersApigetUser
     */
    userId: number
}

export interface AuthenticationUsersApiGetUserActivityRequest {
}

export interface AuthenticationUsersApiGetUserCommentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationUsersApigetUserComments
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationUsersApigetUserComments
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthenticationUsersApigetUserComments
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationUsersApigetUserComments
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationUsersApigetUserComments
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof AuthenticationUsersApigetUserComments
     */
    maxRetryAttempts?: number
}

export interface AuthenticationUsersApiLoginUserRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthenticationUsersApiloginUser
     */
    loginRequest: LoginRequest
}

export interface AuthenticationUsersApiSubmitUserFeedbackRequest {
    /**
     * 
     * @type SubmitUserFeedbackRequest
     * @memberof AuthenticationUsersApisubmitUserFeedback
     */
    submitUserFeedbackRequest: SubmitUserFeedbackRequest
}

export class ObjectAuthenticationUsersApi {
    private api: ObservableAuthenticationUsersApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationUsersApiRequestFactory, responseProcessor?: AuthenticationUsersApiResponseProcessor) {
        this.api = new ObservableAuthenticationUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the requesters user information
     * @param param the request object
     */
    public getRequesterUserInfoWithHttpInfo(param: AuthenticationUsersApiGetRequesterUserInfoRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseGetMeResponse>> {
        return this.api.getRequesterUserInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Get the requesters user information
     * @param param the request object
     */
    public getRequesterUserInfo(param: AuthenticationUsersApiGetRequesterUserInfoRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseGetMeResponse> {
        return this.api.getRequesterUserInfo( options).toPromise();
    }

    /**
     * Get a user\'s public information
     * @param param the request object
     */
    public getUserWithHttpInfo(param: AuthenticationUsersApiGetUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseGetPublicUserResponse>> {
        return this.api.getUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Get a user\'s public information
     * @param param the request object
     */
    public getUser(param: AuthenticationUsersApiGetUserRequest, options?: ConfigurationOptions): Promise<BaseResponseGetPublicUserResponse> {
        return this.api.getUser(param.userId,  options).toPromise();
    }

    /**
     * Get auth user activity
     * @param param the request object
     */
    public getUserActivityWithHttpInfo(param: AuthenticationUsersApiGetUserActivityRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListUserActivityResponse>> {
        return this.api.getUserActivityWithHttpInfo( options).toPromise();
    }

    /**
     * Get auth user activity
     * @param param the request object
     */
    public getUserActivity(param: AuthenticationUsersApiGetUserActivityRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseListUserActivityResponse> {
        return this.api.getUserActivity( options).toPromise();
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     * @param param the request object
     */
    public getUserCommentsWithHttpInfo(param: AuthenticationUsersApiGetUserCommentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        return this.api.getUserCommentsWithHttpInfo(param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.
     * Get comments by user
     * @param param the request object
     */
    public getUserComments(param: AuthenticationUsersApiGetUserCommentsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        return this.api.getUserComments(param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param param the request object
     */
    public loginUserWithHttpInfo(param: AuthenticationUsersApiLoginUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseLoginResponse>> {
        return this.api.loginUserWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * Authenticates a user and returns a token.
     * Authenticate a user
     * @param param the request object
     */
    public loginUser(param: AuthenticationUsersApiLoginUserRequest, options?: ConfigurationOptions): Promise<BaseResponseLoginResponse> {
        return this.api.loginUser(param.loginRequest,  options).toPromise();
    }

    /**
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param param the request object
     */
    public submitUserFeedbackWithHttpInfo(param: AuthenticationUsersApiSubmitUserFeedbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.submitUserFeedbackWithHttpInfo(param.submitUserFeedbackRequest,  options).toPromise();
    }

    /**
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param param the request object
     */
    public submitUserFeedback(param: AuthenticationUsersApiSubmitUserFeedbackRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.submitUserFeedback(param.submitUserFeedbackRequest,  options).toPromise();
    }

}

import { ObservableBinariesApi } from "./ObservableAPI";
import { BinariesApiRequestFactory, BinariesApiResponseProcessor} from "../apis/BinariesApi";

export interface BinariesApiDownloadZippedBinaryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApidownloadZippedBinary
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApidownloadZippedBinary
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApidownloadZippedBinary
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApidownloadZippedBinary
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApidownloadZippedBinary
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApidownloadZippedBinary
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApidownloadZippedBinary
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryAdditionalDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryAdditionalDetailsStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDetails
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDetails
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDetails
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDetails
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDetails
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDetails
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryDetails
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryDieInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDieInfo
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDieInfo
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDieInfo
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDieInfo
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDieInfo
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryDieInfo
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryDieInfo
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryExternalsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryExternals
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryExternals
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryExternals
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryExternals
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryExternals
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryExternals
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryExternals
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetBinaryRelatedStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    maxRetryAttempts?: number
}

export interface BinariesApiGetRelatedBinariesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetRelatedBinaries
     */
    binaryId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetRelatedBinaries
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetRelatedBinaries
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetRelatedBinaries
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetRelatedBinaries
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApigetRelatedBinaries
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof BinariesApigetRelatedBinaries
     */
    maxRetryAttempts?: number
}

export class ObjectBinariesApi {
    private api: ObservableBinariesApi

    public constructor(configuration: Configuration, requestFactory?: BinariesApiRequestFactory, responseProcessor?: BinariesApiResponseProcessor) {
        this.api = new ObservableBinariesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Downloads a zipped binary with password protection
     * @param param the request object
     */
    public downloadZippedBinaryWithHttpInfo(param: BinariesApiDownloadZippedBinaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadZippedBinaryWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Downloads a zipped binary with password protection
     * @param param the request object
     */
    public downloadZippedBinary(param: BinariesApiDownloadZippedBinaryRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadZippedBinary(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryAdditionalResponse>> {
        return this.api.getBinaryAdditionalDetailsWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetails(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryAdditionalResponse> {
        return this.api.getBinaryAdditionalDetails(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAdditionalDetailsStatusResponse>> {
        return this.api.getBinaryAdditionalDetailsStatusWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatus(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseAdditionalDetailsStatusResponse> {
        return this.api.getBinaryAdditionalDetailsStatus(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the details of a binary
     * @param param the request object
     */
    public getBinaryDetailsWithHttpInfo(param: BinariesApiGetBinaryDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryDetailsResponse>> {
        return this.api.getBinaryDetailsWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the details of a binary
     * @param param the request object
     */
    public getBinaryDetails(param: BinariesApiGetBinaryDetailsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryDetailsResponse> {
        return this.api.getBinaryDetails(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param param the request object
     */
    public getBinaryDieInfoWithHttpInfo(param: BinariesApiGetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListDieMatch>> {
        return this.api.getBinaryDieInfoWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param param the request object
     */
    public getBinaryDieInfo(param: BinariesApiGetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<BaseResponseListDieMatch> {
        return this.api.getBinaryDieInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param param the request object
     */
    public getBinaryExternalsWithHttpInfo(param: BinariesApiGetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryExternalsResponse>> {
        return this.api.getBinaryExternalsWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param param the request object
     */
    public getBinaryExternals(param: BinariesApiGetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryExternalsResponse> {
        return this.api.getBinaryExternals(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param param the request object
     */
    public getBinaryRelatedStatusWithHttpInfo(param: BinariesApiGetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinariesRelatedStatusResponse>> {
        return this.api.getBinaryRelatedStatusWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param param the request object
     */
    public getBinaryRelatedStatus(param: BinariesApiGetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseBinariesRelatedStatusResponse> {
        return this.api.getBinaryRelatedStatus(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param param the request object
     */
    public getRelatedBinariesWithHttpInfo(param: BinariesApiGetRelatedBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseChildBinariesResponse>> {
        return this.api.getRelatedBinariesWithHttpInfo(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param param the request object
     */
    public getRelatedBinaries(param: BinariesApiGetRelatedBinariesRequest, options?: ConfigurationOptions): Promise<BaseResponseChildBinariesResponse> {
        return this.api.getRelatedBinaries(param.binaryId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

}

import { ObservableCollectionsApi } from "./ObservableAPI";
import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";

export interface CollectionsApiCreateCollectionRequest {
    /**
     * 
     * @type CollectionCreateRequest
     * @memberof CollectionsApicreateCollection
     */
    collectionCreateRequest: CollectionCreateRequest
}

export interface CollectionsApiDeleteCollectionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApideleteCollection
     */
    collectionId: number
}

export interface CollectionsApiGetCollectionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApigetCollection
     */
    collectionId: number
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof CollectionsApigetCollection
     */
    includeTags?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof CollectionsApigetCollection
     */
    includeBinaries?: boolean
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof CollectionsApigetCollection
     */
    pageSize?: number
    /**
     * 
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof CollectionsApigetCollection
     */
    pageNumber?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApigetCollection
     */
    binarySearchStr?: string
}

export interface CollectionsApiListCollectionsRequest {
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof CollectionsApilistCollections
     */
    searchTerm?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;Filters&gt;
     * @memberof CollectionsApilistCollections
     */
    filters?: Array<Filters>
    /**
     * 
     * Minimum: 5
     * Maximum: 50
     * Defaults to: 20
     * @type number
     * @memberof CollectionsApilistCollections
     */
    limit?: number
    /**
     * 
     * Defaults to: 0
     * @type number
     * @memberof CollectionsApilistCollections
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type AppApiRestV2CollectionsEnumsOrderBy
     * @memberof CollectionsApilistCollections
     */
    orderBy?: AppApiRestV2CollectionsEnumsOrderBy
    /**
     * 
     * Defaults to: undefined
     * @type Order
     * @memberof CollectionsApilistCollections
     */
    order?: Order
}

export interface CollectionsApiUpdateCollectionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiupdateCollection
     */
    collectionId: number
    /**
     * 
     * @type CollectionUpdateRequest
     * @memberof CollectionsApiupdateCollection
     */
    collectionUpdateRequest: CollectionUpdateRequest
}

export interface CollectionsApiUpdateCollectionBinariesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiupdateCollectionBinaries
     */
    collectionId: number
    /**
     * 
     * @type CollectionBinariesUpdateRequest
     * @memberof CollectionsApiupdateCollectionBinaries
     */
    collectionBinariesUpdateRequest: CollectionBinariesUpdateRequest
}

export interface CollectionsApiUpdateCollectionTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiupdateCollectionTags
     */
    collectionId: number
    /**
     * 
     * @type CollectionTagsUpdateRequest
     * @memberof CollectionsApiupdateCollectionTags
     */
    collectionTagsUpdateRequest: CollectionTagsUpdateRequest
}

export class ObjectCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsApiRequestFactory, responseProcessor?: CollectionsApiResponseProcessor) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param param the request object
     */
    public createCollectionWithHttpInfo(param: CollectionsApiCreateCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        return this.api.createCollectionWithHttpInfo(param.collectionCreateRequest,  options).toPromise();
    }

    /**
     * A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.
     * Creates new collection information
     * @param param the request object
     */
    public createCollection(param: CollectionsApiCreateCollectionRequest, options?: ConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        return this.api.createCollection(param.collectionCreateRequest,  options).toPromise();
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param param the request object
     */
    public deleteCollectionWithHttpInfo(param: CollectionsApiDeleteCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        return this.api.deleteCollectionWithHttpInfo(param.collectionId,  options).toPromise();
    }

    /**
     * Deletes a collection
     * Deletes a collection
     * @param param the request object
     */
    public deleteCollection(param: CollectionsApiDeleteCollectionRequest, options?: ConfigurationOptions): Promise<BaseResponseBool> {
        return this.api.deleteCollection(param.collectionId,  options).toPromise();
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param param the request object
     */
    public getCollectionWithHttpInfo(param: CollectionsApiGetCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        return this.api.getCollectionWithHttpInfo(param.collectionId, param.includeTags, param.includeBinaries, param.pageSize, param.pageNumber, param.binarySearchStr,  options).toPromise();
    }

    /**
     * Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.
     * Returns a collection
     * @param param the request object
     */
    public getCollection(param: CollectionsApiGetCollectionRequest, options?: ConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        return this.api.getCollection(param.collectionId, param.includeTags, param.includeBinaries, param.pageSize, param.pageNumber, param.binarySearchStr,  options).toPromise();
    }

    /**
     * Returns a list of collections
     * Gets basic collections information
     * @param param the request object
     */
    public listCollectionsWithHttpInfo(param: CollectionsApiListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCollectionResults>> {
        return this.api.listCollectionsWithHttpInfo(param.searchTerm, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Returns a list of collections
     * Gets basic collections information
     * @param param the request object
     */
    public listCollections(param: CollectionsApiListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseListCollectionResults> {
        return this.api.listCollections(param.searchTerm, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param param the request object
     */
    public updateCollectionWithHttpInfo(param: CollectionsApiUpdateCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        return this.api.updateCollectionWithHttpInfo(param.collectionId, param.collectionUpdateRequest,  options).toPromise();
    }

    /**
     * Updates a collection, you can update the collection name, description, and scope
     * Updates a collection
     * @param param the request object
     */
    public updateCollection(param: CollectionsApiUpdateCollectionRequest, options?: ConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        return this.api.updateCollection(param.collectionId, param.collectionUpdateRequest,  options).toPromise();
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param param the request object
     */
    public updateCollectionBinariesWithHttpInfo(param: CollectionsApiUpdateCollectionBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionBinariesUpdateResponse>> {
        return this.api.updateCollectionBinariesWithHttpInfo(param.collectionId, param.collectionBinariesUpdateRequest,  options).toPromise();
    }

    /**
     * Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.
     * Updates a collection binaries
     * @param param the request object
     */
    public updateCollectionBinaries(param: CollectionsApiUpdateCollectionBinariesRequest, options?: ConfigurationOptions): Promise<BaseResponseCollectionBinariesUpdateResponse> {
        return this.api.updateCollectionBinaries(param.collectionId, param.collectionBinariesUpdateRequest,  options).toPromise();
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param param the request object
     */
    public updateCollectionTagsWithHttpInfo(param: CollectionsApiUpdateCollectionTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionTagsUpdateResponse>> {
        return this.api.updateCollectionTagsWithHttpInfo(param.collectionId, param.collectionTagsUpdateRequest,  options).toPromise();
    }

    /**
     * Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.
     * Updates a collection tags
     * @param param the request object
     */
    public updateCollectionTags(param: CollectionsApiUpdateCollectionTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseCollectionTagsUpdateResponse> {
        return this.api.updateCollectionTags(param.collectionId, param.collectionTagsUpdateRequest,  options).toPromise();
    }

}

import { ObservableConfigApi } from "./ObservableAPI";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";

export interface ConfigApiGetConfigRequest {
}

export class ObjectConfigApi {
    private api: ObservableConfigApi

    public constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * General configuration endpoint
     * Get Config
     * @param param the request object
     */
    public getConfigWithHttpInfo(param: ConfigApiGetConfigRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseConfigResponse>> {
        return this.api.getConfigWithHttpInfo( options).toPromise();
    }

    /**
     * General configuration endpoint
     * Get Config
     * @param param the request object
     */
    public getConfig(param: ConfigApiGetConfigRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseConfigResponse> {
        return this.api.getConfig( options).toPromise();
    }

}

import { ObservableExternalSourcesApi } from "./ObservableAPI";
import { ExternalSourcesApiRequestFactory, ExternalSourcesApiResponseProcessor} from "../apis/ExternalSourcesApi";

export interface ExternalSourcesApiCreateExternalTaskVtRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ExternalSourcesApicreateExternalTaskVt
     */
    analysisId: number
}

export interface ExternalSourcesApiGetVtDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ExternalSourcesApigetVtData
     */
    analysisId: number
}

export interface ExternalSourcesApiGetVtTaskStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ExternalSourcesApigetVtTaskStatus
     */
    analysisId: number
}

export class ObjectExternalSourcesApi {
    private api: ObservableExternalSourcesApi

    public constructor(configuration: Configuration, requestFactory?: ExternalSourcesApiRequestFactory, responseProcessor?: ExternalSourcesApiResponseProcessor) {
        this.api = new ObservableExternalSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pulls data from VirusTotal
     * @param param the request object
     */
    public createExternalTaskVtWithHttpInfo(param: ExternalSourcesApiCreateExternalTaskVtRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseStr>> {
        return this.api.createExternalTaskVtWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Pulls data from VirusTotal
     * @param param the request object
     */
    public createExternalTaskVt(param: ExternalSourcesApiCreateExternalTaskVtRequest, options?: ConfigurationOptions): Promise<BaseResponseStr> {
        return this.api.createExternalTaskVt(param.analysisId,  options).toPromise();
    }

    /**
     * Get VirusTotal data
     * @param param the request object
     */
    public getVtDataWithHttpInfo(param: ExternalSourcesApiGetVtDataRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseExternalResponse>> {
        return this.api.getVtDataWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get VirusTotal data
     * @param param the request object
     */
    public getVtData(param: ExternalSourcesApiGetVtDataRequest, options?: ConfigurationOptions): Promise<BaseResponseExternalResponse> {
        return this.api.getVtData(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param param the request object
     */
    public getVtTaskStatusWithHttpInfo(param: ExternalSourcesApiGetVtTaskStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseTaskResponse>> {
        return this.api.getVtTaskStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of VirusTotal data retrieval
     * @param param the request object
     */
    public getVtTaskStatus(param: ExternalSourcesApiGetVtTaskStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseTaskResponse> {
        return this.api.getVtTaskStatus(param.analysisId,  options).toPromise();
    }

}

import { ObservableFirmwareApi } from "./ObservableAPI";
import { FirmwareApiRequestFactory, FirmwareApiResponseProcessor} from "../apis/FirmwareApi";

export interface FirmwareApiGetBinariesForFirmwareTaskRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApigetBinariesForFirmwareTask
     */
    taskId: string
}

export interface FirmwareApiUploadFirmwareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FirmwareApiuploadFirmware
     */
    file: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiuploadFirmware
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiuploadFirmware
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FirmwareApiuploadFirmware
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiuploadFirmware
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiuploadFirmware
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof FirmwareApiuploadFirmware
     */
    maxRetryAttempts?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FirmwareApiuploadFirmware
     */
    password?: string
}

export class ObjectFirmwareApi {
    private api: ObservableFirmwareApi

    public constructor(configuration: Configuration, requestFactory?: FirmwareApiRequestFactory, responseProcessor?: FirmwareApiResponseProcessor) {
        this.api = new ObservableFirmwareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param param the request object
     */
    public getBinariesForFirmwareTaskWithHttpInfo(param: FirmwareApiGetBinariesForFirmwareTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getBinariesForFirmwareTaskWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param param the request object
     */
    public getBinariesForFirmwareTask(param: FirmwareApiGetBinariesForFirmwareTaskRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getBinariesForFirmwareTask(param.taskId,  options).toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param param the request object
     */
    public uploadFirmwareWithHttpInfo(param: FirmwareApiUploadFirmwareRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.uploadFirmwareWithHttpInfo(param.file, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.password,  options).toPromise();
    }

    /**
     * Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.
     * Upload firmware for unpacking
     * @param param the request object
     */
    public uploadFirmware(param: FirmwareApiUploadFirmwareRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.uploadFirmware(param.file, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts, param.password,  options).toPromise();
    }

}

import { ObservableFunctionsAIDecompilationApi } from "./ObservableAPI";
import { FunctionsAIDecompilationApiRequestFactory, FunctionsAIDecompilationApiResponseProcessor} from "../apis/FunctionsAIDecompilationApi";

export interface FunctionsAIDecompilationApiCreateAiDecompilationCommentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    functionId: number
    /**
     * 
     * @type FunctionCommentCreateRequest
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    functionCommentCreateRequest: FunctionCommentCreateRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationComment
     */
    maxRetryAttempts?: number
}

export interface FunctionsAIDecompilationApiCreateAiDecompilationTaskRequest {
    /**
     * The ID of the function for which we are creating the decompilation task
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilationTask
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiDeleteAiDecompilationCommentRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    commentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    functionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof FunctionsAIDecompilationApideleteAiDecompilationComment
     */
    maxRetryAttempts?: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationCommentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    functionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationComments
     */
    maxRetryAttempts?: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationRatingRequest {
    /**
     * The ID of the function for which to get the rating
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationRating
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiGetAiDecompilationTaskResultRequest {
    /**
     * The ID of the function being decompiled
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationTaskResult
     */
    functionId: number
    /**
     * Generate a summary for the decompilation
     * Defaults to: true
     * @type boolean
     * @memberof FunctionsAIDecompilationApigetAiDecompilationTaskResult
     */
    summarise?: boolean
    /**
     * Generate inline comments for the decompilation
     * Defaults to: true
     * @type boolean
     * @memberof FunctionsAIDecompilationApigetAiDecompilationTaskResult
     */
    generateInlineComments?: boolean
}

export interface FunctionsAIDecompilationApiGetAiDecompilationTaskStatusRequest {
    /**
     * The ID of the function being checked
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationTaskStatus
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiUpdateAiDecompilationCommentRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    commentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    functionId: number
    /**
     * 
     * @type CommentUpdateRequest
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    commentUpdateRequest: CommentUpdateRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    endpointUrl?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    localCacheDir?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    localCacheMaxSizeMb?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    customerSamplesBucket?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    firmwareSamplesBucket?: string
    /**
     * 
     * Defaults to: 5
     * @type number
     * @memberof FunctionsAIDecompilationApiupdateAiDecompilationComment
     */
    maxRetryAttempts?: number
}

export interface FunctionsAIDecompilationApiUpsertAiDecompilationRatingRequest {
    /**
     * The ID of the function being rated
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiupsertAiDecompilationRating
     */
    functionId: number
    /**
     * 
     * @type UpsertAiDecomplationRatingRequest
     * @memberof FunctionsAIDecompilationApiupsertAiDecompilationRating
     */
    upsertAiDecomplationRatingRequest: UpsertAiDecomplationRatingRequest
}

export class ObjectFunctionsAIDecompilationApi {
    private api: ObservableFunctionsAIDecompilationApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsAIDecompilationApiRequestFactory, responseProcessor?: FunctionsAIDecompilationApiResponseProcessor) {
        this.api = new ObservableFunctionsAIDecompilationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param param the request object
     */
    public createAiDecompilationCommentWithHttpInfo(param: FunctionsAIDecompilationApiCreateAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        return this.api.createAiDecompilationCommentWithHttpInfo(param.functionId, param.functionCommentCreateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Creates a comment associated with a specified function).
     * Create a comment for this function
     * @param param the request object
     */
    public createAiDecompilationComment(param: FunctionsAIDecompilationApiCreateAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.createAiDecompilationComment(param.functionId, param.functionCommentCreateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param param the request object
     */
    public createAiDecompilationTaskWithHttpInfo(param: FunctionsAIDecompilationApiCreateAiDecompilationTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.createAiDecompilationTaskWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Begins the AI Decompilation Process
     * Begins AI Decompilation Process
     * @param param the request object
     */
    public createAiDecompilationTask(param: FunctionsAIDecompilationApiCreateAiDecompilationTaskRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.createAiDecompilationTask(param.functionId,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAiDecompilationCommentWithHttpInfo(param: FunctionsAIDecompilationApiDeleteAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        return this.api.deleteAiDecompilationCommentWithHttpInfo(param.commentId, param.functionId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAiDecompilationComment(param: FunctionsAIDecompilationApiDeleteAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseBool> {
        return this.api.deleteAiDecompilationComment(param.commentId, param.functionId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param param the request object
     */
    public getAiDecompilationCommentsWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        return this.api.getAiDecompilationCommentsWithHttpInfo(param.functionId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.
     * Get comments for this function
     * @param param the request object
     */
    public getAiDecompilationComments(param: FunctionsAIDecompilationApiGetAiDecompilationCommentsRequest, options?: ConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        return this.api.getAiDecompilationComments(param.functionId, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Get rating for AI decompilation
     * @param param the request object
     */
    public getAiDecompilationRatingWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseUnionGetAiDecompilationRatingResponseNoneType>> {
        return this.api.getAiDecompilationRatingWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Get rating for AI decompilation
     * @param param the request object
     */
    public getAiDecompilationRating(param: FunctionsAIDecompilationApiGetAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<BaseResponseUnionGetAiDecompilationRatingResponseNoneType> {
        return this.api.getAiDecompilationRating(param.functionId,  options).toPromise();
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param param the request object
     */
    public getAiDecompilationTaskResultWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationTaskResultRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseGetAiDecompilationTask>> {
        return this.api.getAiDecompilationTaskResultWithHttpInfo(param.functionId, param.summarise, param.generateInlineComments,  options).toPromise();
    }

    /**
     * Polls the AI Decompilation Process
     * Polls AI Decompilation Process
     * @param param the request object
     */
    public getAiDecompilationTaskResult(param: FunctionsAIDecompilationApiGetAiDecompilationTaskResultRequest, options?: ConfigurationOptions): Promise<BaseResponseGetAiDecompilationTask> {
        return this.api.getAiDecompilationTaskResult(param.functionId, param.summarise, param.generateInlineComments,  options).toPromise();
    }

    /**
     * Check the status of a function ai decompilation
     * @param param the request object
     */
    public getAiDecompilationTaskStatusWithHttpInfo(param: FunctionsAIDecompilationApiGetAiDecompilationTaskStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionTaskResponse>> {
        return this.api.getAiDecompilationTaskStatusWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Check the status of a function ai decompilation
     * @param param the request object
     */
    public getAiDecompilationTaskStatus(param: FunctionsAIDecompilationApiGetAiDecompilationTaskStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionTaskResponse> {
        return this.api.getAiDecompilationTaskStatus(param.functionId,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAiDecompilationCommentWithHttpInfo(param: FunctionsAIDecompilationApiUpdateAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        return this.api.updateAiDecompilationCommentWithHttpInfo(param.commentId, param.functionId, param.commentUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAiDecompilationComment(param: FunctionsAIDecompilationApiUpdateAiDecompilationCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.updateAiDecompilationComment(param.commentId, param.functionId, param.commentUpdateRequest, param.endpointUrl, param.localCacheDir, param.localCacheMaxSizeMb, param.customerSamplesBucket, param.firmwareSamplesBucket, param.maxRetryAttempts,  options).toPromise();
    }

    /**
     * Upsert rating for AI decompilation
     * @param param the request object
     */
    public upsertAiDecompilationRatingWithHttpInfo(param: FunctionsAIDecompilationApiUpsertAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.upsertAiDecompilationRatingWithHttpInfo(param.functionId, param.upsertAiDecomplationRatingRequest,  options).toPromise();
    }

    /**
     * Upsert rating for AI decompilation
     * @param param the request object
     */
    public upsertAiDecompilationRating(param: FunctionsAIDecompilationApiUpsertAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.upsertAiDecompilationRating(param.functionId, param.upsertAiDecomplationRatingRequest,  options).toPromise();
    }

}

import { ObservableFunctionsCoreApi } from "./ObservableAPI";
import { FunctionsCoreApiRequestFactory, FunctionsCoreApiResponseProcessor} from "../apis/FunctionsCoreApi";

export interface FunctionsCoreApiAiUnstripRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApiaiUnstrip
     */
    analysisId: number
    /**
     * 
     * @type AiUnstripRequest
     * @memberof FunctionsCoreApiaiUnstrip
     */
    aiUnstripRequest: AiUnstripRequest
}

export interface FunctionsCoreApiAnalysisFunctionMatchingRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApianalysisFunctionMatching
     */
    analysisId: number
    /**
     * 
     * @type AnalysisFunctionMatchingRequest
     * @memberof FunctionsCoreApianalysisFunctionMatching
     */
    analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest
}

export interface FunctionsCoreApiAutoUnstripRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApiautoUnstrip
     */
    analysisId: number
    /**
     * 
     * @type AutoUnstripRequest
     * @memberof FunctionsCoreApiautoUnstrip
     */
    autoUnstripRequest: AutoUnstripRequest
}

export interface FunctionsCoreApiBatchFunctionMatchingRequest {
    /**
     * 
     * @type FunctionMatchingRequest
     * @memberof FunctionsCoreApibatchFunctionMatching
     */
    functionMatchingRequest: FunctionMatchingRequest
}

export interface FunctionsCoreApiCancelAiUnstripRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApicancelAiUnstrip
     */
    analysisId: number
}

export interface FunctionsCoreApiCancelAutoUnstripRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApicancelAutoUnstrip
     */
    analysisId: number
}

export interface FunctionsCoreApiGetAnalysisStringsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    analysisId: number
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 100
     * @type number
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    pageSize?: number
    /**
     * Search is applied to string value
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    search?: string
    /**
     * Search is applied to function names
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    functionSearch?: string
    /**
     * Order by field
     * Defaults to: &#39;value&#39;
     * @type &#39;length&#39; | &#39;value&#39;
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    orderBy?: 'length' | 'value'
    /**
     * Sort order for the results
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof FunctionsCoreApigetAnalysisStrings
     */
    sortOrder?: 'ASC' | 'DESC'
}

export interface FunctionsCoreApiGetAnalysisStringsStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetAnalysisStringsStatus
     */
    analysisId: number
}

export interface FunctionsCoreApiGetFunctionBlocksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionBlocks
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionCalleesCallersRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCalleesCallers
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionCalleesCallersBulkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsCoreApigetFunctionCalleesCallersBulk
     */
    functionIds: Array<number>
}

export interface FunctionsCoreApiGetFunctionCapabilitiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCapabilities
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionDetails
     */
    functionId: number
}

export interface FunctionsCoreApiGetFunctionStringsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    functionId: number
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 100
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    pageSize?: number
    /**
     * Search is applied to string value
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetFunctionStrings
     */
    search?: string
}

export class ObjectFunctionsCoreApi {
    private api: ObservableFunctionsCoreApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsCoreApiRequestFactory, responseProcessor?: FunctionsCoreApiResponseProcessor) {
        this.api = new ObservableFunctionsCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param param the request object
     */
    public aiUnstripWithHttpInfo(param: FunctionsCoreApiAiUnstripRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        return this.api.aiUnstripWithHttpInfo(param.analysisId, param.aiUnstripRequest,  options).toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param param the request object
     */
    public aiUnstrip(param: FunctionsCoreApiAiUnstripRequest, options?: ConfigurationOptions): Promise<AutoUnstripResponse> {
        return this.api.aiUnstrip(param.analysisId, param.aiUnstripRequest,  options).toPromise();
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param param the request object
     */
    public analysisFunctionMatchingWithHttpInfo(param: FunctionsCoreApiAnalysisFunctionMatchingRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionMatchingResponse>> {
        return this.api.analysisFunctionMatchingWithHttpInfo(param.analysisId, param.analysisFunctionMatchingRequest,  options).toPromise();
    }

    /**
     * Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids
     * Perform matching for the functions of an analysis
     * @param param the request object
     */
    public analysisFunctionMatching(param: FunctionsCoreApiAnalysisFunctionMatchingRequest, options?: ConfigurationOptions): Promise<FunctionMatchingResponse> {
        return this.api.analysisFunctionMatching(param.analysisId, param.analysisFunctionMatchingRequest,  options).toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param param the request object
     */
    public autoUnstripWithHttpInfo(param: FunctionsCoreApiAutoUnstripRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        return this.api.autoUnstripWithHttpInfo(param.analysisId, param.autoUnstripRequest,  options).toPromise();
    }

    /**
     * Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system
     * Performs matching and auto-unstrip for an analysis and its functions
     * @param param the request object
     */
    public autoUnstrip(param: FunctionsCoreApiAutoUnstripRequest, options?: ConfigurationOptions): Promise<AutoUnstripResponse> {
        return this.api.autoUnstrip(param.analysisId, param.autoUnstripRequest,  options).toPromise();
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param param the request object
     */
    public batchFunctionMatchingWithHttpInfo(param: FunctionsCoreApiBatchFunctionMatchingRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionMatchingResponse>> {
        return this.api.batchFunctionMatchingWithHttpInfo(param.functionMatchingRequest,  options).toPromise();
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param param the request object
     */
    public batchFunctionMatching(param: FunctionsCoreApiBatchFunctionMatchingRequest, options?: ConfigurationOptions): Promise<FunctionMatchingResponse> {
        return this.api.batchFunctionMatching(param.functionMatchingRequest,  options).toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param param the request object
     */
    public cancelAiUnstripWithHttpInfo(param: FunctionsCoreApiCancelAiUnstripRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        return this.api.cancelAiUnstripWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running ai-unstrip operation
     * Cancels a running ai-unstrip
     * @param param the request object
     */
    public cancelAiUnstrip(param: FunctionsCoreApiCancelAiUnstripRequest, options?: ConfigurationOptions): Promise<AutoUnstripResponse> {
        return this.api.cancelAiUnstrip(param.analysisId,  options).toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param param the request object
     */
    public cancelAutoUnstripWithHttpInfo(param: FunctionsCoreApiCancelAutoUnstripRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoUnstripResponse>> {
        return this.api.cancelAutoUnstripWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Takes in the analysis ID and cancels a running auto-unstrip operation
     * Cancels a running auto-unstrip
     * @param param the request object
     */
    public cancelAutoUnstrip(param: FunctionsCoreApiCancelAutoUnstripRequest, options?: ConfigurationOptions): Promise<AutoUnstripResponse> {
        return this.api.cancelAutoUnstrip(param.analysisId,  options).toPromise();
    }

    /**
     * Get string information found in the analysis
     * Get string information found in the Analysis
     * @param param the request object
     */
    public getAnalysisStringsWithHttpInfo(param: FunctionsCoreApiGetAnalysisStringsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStringsResponse>> {
        return this.api.getAnalysisStringsWithHttpInfo(param.analysisId, param.page, param.pageSize, param.search, param.functionSearch, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Get string information found in the analysis
     * Get string information found in the Analysis
     * @param param the request object
     */
    public getAnalysisStrings(param: FunctionsCoreApiGetAnalysisStringsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisStringsResponse> {
        return this.api.getAnalysisStrings(param.analysisId, param.page, param.pageSize, param.search, param.functionSearch, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param param the request object
     */
    public getAnalysisStringsStatusWithHttpInfo(param: FunctionsCoreApiGetAnalysisStringsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStringsStatusResponse>> {
        return this.api.getAnalysisStringsStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param param the request object
     */
    public getAnalysisStringsStatus(param: FunctionsCoreApiGetAnalysisStringsStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisStringsStatusResponse> {
        return this.api.getAnalysisStringsStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param param the request object
     */
    public getFunctionBlocksWithHttpInfo(param: FunctionsCoreApiGetFunctionBlocksRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionBlocksResponse>> {
        return this.api.getFunctionBlocksWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Get disassembly blocks related to the function
     * Get disassembly blocks related to the function
     * @param param the request object
     */
    public getFunctionBlocks(param: FunctionsCoreApiGetFunctionBlocksRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionBlocksResponse> {
        return this.api.getFunctionBlocks(param.functionId,  options).toPromise();
    }

    /**
     * Get list of functions that call or are called by the specified function
     * @param param the request object
     */
    public getFunctionCalleesCallersWithHttpInfo(param: FunctionsCoreApiGetFunctionCalleesCallersRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCalleesCallerFunctionsResponse>> {
        return this.api.getFunctionCalleesCallersWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Get list of functions that call or are called by the specified function
     * @param param the request object
     */
    public getFunctionCalleesCallers(param: FunctionsCoreApiGetFunctionCalleesCallersRequest, options?: ConfigurationOptions): Promise<BaseResponseCalleesCallerFunctionsResponse> {
        return this.api.getFunctionCalleesCallers(param.functionId,  options).toPromise();
    }

    /**
     * Get list of functions that call or are called for a list of functions
     * @param param the request object
     */
    public getFunctionCalleesCallersBulkWithHttpInfo(param: FunctionsCoreApiGetFunctionCalleesCallersBulkRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCalleesCallerFunctionsResponse>> {
        return this.api.getFunctionCalleesCallersBulkWithHttpInfo(param.functionIds,  options).toPromise();
    }

    /**
     * Get list of functions that call or are called for a list of functions
     * @param param the request object
     */
    public getFunctionCalleesCallersBulk(param: FunctionsCoreApiGetFunctionCalleesCallersBulkRequest, options?: ConfigurationOptions): Promise<BaseResponseListCalleesCallerFunctionsResponse> {
        return this.api.getFunctionCalleesCallersBulk(param.functionIds,  options).toPromise();
    }

    /**
     * Retrieve a functions capabilities
     * @param param the request object
     */
    public getFunctionCapabilitiesWithHttpInfo(param: FunctionsCoreApiGetFunctionCapabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionCapabilityResponse>> {
        return this.api.getFunctionCapabilitiesWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Retrieve a functions capabilities
     * @param param the request object
     */
    public getFunctionCapabilities(param: FunctionsCoreApiGetFunctionCapabilitiesRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionCapabilityResponse> {
        return this.api.getFunctionCapabilities(param.functionId,  options).toPromise();
    }

    /**
     * Get function details
     * @param param the request object
     */
    public getFunctionDetailsWithHttpInfo(param: FunctionsCoreApiGetFunctionDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionsDetailResponse>> {
        return this.api.getFunctionDetailsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Get function details
     * @param param the request object
     */
    public getFunctionDetails(param: FunctionsCoreApiGetFunctionDetailsRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionsDetailResponse> {
        return this.api.getFunctionDetails(param.functionId,  options).toPromise();
    }

    /**
     * Get string information found in the function
     * Get string information found in the function
     * @param param the request object
     */
    public getFunctionStringsWithHttpInfo(param: FunctionsCoreApiGetFunctionStringsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionStringsResponse>> {
        return this.api.getFunctionStringsWithHttpInfo(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Get string information found in the function
     * Get string information found in the function
     * @param param the request object
     */
    public getFunctionStrings(param: FunctionsCoreApiGetFunctionStringsRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionStringsResponse> {
        return this.api.getFunctionStrings(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
    }

}

import { ObservableFunctionsDataTypesApi } from "./ObservableAPI";
import { FunctionsDataTypesApiRequestFactory, FunctionsDataTypesApiResponseProcessor} from "../apis/FunctionsDataTypesApi";

export interface FunctionsDataTypesApiGenerateFunctionDataTypesForAnalysisRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApigenerateFunctionDataTypesForAnalysis
     */
    analysisId: number
    /**
     * 
     * @type FunctionDataTypesParams
     * @memberof FunctionsDataTypesApigenerateFunctionDataTypesForAnalysis
     */
    functionDataTypesParams: FunctionDataTypesParams
}

export interface FunctionsDataTypesApiGenerateFunctionDataTypesForFunctionsRequest {
    /**
     * 
     * @type FunctionDataTypesParams
     * @memberof FunctionsDataTypesApigenerateFunctionDataTypesForFunctions
     */
    functionDataTypesParams: FunctionDataTypesParams
}

export interface FunctionsDataTypesApiGetFunctionDataTypesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApigetFunctionDataTypes
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApigetFunctionDataTypes
     */
    functionId: number
}

export interface FunctionsDataTypesApiListFunctionDataTypesForAnalysisRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApilistFunctionDataTypesForAnalysis
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsDataTypesApilistFunctionDataTypesForAnalysis
     */
    functionIds?: Array<number>
}

export interface FunctionsDataTypesApiListFunctionDataTypesForFunctionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FunctionsDataTypesApilistFunctionDataTypesForFunctions
     */
    functionIds?: Array<number>
}

export interface FunctionsDataTypesApiUpdateFunctionDataTypesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    analysisId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    functionId: number
    /**
     * 
     * @type UpdateFunctionDataTypes
     * @memberof FunctionsDataTypesApiupdateFunctionDataTypes
     */
    updateFunctionDataTypes: UpdateFunctionDataTypes
}

export class ObjectFunctionsDataTypesApi {
    private api: ObservableFunctionsDataTypesApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsDataTypesApiRequestFactory, responseProcessor?: FunctionsDataTypesApiResponseProcessor) {
        this.api = new ObservableFunctionsDataTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param param the request object
     */
    public generateFunctionDataTypesForAnalysisWithHttpInfo(param: FunctionsDataTypesApiGenerateFunctionDataTypesForAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseGenerateFunctionDataTypes>> {
        return this.api.generateFunctionDataTypesForAnalysisWithHttpInfo(param.analysisId, param.functionDataTypesParams,  options).toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types
     * @param param the request object
     */
    public generateFunctionDataTypesForAnalysis(param: FunctionsDataTypesApiGenerateFunctionDataTypesForAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseGenerateFunctionDataTypes> {
        return this.api.generateFunctionDataTypesForAnalysis(param.analysisId, param.functionDataTypesParams,  options).toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param param the request object
     */
    public generateFunctionDataTypesForFunctionsWithHttpInfo(param: FunctionsDataTypesApiGenerateFunctionDataTypesForFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseGenerationStatusList>> {
        return this.api.generateFunctionDataTypesForFunctionsWithHttpInfo(param.functionDataTypesParams,  options).toPromise();
    }

    /**
     * Submits a request to generate the function data types
     * Generate Function Data Types for an arbitrary list of functions
     * @param param the request object
     */
    public generateFunctionDataTypesForFunctions(param: FunctionsDataTypesApiGenerateFunctionDataTypesForFunctionsRequest, options?: ConfigurationOptions): Promise<BaseResponseGenerationStatusList> {
        return this.api.generateFunctionDataTypesForFunctions(param.functionDataTypesParams,  options).toPromise();
    }

    /**
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param param the request object
     */
    public getFunctionDataTypesWithHttpInfo(param: FunctionsDataTypesApiGetFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypes>> {
        return this.api.getFunctionDataTypesWithHttpInfo(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * Polling endpoint which returns the current status of function generation and once completed the data type information
     * Get Function Data Types
     * @param param the request object
     */
    public getFunctionDataTypes(param: FunctionsDataTypesApiGetFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionDataTypes> {
        return this.api.getFunctionDataTypes(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param param the request object
     */
    public listFunctionDataTypesForAnalysisWithHttpInfo(param: FunctionsDataTypesApiListFunctionDataTypesForAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypesList>> {
        return this.api.listFunctionDataTypesForAnalysisWithHttpInfo(param.analysisId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns data types for multiple functions with optional function ID filtering
     * List Function Data Types
     * @param param the request object
     */
    public listFunctionDataTypesForAnalysis(param: FunctionsDataTypesApiListFunctionDataTypesForAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionDataTypesList> {
        return this.api.listFunctionDataTypesForAnalysis(param.analysisId, param.functionIds,  options).toPromise();
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param param the request object
     */
    public listFunctionDataTypesForFunctionsWithHttpInfo(param: FunctionsDataTypesApiListFunctionDataTypesForFunctionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypesList>> {
        return this.api.listFunctionDataTypesForFunctionsWithHttpInfo(param.functionIds,  options).toPromise();
    }

    /**
     * Returns data types for multiple function IDs
     * List Function Data Types
     * @param param the request object
     */
    public listFunctionDataTypesForFunctions(param: FunctionsDataTypesApiListFunctionDataTypesForFunctionsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseFunctionDataTypesList> {
        return this.api.listFunctionDataTypesForFunctions(param.functionIds,  options).toPromise();
    }

    /**
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param param the request object
     */
    public updateFunctionDataTypesWithHttpInfo(param: FunctionsDataTypesApiUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionDataTypes>> {
        return this.api.updateFunctionDataTypesWithHttpInfo(param.analysisId, param.functionId, param.updateFunctionDataTypes,  options).toPromise();
    }

    /**
     * Updates the function data types for a given function
     * Update Function Data Types
     * @param param the request object
     */
    public updateFunctionDataTypes(param: FunctionsDataTypesApiUpdateFunctionDataTypesRequest, options?: ConfigurationOptions): Promise<BaseResponseFunctionDataTypes> {
        return this.api.updateFunctionDataTypes(param.analysisId, param.functionId, param.updateFunctionDataTypes,  options).toPromise();
    }

}

import { ObservableFunctionsRenamingHistoryApi } from "./ObservableAPI";
import { FunctionsRenamingHistoryApiRequestFactory, FunctionsRenamingHistoryApiResponseProcessor} from "../apis/FunctionsRenamingHistoryApi";

export interface FunctionsRenamingHistoryApiBatchRenameFunctionRequest {
    /**
     * 
     * @type FunctionsListRename
     * @memberof FunctionsRenamingHistoryApibatchRenameFunction
     */
    functionsListRename: FunctionsListRename
}

export interface FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApigetFunctionNameHistory
     */
    functionId: number
}

export interface FunctionsRenamingHistoryApiRenameFunctionIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirenameFunctionId
     */
    functionId: number
    /**
     * 
     * @type FunctionRename
     * @memberof FunctionsRenamingHistoryApirenameFunctionId
     */
    functionRename: FunctionRename
}

export interface FunctionsRenamingHistoryApiRevertFunctionNameRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirevertFunctionName
     */
    functionId: number
    /**
     * 
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
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param param the request object
     */
    public batchRenameFunctionWithHttpInfo(param: FunctionsRenamingHistoryApiBatchRenameFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.batchRenameFunctionWithHttpInfo(param.functionsListRename,  options).toPromise();
    }

    /**
     * Renames a list of functions using the function IDs   Will record name changes in history
     * Batch Rename Functions
     * @param param the request object
     */
    public batchRenameFunction(param: FunctionsRenamingHistoryApiBatchRenameFunctionRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.batchRenameFunction(param.functionsListRename,  options).toPromise();
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param param the request object
     */
    public getFunctionNameHistoryWithHttpInfo(param: FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListFunctionNameHistory>> {
        return this.api.getFunctionNameHistoryWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Gets the name history of a function using the function ID
     * Get Function Name History
     * @param param the request object
     */
    public getFunctionNameHistory(param: FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest, options?: ConfigurationOptions): Promise<BaseResponseListFunctionNameHistory> {
        return this.api.getFunctionNameHistory(param.functionId,  options).toPromise();
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param param the request object
     */
    public renameFunctionIdWithHttpInfo(param: FunctionsRenamingHistoryApiRenameFunctionIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.renameFunctionIdWithHttpInfo(param.functionId, param.functionRename,  options).toPromise();
    }

    /**
     * Renames a function using the function ID   Will record name change history
     * Rename Function
     * @param param the request object
     */
    public renameFunctionId(param: FunctionsRenamingHistoryApiRenameFunctionIdRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.renameFunctionId(param.functionId, param.functionRename,  options).toPromise();
    }

    /**
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param param the request object
     */
    public revertFunctionNameWithHttpInfo(param: FunctionsRenamingHistoryApiRevertFunctionNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.revertFunctionNameWithHttpInfo(param.functionId, param.historyId,  options).toPromise();
    }

    /**
     * Reverts the function name to a previous name using the function ID and history ID
     * Revert the function name
     * @param param the request object
     */
    public revertFunctionName(param: FunctionsRenamingHistoryApiRevertFunctionNameRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.revertFunctionName(param.functionId, param.historyId,  options).toPromise();
    }

}

import { ObservableModelsApi } from "./ObservableAPI";
import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";

export interface ModelsApiGetModelsRequest {
}

export class ObjectModelsApi {
    private api: ObservableModelsApi

    public constructor(configuration: Configuration, requestFactory?: ModelsApiRequestFactory, responseProcessor?: ModelsApiResponseProcessor) {
        this.api = new ObservableModelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     * @param param the request object
     */
    public getModelsWithHttpInfo(param: ModelsApiGetModelsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseModelsResponse>> {
        return this.api.getModelsWithHttpInfo( options).toPromise();
    }

    /**
     * Gets active models available for analysis.
     * Gets models
     * @param param the request object
     */
    public getModels(param: ModelsApiGetModelsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseModelsResponse> {
        return this.api.getModels( options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchBinariesRequest {
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof SearchApisearchBinaries
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 10
     * @type number
     * @memberof SearchApisearchBinaries
     */
    pageSize?: number
    /**
     * The partial or full name of the binary being searched
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchBinaries
     */
    partialName?: string
    /**
     * The partial or full sha256 of the binary being searched
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchBinaries
     */
    partialSha256?: string
    /**
     * The tags to be searched for
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApisearchBinaries
     */
    tags?: Array<string>
    /**
     * The name of the model used to analyze the binary the function belongs to
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchBinaries
     */
    modelName?: string
    /**
     * Whether to only search user\&#39;s uploaded files
     * Defaults to: false
     * @type boolean
     * @memberof SearchApisearchBinaries
     */
    userFilesOnly?: boolean
}

export interface SearchApiSearchCollectionsRequest {
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof SearchApisearchCollections
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 10
     * @type number
     * @memberof SearchApisearchCollections
     */
    pageSize?: number
    /**
     * The partial or full name of the collection being searched
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchCollections
     */
    partialCollectionName?: string
    /**
     * The partial or full name of the binary belonging to the collection
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchCollections
     */
    partialBinaryName?: string
    /**
     * The partial or full sha256 of the binary belonging to the collection
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchCollections
     */
    partialBinarySha256?: string
    /**
     * The tags to be searched for
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApisearchCollections
     */
    tags?: Array<string>
    /**
     * The name of the model used to analyze the binary the function belongs to
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchCollections
     */
    modelName?: string
    /**
     * The filters to be used for the search
     * Defaults to: undefined
     * @type Array&lt;Filters&gt;
     * @memberof SearchApisearchCollections
     */
    filters?: Array<Filters>
    /**
     * The field to sort the order by in the results
     * Defaults to: undefined
     * @type AppApiRestV2CollectionsEnumsOrderBy
     * @memberof SearchApisearchCollections
     */
    orderBy?: AppApiRestV2CollectionsEnumsOrderBy
    /**
     * The order direction in which to return results
     * Defaults to: undefined
     * @type Order
     * @memberof SearchApisearchCollections
     */
    orderByDirection?: Order
}

export interface SearchApiSearchFunctionsRequest {
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof SearchApisearchFunctions
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 10
     * @type number
     * @memberof SearchApisearchFunctions
     */
    pageSize?: number
    /**
     * The partial or full name of the function being searched
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchFunctions
     */
    partialName?: string
    /**
     * The name of the model used to analyze the binary the function belongs to
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchFunctions
     */
    modelName?: string
}

export interface SearchApiSearchTagsRequest {
    /**
     * The partial or full name of the tag to search for
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchTags
     */
    partialName: string
    /**
     * The page number to retrieve.
     * Minimum: 1
     * Maximum: 100000
     * Defaults to: 1
     * @type number
     * @memberof SearchApisearchTags
     */
    page?: number
    /**
     * Number of items per page.
     * Minimum: 1
     * Defaults to: 10
     * @type number
     * @memberof SearchApisearchTags
     */
    pageSize?: number
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches for a specific binary
     * Binaries search
     * @param param the request object
     */
    public searchBinariesWithHttpInfo(param: SearchApiSearchBinariesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinarySearchResponse>> {
        return this.api.searchBinariesWithHttpInfo(param.page, param.pageSize, param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly,  options).toPromise();
    }

    /**
     * Searches for a specific binary
     * Binaries search
     * @param param the request object
     */
    public searchBinaries(param: SearchApiSearchBinariesRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseBinarySearchResponse> {
        return this.api.searchBinaries(param.page, param.pageSize, param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly,  options).toPromise();
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param param the request object
     */
    public searchCollectionsWithHttpInfo(param: SearchApiSearchCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionSearchResponse>> {
        return this.api.searchCollectionsWithHttpInfo(param.page, param.pageSize, param.partialCollectionName, param.partialBinaryName, param.partialBinarySha256, param.tags, param.modelName, param.filters, param.orderBy, param.orderByDirection,  options).toPromise();
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param param the request object
     */
    public searchCollections(param: SearchApiSearchCollectionsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseCollectionSearchResponse> {
        return this.api.searchCollections(param.page, param.pageSize, param.partialCollectionName, param.partialBinaryName, param.partialBinarySha256, param.tags, param.modelName, param.filters, param.orderBy, param.orderByDirection,  options).toPromise();
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param param the request object
     */
    public searchFunctionsWithHttpInfo(param: SearchApiSearchFunctionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseFunctionSearchResponse>> {
        return this.api.searchFunctionsWithHttpInfo(param.page, param.pageSize, param.partialName, param.modelName,  options).toPromise();
    }

    /**
     * Searches for a specific function
     * Functions search
     * @param param the request object
     */
    public searchFunctions(param: SearchApiSearchFunctionsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseFunctionSearchResponse> {
        return this.api.searchFunctions(param.page, param.pageSize, param.partialName, param.modelName,  options).toPromise();
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param param the request object
     */
    public searchTagsWithHttpInfo(param: SearchApiSearchTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseTagSearchResponse>> {
        return this.api.searchTagsWithHttpInfo(param.partialName, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Searches for tags by there name
     * Tags search
     * @param param the request object
     */
    public searchTags(param: SearchApiSearchTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseTagSearchResponse> {
        return this.api.searchTags(param.partialName, param.page, param.pageSize,  options).toPromise();
    }

}
