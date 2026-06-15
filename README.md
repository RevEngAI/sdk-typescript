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
*AgentApi* | [**checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet**](docs/AgentApi.md#checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities/status | Check the status of a capabilities analysis workflow
*AgentApi* | [**checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet**](docs/AgentApi.md#checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis/status | Check the status of a report analysis workflow
*AgentApi* | [**checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet**](docs/AgentApi.md#checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/triage/status | Check the status of a triage analysis workflow
*AgentApi* | [**createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost**](docs/AgentApi.md#createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost) | **POST** /v2/analyses/{analysis_id}/agent/capabilities | Queues a capabilities analysis workflow process
*AgentApi* | [**createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost**](docs/AgentApi.md#createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost) | **POST** /v2/analyses/{analysis_id}/agent/report-analysis | Queues a combined report analysis workflow process
*AgentApi* | [**createTriageTaskV2AnalysesAnalysisIdAgentTriagePost**](docs/AgentApi.md#createTriageTaskV2AnalysesAnalysisIdAgentTriagePost) | **POST** /v2/analyses/{analysis_id}/agent/triage | Queues a triage analysis workflow process
*AgentApi* | [**getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet**](docs/AgentApi.md#getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities | Get Capabilities Result
*AgentApi* | [**getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet**](docs/AgentApi.md#getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis | Get Report Analysis Result
*AgentApi* | [**getTriageResultV2AnalysesAnalysisIdAgentTriageGet**](docs/AgentApi.md#getTriageResultV2AnalysesAnalysisIdAgentTriageGet) | **GET** /v2/analyses/{analysis_id}/agent/triage | Get Triage Result
*AnalysesBulkActionsApi* | [**bulkAddAnalysisTags**](docs/AnalysesBulkActionsApi.md#bulkAddAnalysisTags) | **PATCH** /v2/analyses/tags/add | Bulk Add Analysis Tags
*AnalysesBulkActionsApi* | [**bulkDeleteAnalyses**](docs/AnalysesBulkActionsApi.md#bulkDeleteAnalyses) | **PATCH** /v2/analyses/delete | Bulk Delete Analyses
*AnalysesCommentsApi* | [**createAnalysisComment**](docs/AnalysesCommentsApi.md#createAnalysisComment) | **POST** /v2/analyses/{analysis_id}/comments | Create a comment for this analysis
*AnalysesCommentsApi* | [**deleteAnalysisComment**](docs/AnalysesCommentsApi.md#deleteAnalysisComment) | **DELETE** /v2/analyses/{analysis_id}/comments/{comment_id} | Delete a comment
*AnalysesCommentsApi* | [**getAnalysisComments**](docs/AnalysesCommentsApi.md#getAnalysisComments) | **GET** /v2/analyses/{analysis_id}/comments | Get comments for this analysis
*AnalysesCommentsApi* | [**updateAnalysisComment**](docs/AnalysesCommentsApi.md#updateAnalysisComment) | **PATCH** /v2/analyses/{analysis_id}/comments/{comment_id} | Update a comment
*AnalysesCoreApi* | [**addUserStringToAnalysis**](docs/AnalysesCoreApi.md#addUserStringToAnalysis) | **POST** /v3/analyses/{analysis_id}/user-provided-strings | Add a user-provided string to an analysis.
*AnalysesCoreApi* | [**createAnalysis**](docs/AnalysesCoreApi.md#createAnalysis) | **POST** /v2/analyses | Create Analysis
*AnalysesCoreApi* | [**deleteAnalysis**](docs/AnalysesCoreApi.md#deleteAnalysis) | **DELETE** /v2/analyses/{analysis_id} | Delete Analysis
*AnalysesCoreApi* | [**getAnalysisBasicInfo**](docs/AnalysesCoreApi.md#getAnalysisBasicInfo) | **GET** /v2/analyses/{analysis_id}/basic | Gets basic analysis information
*AnalysesCoreApi* | [**getAnalysisBasicInfo_0**](docs/AnalysesCoreApi.md#getAnalysisBasicInfo_0) | **GET** /v3/analyses/{analysis_id}/basic | Get basic analysis information
*AnalysesCoreApi* | [**getAnalysisBytes**](docs/AnalysesCoreApi.md#getAnalysisBytes) | **GET** /v3/analyses/{analysis_id}/bytes | Get the bytes of a binary
*AnalysesCoreApi* | [**getAnalysisFunctionMap**](docs/AnalysesCoreApi.md#getAnalysisFunctionMap) | **GET** /v2/analyses/{analysis_id}/func_maps | Get Analysis Function Map
*AnalysesCoreApi* | [**getAnalysisLogs**](docs/AnalysesCoreApi.md#getAnalysisLogs) | **GET** /v2/analyses/{analysis_id}/logs | Gets the logs of an analysis
*AnalysesCoreApi* | [**getAnalysisParams**](docs/AnalysesCoreApi.md#getAnalysisParams) | **GET** /v2/analyses/{analysis_id}/params | Gets analysis param information
*AnalysesCoreApi* | [**getAnalysisStatus**](docs/AnalysesCoreApi.md#getAnalysisStatus) | **GET** /v2/analyses/{analysis_id}/status | Gets the status of an analysis
*AnalysesCoreApi* | [**insertAnalysisLog**](docs/AnalysesCoreApi.md#insertAnalysisLog) | **POST** /v2/analyses/{analysis_id}/logs | Insert a log entry for an analysis
*AnalysesCoreApi* | [**listAnalyses**](docs/AnalysesCoreApi.md#listAnalyses) | **GET** /v2/analyses/list | Gets the most recent analyses
*AnalysesCoreApi* | [**lookupBinaryId**](docs/AnalysesCoreApi.md#lookupBinaryId) | **GET** /v2/analyses/lookup/{binary_id} | Gets the analysis ID from binary ID
*AnalysesCoreApi* | [**putAnalysisStrings**](docs/AnalysesCoreApi.md#putAnalysisStrings) | **PUT** /v2/analyses/{analysis_id}/strings | Add strings to the analysis
*AnalysesCoreApi* | [**requeueAnalysis**](docs/AnalysesCoreApi.md#requeueAnalysis) | **POST** /v2/analyses/{analysis_id}/requeue | Requeue Analysis
*AnalysesCoreApi* | [**updateAnalysis**](docs/AnalysesCoreApi.md#updateAnalysis) | **PATCH** /v2/analyses/{analysis_id} | Update Analysis
*AnalysesCoreApi* | [**updateAnalysisTags**](docs/AnalysesCoreApi.md#updateAnalysisTags) | **PATCH** /v2/analyses/{analysis_id}/tags | Update Analysis Tags
*AnalysesCoreApi* | [**uploadFile**](docs/AnalysesCoreApi.md#uploadFile) | **POST** /v2/upload | Upload File
*AnalysesCoreApi* | [**v3GetAnalysisStrings**](docs/AnalysesCoreApi.md#v3GetAnalysisStrings) | **GET** /v3/analyses/{analysis_id}/functions/strings | List strings for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisStringsStatus**](docs/AnalysesCoreApi.md#v3GetAnalysisStringsStatus) | **GET** /v3/analyses/{analysis_id}/functions/strings/status | Get the string-extraction status for an analysis.
*AnalysesResultsMetadataApi* | [**getAnalysisFunctionsPaginated**](docs/AnalysesResultsMetadataApi.md#getAnalysisFunctionsPaginated) | **GET** /v2/analyses/{analysis_id}/functions | Get functions from analysis
*AnalysesResultsMetadataApi* | [**getCapabilities**](docs/AnalysesResultsMetadataApi.md#getCapabilities) | **GET** /v2/analyses/{analysis_id}/capabilities | Gets the capabilities from the analysis
*AnalysesResultsMetadataApi* | [**getFunctionsList**](docs/AnalysesResultsMetadataApi.md#getFunctionsList) | **GET** /v2/analyses/{analysis_id}/functions/list | Gets functions from analysis
*AnalysesResultsMetadataApi* | [**getSbom**](docs/AnalysesResultsMetadataApi.md#getSbom) | **GET** /v2/analyses/{analysis_id}/sbom | Gets the software-bill-of-materials (SBOM) found in the analysis
*AnalysesResultsMetadataApi* | [**getTags**](docs/AnalysesResultsMetadataApi.md#getTags) | **GET** /v2/analyses/{analysis_id}/tags | Get function tags with maliciousness score
*AnalysesResultsMetadataApi* | [**getVulnerabilities**](docs/AnalysesResultsMetadataApi.md#getVulnerabilities) | **GET** /v2/analyses/{analysis_id}/vulnerabilities | Gets the vulnerabilities found in the analysis
*AnalysesXRefsApi* | [**getXrefByVaddr**](docs/AnalysesXRefsApi.md#getXrefByVaddr) | **GET** /v2/analyses/{analysis_id}/xrefs/{vaddr} | [Beta] Look up xrefs by virtual address
*AuthenticationUsersApi* | [**getUser**](docs/AuthenticationUsersApi.md#getUser) | **GET** /v2/users/{user_id} | Get a user\&#39;s public information
*AuthenticationUsersApi* | [**getUserActivity**](docs/AuthenticationUsersApi.md#getUserActivity) | **GET** /v2/users/activity | Get auth user activity
*AuthenticationUsersApi* | [**submitUserFeedback**](docs/AuthenticationUsersApi.md#submitUserFeedback) | **POST** /v2/users/feedback | Submit feedback about the application
*BinariesApi* | [**downloadZippedBinary**](docs/BinariesApi.md#downloadZippedBinary) | **GET** /v2/binaries/{binary_id}/download-zipped | Downloads a zipped binary with password protection
*BinariesApi* | [**getBinaryAdditionalDetails**](docs/BinariesApi.md#getBinaryAdditionalDetails) | **GET** /v2/binaries/{binary_id}/additional-details | Gets the additional details of a binary
*BinariesApi* | [**getBinaryAdditionalDetailsStatus**](docs/BinariesApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v2/binaries/{binary_id}/additional-details/status | Gets the status of the additional details task for a binary
*BinariesApi* | [**getBinaryAdditionalDetailsStatus_0**](docs/BinariesApi.md#getBinaryAdditionalDetailsStatus_0) | **GET** /v3/binaries/{binary_id}/additional-details/status | Get the additional-details extraction status for a binary.
*BinariesApi* | [**getBinaryAdditionalDetails_0**](docs/BinariesApi.md#getBinaryAdditionalDetails_0) | **GET** /v3/binaries/{binary_id}/additional-details | Get additional details for a binary.
*BinariesApi* | [**getBinaryDetails**](docs/BinariesApi.md#getBinaryDetails) | **GET** /v2/binaries/{binary_id}/details | Gets the details of a binary
*BinariesApi* | [**getBinaryDieInfo**](docs/BinariesApi.md#getBinaryDieInfo) | **GET** /v2/binaries/{binary_id}/die-info | Gets the die info of a binary
*BinariesApi* | [**getBinaryExternals**](docs/BinariesApi.md#getBinaryExternals) | **GET** /v2/binaries/{binary_id}/externals | Gets the external details of a binary
*BinariesApi* | [**getBinaryRelatedStatus**](docs/BinariesApi.md#getBinaryRelatedStatus) | **GET** /v2/binaries/{binary_id}/related/status | Gets the status of the unpack binary task for a binary
*BinariesApi* | [**getRelatedBinaries**](docs/BinariesApi.md#getRelatedBinaries) | **GET** /v2/binaries/{binary_id}/related | Gets the related binaries of a binary.
*CollectionsApi* | [**createCollection**](docs/CollectionsApi.md#createCollection) | **POST** /v2/collections | Creates new collection information
*CollectionsApi* | [**deleteCollection**](docs/CollectionsApi.md#deleteCollection) | **DELETE** /v2/collections/{collection_id} | Deletes a collection
*CollectionsApi* | [**getCollection**](docs/CollectionsApi.md#getCollection) | **GET** /v2/collections/{collection_id} | Returns a collection
*CollectionsApi* | [**listCollections**](docs/CollectionsApi.md#listCollections) | **GET** /v2/collections | Gets basic collections information
*CollectionsApi* | [**updateCollection**](docs/CollectionsApi.md#updateCollection) | **PATCH** /v2/collections/{collection_id} | Updates a collection
*CollectionsApi* | [**updateCollectionBinaries**](docs/CollectionsApi.md#updateCollectionBinaries) | **PATCH** /v2/collections/{collection_id}/binaries | Updates a collection binaries
*CollectionsApi* | [**updateCollectionTags**](docs/CollectionsApi.md#updateCollectionTags) | **PATCH** /v2/collections/{collection_id}/tags | Updates a collection tags
*CollectionsApi* | [**v3CreateCollection**](docs/CollectionsApi.md#v3CreateCollection) | **POST** /v3/collections | Create a collection.
*CollectionsApi* | [**v3GetCollection**](docs/CollectionsApi.md#v3GetCollection) | **GET** /v3/collections/{collection_id} | Get a collection.
*CollectionsApi* | [**v3ListCollections**](docs/CollectionsApi.md#v3ListCollections) | **GET** /v3/collections | List collections.
*CollectionsApi* | [**v3PatchCollectionBinaries**](docs/CollectionsApi.md#v3PatchCollectionBinaries) | **PATCH** /v3/collections/{collection_id}/binaries | Replace the binaries in a collection.
*CollectionsApi* | [**v3PatchCollectionTags**](docs/CollectionsApi.md#v3PatchCollectionTags) | **PATCH** /v3/collections/{collection_id}/tags | Replace the tags on a collection.
*ConfigApi* | [**getConfig**](docs/ConfigApi.md#getConfig) | **GET** /v2/config | Get Config
*ConversationsApi* | [**cancelRun**](docs/ConversationsApi.md#cancelRun) | **POST** /v2/conversations/{id}/cancel | Cancel an active run
*ConversationsApi* | [**confirmTool**](docs/ConversationsApi.md#confirmTool) | **POST** /v2/conversations/{id}/confirm | Approve or reject a pending tool confirmation
*ConversationsApi* | [**createConversation**](docs/ConversationsApi.md#createConversation) | **POST** /v2/conversations | Create a new conversation
*ConversationsApi* | [**getConversation**](docs/ConversationsApi.md#getConversation) | **GET** /v2/conversations/{id} | Get a conversation with its events
*ConversationsApi* | [**listConversations**](docs/ConversationsApi.md#listConversations) | **GET** /v2/conversations | List conversations for the authenticated user
*ConversationsApi* | [**sendMessage**](docs/ConversationsApi.md#sendMessage) | **POST** /v2/conversations/{id}/messages | Send a message and start an agentic run
*ConversationsApi* | [**streamEvents**](docs/ConversationsApi.md#streamEvents) | **GET** /v2/conversations/{id}/events | Stream conversation events (SSE)
*ExternalSourcesApi* | [**createExternalTaskVt**](docs/ExternalSourcesApi.md#createExternalTaskVt) | **POST** /v2/analysis/{analysis_id}/external/vt | Pulls data from VirusTotal
*ExternalSourcesApi* | [**getVtData**](docs/ExternalSourcesApi.md#getVtData) | **GET** /v2/analysis/{analysis_id}/external/vt | Get VirusTotal data
*ExternalSourcesApi* | [**getVtTaskStatus**](docs/ExternalSourcesApi.md#getVtTaskStatus) | **GET** /v2/analysis/{analysis_id}/external/vt/status | Check the status of VirusTotal data retrieval
*FirmwareApi* | [**getBinariesForFirmwareTask**](docs/FirmwareApi.md#getBinariesForFirmwareTask) | **GET** /v2/firmware/get-binaries/{task_id} | Upload firmware for unpacking
*FirmwareApi* | [**uploadFirmware**](docs/FirmwareApi.md#uploadFirmware) | **POST** /v2/firmware | Upload firmware for unpacking
*FunctionsAIDecompilationApi* | [**createAiDecompilation**](docs/FunctionsAIDecompilationApi.md#createAiDecompilation) | **POST** /v3/functions/{function_id}/ai-decompilation | Start AI decompilation
*FunctionsAIDecompilationApi* | [**createAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#createAiDecompilationComment) | **POST** /v2/functions/{function_id}/ai-decompilation/comments | Create a comment for this function
*FunctionsAIDecompilationApi* | [**createAiDecompilationTask**](docs/FunctionsAIDecompilationApi.md#createAiDecompilationTask) | **POST** /v2/functions/{function_id}/ai-decompilation | Begins AI Decompilation Process
*FunctionsAIDecompilationApi* | [**deleteAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#deleteAiDecompilationComment) | **DELETE** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Delete a comment
*FunctionsAIDecompilationApi* | [**deleteAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#deleteAiDecompilationInlineComment) | **DELETE** /v3/functions/{function_id}/ai-decompilation/inline-comments/{line} | Delete a single inline comment
*FunctionsAIDecompilationApi* | [**getAiDecompilation**](docs/FunctionsAIDecompilationApi.md#getAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation | Get AI decompilation result
*FunctionsAIDecompilationApi* | [**getAiDecompilationComments**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationComments) | **GET** /v2/functions/{function_id}/ai-decompilation/comments | Get comments for this function
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineComments) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments | Get AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineCommentsStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineCommentsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments/status | Get inline comments generation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationRating) | **GET** /v2/functions/{function_id}/ai-decompilation/rating | Get rating for AI decompilation
*FunctionsAIDecompilationApi* | [**getAiDecompilationStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/status | Get AI decompilation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummary) | **GET** /v3/functions/{function_id}/ai-decompilation/summary | Get AI decompilation summary
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummaryStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummaryStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/summary/status | Get summary generation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationTaskResult**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTaskResult) | **GET** /v2/functions/{function_id}/ai-decompilation | Polls AI Decompilation Process
*FunctionsAIDecompilationApi* | [**getAiDecompilationTaskStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTaskStatus) | **GET** /v2/functions/{function_id}/ai-decompilation/status | Check the status of a function ai decompilation
*FunctionsAIDecompilationApi* | [**getAiDecompilationTokenised**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTokenised) | **GET** /v3/functions/{function_id}/ai-decompilation/tokenised | Get tokenised AI decompilation with function mapping
*FunctionsAIDecompilationApi* | [**patchAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#patchAiDecompilationInlineComment) | **PATCH** /v3/functions/{function_id}/ai-decompilation/inline-comments | Update a single inline comment
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationInlineComments) | **POST** /v3/functions/{function_id}/ai-decompilation/inline-comments | Regenerate AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationSummary) | **POST** /v3/functions/{function_id}/ai-decompilation/summary | Regenerate AI decompilation summary
*FunctionsAIDecompilationApi* | [**streamAiDecompilation**](docs/FunctionsAIDecompilationApi.md#streamAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation/events | Stream live AI decompilation output (SSE)
*FunctionsAIDecompilationApi* | [**updateAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#updateAiDecompilationComment) | **PATCH** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Update a comment
*FunctionsAIDecompilationApi* | [**upsertAiDecompilationOverrides**](docs/FunctionsAIDecompilationApi.md#upsertAiDecompilationOverrides) | **PATCH** /v3/functions/{function_id}/ai-decompilation/overrides | Upsert variable/function name overrides
*FunctionsAIDecompilationApi* | [**upsertAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation
*FunctionsCoreApi* | [**addFunctionCallee**](docs/FunctionsCoreApi.md#addFunctionCallee) | **POST** /v3/functions/{function_id}/callees | Add a callee to a function
*FunctionsCoreApi* | [**addUserStringToFunction**](docs/FunctionsCoreApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.
*FunctionsCoreApi* | [**aiUnstrip**](docs/FunctionsCoreApi.md#aiUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/ai-unstrip | Performs matching and auto-unstrip for an analysis and its functions
*FunctionsCoreApi* | [**analysisFunctionMatching**](docs/FunctionsCoreApi.md#analysisFunctionMatching) | **POST** /v2/analyses/{analysis_id}/functions/matches | Perform matching for the functions of an analysis
*FunctionsCoreApi* | [**autoUnstrip**](docs/FunctionsCoreApi.md#autoUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/auto-unstrip | Performs matching and auto-unstrip for an analysis and its functions
*FunctionsCoreApi* | [**batchFunctionMatching**](docs/FunctionsCoreApi.md#batchFunctionMatching) | **POST** /v2/functions/matches | Perform function matching for an arbitrary batch of functions, binaries or collections
*FunctionsCoreApi* | [**cancelAiUnstrip**](docs/FunctionsCoreApi.md#cancelAiUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/ai-unstrip/cancel | Cancels a running ai-unstrip
*FunctionsCoreApi* | [**cancelAutoUnstrip**](docs/FunctionsCoreApi.md#cancelAutoUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/unstrip/cancel | Cancels a running auto-unstrip
*FunctionsCoreApi* | [**getAnalysisStrings**](docs/FunctionsCoreApi.md#getAnalysisStrings) | **GET** /v2/analyses/{analysis_id}/functions/strings | Get string information found in the Analysis
*FunctionsCoreApi* | [**getAnalysisStringsStatus**](docs/FunctionsCoreApi.md#getAnalysisStringsStatus) | **GET** /v2/analyses/{analysis_id}/functions/strings/status | Get string processing state for the Analysis
*FunctionsCoreApi* | [**getFunctionBlocks**](docs/FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v2/functions/{function_id}/blocks | Get disassembly blocks related to the function
*FunctionsCoreApi* | [**getFunctionCalleesCallers**](docs/FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v2/functions/{function_id}/callees_callers | Get list of functions that call or are called by the specified function
*FunctionsCoreApi* | [**getFunctionCalleesCallersBulk**](docs/FunctionsCoreApi.md#getFunctionCalleesCallersBulk) | **GET** /v2/functions/callees_callers | Get list of functions that call or are called for a list of functions
*FunctionsCoreApi* | [**getFunctionCapabilities**](docs/FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v2/functions/{function_id}/capabilities | Retrieve a functions capabilities
*FunctionsCoreApi* | [**getFunctionDetails**](docs/FunctionsCoreApi.md#getFunctionDetails) | **GET** /v2/functions/{function_id} | Get function details
*FunctionsCoreApi* | [**getFunctionStrings**](docs/FunctionsCoreApi.md#getFunctionStrings) | **GET** /v2/functions/{function_id}/strings | Get string information found in the function
*FunctionsCoreApi* | [**getFunctionStrings_0**](docs/FunctionsCoreApi.md#getFunctionStrings_0) | **GET** /v3/functions/{function_id}/strings | List strings for a function.
*FunctionsDataTypesApi* | [**generateFunctionDataTypesForAnalysis**](docs/FunctionsDataTypesApi.md#generateFunctionDataTypesForAnalysis) | **POST** /v2/analyses/{analysis_id}/functions/data_types | Generate Function Data Types
*FunctionsDataTypesApi* | [**generateFunctionDataTypesForFunctions**](docs/FunctionsDataTypesApi.md#generateFunctionDataTypesForFunctions) | **POST** /v2/functions/data_types | Generate Function Data Types for an arbitrary list of functions
*FunctionsDataTypesApi* | [**getFunctionDataTypes**](docs/FunctionsDataTypesApi.md#getFunctionDataTypes) | **GET** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Get Function Data Types
*FunctionsDataTypesApi* | [**listFunctionDataTypesForAnalysis**](docs/FunctionsDataTypesApi.md#listFunctionDataTypesForAnalysis) | **GET** /v2/analyses/{analysis_id}/functions/data_types | List Function Data Types
*FunctionsDataTypesApi* | [**listFunctionDataTypesForFunctions**](docs/FunctionsDataTypesApi.md#listFunctionDataTypesForFunctions) | **GET** /v2/functions/data_types | List Function Data Types
*FunctionsDataTypesApi* | [**updateFunctionDataTypes**](docs/FunctionsDataTypesApi.md#updateFunctionDataTypes) | **PUT** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Update Function Data Types
*FunctionsRenamingHistoryApi* | [**batchRenameFunction**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunction) | **POST** /v2/functions/rename/batch | Batch Rename Functions
*FunctionsRenamingHistoryApi* | [**batchRenameFunctions**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunctions) | **POST** /v3/functions/rename | Batch rename functions
*FunctionsRenamingHistoryApi* | [**getFunctionHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionHistory) | **GET** /v3/functions/{function_id}/history | Get function name history
*FunctionsRenamingHistoryApi* | [**getFunctionNameHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionNameHistory) | **GET** /v2/functions/history/{function_id} | Get Function Name History
*FunctionsRenamingHistoryApi* | [**renameFunction**](docs/FunctionsRenamingHistoryApi.md#renameFunction) | **POST** /v3/functions/{function_id}/rename | Rename a function
*FunctionsRenamingHistoryApi* | [**renameFunctionId**](docs/FunctionsRenamingHistoryApi.md#renameFunctionId) | **POST** /v2/functions/rename/{function_id} | Rename Function
*FunctionsRenamingHistoryApi* | [**revertFunctionName**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v2/functions/history/{function_id}/{history_id} | Revert the function name
*FunctionsRenamingHistoryApi* | [**revertFunctionName_0**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName_0) | **POST** /v3/functions/{function_id}/history/{history_id}/revert | Revert function name
*ModelsApi* | [**getModels**](docs/ModelsApi.md#getModels) | **GET** /v2/models | Gets models
*ReportsApi* | [**createPdfReport**](docs/ReportsApi.md#createPdfReport) | **POST** /v3/analyses/{analysis_id}/pdf | Start PDF report generation
*ReportsApi* | [**downloadPdfReport**](docs/ReportsApi.md#downloadPdfReport) | **GET** /v3/analyses/{analysis_id}/pdf | Download generated PDF report
*ReportsApi* | [**getPdfReportStatus**](docs/ReportsApi.md#getPdfReportStatus) | **GET** /v3/analyses/{analysis_id}/pdf/status | Get PDF report workflow status
*SearchApi* | [**searchBinaries**](docs/SearchApi.md#searchBinaries) | **GET** /v2/search/binaries | Binaries search
*SearchApi* | [**searchCollections**](docs/SearchApi.md#searchCollections) | **GET** /v2/search/collections | Collections search
*SearchApi* | [**searchFunctions**](docs/SearchApi.md#searchFunctions) | **GET** /v2/search/functions | Functions search
*SearchApi* | [**searchTags**](docs/SearchApi.md#searchTags) | **GET** /v2/search/tags | Tags search


## Documentation for Models

 - [APIError](APIError.md)
 - [AddCalleeInputBody](AddCalleeInputBody.md)
 - [AddUserStringInputBody](AddUserStringInputBody.md)
 - [AddUserStringToFunctionInputBody](AddUserStringToFunctionInputBody.md)
 - [AdditionalDetailsStatusResponse](AdditionalDetailsStatusResponse.md)
 - [Addr](Addr.md)
 - [AiDecompilationRating](AiDecompilationRating.md)
 - [AiDecompilationTaskStatus](AiDecompilationTaskStatus.md)
 - [AiUnstripRequest](AiUnstripRequest.md)
 - [AnalysisAccessInfo](AnalysisAccessInfo.md)
 - [AnalysisBasicInfoOutputBody](AnalysisBasicInfoOutputBody.md)
 - [AnalysisBulkAddTagsRequest](AnalysisBulkAddTagsRequest.md)
 - [AnalysisBulkAddTagsResponse](AnalysisBulkAddTagsResponse.md)
 - [AnalysisBulkAddTagsResponseItem](AnalysisBulkAddTagsResponseItem.md)
 - [AnalysisConfig](AnalysisConfig.md)
 - [AnalysisCreateRequest](AnalysisCreateRequest.md)
 - [AnalysisCreateResponse](AnalysisCreateResponse.md)
 - [AnalysisDetailResponse](AnalysisDetailResponse.md)
 - [AnalysisFunctionMapping](AnalysisFunctionMapping.md)
 - [AnalysisFunctionMatchingRequest](AnalysisFunctionMatchingRequest.md)
 - [AnalysisFunctions](AnalysisFunctions.md)
 - [AnalysisFunctionsList](AnalysisFunctionsList.md)
 - [AnalysisLogMessage](AnalysisLogMessage.md)
 - [AnalysisLogs](AnalysisLogs.md)
 - [AnalysisRecord](AnalysisRecord.md)
 - [AnalysisReport](AnalysisReport.md)
 - [AnalysisScope](AnalysisScope.md)
 - [AnalysisStringFunction](AnalysisStringFunction.md)
 - [AnalysisStringInput](AnalysisStringInput.md)
 - [AnalysisStringItem](AnalysisStringItem.md)
 - [AnalysisStringsResponse](AnalysisStringsResponse.md)
 - [AnalysisStringsStatusResponse](AnalysisStringsStatusResponse.md)
 - [AnalysisTags](AnalysisTags.md)
 - [AnalysisUpdateRequest](AnalysisUpdateRequest.md)
 - [AnalysisUpdateTagsRequest](AnalysisUpdateTagsRequest.md)
 - [AnalysisUpdateTagsResponse](AnalysisUpdateTagsResponse.md)
 - [ApiCall](ApiCall.md)
 - [AppApiRestV2AgentSchemaCapability](AppApiRestV2AgentSchemaCapability.md)
 - [AppApiRestV2AnalysesEnumsOrderBy](AppApiRestV2AnalysesEnumsOrderBy.md)
 - [AppApiRestV2CollectionsEnumsOrderBy](AppApiRestV2CollectionsEnumsOrderBy.md)
 - [AppApiRestV2FunctionsResponsesFunction](AppApiRestV2FunctionsResponsesFunction.md)
 - [AppApiRestV2FunctionsTypesFunction](AppApiRestV2FunctionsTypesFunction.md)
 - [AppApiRestV2InfoTypesCapability](AppApiRestV2InfoTypesCapability.md)
 - [Argument](Argument.md)
 - [AttemptFailedEvent](AttemptFailedEvent.md)
 - [AttemptStartedEvent](AttemptStartedEvent.md)
 - [AutoRunAgents](AutoRunAgents.md)
 - [AutoUnstripRequest](AutoUnstripRequest.md)
 - [AutoUnstripResponse](AutoUnstripResponse.md)
 - [BaseResponse](BaseResponse.md)
 - [BaseResponseAdditionalDetailsStatusResponse](BaseResponseAdditionalDetailsStatusResponse.md)
 - [BaseResponseAnalysisBulkAddTagsResponse](BaseResponseAnalysisBulkAddTagsResponse.md)
 - [BaseResponseAnalysisCreateResponse](BaseResponseAnalysisCreateResponse.md)
 - [BaseResponseAnalysisDetailResponse](BaseResponseAnalysisDetailResponse.md)
 - [BaseResponseAnalysisFunctionMapping](BaseResponseAnalysisFunctionMapping.md)
 - [BaseResponseAnalysisFunctions](BaseResponseAnalysisFunctions.md)
 - [BaseResponseAnalysisFunctionsList](BaseResponseAnalysisFunctionsList.md)
 - [BaseResponseAnalysisStringsResponse](BaseResponseAnalysisStringsResponse.md)
 - [BaseResponseAnalysisStringsStatusResponse](BaseResponseAnalysisStringsStatusResponse.md)
 - [BaseResponseAnalysisTags](BaseResponseAnalysisTags.md)
 - [BaseResponseAnalysisUpdateTagsResponse](BaseResponseAnalysisUpdateTagsResponse.md)
 - [BaseResponseBasic](BaseResponseBasic.md)
 - [BaseResponseBinariesRelatedStatusResponse](BaseResponseBinariesRelatedStatusResponse.md)
 - [BaseResponseBinaryAdditionalResponse](BaseResponseBinaryAdditionalResponse.md)
 - [BaseResponseBinaryDetailsResponse](BaseResponseBinaryDetailsResponse.md)
 - [BaseResponseBinaryExternalsResponse](BaseResponseBinaryExternalsResponse.md)
 - [BaseResponseBinarySearchResponse](BaseResponseBinarySearchResponse.md)
 - [BaseResponseBool](BaseResponseBool.md)
 - [BaseResponseCalleesCallerFunctionsResponse](BaseResponseCalleesCallerFunctionsResponse.md)
 - [BaseResponseCapabilities](BaseResponseCapabilities.md)
 - [BaseResponseCapabilitiesAgentResponse](BaseResponseCapabilitiesAgentResponse.md)
 - [BaseResponseChildBinariesResponse](BaseResponseChildBinariesResponse.md)
 - [BaseResponseCollectionBinariesUpdateResponse](BaseResponseCollectionBinariesUpdateResponse.md)
 - [BaseResponseCollectionResponse](BaseResponseCollectionResponse.md)
 - [BaseResponseCollectionSearchResponse](BaseResponseCollectionSearchResponse.md)
 - [BaseResponseCollectionTagsUpdateResponse](BaseResponseCollectionTagsUpdateResponse.md)
 - [BaseResponseCommentResponse](BaseResponseCommentResponse.md)
 - [BaseResponseConfigResponse](BaseResponseConfigResponse.md)
 - [BaseResponseCreated](BaseResponseCreated.md)
 - [BaseResponseDict](BaseResponseDict.md)
 - [BaseResponseExternalResponse](BaseResponseExternalResponse.md)
 - [BaseResponseFunctionBlocksResponse](BaseResponseFunctionBlocksResponse.md)
 - [BaseResponseFunctionCapabilityResponse](BaseResponseFunctionCapabilityResponse.md)
 - [BaseResponseFunctionDataTypes](BaseResponseFunctionDataTypes.md)
 - [BaseResponseFunctionDataTypesList](BaseResponseFunctionDataTypesList.md)
 - [BaseResponseFunctionSearchResponse](BaseResponseFunctionSearchResponse.md)
 - [BaseResponseFunctionStringsResponse](BaseResponseFunctionStringsResponse.md)
 - [BaseResponseFunctionTaskResponse](BaseResponseFunctionTaskResponse.md)
 - [BaseResponseFunctionsDetailResponse](BaseResponseFunctionsDetailResponse.md)
 - [BaseResponseGenerateFunctionDataTypes](BaseResponseGenerateFunctionDataTypes.md)
 - [BaseResponseGenerationStatusList](BaseResponseGenerationStatusList.md)
 - [BaseResponseGetAiDecompilationTask](BaseResponseGetAiDecompilationTask.md)
 - [BaseResponseGetPublicUserResponse](BaseResponseGetPublicUserResponse.md)
 - [BaseResponseListCalleesCallerFunctionsResponse](BaseResponseListCalleesCallerFunctionsResponse.md)
 - [BaseResponseListCollectionResults](BaseResponseListCollectionResults.md)
 - [BaseResponseListCommentResponse](BaseResponseListCommentResponse.md)
 - [BaseResponseListDieMatch](BaseResponseListDieMatch.md)
 - [BaseResponseListFunctionNameHistory](BaseResponseListFunctionNameHistory.md)
 - [BaseResponseListSBOM](BaseResponseListSBOM.md)
 - [BaseResponseListUserActivityResponse](BaseResponseListUserActivityResponse.md)
 - [BaseResponseLogs](BaseResponseLogs.md)
 - [BaseResponseModelsResponse](BaseResponseModelsResponse.md)
 - [BaseResponseParams](BaseResponseParams.md)
 - [BaseResponseQueuedWorkflowTaskResponse](BaseResponseQueuedWorkflowTaskResponse.md)
 - [BaseResponseRecent](BaseResponseRecent.md)
 - [BaseResponseReportAnalysisResponse](BaseResponseReportAnalysisResponse.md)
 - [BaseResponseStatus](BaseResponseStatus.md)
 - [BaseResponseStr](BaseResponseStr.md)
 - [BaseResponseTagSearchResponse](BaseResponseTagSearchResponse.md)
 - [BaseResponseTaskResponse](BaseResponseTaskResponse.md)
 - [BaseResponseTaskStatusResponse](BaseResponseTaskStatusResponse.md)
 - [BaseResponseTriageReportResponse](BaseResponseTriageReportResponse.md)
 - [BaseResponseUnionGetAiDecompilationRatingResponseNoneType](BaseResponseUnionGetAiDecompilationRatingResponseNoneType.md)
 - [BaseResponseUploadResponse](BaseResponseUploadResponse.md)
 - [BaseResponseVulnerabilities](BaseResponseVulnerabilities.md)
 - [BaseResponseXrefResponse](BaseResponseXrefResponse.md)
 - [Basic](Basic.md)
 - [BatchRenameInputBody](BatchRenameInputBody.md)
 - [BatchRenameItem](BatchRenameItem.md)
 - [BatchRenameOutputBody](BatchRenameOutputBody.md)
 - [BinariesRelatedStatusResponse](BinariesRelatedStatusResponse.md)
 - [BinariesTaskStatus](BinariesTaskStatus.md)
 - [Binary](Binary.md)
 - [BinaryAdditionalDetailsDataResponse](BinaryAdditionalDetailsDataResponse.md)
 - [BinaryAdditionalResponse](BinaryAdditionalResponse.md)
 - [BinaryConfig](BinaryConfig.md)
 - [BinaryDetailsResponse](BinaryDetailsResponse.md)
 - [BinaryExternalsResponse](BinaryExternalsResponse.md)
 - [BinarySearchResponse](BinarySearchResponse.md)
 - [BinarySearchResult](BinarySearchResult.md)
 - [BinaryTaskStatus](BinaryTaskStatus.md)
 - [BulkDeleteAnalysesRequest](BulkDeleteAnalysesRequest.md)
 - [CalleeFunctionInfo](CalleeFunctionInfo.md)
 - [CalleesCallerFunctionsResponse](CalleesCallerFunctionsResponse.md)
 - [CallerFunctionInfo](CallerFunctionInfo.md)
 - [Capabilities](Capabilities.md)
 - [CapabilitiesAgentResponse](CapabilitiesAgentResponse.md)
 - [ChildBinariesResponse](ChildBinariesResponse.md)
 - [CodeSignatureModel](CodeSignatureModel.md)
 - [CollectionBinariesUpdateRequest](CollectionBinariesUpdateRequest.md)
 - [CollectionBinariesUpdateResponse](CollectionBinariesUpdateResponse.md)
 - [CollectionBinaryResponse](CollectionBinaryResponse.md)
 - [CollectionCreateRequest](CollectionCreateRequest.md)
 - [CollectionListItem](CollectionListItem.md)
 - [CollectionListItemBody](CollectionListItemBody.md)
 - [CollectionResponse](CollectionResponse.md)
 - [CollectionResponseBinariesInner](CollectionResponseBinariesInner.md)
 - [CollectionScope](CollectionScope.md)
 - [CollectionSearchResponse](CollectionSearchResponse.md)
 - [CollectionSearchResult](CollectionSearchResult.md)
 - [CollectionTagsUpdateRequest](CollectionTagsUpdateRequest.md)
 - [CollectionTagsUpdateResponse](CollectionTagsUpdateResponse.md)
 - [CollectionUpdateRequest](CollectionUpdateRequest.md)
 - [CommentBase](CommentBase.md)
 - [CommentResponse](CommentResponse.md)
 - [CommentUpdateRequest](CommentUpdateRequest.md)
 - [CommentsData](CommentsData.md)
 - [ConfigResponse](ConfigResponse.md)
 - [ConfirmToolInputBody](ConfirmToolInputBody.md)
 - [Connection](Connection.md)
 - [Context](Context.md)
 - [Conversation](Conversation.md)
 - [ConversationContext](ConversationContext.md)
 - [ConversationWithEvents](ConversationWithEvents.md)
 - [CreateAIDecompOutputBody](CreateAIDecompOutputBody.md)
 - [CreateCheckoutSessionInputBody](CreateCheckoutSessionInputBody.md)
 - [CreateCollectionInputBody](CreateCollectionInputBody.md)
 - [CreateCollectionOutputBody](CreateCollectionOutputBody.md)
 - [CreateConversationRequest](CreateConversationRequest.md)
 - [CreatePortalSessionInputBody](CreatePortalSessionInputBody.md)
 - [Created](Created.md)
 - [DecompFailedEvent](DecompFailedEvent.md)
 - [DecompFinishedEvent](DecompFinishedEvent.md)
 - [DecompilationCommentContext](DecompilationCommentContext.md)
 - [DecompilationData](DecompilationData.md)
 - [DieMatch](DieMatch.md)
 - [DnsQuery](DnsQuery.md)
 - [DrakvufFileMetadata](DrakvufFileMetadata.md)
 - [DynamicExecutionStatus](DynamicExecutionStatus.md)
 - [DynamicExecutionStatusResponse](DynamicExecutionStatusResponse.md)
 - [ELFImportModel](ELFImportModel.md)
 - [ELFModel](ELFModel.md)
 - [ELFRelocation](ELFRelocation.md)
 - [ELFSection](ELFSection.md)
 - [ELFSecurity](ELFSecurity.md)
 - [ELFSegment](ELFSegment.md)
 - [ELFSymbol](ELFSymbol.md)
 - [ElfDynamicEntry](ElfDynamicEntry.md)
 - [EntrypointModel](EntrypointModel.md)
 - [Enumeration](Enumeration.md)
 - [ErrorBody](ErrorBody.md)
 - [ErrorModel](ErrorModel.md)
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
 - [EventTOOLCALLRESULT](EventTOOLCALLRESULT.md)
 - [EventTOOLCALLSTART](EventTOOLCALLSTART.md)
 - [EventTOOLCONFIRMATIONREQUIRED](EventTOOLCONFIRMATIONREQUIRED.md)
 - [EventWarning](EventWarning.md)
 - [ExportModel](ExportModel.md)
 - [ExternalResponse](ExternalResponse.md)
 - [ExtractedFileEntry](ExtractedFileEntry.md)
 - [ExtractedURL](ExtractedURL.md)
 - [FileActivityEntry](FileActivityEntry.md)
 - [FileFormat](FileFormat.md)
 - [FileHashes](FileHashes.md)
 - [FileMetadata](FileMetadata.md)
 - [Filters](Filters.md)
 - [FunctionBlockDestinationResponse](FunctionBlockDestinationResponse.md)
 - [FunctionBlockResponse](FunctionBlockResponse.md)
 - [FunctionBlocksResponse](FunctionBlocksResponse.md)
 - [FunctionBoundary](FunctionBoundary.md)
 - [FunctionCapabilityResponse](FunctionCapabilityResponse.md)
 - [FunctionCommentCreateRequest](FunctionCommentCreateRequest.md)
 - [FunctionDataTypes](FunctionDataTypes.md)
 - [FunctionDataTypesList](FunctionDataTypesList.md)
 - [FunctionDataTypesListItem](FunctionDataTypesListItem.md)
 - [FunctionDataTypesParams](FunctionDataTypesParams.md)
 - [FunctionDataTypesStatus](FunctionDataTypesStatus.md)
 - [FunctionHeader](FunctionHeader.md)
 - [FunctionInfoInput](FunctionInfoInput.md)
 - [FunctionInfoInputFuncDepsInner](FunctionInfoInputFuncDepsInner.md)
 - [FunctionInfoOutput](FunctionInfoOutput.md)
 - [FunctionListItem](FunctionListItem.md)
 - [FunctionLocalVariableResponse](FunctionLocalVariableResponse.md)
 - [FunctionMapping](FunctionMapping.md)
 - [FunctionMappingFull](FunctionMappingFull.md)
 - [FunctionMatch](FunctionMatch.md)
 - [FunctionMatchingFilters](FunctionMatchingFilters.md)
 - [FunctionMatchingRequest](FunctionMatchingRequest.md)
 - [FunctionMatchingResponse](FunctionMatchingResponse.md)
 - [FunctionNameHistory](FunctionNameHistory.md)
 - [FunctionParamResponse](FunctionParamResponse.md)
 - [FunctionRename](FunctionRename.md)
 - [FunctionRenameMap](FunctionRenameMap.md)
 - [FunctionSearchResponse](FunctionSearchResponse.md)
 - [FunctionSearchResult](FunctionSearchResult.md)
 - [FunctionSourceType](FunctionSourceType.md)
 - [FunctionString](FunctionString.md)
 - [FunctionStringItem](FunctionStringItem.md)
 - [FunctionStringsResponse](FunctionStringsResponse.md)
 - [FunctionTaskResponse](FunctionTaskResponse.md)
 - [FunctionTaskStatus](FunctionTaskStatus.md)
 - [FunctionTypeInput](FunctionTypeInput.md)
 - [FunctionTypeOutput](FunctionTypeOutput.md)
 - [FunctionsDetailResponse](FunctionsDetailResponse.md)
 - [FunctionsListRename](FunctionsListRename.md)
 - [GenerateFunctionDataTypes](GenerateFunctionDataTypes.md)
 - [GeneratePDFOutputBody](GeneratePDFOutputBody.md)
 - [GenerationStatusList](GenerationStatusList.md)
 - [GetAdditionalDetailsOutputBody](GetAdditionalDetailsOutputBody.md)
 - [GetAdditionalDetailsStatusOutputBody](GetAdditionalDetailsStatusOutputBody.md)
 - [GetAiDecompilationRatingResponse](GetAiDecompilationRatingResponse.md)
 - [GetAiDecompilationTask](GetAiDecompilationTask.md)
 - [GetAnalysisStringsStatusOutputBody](GetAnalysisStringsStatusOutputBody.md)
 - [GetCollectionOutputBody](GetCollectionOutputBody.md)
 - [GetProductsOutputBody](GetProductsOutputBody.md)
 - [GetPublicUserResponse](GetPublicUserResponse.md)
 - [GetSubscriptionOutputBody](GetSubscriptionOutputBody.md)
 - [GlobalVariable](GlobalVariable.md)
 - [HistoryEntry](HistoryEntry.md)
 - [HttpRequest](HttpRequest.md)
 - [IOC](IOC.md)
 - [ISA](ISA.md)
 - [IconModel](IconModel.md)
 - [ImportModel](ImportModel.md)
 - [InlineComment](InlineComment.md)
 - [InsertAnalysisLogRequest](InsertAnalysisLogRequest.md)
 - [InverseFunctionMapItem](InverseFunctionMapItem.md)
 - [InverseStringMapItem](InverseStringMapItem.md)
 - [InverseValue](InverseValue.md)
 - [ListAnalysisStringsOutputBody](ListAnalysisStringsOutputBody.md)
 - [ListCollectionResults](ListCollectionResults.md)
 - [ListCollectionsOutputBody](ListCollectionsOutputBody.md)
 - [ListFunctionStringsOutputBody](ListFunctionStringsOutputBody.md)
 - [Logs](Logs.md)
 - [MITRETechnique](MITRETechnique.md)
 - [MatchedFunction](MatchedFunction.md)
 - [MatchedFunctionSuggestion](MatchedFunctionSuggestion.md)
 - [MemdumpEntry](MemdumpEntry.md)
 - [MetaModel](MetaModel.md)
 - [ModelName](ModelName.md)
 - [ModelsResponse](ModelsResponse.md)
 - [ModuleLoadEntry](ModuleLoadEntry.md)
 - [MutexEntry](MutexEntry.md)
 - [NameConfidence](NameConfidence.md)
 - [NameSourceType](NameSourceType.md)
 - [NetworkActivity](NetworkActivity.md)
 - [NumericAddr](NumericAddr.md)
 - [Order](Order.md)
 - [PDBDebugModel](PDBDebugModel.md)
 - [PEModel](PEModel.md)
 - [PaginationModel](PaginationModel.md)
 - [Params](Params.md)
 - [PatchCollectionBinariesInputBody](PatchCollectionBinariesInputBody.md)
 - [PatchCollectionBinariesOutputBody](PatchCollectionBinariesOutputBody.md)
 - [PatchCollectionTagsInputBody](PatchCollectionTagsInputBody.md)
 - [PatchCollectionTagsOutputBody](PatchCollectionTagsOutputBody.md)
 - [PatchCommentBody](PatchCommentBody.md)
 - [Platform](Platform.md)
 - [PriceOutput](PriceOutput.md)
 - [PriceSummary](PriceSummary.md)
 - [ProcessActivityEntry](ProcessActivityEntry.md)
 - [ProcessExtractedFiles](ProcessExtractedFiles.md)
 - [ProcessMemdumps](ProcessMemdumps.md)
 - [ProcessNode](ProcessNode.md)
 - [ProcessTree](ProcessTree.md)
 - [ProductOutput](ProductOutput.md)
 - [ProductSummary](ProductSummary.md)
 - [ProgressMessage](ProgressMessage.md)
 - [ProseEvent](ProseEvent.md)
 - [PutAnalysisStringsRequest](PutAnalysisStringsRequest.md)
 - [QueuedWorkflowTaskResponse](QueuedWorkflowTaskResponse.md)
 - [ReAnalysisForm](ReAnalysisForm.md)
 - [Recent](Recent.md)
 - [RegenerateOutputBody](RegenerateOutputBody.md)
 - [RegenerateTarget](RegenerateTarget.md)
 - [RegistryOperation](RegistryOperation.md)
 - [RelativeBinaryResponse](RelativeBinaryResponse.md)
 - [RenameAppliedEvent](RenameAppliedEvent.md)
 - [RenameInputBody](RenameInputBody.md)
 - [RenameOutputBody](RenameOutputBody.md)
 - [ReplacementValue](ReplacementValue.md)
 - [ReportAnalysisResponse](ReportAnalysisResponse.md)
 - [ReportEvent](ReportEvent.md)
 - [ReportInfo](ReportInfo.md)
 - [ReportOptions](ReportOptions.md)
 - [SBOM](SBOM.md)
 - [SBOMPackage](SBOMPackage.md)
 - [SandboxOptions](SandboxOptions.md)
 - [SandboxStartMethod](SandboxStartMethod.md)
 - [SandboxTimeout](SandboxTimeout.md)
 - [ScheduledTaskEntry](ScheduledTaskEntry.md)
 - [ScrapeThirdPartyConfig](ScrapeThirdPartyConfig.md)
 - [SectionModel](SectionModel.md)
 - [SecurityModel](SecurityModel.md)
 - [SegmentInfo](SegmentInfo.md)
 - [SendMessageRequest](SendMessageRequest.md)
 - [ServiceEntry](ServiceEntry.md)
 - [SessionOutputBody](SessionOutputBody.md)
 - [SingleCodeCertificateModel](SingleCodeCertificateModel.md)
 - [SingleCodeSignatureModel](SingleCodeSignatureModel.md)
 - [SinglePDBEntryModel](SinglePDBEntryModel.md)
 - [SingleSectionModel](SingleSectionModel.md)
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
 - [SseEventToolCallResultData](SseEventToolCallResultData.md)
 - [SseEventToolCallStartData](SseEventToolCallStartData.md)
 - [SseEventToolConfirmationRequiredData](SseEventToolConfirmationRequiredData.md)
 - [StackVariable](StackVariable.md)
 - [StartupInfo](StartupInfo.md)
 - [StatusInput](StatusInput.md)
 - [StatusOutput](StatusOutput.md)
 - [StatusResponse](StatusResponse.md)
 - [StreamAiDecompilation200ResponseInner](StreamAiDecompilation200ResponseInner.md)
 - [StreamEvents200ResponseInner](StreamEvents200ResponseInner.md)
 - [StringFunctions](StringFunctions.md)
 - [StringSource](StringSource.md)
 - [Structure](Structure.md)
 - [StructureMember](StructureMember.md)
 - [SubmitUserFeedbackRequest](SubmitUserFeedbackRequest.md)
 - [SummaryData](SummaryData.md)
 - [Symbols](Symbols.md)
 - [Tag](Tag.md)
 - [TagItem](TagItem.md)
 - [TagResponse](TagResponse.md)
 - [TagSearchResponse](TagSearchResponse.md)
 - [TagSearchResult](TagSearchResult.md)
 - [TaskResponse](TaskResponse.md)
 - [TaskStatus](TaskStatus.md)
 - [TaskStatusResponse](TaskStatusResponse.md)
 - [TimestampModel](TimestampModel.md)
 - [TokenisedData](TokenisedData.md)
 - [TriageFunctionResponse](TriageFunctionResponse.md)
 - [TriageReportResponse](TriageReportResponse.md)
 - [Ttp](Ttp.md)
 - [TypeDefinition](TypeDefinition.md)
 - [UpdateFunctionDataTypes](UpdateFunctionDataTypes.md)
 - [UploadFileType](UploadFileType.md)
 - [UploadResponse](UploadResponse.md)
 - [UpsertAiDecomplationRatingRequest](UpsertAiDecomplationRatingRequest.md)
 - [UpsertOverridesData](UpsertOverridesData.md)
 - [UpsertOverridesInputBody](UpsertOverridesInputBody.md)
 - [UserActivityResponse](UserActivityResponse.md)
 - [Vulnerabilities](Vulnerabilities.md)
 - [Vulnerability](Vulnerability.md)
 - [WarningEvent](WarningEvent.md)
 - [WorkflowProgress](WorkflowProgress.md)
 - [Workspace](Workspace.md)
 - [XrefFromResponse](XrefFromResponse.md)
 - [XrefResponse](XrefResponse.md)
 - [XrefToResponse](XrefToResponse.md)
