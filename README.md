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
*AnalysesCommentsApi* | [**createAnalysisComment**](docs/AnalysesCommentsApi.md#createAnalysisComment) | **POST** /v2/analyses/{analysis_id}/comments | Create a comment for this analysis
*AnalysesCommentsApi* | [**deleteAnalysisComment**](docs/AnalysesCommentsApi.md#deleteAnalysisComment) | **DELETE** /v2/analyses/{analysis_id}/comments/{comment_id} | Delete a comment
*AnalysesCommentsApi* | [**getAnalysisComments**](docs/AnalysesCommentsApi.md#getAnalysisComments) | **GET** /v2/analyses/{analysis_id}/comments | Get comments for this analysis
*AnalysesCommentsApi* | [**updateAnalysisComment**](docs/AnalysesCommentsApi.md#updateAnalysisComment) | **PATCH** /v2/analyses/{analysis_id}/comments/{comment_id} | Update a comment
*AnalysesCoreApi* | [**createAnalysis**](docs/AnalysesCoreApi.md#createAnalysis) | **POST** /v2/analyses | Create Analysis
*AnalysesCoreApi* | [**deleteAnalysis**](docs/AnalysesCoreApi.md#deleteAnalysis) | **DELETE** /v2/analyses/{analysis_id} | Delete Analysis
*AnalysesCoreApi* | [**getAnalysisBasicInfo**](docs/AnalysesCoreApi.md#getAnalysisBasicInfo) | **GET** /v2/analyses/{analysis_id}/basic | Gets basic analysis information
*AnalysesCoreApi* | [**getAnalysisFunctionMap**](docs/AnalysesCoreApi.md#getAnalysisFunctionMap) | **GET** /v2/analyses/{analysis_id}/func_maps | Get Analysis Function Map
*AnalysesCoreApi* | [**getAnalysisLogs**](docs/AnalysesCoreApi.md#getAnalysisLogs) | **GET** /v2/analyses/{analysis_id}/logs | Gets the logs of an analysis
*AnalysesCoreApi* | [**getAnalysisParams**](docs/AnalysesCoreApi.md#getAnalysisParams) | **GET** /v2/analyses/{analysis_id}/params | Gets analysis param information
*AnalysesCoreApi* | [**getAnalysisStatus**](docs/AnalysesCoreApi.md#getAnalysisStatus) | **GET** /v2/analyses/{analysis_id}/status | Gets the status of an analysis
*AnalysesCoreApi* | [**insertAnalysisLog**](docs/AnalysesCoreApi.md#insertAnalysisLog) | **POST** /v2/analyses/{analysis_id}/logs | Insert a log entry for an analysis
*AnalysesCoreApi* | [**listAnalyses**](docs/AnalysesCoreApi.md#listAnalyses) | **GET** /v2/analyses/list | Gets the most recent analyses
*AnalysesCoreApi* | [**lookupBinaryId**](docs/AnalysesCoreApi.md#lookupBinaryId) | **GET** /v2/analyses/lookup/{binary_id} | Gets the analysis ID from binary ID
*AnalysesCoreApi* | [**requeueAnalysis**](docs/AnalysesCoreApi.md#requeueAnalysis) | **POST** /v2/analyses/{analysis_id}/requeue | Requeue Analysis
*AnalysesCoreApi* | [**updateAnalysis**](docs/AnalysesCoreApi.md#updateAnalysis) | **PATCH** /v2/analyses/{analysis_id} | Update Analysis
*AnalysesCoreApi* | [**updateAnalysisTags**](docs/AnalysesCoreApi.md#updateAnalysisTags) | **PATCH** /v2/analyses/{analysis_id}/tags | Update Analysis Tags
*AnalysesCoreApi* | [**uploadFile**](docs/AnalysesCoreApi.md#uploadFile) | **POST** /v2/upload | Upload File
*AnalysesDynamicExecutionApi* | [**getDynamicExecutionStatus**](docs/AnalysesDynamicExecutionApi.md#getDynamicExecutionStatus) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/status | Get the status of a dynamic execution task
*AnalysesDynamicExecutionApi* | [**getNetworkOverview**](docs/AnalysesDynamicExecutionApi.md#getNetworkOverview) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/network-overview | Get the dynamic execution results for network overview
*AnalysesDynamicExecutionApi* | [**getProcessDump**](docs/AnalysesDynamicExecutionApi.md#getProcessDump) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-dumps/{dump_name} | Get the dynamic execution results for a specific process dump
*AnalysesDynamicExecutionApi* | [**getProcessDumps**](docs/AnalysesDynamicExecutionApi.md#getProcessDumps) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-dumps | Get the dynamic execution results for process dumps
*AnalysesDynamicExecutionApi* | [**getProcessRegistry**](docs/AnalysesDynamicExecutionApi.md#getProcessRegistry) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-registry | Get the dynamic execution results for process registry
*AnalysesDynamicExecutionApi* | [**getProcessTree**](docs/AnalysesDynamicExecutionApi.md#getProcessTree) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-tree | Get the dynamic execution results for process tree
*AnalysesDynamicExecutionApi* | [**getTtps**](docs/AnalysesDynamicExecutionApi.md#getTtps) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/ttps | Get the dynamic execution results for ttps
*AnalysesResultsMetadataApi* | [**getAnalysisFunctionsPaginated**](docs/AnalysesResultsMetadataApi.md#getAnalysisFunctionsPaginated) | **GET** /v2/analyses/{analysis_id}/functions | Get functions from analysis
*AnalysesResultsMetadataApi* | [**getCapabilities**](docs/AnalysesResultsMetadataApi.md#getCapabilities) | **GET** /v2/analyses/{analysis_id}/capabilities | Gets the capabilities from the analysis
*AnalysesResultsMetadataApi* | [**getCommunities**](docs/AnalysesResultsMetadataApi.md#getCommunities) | **GET** /v2/analyses/{analysis_id}/communities | Gets the communities found in the analysis
*AnalysesResultsMetadataApi* | [**getFunctionsList**](docs/AnalysesResultsMetadataApi.md#getFunctionsList) | **GET** /v2/analyses/{analysis_id}/functions/list | Gets functions from analysis
*AnalysesResultsMetadataApi* | [**getPdf**](docs/AnalysesResultsMetadataApi.md#getPdf) | **GET** /v2/analyses/{analysis_id}/pdf | Gets the PDF found in the analysis
*AnalysesResultsMetadataApi* | [**getSbom**](docs/AnalysesResultsMetadataApi.md#getSbom) | **GET** /v2/analyses/{analysis_id}/sbom | Gets the software-bill-of-materials (SBOM) found in the analysis
*AnalysesResultsMetadataApi* | [**getTags**](docs/AnalysesResultsMetadataApi.md#getTags) | **GET** /v2/analyses/{analysis_id}/tags | Get function tags with maliciousness score
*AnalysesResultsMetadataApi* | [**getVulnerabilities**](docs/AnalysesResultsMetadataApi.md#getVulnerabilities) | **GET** /v2/analyses/{analysis_id}/vulnerabilities | Gets the vulnerabilities found in the analysis
*AnalysesSecurityChecksApi* | [**createScurityChecksTask**](docs/AnalysesSecurityChecksApi.md#createScurityChecksTask) | **POST** /v2/analyses/{analysis_id}/security-checks | Queues a security check process
*AnalysesSecurityChecksApi* | [**getSecurityChecks**](docs/AnalysesSecurityChecksApi.md#getSecurityChecks) | **GET** /v2/analyses/{analysis_id}/security-checks | Get Security Checks
*AnalysesSecurityChecksApi* | [**getSecurityChecksTaskStatus**](docs/AnalysesSecurityChecksApi.md#getSecurityChecksTaskStatus) | **GET** /v2/analyses/{analysis_id}/security-checks/status | Check the status of a security check process
*AuthenticationUsersApi* | [**getRequesterUserInfo**](docs/AuthenticationUsersApi.md#getRequesterUserInfo) | **GET** /v2/users/me | Get the requesters user information
*AuthenticationUsersApi* | [**getUser**](docs/AuthenticationUsersApi.md#getUser) | **GET** /v2/users/{user_id} | Get a user\&#39;s public information
*AuthenticationUsersApi* | [**getUserActivity**](docs/AuthenticationUsersApi.md#getUserActivity) | **GET** /v2/users/activity | Get auth user activity
*AuthenticationUsersApi* | [**getUserComments**](docs/AuthenticationUsersApi.md#getUserComments) | **GET** /v2/users/me/comments | Get comments by user
*AuthenticationUsersApi* | [**loginUser**](docs/AuthenticationUsersApi.md#loginUser) | **POST** /v2/auth/login | Authenticate a user
*BinariesApi* | [**downloadZippedBinary**](docs/BinariesApi.md#downloadZippedBinary) | **GET** /v2/binaries/{binary_id}/download-zipped | Downloads a zipped binary with password protection
*BinariesApi* | [**getBinaryAdditionalDetails**](docs/BinariesApi.md#getBinaryAdditionalDetails) | **GET** /v2/binaries/{binary_id}/additional-details | Gets the additional details of a binary
*BinariesApi* | [**getBinaryAdditionalDetailsStatus**](docs/BinariesApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v2/binaries/{binary_id}/additional-details/status | Gets the status of the additional details task for a binary
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
*ConfigApi* | [**getConfig**](docs/ConfigApi.md#getConfig) | **GET** /v2/config | Get Config
*ExternalSourcesApi* | [**createExternalTaskVt**](docs/ExternalSourcesApi.md#createExternalTaskVt) | **POST** /v2/analysis/{analysis_id}/external/vt | Pulls data from VirusTotal
*ExternalSourcesApi* | [**getVtData**](docs/ExternalSourcesApi.md#getVtData) | **GET** /v2/analysis/{analysis_id}/external/vt | Get VirusTotal data
*ExternalSourcesApi* | [**getVtTaskStatus**](docs/ExternalSourcesApi.md#getVtTaskStatus) | **GET** /v2/analysis/{analysis_id}/external/vt/status | Check the status of VirusTotal data retrieval
*FirmwareApi* | [**getBinariesForFirmwareTask**](docs/FirmwareApi.md#getBinariesForFirmwareTask) | **GET** /v2/firmware/get-binaries/{task_id} | Upload firmware for unpacking
*FirmwareApi* | [**uploadFirmware**](docs/FirmwareApi.md#uploadFirmware) | **POST** /v2/firmware | Upload firmware for unpacking
*FunctionsAIDecompilationApi* | [**createAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#createAiDecompilationComment) | **POST** /v2/functions/{function_id}/ai-decompilation/comments | Create a comment for this function
*FunctionsAIDecompilationApi* | [**createAiDecompilationTask**](docs/FunctionsAIDecompilationApi.md#createAiDecompilationTask) | **POST** /v2/functions/{function_id}/ai-decompilation | Begins AI Decompilation Process
*FunctionsAIDecompilationApi* | [**deleteAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#deleteAiDecompilationComment) | **DELETE** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Delete a comment
*FunctionsAIDecompilationApi* | [**getAiDecompilationComments**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationComments) | **GET** /v2/functions/{function_id}/ai-decompilation/comments | Get comments for this function
*FunctionsAIDecompilationApi* | [**getAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationRating) | **GET** /v2/functions/{function_id}/ai-decompilation/rating | Get rating for AI decompilation
*FunctionsAIDecompilationApi* | [**getAiDecompilationTaskResult**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTaskResult) | **GET** /v2/functions/{function_id}/ai-decompilation | Polls AI Decompilation Process
*FunctionsAIDecompilationApi* | [**getAiDecompilationTaskStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationTaskStatus) | **GET** /v2/functions/{function_id}/ai-decompilation/status | Check the status of a function ai decompilation
*FunctionsAIDecompilationApi* | [**updateAiDecompilationComment**](docs/FunctionsAIDecompilationApi.md#updateAiDecompilationComment) | **PATCH** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Update a comment
*FunctionsAIDecompilationApi* | [**upsertAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation
*FunctionsBlockCommentsApi* | [**generateBlockCommentsForBlockInFunction**](docs/FunctionsBlockCommentsApi.md#generateBlockCommentsForBlockInFunction) | **POST** /v2/functions/{function_id}/block-comments/single | Generate block comments for a specific block in a function
*FunctionsBlockCommentsApi* | [**generateBlockCommentsForFunction**](docs/FunctionsBlockCommentsApi.md#generateBlockCommentsForFunction) | **POST** /v2/functions/{function_id}/block-comments | Generate block comments for a function
*FunctionsBlockCommentsApi* | [**generateOverviewCommentForFunction**](docs/FunctionsBlockCommentsApi.md#generateOverviewCommentForFunction) | **POST** /v2/functions/{function_id}/block-comments/overview | Generate overview comment for a function
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
*FunctionsCoreApi* | [**getFunctionCapabilities**](docs/FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v2/functions/{function_id}/capabilities | Retrieve a functions capabilities
*FunctionsCoreApi* | [**getFunctionDetails**](docs/FunctionsCoreApi.md#getFunctionDetails) | **GET** /v2/functions/{function_id} | Get function details
*FunctionsCoreApi* | [**getFunctionStrings**](docs/FunctionsCoreApi.md#getFunctionStrings) | **GET** /v2/functions/{function_id}/strings | Get string information found in the function
*FunctionsDataTypesApi* | [**generateFunctionDataTypesForAnalysis**](docs/FunctionsDataTypesApi.md#generateFunctionDataTypesForAnalysis) | **POST** /v2/analyses/{analysis_id}/functions/data_types | Generate Function Data Types
*FunctionsDataTypesApi* | [**generateFunctionDataTypesForFunctions**](docs/FunctionsDataTypesApi.md#generateFunctionDataTypesForFunctions) | **POST** /v2/functions/data_types | Generate Function Data Types for an arbitrary list of functions
*FunctionsDataTypesApi* | [**getFunctionDataTypes**](docs/FunctionsDataTypesApi.md#getFunctionDataTypes) | **GET** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Get Function Data Types
*FunctionsDataTypesApi* | [**listFunctionDataTypesForAnalysis**](docs/FunctionsDataTypesApi.md#listFunctionDataTypesForAnalysis) | **GET** /v2/analyses/{analysis_id}/functions/data_types | List Function Data Types
*FunctionsDataTypesApi* | [**listFunctionDataTypesForFunctions**](docs/FunctionsDataTypesApi.md#listFunctionDataTypesForFunctions) | **GET** /v2/functions/data_types | List Function Data Types
*FunctionsDataTypesApi* | [**updateFunctionDataTypes**](docs/FunctionsDataTypesApi.md#updateFunctionDataTypes) | **PUT** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Update Function Data Types
*FunctionsDecompilationApi* | [**createDecompilationComment**](docs/FunctionsDecompilationApi.md#createDecompilationComment) | **POST** /v2/functions/{function_id}/decompilation/comments | Create a comment for this function
*FunctionsDecompilationApi* | [**deleteDecompilationComment**](docs/FunctionsDecompilationApi.md#deleteDecompilationComment) | **DELETE** /v2/functions/{function_id}/decompilation/comments/{comment_id} | Delete a comment
*FunctionsDecompilationApi* | [**getDecompilationComments**](docs/FunctionsDecompilationApi.md#getDecompilationComments) | **GET** /v2/functions/{function_id}/decompilation/comments | Get comments for this function
*FunctionsDecompilationApi* | [**updateDecompilationComment**](docs/FunctionsDecompilationApi.md#updateDecompilationComment) | **PATCH** /v2/functions/{function_id}/decompilation/comments/{comment_id} | Update a comment
*FunctionsRenamingHistoryApi* | [**batchRenameFunction**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunction) | **POST** /v2/functions/rename/batch | Batch Rename Functions
*FunctionsRenamingHistoryApi* | [**getFunctionNameHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionNameHistory) | **GET** /v2/functions/history/{function_id} | Get Function Name History
*FunctionsRenamingHistoryApi* | [**renameFunctionId**](docs/FunctionsRenamingHistoryApi.md#renameFunctionId) | **POST** /v2/functions/rename/{function_id} | Rename Function
*FunctionsRenamingHistoryApi* | [**revertFunctionName**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v2/functions/history/{function_id}/{history_id} | Revert the function name
*ModelsApi* | [**getModels**](docs/ModelsApi.md#getModels) | **GET** /v2/models | Gets models
*SearchApi* | [**searchBinaries**](docs/SearchApi.md#searchBinaries) | **GET** /v2/search/binaries | Binaries search
*SearchApi* | [**searchCollections**](docs/SearchApi.md#searchCollections) | **GET** /v2/search/collections | Collections search
*SearchApi* | [**searchFunctions**](docs/SearchApi.md#searchFunctions) | **GET** /v2/search/functions | Functions search
*SearchApi* | [**searchTags**](docs/SearchApi.md#searchTags) | **GET** /v2/search/tags | Tags search


## Documentation for Models

 - [AdditionalDetailsStatusResponse](AdditionalDetailsStatusResponse.md)
 - [Addr](Addr.md)
 - [AiDecompilationRating](AiDecompilationRating.md)
 - [AiUnstripRequest](AiUnstripRequest.md)
 - [AnalysisAccessInfo](AnalysisAccessInfo.md)
 - [AnalysisConfig](AnalysisConfig.md)
 - [AnalysisCreateRequest](AnalysisCreateRequest.md)
 - [AnalysisCreateResponse](AnalysisCreateResponse.md)
 - [AnalysisDetailResponse](AnalysisDetailResponse.md)
 - [AnalysisFunctionMapping](AnalysisFunctionMapping.md)
 - [AnalysisFunctionMatchingRequest](AnalysisFunctionMatchingRequest.md)
 - [AnalysisFunctions](AnalysisFunctions.md)
 - [AnalysisFunctionsList](AnalysisFunctionsList.md)
 - [AnalysisRecord](AnalysisRecord.md)
 - [AnalysisScope](AnalysisScope.md)
 - [AnalysisStringsResponse](AnalysisStringsResponse.md)
 - [AnalysisStringsStatusResponse](AnalysisStringsStatusResponse.md)
 - [AnalysisTags](AnalysisTags.md)
 - [AnalysisUpdateRequest](AnalysisUpdateRequest.md)
 - [AnalysisUpdateTagsRequest](AnalysisUpdateTagsRequest.md)
 - [AnalysisUpdateTagsResponse](AnalysisUpdateTagsResponse.md)
 - [AppApiRestV2AnalysesEnumsDynamicExecutionStatus](AppApiRestV2AnalysesEnumsDynamicExecutionStatus.md)
 - [AppApiRestV2AnalysesEnumsOrderBy](AppApiRestV2AnalysesEnumsOrderBy.md)
 - [AppApiRestV2CollectionsEnumsOrderBy](AppApiRestV2CollectionsEnumsOrderBy.md)
 - [AppApiRestV2FunctionsResponsesFunction](AppApiRestV2FunctionsResponsesFunction.md)
 - [AppApiRestV2FunctionsTypesFunction](AppApiRestV2FunctionsTypesFunction.md)
 - [AppServicesDynamicExecutionSchemasDynamicExecutionStatus](AppServicesDynamicExecutionSchemasDynamicExecutionStatus.md)
 - [Argument](Argument.md)
 - [AutoUnstripRequest](AutoUnstripRequest.md)
 - [AutoUnstripResponse](AutoUnstripResponse.md)
 - [BaseResponse](BaseResponse.md)
 - [BaseResponseAdditionalDetailsStatusResponse](BaseResponseAdditionalDetailsStatusResponse.md)
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
 - [BaseResponseBlockCommentsGenerationForFunctionResponse](BaseResponseBlockCommentsGenerationForFunctionResponse.md)
 - [BaseResponseBlockCommentsOverviewGenerationResponse](BaseResponseBlockCommentsOverviewGenerationResponse.md)
 - [BaseResponseBool](BaseResponseBool.md)
 - [BaseResponseCalleesCallerFunctionsResponse](BaseResponseCalleesCallerFunctionsResponse.md)
 - [BaseResponseCapabilities](BaseResponseCapabilities.md)
 - [BaseResponseCheckSecurityChecksTaskResponse](BaseResponseCheckSecurityChecksTaskResponse.md)
 - [BaseResponseChildBinariesResponse](BaseResponseChildBinariesResponse.md)
 - [BaseResponseCollectionBinariesUpdateResponse](BaseResponseCollectionBinariesUpdateResponse.md)
 - [BaseResponseCollectionResponse](BaseResponseCollectionResponse.md)
 - [BaseResponseCollectionSearchResponse](BaseResponseCollectionSearchResponse.md)
 - [BaseResponseCollectionTagsUpdateResponse](BaseResponseCollectionTagsUpdateResponse.md)
 - [BaseResponseCommentResponse](BaseResponseCommentResponse.md)
 - [BaseResponseCommunities](BaseResponseCommunities.md)
 - [BaseResponseConfigResponse](BaseResponseConfigResponse.md)
 - [BaseResponseCreated](BaseResponseCreated.md)
 - [BaseResponseDict](BaseResponseDict.md)
 - [BaseResponseDynamicExecutionStatus](BaseResponseDynamicExecutionStatus.md)
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
 - [BaseResponseGetAiDecompilationRatingResponse](BaseResponseGetAiDecompilationRatingResponse.md)
 - [BaseResponseGetAiDecompilationTask](BaseResponseGetAiDecompilationTask.md)
 - [BaseResponseGetMeResponse](BaseResponseGetMeResponse.md)
 - [BaseResponseGetPublicUserResponse](BaseResponseGetPublicUserResponse.md)
 - [BaseResponseListCollectionResults](BaseResponseListCollectionResults.md)
 - [BaseResponseListCommentResponse](BaseResponseListCommentResponse.md)
 - [BaseResponseListDieMatch](BaseResponseListDieMatch.md)
 - [BaseResponseListFunctionNameHistory](BaseResponseListFunctionNameHistory.md)
 - [BaseResponseListSBOM](BaseResponseListSBOM.md)
 - [BaseResponseListUserActivityResponse](BaseResponseListUserActivityResponse.md)
 - [BaseResponseLoginResponse](BaseResponseLoginResponse.md)
 - [BaseResponseLogs](BaseResponseLogs.md)
 - [BaseResponseModelsResponse](BaseResponseModelsResponse.md)
 - [BaseResponseNetworkOverviewResponse](BaseResponseNetworkOverviewResponse.md)
 - [BaseResponseParams](BaseResponseParams.md)
 - [BaseResponseProcessDumps](BaseResponseProcessDumps.md)
 - [BaseResponseProcessRegistry](BaseResponseProcessRegistry.md)
 - [BaseResponseProcessTree](BaseResponseProcessTree.md)
 - [BaseResponseQueuedSecurityChecksTaskResponse](BaseResponseQueuedSecurityChecksTaskResponse.md)
 - [BaseResponseRecent](BaseResponseRecent.md)
 - [BaseResponseSecurityChecksResponse](BaseResponseSecurityChecksResponse.md)
 - [BaseResponseStatus](BaseResponseStatus.md)
 - [BaseResponseStr](BaseResponseStr.md)
 - [BaseResponseTTPS](BaseResponseTTPS.md)
 - [BaseResponseTagSearchResponse](BaseResponseTagSearchResponse.md)
 - [BaseResponseTaskResponse](BaseResponseTaskResponse.md)
 - [BaseResponseUploadResponse](BaseResponseUploadResponse.md)
 - [BaseResponseVulnerabilities](BaseResponseVulnerabilities.md)
 - [Basic](Basic.md)
 - [BinariesRelatedStatusResponse](BinariesRelatedStatusResponse.md)
 - [BinariesTaskStatus](BinariesTaskStatus.md)
 - [BinaryAdditionalDetailsDataResponse](BinaryAdditionalDetailsDataResponse.md)
 - [BinaryAdditionalResponse](BinaryAdditionalResponse.md)
 - [BinaryConfig](BinaryConfig.md)
 - [BinaryDetailsResponse](BinaryDetailsResponse.md)
 - [BinaryExternalsResponse](BinaryExternalsResponse.md)
 - [BinarySearchResponse](BinarySearchResponse.md)
 - [BinarySearchResult](BinarySearchResult.md)
 - [BinaryTaskStatus](BinaryTaskStatus.md)
 - [Block](Block.md)
 - [BlockCommentsGenerationForFunctionResponse](BlockCommentsGenerationForFunctionResponse.md)
 - [CalleeFunctionInfo](CalleeFunctionInfo.md)
 - [CalleesCallerFunctionsResponse](CalleesCallerFunctionsResponse.md)
 - [CallerFunctionInfo](CallerFunctionInfo.md)
 - [Capabilities](Capabilities.md)
 - [Capability](Capability.md)
 - [CheckSecurityChecksTaskResponse](CheckSecurityChecksTaskResponse.md)
 - [ChildBinariesResponse](ChildBinariesResponse.md)
 - [CodeSignatureModel](CodeSignatureModel.md)
 - [CollectionBinariesUpdateRequest](CollectionBinariesUpdateRequest.md)
 - [CollectionBinariesUpdateResponse](CollectionBinariesUpdateResponse.md)
 - [CollectionBinaryResponse](CollectionBinaryResponse.md)
 - [CollectionCreateRequest](CollectionCreateRequest.md)
 - [CollectionListItem](CollectionListItem.md)
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
 - [Communities](Communities.md)
 - [CommunityMatchPercentages](CommunityMatchPercentages.md)
 - [ConfidenceType](ConfidenceType.md)
 - [ConfigResponse](ConfigResponse.md)
 - [Context](Context.md)
 - [Created](Created.md)
 - [DecompilationCommentContext](DecompilationCommentContext.md)
 - [DieMatch](DieMatch.md)
 - [DynamicExecutionStatusInput](DynamicExecutionStatusInput.md)
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
 - [ErrorModel](ErrorModel.md)
 - [ExportModel](ExportModel.md)
 - [ExternalResponse](ExternalResponse.md)
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
 - [FunctionStringsResponse](FunctionStringsResponse.md)
 - [FunctionTaskResponse](FunctionTaskResponse.md)
 - [FunctionTaskStatus](FunctionTaskStatus.md)
 - [FunctionTypeInput](FunctionTypeInput.md)
 - [FunctionTypeOutput](FunctionTypeOutput.md)
 - [FunctionsDetailResponse](FunctionsDetailResponse.md)
 - [FunctionsListRename](FunctionsListRename.md)
 - [GenerateFunctionDataTypes](GenerateFunctionDataTypes.md)
 - [GenerationStatusList](GenerationStatusList.md)
 - [GetAiDecompilationRatingResponse](GetAiDecompilationRatingResponse.md)
 - [GetAiDecompilationTask](GetAiDecompilationTask.md)
 - [GetMeResponse](GetMeResponse.md)
 - [GetPublicUserResponse](GetPublicUserResponse.md)
 - [GlobalVariable](GlobalVariable.md)
 - [ISA](ISA.md)
 - [IconModel](IconModel.md)
 - [ImportModel](ImportModel.md)
 - [InsertAnalysisLogRequest](InsertAnalysisLogRequest.md)
 - [InverseFunctionMapItem](InverseFunctionMapItem.md)
 - [InverseStringMapItem](InverseStringMapItem.md)
 - [InverseValue](InverseValue.md)
 - [ListCollectionResults](ListCollectionResults.md)
 - [LoginRequest](LoginRequest.md)
 - [LoginResponse](LoginResponse.md)
 - [Logs](Logs.md)
 - [MatchedFunction](MatchedFunction.md)
 - [MatchedFunctionSuggestion](MatchedFunctionSuggestion.md)
 - [MetaModel](MetaModel.md)
 - [ModelName](ModelName.md)
 - [ModelsResponse](ModelsResponse.md)
 - [NameConfidence](NameConfidence.md)
 - [NameSourceType](NameSourceType.md)
 - [NetworkOverviewDns](NetworkOverviewDns.md)
 - [NetworkOverviewDnsAnswer](NetworkOverviewDnsAnswer.md)
 - [NetworkOverviewMetadata](NetworkOverviewMetadata.md)
 - [NetworkOverviewResponse](NetworkOverviewResponse.md)
 - [Order](Order.md)
 - [PDBDebugModel](PDBDebugModel.md)
 - [PEModel](PEModel.md)
 - [PaginationModel](PaginationModel.md)
 - [Params](Params.md)
 - [Platform](Platform.md)
 - [Process](Process.md)
 - [ProcessDump](ProcessDump.md)
 - [ProcessDumpMetadata](ProcessDumpMetadata.md)
 - [ProcessDumps](ProcessDumps.md)
 - [ProcessDumpsData](ProcessDumpsData.md)
 - [ProcessRegistry](ProcessRegistry.md)
 - [ProcessTree](ProcessTree.md)
 - [QueuedSecurityChecksTaskResponse](QueuedSecurityChecksTaskResponse.md)
 - [ReAnalysisForm](ReAnalysisForm.md)
 - [Recent](Recent.md)
 - [Registry](Registry.md)
 - [RelativeBinaryResponse](RelativeBinaryResponse.md)
 - [SBOM](SBOM.md)
 - [SBOMPackage](SBOMPackage.md)
 - [SandboxOptions](SandboxOptions.md)
 - [ScrapeThirdPartyConfig](ScrapeThirdPartyConfig.md)
 - [SectionModel](SectionModel.md)
 - [SecurityChecksResponse](SecurityChecksResponse.md)
 - [SecurityChecksResult](SecurityChecksResult.md)
 - [SecurityModel](SecurityModel.md)
 - [SeverityType](SeverityType.md)
 - [SingleCodeCertificateModel](SingleCodeCertificateModel.md)
 - [SingleCodeSignatureModel](SingleCodeSignatureModel.md)
 - [SinglePDBEntryModel](SinglePDBEntryModel.md)
 - [SingleSectionModel](SingleSectionModel.md)
 - [StackVariable](StackVariable.md)
 - [StatusInput](StatusInput.md)
 - [StatusOutput](StatusOutput.md)
 - [StringFunctions](StringFunctions.md)
 - [Structure](Structure.md)
 - [StructureMember](StructureMember.md)
 - [Symbols](Symbols.md)
 - [TTPS](TTPS.md)
 - [TTPSAttack](TTPSAttack.md)
 - [TTPSData](TTPSData.md)
 - [TTPSElement](TTPSElement.md)
 - [TTPSOccurance](TTPSOccurance.md)
 - [Tag](Tag.md)
 - [TagItem](TagItem.md)
 - [TagResponse](TagResponse.md)
 - [TagSearchResponse](TagSearchResponse.md)
 - [TagSearchResult](TagSearchResult.md)
 - [TaskResponse](TaskResponse.md)
 - [TaskStatus](TaskStatus.md)
 - [TimestampModel](TimestampModel.md)
 - [TypeDefinition](TypeDefinition.md)
 - [UpdateFunctionDataTypes](UpdateFunctionDataTypes.md)
 - [UploadFileType](UploadFileType.md)
 - [UploadResponse](UploadResponse.md)
 - [UpsertAiDecomplationRatingRequest](UpsertAiDecomplationRatingRequest.md)
 - [UserActivityResponse](UserActivityResponse.md)
 - [Vulnerabilities](Vulnerabilities.md)
 - [Vulnerability](Vulnerability.md)
 - [VulnerabilityType](VulnerabilityType.md)
 - [Workspace](Workspace.md)
