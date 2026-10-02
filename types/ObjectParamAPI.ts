import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

export interface AgentApiCheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet
     */
    analysisId: number
}

export interface AgentApiCheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet
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

export interface AgentApiCheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet
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

export interface AgentApiCreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost
     */
    analysisId: number
}

export interface AgentApiCreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost
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

export interface AgentApiCreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApicreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost
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

export interface AgentApiGetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet
     */
    analysisId: number
}

export interface AgentApiGetRemediationResultV2AnalysesAnalysisIdAgentRemediationGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetRemediationResultV2AnalysesAnalysisIdAgentRemediationGet
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

export interface AgentApiGetSecretsResultV2AnalysesAnalysisIdAgentSecretsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AgentApigetSecretsResultV2AnalysesAnalysisIdAgentSecretsGet
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

export interface AgentApiV3CancelRenameUnnamedFunctionsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3CancelRenameUnnamedFunctions
     */
    analysisId: number
}

export interface AgentApiV3CancelSecurityScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3CancelSecurityScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetBinaryAgentFeedbackRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetBinaryAgentFeedback
     */
    analysisId: number
    /**
     * Which agent\&#39;s output the feedback is about
     * Defaults to: undefined
     * @type &#39;triage&#39; | &#39;capabilities&#39; | &#39;report-analysis&#39; | &#39;remediation&#39; | &#39;protocols&#39; | &#39;secrets&#39;
     * @memberof AgentApiv3GetBinaryAgentFeedback
     */
    agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets'
}

export interface AgentApiV3GetCapabilitiesOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetCapabilitiesOperation
     */
    analysisId: number
}

export interface AgentApiV3GetCryptoExplainOperationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetCryptoExplainOperation
     */
    functionId: number
}

export interface AgentApiV3GetCryptoScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetCryptoScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetExecutionExplainOperationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetExecutionExplainOperation
     */
    functionId: number
}

export interface AgentApiV3GetExecutionScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetExecutionScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetFilesystemAnalyseOperationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetFilesystemAnalyseOperation
     */
    functionId: number
}

export interface AgentApiV3GetFilesystemScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetFilesystemScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetNetworkingExplainOperationRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetNetworkingExplainOperation
     */
    functionId: number
}

export interface AgentApiV3GetNetworkingScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetNetworkingScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetProtocolsOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetProtocolsOperation
     */
    analysisId: number
}

export interface AgentApiV3GetRemediationOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetRemediationOperation
     */
    analysisId: number
}

export interface AgentApiV3GetRenameUnnamedFunctionsResultRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetRenameUnnamedFunctionsResult
     */
    analysisId: number
}

export interface AgentApiV3GetRenameUnnamedFunctionsStatusRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetRenameUnnamedFunctionsStatus
     */
    analysisId: number
}

export interface AgentApiV3GetReportAnalysisOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetReportAnalysisOperation
     */
    analysisId: number
}

export interface AgentApiV3GetSecretsOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetSecretsOperation
     */
    analysisId: number
}

export interface AgentApiV3GetSecurityScanOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetSecurityScanOperation
     */
    analysisId: number
}

export interface AgentApiV3GetTriageOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3GetTriageOperation
     */
    analysisId: number
}

export interface AgentApiV3RunCapabilitiesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunCapabilities
     */
    analysisId: number
}

export interface AgentApiV3RunCryptoExplainRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunCryptoExplain
     */
    functionId: number
}

export interface AgentApiV3RunCryptoScanRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunCryptoScan
     */
    analysisId: number
    /**
     * 
     * @type TriggerCryptoScanInputBody
     * @memberof AgentApiv3RunCryptoScan
     */
    triggerCryptoScanInputBody: TriggerCryptoScanInputBody
}

export interface AgentApiV3RunExecutionExplainRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunExecutionExplain
     */
    functionId: number
    /**
     * 
     * @type TriggerExecutionExplainInputBody
     * @memberof AgentApiv3RunExecutionExplain
     */
    triggerExecutionExplainInputBody: TriggerExecutionExplainInputBody
}

export interface AgentApiV3RunExecutionScanRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunExecutionScan
     */
    analysisId: number
    /**
     * 
     * @type TriggerExecutionScanInputBody
     * @memberof AgentApiv3RunExecutionScan
     */
    triggerExecutionScanInputBody: TriggerExecutionScanInputBody
}

export interface AgentApiV3RunFilesystemAnalyseRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunFilesystemAnalyse
     */
    functionId: number
    /**
     * 
     * @type TriggerFilesystemAnalyseInputBody
     * @memberof AgentApiv3RunFilesystemAnalyse
     */
    triggerFilesystemAnalyseInputBody: TriggerFilesystemAnalyseInputBody
}

export interface AgentApiV3RunFilesystemScanRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunFilesystemScan
     */
    analysisId: number
    /**
     * 
     * @type TriggerFilesystemScanInputBody
     * @memberof AgentApiv3RunFilesystemScan
     */
    triggerFilesystemScanInputBody: TriggerFilesystemScanInputBody
}

export interface AgentApiV3RunNetworkingExplainRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunNetworkingExplain
     */
    functionId: number
    /**
     * 
     * @type TriggerNetworkingExplainInputBody
     * @memberof AgentApiv3RunNetworkingExplain
     */
    triggerNetworkingExplainInputBody: TriggerNetworkingExplainInputBody
}

export interface AgentApiV3RunNetworkingScanRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunNetworkingScan
     */
    analysisId: number
    /**
     * 
     * @type TriggerNetworkingScanInputBody
     * @memberof AgentApiv3RunNetworkingScan
     */
    triggerNetworkingScanInputBody: TriggerNetworkingScanInputBody
}

export interface AgentApiV3RunProtocolsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunProtocols
     */
    analysisId: number
}

export interface AgentApiV3RunRemediationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunRemediation
     */
    analysisId: number
}

export interface AgentApiV3RunReportAnalysisRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunReportAnalysis
     */
    analysisId: number
}

export interface AgentApiV3RunSecretsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunSecrets
     */
    analysisId: number
}

export interface AgentApiV3RunSecurityScanRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunSecurityScan
     */
    analysisId: number
    /**
     * 
     * @type TriggerSecurityScanInputBody
     * @memberof AgentApiv3RunSecurityScan
     */
    triggerSecurityScanInputBody: TriggerSecurityScanInputBody
}

export interface AgentApiV3RunTriageRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3RunTriage
     */
    analysisId: number
}

export interface AgentApiV3TriggerRenameUnnamedFunctionsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3TriggerRenameUnnamedFunctions
     */
    analysisId: number
    /**
     * 
     * @type TriggerRenameUnnamedFunctionsInputBody
     * @memberof AgentApiv3TriggerRenameUnnamedFunctions
     */
    triggerRenameUnnamedFunctionsInputBody: TriggerRenameUnnamedFunctionsInputBody
}

