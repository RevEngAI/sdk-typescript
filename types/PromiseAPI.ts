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
import { AdditionalDetailsStatusResponse } from '../models/AdditionalDetailsStatusResponse';
import { AiDecompilationRating } from '../models/AiDecompilationRating';
import { AiUnstripRequest } from '../models/AiUnstripRequest';
import { AnalysisAccessInfo } from '../models/AnalysisAccessInfo';
import { AnalysisBasicInfoOutputBody } from '../models/AnalysisBasicInfoOutputBody';
import { AnalysisBulkAddTagsRequest } from '../models/AnalysisBulkAddTagsRequest';
import { AnalysisBulkAddTagsResponse } from '../models/AnalysisBulkAddTagsResponse';
import { AnalysisBulkAddTagsResponseItem } from '../models/AnalysisBulkAddTagsResponseItem';
import { AnalysisConfig } from '../models/AnalysisConfig';
import { AnalysisConfigSnapshot } from '../models/AnalysisConfigSnapshot';
import { AnalysisCreateRequest } from '../models/AnalysisCreateRequest';
import { AnalysisCreateResponse } from '../models/AnalysisCreateResponse';
import { AnalysisDetailResponse } from '../models/AnalysisDetailResponse';
import { AnalysisFunctionEntry } from '../models/AnalysisFunctionEntry';
import { AnalysisFunctionMapping } from '../models/AnalysisFunctionMapping';
import { AnalysisFunctionMatchingRequest } from '../models/AnalysisFunctionMatchingRequest';
import { AnalysisFunctions } from '../models/AnalysisFunctions';
import { AnalysisFunctionsList } from '../models/AnalysisFunctionsList';
import { AnalysisLogMessage } from '../models/AnalysisLogMessage';
import { AnalysisLogs } from '../models/AnalysisLogs';
import { AnalysisRecord } from '../models/AnalysisRecord';
import { AnalysisReport } from '../models/AnalysisReport';
import { AnalysisScope } from '../models/AnalysisScope';
import { AnalysisStringFunction } from '../models/AnalysisStringFunction';
import { AnalysisStringInput } from '../models/AnalysisStringInput';
import { AnalysisStringItem } from '../models/AnalysisStringItem';
import { AnalysisStringsResponse } from '../models/AnalysisStringsResponse';
import { AnalysisStringsStatusResponse } from '../models/AnalysisStringsStatusResponse';
import { AnalysisTags } from '../models/AnalysisTags';
import { AnalysisUpdateRequest } from '../models/AnalysisUpdateRequest';
import { AnalysisUpdateTagsRequest } from '../models/AnalysisUpdateTagsRequest';
import { AnalysisUpdateTagsResponse } from '../models/AnalysisUpdateTagsResponse';
import { ApiCall } from '../models/ApiCall';
import { AppApiRestV2AgentSchemaCapability } from '../models/AppApiRestV2AgentSchemaCapability';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { AppApiRestV2CollectionsEnumsOrderBy } from '../models/AppApiRestV2CollectionsEnumsOrderBy';
import { AppApiRestV2FunctionsResponsesFunction } from '../models/AppApiRestV2FunctionsResponsesFunction';
import { AppApiRestV2FunctionsTypesFunction } from '../models/AppApiRestV2FunctionsTypesFunction';
import { AppApiRestV2InfoTypesCapability } from '../models/AppApiRestV2InfoTypesCapability';
import { Argument } from '../models/Argument';
import { Artifact } from '../models/Artifact';
import { AttemptFailedEvent } from '../models/AttemptFailedEvent';
import { AttemptStartedEvent } from '../models/AttemptStartedEvent';
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
import { BaseResponseExternalResponse } from '../models/BaseResponseExternalResponse';
import { BaseResponseFunctionBlocksResponse } from '../models/BaseResponseFunctionBlocksResponse';
import { BaseResponseFunctionCapabilityResponse } from '../models/BaseResponseFunctionCapabilityResponse';
import { BaseResponseFunctionDataTypes } from '../models/BaseResponseFunctionDataTypes';
import { BaseResponseFunctionDataTypesList } from '../models/BaseResponseFunctionDataTypesList';
import { BaseResponseFunctionSearchResponse } from '../models/BaseResponseFunctionSearchResponse';
import { BaseResponseFunctionStringsResponse } from '../models/BaseResponseFunctionStringsResponse';
import { BaseResponseFunctionsDetailResponse } from '../models/BaseResponseFunctionsDetailResponse';
import { BaseResponseGenerateFunctionDataTypes } from '../models/BaseResponseGenerateFunctionDataTypes';
import { BaseResponseGenerationStatusList } from '../models/BaseResponseGenerationStatusList';
import { BaseResponseGetPublicUserResponse } from '../models/BaseResponseGetPublicUserResponse';
import { BaseResponseListCalleesCallerFunctionsResponse } from '../models/BaseResponseListCalleesCallerFunctionsResponse';
import { BaseResponseListCollectionResults } from '../models/BaseResponseListCollectionResults';
import { BaseResponseListCommentResponse } from '../models/BaseResponseListCommentResponse';
import { BaseResponseListDieMatch } from '../models/BaseResponseListDieMatch';
import { BaseResponseListFunctionNameHistory } from '../models/BaseResponseListFunctionNameHistory';
import { BaseResponseListSBOM } from '../models/BaseResponseListSBOM';
import { BaseResponseListUserActivityResponse } from '../models/BaseResponseListUserActivityResponse';
import { BaseResponseLogs } from '../models/BaseResponseLogs';
import { BaseResponseModelsResponse } from '../models/BaseResponseModelsResponse';
import { BaseResponseParams } from '../models/BaseResponseParams';
import { BaseResponseQueuedWorkflowTaskResponse } from '../models/BaseResponseQueuedWorkflowTaskResponse';
import { BaseResponseRecent } from '../models/BaseResponseRecent';
import { BaseResponseReportAnalysisResponse } from '../models/BaseResponseReportAnalysisResponse';
import { BaseResponseStatus } from '../models/BaseResponseStatus';
import { BaseResponseStr } from '../models/BaseResponseStr';
import { BaseResponseTagSearchResponse } from '../models/BaseResponseTagSearchResponse';
import { BaseResponseTaskResponse } from '../models/BaseResponseTaskResponse';
import { BaseResponseTaskStatusResponse } from '../models/BaseResponseTaskStatusResponse';
import { BaseResponseTriageReportResponse } from '../models/BaseResponseTriageReportResponse';
import { BaseResponseUnionGetAiDecompilationRatingResponseNoneType } from '../models/BaseResponseUnionGetAiDecompilationRatingResponseNoneType';
import { BaseResponseUploadResponse } from '../models/BaseResponseUploadResponse';
import { BaseResponseVulnerabilities } from '../models/BaseResponseVulnerabilities';
import { BaseResponseXrefResponse } from '../models/BaseResponseXrefResponse';
import { Basic } from '../models/Basic';
import { BatchBinaryMatchResult } from '../models/BatchBinaryMatchResult';
import { BatchMatchingOutputBody } from '../models/BatchMatchingOutputBody';
import { BatchRenameInputBody } from '../models/BatchRenameInputBody';
import { BatchRenameItem } from '../models/BatchRenameItem';
import { BatchRenameOutputBody } from '../models/BatchRenameOutputBody';
import { BatchUpdateDataTypesInputBody } from '../models/BatchUpdateDataTypesInputBody';
import { BatchUpdateDataTypesItem } from '../models/BatchUpdateDataTypesItem';
import { BatchUpdateDataTypesOutputBody } from '../models/BatchUpdateDataTypesOutputBody';
import { BatchUpdateDataTypesResult } from '../models/BatchUpdateDataTypesResult';
import { BinariesRelatedStatusResponse } from '../models/BinariesRelatedStatusResponse';
import { BinariesTaskStatus } from '../models/BinariesTaskStatus';
import { Binary } from '../models/Binary';
import { BinaryAdditionalDetailsDataResponse } from '../models/BinaryAdditionalDetailsDataResponse';
import { BinaryAdditionalResponse } from '../models/BinaryAdditionalResponse';
import { BinaryConfig } from '../models/BinaryConfig';
import { BinaryDetailsResponse } from '../models/BinaryDetailsResponse';
import { BinaryExternalsResponse } from '../models/BinaryExternalsResponse';
import { BinarySearchResponse } from '../models/BinarySearchResponse';
import { BinarySearchResult } from '../models/BinarySearchResult';
import { BinaryTaskStatus } from '../models/BinaryTaskStatus';
import { BulkCreateUserResult } from '../models/BulkCreateUserResult';
import { BulkCreateUsersOutputBody } from '../models/BulkCreateUsersOutputBody';
import { BulkDeleteAnalysesRequest } from '../models/BulkDeleteAnalysesRequest';
import { CallEdge } from '../models/CallEdge';
import { CallEdgesOutputBody } from '../models/CallEdgesOutputBody';
import { CalleeFunctionInfo } from '../models/CalleeFunctionInfo';
import { CalleesCallerFunctionsResponse } from '../models/CalleesCallerFunctionsResponse';
import { CallerFunctionInfo } from '../models/CallerFunctionInfo';
import { Capabilities } from '../models/Capabilities';
import { CapabilitiesAgentResponse } from '../models/CapabilitiesAgentResponse';
import { CapabilitiesOutputBody } from '../models/CapabilitiesOutputBody';
import { CapabilityEntry } from '../models/CapabilityEntry';
import { ChildBinariesResponse } from '../models/ChildBinariesResponse';
import { CodeSignatureModel } from '../models/CodeSignatureModel';
import { CollectionBinariesUpdateRequest } from '../models/CollectionBinariesUpdateRequest';
import { CollectionBinariesUpdateResponse } from '../models/CollectionBinariesUpdateResponse';
import { CollectionBinaryResponse } from '../models/CollectionBinaryResponse';
import { CollectionCreateRequest } from '../models/CollectionCreateRequest';
import { CollectionListItem } from '../models/CollectionListItem';
import { CollectionListItemBody } from '../models/CollectionListItemBody';
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
import { CommentsData } from '../models/CommentsData';
import { ConfigResponse } from '../models/ConfigResponse';
import { ConfirmToolInputBody } from '../models/ConfirmToolInputBody';
import { Connection } from '../models/Connection';
import { ConsoleOutputEntry } from '../models/ConsoleOutputEntry';
import { Context } from '../models/Context';
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
import { Created } from '../models/Created';
import { DataTypesEntry } from '../models/DataTypesEntry';
import { DecompFailedEvent } from '../models/DecompFailedEvent';
import { DecompFinishedEvent } from '../models/DecompFinishedEvent';
import { DecompilationCommentContext } from '../models/DecompilationCommentContext';
import { DecompilationData } from '../models/DecompilationData';
import { DieMatch } from '../models/DieMatch';
import { DisassemblyOutputBody } from '../models/DisassemblyOutputBody';
import { DnsQuery } from '../models/DnsQuery';
import { DrakvufFileMetadata } from '../models/DrakvufFileMetadata';
import { DynamicExecutionStatus } from '../models/DynamicExecutionStatus';
import { DynamicExecutionStatusResponse } from '../models/DynamicExecutionStatusResponse';
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
import { ErrorBody } from '../models/ErrorBody';
import { ErrorModel } from '../models/ErrorModel';
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
import { EventTOOLCALLRESULT } from '../models/EventTOOLCALLRESULT';
import { EventTOOLCALLSTART } from '../models/EventTOOLCALLSTART';
import { EventTOOLCONFIRMATIONREQUIRED } from '../models/EventTOOLCONFIRMATIONREQUIRED';
import { EventWarning } from '../models/EventWarning';
import { Example } from '../models/Example';
import { ExportModel } from '../models/ExportModel';
import { ExternalResponse } from '../models/ExternalResponse';
import { ExtractedURL } from '../models/ExtractedURL';
import { FileActivityEntry } from '../models/FileActivityEntry';
import { FileFormat } from '../models/FileFormat';
import { FileHashes } from '../models/FileHashes';
import { FileMetadata } from '../models/FileMetadata';
import { Filters } from '../models/Filters';
import { FormFile } from '../models/FormFile';
import { FunctionArgument } from '../models/FunctionArgument';
import { FunctionBlockDestinationResponse } from '../models/FunctionBlockDestinationResponse';
import { FunctionBlockResponse } from '../models/FunctionBlockResponse';
import { FunctionBlocksResponse } from '../models/FunctionBlocksResponse';
import { FunctionBoundary } from '../models/FunctionBoundary';
import { FunctionCallEdges } from '../models/FunctionCallEdges';
import { FunctionCapabilityResponse } from '../models/FunctionCapabilityResponse';
import { FunctionDataTypes } from '../models/FunctionDataTypes';
import { FunctionDataTypesList } from '../models/FunctionDataTypesList';
import { FunctionDataTypesListItem } from '../models/FunctionDataTypesListItem';
import { FunctionDataTypesParams } from '../models/FunctionDataTypesParams';
import { FunctionDataTypesStatus } from '../models/FunctionDataTypesStatus';
import { FunctionDependency } from '../models/FunctionDependency';
import { FunctionDetailsOutputBody } from '../models/FunctionDetailsOutputBody';
import { FunctionHeader } from '../models/FunctionHeader';
import { FunctionInfo } from '../models/FunctionInfo';
import { FunctionListItem } from '../models/FunctionListItem';
import { FunctionLocalVariableResponse } from '../models/FunctionLocalVariableResponse';
import { FunctionMapping } from '../models/FunctionMapping';
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
import { FunctionStackVariable } from '../models/FunctionStackVariable';
import { FunctionString } from '../models/FunctionString';
import { FunctionStringItem } from '../models/FunctionStringItem';
import { FunctionStringsResponse } from '../models/FunctionStringsResponse';
import { FunctionType } from '../models/FunctionType';
import { FunctionsDetailResponse } from '../models/FunctionsDetailResponse';
import { FunctionsListRename } from '../models/FunctionsListRename';
import { GenerateFunctionDataTypes } from '../models/GenerateFunctionDataTypes';
import { GeneratePDFOutputBody } from '../models/GeneratePDFOutputBody';
import { GenerationStatusList } from '../models/GenerationStatusList';
import { GetAdditionalDetailsOutputBody } from '../models/GetAdditionalDetailsOutputBody';
import { GetAdditionalDetailsStatusOutputBody } from '../models/GetAdditionalDetailsStatusOutputBody';
import { GetAiDecompilationRatingResponse } from '../models/GetAiDecompilationRatingResponse';
import { GetAnalysisStringsStatusOutputBody } from '../models/GetAnalysisStringsStatusOutputBody';
import { GetCollectionOutputBody } from '../models/GetCollectionOutputBody';
import { GetMatchesOutputBody } from '../models/GetMatchesOutputBody';
import { GetMatchesStatusOutputBody } from '../models/GetMatchesStatusOutputBody';
import { GetProductsOutputBody } from '../models/GetProductsOutputBody';
import { GetPublicUserResponse } from '../models/GetPublicUserResponse';
import { GetSubscriptionOutputBody } from '../models/GetSubscriptionOutputBody';
import { GlobalVariable } from '../models/GlobalVariable';
import { HistoryEntry } from '../models/HistoryEntry';
import { HttpRequest } from '../models/HttpRequest';
import { IOC } from '../models/IOC';
import { ISA } from '../models/ISA';
import { IconModel } from '../models/IconModel';
import { ImportModel } from '../models/ImportModel';
import { InlineComment } from '../models/InlineComment';
import { InsertAnalysisLogRequest } from '../models/InsertAnalysisLogRequest';
import { InviteUserInputBody } from '../models/InviteUserInputBody';
import { IssuerAllowedDomain } from '../models/IssuerAllowedDomain';
import { ListAnalysisFunctionsDataTypesOutputBody } from '../models/ListAnalysisFunctionsDataTypesOutputBody';
import { ListAnalysisFunctionsOutputBody } from '../models/ListAnalysisFunctionsOutputBody';
import { ListAnalysisStringsOutputBody } from '../models/ListAnalysisStringsOutputBody';
import { ListCollectionResults } from '../models/ListCollectionResults';
import { ListCollectionsOutputBody } from '../models/ListCollectionsOutputBody';
import { ListExampleAnalysesOutputBody } from '../models/ListExampleAnalysesOutputBody';
import { ListFunctionStringsOutputBody } from '../models/ListFunctionStringsOutputBody';
import { ListFunctionsDataTypesOutputBody } from '../models/ListFunctionsDataTypesOutputBody';
import { ListTeamsOutputBody } from '../models/ListTeamsOutputBody';
import { ListUsersOutputBody } from '../models/ListUsersOutputBody';
import { LocationOutputBody } from '../models/LocationOutputBody';
import { Logs } from '../models/Logs';
import { MITRETechnique } from '../models/MITRETechnique';
import { MatchFilters } from '../models/MatchFilters';
import { MatchedFunction } from '../models/MatchedFunction';
import { MatchedFunctionSuggestion } from '../models/MatchedFunctionSuggestion';
import { MemdumpEntry } from '../models/MemdumpEntry';
import { MessageBody } from '../models/MessageBody';
import { MetaModel } from '../models/MetaModel';
import { ModelName } from '../models/ModelName';
import { ModelsResponse } from '../models/ModelsResponse';
import { ModuleLoadEntry } from '../models/ModuleLoadEntry';
import { MutexEntry } from '../models/MutexEntry';
import { NameConfidence } from '../models/NameConfidence';
import { NameSourceType } from '../models/NameSourceType';
import { NetworkActivity } from '../models/NetworkActivity';
import { OIDCCallbackInputBody } from '../models/OIDCCallbackInputBody';
import { Order } from '../models/Order';
import { Organisation } from '../models/Organisation';
import { OrganisationGroup } from '../models/OrganisationGroup';
import { OrganisationIssuer } from '../models/OrganisationIssuer';
import { OrganisationOwner } from '../models/OrganisationOwner';
import { PDBDebugModel } from '../models/PDBDebugModel';
import { PEModel } from '../models/PEModel';
import { PaginationModel } from '../models/PaginationModel';
import { Params } from '../models/Params';
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
import { Platform } from '../models/Platform';
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
import { PutAnalysisStringsRequest } from '../models/PutAnalysisStringsRequest';
import { QueuedWorkflowTaskResponse } from '../models/QueuedWorkflowTaskResponse';
import { ReAnalysisForm } from '../models/ReAnalysisForm';
import { Recent } from '../models/Recent';
import { RefreshBody } from '../models/RefreshBody';
import { RegenerateOutputBody } from '../models/RegenerateOutputBody';
import { RegisterUserInputBody } from '../models/RegisterUserInputBody';
import { RegistryOperation } from '../models/RegistryOperation';
import { RelativeBinaryResponse } from '../models/RelativeBinaryResponse';
import { RenameAppliedEvent } from '../models/RenameAppliedEvent';
import { RenameInputBody } from '../models/RenameInputBody';
import { RenameOutputBody } from '../models/RenameOutputBody';
import { ReplacementValue } from '../models/ReplacementValue';
import { ReportAnalysisResponse } from '../models/ReportAnalysisResponse';
import { ReportEvent } from '../models/ReportEvent';
import { ReportInfo } from '../models/ReportInfo';
import { ReportOptions } from '../models/ReportOptions';
import { RevokeBody } from '../models/RevokeBody';
import { SBOM } from '../models/SBOM';
import { SBOMPackage } from '../models/SBOMPackage';
import { SSOProvider } from '../models/SSOProvider';
import { SSOProvidersOutputBody } from '../models/SSOProvidersOutputBody';
import { SandboxOptions } from '../models/SandboxOptions';
import { SandboxStartMethod } from '../models/SandboxStartMethod';
import { SandboxTimeout } from '../models/SandboxTimeout';
import { ScheduledTaskEntry } from '../models/ScheduledTaskEntry';
import { ScrapeThirdPartyConfig } from '../models/ScrapeThirdPartyConfig';
import { SectionModel } from '../models/SectionModel';
import { SecurityModel } from '../models/SecurityModel';
import { SegmentInfo } from '../models/SegmentInfo';
import { SendMessageRequest } from '../models/SendMessageRequest';
import { ServiceEntry } from '../models/ServiceEntry';
import { SessionOutputBody } from '../models/SessionOutputBody';
import { SingleCodeCertificateModel } from '../models/SingleCodeCertificateModel';
import { SingleCodeSignatureModel } from '../models/SingleCodeSignatureModel';
import { SinglePDBEntryModel } from '../models/SinglePDBEntryModel';
import { SingleSectionModel } from '../models/SingleSectionModel';
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
import { SseEventToolCallResultData } from '../models/SseEventToolCallResultData';
import { SseEventToolCallStartData } from '../models/SseEventToolCallStartData';
import { SseEventToolConfirmationRequiredData } from '../models/SseEventToolConfirmationRequiredData';
import { StackVariable } from '../models/StackVariable';
import { StartBatchMatchingInputBody } from '../models/StartBatchMatchingInputBody';
import { StartMatchingForAnalysisInputBody } from '../models/StartMatchingForAnalysisInputBody';
import { StartMatchingForFunctionsInputBody } from '../models/StartMatchingForFunctionsInputBody';
import { StartMatchingOutputBody } from '../models/StartMatchingOutputBody';
import { StartupInfo } from '../models/StartupInfo';
import { StatusInput } from '../models/StatusInput';
import { StatusOutput } from '../models/StatusOutput';
import { StatusResponse } from '../models/StatusResponse';
import { StreamAiDecompilation200ResponseInner } from '../models/StreamAiDecompilation200ResponseInner';
import { StreamEvents200ResponseInner } from '../models/StreamEvents200ResponseInner';
import { StringFunctions } from '../models/StringFunctions';
import { StringSource } from '../models/StringSource';
import { Structure } from '../models/Structure';
import { StructureMember } from '../models/StructureMember';
import { SubmitUserFeedbackRequest } from '../models/SubmitUserFeedbackRequest';
import { SummaryData } from '../models/SummaryData';
import { Symbols } from '../models/Symbols';
import { Tag } from '../models/Tag';
import { TagItem } from '../models/TagItem';
import { TagResponse } from '../models/TagResponse';
import { TagSearchResponse } from '../models/TagSearchResponse';
import { TagSearchResult } from '../models/TagSearchResult';
import { TaskResponse } from '../models/TaskResponse';
import { TaskStatus } from '../models/TaskStatus';
import { TaskStatusResponse } from '../models/TaskStatusResponse';
import { TcpCarvedFile } from '../models/TcpCarvedFile';
import { Team } from '../models/Team';
import { TeamMember } from '../models/TeamMember';
import { TimestampModel } from '../models/TimestampModel';
import { TokenInputBody } from '../models/TokenInputBody';
import { TokenResponse } from '../models/TokenResponse';
import { TokenisedData } from '../models/TokenisedData';
import { TriageFunctionResponse } from '../models/TriageFunctionResponse';
import { TriageReportResponse } from '../models/TriageReportResponse';
import { TriggerDynamicExecutionInputBody } from '../models/TriggerDynamicExecutionInputBody';
import { Ttp } from '../models/Ttp';
import { TypeDefinition } from '../models/TypeDefinition';
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
import { UploadFileType } from '../models/UploadFileType';
import { UploadResponse } from '../models/UploadResponse';
import { UpsertAiDecomplationRatingRequest } from '../models/UpsertAiDecomplationRatingRequest';
import { UpsertOverridesData } from '../models/UpsertOverridesData';
import { UpsertOverridesInputBody } from '../models/UpsertOverridesInputBody';
import { User } from '../models/User';
import { UserActivityResponse } from '../models/UserActivityResponse';
import { UserCredits } from '../models/UserCredits';
import { UserIdentity } from '../models/UserIdentity';
import { UserProfile } from '../models/UserProfile';
import { V2FunctionHeader } from '../models/V2FunctionHeader';
import { V2FunctionInfo } from '../models/V2FunctionInfo';
import { V2FunctionInfoFuncDepsInner } from '../models/V2FunctionInfoFuncDepsInner';
import { V2FunctionMatch } from '../models/V2FunctionMatch';
import { V2FunctionType } from '../models/V2FunctionType';
import { V2MatchedFunction } from '../models/V2MatchedFunction';
import { V2NameConfidence } from '../models/V2NameConfidence';
import { Vulnerabilities } from '../models/Vulnerabilities';
import { Vulnerability } from '../models/Vulnerability';
import { WarningEvent } from '../models/WarningEvent';
import { WorkflowProgress } from '../models/WorkflowProgress';
import { Workspace } from '../models/Workspace';
import { XrefFromResponse } from '../models/XrefFromResponse';
import { XrefResponse } from '../models/XrefResponse';
import { XrefToResponse } from '../models/XrefToResponse';
import { ObservableAgentApi } from './ObservableAPI';

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class PromiseAgentApi {
    private api: ObservableAgentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param analysisId
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param analysisId
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a report analysis workflow
     * @param analysisId
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a report analysis workflow
     * @param analysisId
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a triage analysis workflow
     * @param analysisId
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a triage analysis workflow
     * @param analysisId
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param analysisId
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param analysisId
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a combined report analysis workflow process
     * @param analysisId
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a combined report analysis workflow process
     * @param analysisId
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<QueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a triage analysis workflow process
     * @param analysisId
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a triage analysis workflow process
     * @param analysisId
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Capabilities Result
     * @param analysisId
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCapabilitiesAgentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Capabilities Result
     * @param analysisId
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseCapabilitiesAgentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param analysisId
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseReportAnalysisResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param analysisId
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseReportAnalysisResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Triage Result
     * @param analysisId
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseTriageReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Triage Result
     * @param analysisId
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseTriageReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTriageResultV2AnalysesAnalysisIdAgentTriageGet(analysisId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAnalysesBulkActionsApi } from './ObservableAPI';

import { AnalysesBulkActionsApiRequestFactory, AnalysesBulkActionsApiResponseProcessor} from "../apis/AnalysesBulkActionsApi";
export class PromiseAnalysesBulkActionsApi {
    private api: ObservableAnalysesBulkActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesBulkActionsApiRequestFactory,
        responseProcessor?: AnalysesBulkActionsApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesBulkActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest
     */
    public bulkAddAnalysisTagsWithHttpInfo(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisBulkAddTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAddAnalysisTagsWithHttpInfo(analysisBulkAddTagsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest
     */
    public bulkAddAnalysisTags(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisBulkAddTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAddAnalysisTags(analysisBulkAddTagsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest
     */
    public bulkDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest
     */
    public bulkDeleteAnalyses(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponseDict> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkDeleteAnalyses(bulkDeleteAnalysesRequest, observableOptions);
        return result.toPromise();
    }


}



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
     * Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add a user-provided string to an analysis.
     * @param analysisId Analysis ID
     * @param addUserStringInputBody
     */
    public addUserStringToAnalysisWithHttpInfo(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
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
    public addUserStringToAnalysis(analysisId: number, addUserStringInputBody: AddUserStringInputBody, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: any; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToAnalysis(analysisId, addUserStringInputBody, observableOptions);
        return result.toPromise();
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
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo_1WithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisBasicInfoOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfo_1WithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo_1(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisBasicInfoOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisBasicInfo_1(analysisId, observableOptions);
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
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     */
    public getAnalysisFunctionMatchesWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchesWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function-matching results for an analysis
     * @param analysisId Analysis ID
     */
    public getAnalysisFunctionMatches(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GetMatchesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatches(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     */
    public getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchingStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function-matching status for an analysis
     * @param analysisId Analysis ID
     */
    public getAnalysisFunctionMatchingStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionMatchingStatus(analysisId, observableOptions);
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
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param analysisId
     * @param insertAnalysisLogRequest
     */
    public insertAnalysisLogWithHttpInfo(analysisId: number, insertAnalysisLogRequest: InsertAnalysisLogRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.insertAnalysisLogWithHttpInfo(analysisId, insertAnalysisLogRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param analysisId
     * @param insertAnalysisLogRequest
     */
    public insertAnalysisLog(analysisId: number, insertAnalysisLogRequest: InsertAnalysisLogRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.insertAnalysisLog(analysisId, insertAnalysisLogRequest, observableOptions);
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
    public listAnalysesWithHttpInfo(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatus, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseRecent>> {
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
    public listAnalyses(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatus, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: PromiseConfigurationOptions): Promise<BaseResponseRecent> {
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
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param analysisId
     * @param putAnalysisStringsRequest
     */
    public putAnalysisStringsWithHttpInfo(analysisId: number, putAnalysisStringsRequest: PutAnalysisStringsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.putAnalysisStringsWithHttpInfo(analysisId, putAnalysisStringsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param analysisId
     * @param putAnalysisStringsRequest
     */
    public putAnalysisStrings(analysisId: number, putAnalysisStringsRequest: PutAnalysisStringsRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.putAnalysisStrings(analysisId, putAnalysisStringsRequest, observableOptions);
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

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param analysisId Analysis ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     * @param [functionSearch] Filter by function name (case-insensitive substring match).
     * @param [orderBy] Field to order results by.
     * @param [sortOrder] Sort direction.
     */
    public v3GetAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysisStringsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for an analysis.
     * @param analysisId Analysis ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     * @param [functionSearch] Filter by function name (case-insensitive substring match).
     * @param [orderBy] Field to order results by.
     * @param [sortOrder] Sort direction.
     */
    public v3GetAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'value' | 'length', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListAnalysisStringsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisStrings(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, observableOptions);
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
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getAnalysisFunctionsPaginatedWithHttpInfo(analysisId: number, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctionsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionsPaginatedWithHttpInfo(analysisId, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of functions identified during analysis
     * Get functions from analysis
     * @param analysisId
     * @param [page] The page number to retrieve.
     * @param [pageSize] Number of items per page.
     */
    public getAnalysisFunctionsPaginated(analysisId: number, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisFunctionsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisFunctionsPaginated(analysisId, page, pageSize, observableOptions);
        return result.toPromise();
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
    public getFunctionsListWithHttpInfo(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, includeEmbeddings?: boolean, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsListWithHttpInfo(analysisId, searchTerm, minVAddr, maxVAddr, includeEmbeddings, page, pageSize, observableOptions);
        return result.toPromise();
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
    public getFunctionsList(analysisId: number, searchTerm?: string, minVAddr?: number, maxVAddr?: number, includeEmbeddings?: boolean, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisFunctions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsList(analysisId, searchTerm, minVAddr, maxVAddr, includeEmbeddings, page, pageSize, observableOptions);
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



import { ObservableAnalysesXRefsApi } from './ObservableAPI';

import { AnalysesXRefsApiRequestFactory, AnalysesXRefsApiResponseProcessor} from "../apis/AnalysesXRefsApi";
export class PromiseAnalysesXRefsApi {
    private api: ObservableAnalysesXRefsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesXRefsApiRequestFactory,
        responseProcessor?: AnalysesXRefsApiResponseProcessor
    ) {
        this.api = new ObservableAnalysesXRefsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param analysisId
     * @param vaddr Virtual address to match against xrefs
     */
    public getXrefByVaddrWithHttpInfo(analysisId: number, vaddr: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseXrefResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getXrefByVaddrWithHttpInfo(analysisId, vaddr, observableOptions);
        return result.toPromise();
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param analysisId
     * @param vaddr Virtual address to match against xrefs
     */
    public getXrefByVaddr(analysisId: number, vaddr: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseXrefResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getXrefByVaddr(analysisId, vaddr, observableOptions);
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
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param submitUserFeedbackRequest
     */
    public submitUserFeedbackWithHttpInfo(submitUserFeedbackRequest: SubmitUserFeedbackRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.submitUserFeedbackWithHttpInfo(submitUserFeedbackRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param submitUserFeedbackRequest
     */
    public submitUserFeedback(submitUserFeedbackRequest: SubmitUserFeedbackRequest, _options?: PromiseConfigurationOptions): Promise<BaseResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.submitUserFeedback(submitUserFeedbackRequest, observableOptions);
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
    public downloadZippedBinaryWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadZippedBinaryWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downloads a zipped binary with password protection
     * @param binaryId
     */
    public downloadZippedBinary(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
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
     * Gets the status of the additional details task for a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAdditionalDetailsStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatusWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param binaryId
     */
    public getBinaryAdditionalDetailsStatus(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAdditionalDetailsStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatus(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus_1WithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatus_1WithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus_1(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetAdditionalDetailsStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetailsStatus_1(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails_2WithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetails_2WithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails_2(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetAdditionalDetailsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryAdditionalDetails_2(binaryId, observableOptions);
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
     * Gets the status of the unpack binary task for a binary
     * @param binaryId
     */
    public getBinaryRelatedStatusWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinariesRelatedStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryRelatedStatusWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param binaryId
     */
    public getBinaryRelatedStatus(binaryId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinariesRelatedStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryRelatedStatus(binaryId, observableOptions);
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
     * @param [pageSize]
     * @param [pageNumber]
     * @param [binarySearchStr]
     */
    public getCollectionWithHttpInfo(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollectionWithHttpInfo(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, observableOptions);
        return result.toPromise();
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
    public getCollection(collectionId: number, includeTags?: boolean, includeBinaries?: boolean, pageSize?: number, pageNumber?: number, binarySearchStr?: string, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollection(collectionId, includeTags, includeBinaries, pageSize, pageNumber, binarySearchStr, observableOptions);
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
    public v3ListCollectionsWithHttpInfo(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'model' | 'collection_size' | 'updated', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCollectionsOutputBody>> {
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
    public v3ListCollections(searchTerm?: string, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'model' | 'collection_size' | 'updated', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListCollectionsOutputBody> {
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



import { ObservableConfigApi } from './ObservableAPI';

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class PromiseConfigApi {
    private api: ObservableConfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * General configuration endpoint
     * Get Config
     */
    public getConfigWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseConfigResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConfigWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * General configuration endpoint
     * Get Config
     */
    public getConfig(_options?: PromiseConfigurationOptions): Promise<BaseResponseConfigResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConfig(observableOptions);
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
    public uploadFirmwareWithHttpInfo(file: string, password?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
    public uploadFirmware(file: string, password?: string, _options?: PromiseConfigurationOptions): Promise<any> {
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
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRatingWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseUnionGetAiDecompilationRatingResponseNoneType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationRatingWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRating(functionId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseUnionGetAiDecompilationRatingResponseNoneType> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAiDecompilationRating(functionId, observableOptions);
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
    public addFunctionCalleeWithHttpInfo(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
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
    public addFunctionCallee(functionId: number, addCalleeInputBody: AddCalleeInputBody, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: any; }> {
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
    public addUserStringToFunctionWithHttpInfo(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
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
    public addUserStringToFunction(functionId: number, addUserStringToFunctionInputBody: AddUserStringToFunctionInputBody, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: any; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserStringToFunction(functionId, addUserStringToFunctionInputBody, observableOptions);
        return result.toPromise();
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
    public analysisFunctionMatchingWithHttpInfo(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionMatchingResponse>> {
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
    public analysisFunctionMatching(analysisId: number, analysisFunctionMatchingRequest: AnalysisFunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<FunctionMatchingResponse> {
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
    public batchFunctionMatchingWithHttpInfo(functionMatchingRequest: FunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionMatchingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchFunctionMatchingWithHttpInfo(functionMatchingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system
     * Perform function matching for an arbitrary batch of functions, binaries or collections
     * @param functionMatchingRequest
     */
    public batchFunctionMatching(functionMatchingRequest: FunctionMatchingRequest, _options?: PromiseConfigurationOptions): Promise<FunctionMatchingResponse> {
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
     * @param [orderBy] Order by field
     * @param [sortOrder] Sort order for the results
     */
    public getAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'length' | 'value', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStringsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, observableOptions);
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
     * @param [orderBy] Order by field
     * @param [sortOrder] Sort order for the results
     */
    public getAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'length' | 'value', sortOrder?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisStringsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStrings(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, observableOptions);
        return result.toPromise();
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param analysisId
     */
    public getAnalysisStringsStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisStringsStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStringsStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get string processing state for the Analysis
     * Get string processing state for the Analysis
     * @param analysisId
     */
    public getAnalysisStringsStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseAnalysisStringsStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAnalysisStringsStatus(analysisId, observableOptions);
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
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks_1WithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DisassemblyOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocks_1WithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks_1(functionId: number, _options?: PromiseConfigurationOptions): Promise<DisassemblyOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocks_1(functionId, observableOptions);
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
     * Get list of functions that call or are called for a list of functions
     * @param functionIds
     */
    public getFunctionCalleesCallersBulkWithHttpInfo(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseListCalleesCallerFunctionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallersBulkWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of functions that call or are called for a list of functions
     * @param functionIds
     */
    public getFunctionCalleesCallersBulk(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<BaseResponseListCalleesCallerFunctionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallersBulk(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers_2WithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallers_2WithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers_2(functionId: number, _options?: PromiseConfigurationOptions): Promise<CallEdgesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCalleesCallers_2(functionId, observableOptions);
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
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities_3WithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CapabilitiesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilities_3WithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities_3(functionId: number, _options?: PromiseConfigurationOptions): Promise<CapabilitiesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionCapabilities_3(functionId, observableOptions);
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
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails_4WithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionDetailsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetails_4WithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails_4(functionId: number, _options?: PromiseConfigurationOptions): Promise<FunctionDetailsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionDetails_4(functionId, observableOptions);
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

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStrings_5WithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFunctionStringsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStrings_5WithHttpInfo(functionId, page, pageSize, search, observableOptions);
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
    public getFunctionStrings_5(functionId: number, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<ListFunctionStringsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionStrings_5(functionId, page, pageSize, search, observableOptions);
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
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public getFunctionsMatchesWithHttpInfo(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchesWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching results for an explicit set of functions
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public getFunctionsMatches(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<GetMatchesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatches(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public getFunctionsMatchingStatusWithHttpInfo(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMatchesStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchingStatusWithHttpInfo(functionIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Get function-matching status for an explicit set of functions
     * @param functionIds Source function IDs whose matches to fetch.
     */
    public getFunctionsMatchingStatus(functionIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<GetMatchesStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionsMatchingStatus(functionIds, observableOptions);
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

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName_1WithHttpInfo(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionName_1WithHttpInfo(functionId, historyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName_1(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: any; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.revertFunctionName_1(functionId, historyId, observableOptions);
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
     * @param [excludeBinaryId] A binary ID to exclude from the results
     */
    public searchBinariesWithHttpInfo(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinarySearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinariesWithHttpInfo(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, observableOptions);
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
     * @param [excludeBinaryId] A binary ID to exclude from the results
     */
    public searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinarySearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinaries(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, observableOptions);
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



