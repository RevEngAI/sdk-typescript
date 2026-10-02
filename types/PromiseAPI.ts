import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { APIError } from '../models/APIError';
import { AcceptTypeSuggestionsInputBody } from '../models/AcceptTypeSuggestionsInputBody';
import { AcceptTypeSuggestionsOutputBody } from '../models/AcceptTypeSuggestionsOutputBody';
import { AcceptedType } from '../models/AcceptedType';
import { ActivityBody } from '../models/ActivityBody';
import { AddCalleeInputBody } from '../models/AddCalleeInputBody';
import { AddCollectionBinariesInputBody } from '../models/AddCollectionBinariesInputBody';
import { AddIssuerDomainInputBody } from '../models/AddIssuerDomainInputBody';
import { AddOwnerInputBody } from '../models/AddOwnerInputBody';
import { AddTeamMemberInputBody } from '../models/AddTeamMemberInputBody';
import { AddUserStringInputBody } from '../models/AddUserStringInputBody';
import { AddUserStringToFunctionInputBody } from '../models/AddUserStringToFunctionInputBody';
import { AdditionalDetailsStatusResponse } from '../models/AdditionalDetailsStatusResponse';
import { AgentWorkflowUsageOutputBody } from '../models/AgentWorkflowUsageOutputBody';
import { AiDecompilationRating } from '../models/AiDecompilationRating';
import { AnalyseCapabilitiesBody } from '../models/AnalyseCapabilitiesBody';
import { AnalysisAccessBody } from '../models/AnalysisAccessBody';
import { AnalysisAccessInfo } from '../models/AnalysisAccessInfo';
import { AnalysisBasicInfoOutputBody } from '../models/AnalysisBasicInfoOutputBody';
import { AnalysisBulkAddTagsRequest } from '../models/AnalysisBulkAddTagsRequest';
import { AnalysisBulkAddTagsResponse } from '../models/AnalysisBulkAddTagsResponse';
import { AnalysisBulkAddTagsResponseItem } from '../models/AnalysisBulkAddTagsResponseItem';
import { AnalysisCapabilitiesOutputBody } from '../models/AnalysisCapabilitiesOutputBody';
import { AnalysisCapabilityBody } from '../models/AnalysisCapabilityBody';
import { AnalysisConfig } from '../models/AnalysisConfig';
import { AnalysisConfigSnapshot } from '../models/AnalysisConfigSnapshot';
import { AnalysisCreateRequest } from '../models/AnalysisCreateRequest';
import { AnalysisCreateResponse } from '../models/AnalysisCreateResponse';
import { AnalysisDataTypesGroup } from '../models/AnalysisDataTypesGroup';
import { AnalysisDataTypesOutputBody } from '../models/AnalysisDataTypesOutputBody';
import { AnalysisDetailOutputBody } from '../models/AnalysisDetailOutputBody';
import { AnalysisDetailResponse } from '../models/AnalysisDetailResponse';
import { AnalysisFunctionEntry } from '../models/AnalysisFunctionEntry';
import { AnalysisFunctionMapping } from '../models/AnalysisFunctionMapping';
import { AnalysisFunctions } from '../models/AnalysisFunctions';
import { AnalysisFunctionsList } from '../models/AnalysisFunctionsList';
import { AnalysisLogEntry } from '../models/AnalysisLogEntry';
import { AnalysisLogMessage } from '../models/AnalysisLogMessage';
import { AnalysisLogs } from '../models/AnalysisLogs';
import { AnalysisRecord } from '../models/AnalysisRecord';
import { AnalysisRecordBody } from '../models/AnalysisRecordBody';
import { AnalysisReport } from '../models/AnalysisReport';
import { AnalysisRequirement } from '../models/AnalysisRequirement';
import { AnalysisScope } from '../models/AnalysisScope';
import { AnalysisStringFunction } from '../models/AnalysisStringFunction';
import { AnalysisStringInput } from '../models/AnalysisStringInput';
import { AnalysisStringItem } from '../models/AnalysisStringItem';
import { AnalysisStringsResponse } from '../models/AnalysisStringsResponse';
import { AnalysisStringsStatusResponse } from '../models/AnalysisStringsStatusResponse';
import { AnalysisTagBody } from '../models/AnalysisTagBody';
import { AnalysisTags } from '../models/AnalysisTags';
import { AnalysisTagsOutputBody } from '../models/AnalysisTagsOutputBody';
import { AnalysisUpdateRequest } from '../models/AnalysisUpdateRequest';
import { AnalysisUpdateTagsRequest } from '../models/AnalysisUpdateTagsRequest';
import { AnalysisUpdateTagsResponse } from '../models/AnalysisUpdateTagsResponse';
import { AnalysisXrefOutputBody } from '../models/AnalysisXrefOutputBody';
import { ApiCall } from '../models/ApiCall';
import { ApiCombinationEvidence } from '../models/ApiCombinationEvidence';
import { ApiKeyBody } from '../models/ApiKeyBody';
import { AppApiRestV2AgentSchemaCapability } from '../models/AppApiRestV2AgentSchemaCapability';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { AppApiRestV2CollectionsEnumsOrderBy } from '../models/AppApiRestV2CollectionsEnumsOrderBy';
import { AppApiRestV2FunctionsResponsesFunction } from '../models/AppApiRestV2FunctionsResponsesFunction';
import { AppApiRestV2FunctionsTypesFunction } from '../models/AppApiRestV2FunctionsTypesFunction';
import { AppApiRestV2InfoTypesCapability } from '../models/AppApiRestV2InfoTypesCapability';
import { ArchiveContentEntry } from '../models/ArchiveContentEntry';
import { ArrayDataType } from '../models/ArrayDataType';
import { ArrayDefinition } from '../models/ArrayDefinition';
import { Artifact } from '../models/Artifact';
import { AttemptFailedEvent } from '../models/AttemptFailedEvent';
import { AttemptStartedEvent } from '../models/AttemptStartedEvent';
import { AutoRunAgents } from '../models/AutoRunAgents';
import { AutoRunAgentsBody } from '../models/AutoRunAgentsBody';
import { AutoUnstripStatusOutputBody } from '../models/AutoUnstripStatusOutputBody';
import { BaseDataType } from '../models/BaseDataType';
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
import { BaseResponseFunctionSearchResponse } from '../models/BaseResponseFunctionSearchResponse';
import { BaseResponseFunctionStringsResponse } from '../models/BaseResponseFunctionStringsResponse';
import { BaseResponseFunctionsDetailResponse } from '../models/BaseResponseFunctionsDetailResponse';
import { BaseResponseGetPublicUserResponse } from '../models/BaseResponseGetPublicUserResponse';
import { BaseResponseListCalleesCallerFunctionsResponse } from '../models/BaseResponseListCalleesCallerFunctionsResponse';
import { BaseResponseListCollectionResults } from '../models/BaseResponseListCollectionResults';
import { BaseResponseListCommentResponse } from '../models/BaseResponseListCommentResponse';
import { BaseResponseListDieMatch } from '../models/BaseResponseListDieMatch';
import { BaseResponseListFunctionNameHistory } from '../models/BaseResponseListFunctionNameHistory';
import { BaseResponseListUserActivityResponse } from '../models/BaseResponseListUserActivityResponse';
import { BaseResponseLogs } from '../models/BaseResponseLogs';
import { BaseResponseModelsResponse } from '../models/BaseResponseModelsResponse';
import { BaseResponseParams } from '../models/BaseResponseParams';
import { BaseResponseProtocolsAgentResponse } from '../models/BaseResponseProtocolsAgentResponse';
import { BaseResponseQueuedWorkflowTaskResponse } from '../models/BaseResponseQueuedWorkflowTaskResponse';
import { BaseResponseRecent } from '../models/BaseResponseRecent';
import { BaseResponseRemediationAgentResponse } from '../models/BaseResponseRemediationAgentResponse';
import { BaseResponseReportAnalysisResponse } from '../models/BaseResponseReportAnalysisResponse';
import { BaseResponseSecretsAgentResponse } from '../models/BaseResponseSecretsAgentResponse';
import { BaseResponseStatus } from '../models/BaseResponseStatus';
import { BaseResponseStr } from '../models/BaseResponseStr';
import { BaseResponseTagSearchResponse } from '../models/BaseResponseTagSearchResponse';
import { BaseResponseTaskResponse } from '../models/BaseResponseTaskResponse';
import { BaseResponseTaskStatusResponse } from '../models/BaseResponseTaskStatusResponse';
import { BaseResponseTriageReportResponse } from '../models/BaseResponseTriageReportResponse';
import { BaseResponseUnionGetAiDecompilationRatingResponseNoneType } from '../models/BaseResponseUnionGetAiDecompilationRatingResponseNoneType';
import { BaseResponseUploadResponse } from '../models/BaseResponseUploadResponse';
import { BaseResponseXrefResponse } from '../models/BaseResponseXrefResponse';
import { Basic } from '../models/Basic';
import { BatchBinaryMatchResult } from '../models/BatchBinaryMatchResult';
import { BatchFunctionSignatureEntry } from '../models/BatchFunctionSignatureEntry';
import { BatchMatchingOutputBody } from '../models/BatchMatchingOutputBody';
import { BatchRenameInputBody } from '../models/BatchRenameInputBody';
import { BatchRenameItem } from '../models/BatchRenameItem';
import { BatchRenameOutputBody } from '../models/BatchRenameOutputBody';
import { BinariesRelatedStatusResponse } from '../models/BinariesRelatedStatusResponse';
import { BinariesTaskStatus } from '../models/BinariesTaskStatus';
import { Binary } from '../models/Binary';
import { BinaryAdditionalDetailsDataResponse } from '../models/BinaryAdditionalDetailsDataResponse';
import { BinaryAdditionalResponse } from '../models/BinaryAdditionalResponse';
import { BinaryConfig } from '../models/BinaryConfig';
import { BinaryDetailsResponse } from '../models/BinaryDetailsResponse';
import { BinaryExportMetadata } from '../models/BinaryExportMetadata';
import { BinaryExportResult } from '../models/BinaryExportResult';
import { BinaryExternalsBody } from '../models/BinaryExternalsBody';
import { BinaryExternalsResponse } from '../models/BinaryExternalsResponse';
import { BinarySearchResponse } from '../models/BinarySearchResponse';
import { BinarySearchResult } from '../models/BinarySearchResult';
import { BinarySearchResultBody } from '../models/BinarySearchResultBody';
import { BinaryTaskStatus } from '../models/BinaryTaskStatus';
import { BitfieldDataType } from '../models/BitfieldDataType';
import { BulkAddTagsInputBody } from '../models/BulkAddTagsInputBody';
import { BulkAddTagsOutputBody } from '../models/BulkAddTagsOutputBody';
import { BulkAddTagsResultBody } from '../models/BulkAddTagsResultBody';
import { BulkCreateUserResult } from '../models/BulkCreateUserResult';
import { BulkCreateUsersOutputBody } from '../models/BulkCreateUsersOutputBody';
import { BulkDeleteAnalysesInputBody } from '../models/BulkDeleteAnalysesInputBody';
import { BulkDeleteAnalysesRequest } from '../models/BulkDeleteAnalysesRequest';
import { BytesConstant } from '../models/BytesConstant';
import { CallChain } from '../models/CallChain';
import { CallChainEvidence } from '../models/CallChainEvidence';
import { CallEdge } from '../models/CallEdge';
import { CallEdgesOutputBody } from '../models/CallEdgesOutputBody';
import { CalleeFunctionInfo } from '../models/CalleeFunctionInfo';
import { CalleesCallerFunctionsResponse } from '../models/CalleesCallerFunctionsResponse';
import { CallerFunctionInfo } from '../models/CallerFunctionInfo';
import { CanonicalName } from '../models/CanonicalName';
import { CanonicalizeNamesInputBody } from '../models/CanonicalizeNamesInputBody';
import { CanonicalizeNamesOutputBody } from '../models/CanonicalizeNamesOutputBody';
import { Capabilities } from '../models/Capabilities';
import { CapabilitiesAgentResponse } from '../models/CapabilitiesAgentResponse';
import { CapabilitiesOutputBody } from '../models/CapabilitiesOutputBody';
import { CapabilitiesResult } from '../models/CapabilitiesResult';
import { Capability } from '../models/Capability';
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
import { Config } from '../models/Config';
import { ConfigResponse } from '../models/ConfigResponse';
import { ConfirmToolInputBody } from '../models/ConfirmToolInputBody';
import { Connection } from '../models/Connection';
import { ConsoleOutputEntry } from '../models/ConsoleOutputEntry';
import { Context } from '../models/Context';
import { Conversation } from '../models/Conversation';
import { ConversationContext } from '../models/ConversationContext';
import { ConversationWithEvents } from '../models/ConversationWithEvents';
import { CopyFunctionSignaturesInputBody } from '../models/CopyFunctionSignaturesInputBody';
import { CopyFunctionSignaturesOutputBody } from '../models/CopyFunctionSignaturesOutputBody';
import { CopySignatureItem } from '../models/CopySignatureItem';
import { CreateAIDecompOutputBody } from '../models/CreateAIDecompOutputBody';
import { CreateAnalysisDataTypesInputBody } from '../models/CreateAnalysisDataTypesInputBody';
import { CreateArrayDataType } from '../models/CreateArrayDataType';
import { CreateBaseDataType } from '../models/CreateBaseDataType';
import { CreateBitfieldDataType } from '../models/CreateBitfieldDataType';
import { CreateCheckoutSessionInputBody } from '../models/CreateCheckoutSessionInputBody';
import { CreateCollectionInputBody } from '../models/CreateCollectionInputBody';
import { CreateCollectionOutputBody } from '../models/CreateCollectionOutputBody';
import { CreateConversationRequest } from '../models/CreateConversationRequest';
import { CreateDataTypeEntry } from '../models/CreateDataTypeEntry';
import { CreateEnumDataType } from '../models/CreateEnumDataType';
import { CreateFunctionDataType } from '../models/CreateFunctionDataType';
import { CreateGroupInputBody } from '../models/CreateGroupInputBody';
import { CreateIdentityInputBody } from '../models/CreateIdentityInputBody';
import { CreateIssuerInputBody } from '../models/CreateIssuerInputBody';
import { CreateMetadata } from '../models/CreateMetadata';
import { CreateOrganisationInputBody } from '../models/CreateOrganisationInputBody';
import { CreatePointerDataType } from '../models/CreatePointerDataType';
import { CreatePortalSessionInputBody } from '../models/CreatePortalSessionInputBody';
import { CreateRequest } from '../models/CreateRequest';
import { CreateResult } from '../models/CreateResult';
import { CreateSecretStoreInputBody } from '../models/CreateSecretStoreInputBody';
import { CreateStructDataType } from '../models/CreateStructDataType';
import { CreateTeamInputBody } from '../models/CreateTeamInputBody';
import { CreateTypedefDataType } from '../models/CreateTypedefDataType';
import { CreateURLRequest } from '../models/CreateURLRequest';
import { CreateURLResponse } from '../models/CreateURLResponse';
import { CreateUnionDataType } from '../models/CreateUnionDataType';
import { CreateUnknownDataType } from '../models/CreateUnknownDataType';
import { CreateUserInputBody } from '../models/CreateUserInputBody';
import { Created } from '../models/Created';
import { CryptoCall } from '../models/CryptoCall';
import { CryptoDirectMatch } from '../models/CryptoDirectMatch';
import { CryptoExplainMetadata } from '../models/CryptoExplainMetadata';
import { CryptoExplainResult } from '../models/CryptoExplainResult';
import { CryptoExplainedFunction } from '../models/CryptoExplainedFunction';
import { CryptoFinding } from '../models/CryptoFinding';
import { CryptoScanMetadata } from '../models/CryptoScanMetadata';
import { CryptoScanResult } from '../models/CryptoScanResult';
import { CryptoVerification } from '../models/CryptoVerification';
import { DailyAnalysesCountOutputBody } from '../models/DailyAnalysesCountOutputBody';
import { DailyCountBody } from '../models/DailyCountBody';
import { DataTypeEntry } from '../models/DataTypeEntry';
import { DataTypeEnumValueEntry } from '../models/DataTypeEnumValueEntry';
import { DataTypeFunctionEntry } from '../models/DataTypeFunctionEntry';
import { DataTypeFunctionParameterEntry } from '../models/DataTypeFunctionParameterEntry';
import { DataTypeMemberEntry } from '../models/DataTypeMemberEntry';
import { DataTypeVersion } from '../models/DataTypeVersion';
import { DecompFailedEvent } from '../models/DecompFailedEvent';
import { DecompFinishedEvent } from '../models/DecompFinishedEvent';
import { DecompilationCommentContext } from '../models/DecompilationCommentContext';
import { DecompilationData } from '../models/DecompilationData';
import { DecompilerSummary } from '../models/DecompilerSummary';
import { DecompilerSummaryEvidence } from '../models/DecompilerSummaryEvidence';
import { DieMatch } from '../models/DieMatch';
import { DisassemblyOutputBody } from '../models/DisassemblyOutputBody';
import { Display } from '../models/Display';
import { DnsQuery } from '../models/DnsQuery';
import { DrakvufFileMetadata } from '../models/DrakvufFileMetadata';
import { DynamicExecutionMetadata } from '../models/DynamicExecutionMetadata';
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
import { Endianness } from '../models/Endianness';
import { EntrypointModel } from '../models/EntrypointModel';
import { EnumDataType } from '../models/EnumDataType';
import { EnumDefinition } from '../models/EnumDefinition';
import { ErrorBody } from '../models/ErrorBody';
import { ErrorModel } from '../models/ErrorModel';
import { Event } from '../models/Event';
import { EventAttemptFailed } from '../models/EventAttemptFailed';
import { EventAttemptStarted } from '../models/EventAttemptStarted';
import { EventCONTEXTCOMPACTED } from '../models/EventCONTEXTCOMPACTED';
import { EventDecompFailed } from '../models/EventDecompFailed';
import { EventDecompFinished } from '../models/EventDecompFinished';
import { EventNamesFinished } from '../models/EventNamesFinished';
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
import { EventTypesApplied } from '../models/EventTypesApplied';
import { EventTypesSuggested } from '../models/EventTypesSuggested';
import { EventWarning } from '../models/EventWarning';
import { EvidenceEffect } from '../models/EvidenceEffect';
import { EvidenceStrength } from '../models/EvidenceStrength';
import { Example } from '../models/Example';
import { ExecutionCall } from '../models/ExecutionCall';
import { ExecutionDirectMatch } from '../models/ExecutionDirectMatch';
import { ExecutionExplainMetadata } from '../models/ExecutionExplainMetadata';
import { ExecutionExplainResult } from '../models/ExecutionExplainResult';
import { ExecutionExplainedFunction } from '../models/ExecutionExplainedFunction';
import { ExecutionFinding } from '../models/ExecutionFinding';
import { ExecutionScanMetadata } from '../models/ExecutionScanMetadata';
import { ExecutionScanResult } from '../models/ExecutionScanResult';
import { ExecutionVerification } from '../models/ExecutionVerification';
import { ExportModel } from '../models/ExportModel';
import { ExternalResponse } from '../models/ExternalResponse';
import { ExtractedBinary } from '../models/ExtractedBinary';
import { ExtractedURL } from '../models/ExtractedURL';
import { ExtractionFailure } from '../models/ExtractionFailure';
import { FeedbackOutputBody } from '../models/FeedbackOutputBody';
import { FileActivityEntry } from '../models/FileActivityEntry';
import { FileFormat } from '../models/FileFormat';
import { FileHashes } from '../models/FileHashes';
import { FileMetadata } from '../models/FileMetadata';
import { FilesystemAnalyseMetadata } from '../models/FilesystemAnalyseMetadata';
import { FilesystemAnalyseResult } from '../models/FilesystemAnalyseResult';
import { FilesystemCall } from '../models/FilesystemCall';
import { FilesystemDirectMatch } from '../models/FilesystemDirectMatch';
import { FilesystemExplainedFunction } from '../models/FilesystemExplainedFunction';
import { FilesystemFinding } from '../models/FilesystemFinding';
import { FilesystemScanMetadata } from '../models/FilesystemScanMetadata';
import { FilesystemScanResult } from '../models/FilesystemScanResult';
import { FilesystemVerification } from '../models/FilesystemVerification';
import { Filters } from '../models/Filters';
import { Finding } from '../models/Finding';
import { FindingEvidenceInner } from '../models/FindingEvidenceInner';
import { FormFile } from '../models/FormFile';
import { FunctionBlockDestinationResponse } from '../models/FunctionBlockDestinationResponse';
import { FunctionBlockResponse } from '../models/FunctionBlockResponse';
import { FunctionBlocksResponse } from '../models/FunctionBlocksResponse';
import { FunctionBoundary } from '../models/FunctionBoundary';
import { FunctionCallEdges } from '../models/FunctionCallEdges';
import { FunctionCapabilityResponse } from '../models/FunctionCapabilityResponse';
import { FunctionDataType } from '../models/FunctionDataType';
import { FunctionDetailsOutputBody } from '../models/FunctionDetailsOutputBody';
import { FunctionListItem } from '../models/FunctionListItem';
import { FunctionLocalVariableResponse } from '../models/FunctionLocalVariableResponse';
import { FunctionMapping } from '../models/FunctionMapping';
import { FunctionMatch } from '../models/FunctionMatch';
import { FunctionNameHistory } from '../models/FunctionNameHistory';
import { FunctionParamResponse } from '../models/FunctionParamResponse';
import { FunctionRename } from '../models/FunctionRename';
import { FunctionRenameMap } from '../models/FunctionRenameMap';
import { FunctionSearchResponse } from '../models/FunctionSearchResponse';
import { FunctionSearchResult } from '../models/FunctionSearchResult';
import { FunctionSearchResultBody } from '../models/FunctionSearchResultBody';
import { FunctionSignatureBody } from '../models/FunctionSignatureBody';
import { FunctionSignatureEntry } from '../models/FunctionSignatureEntry';
import { FunctionSignatureVersion } from '../models/FunctionSignatureVersion';
import { FunctionSimilarity } from '../models/FunctionSimilarity';
import { FunctionSimilarityEvidence } from '../models/FunctionSimilarityEvidence';
import { FunctionSourceType } from '../models/FunctionSourceType';
import { FunctionString } from '../models/FunctionString';
import { FunctionStringItem } from '../models/FunctionStringItem';
import { FunctionStringsResponse } from '../models/FunctionStringsResponse';
import { FunctionTypeDefinition } from '../models/FunctionTypeDefinition';
import { FunctionsDetailResponse } from '../models/FunctionsDetailResponse';
import { FunctionsListRename } from '../models/FunctionsListRename';
import { FunctionsProgressOutputBody } from '../models/FunctionsProgressOutputBody';
import { GeneratePDFOutputBody } from '../models/GeneratePDFOutputBody';
import { GetAPIKeysOutputBody } from '../models/GetAPIKeysOutputBody';
import { GetAdditionalDetailsOutputBody } from '../models/GetAdditionalDetailsOutputBody';
import { GetAdditionalDetailsStatusOutputBody } from '../models/GetAdditionalDetailsStatusOutputBody';
import { GetAiDecompilationRatingResponse } from '../models/GetAiDecompilationRatingResponse';
import { GetAnalysisLogsOutputBody } from '../models/GetAnalysisLogsOutputBody';
import { GetAnalysisStringsStatusOutputBody } from '../models/GetAnalysisStringsStatusOutputBody';
import { GetBinaryExternalsOutputBody } from '../models/GetBinaryExternalsOutputBody';
import { GetCollectionOutputBody } from '../models/GetCollectionOutputBody';
import { GetConfigOutputBody } from '../models/GetConfigOutputBody';
import { GetDataTypeHistoryBody } from '../models/GetDataTypeHistoryBody';
import { GetDieInfoOutputBody } from '../models/GetDieInfoOutputBody';
import { GetFunctionMapsOutputBody } from '../models/GetFunctionMapsOutputBody';
import { GetFunctionSignatureHistoryBody } from '../models/GetFunctionSignatureHistoryBody';
import { GetMatchesOutputBody } from '../models/GetMatchesOutputBody';
import { GetMatchesStatusOutputBody } from '../models/GetMatchesStatusOutputBody';
import { GetModelsOutputBody } from '../models/GetModelsOutputBody';
import { GetProductsOutputBody } from '../models/GetProductsOutputBody';
import { GetPublicUserOutputBody } from '../models/GetPublicUserOutputBody';
import { GetPublicUserResponse } from '../models/GetPublicUserResponse';
import { GetRelatedBinariesOutputBody } from '../models/GetRelatedBinariesOutputBody';
import { GetRelatedStatusOutputBody } from '../models/GetRelatedStatusOutputBody';
import { GetSubscriptionOutputBody } from '../models/GetSubscriptionOutputBody';
import { GetTokensResponse } from '../models/GetTokensResponse';
import { GetUserActivityOutputBody } from '../models/GetUserActivityOutputBody';
import { HardcodedSecretEvidence } from '../models/HardcodedSecretEvidence';
import { HistoryActor } from '../models/HistoryActor';
import { HistoryEntry } from '../models/HistoryEntry';
import { HttpRequest } from '../models/HttpRequest';
import { IOC } from '../models/IOC';
import { ISA } from '../models/ISA';
import { IconModel } from '../models/IconModel';
import { ImportDynamicExecutionFileOutputBody } from '../models/ImportDynamicExecutionFileOutputBody';
import { ImportModel } from '../models/ImportModel';
import { ImportedApi } from '../models/ImportedApi';
import { ImportedApiCall } from '../models/ImportedApiCall';
import { ImportedApiCallEvidence } from '../models/ImportedApiCallEvidence';
import { ImportedFunctionCallerEntry } from '../models/ImportedFunctionCallerEntry';
import { ImportedFunctionDetailOutputBody } from '../models/ImportedFunctionDetailOutputBody';
import { ImportedFunctionEntry } from '../models/ImportedFunctionEntry';
import { IndirectCallSite } from '../models/IndirectCallSite';
import { IndirectCallSitesOutputBody } from '../models/IndirectCallSitesOutputBody';
import { InlineComment } from '../models/InlineComment';
import { InputBody } from '../models/InputBody';
import { InsertAnalysisLogRequest } from '../models/InsertAnalysisLogRequest';
import { InviteUserInputBody } from '../models/InviteUserInputBody';
import { IssuerAllowedDomain } from '../models/IssuerAllowedDomain';
import { KnownConstantEvidence } from '../models/KnownConstantEvidence';
import { LineAttributionsData } from '../models/LineAttributionsData';
import { ListAnalysesOutputBody } from '../models/ListAnalysesOutputBody';
import { ListAnalysisDataTypesOutputBody } from '../models/ListAnalysisDataTypesOutputBody';
import { ListAnalysisFunctionsOutputBody } from '../models/ListAnalysisFunctionsOutputBody';
import { ListAnalysisStringsOutputBody } from '../models/ListAnalysisStringsOutputBody';
import { ListArchiveContentsOutputBody } from '../models/ListArchiveContentsOutputBody';
import { ListCollectionResults } from '../models/ListCollectionResults';
import { ListCollectionsOutputBody } from '../models/ListCollectionsOutputBody';
import { ListDataTypeFunctionsBody } from '../models/ListDataTypeFunctionsBody';
import { ListExampleAnalysesOutputBody } from '../models/ListExampleAnalysesOutputBody';
import { ListFunctionSignaturesOutputBody } from '../models/ListFunctionSignaturesOutputBody';
import { ListFunctionStringsOutputBody } from '../models/ListFunctionStringsOutputBody';
import { ListImportedFunctionsOutputBody } from '../models/ListImportedFunctionsOutputBody';
import { ListSecretStoreOutputBody } from '../models/ListSecretStoreOutputBody';
import { ListTeamsOutputBody } from '../models/ListTeamsOutputBody';
import { ListUsersOutputBody } from '../models/ListUsersOutputBody';
import { LocationOutputBody } from '../models/LocationOutputBody';
import { Logs } from '../models/Logs';
import { LookupAnalysisByBinaryIDOutputBody } from '../models/LookupAnalysisByBinaryIDOutputBody';
import { MITRETechnique } from '../models/MITRETechnique';
import { MatchFilters } from '../models/MatchFilters';
import { MatchedFunction } from '../models/MatchedFunction';
import { MemdumpEntry } from '../models/MemdumpEntry';
import { MessageBody } from '../models/MessageBody';
import { Meta } from '../models/Meta';
import { MetaModel } from '../models/MetaModel';
import { Metadata } from '../models/Metadata';
import { ModelInterpretation } from '../models/ModelInterpretation';
import { ModelInterpretationEvidence } from '../models/ModelInterpretationEvidence';
import { ModelName } from '../models/ModelName';
import { ModelsResponse } from '../models/ModelsResponse';
import { ModuleLoadEntry } from '../models/ModuleLoadEntry';
import { MutexEntry } from '../models/MutexEntry';
import { NameConfidence } from '../models/NameConfidence';
import { NameSourceType } from '../models/NameSourceType';
import { NamesFinishedEvent } from '../models/NamesFinishedEvent';
import { NetworkActivity } from '../models/NetworkActivity';
import { NetworkingCall } from '../models/NetworkingCall';
import { NetworkingDirectMatch } from '../models/NetworkingDirectMatch';
import { NetworkingExplainMetadata } from '../models/NetworkingExplainMetadata';
import { NetworkingExplainResult } from '../models/NetworkingExplainResult';
import { NetworkingExplainedFunction } from '../models/NetworkingExplainedFunction';
import { NetworkingFinding } from '../models/NetworkingFinding';
import { NetworkingScanMetadata } from '../models/NetworkingScanMetadata';
import { NetworkingScanResult } from '../models/NetworkingScanResult';
import { NetworkingVerification } from '../models/NetworkingVerification';
import { OIDCCallbackInputBody } from '../models/OIDCCallbackInputBody';
import { OperandXref } from '../models/OperandXref';
import { OperationBinaryExportMetadataBinaryExportResult } from '../models/OperationBinaryExportMetadataBinaryExportResult';
import { OperationCreateMetadataCreateResult } from '../models/OperationCreateMetadataCreateResult';
import { OperationCryptoExplainMetadataCryptoExplainResult } from '../models/OperationCryptoExplainMetadataCryptoExplainResult';
import { OperationCryptoScanMetadataCryptoScanResult } from '../models/OperationCryptoScanMetadataCryptoScanResult';
import { OperationDynamicExecutionMetadataDynamicExecutionResult } from '../models/OperationDynamicExecutionMetadataDynamicExecutionResult';
import { OperationExecutionExplainMetadataExecutionExplainResult } from '../models/OperationExecutionExplainMetadataExecutionExplainResult';
import { OperationExecutionScanMetadataExecutionScanResult } from '../models/OperationExecutionScanMetadataExecutionScanResult';
import { OperationFilesystemAnalyseMetadataFilesystemAnalyseResult } from '../models/OperationFilesystemAnalyseMetadataFilesystemAnalyseResult';
import { OperationFilesystemScanMetadataFilesystemScanResult } from '../models/OperationFilesystemScanMetadataFilesystemScanResult';
import { OperationMetadataCapabilitiesResult } from '../models/OperationMetadataCapabilitiesResult';
import { OperationMetadataRemediationResult } from '../models/OperationMetadataRemediationResult';
import { OperationMetadataReportResult } from '../models/OperationMetadataReportResult';
import { OperationMetadataThreatReportResult } from '../models/OperationMetadataThreatReportResult';
import { OperationMetadataTriageResult } from '../models/OperationMetadataTriageResult';
import { OperationNetworkingExplainMetadataNetworkingExplainResult } from '../models/OperationNetworkingExplainMetadataNetworkingExplainResult';
import { OperationNetworkingScanMetadataNetworkingScanResult } from '../models/OperationNetworkingScanMetadataNetworkingScanResult';
import { OperationSecurityScanMetadataSecurityScanResult } from '../models/OperationSecurityScanMetadataSecurityScanResult';
import { OperationVirusTotalScanMetadataVirusTotalScanResult } from '../models/OperationVirusTotalScanMetadataVirusTotalScanResult';
import { OperationWorkflowProgressResultBody } from '../models/OperationWorkflowProgressResultBody';
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
import { PointerDataType } from '../models/PointerDataType';
import { PointerDefinition } from '../models/PointerDefinition';
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
import { ProtocolsAgentResponse } from '../models/ProtocolsAgentResponse';
import { PutAnalysisStringsRequest } from '../models/PutAnalysisStringsRequest';
import { QueuedWorkflowTaskResponse } from '../models/QueuedWorkflowTaskResponse';
import { RatingOutputBody } from '../models/RatingOutputBody';
import { ReAnalysisForm } from '../models/ReAnalysisForm';
import { Recent } from '../models/Recent';
import { ReferencedConstant } from '../models/ReferencedConstant';
import { ReferencedConstantEvidence } from '../models/ReferencedConstantEvidence';
import { RefreshBody } from '../models/RefreshBody';
import { RegenerateOutputBody } from '../models/RegenerateOutputBody';
import { RegisterUserInputBody } from '../models/RegisterUserInputBody';
import { RegistryOperation } from '../models/RegistryOperation';
import { RelatedBinary } from '../models/RelatedBinary';
import { RelativeBinaryResponse } from '../models/RelativeBinaryResponse';
import { RemediationAgentResponse } from '../models/RemediationAgentResponse';
import { RemediationResult } from '../models/RemediationResult';
import { RemoveCollectionBinariesInputBody } from '../models/RemoveCollectionBinariesInputBody';
import { RenameAppliedEvent } from '../models/RenameAppliedEvent';
import { RenameInputBody } from '../models/RenameInputBody';
import { RenameOutputBody } from '../models/RenameOutputBody';
import { RenameUnnamedFunctionsResult } from '../models/RenameUnnamedFunctionsResult';
import { RenderedToken } from '../models/RenderedToken';
import { ReportAnalysisBody } from '../models/ReportAnalysisBody';
import { ReportAnalysisResponse } from '../models/ReportAnalysisResponse';
import { ReportEvent } from '../models/ReportEvent';
import { ReportInfo } from '../models/ReportInfo';
import { ReportOptions } from '../models/ReportOptions';
import { ReportReachabilityStatus } from '../models/ReportReachabilityStatus';
import { ReportResult } from '../models/ReportResult';
import { RequestedConfigBody } from '../models/RequestedConfigBody';
import { ResendVerificationEmailInputBody } from '../models/ResendVerificationEmailInputBody';
import { ResolvedEntity } from '../models/ResolvedEntity';
import { ResultBody } from '../models/ResultBody';
import { RevokeBody } from '../models/RevokeBody';
import { RuleKind } from '../models/RuleKind';
import { RunDynamicExecutionInputBody } from '../models/RunDynamicExecutionInputBody';
import { SSOProvider } from '../models/SSOProvider';
import { SSOProvidersOutputBody } from '../models/SSOProvidersOutputBody';
import { SandboxConfig } from '../models/SandboxConfig';
import { SandboxOptions } from '../models/SandboxOptions';
import { SandboxStartMethod } from '../models/SandboxStartMethod';
import { SandboxTimeout } from '../models/SandboxTimeout';
import { ScheduledTaskEntry } from '../models/ScheduledTaskEntry';
import { ScrapeThirdPartyConfig } from '../models/ScrapeThirdPartyConfig';
import { ScreenshotEntry } from '../models/ScreenshotEntry';
import { ScreenshotsIndex } from '../models/ScreenshotsIndex';
import { SearchBinariesOutputBody } from '../models/SearchBinariesOutputBody';
import { SearchFunctionsOutputBody } from '../models/SearchFunctionsOutputBody';
import { SearchTagsOutputBody } from '../models/SearchTagsOutputBody';
import { SecretBody } from '../models/SecretBody';
import { SecretsAgentResponse } from '../models/SecretsAgentResponse';
import { SectionModel } from '../models/SectionModel';
import { SecurityFinding } from '../models/SecurityFinding';
import { SecurityModel } from '../models/SecurityModel';
import { SecurityScanMetadata } from '../models/SecurityScanMetadata';
import { SecurityScanResult } from '../models/SecurityScanResult';
import { SegmentInfo } from '../models/SegmentInfo';
import { SendMessageRequest } from '../models/SendMessageRequest';
import { ServiceEntry } from '../models/ServiceEntry';
import { SessionOutputBody } from '../models/SessionOutputBody';
import { SignatureParameterEntry } from '../models/SignatureParameterEntry';
import { SignatureParameterInput } from '../models/SignatureParameterInput';
import { SignatureStorageEntry } from '../models/SignatureStorageEntry';
import { SignatureStorageInput } from '../models/SignatureStorageInput';
import { SingleCodeCertificateModel } from '../models/SingleCodeCertificateModel';
import { SingleCodeSignatureModel } from '../models/SingleCodeSignatureModel';
import { SinglePDBEntryModel } from '../models/SinglePDBEntryModel';
import { SingleSectionModel } from '../models/SingleSectionModel';
import { SoftwareTypeCountsBody } from '../models/SoftwareTypeCountsBody';
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
import { Status } from '../models/Status';
import { StatusBody } from '../models/StatusBody';
import { StatusInput } from '../models/StatusInput';
import { StatusOutput } from '../models/StatusOutput';
import { StatusResponse } from '../models/StatusResponse';
import { StreamAiDecompilation200ResponseInner } from '../models/StreamAiDecompilation200ResponseInner';
import { StreamEvents200ResponseInner } from '../models/StreamEvents200ResponseInner';
import { StringFunctions } from '../models/StringFunctions';
import { StringMatch } from '../models/StringMatch';
import { StringMatchEvidence } from '../models/StringMatchEvidence';
import { StringSource } from '../models/StringSource';
import { StructDataType } from '../models/StructDataType';
import { StructDefinition } from '../models/StructDefinition';
import { Subject } from '../models/Subject';
import { SubjectAnyOf } from '../models/SubjectAnyOf';
import { SubjectAnyOf1 } from '../models/SubjectAnyOf1';
import { SubjectAnyOf2 } from '../models/SubjectAnyOf2';
import { SubjectAnyOf3 } from '../models/SubjectAnyOf3';
import { SubmitFeedbackBody } from '../models/SubmitFeedbackBody';
import { SubmitFeedbackInputBody } from '../models/SubmitFeedbackInputBody';
import { SubmitFeedbackOutputBody } from '../models/SubmitFeedbackOutputBody';
import { SubmitUserFeedbackRequest } from '../models/SubmitUserFeedbackRequest';
import { SuggestedHole } from '../models/SuggestedHole';
import { SuggestedMemberView } from '../models/SuggestedMemberView';
import { SuggestedTypeView } from '../models/SuggestedTypeView';
import { SummaryData } from '../models/SummaryData';
import { Symbols } from '../models/Symbols';
import { Tag } from '../models/Tag';
import { TagItem } from '../models/TagItem';
import { TagResponse } from '../models/TagResponse';
import { TagSearchResponse } from '../models/TagSearchResponse';
import { TagSearchResult } from '../models/TagSearchResult';
import { TagSearchResultBody } from '../models/TagSearchResultBody';
import { TaskResponse } from '../models/TaskResponse';
import { TaskStatus } from '../models/TaskStatus';
import { TaskStatusResponse } from '../models/TaskStatusResponse';
import { TcpCarvedFile } from '../models/TcpCarvedFile';
import { Team } from '../models/Team';
import { TeamMember } from '../models/TeamMember';
import { Technique } from '../models/Technique';
import { ThreatReportResult } from '../models/ThreatReportResult';
import { TimestampModel } from '../models/TimestampModel';
import { Token } from '../models/Token';
import { TokenInputBody } from '../models/TokenInputBody';
import { TokenResponse } from '../models/TokenResponse';
import { TokenisedData } from '../models/TokenisedData';
import { TriageFunction } from '../models/TriageFunction';
import { TriageFunctionResponse } from '../models/TriageFunctionResponse';
import { TriageReportResponse } from '../models/TriageReportResponse';
import { TriageResult } from '../models/TriageResult';
import { TriggerCryptoScanInputBody } from '../models/TriggerCryptoScanInputBody';
import { TriggerDynamicExecutionInputBody } from '../models/TriggerDynamicExecutionInputBody';
import { TriggerExecutionExplainInputBody } from '../models/TriggerExecutionExplainInputBody';
import { TriggerExecutionScanInputBody } from '../models/TriggerExecutionScanInputBody';
import { TriggerFilesystemAnalyseInputBody } from '../models/TriggerFilesystemAnalyseInputBody';
import { TriggerFilesystemScanInputBody } from '../models/TriggerFilesystemScanInputBody';
import { TriggerNetworkingExplainInputBody } from '../models/TriggerNetworkingExplainInputBody';
import { TriggerNetworkingScanInputBody } from '../models/TriggerNetworkingScanInputBody';
import { TriggerRenameUnnamedFunctionsInputBody } from '../models/TriggerRenameUnnamedFunctionsInputBody';
import { TriggerSecurityScanInputBody } from '../models/TriggerSecurityScanInputBody';
import { Ttp } from '../models/Ttp';
import { TypeSuggestionsData } from '../models/TypeSuggestionsData';
import { TypedefDataType } from '../models/TypedefDataType';
import { TypedefDefinition } from '../models/TypedefDefinition';
import { TypesAppliedEvent } from '../models/TypesAppliedEvent';
import { TypesSuggestedEvent } from '../models/TypesSuggestedEvent';
import { UnionDataType } from '../models/UnionDataType';
import { UnionDefinition } from '../models/UnionDefinition';
import { UnknownDataType } from '../models/UnknownDataType';
import { UpdateAnalysisDataTypesInputBody } from '../models/UpdateAnalysisDataTypesInputBody';
import { UpdateAnalysisInputBody } from '../models/UpdateAnalysisInputBody';
import { UpdateArrayDataType } from '../models/UpdateArrayDataType';
import { UpdateBaseDataType } from '../models/UpdateBaseDataType';
import { UpdateBitfieldDataType } from '../models/UpdateBitfieldDataType';
import { UpdateDataTypeEntry } from '../models/UpdateDataTypeEntry';
import { UpdateEnumDataType } from '../models/UpdateEnumDataType';
import { UpdateFunctionDataType } from '../models/UpdateFunctionDataType';
import { UpdateFunctionSignatureInputBody } from '../models/UpdateFunctionSignatureInputBody';
import { UpdateIssuerInputBody } from '../models/UpdateIssuerInputBody';
import { UpdateOrganisationInputBody } from '../models/UpdateOrganisationInputBody';
import { UpdatePasswordInputBody } from '../models/UpdatePasswordInputBody';
import { UpdatePointerDataType } from '../models/UpdatePointerDataType';
import { UpdateProfileInputBody } from '../models/UpdateProfileInputBody';
import { UpdateSecretStoreInputBody } from '../models/UpdateSecretStoreInputBody';
import { UpdateStructDataType } from '../models/UpdateStructDataType';
import { UpdateTagsInputBody } from '../models/UpdateTagsInputBody';
import { UpdateTeamInputBody } from '../models/UpdateTeamInputBody';
import { UpdateTypedefDataType } from '../models/UpdateTypedefDataType';
import { UpdateUnionDataType } from '../models/UpdateUnionDataType';
import { UpdateUnknownDataType } from '../models/UpdateUnknownDataType';
import { UpdateUserCreditsInputBody } from '../models/UpdateUserCreditsInputBody';
import { UpdateUserInputBody } from '../models/UpdateUserInputBody';
import { UpdateUserPasswordInputBody } from '../models/UpdateUserPasswordInputBody';
import { UpgradeAnalysisModelOutputBody } from '../models/UpgradeAnalysisModelOutputBody';
import { UploadFileType } from '../models/UploadFileType';
import { UploadOutputBody } from '../models/UploadOutputBody';
import { UploadResponse } from '../models/UploadResponse';
import { UpsertAiDecomplationRatingRequest } from '../models/UpsertAiDecomplationRatingRequest';
import { UpsertOverridesData } from '../models/UpsertOverridesData';
import { UpsertOverridesInputBody } from '../models/UpsertOverridesInputBody';
import { UpsertRatingInputBody } from '../models/UpsertRatingInputBody';
import { User } from '../models/User';
import { UserActivityResponse } from '../models/UserActivityResponse';
import { UserCredits } from '../models/UserCredits';
import { UserIdentity } from '../models/UserIdentity';
import { UserProfile } from '../models/UserProfile';
import { VirusTotalScanMetadata } from '../models/VirusTotalScanMetadata';
import { VirusTotalScanResult } from '../models/VirusTotalScanResult';
import { WarningEvent } from '../models/WarningEvent';
import { WorkflowDayBody } from '../models/WorkflowDayBody';
import { WorkflowProgress } from '../models/WorkflowProgress';
import { Workspace } from '../models/Workspace';
import { XrefFromBody } from '../models/XrefFromBody';
import { XrefFromResponse } from '../models/XrefFromResponse';
import { XrefIntoBody } from '../models/XrefIntoBody';
import { XrefResponse } from '../models/XrefResponse';
import { XrefSegmentBody } from '../models/XrefSegmentBody';
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
     * Check the status of a protocols discovery workflow
     * @param analysisId
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a protocols discovery workflow
     * @param analysisId
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param analysisId
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param analysisId
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(analysisId, observableOptions);
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
     * Check the status of a secrets discovery workflow
     * @param analysisId
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of a secrets discovery workflow
     * @param analysisId
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<TaskStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(analysisId, observableOptions);
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
     * Queues a protocols discovery workflow process
     * @param analysisId
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a protocols discovery workflow process
     * @param analysisId
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a remediation analysis workflow process
     * @param analysisId
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a remediation analysis workflow process
     * @param analysisId
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(analysisId, observableOptions);
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
     * Queues a secrets discovery workflow process
     * @param analysisId
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queues a secrets discovery workflow process
     * @param analysisId
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(analysisId, observableOptions);
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
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param analysisId
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseProtocolsAgentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param analysisId
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseProtocolsAgentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param analysisId
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseRemediationAgentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param analysisId
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseRemediationAgentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(analysisId, observableOptions);
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
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param analysisId
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseSecretsAgentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param analysisId
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(analysisId: number, _options?: PromiseConfigurationOptions): Promise<BaseResponseSecretsAgentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(analysisId, observableOptions);
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

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     */
    public v3CancelRenameUnnamedFunctionsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CancelRenameUnnamedFunctionsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     */
    public v3CancelRenameUnnamedFunctions(analysisId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CancelRenameUnnamedFunctions(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3CancelSecurityScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CancelSecurityScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3CancelSecurityScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CancelSecurityScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     */
    public v3GetBinaryAgentFeedbackWithHttpInfo(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', _options?: PromiseConfigurationOptions): Promise<HttpInfo<FeedbackOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryAgentFeedbackWithHttpInfo(analysisId, agent, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     */
    public v3GetBinaryAgentFeedback(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', _options?: PromiseConfigurationOptions): Promise<FeedbackOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryAgentFeedback(analysisId, agent, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param analysisId Analysis ID
     */
    public v3GetCapabilitiesOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataCapabilitiesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCapabilitiesOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param analysisId Analysis ID
     */
    public v3GetCapabilitiesOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataCapabilitiesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCapabilitiesOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param functionId Function ID
     */
    public v3GetCryptoExplainOperationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCryptoExplainOperationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param functionId Function ID
     */
    public v3GetCryptoExplainOperation(functionId: number, _options?: PromiseConfigurationOptions): Promise<OperationCryptoExplainMetadataCryptoExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCryptoExplainOperation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetCryptoScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCryptoScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetCryptoScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationCryptoScanMetadataCryptoScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetCryptoScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param functionId Function ID
     */
    public v3GetExecutionExplainOperationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetExecutionExplainOperationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param functionId Function ID
     */
    public v3GetExecutionExplainOperation(functionId: number, _options?: PromiseConfigurationOptions): Promise<OperationExecutionExplainMetadataExecutionExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetExecutionExplainOperation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetExecutionScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetExecutionScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetExecutionScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationExecutionScanMetadataExecutionScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetExecutionScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param functionId Function ID
     */
    public v3GetFilesystemAnalyseOperationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFilesystemAnalyseOperationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param functionId Function ID
     */
    public v3GetFilesystemAnalyseOperation(functionId: number, _options?: PromiseConfigurationOptions): Promise<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFilesystemAnalyseOperation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetFilesystemScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFilesystemScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetFilesystemScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationFilesystemScanMetadataFilesystemScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFilesystemScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param functionId Function ID
     */
    public v3GetNetworkingExplainOperationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetNetworkingExplainOperationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param functionId Function ID
     */
    public v3GetNetworkingExplainOperation(functionId: number, _options?: PromiseConfigurationOptions): Promise<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetNetworkingExplainOperation(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetNetworkingScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetNetworkingScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetNetworkingScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationNetworkingScanMetadataNetworkingScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetNetworkingScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param analysisId Analysis ID
     */
    public v3GetProtocolsOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetProtocolsOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param analysisId Analysis ID
     */
    public v3GetProtocolsOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetProtocolsOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param analysisId Analysis ID
     */
    public v3GetRemediationOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataRemediationResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRemediationOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param analysisId Analysis ID
     */
    public v3GetRemediationOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataRemediationResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRemediationOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsResultWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RenameUnnamedFunctionsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRenameUnnamedFunctionsResultWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsResult(analysisId: number, _options?: PromiseConfigurationOptions): Promise<RenameUnnamedFunctionsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRenameUnnamedFunctionsResult(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsStatusWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StatusBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRenameUnnamedFunctionsStatusWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsStatus(analysisId: number, _options?: PromiseConfigurationOptions): Promise<StatusBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetRenameUnnamedFunctionsStatus(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param analysisId Analysis ID
     */
    public v3GetReportAnalysisOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataThreatReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetReportAnalysisOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param analysisId Analysis ID
     */
    public v3GetReportAnalysisOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataThreatReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetReportAnalysisOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecretsOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetSecretsOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecretsOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetSecretsOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecurityScanOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetSecurityScanOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecurityScanOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationSecurityScanMetadataSecurityScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetSecurityScanOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param analysisId Analysis ID
     */
    public v3GetTriageOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataTriageResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetTriageOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param analysisId Analysis ID
     */
    public v3GetTriageOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataTriageResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetTriageOperation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param analysisId Analysis ID
     */
    public v3RunCapabilitiesWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataCapabilitiesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCapabilitiesWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param analysisId Analysis ID
     */
    public v3RunCapabilities(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataCapabilitiesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCapabilities(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param functionId Function ID
     */
    public v3RunCryptoExplainWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCryptoExplainWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param functionId Function ID
     */
    public v3RunCryptoExplain(functionId: number, _options?: PromiseConfigurationOptions): Promise<OperationCryptoExplainMetadataCryptoExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCryptoExplain(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param analysisId Analysis ID
     * @param triggerCryptoScanInputBody
     */
    public v3RunCryptoScanWithHttpInfo(analysisId: number, triggerCryptoScanInputBody: TriggerCryptoScanInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCryptoScanWithHttpInfo(analysisId, triggerCryptoScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param analysisId Analysis ID
     * @param triggerCryptoScanInputBody
     */
    public v3RunCryptoScan(analysisId: number, triggerCryptoScanInputBody: TriggerCryptoScanInputBody, _options?: PromiseConfigurationOptions): Promise<OperationCryptoScanMetadataCryptoScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunCryptoScan(analysisId, triggerCryptoScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param functionId Function ID
     * @param triggerExecutionExplainInputBody
     */
    public v3RunExecutionExplainWithHttpInfo(functionId: number, triggerExecutionExplainInputBody: TriggerExecutionExplainInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunExecutionExplainWithHttpInfo(functionId, triggerExecutionExplainInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param functionId Function ID
     * @param triggerExecutionExplainInputBody
     */
    public v3RunExecutionExplain(functionId: number, triggerExecutionExplainInputBody: TriggerExecutionExplainInputBody, _options?: PromiseConfigurationOptions): Promise<OperationExecutionExplainMetadataExecutionExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunExecutionExplain(functionId, triggerExecutionExplainInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param analysisId Analysis ID
     * @param triggerExecutionScanInputBody
     */
    public v3RunExecutionScanWithHttpInfo(analysisId: number, triggerExecutionScanInputBody: TriggerExecutionScanInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunExecutionScanWithHttpInfo(analysisId, triggerExecutionScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param analysisId Analysis ID
     * @param triggerExecutionScanInputBody
     */
    public v3RunExecutionScan(analysisId: number, triggerExecutionScanInputBody: TriggerExecutionScanInputBody, _options?: PromiseConfigurationOptions): Promise<OperationExecutionScanMetadataExecutionScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunExecutionScan(analysisId, triggerExecutionScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param functionId Function ID
     * @param triggerFilesystemAnalyseInputBody
     */
    public v3RunFilesystemAnalyseWithHttpInfo(functionId: number, triggerFilesystemAnalyseInputBody: TriggerFilesystemAnalyseInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunFilesystemAnalyseWithHttpInfo(functionId, triggerFilesystemAnalyseInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param functionId Function ID
     * @param triggerFilesystemAnalyseInputBody
     */
    public v3RunFilesystemAnalyse(functionId: number, triggerFilesystemAnalyseInputBody: TriggerFilesystemAnalyseInputBody, _options?: PromiseConfigurationOptions): Promise<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunFilesystemAnalyse(functionId, triggerFilesystemAnalyseInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param analysisId Analysis ID
     * @param triggerFilesystemScanInputBody
     */
    public v3RunFilesystemScanWithHttpInfo(analysisId: number, triggerFilesystemScanInputBody: TriggerFilesystemScanInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunFilesystemScanWithHttpInfo(analysisId, triggerFilesystemScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param analysisId Analysis ID
     * @param triggerFilesystemScanInputBody
     */
    public v3RunFilesystemScan(analysisId: number, triggerFilesystemScanInputBody: TriggerFilesystemScanInputBody, _options?: PromiseConfigurationOptions): Promise<OperationFilesystemScanMetadataFilesystemScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunFilesystemScan(analysisId, triggerFilesystemScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param functionId Function ID
     * @param triggerNetworkingExplainInputBody
     */
    public v3RunNetworkingExplainWithHttpInfo(functionId: number, triggerNetworkingExplainInputBody: TriggerNetworkingExplainInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunNetworkingExplainWithHttpInfo(functionId, triggerNetworkingExplainInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param functionId Function ID
     * @param triggerNetworkingExplainInputBody
     */
    public v3RunNetworkingExplain(functionId: number, triggerNetworkingExplainInputBody: TriggerNetworkingExplainInputBody, _options?: PromiseConfigurationOptions): Promise<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunNetworkingExplain(functionId, triggerNetworkingExplainInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param analysisId Analysis ID
     * @param triggerNetworkingScanInputBody
     */
    public v3RunNetworkingScanWithHttpInfo(analysisId: number, triggerNetworkingScanInputBody: TriggerNetworkingScanInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunNetworkingScanWithHttpInfo(analysisId, triggerNetworkingScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param analysisId Analysis ID
     * @param triggerNetworkingScanInputBody
     */
    public v3RunNetworkingScan(analysisId: number, triggerNetworkingScanInputBody: TriggerNetworkingScanInputBody, _options?: PromiseConfigurationOptions): Promise<OperationNetworkingScanMetadataNetworkingScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunNetworkingScan(analysisId, triggerNetworkingScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param analysisId Analysis ID
     */
    public v3RunProtocolsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunProtocolsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param analysisId Analysis ID
     */
    public v3RunProtocols(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunProtocols(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param analysisId Analysis ID
     */
    public v3RunRemediationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataRemediationResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunRemediationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param analysisId Analysis ID
     */
    public v3RunRemediation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataRemediationResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunRemediation(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param analysisId Analysis ID
     */
    public v3RunReportAnalysisWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataThreatReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunReportAnalysisWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param analysisId Analysis ID
     */
    public v3RunReportAnalysis(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataThreatReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunReportAnalysis(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param analysisId Analysis ID
     */
    public v3RunSecretsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunSecretsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param analysisId Analysis ID
     */
    public v3RunSecrets(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataReportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunSecrets(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param analysisId Analysis ID
     * @param triggerSecurityScanInputBody
     */
    public v3RunSecurityScanWithHttpInfo(analysisId: number, triggerSecurityScanInputBody: TriggerSecurityScanInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunSecurityScanWithHttpInfo(analysisId, triggerSecurityScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param analysisId Analysis ID
     * @param triggerSecurityScanInputBody
     */
    public v3RunSecurityScan(analysisId: number, triggerSecurityScanInputBody: TriggerSecurityScanInputBody, _options?: PromiseConfigurationOptions): Promise<OperationSecurityScanMetadataSecurityScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunSecurityScan(analysisId, triggerSecurityScanInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param analysisId Analysis ID
     */
    public v3RunTriageWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationMetadataTriageResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunTriageWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param analysisId Analysis ID
     */
    public v3RunTriage(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationMetadataTriageResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunTriage(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     * @param triggerRenameUnnamedFunctionsInputBody
     */
    public v3TriggerRenameUnnamedFunctionsWithHttpInfo(analysisId: number, triggerRenameUnnamedFunctionsInputBody: TriggerRenameUnnamedFunctionsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StatusBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TriggerRenameUnnamedFunctionsWithHttpInfo(analysisId, triggerRenameUnnamedFunctionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     * @param triggerRenameUnnamedFunctionsInputBody
     */
    public v3TriggerRenameUnnamedFunctions(analysisId: number, triggerRenameUnnamedFunctionsInputBody: TriggerRenameUnnamedFunctionsInputBody, _options?: PromiseConfigurationOptions): Promise<StatusBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TriggerRenameUnnamedFunctions(analysisId, triggerRenameUnnamedFunctionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     * @param submitFeedbackInputBody
     */
    public v3UpsertBinaryAgentFeedbackWithHttpInfo(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', submitFeedbackInputBody: SubmitFeedbackInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertBinaryAgentFeedbackWithHttpInfo(analysisId, agent, submitFeedbackInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     * @param submitFeedbackInputBody
     */
    public v3UpsertBinaryAgentFeedback(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', submitFeedbackInputBody: SubmitFeedbackInputBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertBinaryAgentFeedback(analysisId, agent, submitFeedbackInputBody, observableOptions);
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

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param bulkAddTagsInputBody
     */
    public v3BatchAddAnalysisTagsWithHttpInfo(bulkAddTagsInputBody: BulkAddTagsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BulkAddTagsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3BatchAddAnalysisTagsWithHttpInfo(bulkAddTagsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param bulkAddTagsInputBody
     */
    public v3BatchAddAnalysisTags(bulkAddTagsInputBody: BulkAddTagsInputBody, _options?: PromiseConfigurationOptions): Promise<BulkAddTagsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3BatchAddAnalysisTags(bulkAddTagsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param bulkDeleteAnalysesInputBody
     */
    public v3BatchDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3BatchDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param bulkDeleteAnalysesInputBody
     */
    public v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody, observableOptions);
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
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param analysisId Analysis ID
     */
    public v3DeleteAnalysisWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DeleteAnalysisWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param analysisId Analysis ID
     */
    public v3DeleteAnalysis(analysisId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DeleteAnalysis(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param analysisId Analysis ID
     * @param [taskId] Task ID returned by queueing the export
     */
    public v3DownloadBinaryExportWithHttpInfo(analysisId: number, taskId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DownloadBinaryExportWithHttpInfo(analysisId, taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param analysisId Analysis ID
     * @param [taskId] Task ID returned by queueing the export
     */
    public v3DownloadBinaryExport(analysisId: number, taskId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DownloadBinaryExport(analysisId, taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisDetailOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysis(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisDetailOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysis(analysisId, observableOptions);
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
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFunctionsProgressWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionsProgressOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisFunctionsProgressWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFunctionsProgress(analysisId: number, _options?: PromiseConfigurationOptions): Promise<FunctionsProgressOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisFunctionsProgress(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisLogsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAnalysisLogsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisLogsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisLogs(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GetAnalysisLogsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisLogs(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisOperationWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationCreateMetadataCreateResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisOperationWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisOperation(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationCreateMetadataCreateResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisOperation(analysisId, observableOptions);
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
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param taskId Task ID returned by queueing the export
     */
    public v3GetBinaryExportOperationWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryExportOperationWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param taskId Task ID returned by queueing the export
     */
    public v3GetBinaryExportOperation(taskId: string, _options?: PromiseConfigurationOptions): Promise<OperationBinaryExportMetadataBinaryExportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryExportOperation(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param [searchTerm]
     * @param [analysisScope] Leave empty to search your own, your team\&#39;s and all public analyses
     * @param [status]
     * @param [modelName]
     * @param [usernames]
     * @param [sha256Hash]
     * @param [binaryId] Restrict to analyses of this binary. A binary can carry more than one analysis; they are returned newest first under the default sort
     * @param [platform] Restrict to binaries running on one of these operating-system platforms. Matches the uploader\&#39;s override when they set one, the detected platform otherwise; a binary with neither is never matched. Leave empty for no filter
     * @param [architecture] Restrict to binaries built for one of these instruction-set architectures. Resolved the same way as platform. Leave empty for no filter
     * @param [pageSize]
     * @param [nextPageToken] Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination).
     * @param [orderBy]
     * @param [order]
     */
    public v3ListAnalysesWithHttpInfo(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, binaryId?: number, platform?: Array<'windows' | 'linux' | 'android'>, architecture?: Array<'x86_64' | 'x86_32' | 'arm_64'>, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysesWithHttpInfo(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, binaryId, platform, architecture, pageSize, nextPageToken, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param [searchTerm]
     * @param [analysisScope] Leave empty to search your own, your team\&#39;s and all public analyses
     * @param [status]
     * @param [modelName]
     * @param [usernames]
     * @param [sha256Hash]
     * @param [binaryId] Restrict to analyses of this binary. A binary can carry more than one analysis; they are returned newest first under the default sort
     * @param [platform] Restrict to binaries running on one of these operating-system platforms. Matches the uploader\&#39;s override when they set one, the detected platform otherwise; a binary with neither is never matched. Leave empty for no filter
     * @param [architecture] Restrict to binaries built for one of these instruction-set architectures. Resolved the same way as platform. Leave empty for no filter
     * @param [pageSize]
     * @param [nextPageToken] Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination).
     * @param [orderBy]
     * @param [order]
     */
    public v3ListAnalyses(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, binaryId?: number, platform?: Array<'windows' | 'linux' | 'android'>, architecture?: Array<'x86_64' | 'x86_32' | 'arm_64'>, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListAnalysesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalyses(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, binaryId, platform, architecture, pageSize, nextPageToken, orderBy, order, observableOptions);
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

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param binaryId Binary ID
     */
    public v3LookupAnalysisByBinaryIdWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LookupAnalysisByBinaryIDOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3LookupAnalysisByBinaryIdWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param binaryId Binary ID
     */
    public v3LookupAnalysisByBinaryId(binaryId: number, _options?: PromiseConfigurationOptions): Promise<LookupAnalysisByBinaryIDOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3LookupAnalysisByBinaryId(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param analysisId Analysis ID
     */
    public v3QueueBinaryExportWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3QueueBinaryExportWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param analysisId Analysis ID
     */
    public v3QueueBinaryExport(analysisId: number, _options?: PromiseConfigurationOptions): Promise<OperationBinaryExportMetadataBinaryExportResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3QueueBinaryExport(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param [partialName] Partial or full tag name to search for, at least 3 characters
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchTagsWithHttpInfo(partialName?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SearchTagsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchTagsWithHttpInfo(partialName, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param [partialName] Partial or full tag name to search for, at least 3 characters
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchTags(partialName?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<SearchTagsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchTags(partialName, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param analysisId Analysis ID
     * @param updateAnalysisInputBody
     */
    public v3UpdateAnalysisWithHttpInfo(analysisId: number, updateAnalysisInputBody: UpdateAnalysisInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisDetailOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysisWithHttpInfo(analysisId, updateAnalysisInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param analysisId Analysis ID
     * @param updateAnalysisInputBody
     */
    public v3UpdateAnalysis(analysisId: number, updateAnalysisInputBody: UpdateAnalysisInputBody, _options?: PromiseConfigurationOptions): Promise<AnalysisDetailOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysis(analysisId, updateAnalysisInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param analysisId Analysis ID
     * @param updateTagsInputBody
     */
    public v3UpdateAnalysisTagsWithHttpInfo(analysisId: number, updateTagsInputBody: UpdateTagsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisTagsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysisTagsWithHttpInfo(analysisId, updateTagsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param analysisId Analysis ID
     * @param updateTagsInputBody
     */
    public v3UpdateAnalysisTags(analysisId: number, updateTagsInputBody: UpdateTagsInputBody, _options?: PromiseConfigurationOptions): Promise<AnalysisTagsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysisTags(analysisId, updateTagsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param analysisId Analysis ID
     */
    public v3UpgradeAnalysisModelWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpgradeAnalysisModelOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpgradeAnalysisModelWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param analysisId Analysis ID
     */
    public v3UpgradeAnalysisModel(analysisId: number, _options?: PromiseConfigurationOptions): Promise<UpgradeAnalysisModelOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpgradeAnalysisModel(analysisId, observableOptions);
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
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param analysisId Analysis ID
     * @param vaddr Virtual address to match against xrefs
     */
    public v3GetAnalysisXrefWithHttpInfo(analysisId: number, vaddr: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisXrefOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisXrefWithHttpInfo(analysisId, vaddr, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param analysisId Analysis ID
     * @param vaddr Virtual address to match against xrefs
     */
    public v3GetAnalysisXref(analysisId: number, vaddr: number, _options?: PromiseConfigurationOptions): Promise<AnalysisXrefOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisXref(analysisId, vaddr, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisCapabilitiesWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisCapabilitiesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisCapabilitiesWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisCapabilities(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisCapabilitiesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisCapabilities(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisTagsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisTagsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisTagsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisTags(analysisId: number, _options?: PromiseConfigurationOptions): Promise<AnalysisTagsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisTags(analysisId, observableOptions);
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

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param userId User ID
     */
    public v3GetUserWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetPublicUserOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetUserWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param userId User ID
     */
    public v3GetUser(userId: number, _options?: PromiseConfigurationOptions): Promise<GetPublicUserOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetUser(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     */
    public v3GetUserActivityWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetUserActivityOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetUserActivityWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     */
    public v3GetUserActivity(_options?: PromiseConfigurationOptions): Promise<GetUserActivityOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetUserActivity(observableOptions);
        return result.toPromise();
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param submitFeedbackBody
     */
    public v3SubmitUserFeedbackWithHttpInfo(submitFeedbackBody: SubmitFeedbackBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmitFeedbackOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SubmitUserFeedbackWithHttpInfo(submitFeedbackBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param submitFeedbackBody
     */
    public v3SubmitUserFeedback(submitFeedbackBody: SubmitFeedbackBody, _options?: PromiseConfigurationOptions): Promise<SubmitFeedbackOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SubmitUserFeedback(submitFeedbackBody, observableOptions);
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

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param binaryId Binary ID
     */
    public v3DownloadBinaryZippedWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DownloadBinaryZippedWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param binaryId Binary ID
     */
    public v3DownloadBinaryZipped(binaryId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DownloadBinaryZipped(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryDieInfoWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetDieInfoOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryDieInfoWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryDieInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetDieInfoOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryDieInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryExternalsWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBinaryExternalsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryExternalsWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryExternals(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetBinaryExternalsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryExternals(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetRelatedBinariesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryRelatedWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelated(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetRelatedBinariesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryRelated(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedStatusWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetRelatedStatusOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryRelatedStatusWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedStatus(binaryId: number, _options?: PromiseConfigurationOptions): Promise<GetRelatedStatusOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetBinaryRelatedStatus(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for binaries visible to the caller. At least one of partial_name, partial_sha256, tags, or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search binaries
     * @param [partialName] Partial or full binary name to search for
     * @param [partialSha256] Partial or full SHA-256 hash to search for
     * @param [tags] Restrict results to binaries carrying at least one of these tags
     * @param [modelName] Restrict results to binaries analysed with this model
     * @param [userFilesOnly] Restrict results to files the caller uploaded themself
     * @param [excludeBinaryId] A binary ID to exclude from the results
     * @param [userIds] Restrict results to binaries owned by one of these user IDs
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchBinariesWithHttpInfo(partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SearchBinariesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchBinariesWithHttpInfo(partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for binaries visible to the caller. At least one of partial_name, partial_sha256, tags, or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search binaries
     * @param [partialName] Partial or full binary name to search for
     * @param [partialSha256] Partial or full SHA-256 hash to search for
     * @param [tags] Restrict results to binaries carrying at least one of these tags
     * @param [modelName] Restrict results to binaries analysed with this model
     * @param [userFilesOnly] Restrict results to files the caller uploaded themself
     * @param [excludeBinaryId] A binary ID to exclude from the results
     * @param [userIds] Restrict results to binaries owned by one of these user IDs
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchBinaries(partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<SearchBinariesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchBinaries(partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param file The file\\\&#39;s raw bytes.
     * @param uploadFileType The kind of file being uploaded.
     * @param [forceOverwrite] Re-upload and overwrite even if a file with this hash already exists.
     */
    public v3UploadFileWithHttpInfo(file: HttpFile, uploadFileType: string, forceOverwrite?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UploadFileWithHttpInfo(file, uploadFileType, forceOverwrite, observableOptions);
        return result.toPromise();
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param file The file\\\&#39;s raw bytes.
     * @param uploadFileType The kind of file being uploaded.
     * @param [forceOverwrite] Re-upload and overwrite even if a file with this hash already exists.
     */
    public v3UploadFile(file: HttpFile, uploadFileType: string, forceOverwrite?: boolean, _options?: PromiseConfigurationOptions): Promise<UploadOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UploadFile(file, uploadFileType, forceOverwrite, observableOptions);
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
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param collectionId
     * @param addCollectionBinariesInputBody
     */
    public v3AddCollectionBinariesWithHttpInfo(collectionId: number, addCollectionBinariesInputBody: AddCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AddCollectionBinariesWithHttpInfo(collectionId, addCollectionBinariesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param collectionId
     * @param addCollectionBinariesInputBody
     */
    public v3AddCollectionBinaries(collectionId: number, addCollectionBinariesInputBody: AddCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AddCollectionBinaries(collectionId, addCollectionBinariesInputBody, observableOptions);
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
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete a collection.
     * @param collectionId
     */
    public v3DeleteCollectionWithHttpInfo(collectionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3DeleteCollectionWithHttpInfo(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
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
     * Lists collections accessible to the authenticated user. Supports search by collection name, contained binary name/SHA-256, tags, owner, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param [searchTerm] Partial or full collection name to search for
     * @param [binaryName] Only return Collections containing a Binary whose name contains this
     * @param [binarySha256] Only return Collections containing a Binary whose SHA-256 hash contains this
     * @param [tags] Only return Collections carrying at least one of these Tags
     * @param [userIds] Restrict results to Collections owned by one of these user IDs
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public v3ListCollectionsWithHttpInfo(searchTerm?: string, binaryName?: string, binarySha256?: string, tags?: Array<string>, userIds?: Array<number>, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCollectionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListCollectionsWithHttpInfo(searchTerm, binaryName, binarySha256, tags, userIds, filters, limit, offset, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search by collection name, contained binary name/SHA-256, tags, owner, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param [searchTerm] Partial or full collection name to search for
     * @param [binaryName] Only return Collections containing a Binary whose name contains this
     * @param [binarySha256] Only return Collections containing a Binary whose SHA-256 hash contains this
     * @param [tags] Only return Collections carrying at least one of these Tags
     * @param [userIds] Restrict results to Collections owned by one of these user IDs
     * @param [filters]
     * @param [limit]
     * @param [offset]
     * @param [orderBy]
     * @param [order]
     */
    public v3ListCollections(searchTerm?: string, binaryName?: string, binarySha256?: string, tags?: Array<string>, userIds?: Array<number>, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListCollectionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListCollections(searchTerm, binaryName, binarySha256, tags, userIds, filters, limit, offset, orderBy, order, observableOptions);
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

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param collectionId
     * @param removeCollectionBinariesInputBody
     */
    public v3RemoveCollectionBinariesWithHttpInfo(collectionId: number, removeCollectionBinariesInputBody: RemoveCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RemoveCollectionBinariesWithHttpInfo(collectionId, removeCollectionBinariesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param collectionId
     * @param removeCollectionBinariesInputBody
     */
    public v3RemoveCollectionBinaries(collectionId: number, removeCollectionBinariesInputBody: RemoveCollectionBinariesInputBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RemoveCollectionBinaries(collectionId, removeCollectionBinariesInputBody, observableOptions);
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

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     */
    public v3GetConfigWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetConfigOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetConfigWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     */
    public v3GetConfig(_options?: PromiseConfigurationOptions): Promise<GetConfigOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetConfig(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     */
    public v3GetModelsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetModelsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetModelsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     */
    public v3GetModels(_options?: PromiseConfigurationOptions): Promise<GetModelsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetModels(observableOptions);
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



import { ObservableDataTypesApi } from './ObservableAPI';

import { DataTypesApiRequestFactory, DataTypesApiResponseProcessor} from "../apis/DataTypesApi";
export class PromiseDataTypesApi {
    private api: ObservableDataTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataTypesApiRequestFactory,
        responseProcessor?: DataTypesApiResponseProcessor
    ) {
        this.api = new ObservableDataTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param analysisId Analysis ID
     * @param copyFunctionSignaturesInputBody
     */
    public v3CopyFunctionSignaturesWithHttpInfo(analysisId: number, copyFunctionSignaturesInputBody: CopyFunctionSignaturesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CopyFunctionSignaturesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CopyFunctionSignaturesWithHttpInfo(analysisId, copyFunctionSignaturesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param analysisId Analysis ID
     * @param copyFunctionSignaturesInputBody
     */
    public v3CopyFunctionSignatures(analysisId: number, copyFunctionSignaturesInputBody: CopyFunctionSignaturesInputBody, _options?: PromiseConfigurationOptions): Promise<CopyFunctionSignaturesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CopyFunctionSignatures(analysisId, copyFunctionSignaturesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param analysisId Analysis ID
     * @param createAnalysisDataTypesInputBody
     */
    public v3CreateAnalysisDataTypesWithHttpInfo(analysisId: number, createAnalysisDataTypesInputBody: CreateAnalysisDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CreateAnalysisDataTypesWithHttpInfo(analysisId, createAnalysisDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param analysisId Analysis ID
     * @param createAnalysisDataTypesInputBody
     */
    public v3CreateAnalysisDataTypes(analysisId: number, createAnalysisDataTypesInputBody: CreateAnalysisDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<AnalysisDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3CreateAnalysisDataTypes(analysisId, createAnalysisDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeWithHttpInfo(analysisId: number, dataTypeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataTypeEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisDataTypeWithHttpInfo(analysisId, dataTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataType(analysisId: number, dataTypeId: number, _options?: PromiseConfigurationOptions): Promise<DataTypeEntry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisDataType(analysisId, dataTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeHistoryWithHttpInfo(analysisId: number, dataTypeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetDataTypeHistoryBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisDataTypeHistoryWithHttpInfo(analysisId, dataTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeHistory(analysisId: number, dataTypeId: number, _options?: PromiseConfigurationOptions): Promise<GetDataTypeHistoryBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisDataTypeHistory(analysisId, dataTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param [includeDataTypes] Include the data types the signature names in the response.
     */
    public v3GetFunctionSignatureWithHttpInfo(analysisId: number, functionId: number, includeDataTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionSignatureBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFunctionSignatureWithHttpInfo(analysisId, functionId, includeDataTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param [includeDataTypes] Include the data types the signature names in the response.
     */
    public v3GetFunctionSignature(analysisId: number, functionId: number, includeDataTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<FunctionSignatureBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFunctionSignature(analysisId, functionId, includeDataTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public v3GetFunctionSignatureHistoryWithHttpInfo(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetFunctionSignatureHistoryBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFunctionSignatureHistoryWithHttpInfo(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public v3GetFunctionSignatureHistory(analysisId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<GetFunctionSignatureHistoryBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetFunctionSignatureHistory(analysisId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginated, filterable list of the data types extracted from the binary — structs, unions, enums, typedefs and the rest. Every entry carries its full definition, so paging this list once resolves every `data_type_id` a definition or signature refers to; no follow-up request per id is needed.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List an analysis\'s data types
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset.
     * @param [limit] Page size.
     * @param [kind] Only return types of these kinds. Repeat for more than one; empty means no filter.
     * @param [namespace] Only return types in these namespaces, matched exactly. Omit for no filter; pass an empty value (namespace&#x3D;) for the binary\&#39;s own types, which have no namespace.
     * @param [search] Only return types whose name contains this term. Wildcards in the term are matched literally.
     * @param [sourceType] Only return types from these sources. Empty means no filter.
     * @param [orderBy] Field to order by. name orders by namespace, then name, then kind; size orders by size with types of unknown size last, then by namespace, name and kind.
     * @param [order] Sort direction.
     */
    public v3ListAnalysisDataTypesWithHttpInfo(analysisId: number, offset?: number, limit?: number, kind?: Array<'STRUCT' | 'UNION' | 'ENUM' | 'TYPEDEF' | 'POINTER' | 'ARRAY' | 'FUNCTION_DEFINITION' | 'BITFIELD' | 'BASE' | 'UNKNOWN'>, namespace?: Array<string>, search?: string, sourceType?: Array<'SYSTEM' | 'USER' | 'AUTO_UNSTRIP' | 'AI_DECOMP'>, orderBy?: 'name' | 'size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAnalysisDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisDataTypesWithHttpInfo(analysisId, offset, limit, kind, namespace, search, sourceType, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginated, filterable list of the data types extracted from the binary — structs, unions, enums, typedefs and the rest. Every entry carries its full definition, so paging this list once resolves every `data_type_id` a definition or signature refers to; no follow-up request per id is needed.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List an analysis\'s data types
     * @param analysisId Analysis ID
     * @param [offset] Pagination offset.
     * @param [limit] Page size.
     * @param [kind] Only return types of these kinds. Repeat for more than one; empty means no filter.
     * @param [namespace] Only return types in these namespaces, matched exactly. Omit for no filter; pass an empty value (namespace&#x3D;) for the binary\&#39;s own types, which have no namespace.
     * @param [search] Only return types whose name contains this term. Wildcards in the term are matched literally.
     * @param [sourceType] Only return types from these sources. Empty means no filter.
     * @param [orderBy] Field to order by. name orders by namespace, then name, then kind; size orders by size with types of unknown size last, then by namespace, name and kind.
     * @param [order] Sort direction.
     */
    public v3ListAnalysisDataTypes(analysisId: number, offset?: number, limit?: number, kind?: Array<'STRUCT' | 'UNION' | 'ENUM' | 'TYPEDEF' | 'POINTER' | 'ARRAY' | 'FUNCTION_DEFINITION' | 'BITFIELD' | 'BASE' | 'UNKNOWN'>, namespace?: Array<string>, search?: string, sourceType?: Array<'SYSTEM' | 'USER' | 'AUTO_UNSTRIP' | 'AI_DECOMP'>, orderBy?: 'name' | 'size', order?: 'ASC' | 'DESC', _options?: PromiseConfigurationOptions): Promise<ListAnalysisDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListAnalysisDataTypes(analysisId, offset, limit, kind, namespace, search, sourceType, orderBy, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * @param [pageSize] Page size.
     * @param [afterFunctionId] Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function.
     */
    public v3ListDataTypeFunctionsWithHttpInfo(analysisId: number, dataTypeId: number, pageSize?: number, afterFunctionId?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListDataTypeFunctionsBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListDataTypeFunctionsWithHttpInfo(analysisId, dataTypeId, pageSize, afterFunctionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * @param [pageSize] Page size.
     * @param [afterFunctionId] Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function.
     */
    public v3ListDataTypeFunctions(analysisId: number, dataTypeId: number, pageSize?: number, afterFunctionId?: number, _options?: PromiseConfigurationOptions): Promise<ListDataTypeFunctionsBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListDataTypeFunctions(analysisId, dataTypeId, pageSize, afterFunctionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param functionIds Function IDs to fetch signatures for.
     * @param [includeDataTypes] Include the data types the signatures name in the response.
     */
    public v3ListFunctionSignaturesWithHttpInfo(functionIds: Array<number>, includeDataTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFunctionSignaturesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListFunctionSignaturesWithHttpInfo(functionIds, includeDataTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param functionIds Function IDs to fetch signatures for.
     * @param [includeDataTypes] Include the data types the signatures name in the response.
     */
    public v3ListFunctionSignatures(functionIds: Array<number>, includeDataTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<ListFunctionSignaturesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3ListFunctionSignatures(functionIds, includeDataTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param analysisId Analysis ID
     * @param updateAnalysisDataTypesInputBody
     */
    public v3UpdateAnalysisDataTypesWithHttpInfo(analysisId: number, updateAnalysisDataTypesInputBody: UpdateAnalysisDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalysisDataTypesOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysisDataTypesWithHttpInfo(analysisId, updateAnalysisDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param analysisId Analysis ID
     * @param updateAnalysisDataTypesInputBody
     */
    public v3UpdateAnalysisDataTypes(analysisId: number, updateAnalysisDataTypesInputBody: UpdateAnalysisDataTypesInputBody, _options?: PromiseConfigurationOptions): Promise<AnalysisDataTypesOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateAnalysisDataTypes(analysisId, updateAnalysisDataTypesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateFunctionSignatureInputBody
     */
    public v3UpdateFunctionSignatureWithHttpInfo(analysisId: number, functionId: number, updateFunctionSignatureInputBody: UpdateFunctionSignatureInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionSignatureEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateFunctionSignatureWithHttpInfo(analysisId, functionId, updateFunctionSignatureInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateFunctionSignatureInputBody
     */
    public v3UpdateFunctionSignature(analysisId: number, functionId: number, updateFunctionSignatureInputBody: UpdateFunctionSignatureInputBody, _options?: PromiseConfigurationOptions): Promise<FunctionSignatureEntry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpdateFunctionSignature(analysisId, functionId, updateFunctionSignatureInputBody, observableOptions);
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

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param binaryId Binary ID
     */
    public v3GetVirustotalScanOperationWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetVirustotalScanOperationWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param binaryId Binary ID
     */
    public v3GetVirustotalScanOperation(binaryId: number, _options?: PromiseConfigurationOptions): Promise<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetVirustotalScanOperation(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param binaryId Binary ID
     */
    public v3RunVirustotalScanWithHttpInfo(binaryId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunVirustotalScanWithHttpInfo(binaryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param binaryId Binary ID
     */
    public v3RunVirustotalScan(binaryId: number, _options?: PromiseConfigurationOptions): Promise<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RunVirustotalScan(binaryId, observableOptions);
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
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * @param [typeSuggestions] Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off.
     * @param [applyTypes] Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public createAiDecompilationWithHttpInfo(functionId: number, temperature?: number, typeSuggestions?: boolean, applyTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateAIDecompOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilationWithHttpInfo(functionId, temperature, typeSuggestions, applyTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param functionId Function ID
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * @param [typeSuggestions] Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off.
     * @param [applyTypes] Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public createAiDecompilation(functionId: number, temperature?: number, typeSuggestions?: boolean, applyTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<CreateAIDecompOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAiDecompilation(functionId, temperature, typeSuggestions, applyTypes, observableOptions);
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
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineComments(functionId: number, _options?: PromiseConfigurationOptions): Promise<RegenerateOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationInlineComments(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummaryWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationSummaryWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummary(functionId: number, _options?: PromiseConfigurationOptions): Promise<RegenerateOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAiDecompilationSummary(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilationWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<StreamAiDecompilation200ResponseInner>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAiDecompilationWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilation(functionId: number, _options?: PromiseConfigurationOptions): Promise<Array<StreamAiDecompilation200ResponseInner>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAiDecompilation(functionId, observableOptions);
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

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param functionId Function ID
     * @param acceptTypeSuggestionsInputBody
     */
    public v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, acceptTypeSuggestionsInputBody: AcceptTypeSuggestionsInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AcceptTypeSuggestionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(functionId, acceptTypeSuggestionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param functionId Function ID
     * @param acceptTypeSuggestionsInputBody
     */
    public v3AcceptAiDecompilationTypeSuggestions(functionId: number, acceptTypeSuggestionsInputBody: AcceptTypeSuggestionsInputBody, _options?: PromiseConfigurationOptions): Promise<AcceptTypeSuggestionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AcceptAiDecompilationTypeSuggestions(functionId, acceptTypeSuggestionsInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationLineAttributionsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LineAttributionsData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationLineAttributionsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationLineAttributions(functionId: number, _options?: PromiseConfigurationOptions): Promise<LineAttributionsData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationLineAttributions(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param functionId Function ID
     */
    public v3GetAiDecompilationRatingWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RatingOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationRatingWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param functionId Function ID
     */
    public v3GetAiDecompilationRating(functionId: number, _options?: PromiseConfigurationOptions): Promise<RatingOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationRating(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTokensWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTokensResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTokensWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTokens(functionId: number, _options?: PromiseConfigurationOptions): Promise<GetTokensResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTokens(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TypeSuggestionsData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTypeSuggestionsWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestions(functionId: number, _options?: PromiseConfigurationOptions): Promise<TypeSuggestionsData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTypeSuggestions(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsStatus(functionId: number, _options?: PromiseConfigurationOptions): Promise<WorkflowProgress> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAiDecompilationTypeSuggestionsStatus(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param functionId Function ID
     * @param [applyTypes] Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, applyTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(functionId, applyTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param functionId Function ID
     * @param [applyTypes] Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public v3RegenerateAiDecompilationTypeSuggestions(functionId: number, applyTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<RegenerateOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3RegenerateAiDecompilationTypeSuggestions(functionId, applyTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public v3UpsertAiDecompilationOverridesWithHttpInfo(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpsertOverridesData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertAiDecompilationOverridesWithHttpInfo(functionId, upsertOverridesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public v3UpsertAiDecompilationOverrides(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: PromiseConfigurationOptions): Promise<UpsertOverridesData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertAiDecompilationOverrides(functionId, upsertOverridesInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param functionId Function ID
     * @param upsertRatingInputBody
     */
    public v3UpsertAiDecompilationRatingWithHttpInfo(functionId: number, upsertRatingInputBody: UpsertRatingInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertAiDecompilationRatingWithHttpInfo(functionId, upsertRatingInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param functionId Function ID
     * @param upsertRatingInputBody
     */
    public v3UpsertAiDecompilationRating(functionId: number, upsertRatingInputBody: UpsertRatingInputBody, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UpsertAiDecompilationRating(functionId, upsertRatingInputBody, observableOptions);
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
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks_1WithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DisassemblyOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFunctionBlocks_1WithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
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

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFuncMapsWithHttpInfo(analysisId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetFunctionMapsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisFuncMapsWithHttpInfo(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFuncMaps(analysisId: number, _options?: PromiseConfigurationOptions): Promise<GetFunctionMapsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3GetAnalysisFuncMaps(analysisId, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param [partialName] Partial or full function name to search for
     * @param [modelName] Restrict results to functions analysed with this model
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchFunctionsWithHttpInfo(partialName?: string, modelName?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SearchFunctionsOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchFunctionsWithHttpInfo(partialName, modelName, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param [partialName] Partial or full function name to search for
     * @param [modelName] Restrict results to functions analysed with this model
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchFunctions(partialName?: string, modelName?: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<SearchFunctionsOutputBody> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3SearchFunctions(partialName, modelName, limit, offset, observableOptions);
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
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param batchRenameInputBody
     */
    public batchRenameFunctionsWithHttpInfo(batchRenameInputBody: BatchRenameInputBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchRenameOutputBody>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchRenameFunctionsWithHttpInfo(batchRenameInputBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
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
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
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
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
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
    public revertFunctionName_1WithHttpInfo(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
    public revertFunctionName_1(functionId: number, historyId: number, _options?: PromiseConfigurationOptions): Promise<any> {
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
     * @param [userIds] Restrict the search to binaries owned by these user IDs
     */
    public searchBinariesWithHttpInfo(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseBinarySearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinariesWithHttpInfo(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, observableOptions);
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
     * @param [userIds] Restrict the search to binaries owned by these user IDs
     */
    public searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<BaseResponseBinarySearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchBinaries(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, observableOptions);
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
     * @param [filters] The filters to be used for the search
     * @param [orderBy] The field to sort the order by in the results
     * @param [orderByDirection] The order direction in which to return results
     * @param [userIds] Restrict the search to collections owned by these user IDs
     */
    public searchCollectionsWithHttpInfo(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, userIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCollectionsWithHttpInfo(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, filters, orderBy, orderByDirection, userIds, observableOptions);
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
     * @param [filters] The filters to be used for the search
     * @param [orderBy] The field to sort the order by in the results
     * @param [orderByDirection] The order direction in which to return results
     * @param [userIds] Restrict the search to collections owned by these user IDs
     */
    public searchCollections(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, userIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<BaseResponseCollectionSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCollections(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, filters, orderBy, orderByDirection, userIds, observableOptions);
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