export interface AgentApiV3UpsertBinaryAgentFeedbackRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AgentApiv3UpsertBinaryAgentFeedback
     */
    analysisId: number
    /**
     * Which agent\&#39;s output the feedback is about
     * Defaults to: undefined
     * @type &#39;triage&#39; | &#39;capabilities&#39; | &#39;report-analysis&#39; | &#39;remediation&#39; | &#39;protocols&#39; | &#39;secrets&#39;
     * @memberof AgentApiv3UpsertBinaryAgentFeedback
     */
    agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets'
    /**
     * 
     * @type SubmitFeedbackInputBody
     * @memberof AgentApiv3UpsertBinaryAgentFeedback
     */
    submitFeedbackInputBody: SubmitFeedbackInputBody
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
     * Check the status of a protocols discovery workflow
     * @param param the request object
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(param: AgentApiCheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a protocols discovery workflow
     * @param param the request object
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(param: AgentApiCheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param param the request object
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(param: AgentApiCheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param param the request object
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(param: AgentApiCheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(param.analysisId,  options).toPromise();
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
     * Check the status of a secrets discovery workflow
     * @param param the request object
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(param: AgentApiCheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskStatusResponse>> {
        return this.api.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Check the status of a secrets discovery workflow
     * @param param the request object
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(param: AgentApiCheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetRequest, options?: ConfigurationOptions): Promise<TaskStatusResponse> {
        return this.api.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(param.analysisId,  options).toPromise();
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
     * Queues a protocols discovery workflow process
     * @param param the request object
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(param: AgentApiCreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        return this.api.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a protocols discovery workflow process
     * @param param the request object
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(param: AgentApiCreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostRequest, options?: ConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        return this.api.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a remediation analysis workflow process
     * @param param the request object
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(param: AgentApiCreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        return this.api.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a remediation analysis workflow process
     * @param param the request object
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(param: AgentApiCreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostRequest, options?: ConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        return this.api.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(param.analysisId,  options).toPromise();
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
     * Queues a secrets discovery workflow process
     * @param param the request object
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(param: AgentApiCreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        return this.api.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Queues a secrets discovery workflow process
     * @param param the request object
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(param: AgentApiCreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostRequest, options?: ConfigurationOptions): Promise<BaseResponseQueuedWorkflowTaskResponse> {
        return this.api.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(param.analysisId,  options).toPromise();
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
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param param the request object
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(param: AgentApiGetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseProtocolsAgentResponse>> {
        return this.api.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param param the request object
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(param: AgentApiGetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetRequest, options?: ConfigurationOptions): Promise<BaseResponseProtocolsAgentResponse> {
        return this.api.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(param.analysisId,  options).toPromise();
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param param the request object
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(param: AgentApiGetRemediationResultV2AnalysesAnalysisIdAgentRemediationGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseRemediationAgentResponse>> {
        return this.api.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param param the request object
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(param: AgentApiGetRemediationResultV2AnalysesAnalysisIdAgentRemediationGetRequest, options?: ConfigurationOptions): Promise<BaseResponseRemediationAgentResponse> {
        return this.api.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(param.analysisId,  options).toPromise();
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param param the request object
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(param: AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseReportAnalysisResponse>> {
        return this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param param the request object
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(param: AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest, options?: ConfigurationOptions): Promise<BaseResponseReportAnalysisResponse> {
        return this.api.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param param the request object
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(param: AgentApiGetSecretsResultV2AnalysesAnalysisIdAgentSecretsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseSecretsAgentResponse>> {
        return this.api.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param param the request object
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(param: AgentApiGetSecretsResultV2AnalysesAnalysisIdAgentSecretsGetRequest, options?: ConfigurationOptions): Promise<BaseResponseSecretsAgentResponse> {
        return this.api.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(param.analysisId,  options).toPromise();
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

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param param the request object
     */
    public v3CancelRenameUnnamedFunctionsWithHttpInfo(param: AgentApiV3CancelRenameUnnamedFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3CancelRenameUnnamedFunctionsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param param the request object
     */
    public v3CancelRenameUnnamedFunctions(param: AgentApiV3CancelRenameUnnamedFunctionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3CancelRenameUnnamedFunctions(param.analysisId,  options).toPromise();
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param param the request object
     */
    public v3CancelSecurityScanOperationWithHttpInfo(param: AgentApiV3CancelSecurityScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3CancelSecurityScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param param the request object
     */
    public v3CancelSecurityScanOperation(param: AgentApiV3CancelSecurityScanOperationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3CancelSecurityScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param param the request object
     */
    public v3GetBinaryAgentFeedbackWithHttpInfo(param: AgentApiV3GetBinaryAgentFeedbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<FeedbackOutputBody>> {
        return this.api.v3GetBinaryAgentFeedbackWithHttpInfo(param.analysisId, param.agent,  options).toPromise();
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param param the request object
     */
    public v3GetBinaryAgentFeedback(param: AgentApiV3GetBinaryAgentFeedbackRequest, options?: ConfigurationOptions): Promise<FeedbackOutputBody> {
        return this.api.v3GetBinaryAgentFeedback(param.analysisId, param.agent,  options).toPromise();
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param param the request object
     */
    public v3GetCapabilitiesOperationWithHttpInfo(param: AgentApiV3GetCapabilitiesOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataCapabilitiesResult>> {
        return this.api.v3GetCapabilitiesOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param param the request object
     */
    public v3GetCapabilitiesOperation(param: AgentApiV3GetCapabilitiesOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataCapabilitiesResult> {
        return this.api.v3GetCapabilitiesOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param param the request object
     */
    public v3GetCryptoExplainOperationWithHttpInfo(param: AgentApiV3GetCryptoExplainOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        return this.api.v3GetCryptoExplainOperationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param param the request object
     */
    public v3GetCryptoExplainOperation(param: AgentApiV3GetCryptoExplainOperationRequest, options?: ConfigurationOptions): Promise<OperationCryptoExplainMetadataCryptoExplainResult> {
        return this.api.v3GetCryptoExplainOperation(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param param the request object
     */
    public v3GetCryptoScanOperationWithHttpInfo(param: AgentApiV3GetCryptoScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        return this.api.v3GetCryptoScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param param the request object
     */
    public v3GetCryptoScanOperation(param: AgentApiV3GetCryptoScanOperationRequest, options?: ConfigurationOptions): Promise<OperationCryptoScanMetadataCryptoScanResult> {
        return this.api.v3GetCryptoScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param param the request object
     */
    public v3GetExecutionExplainOperationWithHttpInfo(param: AgentApiV3GetExecutionExplainOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        return this.api.v3GetExecutionExplainOperationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param param the request object
     */
    public v3GetExecutionExplainOperation(param: AgentApiV3GetExecutionExplainOperationRequest, options?: ConfigurationOptions): Promise<OperationExecutionExplainMetadataExecutionExplainResult> {
        return this.api.v3GetExecutionExplainOperation(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param param the request object
     */
    public v3GetExecutionScanOperationWithHttpInfo(param: AgentApiV3GetExecutionScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        return this.api.v3GetExecutionScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param param the request object
     */
    public v3GetExecutionScanOperation(param: AgentApiV3GetExecutionScanOperationRequest, options?: ConfigurationOptions): Promise<OperationExecutionScanMetadataExecutionScanResult> {
        return this.api.v3GetExecutionScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param param the request object
     */
    public v3GetFilesystemAnalyseOperationWithHttpInfo(param: AgentApiV3GetFilesystemAnalyseOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        return this.api.v3GetFilesystemAnalyseOperationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param param the request object
     */
    public v3GetFilesystemAnalyseOperation(param: AgentApiV3GetFilesystemAnalyseOperationRequest, options?: ConfigurationOptions): Promise<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        return this.api.v3GetFilesystemAnalyseOperation(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param param the request object
     */
    public v3GetFilesystemScanOperationWithHttpInfo(param: AgentApiV3GetFilesystemScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        return this.api.v3GetFilesystemScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param param the request object
     */
    public v3GetFilesystemScanOperation(param: AgentApiV3GetFilesystemScanOperationRequest, options?: ConfigurationOptions): Promise<OperationFilesystemScanMetadataFilesystemScanResult> {
        return this.api.v3GetFilesystemScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param param the request object
     */
    public v3GetNetworkingExplainOperationWithHttpInfo(param: AgentApiV3GetNetworkingExplainOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        return this.api.v3GetNetworkingExplainOperationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param param the request object
     */
    public v3GetNetworkingExplainOperation(param: AgentApiV3GetNetworkingExplainOperationRequest, options?: ConfigurationOptions): Promise<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        return this.api.v3GetNetworkingExplainOperation(param.functionId,  options).toPromise();
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param param the request object
     */
    public v3GetNetworkingScanOperationWithHttpInfo(param: AgentApiV3GetNetworkingScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        return this.api.v3GetNetworkingScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param param the request object
     */
    public v3GetNetworkingScanOperation(param: AgentApiV3GetNetworkingScanOperationRequest, options?: ConfigurationOptions): Promise<OperationNetworkingScanMetadataNetworkingScanResult> {
        return this.api.v3GetNetworkingScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param param the request object
     */
    public v3GetProtocolsOperationWithHttpInfo(param: AgentApiV3GetProtocolsOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        return this.api.v3GetProtocolsOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param param the request object
     */
    public v3GetProtocolsOperation(param: AgentApiV3GetProtocolsOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataReportResult> {
        return this.api.v3GetProtocolsOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param param the request object
     */
    public v3GetRemediationOperationWithHttpInfo(param: AgentApiV3GetRemediationOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataRemediationResult>> {
        return this.api.v3GetRemediationOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param param the request object
     */
    public v3GetRemediationOperation(param: AgentApiV3GetRemediationOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataRemediationResult> {
        return this.api.v3GetRemediationOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param param the request object
     */
    public v3GetRenameUnnamedFunctionsResultWithHttpInfo(param: AgentApiV3GetRenameUnnamedFunctionsResultRequest, options?: ConfigurationOptions): Promise<HttpInfo<RenameUnnamedFunctionsResult>> {
        return this.api.v3GetRenameUnnamedFunctionsResultWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param param the request object
     */
    public v3GetRenameUnnamedFunctionsResult(param: AgentApiV3GetRenameUnnamedFunctionsResultRequest, options?: ConfigurationOptions): Promise<RenameUnnamedFunctionsResult> {
        return this.api.v3GetRenameUnnamedFunctionsResult(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param param the request object
     */
    public v3GetRenameUnnamedFunctionsStatusWithHttpInfo(param: AgentApiV3GetRenameUnnamedFunctionsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<StatusBody>> {
        return this.api.v3GetRenameUnnamedFunctionsStatusWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param param the request object
     */
    public v3GetRenameUnnamedFunctionsStatus(param: AgentApiV3GetRenameUnnamedFunctionsStatusRequest, options?: ConfigurationOptions): Promise<StatusBody> {
        return this.api.v3GetRenameUnnamedFunctionsStatus(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param param the request object
     */
    public v3GetReportAnalysisOperationWithHttpInfo(param: AgentApiV3GetReportAnalysisOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataThreatReportResult>> {
        return this.api.v3GetReportAnalysisOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param param the request object
     */
    public v3GetReportAnalysisOperation(param: AgentApiV3GetReportAnalysisOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataThreatReportResult> {
        return this.api.v3GetReportAnalysisOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param param the request object
     */
    public v3GetSecretsOperationWithHttpInfo(param: AgentApiV3GetSecretsOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        return this.api.v3GetSecretsOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param param the request object
     */
    public v3GetSecretsOperation(param: AgentApiV3GetSecretsOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataReportResult> {
        return this.api.v3GetSecretsOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param param the request object
     */
    public v3GetSecurityScanOperationWithHttpInfo(param: AgentApiV3GetSecurityScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        return this.api.v3GetSecurityScanOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param param the request object
     */
    public v3GetSecurityScanOperation(param: AgentApiV3GetSecurityScanOperationRequest, options?: ConfigurationOptions): Promise<OperationSecurityScanMetadataSecurityScanResult> {
        return this.api.v3GetSecurityScanOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param param the request object
     */
    public v3GetTriageOperationWithHttpInfo(param: AgentApiV3GetTriageOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataTriageResult>> {
        return this.api.v3GetTriageOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param param the request object
     */
    public v3GetTriageOperation(param: AgentApiV3GetTriageOperationRequest, options?: ConfigurationOptions): Promise<OperationMetadataTriageResult> {
        return this.api.v3GetTriageOperation(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param param the request object
     */
    public v3RunCapabilitiesWithHttpInfo(param: AgentApiV3RunCapabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataCapabilitiesResult>> {
        return this.api.v3RunCapabilitiesWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param param the request object
     */
    public v3RunCapabilities(param: AgentApiV3RunCapabilitiesRequest, options?: ConfigurationOptions): Promise<OperationMetadataCapabilitiesResult> {
        return this.api.v3RunCapabilities(param.analysisId,  options).toPromise();
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param param the request object
     */
    public v3RunCryptoExplainWithHttpInfo(param: AgentApiV3RunCryptoExplainRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        return this.api.v3RunCryptoExplainWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param param the request object
     */
    public v3RunCryptoExplain(param: AgentApiV3RunCryptoExplainRequest, options?: ConfigurationOptions): Promise<OperationCryptoExplainMetadataCryptoExplainResult> {
        return this.api.v3RunCryptoExplain(param.functionId,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param param the request object
     */
    public v3RunCryptoScanWithHttpInfo(param: AgentApiV3RunCryptoScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        return this.api.v3RunCryptoScanWithHttpInfo(param.analysisId, param.triggerCryptoScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param param the request object
     */
    public v3RunCryptoScan(param: AgentApiV3RunCryptoScanRequest, options?: ConfigurationOptions): Promise<OperationCryptoScanMetadataCryptoScanResult> {
        return this.api.v3RunCryptoScan(param.analysisId, param.triggerCryptoScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param param the request object
     */
    public v3RunExecutionExplainWithHttpInfo(param: AgentApiV3RunExecutionExplainRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        return this.api.v3RunExecutionExplainWithHttpInfo(param.functionId, param.triggerExecutionExplainInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param param the request object
     */
    public v3RunExecutionExplain(param: AgentApiV3RunExecutionExplainRequest, options?: ConfigurationOptions): Promise<OperationExecutionExplainMetadataExecutionExplainResult> {
        return this.api.v3RunExecutionExplain(param.functionId, param.triggerExecutionExplainInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param param the request object
     */
    public v3RunExecutionScanWithHttpInfo(param: AgentApiV3RunExecutionScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        return this.api.v3RunExecutionScanWithHttpInfo(param.analysisId, param.triggerExecutionScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param param the request object
     */
    public v3RunExecutionScan(param: AgentApiV3RunExecutionScanRequest, options?: ConfigurationOptions): Promise<OperationExecutionScanMetadataExecutionScanResult> {
        return this.api.v3RunExecutionScan(param.analysisId, param.triggerExecutionScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param param the request object
     */
    public v3RunFilesystemAnalyseWithHttpInfo(param: AgentApiV3RunFilesystemAnalyseRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        return this.api.v3RunFilesystemAnalyseWithHttpInfo(param.functionId, param.triggerFilesystemAnalyseInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param param the request object
     */
    public v3RunFilesystemAnalyse(param: AgentApiV3RunFilesystemAnalyseRequest, options?: ConfigurationOptions): Promise<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        return this.api.v3RunFilesystemAnalyse(param.functionId, param.triggerFilesystemAnalyseInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param param the request object
     */
    public v3RunFilesystemScanWithHttpInfo(param: AgentApiV3RunFilesystemScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        return this.api.v3RunFilesystemScanWithHttpInfo(param.analysisId, param.triggerFilesystemScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param param the request object
     */
    public v3RunFilesystemScan(param: AgentApiV3RunFilesystemScanRequest, options?: ConfigurationOptions): Promise<OperationFilesystemScanMetadataFilesystemScanResult> {
        return this.api.v3RunFilesystemScan(param.analysisId, param.triggerFilesystemScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param param the request object
     */
    public v3RunNetworkingExplainWithHttpInfo(param: AgentApiV3RunNetworkingExplainRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        return this.api.v3RunNetworkingExplainWithHttpInfo(param.functionId, param.triggerNetworkingExplainInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param param the request object
     */
    public v3RunNetworkingExplain(param: AgentApiV3RunNetworkingExplainRequest, options?: ConfigurationOptions): Promise<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        return this.api.v3RunNetworkingExplain(param.functionId, param.triggerNetworkingExplainInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param param the request object
     */
    public v3RunNetworkingScanWithHttpInfo(param: AgentApiV3RunNetworkingScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        return this.api.v3RunNetworkingScanWithHttpInfo(param.analysisId, param.triggerNetworkingScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param param the request object
     */
    public v3RunNetworkingScan(param: AgentApiV3RunNetworkingScanRequest, options?: ConfigurationOptions): Promise<OperationNetworkingScanMetadataNetworkingScanResult> {
        return this.api.v3RunNetworkingScan(param.analysisId, param.triggerNetworkingScanInputBody,  options).toPromise();
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param param the request object
     */
    public v3RunProtocolsWithHttpInfo(param: AgentApiV3RunProtocolsRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        return this.api.v3RunProtocolsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param param the request object
     */
    public v3RunProtocols(param: AgentApiV3RunProtocolsRequest, options?: ConfigurationOptions): Promise<OperationMetadataReportResult> {
        return this.api.v3RunProtocols(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param param the request object
     */
    public v3RunRemediationWithHttpInfo(param: AgentApiV3RunRemediationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataRemediationResult>> {
        return this.api.v3RunRemediationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param param the request object
     */
    public v3RunRemediation(param: AgentApiV3RunRemediationRequest, options?: ConfigurationOptions): Promise<OperationMetadataRemediationResult> {
        return this.api.v3RunRemediation(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param param the request object
     */
    public v3RunReportAnalysisWithHttpInfo(param: AgentApiV3RunReportAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataThreatReportResult>> {
        return this.api.v3RunReportAnalysisWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param param the request object
     */
    public v3RunReportAnalysis(param: AgentApiV3RunReportAnalysisRequest, options?: ConfigurationOptions): Promise<OperationMetadataThreatReportResult> {
        return this.api.v3RunReportAnalysis(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param param the request object
     */
    public v3RunSecretsWithHttpInfo(param: AgentApiV3RunSecretsRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataReportResult>> {
        return this.api.v3RunSecretsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param param the request object
     */
    public v3RunSecrets(param: AgentApiV3RunSecretsRequest, options?: ConfigurationOptions): Promise<OperationMetadataReportResult> {
        return this.api.v3RunSecrets(param.analysisId,  options).toPromise();
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param param the request object
     */
    public v3RunSecurityScanWithHttpInfo(param: AgentApiV3RunSecurityScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        return this.api.v3RunSecurityScanWithHttpInfo(param.analysisId, param.triggerSecurityScanInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param param the request object
     */
    public v3RunSecurityScan(param: AgentApiV3RunSecurityScanRequest, options?: ConfigurationOptions): Promise<OperationSecurityScanMetadataSecurityScanResult> {
        return this.api.v3RunSecurityScan(param.analysisId, param.triggerSecurityScanInputBody,  options).toPromise();
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param param the request object
     */
    public v3RunTriageWithHttpInfo(param: AgentApiV3RunTriageRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationMetadataTriageResult>> {
        return this.api.v3RunTriageWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param param the request object
     */
    public v3RunTriage(param: AgentApiV3RunTriageRequest, options?: ConfigurationOptions): Promise<OperationMetadataTriageResult> {
        return this.api.v3RunTriage(param.analysisId,  options).toPromise();
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param param the request object
     */
    public v3TriggerRenameUnnamedFunctionsWithHttpInfo(param: AgentApiV3TriggerRenameUnnamedFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<StatusBody>> {
        return this.api.v3TriggerRenameUnnamedFunctionsWithHttpInfo(param.analysisId, param.triggerRenameUnnamedFunctionsInputBody,  options).toPromise();
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param param the request object
     */
    public v3TriggerRenameUnnamedFunctions(param: AgentApiV3TriggerRenameUnnamedFunctionsRequest, options?: ConfigurationOptions): Promise<StatusBody> {
        return this.api.v3TriggerRenameUnnamedFunctions(param.analysisId, param.triggerRenameUnnamedFunctionsInputBody,  options).toPromise();
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param param the request object
     */
    public v3UpsertBinaryAgentFeedbackWithHttpInfo(param: AgentApiV3UpsertBinaryAgentFeedbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3UpsertBinaryAgentFeedbackWithHttpInfo(param.analysisId, param.agent, param.submitFeedbackInputBody,  options).toPromise();
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param param the request object
     */
    public v3UpsertBinaryAgentFeedback(param: AgentApiV3UpsertBinaryAgentFeedbackRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3UpsertBinaryAgentFeedback(param.analysisId, param.agent, param.submitFeedbackInputBody,  options).toPromise();
    }

}

import { ObservableAnalysesBulkActionsApi } from "./ObservableAPI";
import { AnalysesBulkActionsApiRequestFactory, AnalysesBulkActionsApiResponseProcessor} from "../apis/AnalysesBulkActionsApi";

export interface AnalysesBulkActionsApiBulkAddAnalysisTagsRequest {
    /**
     * 
     * @type AnalysisBulkAddTagsRequest
     * @memberof AnalysesBulkActionsApibulkAddAnalysisTags
     */
    analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest
}

export interface AnalysesBulkActionsApiBulkDeleteAnalysesRequest {
    /**
     * 
     * @type BulkDeleteAnalysesRequest
     * @memberof AnalysesBulkActionsApibulkDeleteAnalyses
     */
    bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest
}

export interface AnalysesBulkActionsApiV3BatchAddAnalysisTagsRequest {
    /**
     * 
     * @type BulkAddTagsInputBody
     * @memberof AnalysesBulkActionsApiv3BatchAddAnalysisTags
     */
    bulkAddTagsInputBody: BulkAddTagsInputBody
}

export interface AnalysesBulkActionsApiV3BatchDeleteAnalysesRequest {
    /**
     * 
     * @type BulkDeleteAnalysesInputBody
     * @memberof AnalysesBulkActionsApiv3BatchDeleteAnalyses
     */
    bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody
}

export class ObjectAnalysesBulkActionsApi {
    private api: ObservableAnalysesBulkActionsApi

    public constructor(configuration: Configuration, requestFactory?: AnalysesBulkActionsApiRequestFactory, responseProcessor?: AnalysesBulkActionsApiResponseProcessor) {
        this.api = new ObservableAnalysesBulkActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param param the request object
     */
    public bulkAddAnalysisTagsWithHttpInfo(param: AnalysesBulkActionsApiBulkAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisBulkAddTagsResponse>> {
        return this.api.bulkAddAnalysisTagsWithHttpInfo(param.analysisBulkAddTagsRequest,  options).toPromise();
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param param the request object
     */
    public bulkAddAnalysisTags(param: AnalysesBulkActionsApiBulkAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisBulkAddTagsResponse> {
        return this.api.bulkAddAnalysisTags(param.analysisBulkAddTagsRequest,  options).toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param param the request object
     */
    public bulkDeleteAnalysesWithHttpInfo(param: AnalysesBulkActionsApiBulkDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        return this.api.bulkDeleteAnalysesWithHttpInfo(param.bulkDeleteAnalysesRequest,  options).toPromise();
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param param the request object
     */
    public bulkDeleteAnalyses(param: AnalysesBulkActionsApiBulkDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<BaseResponseDict> {
        return this.api.bulkDeleteAnalyses(param.bulkDeleteAnalysesRequest,  options).toPromise();
    }

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param param the request object
     */
    public v3BatchAddAnalysisTagsWithHttpInfo(param: AnalysesBulkActionsApiV3BatchAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BulkAddTagsOutputBody>> {
        return this.api.v3BatchAddAnalysisTagsWithHttpInfo(param.bulkAddTagsInputBody,  options).toPromise();
    }

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param param the request object
     */
    public v3BatchAddAnalysisTags(param: AnalysesBulkActionsApiV3BatchAddAnalysisTagsRequest, options?: ConfigurationOptions): Promise<BulkAddTagsOutputBody> {
        return this.api.v3BatchAddAnalysisTags(param.bulkAddTagsInputBody,  options).toPromise();
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param param the request object
     */
    public v3BatchDeleteAnalysesWithHttpInfo(param: AnalysesBulkActionsApiV3BatchDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3BatchDeleteAnalysesWithHttpInfo(param.bulkDeleteAnalysesInputBody,  options).toPromise();
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param param the request object
     */
    public v3BatchDeleteAnalyses(param: AnalysesBulkActionsApiV3BatchDeleteAnalysesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3BatchDeleteAnalyses(param.bulkDeleteAnalysesInputBody,  options).toPromise();
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
}

export interface AnalysesCommentsApiGetAnalysisCommentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCommentsApigetAnalysisComments
     */
    analysisId: number
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
        return this.api.createAnalysisCommentWithHttpInfo(param.analysisId, param.commentBase,  options).toPromise();
    }

    /**
     * Creates a comment associated with a specified analysis).
     * Create a comment for this analysis
     * @param param the request object
     */
    public createAnalysisComment(param: AnalysesCommentsApiCreateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.createAnalysisComment(param.analysisId, param.commentBase,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAnalysisCommentWithHttpInfo(param: AnalysesCommentsApiDeleteAnalysisCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBool>> {
        return this.api.deleteAnalysisCommentWithHttpInfo(param.commentId, param.analysisId,  options).toPromise();
    }

    /**
     * Deletes an existing comment. Users can only delete their own comments.
     * Delete a comment
     * @param param the request object
     */
    public deleteAnalysisComment(param: AnalysesCommentsApiDeleteAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseBool> {
        return this.api.deleteAnalysisComment(param.commentId, param.analysisId,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param param the request object
     */
    public getAnalysisCommentsWithHttpInfo(param: AnalysesCommentsApiGetAnalysisCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListCommentResponse>> {
        return this.api.getAnalysisCommentsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.
     * Get comments for this analysis
     * @param param the request object
     */
    public getAnalysisComments(param: AnalysesCommentsApiGetAnalysisCommentsRequest, options?: ConfigurationOptions): Promise<BaseResponseListCommentResponse> {
        return this.api.getAnalysisComments(param.analysisId,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAnalysisCommentWithHttpInfo(param: AnalysesCommentsApiUpdateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCommentResponse>> {
        return this.api.updateAnalysisCommentWithHttpInfo(param.commentId, param.analysisId, param.commentUpdateRequest,  options).toPromise();
    }

    /**
     * Updates the content of an existing comment. Users can only update their own comments.
     * Update a comment
     * @param param the request object
     */
    public updateAnalysisComment(param: AnalysesCommentsApiUpdateAnalysisCommentRequest, options?: ConfigurationOptions): Promise<BaseResponseCommentResponse> {
        return this.api.updateAnalysisComment(param.commentId, param.analysisId, param.commentUpdateRequest,  options).toPromise();
    }

}

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

export interface AnalysesCoreApiGetAnalysisBasicInfo0Request {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisBasicInfo_1
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

export interface AnalysesCoreApiGetAnalysisFunctionMapRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisFunctionMap
     */
    analysisId: number
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

export interface AnalysesCoreApiGetAnalysisLogsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisLogs
     */
    analysisId: number
}

export interface AnalysesCoreApiGetAnalysisParamsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApigetAnalysisParams
     */
    analysisId: number
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
     * @type DynamicExecutionStatus
     * @memberof AnalysesCoreApilistAnalyses
     */
    dynamicExecutionStatus?: DynamicExecutionStatus
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
    xRevEngApplication?: string
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
     * Defaults to: false
     * @type boolean
     * @memberof AnalysesCoreApiuploadFile
     */
    forceOverwrite?: boolean
}

export interface AnalysesCoreApiV3DeleteAnalysisRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3DeleteAnalysis
     */
    analysisId: number
}

export interface AnalysesCoreApiV3DownloadBinaryExportRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3DownloadBinaryExport
     */
    analysisId: number
    /**
     * Task ID returned by queueing the export
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3DownloadBinaryExport
     */
    taskId?: string
}

export interface AnalysesCoreApiV3GetAnalysisRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysis
     */
    analysisId: number
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

export interface AnalysesCoreApiV3GetAnalysisFunctionsProgressRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisFunctionsProgress
     */
    analysisId: number
}

export interface AnalysesCoreApiV3GetAnalysisLogsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisLogs
     */
    analysisId: number
}

export interface AnalysesCoreApiV3GetAnalysisOperationRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3GetAnalysisOperation
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

export interface AnalysesCoreApiV3GetBinaryExportOperationRequest {
    /**
     * Task ID returned by queueing the export
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3GetBinaryExportOperation
     */
    taskId: string
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
     * Leave empty to search your own, your team\&#39;s and all public analyses
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
     * Restrict to analyses of this binary. A binary can carry more than one analysis; they are returned newest first under the default sort
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    binaryId?: number
    /**
     * Restrict to binaries running on one of these operating-system platforms. Matches the uploader\&#39;s override when they set one, the detected platform otherwise; a binary with neither is never matched. Leave empty for no filter
     * Defaults to: undefined
     * @type Array&lt;&#39;windows&#39; | &#39;linux&#39; | &#39;android&#39;&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    platform?: Array<'windows' | 'linux' | 'android'>
    /**
     * Restrict to binaries built for one of these instruction-set architectures. Resolved the same way as platform. Leave empty for no filter
     * Defaults to: undefined
     * @type Array&lt;&#39;x86_64&#39; | &#39;x86_32&#39; | &#39;arm_64&#39;&gt;
     * @memberof AnalysesCoreApiv3ListAnalyses
     */
    architecture?: Array<'x86_64' | 'x86_32' | 'arm_64'>
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

export interface AnalysesCoreApiV3LookupAnalysisByBinaryIdRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3LookupAnalysisByBinaryId
     */
    binaryId: number
}

export interface AnalysesCoreApiV3QueueBinaryExportRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3QueueBinaryExport
     */
    analysisId: number
}

export interface AnalysesCoreApiV3SearchTagsRequest {
    /**
     * Partial or full tag name to search for, at least 3 characters
     * Defaults to: undefined
     * @type string
     * @memberof AnalysesCoreApiv3SearchTags
     */
    partialName?: string
    /**
     * Maximum results to return
     * Minimum: 1
     * Maximum: 50
     * Defaults to: 10
     * @type number
     * @memberof AnalysesCoreApiv3SearchTags
     */
    limit?: number
    /**
     * Number of results to skip
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof AnalysesCoreApiv3SearchTags
     */
    offset?: number
}

export interface AnalysesCoreApiV3UpdateAnalysisRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3UpdateAnalysis
     */
    analysisId: number
    /**
     * 
     * @type UpdateAnalysisInputBody
     * @memberof AnalysesCoreApiv3UpdateAnalysis
     */
    updateAnalysisInputBody: UpdateAnalysisInputBody
}

export interface AnalysesCoreApiV3UpdateAnalysisTagsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3UpdateAnalysisTags
     */
    analysisId: number
    /**
     * 
     * @type UpdateTagsInputBody
     * @memberof AnalysesCoreApiv3UpdateAnalysisTags
     */
    updateTagsInputBody: UpdateTagsInputBody
}

export interface AnalysesCoreApiV3UpgradeAnalysisModelRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesCoreApiv3UpgradeAnalysisModel
     */
    analysisId: number
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
     * Begins an analysis
     * Create Analysis
     * @param param the request object
     */
    public createAnalysisWithHttpInfo(param: AnalysesCoreApiCreateAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisCreateResponse>> {
        return this.api.createAnalysisWithHttpInfo(param.analysisCreateRequest, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Begins an analysis
     * Create Analysis
     * @param param the request object
     */
    public createAnalysis(param: AnalysesCoreApiCreateAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisCreateResponse> {
        return this.api.createAnalysis(param.analysisCreateRequest, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param param the request object
     */
    public deleteAnalysisWithHttpInfo(param: AnalysesCoreApiDeleteAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseDict>> {
        return this.api.deleteAnalysisWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Deletes an analysis based on the provided analysis ID.
     * Delete Analysis
     * @param param the request object
     */
    public deleteAnalysis(param: AnalysesCoreApiDeleteAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseDict> {
        return this.api.deleteAnalysis(param.analysisId,  options).toPromise();
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
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfo_1WithHttpInfo(param: AnalysesCoreApiGetAnalysisBasicInfo0Request, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisBasicInfoOutputBody>> {
        return this.api.getAnalysisBasicInfo_1WithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param param the request object
     */
    public getAnalysisBasicInfo_1(param: AnalysesCoreApiGetAnalysisBasicInfo0Request, options?: ConfigurationOptions): Promise<AnalysisBasicInfoOutputBody> {
        return this.api.getAnalysisBasicInfo_1(param.analysisId,  options).toPromise();
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
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param param the request object
     */
    public getAnalysisFunctionMapWithHttpInfo(param: AnalysesCoreApiGetAnalysisFunctionMapRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisFunctionMapping>> {
        return this.api.getAnalysisFunctionMapWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.
     * Get Analysis Function Map
     * @param param the request object
     */
    public getAnalysisFunctionMap(param: AnalysesCoreApiGetAnalysisFunctionMapRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisFunctionMapping> {
        return this.api.getAnalysisFunctionMap(param.analysisId,  options).toPromise();
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
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param param the request object
     */
    public getAnalysisLogsWithHttpInfo(param: AnalysesCoreApiGetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseLogs>> {
        return this.api.getAnalysisLogsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Given an analysis ID gets the current logs of an analysis
     * Gets the logs of an analysis
     * @param param the request object
     */
    public getAnalysisLogs(param: AnalysesCoreApiGetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<BaseResponseLogs> {
        return this.api.getAnalysisLogs(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param param the request object
     */
    public getAnalysisParamsWithHttpInfo(param: AnalysesCoreApiGetAnalysisParamsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseParams>> {
        return this.api.getAnalysisParamsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Gets the params that the analysis was run with
     * Gets analysis param information
     * @param param the request object
     */
    public getAnalysisParams(param: AnalysesCoreApiGetAnalysisParamsRequest, options?: ConfigurationOptions): Promise<BaseResponseParams> {
        return this.api.getAnalysisParams(param.analysisId,  options).toPromise();
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
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param param the request object
     */
    public insertAnalysisLogWithHttpInfo(param: AnalysesCoreApiInsertAnalysisLogRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponse>> {
        return this.api.insertAnalysisLogWithHttpInfo(param.analysisId, param.insertAnalysisLogRequest,  options).toPromise();
    }

    /**
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param param the request object
     */
    public insertAnalysisLog(param: AnalysesCoreApiInsertAnalysisLogRequest, options?: ConfigurationOptions): Promise<BaseResponse> {
        return this.api.insertAnalysisLog(param.analysisId, param.insertAnalysisLogRequest,  options).toPromise();
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
        return this.api.requeueAnalysisWithHttpInfo(param.analysisId, param.reAnalysisForm, param.xRevEngApplication,  options).toPromise();
    }

    /**
     * Re-queues an already uploaded analysis
     * Requeue Analysis
     * @param param the request object
     */
    public requeueAnalysis(param: AnalysesCoreApiRequeueAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseCreated> {
        return this.api.requeueAnalysis(param.analysisId, param.reAnalysisForm, param.xRevEngApplication,  options).toPromise();
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
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param param the request object
     */
    public updateAnalysisWithHttpInfo(param: AnalysesCoreApiUpdateAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisDetailResponse>> {
        return this.api.updateAnalysisWithHttpInfo(param.analysisId, param.analysisUpdateRequest,  options).toPromise();
    }

    /**
     * Updates analysis attributes (binary_name, analysis_scope). User must be the owner.
     * Update Analysis
     * @param param the request object
     */
    public updateAnalysis(param: AnalysesCoreApiUpdateAnalysisRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisDetailResponse> {
        return this.api.updateAnalysis(param.analysisId, param.analysisUpdateRequest,  options).toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param param the request object
     */
    public updateAnalysisTagsWithHttpInfo(param: AnalysesCoreApiUpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAnalysisUpdateTagsResponse>> {
        return this.api.updateAnalysisTagsWithHttpInfo(param.analysisId, param.analysisUpdateTagsRequest,  options).toPromise();
    }

    /**
     * Updates analysis tags. User must be the owner.
     * Update Analysis Tags
     * @param param the request object
     */
    public updateAnalysisTags(param: AnalysesCoreApiUpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<BaseResponseAnalysisUpdateTagsResponse> {
        return this.api.updateAnalysisTags(param.analysisId, param.analysisUpdateTagsRequest,  options).toPromise();
    }

    /**
     * Upload File
     * @param param the request object
     */
    public uploadFileWithHttpInfo(param: AnalysesCoreApiUploadFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseUploadResponse>> {
        return this.api.uploadFileWithHttpInfo(param.uploadFileType, param.file, param.packedPassword, param.forceOverwrite,  options).toPromise();
    }

    /**
     * Upload File
     * @param param the request object
     */
    public uploadFile(param: AnalysesCoreApiUploadFileRequest, options?: ConfigurationOptions): Promise<BaseResponseUploadResponse> {
        return this.api.uploadFile(param.uploadFileType, param.file, param.packedPassword, param.forceOverwrite,  options).toPromise();
    }

    /**
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param param the request object
     */
    public v3DeleteAnalysisWithHttpInfo(param: AnalysesCoreApiV3DeleteAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3DeleteAnalysisWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param param the request object
     */
    public v3DeleteAnalysis(param: AnalysesCoreApiV3DeleteAnalysisRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3DeleteAnalysis(param.analysisId,  options).toPromise();
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param param the request object
     */
    public v3DownloadBinaryExportWithHttpInfo(param: AnalysesCoreApiV3DownloadBinaryExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3DownloadBinaryExportWithHttpInfo(param.analysisId, param.taskId,  options).toPromise();
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param param the request object
     */
    public v3DownloadBinaryExport(param: AnalysesCoreApiV3DownloadBinaryExportRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3DownloadBinaryExport(param.analysisId, param.taskId,  options).toPromise();
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param param the request object
     */
    public v3GetAnalysisWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisDetailOutputBody>> {
        return this.api.v3GetAnalysisWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param param the request object
     */
    public v3GetAnalysis(param: AnalysesCoreApiV3GetAnalysisRequest, options?: ConfigurationOptions): Promise<AnalysisDetailOutputBody> {
        return this.api.v3GetAnalysis(param.analysisId,  options).toPromise();
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
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisFunctionsProgressWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisFunctionsProgressRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionsProgressOutputBody>> {
        return this.api.v3GetAnalysisFunctionsProgressWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param param the request object
     */
    public v3GetAnalysisFunctionsProgress(param: AnalysesCoreApiV3GetAnalysisFunctionsProgressRequest, options?: ConfigurationOptions): Promise<FunctionsProgressOutputBody> {
        return this.api.v3GetAnalysisFunctionsProgress(param.analysisId,  options).toPromise();
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param param the request object
     */
    public v3GetAnalysisLogsWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAnalysisLogsOutputBody>> {
        return this.api.v3GetAnalysisLogsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param param the request object
     */
    public v3GetAnalysisLogs(param: AnalysesCoreApiV3GetAnalysisLogsRequest, options?: ConfigurationOptions): Promise<GetAnalysisLogsOutputBody> {
        return this.api.v3GetAnalysisLogs(param.analysisId,  options).toPromise();
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param param the request object
     */
    public v3GetAnalysisOperationWithHttpInfo(param: AnalysesCoreApiV3GetAnalysisOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationCreateMetadataCreateResult>> {
        return this.api.v3GetAnalysisOperationWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param param the request object
     */
    public v3GetAnalysisOperation(param: AnalysesCoreApiV3GetAnalysisOperationRequest, options?: ConfigurationOptions): Promise<OperationCreateMetadataCreateResult> {
        return this.api.v3GetAnalysisOperation(param.analysisId,  options).toPromise();
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
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param param the request object
     */
    public v3GetBinaryExportOperationWithHttpInfo(param: AnalysesCoreApiV3GetBinaryExportOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        return this.api.v3GetBinaryExportOperationWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param param the request object
     */
    public v3GetBinaryExportOperation(param: AnalysesCoreApiV3GetBinaryExportOperationRequest, options?: ConfigurationOptions): Promise<OperationBinaryExportMetadataBinaryExportResult> {
        return this.api.v3GetBinaryExportOperation(param.taskId,  options).toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param param the request object
     */
    public v3ListAnalysesWithHttpInfo(param: AnalysesCoreApiV3ListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysesOutputBody>> {
        return this.api.v3ListAnalysesWithHttpInfo(param.searchTerm, param.analysisScope, param.status, param.modelName, param.usernames, param.sha256Hash, param.binaryId, param.platform, param.architecture, param.pageSize, param.nextPageToken, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * List analyses
     * @param param the request object
     */
    public v3ListAnalyses(param: AnalysesCoreApiV3ListAnalysesRequest = {}, options?: ConfigurationOptions): Promise<ListAnalysesOutputBody> {
        return this.api.v3ListAnalyses(param.searchTerm, param.analysisScope, param.status, param.modelName, param.usernames, param.sha256Hash, param.binaryId, param.platform, param.architecture, param.pageSize, param.nextPageToken, param.orderBy, param.order,  options).toPromise();
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

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param param the request object
     */
    public v3LookupAnalysisByBinaryIdWithHttpInfo(param: AnalysesCoreApiV3LookupAnalysisByBinaryIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<LookupAnalysisByBinaryIDOutputBody>> {
        return this.api.v3LookupAnalysisByBinaryIdWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param param the request object
     */
    public v3LookupAnalysisByBinaryId(param: AnalysesCoreApiV3LookupAnalysisByBinaryIdRequest, options?: ConfigurationOptions): Promise<LookupAnalysisByBinaryIDOutputBody> {
        return this.api.v3LookupAnalysisByBinaryId(param.binaryId,  options).toPromise();
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param param the request object
     */
    public v3QueueBinaryExportWithHttpInfo(param: AnalysesCoreApiV3QueueBinaryExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        return this.api.v3QueueBinaryExportWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param param the request object
     */
    public v3QueueBinaryExport(param: AnalysesCoreApiV3QueueBinaryExportRequest, options?: ConfigurationOptions): Promise<OperationBinaryExportMetadataBinaryExportResult> {
        return this.api.v3QueueBinaryExport(param.analysisId,  options).toPromise();
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param param the request object
     */
    public v3SearchTagsWithHttpInfo(param: AnalysesCoreApiV3SearchTagsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SearchTagsOutputBody>> {
        return this.api.v3SearchTagsWithHttpInfo(param.partialName, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param param the request object
     */
    public v3SearchTags(param: AnalysesCoreApiV3SearchTagsRequest = {}, options?: ConfigurationOptions): Promise<SearchTagsOutputBody> {
        return this.api.v3SearchTags(param.partialName, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param param the request object
     */
    public v3UpdateAnalysisWithHttpInfo(param: AnalysesCoreApiV3UpdateAnalysisRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisDetailOutputBody>> {
        return this.api.v3UpdateAnalysisWithHttpInfo(param.analysisId, param.updateAnalysisInputBody,  options).toPromise();
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param param the request object
     */
    public v3UpdateAnalysis(param: AnalysesCoreApiV3UpdateAnalysisRequest, options?: ConfigurationOptions): Promise<AnalysisDetailOutputBody> {
        return this.api.v3UpdateAnalysis(param.analysisId, param.updateAnalysisInputBody,  options).toPromise();
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param param the request object
     */
    public v3UpdateAnalysisTagsWithHttpInfo(param: AnalysesCoreApiV3UpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisTagsOutputBody>> {
        return this.api.v3UpdateAnalysisTagsWithHttpInfo(param.analysisId, param.updateTagsInputBody,  options).toPromise();
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param param the request object
     */
    public v3UpdateAnalysisTags(param: AnalysesCoreApiV3UpdateAnalysisTagsRequest, options?: ConfigurationOptions): Promise<AnalysisTagsOutputBody> {
        return this.api.v3UpdateAnalysisTags(param.analysisId, param.updateTagsInputBody,  options).toPromise();
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param param the request object
     */
    public v3UpgradeAnalysisModelWithHttpInfo(param: AnalysesCoreApiV3UpgradeAnalysisModelRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpgradeAnalysisModelOutputBody>> {
        return this.api.v3UpgradeAnalysisModelWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param param the request object
     */
    public v3UpgradeAnalysisModel(param: AnalysesCoreApiV3UpgradeAnalysisModelRequest, options?: ConfigurationOptions): Promise<UpgradeAnalysisModelOutputBody> {
        return this.api.v3UpgradeAnalysisModel(param.analysisId,  options).toPromise();
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

export interface AnalysesResultsMetadataApiGetTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApigetTags
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiV3GetAnalysisXrefRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApiv3GetAnalysisXref
     */
    analysisId: number
    /**
     * Virtual address to match against xrefs
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApiv3GetAnalysisXref
     */
    vaddr: number
}

export interface AnalysesResultsMetadataApiV3ListAnalysisCapabilitiesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApiv3ListAnalysisCapabilities
     */
    analysisId: number
}

export interface AnalysesResultsMetadataApiV3ListAnalysisTagsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnalysesResultsMetadataApiv3ListAnalysisTags
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
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param param the request object
     */
    public v3GetAnalysisXrefWithHttpInfo(param: AnalysesResultsMetadataApiV3GetAnalysisXrefRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisXrefOutputBody>> {
        return this.api.v3GetAnalysisXrefWithHttpInfo(param.analysisId, param.vaddr,  options).toPromise();
    }

    /**
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param param the request object
     */
    public v3GetAnalysisXref(param: AnalysesResultsMetadataApiV3GetAnalysisXrefRequest, options?: ConfigurationOptions): Promise<AnalysisXrefOutputBody> {
        return this.api.v3GetAnalysisXref(param.analysisId, param.vaddr,  options).toPromise();
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param param the request object
     */
    public v3ListAnalysisCapabilitiesWithHttpInfo(param: AnalysesResultsMetadataApiV3ListAnalysisCapabilitiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisCapabilitiesOutputBody>> {
        return this.api.v3ListAnalysisCapabilitiesWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param param the request object
     */
    public v3ListAnalysisCapabilities(param: AnalysesResultsMetadataApiV3ListAnalysisCapabilitiesRequest, options?: ConfigurationOptions): Promise<AnalysisCapabilitiesOutputBody> {
        return this.api.v3ListAnalysisCapabilities(param.analysisId,  options).toPromise();
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param param the request object
     */
    public v3ListAnalysisTagsWithHttpInfo(param: AnalysesResultsMetadataApiV3ListAnalysisTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisTagsOutputBody>> {
        return this.api.v3ListAnalysisTagsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param param the request object
     */
    public v3ListAnalysisTags(param: AnalysesResultsMetadataApiV3ListAnalysisTagsRequest, options?: ConfigurationOptions): Promise<AnalysisTagsOutputBody> {
        return this.api.v3ListAnalysisTags(param.analysisId,  options).toPromise();
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

import { ObservableAuthenticationUsersApi } from "./ObservableAPI";
import { AuthenticationUsersApiRequestFactory, AuthenticationUsersApiResponseProcessor} from "../apis/AuthenticationUsersApi";

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

export interface AuthenticationUsersApiSubmitUserFeedbackRequest {
    /**
     * 
     * @type SubmitUserFeedbackRequest
     * @memberof AuthenticationUsersApisubmitUserFeedback
     */
    submitUserFeedbackRequest: SubmitUserFeedbackRequest
}

export interface AuthenticationUsersApiV3GetUserRequest {
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AuthenticationUsersApiv3GetUser
     */
    userId: number
}

export interface AuthenticationUsersApiV3GetUserActivityRequest {
}

export interface AuthenticationUsersApiV3SubmitUserFeedbackRequest {
    /**
     * 
     * @type SubmitFeedbackBody
     * @memberof AuthenticationUsersApiv3SubmitUserFeedback
     */
    submitFeedbackBody: SubmitFeedbackBody
}

export class ObjectAuthenticationUsersApi {
    private api: ObservableAuthenticationUsersApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationUsersApiRequestFactory, responseProcessor?: AuthenticationUsersApiResponseProcessor) {
        this.api = new ObservableAuthenticationUsersApi(configuration, requestFactory, responseProcessor);
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

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param param the request object
     */
    public v3GetUserWithHttpInfo(param: AuthenticationUsersApiV3GetUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetPublicUserOutputBody>> {
        return this.api.v3GetUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param param the request object
     */
    public v3GetUser(param: AuthenticationUsersApiV3GetUserRequest, options?: ConfigurationOptions): Promise<GetPublicUserOutputBody> {
        return this.api.v3GetUser(param.userId,  options).toPromise();
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     * @param param the request object
     */
    public v3GetUserActivityWithHttpInfo(param: AuthenticationUsersApiV3GetUserActivityRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetUserActivityOutputBody>> {
        return this.api.v3GetUserActivityWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     * @param param the request object
     */
    public v3GetUserActivity(param: AuthenticationUsersApiV3GetUserActivityRequest = {}, options?: ConfigurationOptions): Promise<GetUserActivityOutputBody> {
        return this.api.v3GetUserActivity( options).toPromise();
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param param the request object
     */
    public v3SubmitUserFeedbackWithHttpInfo(param: AuthenticationUsersApiV3SubmitUserFeedbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmitFeedbackOutputBody>> {
        return this.api.v3SubmitUserFeedbackWithHttpInfo(param.submitFeedbackBody,  options).toPromise();
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param param the request object
     */
    public v3SubmitUserFeedback(param: AuthenticationUsersApiV3SubmitUserFeedbackRequest, options?: ConfigurationOptions): Promise<SubmitFeedbackOutputBody> {
        return this.api.v3SubmitUserFeedback(param.submitFeedbackBody,  options).toPromise();
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
}

export interface BinariesApiGetBinaryAdditionalDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails
     */
    binaryId: number
}

export interface BinariesApiGetBinaryAdditionalDetailsStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus
     */
    binaryId: number
}

export interface BinariesApiGetBinaryAdditionalDetailsStatus0Request {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetailsStatus_1
     */
    binaryId: number
}

export interface BinariesApiGetBinaryAdditionalDetails0Request {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryAdditionalDetails_2
     */
    binaryId: number
}

export interface BinariesApiGetBinaryDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDetails
     */
    binaryId: number
}

export interface BinariesApiGetBinaryDieInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryDieInfo
     */
    binaryId: number
}

export interface BinariesApiGetBinaryExternalsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryExternals
     */
    binaryId: number
}

export interface BinariesApiGetBinaryRelatedStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetBinaryRelatedStatus
     */
    binaryId: number
}

export interface BinariesApiGetRelatedBinariesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApigetRelatedBinaries
     */
    binaryId: number
}

export interface BinariesApiV3DownloadBinaryZippedRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3DownloadBinaryZipped
     */
    binaryId: number
}

export interface BinariesApiV3GetBinaryDieInfoRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3GetBinaryDieInfo
     */
    binaryId: number
}

export interface BinariesApiV3GetBinaryExternalsRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3GetBinaryExternals
     */
    binaryId: number
}

export interface BinariesApiV3GetBinaryRelatedRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3GetBinaryRelated
     */
    binaryId: number
}

export interface BinariesApiV3GetBinaryRelatedStatusRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3GetBinaryRelatedStatus
     */
    binaryId: number
}

export interface BinariesApiV3SearchBinariesRequest {
    /**
     * Partial or full binary name to search for
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApiv3SearchBinaries
     */
    partialName?: string
    /**
     * Partial or full SHA-256 hash to search for
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApiv3SearchBinaries
     */
    partialSha256?: string
    /**
     * Restrict results to binaries carrying at least one of these tags
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BinariesApiv3SearchBinaries
     */
    tags?: Array<string>
    /**
     * Restrict results to binaries analysed with this model
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApiv3SearchBinaries
     */
    modelName?: string
    /**
     * Restrict results to files the caller uploaded themself
     * Defaults to: false
     * @type boolean
     * @memberof BinariesApiv3SearchBinaries
     */
    userFilesOnly?: boolean
    /**
     * A binary ID to exclude from the results
     * Defaults to: undefined
     * @type number
     * @memberof BinariesApiv3SearchBinaries
     */
    excludeBinaryId?: number
    /**
     * Restrict results to binaries owned by one of these user IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof BinariesApiv3SearchBinaries
     */
    userIds?: Array<number>
    /**
     * Maximum results to return
     * Minimum: 1
     * Maximum: 50
     * Defaults to: 10
     * @type number
     * @memberof BinariesApiv3SearchBinaries
     */
    limit?: number
    /**
     * Number of results to skip
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof BinariesApiv3SearchBinaries
     */
    offset?: number
}

export interface BinariesApiV3UploadFileRequest {
    /**
     * The file\\\&#39;s raw bytes.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof BinariesApiv3UploadFile
     */
    file: HttpFile
    /**
     * The kind of file being uploaded.
     * Defaults to: undefined
     * @type string
     * @memberof BinariesApiv3UploadFile
     */
    uploadFileType: string
    /**
     * Re-upload and overwrite even if a file with this hash already exists.
     * Defaults to: undefined
     * @type boolean
     * @memberof BinariesApiv3UploadFile
     */
    forceOverwrite?: boolean
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
        return this.api.downloadZippedBinaryWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Downloads a zipped binary with password protection
     * @param param the request object
     */
    public downloadZippedBinary(param: BinariesApiDownloadZippedBinaryRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadZippedBinary(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryAdditionalResponse>> {
        return this.api.getBinaryAdditionalDetailsWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the additional details of a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetails(param: BinariesApiGetBinaryAdditionalDetailsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryAdditionalResponse> {
        return this.api.getBinaryAdditionalDetails(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatusWithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseAdditionalDetailsStatusResponse>> {
        return this.api.getBinaryAdditionalDetailsStatusWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the status of the additional details task for a binary
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatus(param: BinariesApiGetBinaryAdditionalDetailsStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseAdditionalDetailsStatusResponse> {
        return this.api.getBinaryAdditionalDetailsStatus(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatus_1WithHttpInfo(param: BinariesApiGetBinaryAdditionalDetailsStatus0Request, options?: ConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        return this.api.getBinaryAdditionalDetailsStatus_1WithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetailsStatus_1(param: BinariesApiGetBinaryAdditionalDetailsStatus0Request, options?: ConfigurationOptions): Promise<GetAdditionalDetailsStatusOutputBody> {
        return this.api.getBinaryAdditionalDetailsStatus_1(param.binaryId,  options).toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetails_2WithHttpInfo(param: BinariesApiGetBinaryAdditionalDetails0Request, options?: ConfigurationOptions): Promise<HttpInfo<GetAdditionalDetailsOutputBody>> {
        return this.api.getBinaryAdditionalDetails_2WithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param param the request object
     */
    public getBinaryAdditionalDetails_2(param: BinariesApiGetBinaryAdditionalDetails0Request, options?: ConfigurationOptions): Promise<GetAdditionalDetailsOutputBody> {
        return this.api.getBinaryAdditionalDetails_2(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the details of a binary
     * @param param the request object
     */
    public getBinaryDetailsWithHttpInfo(param: BinariesApiGetBinaryDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryDetailsResponse>> {
        return this.api.getBinaryDetailsWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the details of a binary
     * @param param the request object
     */
    public getBinaryDetails(param: BinariesApiGetBinaryDetailsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryDetailsResponse> {
        return this.api.getBinaryDetails(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param param the request object
     */
    public getBinaryDieInfoWithHttpInfo(param: BinariesApiGetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseListDieMatch>> {
        return this.api.getBinaryDieInfoWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the die info of a binary
     * @param param the request object
     */
    public getBinaryDieInfo(param: BinariesApiGetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<BaseResponseListDieMatch> {
        return this.api.getBinaryDieInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param param the request object
     */
    public getBinaryExternalsWithHttpInfo(param: BinariesApiGetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinaryExternalsResponse>> {
        return this.api.getBinaryExternalsWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the external details of a binary
     * @param param the request object
     */
    public getBinaryExternals(param: BinariesApiGetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<BaseResponseBinaryExternalsResponse> {
        return this.api.getBinaryExternals(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param param the request object
     */
    public getBinaryRelatedStatusWithHttpInfo(param: BinariesApiGetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseBinariesRelatedStatusResponse>> {
        return this.api.getBinaryRelatedStatusWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the status of the unpack binary task for a binary
     * @param param the request object
     */
    public getBinaryRelatedStatus(param: BinariesApiGetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<BaseResponseBinariesRelatedStatusResponse> {
        return this.api.getBinaryRelatedStatus(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param param the request object
     */
    public getRelatedBinariesWithHttpInfo(param: BinariesApiGetRelatedBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseChildBinariesResponse>> {
        return this.api.getRelatedBinariesWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Gets the related binaries of a binary.
     * @param param the request object
     */
    public getRelatedBinaries(param: BinariesApiGetRelatedBinariesRequest, options?: ConfigurationOptions): Promise<BaseResponseChildBinariesResponse> {
        return this.api.getRelatedBinaries(param.binaryId,  options).toPromise();
    }

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param param the request object
     */
    public v3DownloadBinaryZippedWithHttpInfo(param: BinariesApiV3DownloadBinaryZippedRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3DownloadBinaryZippedWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param param the request object
     */
    public v3DownloadBinaryZipped(param: BinariesApiV3DownloadBinaryZippedRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3DownloadBinaryZipped(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param param the request object
     */
    public v3GetBinaryDieInfoWithHttpInfo(param: BinariesApiV3GetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetDieInfoOutputBody>> {
        return this.api.v3GetBinaryDieInfoWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param param the request object
     */
    public v3GetBinaryDieInfo(param: BinariesApiV3GetBinaryDieInfoRequest, options?: ConfigurationOptions): Promise<GetDieInfoOutputBody> {
        return this.api.v3GetBinaryDieInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param param the request object
     */
    public v3GetBinaryExternalsWithHttpInfo(param: BinariesApiV3GetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetBinaryExternalsOutputBody>> {
        return this.api.v3GetBinaryExternalsWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param param the request object
     */
    public v3GetBinaryExternals(param: BinariesApiV3GetBinaryExternalsRequest, options?: ConfigurationOptions): Promise<GetBinaryExternalsOutputBody> {
        return this.api.v3GetBinaryExternals(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param param the request object
     */
    public v3GetBinaryRelatedWithHttpInfo(param: BinariesApiV3GetBinaryRelatedRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetRelatedBinariesOutputBody>> {
        return this.api.v3GetBinaryRelatedWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param param the request object
     */
    public v3GetBinaryRelated(param: BinariesApiV3GetBinaryRelatedRequest, options?: ConfigurationOptions): Promise<GetRelatedBinariesOutputBody> {
        return this.api.v3GetBinaryRelated(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param param the request object
     */
    public v3GetBinaryRelatedStatusWithHttpInfo(param: BinariesApiV3GetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetRelatedStatusOutputBody>> {
        return this.api.v3GetBinaryRelatedStatusWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param param the request object
     */
    public v3GetBinaryRelatedStatus(param: BinariesApiV3GetBinaryRelatedStatusRequest, options?: ConfigurationOptions): Promise<GetRelatedStatusOutputBody> {
        return this.api.v3GetBinaryRelatedStatus(param.binaryId,  options).toPromise();
    }

    /**
     * Searches for binaries visible to the caller. At least one of partial_name, partial_sha256, tags, or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search binaries
     * @param param the request object
     */
    public v3SearchBinariesWithHttpInfo(param: BinariesApiV3SearchBinariesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SearchBinariesOutputBody>> {
        return this.api.v3SearchBinariesWithHttpInfo(param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly, param.excludeBinaryId, param.userIds, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Searches for binaries visible to the caller. At least one of partial_name, partial_sha256, tags, or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search binaries
     * @param param the request object
     */
    public v3SearchBinaries(param: BinariesApiV3SearchBinariesRequest = {}, options?: ConfigurationOptions): Promise<SearchBinariesOutputBody> {
        return this.api.v3SearchBinaries(param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly, param.excludeBinaryId, param.userIds, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param param the request object
     */
    public v3UploadFileWithHttpInfo(param: BinariesApiV3UploadFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<UploadOutputBody>> {
        return this.api.v3UploadFileWithHttpInfo(param.file, param.uploadFileType, param.forceOverwrite,  options).toPromise();
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param param the request object
     */
    public v3UploadFile(param: BinariesApiV3UploadFileRequest, options?: ConfigurationOptions): Promise<UploadOutputBody> {
        return this.api.v3UploadFile(param.file, param.uploadFileType, param.forceOverwrite,  options).toPromise();
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

export interface CollectionsApiV3AddCollectionBinariesRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3AddCollectionBinaries
     */
    collectionId: number
    /**
     * 
     * @type AddCollectionBinariesInputBody
     * @memberof CollectionsApiv3AddCollectionBinaries
     */
    addCollectionBinariesInputBody: AddCollectionBinariesInputBody
}

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
     * Partial or full collection name to search for
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApiv3ListCollections
     */
    searchTerm?: string
    /**
     * Only return Collections containing a Binary whose name contains this
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApiv3ListCollections
     */
    binaryName?: string
    /**
     * Only return Collections containing a Binary whose SHA-256 hash contains this
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsApiv3ListCollections
     */
    binarySha256?: string
    /**
     * Only return Collections carrying at least one of these Tags
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CollectionsApiv3ListCollections
     */
    tags?: Array<string>
    /**
     * Restrict results to Collections owned by one of these user IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof CollectionsApiv3ListCollections
     */
    userIds?: Array<number>
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

export interface CollectionsApiV3RemoveCollectionBinariesRequest {
    /**
     * 
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsApiv3RemoveCollectionBinaries
     */
    collectionId: number
    /**
     * 
     * @type RemoveCollectionBinariesInputBody
     * @memberof CollectionsApiv3RemoveCollectionBinaries
     */
    removeCollectionBinariesInputBody: RemoveCollectionBinariesInputBody
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

    /**
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param param the request object
     */
    public v3AddCollectionBinariesWithHttpInfo(param: CollectionsApiV3AddCollectionBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3AddCollectionBinariesWithHttpInfo(param.collectionId, param.addCollectionBinariesInputBody,  options).toPromise();
    }

    /**
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param param the request object
     */
    public v3AddCollectionBinaries(param: CollectionsApiV3AddCollectionBinariesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3AddCollectionBinaries(param.collectionId, param.addCollectionBinariesInputBody,  options).toPromise();
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
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete a collection.
     * @param param the request object
     */
    public v3DeleteCollectionWithHttpInfo(param: CollectionsApiV3DeleteCollectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3DeleteCollectionWithHttpInfo(param.collectionId,  options).toPromise();
    }

    /**
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
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
     * Lists collections accessible to the authenticated user. Supports search by collection name, contained binary name/SHA-256, tags, owner, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param param the request object
     */
    public v3ListCollectionsWithHttpInfo(param: CollectionsApiV3ListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCollectionsOutputBody>> {
        return this.api.v3ListCollectionsWithHttpInfo(param.searchTerm, param.binaryName, param.binarySha256, param.tags, param.userIds, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Lists collections accessible to the authenticated user. Supports search by collection name, contained binary name/SHA-256, tags, owner, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List collections.
     * @param param the request object
     */
    public v3ListCollections(param: CollectionsApiV3ListCollectionsRequest = {}, options?: ConfigurationOptions): Promise<ListCollectionsOutputBody> {
        return this.api.v3ListCollections(param.searchTerm, param.binaryName, param.binarySha256, param.tags, param.userIds, param.filters, param.limit, param.offset, param.orderBy, param.order,  options).toPromise();
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

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param param the request object
     */
    public v3RemoveCollectionBinariesWithHttpInfo(param: CollectionsApiV3RemoveCollectionBinariesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3RemoveCollectionBinariesWithHttpInfo(param.collectionId, param.removeCollectionBinariesInputBody,  options).toPromise();
    }

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param param the request object
     */
    public v3RemoveCollectionBinaries(param: CollectionsApiV3RemoveCollectionBinariesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3RemoveCollectionBinaries(param.collectionId, param.removeCollectionBinariesInputBody,  options).toPromise();
    }

}

import { ObservableConfigApi } from "./ObservableAPI";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";

export interface ConfigApiGetConfigRequest {
}

export interface ConfigApiV3GetConfigRequest {
}

export interface ConfigApiV3GetModelsRequest {
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

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     * @param param the request object
     */
    public v3GetConfigWithHttpInfo(param: ConfigApiV3GetConfigRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetConfigOutputBody>> {
        return this.api.v3GetConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     * @param param the request object
     */
    public v3GetConfig(param: ConfigApiV3GetConfigRequest = {}, options?: ConfigurationOptions): Promise<GetConfigOutputBody> {
        return this.api.v3GetConfig( options).toPromise();
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     * @param param the request object
     */
    public v3GetModelsWithHttpInfo(param: ConfigApiV3GetModelsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetModelsOutputBody>> {
        return this.api.v3GetModelsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     * @param param the request object
     */
    public v3GetModels(param: ConfigApiV3GetModelsRequest = {}, options?: ConfigurationOptions): Promise<GetModelsOutputBody> {
        return this.api.v3GetModels( options).toPromise();
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

import { ObservableDataTypesApi } from "./ObservableAPI";
import { DataTypesApiRequestFactory, DataTypesApiResponseProcessor} from "../apis/DataTypesApi";

export interface DataTypesApiV3CopyFunctionSignaturesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3CopyFunctionSignatures
     */
    analysisId: number
    /**
     * 
     * @type CopyFunctionSignaturesInputBody
     * @memberof DataTypesApiv3CopyFunctionSignatures
     */
    copyFunctionSignaturesInputBody: CopyFunctionSignaturesInputBody
}

export interface DataTypesApiV3CreateAnalysisDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3CreateAnalysisDataTypes
     */
    analysisId: number
    /**
     * 
     * @type CreateAnalysisDataTypesInputBody
     * @memberof DataTypesApiv3CreateAnalysisDataTypes
     */
    createAnalysisDataTypesInputBody: CreateAnalysisDataTypesInputBody
}

export interface DataTypesApiV3GetAnalysisDataTypeRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetAnalysisDataType
     */
    analysisId: number
    /**
     * Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetAnalysisDataType
     */
    dataTypeId: number
}

export interface DataTypesApiV3GetAnalysisDataTypeHistoryRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetAnalysisDataTypeHistory
     */
    analysisId: number
    /**
     * Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetAnalysisDataTypeHistory
     */
    dataTypeId: number
}

export interface DataTypesApiV3GetFunctionSignatureRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetFunctionSignature
     */
    analysisId: number
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetFunctionSignature
     */
    functionId: number
    /**
     * Include the data types the signature names in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DataTypesApiv3GetFunctionSignature
     */
    includeDataTypes?: boolean
}

export interface DataTypesApiV3GetFunctionSignatureHistoryRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetFunctionSignatureHistory
     */
    analysisId: number
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3GetFunctionSignatureHistory
     */
    functionId: number
}

export interface DataTypesApiV3ListAnalysisDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    analysisId: number
    /**
     * Pagination offset.
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    offset?: number
    /**
     * Page size.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: 100
     * @type number
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    limit?: number
    /**
     * Only return types of these kinds. Repeat for more than one; empty means no filter.
     * Defaults to: undefined
     * @type Array&lt;&#39;STRUCT&#39; | &#39;UNION&#39; | &#39;ENUM&#39; | &#39;TYPEDEF&#39; | &#39;POINTER&#39; | &#39;ARRAY&#39; | &#39;FUNCTION_DEFINITION&#39; | &#39;BITFIELD&#39; | &#39;BASE&#39; | &#39;UNKNOWN&#39;&gt;
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    kind?: Array<'STRUCT' | 'UNION' | 'ENUM' | 'TYPEDEF' | 'POINTER' | 'ARRAY' | 'FUNCTION_DEFINITION' | 'BITFIELD' | 'BASE' | 'UNKNOWN'>
    /**
     * Only return types in these namespaces, matched exactly. Omit for no filter; pass an empty value (namespace&#x3D;) for the binary\&#39;s own types, which have no namespace.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    namespace?: Array<string>
    /**
     * Only return types whose name contains this term. Wildcards in the term are matched literally.
     * Defaults to: undefined
     * @type string
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    search?: string
    /**
     * Only return types from these sources. Empty means no filter.
     * Defaults to: undefined
     * @type Array&lt;&#39;SYSTEM&#39; | &#39;USER&#39; | &#39;AUTO_UNSTRIP&#39; | &#39;AI_DECOMP&#39;&gt;
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    sourceType?: Array<'SYSTEM' | 'USER' | 'AUTO_UNSTRIP' | 'AI_DECOMP'>
    /**
     * Field to order by. name orders by namespace, then name, then kind; size orders by size with types of unknown size last, then by namespace, name and kind.
     * Defaults to: &#39;name&#39;
     * @type &#39;name&#39; | &#39;size&#39;
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    orderBy?: 'name' | 'size'
    /**
     * Sort direction.
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof DataTypesApiv3ListAnalysisDataTypes
     */
    order?: 'ASC' | 'DESC'
}

export interface DataTypesApiV3ListDataTypeFunctionsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3ListDataTypeFunctions
     */
    analysisId: number
    /**
     * Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3ListDataTypeFunctions
     */
    dataTypeId: number
    /**
     * Page size.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof DataTypesApiv3ListDataTypeFunctions
     */
    pageSize?: number
    /**
     * Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function.
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof DataTypesApiv3ListDataTypeFunctions
     */
    afterFunctionId?: number
}

export interface DataTypesApiV3ListFunctionSignaturesRequest {
    /**
     * Function IDs to fetch signatures for.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DataTypesApiv3ListFunctionSignatures
     */
    functionIds: Array<number>
    /**
     * Include the data types the signatures name in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DataTypesApiv3ListFunctionSignatures
     */
    includeDataTypes?: boolean
}

export interface DataTypesApiV3UpdateAnalysisDataTypesRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3UpdateAnalysisDataTypes
     */
    analysisId: number
    /**
     * 
     * @type UpdateAnalysisDataTypesInputBody
     * @memberof DataTypesApiv3UpdateAnalysisDataTypes
     */
    updateAnalysisDataTypesInputBody: UpdateAnalysisDataTypesInputBody
}

export interface DataTypesApiV3UpdateFunctionSignatureRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3UpdateFunctionSignature
     */
    analysisId: number
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DataTypesApiv3UpdateFunctionSignature
     */
    functionId: number
    /**
     * 
     * @type UpdateFunctionSignatureInputBody
     * @memberof DataTypesApiv3UpdateFunctionSignature
     */
    updateFunctionSignatureInputBody: UpdateFunctionSignatureInputBody
}

export class ObjectDataTypesApi {
    private api: ObservableDataTypesApi

    public constructor(configuration: Configuration, requestFactory?: DataTypesApiRequestFactory, responseProcessor?: DataTypesApiResponseProcessor) {
        this.api = new ObservableDataTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param param the request object
     */
    public v3CopyFunctionSignaturesWithHttpInfo(param: DataTypesApiV3CopyFunctionSignaturesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CopyFunctionSignaturesOutputBody>> {
        return this.api.v3CopyFunctionSignaturesWithHttpInfo(param.analysisId, param.copyFunctionSignaturesInputBody,  options).toPromise();
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param param the request object
     */
    public v3CopyFunctionSignatures(param: DataTypesApiV3CopyFunctionSignaturesRequest, options?: ConfigurationOptions): Promise<CopyFunctionSignaturesOutputBody> {
        return this.api.v3CopyFunctionSignatures(param.analysisId, param.copyFunctionSignaturesInputBody,  options).toPromise();
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param param the request object
     */
    public v3CreateAnalysisDataTypesWithHttpInfo(param: DataTypesApiV3CreateAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisDataTypesOutputBody>> {
        return this.api.v3CreateAnalysisDataTypesWithHttpInfo(param.analysisId, param.createAnalysisDataTypesInputBody,  options).toPromise();
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param param the request object
     */
    public v3CreateAnalysisDataTypes(param: DataTypesApiV3CreateAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<AnalysisDataTypesOutputBody> {
        return this.api.v3CreateAnalysisDataTypes(param.analysisId, param.createAnalysisDataTypesInputBody,  options).toPromise();
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param param the request object
     */
    public v3GetAnalysisDataTypeWithHttpInfo(param: DataTypesApiV3GetAnalysisDataTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataTypeEntry>> {
        return this.api.v3GetAnalysisDataTypeWithHttpInfo(param.analysisId, param.dataTypeId,  options).toPromise();
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param param the request object
     */
    public v3GetAnalysisDataType(param: DataTypesApiV3GetAnalysisDataTypeRequest, options?: ConfigurationOptions): Promise<DataTypeEntry> {
        return this.api.v3GetAnalysisDataType(param.analysisId, param.dataTypeId,  options).toPromise();
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param param the request object
     */
    public v3GetAnalysisDataTypeHistoryWithHttpInfo(param: DataTypesApiV3GetAnalysisDataTypeHistoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetDataTypeHistoryBody>> {
        return this.api.v3GetAnalysisDataTypeHistoryWithHttpInfo(param.analysisId, param.dataTypeId,  options).toPromise();
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param param the request object
     */
    public v3GetAnalysisDataTypeHistory(param: DataTypesApiV3GetAnalysisDataTypeHistoryRequest, options?: ConfigurationOptions): Promise<GetDataTypeHistoryBody> {
        return this.api.v3GetAnalysisDataTypeHistory(param.analysisId, param.dataTypeId,  options).toPromise();
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param param the request object
     */
    public v3GetFunctionSignatureWithHttpInfo(param: DataTypesApiV3GetFunctionSignatureRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionSignatureBody>> {
        return this.api.v3GetFunctionSignatureWithHttpInfo(param.analysisId, param.functionId, param.includeDataTypes,  options).toPromise();
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param param the request object
     */
    public v3GetFunctionSignature(param: DataTypesApiV3GetFunctionSignatureRequest, options?: ConfigurationOptions): Promise<FunctionSignatureBody> {
        return this.api.v3GetFunctionSignature(param.analysisId, param.functionId, param.includeDataTypes,  options).toPromise();
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param param the request object
     */
    public v3GetFunctionSignatureHistoryWithHttpInfo(param: DataTypesApiV3GetFunctionSignatureHistoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetFunctionSignatureHistoryBody>> {
        return this.api.v3GetFunctionSignatureHistoryWithHttpInfo(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param param the request object
     */
    public v3GetFunctionSignatureHistory(param: DataTypesApiV3GetFunctionSignatureHistoryRequest, options?: ConfigurationOptions): Promise<GetFunctionSignatureHistoryBody> {
        return this.api.v3GetFunctionSignatureHistory(param.analysisId, param.functionId,  options).toPromise();
    }

    /**
     * Paginated, filterable list of the data types extracted from the binary — structs, unions, enums, typedefs and the rest. Every entry carries its full definition, so paging this list once resolves every `data_type_id` a definition or signature refers to; no follow-up request per id is needed.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List an analysis\'s data types
     * @param param the request object
     */
    public v3ListAnalysisDataTypesWithHttpInfo(param: DataTypesApiV3ListAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAnalysisDataTypesOutputBody>> {
        return this.api.v3ListAnalysisDataTypesWithHttpInfo(param.analysisId, param.offset, param.limit, param.kind, param.namespace, param.search, param.sourceType, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Paginated, filterable list of the data types extracted from the binary — structs, unions, enums, typedefs and the rest. Every entry carries its full definition, so paging this list once resolves every `data_type_id` a definition or signature refers to; no follow-up request per id is needed.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List an analysis\'s data types
     * @param param the request object
     */
    public v3ListAnalysisDataTypes(param: DataTypesApiV3ListAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<ListAnalysisDataTypesOutputBody> {
        return this.api.v3ListAnalysisDataTypes(param.analysisId, param.offset, param.limit, param.kind, param.namespace, param.search, param.sourceType, param.orderBy, param.order,  options).toPromise();
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param param the request object
     */
    public v3ListDataTypeFunctionsWithHttpInfo(param: DataTypesApiV3ListDataTypeFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListDataTypeFunctionsBody>> {
        return this.api.v3ListDataTypeFunctionsWithHttpInfo(param.analysisId, param.dataTypeId, param.pageSize, param.afterFunctionId,  options).toPromise();
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param param the request object
     */
    public v3ListDataTypeFunctions(param: DataTypesApiV3ListDataTypeFunctionsRequest, options?: ConfigurationOptions): Promise<ListDataTypeFunctionsBody> {
        return this.api.v3ListDataTypeFunctions(param.analysisId, param.dataTypeId, param.pageSize, param.afterFunctionId,  options).toPromise();
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param param the request object
     */
    public v3ListFunctionSignaturesWithHttpInfo(param: DataTypesApiV3ListFunctionSignaturesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFunctionSignaturesOutputBody>> {
        return this.api.v3ListFunctionSignaturesWithHttpInfo(param.functionIds, param.includeDataTypes,  options).toPromise();
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param param the request object
     */
    public v3ListFunctionSignatures(param: DataTypesApiV3ListFunctionSignaturesRequest, options?: ConfigurationOptions): Promise<ListFunctionSignaturesOutputBody> {
        return this.api.v3ListFunctionSignatures(param.functionIds, param.includeDataTypes,  options).toPromise();
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param param the request object
     */
    public v3UpdateAnalysisDataTypesWithHttpInfo(param: DataTypesApiV3UpdateAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalysisDataTypesOutputBody>> {
        return this.api.v3UpdateAnalysisDataTypesWithHttpInfo(param.analysisId, param.updateAnalysisDataTypesInputBody,  options).toPromise();
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param param the request object
     */
    public v3UpdateAnalysisDataTypes(param: DataTypesApiV3UpdateAnalysisDataTypesRequest, options?: ConfigurationOptions): Promise<AnalysisDataTypesOutputBody> {
        return this.api.v3UpdateAnalysisDataTypes(param.analysisId, param.updateAnalysisDataTypesInputBody,  options).toPromise();
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param param the request object
     */
    public v3UpdateFunctionSignatureWithHttpInfo(param: DataTypesApiV3UpdateFunctionSignatureRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionSignatureEntry>> {
        return this.api.v3UpdateFunctionSignatureWithHttpInfo(param.analysisId, param.functionId, param.updateFunctionSignatureInputBody,  options).toPromise();
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param param the request object
     */
    public v3UpdateFunctionSignature(param: DataTypesApiV3UpdateFunctionSignatureRequest, options?: ConfigurationOptions): Promise<FunctionSignatureEntry> {
        return this.api.v3UpdateFunctionSignature(param.analysisId, param.functionId, param.updateFunctionSignatureInputBody,  options).toPromise();
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

export interface ExternalSourcesApiV3GetVirustotalScanOperationRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ExternalSourcesApiv3GetVirustotalScanOperation
     */
    binaryId: number
}

export interface ExternalSourcesApiV3RunVirustotalScanRequest {
    /**
     * Binary ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ExternalSourcesApiv3RunVirustotalScan
     */
    binaryId: number
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

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param param the request object
     */
    public v3GetVirustotalScanOperationWithHttpInfo(param: ExternalSourcesApiV3GetVirustotalScanOperationRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        return this.api.v3GetVirustotalScanOperationWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param param the request object
     */
    public v3GetVirustotalScanOperation(param: ExternalSourcesApiV3GetVirustotalScanOperationRequest, options?: ConfigurationOptions): Promise<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        return this.api.v3GetVirustotalScanOperation(param.binaryId,  options).toPromise();
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param param the request object
     */
    public v3RunVirustotalScanWithHttpInfo(param: ExternalSourcesApiV3RunVirustotalScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        return this.api.v3RunVirustotalScanWithHttpInfo(param.binaryId,  options).toPromise();
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param param the request object
     */
    public v3RunVirustotalScan(param: ExternalSourcesApiV3RunVirustotalScanRequest, options?: ConfigurationOptions): Promise<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        return this.api.v3RunVirustotalScan(param.binaryId,  options).toPromise();
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
     * LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * Minimum: -1
     * Maximum: 1
     * Defaults to: -1
     * @type number
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    temperature?: number
    /**
     * Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off.
     * Defaults to: true
     * @type boolean
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    typeSuggestions?: boolean
    /**
     * Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     * Defaults to: true
     * @type boolean
     * @memberof FunctionsAIDecompilationApicreateAiDecompilation
     */
    applyTypes?: boolean
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

export interface FunctionsAIDecompilationApiGetAiDecompilationRatingRequest {
    /**
     * The ID of the function for which to get the rating
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApigetAiDecompilationRating
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

export interface FunctionsAIDecompilationApiV3AcceptAiDecompilationTypeSuggestionsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3AcceptAiDecompilationTypeSuggestions
     */
    functionId: number
    /**
     * 
     * @type AcceptTypeSuggestionsInputBody
     * @memberof FunctionsAIDecompilationApiv3AcceptAiDecompilationTypeSuggestions
     */
    acceptTypeSuggestionsInputBody: AcceptTypeSuggestionsInputBody
}

export interface FunctionsAIDecompilationApiV3GetAiDecompilationLineAttributionsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3GetAiDecompilationLineAttributions
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiV3GetAiDecompilationRatingRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3GetAiDecompilationRating
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiV3GetAiDecompilationTokensRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3GetAiDecompilationTokens
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3GetAiDecompilationTypeSuggestions
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsStatusRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3GetAiDecompilationTypeSuggestionsStatus
     */
    functionId: number
}

export interface FunctionsAIDecompilationApiV3RegenerateAiDecompilationTypeSuggestionsRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3RegenerateAiDecompilationTypeSuggestions
     */
    functionId: number
    /**
     * Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     * Defaults to: true
     * @type boolean
     * @memberof FunctionsAIDecompilationApiv3RegenerateAiDecompilationTypeSuggestions
     */
    applyTypes?: boolean
}

export interface FunctionsAIDecompilationApiV3UpsertAiDecompilationOverridesRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3UpsertAiDecompilationOverrides
     */
    functionId: number
    /**
     * 
     * @type UpsertOverridesInputBody
     * @memberof FunctionsAIDecompilationApiv3UpsertAiDecompilationOverrides
     */
    upsertOverridesInputBody: UpsertOverridesInputBody
}

export interface FunctionsAIDecompilationApiV3UpsertAiDecompilationRatingRequest {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsAIDecompilationApiv3UpsertAiDecompilationRating
     */
    functionId: number
    /**
     * 
     * @type UpsertRatingInputBody
     * @memberof FunctionsAIDecompilationApiv3UpsertAiDecompilationRating
     */
    upsertRatingInputBody: UpsertRatingInputBody
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
        return this.api.createAiDecompilationWithHttpInfo(param.functionId, param.temperature, param.typeSuggestions, param.applyTypes,  options).toPromise();
    }

    /**
     * Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Start AI decompilation
     * @param param the request object
     */
    public createAiDecompilation(param: FunctionsAIDecompilationApiCreateAiDecompilationRequest, options?: ConfigurationOptions): Promise<CreateAIDecompOutputBody> {
        return this.api.createAiDecompilation(param.functionId, param.temperature, param.typeSuggestions, param.applyTypes,  options).toPromise();
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
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation inline comments
     * @param param the request object
     */
    public regenerateAiDecompilationInlineCommentsWithHttpInfo(param: FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        return this.api.regenerateAiDecompilationInlineCommentsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation inline comments
     * @param param the request object
     */
    public regenerateAiDecompilationInlineComments(param: FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest, options?: ConfigurationOptions): Promise<RegenerateOutputBody> {
        return this.api.regenerateAiDecompilationInlineComments(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation summary
     * @param param the request object
     */
    public regenerateAiDecompilationSummaryWithHttpInfo(param: FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        return this.api.regenerateAiDecompilationSummaryWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation summary
     * @param param the request object
     */
    public regenerateAiDecompilationSummary(param: FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest, options?: ConfigurationOptions): Promise<RegenerateOutputBody> {
        return this.api.regenerateAiDecompilationSummary(param.functionId,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param param the request object
     */
    public streamAiDecompilationWithHttpInfo(param: FunctionsAIDecompilationApiStreamAiDecompilationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<StreamAiDecompilation200ResponseInner>>> {
        return this.api.streamAiDecompilationWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param param the request object
     */
    public streamAiDecompilation(param: FunctionsAIDecompilationApiStreamAiDecompilationRequest, options?: ConfigurationOptions): Promise<Array<StreamAiDecompilation200ResponseInner>> {
        return this.api.streamAiDecompilation(param.functionId,  options).toPromise();
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

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param param the request object
     */
    public v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(param: FunctionsAIDecompilationApiV3AcceptAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<AcceptTypeSuggestionsOutputBody>> {
        return this.api.v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(param.functionId, param.acceptTypeSuggestionsInputBody,  options).toPromise();
    }

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param param the request object
     */
    public v3AcceptAiDecompilationTypeSuggestions(param: FunctionsAIDecompilationApiV3AcceptAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<AcceptTypeSuggestionsOutputBody> {
        return this.api.v3AcceptAiDecompilationTypeSuggestions(param.functionId, param.acceptTypeSuggestionsInputBody,  options).toPromise();
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param param the request object
     */
    public v3GetAiDecompilationLineAttributionsWithHttpInfo(param: FunctionsAIDecompilationApiV3GetAiDecompilationLineAttributionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LineAttributionsData>> {
        return this.api.v3GetAiDecompilationLineAttributionsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param param the request object
     */
    public v3GetAiDecompilationLineAttributions(param: FunctionsAIDecompilationApiV3GetAiDecompilationLineAttributionsRequest, options?: ConfigurationOptions): Promise<LineAttributionsData> {
        return this.api.v3GetAiDecompilationLineAttributions(param.functionId,  options).toPromise();
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param param the request object
     */
    public v3GetAiDecompilationRatingWithHttpInfo(param: FunctionsAIDecompilationApiV3GetAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<HttpInfo<RatingOutputBody>> {
        return this.api.v3GetAiDecompilationRatingWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param param the request object
     */
    public v3GetAiDecompilationRating(param: FunctionsAIDecompilationApiV3GetAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<RatingOutputBody> {
        return this.api.v3GetAiDecompilationRating(param.functionId,  options).toPromise();
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param param the request object
     */
    public v3GetAiDecompilationTokensWithHttpInfo(param: FunctionsAIDecompilationApiV3GetAiDecompilationTokensRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetTokensResponse>> {
        return this.api.v3GetAiDecompilationTokensWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param param the request object
     */
    public v3GetAiDecompilationTokens(param: FunctionsAIDecompilationApiV3GetAiDecompilationTokensRequest, options?: ConfigurationOptions): Promise<GetTokensResponse> {
        return this.api.v3GetAiDecompilationTokens(param.functionId,  options).toPromise();
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param param the request object
     */
    public v3GetAiDecompilationTypeSuggestionsWithHttpInfo(param: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TypeSuggestionsData>> {
        return this.api.v3GetAiDecompilationTypeSuggestionsWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param param the request object
     */
    public v3GetAiDecompilationTypeSuggestions(param: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<TypeSuggestionsData> {
        return this.api.v3GetAiDecompilationTypeSuggestions(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param param the request object
     */
    public v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(param: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkflowProgress>> {
        return this.api.v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param param the request object
     */
    public v3GetAiDecompilationTypeSuggestionsStatus(param: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsStatusRequest, options?: ConfigurationOptions): Promise<WorkflowProgress> {
        return this.api.v3GetAiDecompilationTypeSuggestionsStatus(param.functionId,  options).toPromise();
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param param the request object
     */
    public v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(param: FunctionsAIDecompilationApiV3RegenerateAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RegenerateOutputBody>> {
        return this.api.v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(param.functionId, param.applyTypes,  options).toPromise();
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param param the request object
     */
    public v3RegenerateAiDecompilationTypeSuggestions(param: FunctionsAIDecompilationApiV3RegenerateAiDecompilationTypeSuggestionsRequest, options?: ConfigurationOptions): Promise<RegenerateOutputBody> {
        return this.api.v3RegenerateAiDecompilationTypeSuggestions(param.functionId, param.applyTypes,  options).toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param param the request object
     */
    public v3UpsertAiDecompilationOverridesWithHttpInfo(param: FunctionsAIDecompilationApiV3UpsertAiDecompilationOverridesRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpsertOverridesData>> {
        return this.api.v3UpsertAiDecompilationOverridesWithHttpInfo(param.functionId, param.upsertOverridesInputBody,  options).toPromise();
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param param the request object
     */
    public v3UpsertAiDecompilationOverrides(param: FunctionsAIDecompilationApiV3UpsertAiDecompilationOverridesRequest, options?: ConfigurationOptions): Promise<UpsertOverridesData> {
        return this.api.v3UpsertAiDecompilationOverrides(param.functionId, param.upsertOverridesInputBody,  options).toPromise();
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param param the request object
     */
    public v3UpsertAiDecompilationRatingWithHttpInfo(param: FunctionsAIDecompilationApiV3UpsertAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v3UpsertAiDecompilationRatingWithHttpInfo(param.functionId, param.upsertRatingInputBody,  options).toPromise();
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param param the request object
     */
    public v3UpsertAiDecompilationRating(param: FunctionsAIDecompilationApiV3UpsertAiDecompilationRatingRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v3UpsertAiDecompilationRating(param.functionId, param.upsertRatingInputBody,  options).toPromise();
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

export interface FunctionsCoreApiGetFunctionBlocks0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionBlocks_1
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

export interface FunctionsCoreApiGetFunctionCalleesCallers0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCalleesCallers_2
     */
    functionId: number
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

export interface FunctionsCoreApiGetFunctionCapabilities0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionCapabilities_3
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

export interface FunctionsCoreApiGetFunctionDetails0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionDetails_4
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

export interface FunctionsCoreApiGetFunctionStrings0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings_5
     */
    functionId: number
    /**
     * Page number (1-indexed).
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings_5
     */
    page?: number
    /**
     * Number of results per page.
     * Minimum: 1
     * Maximum: 500
     * Defaults to: 100
     * @type number
     * @memberof FunctionsCoreApigetFunctionStrings_5
     */
    pageSize?: number
    /**
     * Filter by string value (case-insensitive substring match).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApigetFunctionStrings_5
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

export interface FunctionsCoreApiV3GetAnalysisFuncMapsRequest {
    /**
     * Analysis ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsCoreApiv3GetAnalysisFuncMaps
     */
    analysisId: number
}

export interface FunctionsCoreApiV3SearchFunctionsRequest {
    /**
     * Partial or full function name to search for
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApiv3SearchFunctions
     */
    partialName?: string
    /**
     * Restrict results to functions analysed with this model
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsCoreApiv3SearchFunctions
     */
    modelName?: string
    /**
     * Maximum results to return
     * Minimum: 1
     * Maximum: 50
     * Defaults to: 10
     * @type number
     * @memberof FunctionsCoreApiv3SearchFunctions
     */
    limit?: number
    /**
     * Number of results to skip
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof FunctionsCoreApiv3SearchFunctions
     */
    offset?: number
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
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get function disassembly
     * @param param the request object
     */
    public getFunctionBlocks_1WithHttpInfo(param: FunctionsCoreApiGetFunctionBlocks0Request, options?: ConfigurationOptions): Promise<HttpInfo<DisassemblyOutputBody>> {
        return this.api.getFunctionBlocks_1WithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get function disassembly
     * @param param the request object
     */
    public getFunctionBlocks_1(param: FunctionsCoreApiGetFunctionBlocks0Request, options?: ConfigurationOptions): Promise<DisassemblyOutputBody> {
        return this.api.getFunctionBlocks_1(param.functionId,  options).toPromise();
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
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param param the request object
     */
    public getFunctionCalleesCallers_2WithHttpInfo(param: FunctionsCoreApiGetFunctionCalleesCallers0Request, options?: ConfigurationOptions): Promise<HttpInfo<CallEdgesOutputBody>> {
        return this.api.getFunctionCalleesCallers_2WithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param param the request object
     */
    public getFunctionCalleesCallers_2(param: FunctionsCoreApiGetFunctionCalleesCallers0Request, options?: ConfigurationOptions): Promise<CallEdgesOutputBody> {
        return this.api.getFunctionCalleesCallers_2(param.functionId,  options).toPromise();
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
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param param the request object
     */
    public getFunctionCapabilities_3WithHttpInfo(param: FunctionsCoreApiGetFunctionCapabilities0Request, options?: ConfigurationOptions): Promise<HttpInfo<CapabilitiesOutputBody>> {
        return this.api.getFunctionCapabilities_3WithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param param the request object
     */
    public getFunctionCapabilities_3(param: FunctionsCoreApiGetFunctionCapabilities0Request, options?: ConfigurationOptions): Promise<CapabilitiesOutputBody> {
        return this.api.getFunctionCapabilities_3(param.functionId,  options).toPromise();
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
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param param the request object
     */
    public getFunctionDetails_4WithHttpInfo(param: FunctionsCoreApiGetFunctionDetails0Request, options?: ConfigurationOptions): Promise<HttpInfo<FunctionDetailsOutputBody>> {
        return this.api.getFunctionDetails_4WithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param param the request object
     */
    public getFunctionDetails_4(param: FunctionsCoreApiGetFunctionDetails0Request, options?: ConfigurationOptions): Promise<FunctionDetailsOutputBody> {
        return this.api.getFunctionDetails_4(param.functionId,  options).toPromise();
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

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param param the request object
     */
    public getFunctionStrings_5WithHttpInfo(param: FunctionsCoreApiGetFunctionStrings0Request, options?: ConfigurationOptions): Promise<HttpInfo<ListFunctionStringsOutputBody>> {
        return this.api.getFunctionStrings_5WithHttpInfo(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param param the request object
     */
    public getFunctionStrings_5(param: FunctionsCoreApiGetFunctionStrings0Request, options?: ConfigurationOptions): Promise<ListFunctionStringsOutputBody> {
        return this.api.getFunctionStrings_5(param.functionId, param.page, param.pageSize, param.search,  options).toPromise();
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

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param param the request object
     */
    public v3GetAnalysisFuncMapsWithHttpInfo(param: FunctionsCoreApiV3GetAnalysisFuncMapsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetFunctionMapsOutputBody>> {
        return this.api.v3GetAnalysisFuncMapsWithHttpInfo(param.analysisId,  options).toPromise();
    }

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param param the request object
     */
    public v3GetAnalysisFuncMaps(param: FunctionsCoreApiV3GetAnalysisFuncMapsRequest, options?: ConfigurationOptions): Promise<GetFunctionMapsOutputBody> {
        return this.api.v3GetAnalysisFuncMaps(param.analysisId,  options).toPromise();
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param param the request object
     */
    public v3SearchFunctionsWithHttpInfo(param: FunctionsCoreApiV3SearchFunctionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SearchFunctionsOutputBody>> {
        return this.api.v3SearchFunctionsWithHttpInfo(param.partialName, param.modelName, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param param the request object
     */
    public v3SearchFunctions(param: FunctionsCoreApiV3SearchFunctionsRequest = {}, options?: ConfigurationOptions): Promise<SearchFunctionsOutputBody> {
        return this.api.v3SearchFunctions(param.partialName, param.modelName, param.limit, param.offset,  options).toPromise();
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

export interface FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApigetFunctionNameHistory
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

export interface FunctionsRenamingHistoryApiRevertFunctionName0Request {
    /**
     * Function ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirevertFunctionName_1
     */
    functionId: number
    /**
     * History ID to revert to
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsRenamingHistoryApirevertFunctionName_1
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
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
     * Batch rename functions
     * @param param the request object
     */
    public batchRenameFunctionsWithHttpInfo(param: FunctionsRenamingHistoryApiBatchRenameFunctionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchRenameOutputBody>> {
        return this.api.batchRenameFunctionsWithHttpInfo(param.batchRenameInputBody,  options).toPromise();
    }

    /**
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
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
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param param the request object
     */
    public renameFunctionWithHttpInfo(param: FunctionsRenamingHistoryApiRenameFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RenameOutputBody>> {
        return this.api.renameFunctionWithHttpInfo(param.functionId, param.renameInputBody,  options).toPromise();
    }

    /**
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param param the request object
     */
    public renameFunction(param: FunctionsRenamingHistoryApiRenameFunctionRequest, options?: ConfigurationOptions): Promise<RenameOutputBody> {
        return this.api.renameFunction(param.functionId, param.renameInputBody,  options).toPromise();
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

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param param the request object
     */
    public revertFunctionName_1WithHttpInfo(param: FunctionsRenamingHistoryApiRevertFunctionName0Request, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.revertFunctionName_1WithHttpInfo(param.functionId, param.historyId,  options).toPromise();
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param param the request object
     */
    public revertFunctionName_1(param: FunctionsRenamingHistoryApiRevertFunctionName0Request, options?: ConfigurationOptions): Promise<any> {
        return this.api.revertFunctionName_1(param.functionId, param.historyId,  options).toPromise();
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
    /**
     * A binary ID to exclude from the results
     * Defaults to: undefined
     * @type number
     * @memberof SearchApisearchBinaries
     */
    excludeBinaryId?: number
    /**
     * Restrict the search to binaries owned by these user IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof SearchApisearchBinaries
     */
    userIds?: Array<number>
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
    /**
     * Restrict the search to collections owned by these user IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof SearchApisearchCollections
     */
    userIds?: Array<number>
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
        return this.api.searchBinariesWithHttpInfo(param.page, param.pageSize, param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly, param.excludeBinaryId, param.userIds,  options).toPromise();
    }

    /**
     * Searches for a specific binary
     * Binaries search
     * @param param the request object
     */
    public searchBinaries(param: SearchApiSearchBinariesRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseBinarySearchResponse> {
        return this.api.searchBinaries(param.page, param.pageSize, param.partialName, param.partialSha256, param.tags, param.modelName, param.userFilesOnly, param.excludeBinaryId, param.userIds,  options).toPromise();
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param param the request object
     */
    public searchCollectionsWithHttpInfo(param: SearchApiSearchCollectionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BaseResponseCollectionSearchResponse>> {
        return this.api.searchCollectionsWithHttpInfo(param.page, param.pageSize, param.partialCollectionName, param.partialBinaryName, param.partialBinarySha256, param.tags, param.filters, param.orderBy, param.orderByDirection, param.userIds,  options).toPromise();
    }

    /**
     * Searches for a specific collection
     * Collections search
     * @param param the request object
     */
    public searchCollections(param: SearchApiSearchCollectionsRequest = {}, options?: ConfigurationOptions): Promise<BaseResponseCollectionSearchResponse> {
        return this.api.searchCollections(param.page, param.pageSize, param.partialCollectionName, param.partialBinaryName, param.partialBinarySha256, param.tags, param.filters, param.orderBy, param.orderByDirection, param.userIds,  options).toPromise();
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
