import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class ObservableAgentApi {
    private requestFactory: AgentApiRequestFactory;
    private responseProcessor: AgentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentApiResponseProcessor();
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param analysisId
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a capabilities analysis workflow
     * @param analysisId
     */
    public checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a protocols discovery workflow
     * @param analysisId
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a protocols discovery workflow
     * @param analysisId
     */
    public checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param analysisId
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a remediation analysis workflow
     * @param analysisId
     */
    public checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a report analysis workflow
     * @param analysisId
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a report analysis workflow
     * @param analysisId
     */
    public checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a secrets discovery workflow
     * @param analysisId
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a secrets discovery workflow
     * @param analysisId
     */
    public checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a triage analysis workflow
     * @param analysisId
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TaskStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a triage analysis workflow
     * @param analysisId
     */
    public checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(analysisId: number, _options?: ConfigurationOptions): Observable<TaskStatusResponse> {
        return this.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<TaskStatusResponse>) => apiResponse.data));
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param analysisId
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a capabilities analysis workflow process
     * @param analysisId
     */
    public createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseQueuedWorkflowTaskResponse> {
        return this.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseQueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Queues a protocols discovery workflow process
     * @param analysisId
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a protocols discovery workflow process
     * @param analysisId
     */
    public createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseQueuedWorkflowTaskResponse> {
        return this.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseQueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Queues a remediation analysis workflow process
     * @param analysisId
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a remediation analysis workflow process
     * @param analysisId
     */
    public createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseQueuedWorkflowTaskResponse> {
        return this.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseQueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Queues a combined report analysis workflow process
     * @param analysisId
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a combined report analysis workflow process
     * @param analysisId
     */
    public createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(analysisId: number, _options?: ConfigurationOptions): Observable<QueuedWorkflowTaskResponse> {
        return this.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<QueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Queues a secrets discovery workflow process
     * @param analysisId
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a secrets discovery workflow process
     * @param analysisId
     */
    public createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseQueuedWorkflowTaskResponse> {
        return this.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseQueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Queues a triage analysis workflow process
     * @param analysisId
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseQueuedWorkflowTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queues a triage analysis workflow process
     * @param analysisId
     */
    public createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseQueuedWorkflowTaskResponse> {
        return this.createTriageTaskV2AnalysesAnalysisIdAgentTriagePostWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseQueuedWorkflowTaskResponse>) => apiResponse.data));
    }

    /**
     * Get Capabilities Result
     * @param analysisId
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCapabilitiesAgentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Capabilities Result
     * @param analysisId
     */
    public getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseCapabilitiesAgentResponse> {
        return this.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCapabilitiesAgentResponse>) => apiResponse.data));
    }

    /**
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param analysisId
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseProtocolsAgentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the protocols report, including metadata, findings, and evidence.
     * Get Protocols Result
     * @param analysisId
     */
    public getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseProtocolsAgentResponse> {
        return this.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseProtocolsAgentResponse>) => apiResponse.data));
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param analysisId
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseRemediationAgentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules
     * Get Remediation Result
     * @param analysisId
     */
    public getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseRemediationAgentResponse> {
        return this.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseRemediationAgentResponse>) => apiResponse.data));
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param analysisId
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseReportAnalysisResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule
     * Get Report Analysis Result
     * @param analysisId
     */
    public getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseReportAnalysisResponse> {
        return this.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseReportAnalysisResponse>) => apiResponse.data));
    }

    /**
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param analysisId
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseSecretsAgentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the secrets report, including metadata, findings, and evidence.
     * Get Secrets Result
     * @param analysisId
     */
    public getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseSecretsAgentResponse> {
        return this.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseSecretsAgentResponse>) => apiResponse.data));
    }

    /**
     * Get Triage Result
     * @param analysisId
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseTriageReportResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTriageResultV2AnalysesAnalysisIdAgentTriageGet(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Triage Result
     * @param analysisId
     */
    public getTriageResultV2AnalysesAnalysisIdAgentTriageGet(analysisId: number, _options?: ConfigurationOptions): Observable<BaseResponseTriageReportResponse> {
        return this.getTriageResultV2AnalysesAnalysisIdAgentTriageGetWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseTriageReportResponse>) => apiResponse.data));
    }

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     */
    public v3CancelRenameUnnamedFunctionsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CancelRenameUnnamedFunctions(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CancelRenameUnnamedFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     */
    public v3CancelRenameUnnamedFunctions(analysisId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.v3CancelRenameUnnamedFunctionsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3CancelSecurityScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CancelSecurityScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CancelSecurityScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run
     * Cancel a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3CancelSecurityScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.v3CancelSecurityScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     */
    public v3GetBinaryAgentFeedbackWithHttpInfo(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', _options?: ConfigurationOptions): Observable<HttpInfo<FeedbackOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryAgentFeedback(analysisId, agent, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryAgentFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the caller\'s feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     */
    public v3GetBinaryAgentFeedback(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', _options?: ConfigurationOptions): Observable<FeedbackOutputBody> {
        return this.v3GetBinaryAgentFeedbackWithHttpInfo(analysisId, agent, _options).pipe(map((apiResponse: HttpInfo<FeedbackOutputBody>) => apiResponse.data));
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param analysisId Analysis ID
     */
    public v3GetCapabilitiesOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataCapabilitiesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetCapabilitiesOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetCapabilitiesOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a capabilities operation.
     * @param analysisId Analysis ID
     */
    public v3GetCapabilitiesOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataCapabilitiesResult> {
        return this.v3GetCapabilitiesOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataCapabilitiesResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param functionId Function ID
     */
    public v3GetCryptoExplainOperationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetCryptoExplainOperation(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetCryptoExplainOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-explain operation.
     * @param functionId Function ID
     */
    public v3GetCryptoExplainOperation(functionId: number, _options?: ConfigurationOptions): Observable<OperationCryptoExplainMetadataCryptoExplainResult> {
        return this.v3GetCryptoExplainOperationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetCryptoScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetCryptoScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetCryptoScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a crypto-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetCryptoScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationCryptoScanMetadataCryptoScanResult> {
        return this.v3GetCryptoScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationCryptoScanMetadataCryptoScanResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param functionId Function ID
     */
    public v3GetExecutionExplainOperationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetExecutionExplainOperation(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetExecutionExplainOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-explain operation.
     * @param functionId Function ID
     */
    public v3GetExecutionExplainOperation(functionId: number, _options?: ConfigurationOptions): Observable<OperationExecutionExplainMetadataExecutionExplainResult> {
        return this.v3GetExecutionExplainOperationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetExecutionScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetExecutionScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetExecutionScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an execution-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetExecutionScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationExecutionScanMetadataExecutionScanResult> {
        return this.v3GetExecutionScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationExecutionScanMetadataExecutionScanResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param functionId Function ID
     */
    public v3GetFilesystemAnalyseOperationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetFilesystemAnalyseOperation(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetFilesystemAnalyseOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-analyse operation.
     * @param functionId Function ID
     */
    public v3GetFilesystemAnalyseOperation(functionId: number, _options?: ConfigurationOptions): Observable<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        return this.v3GetFilesystemAnalyseOperationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetFilesystemScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetFilesystemScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetFilesystemScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a filesystem-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetFilesystemScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationFilesystemScanMetadataFilesystemScanResult> {
        return this.v3GetFilesystemScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param functionId Function ID
     */
    public v3GetNetworkingExplainOperationWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetNetworkingExplainOperation(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetNetworkingExplainOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-explain operation.
     * @param functionId Function ID
     */
    public v3GetNetworkingExplainOperation(functionId: number, _options?: ConfigurationOptions): Observable<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        return this.v3GetNetworkingExplainOperationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetNetworkingScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetNetworkingScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetNetworkingScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a networking-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetNetworkingScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationNetworkingScanMetadataNetworkingScanResult> {
        return this.v3GetNetworkingScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>) => apiResponse.data));
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param analysisId Analysis ID
     */
    public v3GetProtocolsOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetProtocolsOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetProtocolsOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a protocols operation.
     * @param analysisId Analysis ID
     */
    public v3GetProtocolsOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataReportResult> {
        return this.v3GetProtocolsOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataReportResult>) => apiResponse.data));
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param analysisId Analysis ID
     */
    public v3GetRemediationOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataRemediationResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetRemediationOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetRemediationOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a remediation operation.
     * @param analysisId Analysis ID
     */
    public v3GetRemediationOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataRemediationResult> {
        return this.v3GetRemediationOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataRemediationResult>) => apiResponse.data));
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsResultWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RenameUnnamedFunctionsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetRenameUnnamedFunctionsResult(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetRenameUnnamedFunctionsResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get rename-unnamed-functions agent result.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsResult(analysisId: number, _options?: ConfigurationOptions): Observable<RenameUnnamedFunctionsResult> {
        return this.v3GetRenameUnnamedFunctionsResultWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<RenameUnnamedFunctionsResult>) => apiResponse.data));
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsStatusWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<StatusBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetRenameUnnamedFunctionsStatus(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetRenameUnnamedFunctionsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get rename-unnamed-functions agent status.
     * @param analysisId Analysis ID
     */
    public v3GetRenameUnnamedFunctionsStatus(analysisId: number, _options?: ConfigurationOptions): Observable<StatusBody> {
        return this.v3GetRenameUnnamedFunctionsStatusWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<StatusBody>) => apiResponse.data));
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param analysisId Analysis ID
     */
    public v3GetReportAnalysisOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataThreatReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetReportAnalysisOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetReportAnalysisOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a report-analysis operation.
     * @param analysisId Analysis ID
     */
    public v3GetReportAnalysisOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataThreatReportResult> {
        return this.v3GetReportAnalysisOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataThreatReportResult>) => apiResponse.data));
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecretsOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetSecretsOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetSecretsOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a secrets operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecretsOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataReportResult> {
        return this.v3GetSecretsOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataReportResult>) => apiResponse.data));
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecurityScanOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetSecurityScanOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetSecurityScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a security-scan operation.
     * @param analysisId Analysis ID
     */
    public v3GetSecurityScanOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationSecurityScanMetadataSecurityScanResult> {
        return this.v3GetSecurityScanOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationSecurityScanMetadataSecurityScanResult>) => apiResponse.data));
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param analysisId Analysis ID
     */
    public v3GetTriageOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataTriageResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetTriageOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetTriageOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get a triage operation.
     * @param analysisId Analysis ID
     */
    public v3GetTriageOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataTriageResult> {
        return this.v3GetTriageOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataTriageResult>) => apiResponse.data));
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param analysisId Analysis ID
     */
    public v3RunCapabilitiesWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataCapabilitiesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunCapabilities(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunCapabilitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the capabilities agent.
     * @param analysisId Analysis ID
     */
    public v3RunCapabilities(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataCapabilitiesResult> {
        return this.v3RunCapabilitiesWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataCapabilitiesResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param functionId Function ID
     */
    public v3RunCryptoExplainWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunCryptoExplain(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunCryptoExplainWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the crypto-explain agent.
     * @param functionId Function ID
     */
    public v3RunCryptoExplain(functionId: number, _options?: ConfigurationOptions): Observable<OperationCryptoExplainMetadataCryptoExplainResult> {
        return this.v3RunCryptoExplainWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<OperationCryptoExplainMetadataCryptoExplainResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param analysisId Analysis ID
     * @param triggerCryptoScanInputBody
     */
    public v3RunCryptoScanWithHttpInfo(analysisId: number, triggerCryptoScanInputBody: TriggerCryptoScanInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationCryptoScanMetadataCryptoScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunCryptoScan(analysisId, triggerCryptoScanInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunCryptoScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the crypto-scan agent.
     * @param analysisId Analysis ID
     * @param triggerCryptoScanInputBody
     */
    public v3RunCryptoScan(analysisId: number, triggerCryptoScanInputBody: TriggerCryptoScanInputBody, _options?: ConfigurationOptions): Observable<OperationCryptoScanMetadataCryptoScanResult> {
        return this.v3RunCryptoScanWithHttpInfo(analysisId, triggerCryptoScanInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationCryptoScanMetadataCryptoScanResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param functionId Function ID
     * @param triggerExecutionExplainInputBody
     */
    public v3RunExecutionExplainWithHttpInfo(functionId: number, triggerExecutionExplainInputBody: TriggerExecutionExplainInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunExecutionExplain(functionId, triggerExecutionExplainInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunExecutionExplainWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the execution-explain agent.
     * @param functionId Function ID
     * @param triggerExecutionExplainInputBody
     */
    public v3RunExecutionExplain(functionId: number, triggerExecutionExplainInputBody: TriggerExecutionExplainInputBody, _options?: ConfigurationOptions): Observable<OperationExecutionExplainMetadataExecutionExplainResult> {
        return this.v3RunExecutionExplainWithHttpInfo(functionId, triggerExecutionExplainInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationExecutionExplainMetadataExecutionExplainResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param analysisId Analysis ID
     * @param triggerExecutionScanInputBody
     */
    public v3RunExecutionScanWithHttpInfo(analysisId: number, triggerExecutionScanInputBody: TriggerExecutionScanInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationExecutionScanMetadataExecutionScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunExecutionScan(analysisId, triggerExecutionScanInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunExecutionScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the execution-scan agent.
     * @param analysisId Analysis ID
     * @param triggerExecutionScanInputBody
     */
    public v3RunExecutionScan(analysisId: number, triggerExecutionScanInputBody: TriggerExecutionScanInputBody, _options?: ConfigurationOptions): Observable<OperationExecutionScanMetadataExecutionScanResult> {
        return this.v3RunExecutionScanWithHttpInfo(analysisId, triggerExecutionScanInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationExecutionScanMetadataExecutionScanResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param functionId Function ID
     * @param triggerFilesystemAnalyseInputBody
     */
    public v3RunFilesystemAnalyseWithHttpInfo(functionId: number, triggerFilesystemAnalyseInputBody: TriggerFilesystemAnalyseInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunFilesystemAnalyse(functionId, triggerFilesystemAnalyseInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunFilesystemAnalyseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the filesystem-analyse agent.
     * @param functionId Function ID
     * @param triggerFilesystemAnalyseInputBody
     */
    public v3RunFilesystemAnalyse(functionId: number, triggerFilesystemAnalyseInputBody: TriggerFilesystemAnalyseInputBody, _options?: ConfigurationOptions): Observable<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult> {
        return this.v3RunFilesystemAnalyseWithHttpInfo(functionId, triggerFilesystemAnalyseInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationFilesystemAnalyseMetadataFilesystemAnalyseResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param analysisId Analysis ID
     * @param triggerFilesystemScanInputBody
     */
    public v3RunFilesystemScanWithHttpInfo(analysisId: number, triggerFilesystemScanInputBody: TriggerFilesystemScanInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunFilesystemScan(analysisId, triggerFilesystemScanInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunFilesystemScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the filesystem-scan agent.
     * @param analysisId Analysis ID
     * @param triggerFilesystemScanInputBody
     */
    public v3RunFilesystemScan(analysisId: number, triggerFilesystemScanInputBody: TriggerFilesystemScanInputBody, _options?: ConfigurationOptions): Observable<OperationFilesystemScanMetadataFilesystemScanResult> {
        return this.v3RunFilesystemScanWithHttpInfo(analysisId, triggerFilesystemScanInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationFilesystemScanMetadataFilesystemScanResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param functionId Function ID
     * @param triggerNetworkingExplainInputBody
     */
    public v3RunNetworkingExplainWithHttpInfo(functionId: number, triggerNetworkingExplainInputBody: TriggerNetworkingExplainInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunNetworkingExplain(functionId, triggerNetworkingExplainInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunNetworkingExplainWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the networking-explain agent.
     * @param functionId Function ID
     * @param triggerNetworkingExplainInputBody
     */
    public v3RunNetworkingExplain(functionId: number, triggerNetworkingExplainInputBody: TriggerNetworkingExplainInputBody, _options?: ConfigurationOptions): Observable<OperationNetworkingExplainMetadataNetworkingExplainResult> {
        return this.v3RunNetworkingExplainWithHttpInfo(functionId, triggerNetworkingExplainInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationNetworkingExplainMetadataNetworkingExplainResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param analysisId Analysis ID
     * @param triggerNetworkingScanInputBody
     */
    public v3RunNetworkingScanWithHttpInfo(analysisId: number, triggerNetworkingScanInputBody: TriggerNetworkingScanInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunNetworkingScan(analysisId, triggerNetworkingScanInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunNetworkingScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Run the networking-scan agent.
     * @param analysisId Analysis ID
     * @param triggerNetworkingScanInputBody
     */
    public v3RunNetworkingScan(analysisId: number, triggerNetworkingScanInputBody: TriggerNetworkingScanInputBody, _options?: ConfigurationOptions): Observable<OperationNetworkingScanMetadataNetworkingScanResult> {
        return this.v3RunNetworkingScanWithHttpInfo(analysisId, triggerNetworkingScanInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationNetworkingScanMetadataNetworkingScanResult>) => apiResponse.data));
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param analysisId Analysis ID
     */
    public v3RunProtocolsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunProtocols(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunProtocolsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the protocols agent.
     * @param analysisId Analysis ID
     */
    public v3RunProtocols(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataReportResult> {
        return this.v3RunProtocolsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataReportResult>) => apiResponse.data));
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param analysisId Analysis ID
     */
    public v3RunRemediationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataRemediationResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunRemediation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunRemediationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the remediation agent.
     * @param analysisId Analysis ID
     */
    public v3RunRemediation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataRemediationResult> {
        return this.v3RunRemediationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataRemediationResult>) => apiResponse.data));
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param analysisId Analysis ID
     */
    public v3RunReportAnalysisWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataThreatReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunReportAnalysis(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunReportAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the report-analysis agent.
     * @param analysisId Analysis ID
     */
    public v3RunReportAnalysis(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataThreatReportResult> {
        return this.v3RunReportAnalysisWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataThreatReportResult>) => apiResponse.data));
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param analysisId Analysis ID
     */
    public v3RunSecretsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataReportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunSecrets(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunSecretsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the secrets agent.
     * @param analysisId Analysis ID
     */
    public v3RunSecrets(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataReportResult> {
        return this.v3RunSecretsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataReportResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param analysisId Analysis ID
     * @param triggerSecurityScanInputBody
     */
    public v3RunSecurityScanWithHttpInfo(analysisId: number, triggerSecurityScanInputBody: TriggerSecurityScanInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<OperationSecurityScanMetadataSecurityScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunSecurityScan(analysisId, triggerSecurityScanInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunSecurityScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the security-scan agent.
     * @param analysisId Analysis ID
     * @param triggerSecurityScanInputBody
     */
    public v3RunSecurityScan(analysisId: number, triggerSecurityScanInputBody: TriggerSecurityScanInputBody, _options?: ConfigurationOptions): Observable<OperationSecurityScanMetadataSecurityScanResult> {
        return this.v3RunSecurityScanWithHttpInfo(analysisId, triggerSecurityScanInputBody, _options).pipe(map((apiResponse: HttpInfo<OperationSecurityScanMetadataSecurityScanResult>) => apiResponse.data));
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param analysisId Analysis ID
     */
    public v3RunTriageWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationMetadataTriageResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunTriage(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunTriageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the triage agent.
     * @param analysisId Analysis ID
     */
    public v3RunTriage(analysisId: number, _options?: ConfigurationOptions): Observable<OperationMetadataTriageResult> {
        return this.v3RunTriageWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationMetadataTriageResult>) => apiResponse.data));
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     * @param triggerRenameUnnamedFunctionsInputBody
     */
    public v3TriggerRenameUnnamedFunctionsWithHttpInfo(analysisId: number, triggerRenameUnnamedFunctionsInputBody: TriggerRenameUnnamedFunctionsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<StatusBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3TriggerRenameUnnamedFunctions(analysisId, triggerRenameUnnamedFunctionsInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3TriggerRenameUnnamedFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits
     * Run the rename-unnamed-functions agent.
     * @param analysisId Analysis ID
     * @param triggerRenameUnnamedFunctionsInputBody
     */
    public v3TriggerRenameUnnamedFunctions(analysisId: number, triggerRenameUnnamedFunctionsInputBody: TriggerRenameUnnamedFunctionsInputBody, _options?: ConfigurationOptions): Observable<StatusBody> {
        return this.v3TriggerRenameUnnamedFunctionsWithHttpInfo(analysisId, triggerRenameUnnamedFunctionsInputBody, _options).pipe(map((apiResponse: HttpInfo<StatusBody>) => apiResponse.data));
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     * @param submitFeedbackInputBody
     */
    public v3UpsertBinaryAgentFeedbackWithHttpInfo(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', submitFeedbackInputBody: SubmitFeedbackInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpsertBinaryAgentFeedback(analysisId, agent, submitFeedbackInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpsertBinaryAgentFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Record feedback on an agent\'s output.
     * @param analysisId Analysis ID
     * @param agent Which agent\&#39;s output the feedback is about
     * @param submitFeedbackInputBody
     */
    public v3UpsertBinaryAgentFeedback(analysisId: number, agent: 'triage' | 'capabilities' | 'report-analysis' | 'remediation' | 'protocols' | 'secrets', submitFeedbackInputBody: SubmitFeedbackInputBody, _options?: ConfigurationOptions): Observable<void> {
        return this.v3UpsertBinaryAgentFeedbackWithHttpInfo(analysisId, agent, submitFeedbackInputBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AnalysesBulkActionsApiRequestFactory, AnalysesBulkActionsApiResponseProcessor} from "../apis/AnalysesBulkActionsApi";
export class ObservableAnalysesBulkActionsApi {
    private requestFactory: AnalysesBulkActionsApiRequestFactory;
    private responseProcessor: AnalysesBulkActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesBulkActionsApiRequestFactory,
        responseProcessor?: AnalysesBulkActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesBulkActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesBulkActionsApiResponseProcessor();
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest
     */
    public bulkAddAnalysisTagsWithHttpInfo(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisBulkAddTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bulkAddAnalysisTags(analysisBulkAddTagsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkAddAnalysisTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates analysis tags for multiple analyses. User must be the owner.
     * Bulk Add Analysis Tags
     * @param analysisBulkAddTagsRequest
     */
    public bulkAddAnalysisTags(analysisBulkAddTagsRequest: AnalysisBulkAddTagsRequest, _options?: ConfigurationOptions): Observable<BaseResponseAnalysisBulkAddTagsResponse> {
        return this.bulkAddAnalysisTagsWithHttpInfo(analysisBulkAddTagsRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisBulkAddTagsResponse>) => apiResponse.data));
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest
     */
    public bulkDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseDict>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bulkDeleteAnalyses(bulkDeleteAnalysesRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkDeleteAnalysesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes multiple analyses. User must be the owner of all analyses.
     * Bulk Delete Analyses
     * @param bulkDeleteAnalysesRequest
     */
    public bulkDeleteAnalyses(bulkDeleteAnalysesRequest: BulkDeleteAnalysesRequest, _options?: ConfigurationOptions): Observable<BaseResponseDict> {
        return this.bulkDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponseDict>) => apiResponse.data));
    }

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param bulkAddTagsInputBody
     */
    public v3BatchAddAnalysisTagsWithHttpInfo(bulkAddTagsInputBody: BulkAddTagsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<BulkAddTagsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3BatchAddAnalysisTags(bulkAddTagsInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3BatchAddAnalysisTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Add tags to multiple analyses.
     * @param bulkAddTagsInputBody
     */
    public v3BatchAddAnalysisTags(bulkAddTagsInputBody: BulkAddTagsInputBody, _options?: ConfigurationOptions): Observable<BulkAddTagsOutputBody> {
        return this.v3BatchAddAnalysisTagsWithHttpInfo(bulkAddTagsInputBody, _options).pipe(map((apiResponse: HttpInfo<BulkAddTagsOutputBody>) => apiResponse.data));
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param bulkDeleteAnalysesInputBody
     */
    public v3BatchDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3BatchDeleteAnalysesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete multiple analyses.
     * @param bulkDeleteAnalysesInputBody
     */
    public v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody: BulkDeleteAnalysesInputBody, _options?: ConfigurationOptions): Observable<void> {
        return this.v3BatchDeleteAnalysesWithHttpInfo(bulkDeleteAnalysesInputBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

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
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo_1WithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisBasicInfoOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisBasicInfo_1(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnalysisBasicInfo_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get basic analysis information
     * @param analysisId Analysis ID
     */
    public getAnalysisBasicInfo_1(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisBasicInfoOutputBody> {
        return this.getAnalysisBasicInfo_1WithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisBasicInfoOutputBody>) => apiResponse.data));
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
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param analysisId
     * @param insertAnalysisLogRequest
     */
    public insertAnalysisLogWithHttpInfo(analysisId: number, insertAnalysisLogRequest: InsertAnalysisLogRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.insertAnalysisLog(analysisId, insertAnalysisLogRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.insertAnalysisLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inserts a log record for an analysis. Only the analysis owner can insert logs.
     * Insert a log entry for an analysis
     * @param analysisId
     * @param insertAnalysisLogRequest
     */
    public insertAnalysisLog(analysisId: number, insertAnalysisLogRequest: InsertAnalysisLogRequest, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.insertAnalysisLogWithHttpInfo(analysisId, insertAnalysisLogRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
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
    public listAnalysesWithHttpInfo(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatus, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseRecent>> {
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
    public listAnalyses(searchTerm?: string, workspace?: Array<Workspace>, status?: Array<StatusInput>, modelName?: Array<ModelName>, dynamicExecutionStatus?: DynamicExecutionStatus, usernames?: Array<string>, sha256Hash?: string, limit?: number, offset?: number, orderBy?: AppApiRestV2AnalysesEnumsOrderBy, order?: Order, _options?: ConfigurationOptions): Observable<BaseResponseRecent> {
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
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param analysisId
     * @param putAnalysisStringsRequest
     */
    public putAnalysisStringsWithHttpInfo(analysisId: number, putAnalysisStringsRequest: PutAnalysisStringsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.putAnalysisStrings(analysisId, putAnalysisStringsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putAnalysisStringsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add strings to the analysis. Rejects if any string already exists at the given vaddr.
     * Add strings to the analysis
     * @param analysisId
     * @param putAnalysisStringsRequest
     */
    public putAnalysisStrings(analysisId: number, putAnalysisStringsRequest: PutAnalysisStringsRequest, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.putAnalysisStringsWithHttpInfo(analysisId, putAnalysisStringsRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
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

    /**
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param analysisId Analysis ID
     */
    public v3DeleteAnalysisWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3DeleteAnalysis(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3DeleteAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deactivates the analysis. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Delete an analysis.
     * @param analysisId Analysis ID
     */
    public v3DeleteAnalysis(analysisId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.v3DeleteAnalysisWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param analysisId Analysis ID
     * @param [taskId] Task ID returned by queueing the export
     */
    public v3DownloadBinaryExportWithHttpInfo(analysisId: number, taskId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3DownloadBinaryExport(analysisId, taskId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3DownloadBinaryExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Streams the exported binary. Returns 404 if the task is not complete or its result has expired -- export again in either case.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary export
     * @param analysisId Analysis ID
     * @param [taskId] Task ID returned by queueing the export
     */
    public v3DownloadBinaryExport(analysisId: number, taskId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.v3DownloadBinaryExportWithHttpInfo(analysisId, taskId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisDetailOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysis(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the analysis\' resource-level detail: binary attributes, ownership, and the configuration it was submitted with.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysis(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisDetailOutputBody> {
        return this.v3GetAnalysisWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisDetailOutputBody>) => apiResponse.data));
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
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFunctionsProgressWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionsProgressOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisFunctionsProgress(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisFunctionsProgressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns how many functions the analysis has and how many carry an embedding, with the percentage complete. Embeddings are counted from the unified store, so an analysis whose model predates the current multi-arch one reports zero.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get function embedding progress for an analysis.
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFunctionsProgress(analysisId: number, _options?: ConfigurationOptions): Observable<FunctionsProgressOutputBody> {
        return this.v3GetAnalysisFunctionsProgressWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<FunctionsProgressOutputBody>) => apiResponse.data));
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisLogsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAnalysisLogsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisLogs(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns every log line recorded for the Analysis, oldest first, merged from every source that has written one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the Analysis log
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisLogs(analysisId: number, _options?: ConfigurationOptions): Observable<GetAnalysisLogsOutputBody> {
        return this.v3GetAnalysisLogsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<GetAnalysisLogsOutputBody>) => apiResponse.data));
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisOperationWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationCreateMetadataCreateResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisOperation(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Polls the status of an Analysis-creation operation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get an Analysis-creation operation
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisOperation(analysisId: number, _options?: ConfigurationOptions): Observable<OperationCreateMetadataCreateResult> {
        return this.v3GetAnalysisOperationWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationCreateMetadataCreateResult>) => apiResponse.data));
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
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param taskId Task ID returned by queueing the export
     */
    public v3GetBinaryExportOperationWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryExportOperation(taskId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryExportOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the export started for this task ID. `done` is the only readiness signal: while false, poll again; once true, exactly one of `response` or `error` is set. A task ID the platform no longer recognises -- whether it never existed or its history has expired -- resolves to a failed operation, since either way the caller must export again.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a binary export operation
     * @param taskId Task ID returned by queueing the export
     */
    public v3GetBinaryExportOperation(taskId: string, _options?: ConfigurationOptions): Observable<OperationBinaryExportMetadataBinaryExportResult> {
        return this.v3GetBinaryExportOperationWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<OperationBinaryExportMetadataBinaryExportResult>) => apiResponse.data));
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
    public v3ListAnalysesWithHttpInfo(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, binaryId?: number, platform?: Array<'windows' | 'linux' | 'android'>, architecture?: Array<'x86_64' | 'x86_32' | 'arm_64'>, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListAnalyses(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, binaryId, platform, architecture, pageSize, nextPageToken, orderBy, order, _config);
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
    public v3ListAnalyses(searchTerm?: string, analysisScope?: Array<'PRIVATE' | 'PUBLIC' | 'TEAM'>, status?: Array<'Uploaded' | 'Queued' | 'Complete' | 'Error' | 'Processing'>, modelName?: Array<string>, usernames?: Array<string>, sha256Hash?: string, binaryId?: number, platform?: Array<'windows' | 'linux' | 'android'>, architecture?: Array<'x86_64' | 'x86_32' | 'arm_64'>, pageSize?: number, nextPageToken?: string, orderBy?: 'created' | 'binary_name' | 'binary_size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListAnalysesOutputBody> {
        return this.v3ListAnalysesWithHttpInfo(searchTerm, analysisScope, status, modelName, usernames, sha256Hash, binaryId, platform, architecture, pageSize, nextPageToken, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<ListAnalysesOutputBody>) => apiResponse.data));
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

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param binaryId Binary ID
     */
    public v3LookupAnalysisByBinaryIdWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<LookupAnalysisByBinaryIDOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3LookupAnalysisByBinaryId(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3LookupAnalysisByBinaryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the ID of the most recent analysis of this binary that the caller may see (their own, their team\'s, or public). Returns 404 if the binary has none, whether because it has never been analysed or because every analysis of it is private to someone else.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Look up the most recent analysis for a binary.
     * @param binaryId Binary ID
     */
    public v3LookupAnalysisByBinaryId(binaryId: number, _options?: ConfigurationOptions): Observable<LookupAnalysisByBinaryIDOutputBody> {
        return this.v3LookupAnalysisByBinaryIdWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<LookupAnalysisByBinaryIDOutputBody>) => apiResponse.data));
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param analysisId Analysis ID
     */
    public v3QueueBinaryExportWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationBinaryExportMetadataBinaryExportResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3QueueBinaryExport(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3QueueBinaryExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts an asynchronous export of the binary with its current symbols rewritten in, and returns the operation to poll for its outcome. Only the owner may call it, and it requires a subscription tier that supports symbol export. Download the result once the operation reports done.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Queue a binary export
     * @param analysisId Analysis ID
     */
    public v3QueueBinaryExport(analysisId: number, _options?: ConfigurationOptions): Observable<OperationBinaryExportMetadataBinaryExportResult> {
        return this.v3QueueBinaryExportWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<OperationBinaryExportMetadataBinaryExportResult>) => apiResponse.data));
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param [partialName] Partial or full tag name to search for, at least 3 characters
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchTagsWithHttpInfo(partialName?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<SearchTagsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3SearchTags(partialName, limit, offset, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3SearchTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for tags by name. partial_name is required and must be at least 3 characters.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search tags
     * @param [partialName] Partial or full tag name to search for, at least 3 characters
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchTags(partialName?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<SearchTagsOutputBody> {
        return this.v3SearchTagsWithHttpInfo(partialName, limit, offset, _options).pipe(map((apiResponse: HttpInfo<SearchTagsOutputBody>) => apiResponse.data));
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param analysisId Analysis ID
     * @param updateAnalysisInputBody
     */
    public v3UpdateAnalysisWithHttpInfo(analysisId: number, updateAnalysisInputBody: UpdateAnalysisInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisDetailOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpdateAnalysis(analysisId, updateAnalysisInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpdateAnalysisWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames the analysis\' binary and/or changes its scope. Only the owner may call it. Changing to a non-PUBLIC scope requires a subscription tier that supports private analyses.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Update an analysis.
     * @param analysisId Analysis ID
     * @param updateAnalysisInputBody
     */
    public v3UpdateAnalysis(analysisId: number, updateAnalysisInputBody: UpdateAnalysisInputBody, _options?: ConfigurationOptions): Observable<AnalysisDetailOutputBody> {
        return this.v3UpdateAnalysisWithHttpInfo(analysisId, updateAnalysisInputBody, _options).pipe(map((apiResponse: HttpInfo<AnalysisDetailOutputBody>) => apiResponse.data));
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param analysisId Analysis ID
     * @param updateTagsInputBody
     */
    public v3UpdateAnalysisTagsWithHttpInfo(analysisId: number, updateTagsInputBody: UpdateTagsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisTagsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpdateAnalysisTags(analysisId, updateTagsInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpdateAnalysisTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the analysis\' binary\'s user tags (origin RevEng) with the given set. A tag recorded under any other origin, such as a heuristic detection sharing a name with a user tag, is left in place even when its name is absent from the request. Only the owner may call it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Replace an analysis\' tags.
     * @param analysisId Analysis ID
     * @param updateTagsInputBody
     */
    public v3UpdateAnalysisTags(analysisId: number, updateTagsInputBody: UpdateTagsInputBody, _options?: ConfigurationOptions): Observable<AnalysisTagsOutputBody> {
        return this.v3UpdateAnalysisTagsWithHttpInfo(analysisId, updateTagsInputBody, _options).pipe(map((apiResponse: HttpInfo<AnalysisTagsOutputBody>) => apiResponse.data));
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param analysisId Analysis ID
     */
    public v3UpgradeAnalysisModelWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<UpgradeAnalysisModelOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpgradeAnalysisModel(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpgradeAnalysisModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Re-runs an analysis created on an older model against the current unified model, in place — the analysis ID does not change. No credits are consumed. Only the owner may call it, and only once the analysis has settled: the pipeline clears the binary\'s functions, names, data types and signatures before re-running. Returns 409 if the analysis is already on the latest model, or is still running. Poll `GET /v3/analyses/{analysis_id}/basic` for status, as with any other run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Re-analyse on the latest model
     * @param analysisId Analysis ID
     */
    public v3UpgradeAnalysisModel(analysisId: number, _options?: ConfigurationOptions): Observable<UpgradeAnalysisModelOutputBody> {
        return this.v3UpgradeAnalysisModelWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<UpgradeAnalysisModelOutputBody>) => apiResponse.data));
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
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param analysisId Analysis ID
     * @param vaddr Virtual address to match against xrefs
     */
    public v3GetAnalysisXrefWithHttpInfo(analysisId: number, vaddr: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisXrefOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisXref(analysisId, vaddr, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisXrefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Look up xrefs by virtual address.
     * @param analysisId Analysis ID
     * @param vaddr Virtual address to match against xrefs
     */
    public v3GetAnalysisXref(analysisId: number, vaddr: number, _options?: ConfigurationOptions): Observable<AnalysisXrefOutputBody> {
        return this.v3GetAnalysisXrefWithHttpInfo(analysisId, vaddr, _options).pipe(map((apiResponse: HttpInfo<AnalysisXrefOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisCapabilitiesWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisCapabilitiesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListAnalysisCapabilities(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListAnalysisCapabilitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the capabilities found in an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisCapabilities(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisCapabilitiesOutputBody> {
        return this.v3ListAnalysisCapabilitiesWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisCapabilitiesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisTagsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisTagsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListAnalysisTags(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListAnalysisTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List the tags on an analysis.
     * @param analysisId Analysis ID
     */
    public v3ListAnalysisTags(analysisId: number, _options?: ConfigurationOptions): Observable<AnalysisTagsOutputBody> {
        return this.v3ListAnalysisTagsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<AnalysisTagsOutputBody>) => apiResponse.data));
    }

}

import { AnalysesXRefsApiRequestFactory, AnalysesXRefsApiResponseProcessor} from "../apis/AnalysesXRefsApi";
export class ObservableAnalysesXRefsApi {
    private requestFactory: AnalysesXRefsApiRequestFactory;
    private responseProcessor: AnalysesXRefsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalysesXRefsApiRequestFactory,
        responseProcessor?: AnalysesXRefsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalysesXRefsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalysesXRefsApiResponseProcessor();
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param analysisId
     * @param vaddr Virtual address to match against xrefs
     */
    public getXrefByVaddrWithHttpInfo(analysisId: number, vaddr: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseXrefResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getXrefByVaddr(analysisId, vaddr, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getXrefByVaddrWithHttpInfo(rsp)));
            }));
    }

    /**
     * **This endpoint is in beta and may change without notice.**
     * [Beta] Look up xrefs by virtual address
     * @param analysisId
     * @param vaddr Virtual address to match against xrefs
     */
    public getXrefByVaddr(analysisId: number, vaddr: number, _options?: ConfigurationOptions): Observable<BaseResponseXrefResponse> {
        return this.getXrefByVaddrWithHttpInfo(analysisId, vaddr, _options).pipe(map((apiResponse: HttpInfo<BaseResponseXrefResponse>) => apiResponse.data));
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
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param submitUserFeedbackRequest
     */
    public submitUserFeedbackWithHttpInfo(submitUserFeedbackRequest: SubmitUserFeedbackRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.submitUserFeedback(submitUserFeedbackRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitUserFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submits feedback about the application and forwards it to the RevEng.ai project management tool.
     * Submit feedback about the application
     * @param submitUserFeedbackRequest
     */
    public submitUserFeedback(submitUserFeedbackRequest: SubmitUserFeedbackRequest, _options?: ConfigurationOptions): Observable<BaseResponse> {
        return this.submitUserFeedbackWithHttpInfo(submitUserFeedbackRequest, _options).pipe(map((apiResponse: HttpInfo<BaseResponse>) => apiResponse.data));
    }

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param userId User ID
     */
    public v3GetUserWithHttpInfo(userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetPublicUserOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetUser(userId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a user\'s username. Any authenticated caller may look up any user by ID.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a user\'s public information
     * @param userId User ID
     */
    public v3GetUser(userId: number, _options?: ConfigurationOptions): Observable<GetPublicUserOutputBody> {
        return this.v3GetUserWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<GetPublicUserOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     */
    public v3GetUserActivityWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetUserActivityOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetUserActivity(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetUserActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the caller\'s own recent activity, their team\'s, and everyone\'s public activity, newest first.
     * Get the caller\'s activity feed
     */
    public v3GetUserActivity(_options?: ConfigurationOptions): Observable<GetUserActivityOutputBody> {
        return this.v3GetUserActivityWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetUserActivityOutputBody>) => apiResponse.data));
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param submitFeedbackBody
     */
    public v3SubmitUserFeedbackWithHttpInfo(submitFeedbackBody: SubmitFeedbackBody, _options?: ConfigurationOptions): Observable<HttpInfo<SubmitFeedbackOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3SubmitUserFeedback(submitFeedbackBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3SubmitUserFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submits feedback about the application to a Slack channel.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Submit feedback
     * @param submitFeedbackBody
     */
    public v3SubmitUserFeedback(submitFeedbackBody: SubmitFeedbackBody, _options?: ConfigurationOptions): Observable<SubmitFeedbackOutputBody> {
        return this.v3SubmitUserFeedbackWithHttpInfo(submitFeedbackBody, _options).pipe(map((apiResponse: HttpInfo<SubmitFeedbackOutputBody>) => apiResponse.data));
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
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus_1WithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAdditionalDetailsStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryAdditionalDetailsStatus_1(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryAdditionalDetailsStatus_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the additional-details extraction status for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetailsStatus_1(binaryId: number, _options?: ConfigurationOptions): Observable<GetAdditionalDetailsStatusOutputBody> {
        return this.getBinaryAdditionalDetailsStatus_1WithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetAdditionalDetailsStatusOutputBody>) => apiResponse.data));
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails_2WithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAdditionalDetailsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryAdditionalDetails_2(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryAdditionalDetails_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get additional details for a binary.
     * @param binaryId Binary ID
     */
    public getBinaryAdditionalDetails_2(binaryId: number, _options?: ConfigurationOptions): Observable<GetAdditionalDetailsOutputBody> {
        return this.getBinaryAdditionalDetails_2WithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetAdditionalDetailsOutputBody>) => apiResponse.data));
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

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param binaryId Binary ID
     */
    public v3DownloadBinaryZippedWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3DownloadBinaryZipped(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3DownloadBinaryZippedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Download a binary as a password-protected zip.
     * @param binaryId Binary ID
     */
    public v3DownloadBinaryZipped(binaryId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.v3DownloadBinaryZippedWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryDieInfoWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetDieInfoOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryDieInfo(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryDieInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get Detect It Easy matches for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryDieInfo(binaryId: number, _options?: ConfigurationOptions): Observable<GetDieInfoOutputBody> {
        return this.v3GetBinaryDieInfoWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetDieInfoOutputBody>) => apiResponse.data));
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryExternalsWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetBinaryExternalsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryExternals(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryExternalsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get third-party threat-intel lookups for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryExternals(binaryId: number, _options?: ConfigurationOptions): Observable<GetBinaryExternalsOutputBody> {
        return this.v3GetBinaryExternalsWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetBinaryExternalsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetRelatedBinariesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryRelated(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryRelatedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the binaries related to this one by unpacking.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelated(binaryId: number, _options?: ConfigurationOptions): Observable<GetRelatedBinariesOutputBody> {
        return this.v3GetBinaryRelatedWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetRelatedBinariesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedStatusWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetRelatedStatusOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetBinaryRelatedStatus(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetBinaryRelatedStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get the archive-unpacking status for a binary.
     * @param binaryId Binary ID
     */
    public v3GetBinaryRelatedStatus(binaryId: number, _options?: ConfigurationOptions): Observable<GetRelatedStatusOutputBody> {
        return this.v3GetBinaryRelatedStatusWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<GetRelatedStatusOutputBody>) => apiResponse.data));
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
    public v3SearchBinariesWithHttpInfo(partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<SearchBinariesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3SearchBinaries(partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, limit, offset, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3SearchBinariesWithHttpInfo(rsp)));
            }));
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
    public v3SearchBinaries(partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<SearchBinariesOutputBody> {
        return this.v3SearchBinariesWithHttpInfo(partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, limit, offset, _options).pipe(map((apiResponse: HttpInfo<SearchBinariesOutputBody>) => apiResponse.data));
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param file The file\\\&#39;s raw bytes.
     * @param uploadFileType The kind of file being uploaded.
     * @param [forceOverwrite] Re-upload and overwrite even if a file with this hash already exists.
     */
    public v3UploadFileWithHttpInfo(file: HttpFile, uploadFileType: string, forceOverwrite?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<UploadOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UploadFile(file, uploadFileType, forceOverwrite, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large
     * Upload a file.
     * @param file The file\\\&#39;s raw bytes.
     * @param uploadFileType The kind of file being uploaded.
     * @param [forceOverwrite] Re-upload and overwrite even if a file with this hash already exists.
     */
    public v3UploadFile(file: HttpFile, uploadFileType: string, forceOverwrite?: boolean, _options?: ConfigurationOptions): Observable<UploadOutputBody> {
        return this.v3UploadFileWithHttpInfo(file, uploadFileType, forceOverwrite, _options).pipe(map((apiResponse: HttpInfo<UploadOutputBody>) => apiResponse.data));
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

    /**
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param collectionId
     * @param addCollectionBinariesInputBody
     */
    public v3AddCollectionBinariesWithHttpInfo(collectionId: number, addCollectionBinariesInputBody: AddCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3AddCollectionBinaries(collectionId, addCollectionBinariesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3AddCollectionBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Links the supplied binaries to a collection without affecting any binaries already linked. Binary IDs already linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Add binaries to a collection.
     * @param collectionId
     * @param addCollectionBinariesInputBody
     */
    public v3AddCollectionBinaries(collectionId: number, addCollectionBinariesInputBody: AddCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<void> {
        return this.v3AddCollectionBinariesWithHttpInfo(collectionId, addCollectionBinariesInputBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
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
     * Deletes a collection along with its binary links, tags, and hierarchy links. The binaries themselves are not deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
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
    public v3ListCollectionsWithHttpInfo(searchTerm?: string, binaryName?: string, binarySha256?: string, tags?: Array<string>, userIds?: Array<number>, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListCollectionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListCollections(searchTerm, binaryName, binarySha256, tags, userIds, filters, limit, offset, orderBy, order, _config);
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
    public v3ListCollections(searchTerm?: string, binaryName?: string, binarySha256?: string, tags?: Array<string>, userIds?: Array<number>, filters?: Array<'official_only' | 'user_only' | 'team_only' | 'public_only' | 'hide_empty'>, limit?: number, offset?: number, orderBy?: 'created' | 'collection' | 'collection_size' | 'updated' | 'owner', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListCollectionsOutputBody> {
        return this.v3ListCollectionsWithHttpInfo(searchTerm, binaryName, binarySha256, tags, userIds, filters, limit, offset, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<ListCollectionsOutputBody>) => apiResponse.data));
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

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param collectionId
     * @param removeCollectionBinariesInputBody
     */
    public v3RemoveCollectionBinariesWithHttpInfo(collectionId: number, removeCollectionBinariesInputBody: RemoveCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RemoveCollectionBinaries(collectionId, removeCollectionBinariesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RemoveCollectionBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unlinks the supplied binaries from a collection without affecting any other binaries linked to it. Binary IDs not linked to the collection are ignored.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Remove binaries from a collection.
     * @param collectionId
     * @param removeCollectionBinariesInputBody
     */
    public v3RemoveCollectionBinaries(collectionId: number, removeCollectionBinariesInputBody: RemoveCollectionBinariesInputBody, _options?: ConfigurationOptions): Observable<void> {
        return this.v3RemoveCollectionBinariesWithHttpInfo(collectionId, removeCollectionBinariesInputBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     */
    public v3GetConfigWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetConfigOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetConfig(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.
     * Get client configuration.
     */
    public v3GetConfig(_options?: ConfigurationOptions): Observable<GetConfigOutputBody> {
        return this.v3GetConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetConfigOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     */
    public v3GetModelsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetModelsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetModels(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetModelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get the models available for analysis.
     */
    public v3GetModels(_options?: ConfigurationOptions): Observable<GetModelsOutputBody> {
        return this.v3GetModelsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetModelsOutputBody>) => apiResponse.data));
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

import { DataTypesApiRequestFactory, DataTypesApiResponseProcessor} from "../apis/DataTypesApi";
export class ObservableDataTypesApi {
    private requestFactory: DataTypesApiRequestFactory;
    private responseProcessor: DataTypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataTypesApiRequestFactory,
        responseProcessor?: DataTypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataTypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataTypesApiResponseProcessor();
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param analysisId Analysis ID
     * @param copyFunctionSignaturesInputBody
     */
    public v3CopyFunctionSignaturesWithHttpInfo(analysisId: number, copyFunctionSignaturesInputBody: CopyFunctionSignaturesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<CopyFunctionSignaturesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CopyFunctionSignatures(analysisId, copyFunctionSignaturesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CopyFunctionSignaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Copy function signatures
     * @param analysisId Analysis ID
     * @param copyFunctionSignaturesInputBody
     */
    public v3CopyFunctionSignatures(analysisId: number, copyFunctionSignaturesInputBody: CopyFunctionSignaturesInputBody, _options?: ConfigurationOptions): Observable<CopyFunctionSignaturesOutputBody> {
        return this.v3CopyFunctionSignaturesWithHttpInfo(analysisId, copyFunctionSignaturesInputBody, _options).pipe(map((apiResponse: HttpInfo<CopyFunctionSignaturesOutputBody>) => apiResponse.data));
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param analysisId Analysis ID
     * @param createAnalysisDataTypesInputBody
     */
    public v3CreateAnalysisDataTypesWithHttpInfo(analysisId: number, createAnalysisDataTypesInputBody: CreateAnalysisDataTypesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3CreateAnalysisDataTypes(analysisId, createAnalysisDataTypesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3CreateAnalysisDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Create an analysis\'s data types
     * @param analysisId Analysis ID
     * @param createAnalysisDataTypesInputBody
     */
    public v3CreateAnalysisDataTypes(analysisId: number, createAnalysisDataTypesInputBody: CreateAnalysisDataTypesInputBody, _options?: ConfigurationOptions): Observable<AnalysisDataTypesOutputBody> {
        return this.v3CreateAnalysisDataTypesWithHttpInfo(analysisId, createAnalysisDataTypesInputBody, _options).pipe(map((apiResponse: HttpInfo<AnalysisDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeWithHttpInfo(analysisId: number, dataTypeId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DataTypeEntry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisDataType(analysisId, dataTypeId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisDataTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get one of an analysis\'s data types
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataType(analysisId: number, dataTypeId: number, _options?: ConfigurationOptions): Observable<DataTypeEntry> {
        return this.v3GetAnalysisDataTypeWithHttpInfo(analysisId, dataTypeId, _options).pipe(map((apiResponse: HttpInfo<DataTypeEntry>) => apiResponse.data));
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeHistoryWithHttpInfo(analysisId: number, dataTypeId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetDataTypeHistoryBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisDataTypeHistory(analysisId, dataTypeId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisDataTypeHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a data type\'s edit history
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     */
    public v3GetAnalysisDataTypeHistory(analysisId: number, dataTypeId: number, _options?: ConfigurationOptions): Observable<GetDataTypeHistoryBody> {
        return this.v3GetAnalysisDataTypeHistoryWithHttpInfo(analysisId, dataTypeId, _options).pipe(map((apiResponse: HttpInfo<GetDataTypeHistoryBody>) => apiResponse.data));
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param [includeDataTypes] Include the data types the signature names in the response.
     */
    public v3GetFunctionSignatureWithHttpInfo(analysisId: number, functionId: number, includeDataTypes?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionSignatureBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetFunctionSignature(analysisId, functionId, includeDataTypes, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetFunctionSignatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param [includeDataTypes] Include the data types the signature names in the response.
     */
    public v3GetFunctionSignature(analysisId: number, functionId: number, includeDataTypes?: boolean, _options?: ConfigurationOptions): Observable<FunctionSignatureBody> {
        return this.v3GetFunctionSignatureWithHttpInfo(analysisId, functionId, includeDataTypes, _options).pipe(map((apiResponse: HttpInfo<FunctionSignatureBody>) => apiResponse.data));
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public v3GetFunctionSignatureHistoryWithHttpInfo(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetFunctionSignatureHistoryBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetFunctionSignatureHistory(analysisId, functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetFunctionSignatureHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get a function signature\'s edit history
     * @param analysisId Analysis ID
     * @param functionId Function ID
     */
    public v3GetFunctionSignatureHistory(analysisId: number, functionId: number, _options?: ConfigurationOptions): Observable<GetFunctionSignatureHistoryBody> {
        return this.v3GetFunctionSignatureHistoryWithHttpInfo(analysisId, functionId, _options).pipe(map((apiResponse: HttpInfo<GetFunctionSignatureHistoryBody>) => apiResponse.data));
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
    public v3ListAnalysisDataTypesWithHttpInfo(analysisId: number, offset?: number, limit?: number, kind?: Array<'STRUCT' | 'UNION' | 'ENUM' | 'TYPEDEF' | 'POINTER' | 'ARRAY' | 'FUNCTION_DEFINITION' | 'BITFIELD' | 'BASE' | 'UNKNOWN'>, namespace?: Array<string>, search?: string, sourceType?: Array<'SYSTEM' | 'USER' | 'AUTO_UNSTRIP' | 'AI_DECOMP'>, orderBy?: 'name' | 'size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<ListAnalysisDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListAnalysisDataTypes(analysisId, offset, limit, kind, namespace, search, sourceType, orderBy, order, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListAnalysisDataTypesWithHttpInfo(rsp)));
            }));
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
    public v3ListAnalysisDataTypes(analysisId: number, offset?: number, limit?: number, kind?: Array<'STRUCT' | 'UNION' | 'ENUM' | 'TYPEDEF' | 'POINTER' | 'ARRAY' | 'FUNCTION_DEFINITION' | 'BITFIELD' | 'BASE' | 'UNKNOWN'>, namespace?: Array<string>, search?: string, sourceType?: Array<'SYSTEM' | 'USER' | 'AUTO_UNSTRIP' | 'AI_DECOMP'>, orderBy?: 'name' | 'size', order?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<ListAnalysisDataTypesOutputBody> {
        return this.v3ListAnalysisDataTypesWithHttpInfo(analysisId, offset, limit, kind, namespace, search, sourceType, orderBy, order, _options).pipe(map((apiResponse: HttpInfo<ListAnalysisDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * @param [pageSize] Page size.
     * @param [afterFunctionId] Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function.
     */
    public v3ListDataTypeFunctionsWithHttpInfo(analysisId: number, dataTypeId: number, pageSize?: number, afterFunctionId?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListDataTypeFunctionsBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListDataTypeFunctions(analysisId, dataTypeId, pageSize, afterFunctionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListDataTypeFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * List the functions using a data type
     * @param analysisId Analysis ID
     * @param dataTypeId Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
     * @param [pageSize] Page size.
     * @param [afterFunctionId] Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function.
     */
    public v3ListDataTypeFunctions(analysisId: number, dataTypeId: number, pageSize?: number, afterFunctionId?: number, _options?: ConfigurationOptions): Observable<ListDataTypeFunctionsBody> {
        return this.v3ListDataTypeFunctionsWithHttpInfo(analysisId, dataTypeId, pageSize, afterFunctionId, _options).pipe(map((apiResponse: HttpInfo<ListDataTypeFunctionsBody>) => apiResponse.data));
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param functionIds Function IDs to fetch signatures for.
     * @param [includeDataTypes] Include the data types the signatures name in the response.
     */
    public v3ListFunctionSignaturesWithHttpInfo(functionIds: Array<number>, includeDataTypes?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListFunctionSignaturesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3ListFunctionSignatures(functionIds, includeDataTypes, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3ListFunctionSignaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Get signatures for many functions
     * @param functionIds Function IDs to fetch signatures for.
     * @param [includeDataTypes] Include the data types the signatures name in the response.
     */
    public v3ListFunctionSignatures(functionIds: Array<number>, includeDataTypes?: boolean, _options?: ConfigurationOptions): Observable<ListFunctionSignaturesOutputBody> {
        return this.v3ListFunctionSignaturesWithHttpInfo(functionIds, includeDataTypes, _options).pipe(map((apiResponse: HttpInfo<ListFunctionSignaturesOutputBody>) => apiResponse.data));
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param analysisId Analysis ID
     * @param updateAnalysisDataTypesInputBody
     */
    public v3UpdateAnalysisDataTypesWithHttpInfo(analysisId: number, updateAnalysisDataTypesInputBody: UpdateAnalysisDataTypesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<AnalysisDataTypesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpdateAnalysisDataTypes(analysisId, updateAnalysisDataTypesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpdateAnalysisDataTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update an analysis\'s data types
     * @param analysisId Analysis ID
     * @param updateAnalysisDataTypesInputBody
     */
    public v3UpdateAnalysisDataTypes(analysisId: number, updateAnalysisDataTypesInputBody: UpdateAnalysisDataTypesInputBody, _options?: ConfigurationOptions): Observable<AnalysisDataTypesOutputBody> {
        return this.v3UpdateAnalysisDataTypesWithHttpInfo(analysisId, updateAnalysisDataTypesInputBody, _options).pipe(map((apiResponse: HttpInfo<AnalysisDataTypesOutputBody>) => apiResponse.data));
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateFunctionSignatureInputBody
     */
    public v3UpdateFunctionSignatureWithHttpInfo(analysisId: number, functionId: number, updateFunctionSignatureInputBody: UpdateFunctionSignatureInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionSignatureEntry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpdateFunctionSignature(analysisId, functionId, updateFunctionSignatureInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpdateFunctionSignatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Update a function\'s signature
     * @param analysisId Analysis ID
     * @param functionId Function ID
     * @param updateFunctionSignatureInputBody
     */
    public v3UpdateFunctionSignature(analysisId: number, functionId: number, updateFunctionSignatureInputBody: UpdateFunctionSignatureInputBody, _options?: ConfigurationOptions): Observable<FunctionSignatureEntry> {
        return this.v3UpdateFunctionSignatureWithHttpInfo(analysisId, functionId, updateFunctionSignatureInputBody, _options).pipe(map((apiResponse: HttpInfo<FunctionSignatureEntry>) => apiResponse.data));
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

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param binaryId Binary ID
     */
    public v3GetVirustotalScanOperationWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetVirustotalScanOperation(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetVirustotalScanOperationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * Get a VirusTotal scan operation.
     * @param binaryId Binary ID
     */
    public v3GetVirustotalScanOperation(binaryId: number, _options?: ConfigurationOptions): Observable<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        return this.v3GetVirustotalScanOperationWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>) => apiResponse.data));
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param binaryId Binary ID
     */
    public v3RunVirustotalScanWithHttpInfo(binaryId: number, _options?: ConfigurationOptions): Observable<HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RunVirustotalScan(binaryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RunVirustotalScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key
     * Trigger a VirusTotal lookup for a binary.
     * @param binaryId Binary ID
     */
    public v3RunVirustotalScan(binaryId: number, _options?: ConfigurationOptions): Observable<OperationVirusTotalScanMetadataVirusTotalScanResult> {
        return this.v3RunVirustotalScanWithHttpInfo(binaryId, _options).pipe(map((apiResponse: HttpInfo<OperationVirusTotalScanMetadataVirusTotalScanResult>) => apiResponse.data));
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
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * @param [typeSuggestions] Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off.
     * @param [applyTypes] Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public createAiDecompilationWithHttpInfo(functionId: number, temperature?: number, typeSuggestions?: boolean, applyTypes?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<CreateAIDecompOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAiDecompilation(functionId, temperature, typeSuggestions, applyTypes, _config);
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
     * @param [temperature] LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default.
     * @param [typeSuggestions] Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off.
     * @param [applyTypes] Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public createAiDecompilation(functionId: number, temperature?: number, typeSuggestions?: boolean, applyTypes?: boolean, _options?: ConfigurationOptions): Observable<CreateAIDecompOutputBody> {
        return this.createAiDecompilationWithHttpInfo(functionId, temperature, typeSuggestions, applyTypes, _options).pipe(map((apiResponse: HttpInfo<CreateAIDecompOutputBody>) => apiResponse.data));
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
     * Get rating for AI decompilation
     * @param functionId The ID of the function for which to get the rating
     */
    public getAiDecompilationRatingWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseUnionGetAiDecompilationRatingResponseNoneType>> {
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
    public getAiDecompilationRating(functionId: number, _options?: ConfigurationOptions): Observable<BaseResponseUnionGetAiDecompilationRatingResponseNoneType> {
        return this.getAiDecompilationRatingWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<BaseResponseUnionGetAiDecompilationRatingResponseNoneType>) => apiResponse.data));
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
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
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
     * Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation inline comments
     * @param functionId Function ID
     */
    public regenerateAiDecompilationInlineComments(functionId: number, _options?: ConfigurationOptions): Observable<RegenerateOutputBody> {
        return this.regenerateAiDecompilationInlineCommentsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<RegenerateOutputBody>) => apiResponse.data));
    }

    /**
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
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
     * Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict
     * Regenerate AI decompilation summary
     * @param functionId Function ID
     */
    public regenerateAiDecompilationSummary(functionId: number, _options?: ConfigurationOptions): Observable<RegenerateOutputBody> {
        return this.regenerateAiDecompilationSummaryWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<RegenerateOutputBody>) => apiResponse.data));
    }

    /**
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
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
     * Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.
     * Stream live AI decompilation output (SSE)
     * @param functionId Function ID
     */
    public streamAiDecompilation(functionId: number, _options?: ConfigurationOptions): Observable<Array<StreamAiDecompilation200ResponseInner>> {
        return this.streamAiDecompilationWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<Array<StreamAiDecompilation200ResponseInner>>) => apiResponse.data));
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

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param functionId Function ID
     * @param acceptTypeSuggestionsInputBody
     */
    public v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, acceptTypeSuggestionsInputBody: AcceptTypeSuggestionsInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<AcceptTypeSuggestionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3AcceptAiDecompilationTypeSuggestions(functionId, acceptTypeSuggestionsInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Accept AI decompilation type suggestions
     * @param functionId Function ID
     * @param acceptTypeSuggestionsInputBody
     */
    public v3AcceptAiDecompilationTypeSuggestions(functionId: number, acceptTypeSuggestionsInputBody: AcceptTypeSuggestionsInputBody, _options?: ConfigurationOptions): Observable<AcceptTypeSuggestionsOutputBody> {
        return this.v3AcceptAiDecompilationTypeSuggestionsWithHttpInfo(functionId, acceptTypeSuggestionsInputBody, _options).pipe(map((apiResponse: HttpInfo<AcceptTypeSuggestionsOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationLineAttributionsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<LineAttributionsData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAiDecompilationLineAttributions(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAiDecompilationLineAttributionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation line attributions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationLineAttributions(functionId: number, _options?: ConfigurationOptions): Observable<LineAttributionsData> {
        return this.v3GetAiDecompilationLineAttributionsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<LineAttributionsData>) => apiResponse.data));
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param functionId Function ID
     */
    public v3GetAiDecompilationRatingWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<RatingOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAiDecompilationRating(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAiDecompilationRatingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation rating
     * @param functionId Function ID
     */
    public v3GetAiDecompilationRating(functionId: number, _options?: ConfigurationOptions): Observable<RatingOutputBody> {
        return this.v3GetAiDecompilationRatingWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<RatingOutputBody>) => apiResponse.data));
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTokensWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetTokensResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAiDecompilationTokens(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAiDecompilationTokensWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation tokens and user overrides
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTokens(functionId: number, _options?: ConfigurationOptions): Observable<GetTokensResponse> {
        return this.v3GetAiDecompilationTokensWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<GetTokensResponse>) => apiResponse.data));
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TypeSuggestionsData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAiDecompilationTypeSuggestions(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAiDecompilationTypeSuggestionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Get AI decompilation type suggestions
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestions(functionId: number, _options?: ConfigurationOptions): Observable<TypeSuggestionsData> {
        return this.v3GetAiDecompilationTypeSuggestionsWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<TypeSuggestionsData>) => apiResponse.data));
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkflowProgress>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAiDecompilationTypeSuggestionsStatus(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get type suggestion workflow status
     * @param functionId Function ID
     */
    public v3GetAiDecompilationTypeSuggestionsStatus(functionId: number, _options?: ConfigurationOptions): Observable<WorkflowProgress> {
        return this.v3GetAiDecompilationTypeSuggestionsStatusWithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<WorkflowProgress>) => apiResponse.data));
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param functionId Function ID
     * @param [applyTypes] Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(functionId: number, applyTypes?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<RegenerateOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3RegenerateAiDecompilationTypeSuggestions(functionId, applyTypes, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Regenerate AI decompilation type suggestions
     * @param functionId Function ID
     * @param [applyTypes] Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off.
     */
    public v3RegenerateAiDecompilationTypeSuggestions(functionId: number, applyTypes?: boolean, _options?: ConfigurationOptions): Observable<RegenerateOutputBody> {
        return this.v3RegenerateAiDecompilationTypeSuggestionsWithHttpInfo(functionId, applyTypes, _options).pipe(map((apiResponse: HttpInfo<RegenerateOutputBody>) => apiResponse.data));
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public v3UpsertAiDecompilationOverridesWithHttpInfo(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<UpsertOverridesData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpsertAiDecompilationOverrides(functionId, upsertOverridesInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpsertAiDecompilationOverridesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert variable/function name overrides
     * @param functionId Function ID
     * @param upsertOverridesInputBody
     */
    public v3UpsertAiDecompilationOverrides(functionId: number, upsertOverridesInputBody: UpsertOverridesInputBody, _options?: ConfigurationOptions): Observable<UpsertOverridesData> {
        return this.v3UpsertAiDecompilationOverridesWithHttpInfo(functionId, upsertOverridesInputBody, _options).pipe(map((apiResponse: HttpInfo<UpsertOverridesData>) => apiResponse.data));
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param functionId Function ID
     * @param upsertRatingInputBody
     */
    public v3UpsertAiDecompilationRatingWithHttpInfo(functionId: number, upsertRatingInputBody: UpsertRatingInputBody, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3UpsertAiDecompilationRating(functionId, upsertRatingInputBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3UpsertAiDecompilationRatingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error
     * Upsert AI decompilation rating
     * @param functionId Function ID
     * @param upsertRatingInputBody
     */
    public v3UpsertAiDecompilationRating(functionId: number, upsertRatingInputBody: UpsertRatingInputBody, _options?: ConfigurationOptions): Observable<void> {
        return this.v3UpsertAiDecompilationRatingWithHttpInfo(functionId, upsertRatingInputBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public getAnalysisStringsWithHttpInfo(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'length' | 'value', sortOrder?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseAnalysisStringsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAnalysisStrings(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, _config);
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
     * @param [orderBy] Order by field
     * @param [sortOrder] Sort order for the results
     */
    public getAnalysisStrings(analysisId: number, page?: number, pageSize?: number, search?: string, functionSearch?: string, orderBy?: 'length' | 'value', sortOrder?: 'ASC' | 'DESC', _options?: ConfigurationOptions): Observable<BaseResponseAnalysisStringsResponse> {
        return this.getAnalysisStringsWithHttpInfo(analysisId, page, pageSize, search, functionSearch, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<BaseResponseAnalysisStringsResponse>) => apiResponse.data));
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
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks_1WithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<DisassemblyOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionBlocks_1(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionBlocks_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info. A function that carries no disassembly (externals, thunks) returns 200 with the block fields omitted; disassembly that exists but cannot be read yet returns 409 ANALYSIS_NOT_READY.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready
     * Get function disassembly
     * @param functionId Function ID
     */
    public getFunctionBlocks_1(functionId: number, _options?: ConfigurationOptions): Observable<DisassemblyOutputBody> {
        return this.getFunctionBlocks_1WithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<DisassemblyOutputBody>) => apiResponse.data));
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
     * Get list of functions that call or are called for a list of functions
     * @param functionIds
     */
    public getFunctionCalleesCallersBulkWithHttpInfo(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseListCalleesCallerFunctionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionCalleesCallersBulk(functionIds, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionCalleesCallersBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of functions that call or are called for a list of functions
     * @param functionIds
     */
    public getFunctionCalleesCallersBulk(functionIds: Array<number>, _options?: ConfigurationOptions): Observable<BaseResponseListCalleesCallerFunctionsResponse> {
        return this.getFunctionCalleesCallersBulkWithHttpInfo(functionIds, _options).pipe(map((apiResponse: HttpInfo<BaseResponseListCalleesCallerFunctionsResponse>) => apiResponse.data));
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers_2WithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CallEdgesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionCalleesCallers_2(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionCalleesCallers_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get callees and callers for a function
     * @param functionId Function ID
     */
    public getFunctionCalleesCallers_2(functionId: number, _options?: ConfigurationOptions): Observable<CallEdgesOutputBody> {
        return this.getFunctionCalleesCallers_2WithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<CallEdgesOutputBody>) => apiResponse.data));
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
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities_3WithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CapabilitiesOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionCapabilities_3(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionCapabilities_3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get capabilities for a function
     * @param functionId Function ID
     */
    public getFunctionCapabilities_3(functionId: number, _options?: ConfigurationOptions): Observable<CapabilitiesOutputBody> {
        return this.getFunctionCapabilities_3WithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<CapabilitiesOutputBody>) => apiResponse.data));
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
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails_4WithHttpInfo(functionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<FunctionDetailsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionDetails_4(functionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionDetails_4WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function details
     * @param functionId Function ID
     */
    public getFunctionDetails_4(functionId: number, _options?: ConfigurationOptions): Observable<FunctionDetailsOutputBody> {
        return this.getFunctionDetails_4WithHttpInfo(functionId, _options).pipe(map((apiResponse: HttpInfo<FunctionDetailsOutputBody>) => apiResponse.data));
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

    /**
     * Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied
     * List strings for a function.
     * @param functionId Function ID
     * @param [page] Page number (1-indexed).
     * @param [pageSize] Number of results per page.
     * @param [search] Filter by string value (case-insensitive substring match).
     */
    public getFunctionStrings_5WithHttpInfo(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFunctionStringsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFunctionStrings_5(functionId, page, pageSize, search, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunctionStrings_5WithHttpInfo(rsp)));
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
    public getFunctionStrings_5(functionId: number, page?: number, pageSize?: number, search?: string, _options?: ConfigurationOptions): Observable<ListFunctionStringsOutputBody> {
        return this.getFunctionStrings_5WithHttpInfo(functionId, page, pageSize, search, _options).pipe(map((apiResponse: HttpInfo<ListFunctionStringsOutputBody>) => apiResponse.data));
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

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFuncMapsWithHttpInfo(analysisId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetFunctionMapsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3GetAnalysisFuncMaps(analysisId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3GetAnalysisFuncMapsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns three maps built from every function in the analysis\'s binary: function ID to virtual address, its inverse, and virtual address to mangled name. Empty maps for a binary with no functions yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Get function ID/address maps for an analysis
     * @param analysisId Analysis ID
     */
    public v3GetAnalysisFuncMaps(analysisId: number, _options?: ConfigurationOptions): Observable<GetFunctionMapsOutputBody> {
        return this.v3GetAnalysisFuncMapsWithHttpInfo(analysisId, _options).pipe(map((apiResponse: HttpInfo<GetFunctionMapsOutputBody>) => apiResponse.data));
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param [partialName] Partial or full function name to search for
     * @param [modelName] Restrict results to functions analysed with this model
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchFunctionsWithHttpInfo(partialName?: string, modelName?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<SearchFunctionsOutputBody>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v3SearchFunctions(partialName, modelName, limit, offset, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3SearchFunctionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for functions visible to the caller. At least one of partial_name or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed
     * Search functions
     * @param [partialName] Partial or full function name to search for
     * @param [modelName] Restrict results to functions analysed with this model
     * @param [limit] Maximum results to return
     * @param [offset] Number of results to skip
     */
    public v3SearchFunctions(partialName?: string, modelName?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<SearchFunctionsOutputBody> {
        return this.v3SearchFunctionsWithHttpInfo(partialName, modelName, limit, offset, _options).pipe(map((apiResponse: HttpInfo<SearchFunctionsOutputBody>) => apiResponse.data));
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
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
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
     * Renames multiple functions in a single request. Records name changes in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request
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
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
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
     * Renames a single function and records the change in history. `source_type` defaults to USER when omitted.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Rename a function
     * @param functionId Function ID
     * @param renameInputBody
     */
    public renameFunction(functionId: number, renameInputBody: RenameInputBody, _options?: ConfigurationOptions): Observable<RenameOutputBody> {
        return this.renameFunctionWithHttpInfo(functionId, renameInputBody, _options).pipe(map((apiResponse: HttpInfo<RenameOutputBody>) => apiResponse.data));
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

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName_1WithHttpInfo(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.revertFunctionName_1(functionId, historyId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revertFunctionName_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found
     * Revert function name
     * @param functionId Function ID
     * @param historyId History ID to revert to
     */
    public revertFunctionName_1(functionId: number, historyId: number, _options?: ConfigurationOptions): Observable<any> {
        return this.revertFunctionName_1WithHttpInfo(functionId, historyId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
     * @param [excludeBinaryId] A binary ID to exclude from the results
     * @param [userIds] Restrict the search to binaries owned by these user IDs
     */
    public searchBinariesWithHttpInfo(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseBinarySearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchBinaries(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, _config);
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
     * @param [excludeBinaryId] A binary ID to exclude from the results
     * @param [userIds] Restrict the search to binaries owned by these user IDs
     */
    public searchBinaries(page?: number, pageSize?: number, partialName?: string, partialSha256?: string, tags?: Array<string>, modelName?: string, userFilesOnly?: boolean, excludeBinaryId?: number, userIds?: Array<number>, _options?: ConfigurationOptions): Observable<BaseResponseBinarySearchResponse> {
        return this.searchBinariesWithHttpInfo(page, pageSize, partialName, partialSha256, tags, modelName, userFilesOnly, excludeBinaryId, userIds, _options).pipe(map((apiResponse: HttpInfo<BaseResponseBinarySearchResponse>) => apiResponse.data));
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
    public searchCollectionsWithHttpInfo(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, userIds?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<BaseResponseCollectionSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchCollections(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, filters, orderBy, orderByDirection, userIds, _config);
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
     * @param [filters] The filters to be used for the search
     * @param [orderBy] The field to sort the order by in the results
     * @param [orderByDirection] The order direction in which to return results
     * @param [userIds] Restrict the search to collections owned by these user IDs
     */
    public searchCollections(page?: number, pageSize?: number, partialCollectionName?: string, partialBinaryName?: string, partialBinarySha256?: string, tags?: Array<string>, filters?: Array<Filters>, orderBy?: AppApiRestV2CollectionsEnumsOrderBy, orderByDirection?: Order, userIds?: Array<number>, _options?: ConfigurationOptions): Observable<BaseResponseCollectionSearchResponse> {
        return this.searchCollectionsWithHttpInfo(page, pageSize, partialCollectionName, partialBinaryName, partialBinarySha256, tags, filters, orderBy, orderByDirection, userIds, _options).pipe(map((apiResponse: HttpInfo<BaseResponseCollectionSearchResponse>) => apiResponse.data));
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
