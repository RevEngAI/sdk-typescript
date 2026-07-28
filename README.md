# RevEng.AI TypeScript SDK

This is the TypeScript SDK for the RevEng.AI API.

To use the SDK you will first need to obtain an API key from [https://reveng.ai](https://reveng.ai/register).

## Installation

Once you have the API key you can install the SDK via npm:

```bash
npm install @revengai/sdk
```

## Usage

The following is an example of how to use the SDK to get the logs of an analysis:

```typescript
import * as revengai from '@revengai/sdk'

const authConfig: revengai.AuthMethodsConfiguration = {
    APIKey: process.env.REVENGAI_API_KEY
}

const config = revengai.createConfiguration({
    authMethods: authConfig,
});

const api = new revengai.AnalysesCoreApi(config);

async function fetchLogs() {
    try {
        const logs = await api.getAnalysisLogs(715522);
        console.log(logs);
    } catch (error) {
        console.error('Error fetching logs:', error);
    }
}

fetchLogs();
```

## Documentation for API Endpoints

All URIs are relative to *https://api.reveng.ai*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AnalysesCoreApi* | [**addUserStringToAnalysis**](docs/AnalysesCoreApi.md#addUserStringToAnalysis) | **POST** /v3/analyses/{analysis_id}/user-provided-strings | Add a user-provided string to an analysis.
*AnalysesCoreApi* | [**getAnalysisBasicInfo**](docs/AnalysesCoreApi.md#getAnalysisBasicInfo) | **GET** /v3/analyses/{analysis_id}/basic | Get basic analysis information
*AnalysesCoreApi* | [**getAnalysisBytes**](docs/AnalysesCoreApi.md#getAnalysisBytes) | **GET** /v3/analyses/{analysis_id}/bytes | Get the bytes of a binary
*AnalysesCoreApi* | [**getAnalysisFunctionMatches**](docs/AnalysesCoreApi.md#getAnalysisFunctionMatches) | **GET** /v3/analyses/{analysis_id}/functions/matches | Get function-matching results for an analysis
*AnalysesCoreApi* | [**getAnalysisFunctionMatchingStatus**](docs/AnalysesCoreApi.md#getAnalysisFunctionMatchingStatus) | **GET** /v3/analyses/{analysis_id}/functions/matches/status | Get function-matching status for an analysis
*AnalysesCoreApi* | [**getDynamicExecutionReport**](docs/AnalysesCoreApi.md#getDynamicExecutionReport) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/report | Get dynamic execution report
*AnalysesCoreApi* | [**getDynamicExecutionStatus**](docs/AnalysesCoreApi.md#getDynamicExecutionStatus) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/status | Get dynamic execution status
*AnalysesCoreApi* | [**startAnalysisFunctionMatching**](docs/AnalysesCoreApi.md#startAnalysisFunctionMatching) | **POST** /v3/analyses/{analysis_id}/functions/matches | Start function matching for an analysis
*AnalysesCoreApi* | [**v3GetAnalysisAutoUnstripStatus**](docs/AnalysesCoreApi.md#v3GetAnalysisAutoUnstripStatus) | **GET** /v3/analyses/{analysis_id}/auto-unstrip/status | Get the auto-unstrip status for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisStrings**](docs/AnalysesCoreApi.md#v3GetAnalysisStrings) | **GET** /v3/analyses/{analysis_id}/functions/strings | List strings for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisStringsStatus**](docs/AnalysesCoreApi.md#v3GetAnalysisStringsStatus) | **GET** /v3/analyses/{analysis_id}/functions/strings/status | Get the string-extraction status for an analysis.
*AnalysesCoreApi* | [**v3ListAnalyses**](docs/AnalysesCoreApi.md#v3ListAnalyses) | **GET** /v3/analyses | List analyses
*AnalysesCoreApi* | [**v3ListExampleAnalyses**](docs/AnalysesCoreApi.md#v3ListExampleAnalyses) | **GET** /v3/analyses/examples | List example analyses
*BinariesApi* | [**getBinaryAdditionalDetails**](docs/BinariesApi.md#getBinaryAdditionalDetails) | **GET** /v3/binaries/{binary_id}/additional-details | Get additional details for a binary.
*BinariesApi* | [**getBinaryAdditionalDetailsStatus**](docs/BinariesApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v3/binaries/{binary_id}/additional-details/status | Get the additional-details extraction status for a binary.
*CollectionsApi* | [**v3CreateCollection**](docs/CollectionsApi.md#v3CreateCollection) | **POST** /v3/collections | Create a collection.
*CollectionsApi* | [**v3DeleteCollection**](docs/CollectionsApi.md#v3DeleteCollection) | **DELETE** /v3/collections/{collection_id} | Delete a collection.
*CollectionsApi* | [**v3GetCollection**](docs/CollectionsApi.md#v3GetCollection) | **GET** /v3/collections/{collection_id} | Get a collection.
*CollectionsApi* | [**v3ListCollections**](docs/CollectionsApi.md#v3ListCollections) | **GET** /v3/collections | List collections.
*CollectionsApi* | [**v3PatchCollection**](docs/CollectionsApi.md#v3PatchCollection) | **PATCH** /v3/collections/{collection_id} | Update a collection.
*CollectionsApi* | [**v3PatchCollectionBinaries**](docs/CollectionsApi.md#v3PatchCollectionBinaries) | **PATCH** /v3/collections/{collection_id}/binaries | Replace the binaries in a collection.
*CollectionsApi* | [**v3PatchCollectionTags**](docs/CollectionsApi.md#v3PatchCollectionTags) | **PATCH** /v3/collections/{collection_id}/tags | Replace the tags on a collection.
*ConversationsApi* | [**cancelRun**](docs/ConversationsApi.md#cancelRun) | **POST** /v2/conversations/{id}/cancel | Cancel an active run
*ConversationsApi* | [**confirmTool**](docs/ConversationsApi.md#confirmTool) | **POST** /v2/conversations/{id}/confirm | Approve or reject a pending tool confirmation
*ConversationsApi* | [**createConversation**](docs/ConversationsApi.md#createConversation) | **POST** /v2/conversations | Create a new conversation
*ConversationsApi* | [**getConversation**](docs/ConversationsApi.md#getConversation) | **GET** /v2/conversations/{id} | Get a conversation with its events
*ConversationsApi* | [**listConversations**](docs/ConversationsApi.md#listConversations) | **GET** /v2/conversations | List conversations for the authenticated user
*ConversationsApi* | [**sendMessage**](docs/ConversationsApi.md#sendMessage) | **POST** /v2/conversations/{id}/messages | Send a message and start an agentic run
*ConversationsApi* | [**streamEvents**](docs/ConversationsApi.md#streamEvents) | **GET** /v2/conversations/{id}/events | Stream conversation events (SSE)
*FunctionsAIDecompilationApi* | [**createAiDecompilation**](docs/FunctionsAIDecompilationApi.md#createAiDecompilation) | **POST** /v3/functions/{function_id}/ai-decompilation | Start AI decompilation
*FunctionsAIDecompilationApi* | [**deleteAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#deleteAiDecompilationInlineComment) | **DELETE** /v3/functions/{function_id}/ai-decompilation/inline-comments/{line} | Delete a single inline comment
*FunctionsAIDecompilationApi* | [**getAiDecompilation**](docs/FunctionsAIDecompilationApi.md#getAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation | Get AI decompilation result
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineComments) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments | Get AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineCommentsStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineCommentsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments/status | Get inline comments generation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/status | Get AI decompilation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummary) | **GET** /v3/functions/{function_id}/ai-decompilation/summary | Get AI decompilation summary
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummaryStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummaryStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/summary/status | Get summary generation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationTokenised**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTokenised) | **GET** /v3/functions/{function_id}/ai-decompilation/tokenised | Get tokenised AI decompilation with function mapping
*FunctionsAIDecompilationApi* | [**patchAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#patchAiDecompilationInlineComment) | **PATCH** /v3/functions/{function_id}/ai-decompilation/inline-comments | Update a single inline comment
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationInlineComments) | **POST** /v3/functions/{function_id}/ai-decompilation/inline-comments | Regenerate AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationSummary) | **POST** /v3/functions/{function_id}/ai-decompilation/summary | Regenerate AI decompilation summary
*FunctionsAIDecompilationApi* | [**streamAiDecompilation**](docs/FunctionsAIDecompilationApi.md#streamAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation/events | Stream live AI decompilation output (SSE)
*FunctionsAIDecompilationApi* | [**upsertAiDecompilationOverrides**](docs/FunctionsAIDecompilationApi.md#upsertAiDecompilationOverrides) | **PATCH** /v3/functions/{function_id}/ai-decompilation/overrides | Upsert variable/function name overrides
*FunctionsCoreApi* | [**addFunctionCallee**](docs/FunctionsCoreApi.md#addFunctionCallee) | **POST** /v3/functions/{function_id}/callees | Add a callee to a function
*FunctionsCoreApi* | [**addUserStringToFunction**](docs/FunctionsCoreApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.
*FunctionsCoreApi* | [**getFunctionBlocks**](docs/FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v3/functions/{function_id}/blocks | Get function disassembly
*FunctionsCoreApi* | [**getFunctionCalleesCallers**](docs/FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v3/functions/{function_id}/callees-callers | Get callees and callers for a function
*FunctionsCoreApi* | [**getFunctionCapabilities**](docs/FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v3/functions/{function_id}/capabilities | Get capabilities for a function
*FunctionsCoreApi* | [**getFunctionDetails**](docs/FunctionsCoreApi.md#getFunctionDetails) | **GET** /v3/functions/{function_id} | Get function details
*FunctionsCoreApi* | [**getFunctionIndirectCallSites**](docs/FunctionsCoreApi.md#getFunctionIndirectCallSites) | **GET** /v3/functions/{function_id}/indirect-call-sites | Get indirect call sites for a function
*FunctionsCoreApi* | [**getFunctionStrings**](docs/FunctionsCoreApi.md#getFunctionStrings) | **GET** /v3/functions/{function_id}/strings | List strings for a function.
*FunctionsCoreApi* | [**getFunctionsCalleesCallers**](docs/FunctionsCoreApi.md#getFunctionsCalleesCallers) | **GET** /v3/functions/callees-callers | Get callees and callers for many functions
*FunctionsCoreApi* | [**getFunctionsMatches**](docs/FunctionsCoreApi.md#getFunctionsMatches) | **GET** /v3/functions/matches | Get function-matching results for an explicit set of functions
*FunctionsCoreApi* | [**getFunctionsMatchingStatus**](docs/FunctionsCoreApi.md#getFunctionsMatchingStatus) | **GET** /v3/functions/matches/status | Get function-matching status for an explicit set of functions
*FunctionsCoreApi* | [**getImportedFunction**](docs/FunctionsCoreApi.md#getImportedFunction) | **GET** /v3/analyses/{analysis_id}/imported-functions/{imported_function_id} | Get an imported function with its callers
*FunctionsCoreApi* | [**listAnalysisFunctions**](docs/FunctionsCoreApi.md#listAnalysisFunctions) | **GET** /v3/analyses/{analysis_id}/functions | List functions in an analysis
*FunctionsCoreApi* | [**listImportedFunctions**](docs/FunctionsCoreApi.md#listImportedFunctions) | **GET** /v3/analyses/{analysis_id}/imported-functions | List imported functions in an analysis
*FunctionsCoreApi* | [**startFunctionsMatching**](docs/FunctionsCoreApi.md#startFunctionsMatching) | **POST** /v3/functions/matches | Start function matching for an explicit set of functions
*FunctionsCoreApi* | [**v3CanonicalizeFunctionNames**](docs/FunctionsCoreApi.md#v3CanonicalizeFunctionNames) | **POST** /v3/functions/canonical-names | Canonicalize a batch of function names
*FunctionsDataTypesApi* | [**batchUpdateFunctionDataTypes**](docs/FunctionsDataTypesApi.md#batchUpdateFunctionDataTypes) | **PUT** /v3/analyses/{analysis_id}/functions/data-types | Batch update function data types
*FunctionsDataTypesApi* | [**getFunctionDataTypes**](docs/FunctionsDataTypesApi.md#getFunctionDataTypes) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/data-types | Get data types for a single function
*FunctionsDataTypesApi* | [**listAnalysisFunctionsDataTypes**](docs/FunctionsDataTypesApi.md#listAnalysisFunctionsDataTypes) | **GET** /v3/analyses/{analysis_id}/functions/data-types | List data types for all functions in an analysis
*FunctionsDataTypesApi* | [**listFunctionsDataTypes**](docs/FunctionsDataTypesApi.md#listFunctionsDataTypes) | **GET** /v3/functions/data-types | Get data types for many functions
*FunctionsDataTypesApi* | [**updateFunctionDataTypes**](docs/FunctionsDataTypesApi.md#updateFunctionDataTypes) | **PUT** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Update function data types
*FunctionsRenamingHistoryApi* | [**batchRenameFunctions**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunctions) | **POST** /v3/functions/rename | Batch rename functions
*FunctionsRenamingHistoryApi* | [**getFunctionHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionHistory) | **GET** /v3/functions/{function_id}/history | Get function name history
*FunctionsRenamingHistoryApi* | [**renameFunction**](docs/FunctionsRenamingHistoryApi.md#renameFunction) | **POST** /v3/functions/{function_id}/rename | Rename a function
*FunctionsRenamingHistoryApi* | [**revertFunctionName**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v3/functions/{function_id}/history/{history_id}/revert | Revert function name
*IAMUsersApi* | [**getMe**](docs/IAMUsersApi.md#getMe) | **GET** /v2/iam/me | Get current user
*IAMUsersApi* | [**getMyPermissions**](docs/IAMUsersApi.md#getMyPermissions) | **GET** /v2/iam/me/permissions | Get current user permissions
*ReportsApi* | [**createPdfReport**](docs/ReportsApi.md#createPdfReport) | **POST** /v3/analyses/{analysis_id}/pdf | Start PDF report generation
*ReportsApi* | [**downloadPdfReport**](docs/ReportsApi.md#downloadPdfReport) | **GET** /v3/analyses/{analysis_id}/pdf | Download generated PDF report
*ReportsApi* | [**getPdfReportStatus**](docs/ReportsApi.md#getPdfReportStatus) | **GET** /v3/analyses/{analysis_id}/pdf/status | Get PDF report workflow status


## Documentation for Models

 - [AIDecompFunctionMapping](AIDecompFunctionMapping.md)
 - [AIDecompInverseFunctionMapItem](AIDecompInverseFunctionMapItem.md)
 - [AIDecompInverseStringMapItem](AIDecompInverseStringMapItem.md)
 - [APIError](APIError.md)
 - [AddCalleeInputBody](AddCalleeInputBody.md)
 - [AddIssuerDomainInputBody](AddIssuerDomainInputBody.md)
 - [AddOwnerInputBody](AddOwnerInputBody.md)
 - [AddTeamMemberInputBody](AddTeamMemberInputBody.md)
 - [AddUserStringInputBody](AddUserStringInputBody.md)
 - [AddUserStringToFunctionInputBody](AddUserStringToFunctionInputBody.md)
 - [AnalysisBasicInfoOutputBody](AnalysisBasicInfoOutputBody.md)
 - [AnalysisFunctionEntry](AnalysisFunctionEntry.md)
 - [AnalysisLogMessage](AnalysisLogMessage.md)
 - [AnalysisLogs](AnalysisLogs.md)
 - [AnalysisRecordBody](AnalysisRecordBody.md)
 - [AnalysisReport](AnalysisReport.md)
 - [AnalysisStringFunction](AnalysisStringFunction.md)
 - [AnalysisStringItem](AnalysisStringItem.md)
 - [AnalysisTagBody](AnalysisTagBody.md)
 - [ApiCall](ApiCall.md)
 - [ArchiveContentEntry](ArchiveContentEntry.md)
 - [Artifact](Artifact.md)
 - [AttemptFailedEvent](AttemptFailedEvent.md)
 - [AttemptStartedEvent](AttemptStartedEvent.md)
 - [AutoUnstripStatusOutputBody](AutoUnstripStatusOutputBody.md)
 - [BatchBinaryMatchResult](BatchBinaryMatchResult.md)
 - [BatchMatchingOutputBody](BatchMatchingOutputBody.md)
 - [BatchRenameInputBody](BatchRenameInputBody.md)
 - [BatchRenameItem](BatchRenameItem.md)
 - [BatchRenameOutputBody](BatchRenameOutputBody.md)
 - [BatchUpdateDataTypesInputBody](BatchUpdateDataTypesInputBody.md)
 - [BatchUpdateDataTypesItem](BatchUpdateDataTypesItem.md)
 - [BatchUpdateDataTypesOutputBody](BatchUpdateDataTypesOutputBody.md)
 - [BatchUpdateDataTypesResult](BatchUpdateDataTypesResult.md)
 - [Binary](Binary.md)
 - [BulkCreateUserResult](BulkCreateUserResult.md)
 - [BulkCreateUsersOutputBody](BulkCreateUsersOutputBody.md)
 - [CallEdge](CallEdge.md)
 - [CallEdgesOutputBody](CallEdgesOutputBody.md)
 - [CanonicalName](CanonicalName.md)
 - [CanonicalizeNamesInputBody](CanonicalizeNamesInputBody.md)
 - [CanonicalizeNamesOutputBody](CanonicalizeNamesOutputBody.md)
 - [CapabilitiesOutputBody](CapabilitiesOutputBody.md)
 - [CapabilityEntry](CapabilityEntry.md)
 - [CollectionListItemBody](CollectionListItemBody.md)
 - [CommentsData](CommentsData.md)
 - [ConfirmToolInputBody](ConfirmToolInputBody.md)
 - [Connection](Connection.md)
 - [ConsoleOutputEntry](ConsoleOutputEntry.md)
 - [Conversation](Conversation.md)
 - [ConversationContext](ConversationContext.md)
 - [ConversationWithEvents](ConversationWithEvents.md)
 - [CreateAIDecompOutputBody](CreateAIDecompOutputBody.md)
 - [CreateCheckoutSessionInputBody](CreateCheckoutSessionInputBody.md)
 - [CreateCollectionInputBody](CreateCollectionInputBody.md)
 - [CreateCollectionOutputBody](CreateCollectionOutputBody.md)
 - [CreateConversationRequest](CreateConversationRequest.md)
 - [CreateGroupInputBody](CreateGroupInputBody.md)
 - [CreateIdentityInputBody](CreateIdentityInputBody.md)
 - [CreateIssuerInputBody](CreateIssuerInputBody.md)
 - [CreateOrganisationInputBody](CreateOrganisationInputBody.md)
 - [CreatePortalSessionInputBody](CreatePortalSessionInputBody.md)
 - [CreateTeamInputBody](CreateTeamInputBody.md)
 - [CreateUserInputBody](CreateUserInputBody.md)
 - [DataTypesEntry](DataTypesEntry.md)
 - [DecompFailedEvent](DecompFailedEvent.md)
 - [DecompFinishedEvent](DecompFinishedEvent.md)
 - [DecompilationData](DecompilationData.md)
 - [DisassemblyOutputBody](DisassemblyOutputBody.md)
 - [DnsQuery](DnsQuery.md)
 - [DrakvufFileMetadata](DrakvufFileMetadata.md)
 - [DynamicExecutionStatusResponse](DynamicExecutionStatusResponse.md)
 - [ErrorBody](ErrorBody.md)
 - [Event](Event.md)
 - [EventAttemptFailed](EventAttemptFailed.md)
 - [EventAttemptStarted](EventAttemptStarted.md)
 - [EventCONTEXTCOMPACTED](EventCONTEXTCOMPACTED.md)
 - [EventDecompFailed](EventDecompFailed.md)
 - [EventDecompFinished](EventDecompFinished.md)
 - [EventProse](EventProse.md)
 - [EventRUNCANCELLED](EventRUNCANCELLED.md)
 - [EventRUNERROR](EventRUNERROR.md)
 - [EventRUNFINISHED](EventRUNFINISHED.md)
 - [EventRUNSTARTED](EventRUNSTARTED.md)
 - [EventRenameApplied](EventRenameApplied.md)
 - [EventSTEPFINISHED](EventSTEPFINISHED.md)
 - [EventSTEPSTARTED](EventSTEPSTARTED.md)
 - [EventSourceDelta](EventSourceDelta.md)
 - [EventSourceReset](EventSourceReset.md)
 - [EventTEXTMESSAGECONTENT](EventTEXTMESSAGECONTENT.md)
 - [EventTEXTMESSAGEEND](EventTEXTMESSAGEEND.md)
 - [EventTEXTMESSAGESTART](EventTEXTMESSAGESTART.md)
 - [EventTITLEUPDATED](EventTITLEUPDATED.md)
 - [EventTOOLCALLARGSDELTA](EventTOOLCALLARGSDELTA.md)
 - [EventTOOLCALLEND](EventTOOLCALLEND.md)
 - [EventTOOLCALLPROGRESS](EventTOOLCALLPROGRESS.md)
 - [EventTOOLCALLRESULT](EventTOOLCALLRESULT.md)
 - [EventTOOLCALLSTART](EventTOOLCALLSTART.md)
 - [EventTOOLCONFIRMATIONREQUIRED](EventTOOLCONFIRMATIONREQUIRED.md)
 - [EventWarning](EventWarning.md)
 - [Example](Example.md)
 - [ExtractedURL](ExtractedURL.md)
 - [FileActivityEntry](FileActivityEntry.md)
 - [FormFile](FormFile.md)
 - [FunctionArgument](FunctionArgument.md)
 - [FunctionCallEdges](FunctionCallEdges.md)
 - [FunctionDependency](FunctionDependency.md)
 - [FunctionDetailsOutputBody](FunctionDetailsOutputBody.md)
 - [FunctionHeader](FunctionHeader.md)
 - [FunctionInfo](FunctionInfo.md)
 - [FunctionMatch](FunctionMatch.md)
 - [FunctionStackVariable](FunctionStackVariable.md)
 - [FunctionStringItem](FunctionStringItem.md)
 - [FunctionType](FunctionType.md)
 - [GeneratePDFOutputBody](GeneratePDFOutputBody.md)
 - [GetAdditionalDetailsOutputBody](GetAdditionalDetailsOutputBody.md)
 - [GetAdditionalDetailsStatusOutputBody](GetAdditionalDetailsStatusOutputBody.md)
 - [GetAnalysisStringsStatusOutputBody](GetAnalysisStringsStatusOutputBody.md)
 - [GetCollectionOutputBody](GetCollectionOutputBody.md)
 - [GetMatchesOutputBody](GetMatchesOutputBody.md)
 - [GetMatchesStatusOutputBody](GetMatchesStatusOutputBody.md)
 - [GetProductsOutputBody](GetProductsOutputBody.md)
 - [GetSubscriptionOutputBody](GetSubscriptionOutputBody.md)
 - [HistoryEntry](HistoryEntry.md)
 - [HttpRequest](HttpRequest.md)
 - [ImportedFunctionCallerEntry](ImportedFunctionCallerEntry.md)
 - [ImportedFunctionDetailOutputBody](ImportedFunctionDetailOutputBody.md)
 - [ImportedFunctionEntry](ImportedFunctionEntry.md)
 - [IndirectCallSite](IndirectCallSite.md)
 - [IndirectCallSitesOutputBody](IndirectCallSitesOutputBody.md)
 - [InlineComment](InlineComment.md)
 - [InviteUserInputBody](InviteUserInputBody.md)
 - [IssuerAllowedDomain](IssuerAllowedDomain.md)
 - [ListAnalysesOutputBody](ListAnalysesOutputBody.md)
 - [ListAnalysisFunctionsDataTypesOutputBody](ListAnalysisFunctionsDataTypesOutputBody.md)
 - [ListAnalysisFunctionsOutputBody](ListAnalysisFunctionsOutputBody.md)
 - [ListAnalysisStringsOutputBody](ListAnalysisStringsOutputBody.md)
 - [ListArchiveContentsOutputBody](ListArchiveContentsOutputBody.md)
 - [ListCollectionsOutputBody](ListCollectionsOutputBody.md)
 - [ListExampleAnalysesOutputBody](ListExampleAnalysesOutputBody.md)
 - [ListFunctionStringsOutputBody](ListFunctionStringsOutputBody.md)
 - [ListFunctionsDataTypesOutputBody](ListFunctionsDataTypesOutputBody.md)
 - [ListImportedFunctionsOutputBody](ListImportedFunctionsOutputBody.md)
 - [ListTeamsOutputBody](ListTeamsOutputBody.md)
 - [ListUsersOutputBody](ListUsersOutputBody.md)
 - [LocationOutputBody](LocationOutputBody.md)
 - [MatchFilters](MatchFilters.md)
 - [MatchedFunction](MatchedFunction.md)
 - [MemdumpEntry](MemdumpEntry.md)
 - [MessageBody](MessageBody.md)
 - [ModuleLoadEntry](ModuleLoadEntry.md)
 - [MutexEntry](MutexEntry.md)
 - [NameConfidence](NameConfidence.md)
 - [NetworkActivity](NetworkActivity.md)
 - [OIDCCallbackInputBody](OIDCCallbackInputBody.md)
 - [Organisation](Organisation.md)
 - [OrganisationGroup](OrganisationGroup.md)
 - [OrganisationIssuer](OrganisationIssuer.md)
 - [OrganisationOwner](OrganisationOwner.md)
 - [PasswordResetInputBody](PasswordResetInputBody.md)
 - [PatchCollectionBinariesInputBody](PatchCollectionBinariesInputBody.md)
 - [PatchCollectionBinariesOutputBody](PatchCollectionBinariesOutputBody.md)
 - [PatchCollectionInputBody](PatchCollectionInputBody.md)
 - [PatchCollectionOutputBody](PatchCollectionOutputBody.md)
 - [PatchCollectionTagsInputBody](PatchCollectionTagsInputBody.md)
 - [PatchCollectionTagsOutputBody](PatchCollectionTagsOutputBody.md)
 - [PatchCommentBody](PatchCommentBody.md)
 - [PcapBodyInfo](PcapBodyInfo.md)
 - [Permissions](Permissions.md)
 - [PriceOutput](PriceOutput.md)
 - [PriceSummary](PriceSummary.md)
 - [ProcessActivityEntry](ProcessActivityEntry.md)
 - [ProcessMemdumps](ProcessMemdumps.md)
 - [ProcessNode](ProcessNode.md)
 - [ProcessTree](ProcessTree.md)
 - [ProductOutput](ProductOutput.md)
 - [ProductSummary](ProductSummary.md)
 - [ProgressMessage](ProgressMessage.md)
 - [ProseEvent](ProseEvent.md)
 - [RefreshBody](RefreshBody.md)
 - [RegenerateOutputBody](RegenerateOutputBody.md)
 - [RegisterUserInputBody](RegisterUserInputBody.md)
 - [RegistryOperation](RegistryOperation.md)
 - [RenameAppliedEvent](RenameAppliedEvent.md)
 - [RenameInputBody](RenameInputBody.md)
 - [RenameOutputBody](RenameOutputBody.md)
 - [ReplacementValue](ReplacementValue.md)
 - [ReportEvent](ReportEvent.md)
 - [ReportInfo](ReportInfo.md)
 - [ReportOptions](ReportOptions.md)
 - [RevokeBody](RevokeBody.md)
 - [SSOProvider](SSOProvider.md)
 - [SSOProvidersOutputBody](SSOProvidersOutputBody.md)
 - [ScheduledTaskEntry](ScheduledTaskEntry.md)
 - [SendMessageRequest](SendMessageRequest.md)
 - [ServiceEntry](ServiceEntry.md)
 - [SessionOutputBody](SessionOutputBody.md)
 - [SourceDeltaEvent](SourceDeltaEvent.md)
 - [SourceResetEvent](SourceResetEvent.md)
 - [SseEventContextCompactedData](SseEventContextCompactedData.md)
 - [SseEventRunCancelledData](SseEventRunCancelledData.md)
 - [SseEventRunErrorData](SseEventRunErrorData.md)
 - [SseEventRunFinishedData](SseEventRunFinishedData.md)
 - [SseEventRunStartedData](SseEventRunStartedData.md)
 - [SseEventStepFinishedData](SseEventStepFinishedData.md)
 - [SseEventStepStartedData](SseEventStepStartedData.md)
 - [SseEventTextMessageContentData](SseEventTextMessageContentData.md)
 - [SseEventTextMessageEndData](SseEventTextMessageEndData.md)
 - [SseEventTextMessageStartData](SseEventTextMessageStartData.md)
 - [SseEventTitleUpdatedData](SseEventTitleUpdatedData.md)
 - [SseEventToolCallArgsDeltaData](SseEventToolCallArgsDeltaData.md)
 - [SseEventToolCallEndData](SseEventToolCallEndData.md)
 - [SseEventToolCallProgressData](SseEventToolCallProgressData.md)
 - [SseEventToolCallResultData](SseEventToolCallResultData.md)
 - [SseEventToolCallStartData](SseEventToolCallStartData.md)
 - [SseEventToolConfirmationRequiredData](SseEventToolConfirmationRequiredData.md)
 - [StartBatchMatchingInputBody](StartBatchMatchingInputBody.md)
 - [StartMatchingForAnalysisInputBody](StartMatchingForAnalysisInputBody.md)
 - [StartMatchingForFunctionsInputBody](StartMatchingForFunctionsInputBody.md)
 - [StartMatchingOutputBody](StartMatchingOutputBody.md)
 - [StartupInfo](StartupInfo.md)
 - [StatusResponse](StatusResponse.md)
 - [StreamAiDecompilation200ResponseInner](StreamAiDecompilation200ResponseInner.md)
 - [StreamEvents200ResponseInner](StreamEvents200ResponseInner.md)
 - [SummaryData](SummaryData.md)
 - [TcpCarvedFile](TcpCarvedFile.md)
 - [Team](Team.md)
 - [TeamMember](TeamMember.md)
 - [TokenInputBody](TokenInputBody.md)
 - [TokenResponse](TokenResponse.md)
 - [TokenisedData](TokenisedData.md)
 - [TriggerDynamicExecutionInputBody](TriggerDynamicExecutionInputBody.md)
 - [Ttp](Ttp.md)
 - [UpdateDataTypesInputBody](UpdateDataTypesInputBody.md)
 - [UpdateDataTypesOutputBody](UpdateDataTypesOutputBody.md)
 - [UpdateIssuerInputBody](UpdateIssuerInputBody.md)
 - [UpdateOrganisationInputBody](UpdateOrganisationInputBody.md)
 - [UpdatePasswordInputBody](UpdatePasswordInputBody.md)
 - [UpdateProfileInputBody](UpdateProfileInputBody.md)
 - [UpdateTeamInputBody](UpdateTeamInputBody.md)
 - [UpdateUserCreditsInputBody](UpdateUserCreditsInputBody.md)
 - [UpdateUserInputBody](UpdateUserInputBody.md)
 - [UpdateUserPasswordInputBody](UpdateUserPasswordInputBody.md)
 - [UpsertOverridesData](UpsertOverridesData.md)
 - [UpsertOverridesInputBody](UpsertOverridesInputBody.md)
 - [User](User.md)
 - [UserCredits](UserCredits.md)
 - [UserIdentity](UserIdentity.md)
 - [UserProfile](UserProfile.md)
 - [WarningEvent](WarningEvent.md)
 - [WorkflowProgress](WorkflowProgress.md)
