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
*AgentApi* | [**checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet**](docs/AgentApi.md#checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/protocols/status | Check the status of a protocols discovery workflow
*AgentApi* | [**checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet**](docs/AgentApi.md#checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/remediation/status | Check the status of a remediation analysis workflow
*AgentApi* | [**checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet**](docs/AgentApi.md#checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis/status | Check the status of a report analysis workflow
*AgentApi* | [**checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet**](docs/AgentApi.md#checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/secrets/status | Check the status of a secrets discovery workflow
*AgentApi* | [**checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet**](docs/AgentApi.md#checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/triage/status | Check the status of a triage analysis workflow
*AgentApi* | [**createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost**](docs/AgentApi.md#createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost) | **POST** /v2/analyses/{analysis_id}/agent/capabilities | Queues a capabilities analysis workflow process
*AgentApi* | [**createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost**](docs/AgentApi.md#createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost) | **POST** /v2/analyses/{analysis_id}/agent/protocols | Queues a protocols discovery workflow process
*AgentApi* | [**createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost**](docs/AgentApi.md#createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost) | **POST** /v2/analyses/{analysis_id}/agent/remediation | Queues a remediation analysis workflow process
*AgentApi* | [**createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost**](docs/AgentApi.md#createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost) | **POST** /v2/analyses/{analysis_id}/agent/report-analysis | Queues a combined report analysis workflow process
*AgentApi* | [**createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost**](docs/AgentApi.md#createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost) | **POST** /v2/analyses/{analysis_id}/agent/secrets | Queues a secrets discovery workflow process
*AgentApi* | [**createTriageTaskV2AnalysesAnalysisIdAgentTriagePost**](docs/AgentApi.md#createTriageTaskV2AnalysesAnalysisIdAgentTriagePost) | **POST** /v2/analyses/{analysis_id}/agent/triage | Queues a triage analysis workflow process
*AgentApi* | [**getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet**](docs/AgentApi.md#getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities | Get Capabilities Result
*AgentApi* | [**getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet**](docs/AgentApi.md#getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet) | **GET** /v2/analyses/{analysis_id}/agent/protocols | Get Protocols Result
*AgentApi* | [**getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet**](docs/AgentApi.md#getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet) | **GET** /v2/analyses/{analysis_id}/agent/remediation | Get Remediation Result
*AgentApi* | [**getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet**](docs/AgentApi.md#getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis | Get Report Analysis Result
*AgentApi* | [**getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet**](docs/AgentApi.md#getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet) | **GET** /v2/analyses/{analysis_id}/agent/secrets | Get Secrets Result
*AgentApi* | [**getTriageResultV2AnalysesAnalysisIdAgentTriageGet**](docs/AgentApi.md#getTriageResultV2AnalysesAnalysisIdAgentTriageGet) | **GET** /v2/analyses/{analysis_id}/agent/triage | Get Triage Result
*AgentApi* | [**v3CancelRenameUnnamedFunctions**](docs/AgentApi.md#v3CancelRenameUnnamedFunctions) | **POST** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions/cancel | Cancel the rename-unnamed-functions agent.
*AgentApi* | [**v3CancelSecurityScanOperation**](docs/AgentApi.md#v3CancelSecurityScanOperation) | **POST** /v3/operations/security-scan/{analysis_id}:cancel | Cancel a security-scan operation.
*AgentApi* | [**v3GetBinaryAgentFeedback**](docs/AgentApi.md#v3GetBinaryAgentFeedback) | **GET** /v3/analyses/{analysis_id}/agents/{agent}/feedback | Get the caller\&#39;s feedback on an agent\&#39;s output.
*AgentApi* | [**v3GetCapabilitiesOperation**](docs/AgentApi.md#v3GetCapabilitiesOperation) | **GET** /v3/operations/capabilities/{analysis_id} | Get a capabilities operation.
*AgentApi* | [**v3GetCryptoExplainOperation**](docs/AgentApi.md#v3GetCryptoExplainOperation) | **GET** /v3/operations/crypto-explain/{function_id} | Get a crypto-explain operation.
*AgentApi* | [**v3GetCryptoScanOperation**](docs/AgentApi.md#v3GetCryptoScanOperation) | **GET** /v3/operations/crypto-scan/{analysis_id} | Get a crypto-scan operation.
*AgentApi* | [**v3GetExecutionExplainOperation**](docs/AgentApi.md#v3GetExecutionExplainOperation) | **GET** /v3/operations/execution-explain/{function_id} | Get an execution-explain operation.
*AgentApi* | [**v3GetExecutionScanOperation**](docs/AgentApi.md#v3GetExecutionScanOperation) | **GET** /v3/operations/execution-scan/{analysis_id} | Get an execution-scan operation.
*AgentApi* | [**v3GetFilesystemAnalyseOperation**](docs/AgentApi.md#v3GetFilesystemAnalyseOperation) | **GET** /v3/operations/filesystem-analyse/{function_id} | Get a filesystem-analyse operation.
*AgentApi* | [**v3GetFilesystemScanOperation**](docs/AgentApi.md#v3GetFilesystemScanOperation) | **GET** /v3/operations/filesystem-scan/{analysis_id} | Get a filesystem-scan operation.
*AgentApi* | [**v3GetNetworkingExplainOperation**](docs/AgentApi.md#v3GetNetworkingExplainOperation) | **GET** /v3/operations/networking-explain/{function_id} | Get a networking-explain operation.
*AgentApi* | [**v3GetNetworkingScanOperation**](docs/AgentApi.md#v3GetNetworkingScanOperation) | **GET** /v3/operations/networking-scan/{analysis_id} | Get a networking-scan operation.
*AgentApi* | [**v3GetProtocolsOperation**](docs/AgentApi.md#v3GetProtocolsOperation) | **GET** /v3/operations/protocols/{analysis_id} | Get a protocols operation.
*AgentApi* | [**v3GetRemediationOperation**](docs/AgentApi.md#v3GetRemediationOperation) | **GET** /v3/operations/remediation/{analysis_id} | Get a remediation operation.
*AgentApi* | [**v3GetRenameUnnamedFunctionsResult**](docs/AgentApi.md#v3GetRenameUnnamedFunctionsResult) | **GET** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions | Get rename-unnamed-functions agent result.
*AgentApi* | [**v3GetRenameUnnamedFunctionsStatus**](docs/AgentApi.md#v3GetRenameUnnamedFunctionsStatus) | **GET** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions/status | Get rename-unnamed-functions agent status.
*AgentApi* | [**v3GetReportAnalysisOperation**](docs/AgentApi.md#v3GetReportAnalysisOperation) | **GET** /v3/operations/report-analysis/{analysis_id} | Get a report-analysis operation.
*AgentApi* | [**v3GetSecretsOperation**](docs/AgentApi.md#v3GetSecretsOperation) | **GET** /v3/operations/secrets/{analysis_id} | Get a secrets operation.
*AgentApi* | [**v3GetSecurityScanOperation**](docs/AgentApi.md#v3GetSecurityScanOperation) | **GET** /v3/operations/security-scan/{analysis_id} | Get a security-scan operation.
*AgentApi* | [**v3GetTriageOperation**](docs/AgentApi.md#v3GetTriageOperation) | **GET** /v3/operations/triage/{analysis_id} | Get a triage operation.
*AgentApi* | [**v3RunCapabilities**](docs/AgentApi.md#v3RunCapabilities) | **POST** /v3/analyses/{analysis_id}/capabilities:run | Run the capabilities agent.
*AgentApi* | [**v3RunCryptoExplain**](docs/AgentApi.md#v3RunCryptoExplain) | **POST** /v3/functions/{function_id}/crypto-explain:run | Run the crypto-explain agent.
*AgentApi* | [**v3RunCryptoScan**](docs/AgentApi.md#v3RunCryptoScan) | **POST** /v3/analyses/{analysis_id}/crypto-scan:run | Run the crypto-scan agent.
*AgentApi* | [**v3RunExecutionExplain**](docs/AgentApi.md#v3RunExecutionExplain) | **POST** /v3/functions/{function_id}/execution-explain:run | Run the execution-explain agent.
*AgentApi* | [**v3RunExecutionScan**](docs/AgentApi.md#v3RunExecutionScan) | **POST** /v3/analyses/{analysis_id}/execution-scan:run | Run the execution-scan agent.
*AgentApi* | [**v3RunFilesystemAnalyse**](docs/AgentApi.md#v3RunFilesystemAnalyse) | **POST** /v3/functions/{function_id}/filesystem-analyse:run | Run the filesystem-analyse agent.
*AgentApi* | [**v3RunFilesystemScan**](docs/AgentApi.md#v3RunFilesystemScan) | **POST** /v3/analyses/{analysis_id}/filesystem-scan:run | Run the filesystem-scan agent.
*AgentApi* | [**v3RunNetworkingExplain**](docs/AgentApi.md#v3RunNetworkingExplain) | **POST** /v3/functions/{function_id}/networking-explain:run | Run the networking-explain agent.
*AgentApi* | [**v3RunNetworkingScan**](docs/AgentApi.md#v3RunNetworkingScan) | **POST** /v3/analyses/{analysis_id}/networking-scan:run | Run the networking-scan agent.
*AgentApi* | [**v3RunProtocols**](docs/AgentApi.md#v3RunProtocols) | **POST** /v3/analyses/{analysis_id}/protocols:run | Run the protocols agent.
*AgentApi* | [**v3RunRemediation**](docs/AgentApi.md#v3RunRemediation) | **POST** /v3/analyses/{analysis_id}/remediation:run | Run the remediation agent.
*AgentApi* | [**v3RunReportAnalysis**](docs/AgentApi.md#v3RunReportAnalysis) | **POST** /v3/analyses/{analysis_id}/report-analysis:run | Run the report-analysis agent.
*AgentApi* | [**v3RunSecrets**](docs/AgentApi.md#v3RunSecrets) | **POST** /v3/analyses/{analysis_id}/secrets:run | Run the secrets agent.
*AgentApi* | [**v3RunSecurityScan**](docs/AgentApi.md#v3RunSecurityScan) | **POST** /v3/analyses/{analysis_id}/security-scan:run | Run the security-scan agent.
*AgentApi* | [**v3RunTriage**](docs/AgentApi.md#v3RunTriage) | **POST** /v3/analyses/{analysis_id}/triage:run | Run the triage agent.
*AgentApi* | [**v3TriggerRenameUnnamedFunctions**](docs/AgentApi.md#v3TriggerRenameUnnamedFunctions) | **POST** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions | Run the rename-unnamed-functions agent.
*AgentApi* | [**v3UpsertBinaryAgentFeedback**](docs/AgentApi.md#v3UpsertBinaryAgentFeedback) | **PUT** /v3/analyses/{analysis_id}/agents/{agent}/feedback | Record feedback on an agent\&#39;s output.
*AnalysesBulkActionsApi* | [**bulkAddAnalysisTags**](docs/AnalysesBulkActionsApi.md#bulkAddAnalysisTags) | **PATCH** /v2/analyses/tags/add | Bulk Add Analysis Tags
*AnalysesBulkActionsApi* | [**bulkDeleteAnalyses**](docs/AnalysesBulkActionsApi.md#bulkDeleteAnalyses) | **PATCH** /v2/analyses/delete | Bulk Delete Analyses
*AnalysesBulkActionsApi* | [**v3BatchAddAnalysisTags**](docs/AnalysesBulkActionsApi.md#v3BatchAddAnalysisTags) | **POST** /v3/analyses:batchAddTags | Add tags to multiple analyses.
*AnalysesBulkActionsApi* | [**v3BatchDeleteAnalyses**](docs/AnalysesBulkActionsApi.md#v3BatchDeleteAnalyses) | **POST** /v3/analyses:batchDelete | Delete multiple analyses.
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
*AnalysesCoreApi* | [**getAnalysisFunctionMatches**](docs/AnalysesCoreApi.md#getAnalysisFunctionMatches) | **GET** /v3/analyses/{analysis_id}/functions/matches | Get function-matching results for an analysis
*AnalysesCoreApi* | [**getAnalysisFunctionMatchingStatus**](docs/AnalysesCoreApi.md#getAnalysisFunctionMatchingStatus) | **GET** /v3/analyses/{analysis_id}/functions/matches/status | Get function-matching status for an analysis
*AnalysesCoreApi* | [**getAnalysisLogs**](docs/AnalysesCoreApi.md#getAnalysisLogs) | **GET** /v2/analyses/{analysis_id}/logs | Gets the logs of an analysis
*AnalysesCoreApi* | [**getAnalysisParams**](docs/AnalysesCoreApi.md#getAnalysisParams) | **GET** /v2/analyses/{analysis_id}/params | Gets analysis param information
*AnalysesCoreApi* | [**getAnalysisStatus**](docs/AnalysesCoreApi.md#getAnalysisStatus) | **GET** /v2/analyses/{analysis_id}/status | Gets the status of an analysis
*AnalysesCoreApi* | [**getDynamicExecutionReport**](docs/AnalysesCoreApi.md#getDynamicExecutionReport) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/report | Get dynamic execution report
*AnalysesCoreApi* | [**getDynamicExecutionStatus**](docs/AnalysesCoreApi.md#getDynamicExecutionStatus) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/status | Get dynamic execution status
*AnalysesCoreApi* | [**insertAnalysisLog**](docs/AnalysesCoreApi.md#insertAnalysisLog) | **POST** /v2/analyses/{analysis_id}/logs | Insert a log entry for an analysis
*AnalysesCoreApi* | [**listAnalyses**](docs/AnalysesCoreApi.md#listAnalyses) | **GET** /v2/analyses/list | Gets the most recent analyses
*AnalysesCoreApi* | [**lookupBinaryId**](docs/AnalysesCoreApi.md#lookupBinaryId) | **GET** /v2/analyses/lookup/{binary_id} | Gets the analysis ID from binary ID
*AnalysesCoreApi* | [**putAnalysisStrings**](docs/AnalysesCoreApi.md#putAnalysisStrings) | **PUT** /v2/analyses/{analysis_id}/strings | Add strings to the analysis
*AnalysesCoreApi* | [**requeueAnalysis**](docs/AnalysesCoreApi.md#requeueAnalysis) | **POST** /v2/analyses/{analysis_id}/requeue | Requeue Analysis
*AnalysesCoreApi* | [**startAnalysisFunctionMatching**](docs/AnalysesCoreApi.md#startAnalysisFunctionMatching) | **POST** /v3/analyses/{analysis_id}/functions/matches | Start function matching for an analysis
*AnalysesCoreApi* | [**updateAnalysis**](docs/AnalysesCoreApi.md#updateAnalysis) | **PATCH** /v2/analyses/{analysis_id} | Update Analysis
*AnalysesCoreApi* | [**updateAnalysisTags**](docs/AnalysesCoreApi.md#updateAnalysisTags) | **PATCH** /v2/analyses/{analysis_id}/tags | Update Analysis Tags
*AnalysesCoreApi* | [**uploadFile**](docs/AnalysesCoreApi.md#uploadFile) | **POST** /v2/upload | Upload File
*AnalysesCoreApi* | [**v3DeleteAnalysis**](docs/AnalysesCoreApi.md#v3DeleteAnalysis) | **DELETE** /v3/analyses/{analysis_id} | Delete an analysis.
*AnalysesCoreApi* | [**v3DownloadBinaryExport**](docs/AnalysesCoreApi.md#v3DownloadBinaryExport) | **GET** /v3/analyses/{analysis_id}/binary-export | Download a binary export
*AnalysesCoreApi* | [**v3GetAnalysis**](docs/AnalysesCoreApi.md#v3GetAnalysis) | **GET** /v3/analyses/{analysis_id} | Get an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisAutoUnstripStatus**](docs/AnalysesCoreApi.md#v3GetAnalysisAutoUnstripStatus) | **GET** /v3/analyses/{analysis_id}/auto-unstrip/status | Get the auto-unstrip status for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisFunctionsProgress**](docs/AnalysesCoreApi.md#v3GetAnalysisFunctionsProgress) | **GET** /v3/analyses/{analysis_id}/progress/functions | Get function embedding progress for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisLogs**](docs/AnalysesCoreApi.md#v3GetAnalysisLogs) | **GET** /v3/analyses/{analysis_id}/logs | Get the Analysis log
*AnalysesCoreApi* | [**v3GetAnalysisOperation**](docs/AnalysesCoreApi.md#v3GetAnalysisOperation) | **GET** /v3/operations/analyses/{analysis_id} | Get an Analysis-creation operation
*AnalysesCoreApi* | [**v3GetAnalysisStrings**](docs/AnalysesCoreApi.md#v3GetAnalysisStrings) | **GET** /v3/analyses/{analysis_id}/functions/strings | List strings for an analysis.
*AnalysesCoreApi* | [**v3GetAnalysisStringsStatus**](docs/AnalysesCoreApi.md#v3GetAnalysisStringsStatus) | **GET** /v3/analyses/{analysis_id}/functions/strings/status | Get the string-extraction status for an analysis.
*AnalysesCoreApi* | [**v3GetBinaryExportOperation**](docs/AnalysesCoreApi.md#v3GetBinaryExportOperation) | **GET** /v3/operations/binary-export/{task_id} | Get a binary export operation
*AnalysesCoreApi* | [**v3ListAnalyses**](docs/AnalysesCoreApi.md#v3ListAnalyses) | **GET** /v3/analyses | List analyses
*AnalysesCoreApi* | [**v3ListExampleAnalyses**](docs/AnalysesCoreApi.md#v3ListExampleAnalyses) | **GET** /v3/analyses/examples | List example analyses
*AnalysesCoreApi* | [**v3LookupAnalysisByBinaryId**](docs/AnalysesCoreApi.md#v3LookupAnalysisByBinaryId) | **GET** /v3/analyses/lookup/{binary_id} | Look up the most recent analysis for a binary.
*AnalysesCoreApi* | [**v3QueueBinaryExport**](docs/AnalysesCoreApi.md#v3QueueBinaryExport) | **POST** /v3/analyses/{analysis_id}/binary-export | Queue a binary export
*AnalysesCoreApi* | [**v3SearchTags**](docs/AnalysesCoreApi.md#v3SearchTags) | **GET** /v3/tags | Search tags
*AnalysesCoreApi* | [**v3UpdateAnalysis**](docs/AnalysesCoreApi.md#v3UpdateAnalysis) | **PATCH** /v3/analyses/{analysis_id} | Update an analysis.
*AnalysesCoreApi* | [**v3UpdateAnalysisTags**](docs/AnalysesCoreApi.md#v3UpdateAnalysisTags) | **PATCH** /v3/analyses/{analysis_id}/tags | Replace an analysis\&#39; tags.
*AnalysesCoreApi* | [**v3UpgradeAnalysisModel**](docs/AnalysesCoreApi.md#v3UpgradeAnalysisModel) | **POST** /v3/analyses/{analysis_id}/upgrade-model | Re-analyse on the latest model
*AnalysesResultsMetadataApi* | [**getAnalysisFunctionsPaginated**](docs/AnalysesResultsMetadataApi.md#getAnalysisFunctionsPaginated) | **GET** /v2/analyses/{analysis_id}/functions | Get functions from analysis
*AnalysesResultsMetadataApi* | [**getCapabilities**](docs/AnalysesResultsMetadataApi.md#getCapabilities) | **GET** /v2/analyses/{analysis_id}/capabilities | Gets the capabilities from the analysis
*AnalysesResultsMetadataApi* | [**getFunctionsList**](docs/AnalysesResultsMetadataApi.md#getFunctionsList) | **GET** /v2/analyses/{analysis_id}/functions/list | Gets functions from analysis
*AnalysesResultsMetadataApi* | [**getTags**](docs/AnalysesResultsMetadataApi.md#getTags) | **GET** /v2/analyses/{analysis_id}/tags | Get function tags with maliciousness score
*AnalysesResultsMetadataApi* | [**v3GetAnalysisXref**](docs/AnalysesResultsMetadataApi.md#v3GetAnalysisXref) | **GET** /v3/analyses/{analysis_id}/xrefs/{vaddr} | Look up xrefs by virtual address.
*AnalysesResultsMetadataApi* | [**v3ListAnalysisCapabilities**](docs/AnalysesResultsMetadataApi.md#v3ListAnalysisCapabilities) | **GET** /v3/analyses/{analysis_id}/capabilities | List the capabilities found in an analysis.
*AnalysesResultsMetadataApi* | [**v3ListAnalysisTags**](docs/AnalysesResultsMetadataApi.md#v3ListAnalysisTags) | **GET** /v3/analyses/{analysis_id}/tags | List the tags on an analysis.
*AnalysesXRefsApi* | [**getXrefByVaddr**](docs/AnalysesXRefsApi.md#getXrefByVaddr) | **GET** /v2/analyses/{analysis_id}/xrefs/{vaddr} | [Beta] Look up xrefs by virtual address
*AuthenticationUsersApi* | [**getUser**](docs/AuthenticationUsersApi.md#getUser) | **GET** /v2/users/{user_id} | Get a user\&#39;s public information
*AuthenticationUsersApi* | [**getUserActivity**](docs/AuthenticationUsersApi.md#getUserActivity) | **GET** /v2/users/activity | Get auth user activity
*AuthenticationUsersApi* | [**submitUserFeedback**](docs/AuthenticationUsersApi.md#submitUserFeedback) | **POST** /v2/users/feedback | Submit feedback about the application
*AuthenticationUsersApi* | [**v3GetUser**](docs/AuthenticationUsersApi.md#v3GetUser) | **GET** /v3/users/{user_id} | Get a user\&#39;s public information
*AuthenticationUsersApi* | [**v3GetUserActivity**](docs/AuthenticationUsersApi.md#v3GetUserActivity) | **GET** /v3/users/activity | Get the caller\&#39;s activity feed
*AuthenticationUsersApi* | [**v3SubmitUserFeedback**](docs/AuthenticationUsersApi.md#v3SubmitUserFeedback) | **POST** /v3/users/feedback | Submit feedback
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
*BinariesApi* | [**v3DownloadBinaryZipped**](docs/BinariesApi.md#v3DownloadBinaryZipped) | **GET** /v3/binaries/{binary_id}/download-zipped | Download a binary as a password-protected zip.
*BinariesApi* | [**v3GetBinaryDieInfo**](docs/BinariesApi.md#v3GetBinaryDieInfo) | **GET** /v3/binaries/{binary_id}/die-info | Get Detect It Easy matches for a binary.
*BinariesApi* | [**v3GetBinaryExternals**](docs/BinariesApi.md#v3GetBinaryExternals) | **GET** /v3/binaries/{binary_id}/externals | Get third-party threat-intel lookups for a binary.
*BinariesApi* | [**v3GetBinaryRelated**](docs/BinariesApi.md#v3GetBinaryRelated) | **GET** /v3/binaries/{binary_id}/related | Get the binaries related to this one by unpacking.
*BinariesApi* | [**v3GetBinaryRelatedStatus**](docs/BinariesApi.md#v3GetBinaryRelatedStatus) | **GET** /v3/binaries/{binary_id}/related/status | Get the archive-unpacking status for a binary.
*BinariesApi* | [**v3SearchBinaries**](docs/BinariesApi.md#v3SearchBinaries) | **GET** /v3/binaries | Search binaries
*BinariesApi* | [**v3UploadFile**](docs/BinariesApi.md#v3UploadFile) | **POST** /v3/upload | Upload a file.
*CollectionsApi* | [**createCollection**](docs/CollectionsApi.md#createCollection) | **POST** /v2/collections | Creates new collection information
*CollectionsApi* | [**deleteCollection**](docs/CollectionsApi.md#deleteCollection) | **DELETE** /v2/collections/{collection_id} | Deletes a collection
*CollectionsApi* | [**getCollection**](docs/CollectionsApi.md#getCollection) | **GET** /v2/collections/{collection_id} | Returns a collection
*CollectionsApi* | [**listCollections**](docs/CollectionsApi.md#listCollections) | **GET** /v2/collections | Gets basic collections information
*CollectionsApi* | [**updateCollection**](docs/CollectionsApi.md#updateCollection) | **PATCH** /v2/collections/{collection_id} | Updates a collection
*CollectionsApi* | [**updateCollectionBinaries**](docs/CollectionsApi.md#updateCollectionBinaries) | **PATCH** /v2/collections/{collection_id}/binaries | Updates a collection binaries
*CollectionsApi* | [**updateCollectionTags**](docs/CollectionsApi.md#updateCollectionTags) | **PATCH** /v2/collections/{collection_id}/tags | Updates a collection tags
*CollectionsApi* | [**v3AddCollectionBinaries**](docs/CollectionsApi.md#v3AddCollectionBinaries) | **POST** /v3/collections/{collection_id}/binaries | Add binaries to a collection.
*CollectionsApi* | [**v3CreateCollection**](docs/CollectionsApi.md#v3CreateCollection) | **POST** /v3/collections | Create a collection.
*CollectionsApi* | [**v3DeleteCollection**](docs/CollectionsApi.md#v3DeleteCollection) | **DELETE** /v3/collections/{collection_id} | Delete a collection.
*CollectionsApi* | [**v3GetCollection**](docs/CollectionsApi.md#v3GetCollection) | **GET** /v3/collections/{collection_id} | Get a collection.
*CollectionsApi* | [**v3ListCollections**](docs/CollectionsApi.md#v3ListCollections) | **GET** /v3/collections | List collections.
*CollectionsApi* | [**v3PatchCollection**](docs/CollectionsApi.md#v3PatchCollection) | **PATCH** /v3/collections/{collection_id} | Update a collection.
*CollectionsApi* | [**v3PatchCollectionBinaries**](docs/CollectionsApi.md#v3PatchCollectionBinaries) | **PATCH** /v3/collections/{collection_id}/binaries | Replace the binaries in a collection.
*CollectionsApi* | [**v3PatchCollectionTags**](docs/CollectionsApi.md#v3PatchCollectionTags) | **PATCH** /v3/collections/{collection_id}/tags | Replace the tags on a collection.
*CollectionsApi* | [**v3RemoveCollectionBinaries**](docs/CollectionsApi.md#v3RemoveCollectionBinaries) | **DELETE** /v3/collections/{collection_id}/binaries | Remove binaries from a collection.
*ConfigApi* | [**getConfig**](docs/ConfigApi.md#getConfig) | **GET** /v2/config | Get Config
*ConfigApi* | [**v3GetConfig**](docs/ConfigApi.md#v3GetConfig) | **GET** /v3/config | Get client configuration.
*ConfigApi* | [**v3GetModels**](docs/ConfigApi.md#v3GetModels) | **GET** /v3/models | Get the models available for analysis.
*ConversationsApi* | [**cancelRun**](docs/ConversationsApi.md#cancelRun) | **POST** /v2/conversations/{id}/cancel | Cancel an active run
*ConversationsApi* | [**confirmTool**](docs/ConversationsApi.md#confirmTool) | **POST** /v2/conversations/{id}/confirm | Approve or reject a pending tool confirmation
*ConversationsApi* | [**createConversation**](docs/ConversationsApi.md#createConversation) | **POST** /v2/conversations | Create a new conversation
*ConversationsApi* | [**getConversation**](docs/ConversationsApi.md#getConversation) | **GET** /v2/conversations/{id} | Get a conversation with its events
*ConversationsApi* | [**listConversations**](docs/ConversationsApi.md#listConversations) | **GET** /v2/conversations | List conversations for the authenticated user
*ConversationsApi* | [**sendMessage**](docs/ConversationsApi.md#sendMessage) | **POST** /v2/conversations/{id}/messages | Send a message and start an agentic run
*ConversationsApi* | [**streamEvents**](docs/ConversationsApi.md#streamEvents) | **GET** /v2/conversations/{id}/events | Stream conversation events (SSE)
*DataTypesApi* | [**v3CopyFunctionSignatures**](docs/DataTypesApi.md#v3CopyFunctionSignatures) | **POST** /v3/analyses/{analysis_id}/signatures/copy | Copy function signatures
*DataTypesApi* | [**v3CreateAnalysisDataTypes**](docs/DataTypesApi.md#v3CreateAnalysisDataTypes) | **POST** /v3/analyses/{analysis_id}/data-types | Create an analysis\&#39;s data types
*DataTypesApi* | [**v3GetAnalysisDataType**](docs/DataTypesApi.md#v3GetAnalysisDataType) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id} | Get one of an analysis\&#39;s data types
*DataTypesApi* | [**v3GetAnalysisDataTypeHistory**](docs/DataTypesApi.md#v3GetAnalysisDataTypeHistory) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id}/history | Get a data type\&#39;s edit history
*DataTypesApi* | [**v3GetFunctionSignature**](docs/DataTypesApi.md#v3GetFunctionSignature) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/signature | Get a function\&#39;s signature
*DataTypesApi* | [**v3GetFunctionSignatureHistory**](docs/DataTypesApi.md#v3GetFunctionSignatureHistory) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/signature/history | Get a function signature\&#39;s edit history
*DataTypesApi* | [**v3ListAnalysisDataTypes**](docs/DataTypesApi.md#v3ListAnalysisDataTypes) | **GET** /v3/analyses/{analysis_id}/data-types | List an analysis\&#39;s data types
*DataTypesApi* | [**v3ListDataTypeFunctions**](docs/DataTypesApi.md#v3ListDataTypeFunctions) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id}/functions | List the functions using a data type
*DataTypesApi* | [**v3ListFunctionSignatures**](docs/DataTypesApi.md#v3ListFunctionSignatures) | **GET** /v3/functions/signatures | Get signatures for many functions
*DataTypesApi* | [**v3UpdateAnalysisDataTypes**](docs/DataTypesApi.md#v3UpdateAnalysisDataTypes) | **PUT** /v3/analyses/{analysis_id}/data-types | Update an analysis\&#39;s data types
*DataTypesApi* | [**v3UpdateFunctionSignature**](docs/DataTypesApi.md#v3UpdateFunctionSignature) | **PUT** /v3/analyses/{analysis_id}/functions/{function_id}/signature | Update a function\&#39;s signature
*ExternalSourcesApi* | [**createExternalTaskVt**](docs/ExternalSourcesApi.md#createExternalTaskVt) | **POST** /v2/analysis/{analysis_id}/external/vt | Pulls data from VirusTotal
*ExternalSourcesApi* | [**getVtData**](docs/ExternalSourcesApi.md#getVtData) | **GET** /v2/analysis/{analysis_id}/external/vt | Get VirusTotal data
*ExternalSourcesApi* | [**getVtTaskStatus**](docs/ExternalSourcesApi.md#getVtTaskStatus) | **GET** /v2/analysis/{analysis_id}/external/vt/status | Check the status of VirusTotal data retrieval
*ExternalSourcesApi* | [**v3GetVirustotalScanOperation**](docs/ExternalSourcesApi.md#v3GetVirustotalScanOperation) | **GET** /v3/operations/virustotal-scan/{binary_id} | Get a VirusTotal scan operation.
*ExternalSourcesApi* | [**v3RunVirustotalScan**](docs/ExternalSourcesApi.md#v3RunVirustotalScan) | **POST** /v3/binaries/{binary_id}/virustotal-scan:run | Trigger a VirusTotal lookup for a binary.
*FunctionsAIDecompilationApi* | [**createAiDecompilation**](docs/FunctionsAIDecompilationApi.md#createAiDecompilation) | **POST** /v3/functions/{function_id}/ai-decompilation | Start AI decompilation
*FunctionsAIDecompilationApi* | [**deleteAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#deleteAiDecompilationInlineComment) | **DELETE** /v3/functions/{function_id}/ai-decompilation/inline-comments/{line} | Delete a single inline comment
*FunctionsAIDecompilationApi* | [**getAiDecompilation**](docs/FunctionsAIDecompilationApi.md#getAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation | Get AI decompilation result
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineComments) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments | Get AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**getAiDecompilationInlineCommentsStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationInlineCommentsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments/status | Get inline comments generation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationRating) | **GET** /v2/functions/{function_id}/ai-decompilation/rating | Get rating for AI decompilation
*FunctionsAIDecompilationApi* | [**getAiDecompilationStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/status | Get AI decompilation workflow status
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummary) | **GET** /v3/functions/{function_id}/ai-decompilation/summary | Get AI decompilation summary
*FunctionsAIDecompilationApi* | [**getAiDecompilationSummaryStatus**](docs/FunctionsAIDecompilationApi.md#getAiDecompilationSummaryStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/summary/status | Get summary generation workflow status
*FunctionsAIDecompilationApi* | [**patchAiDecompilationInlineComment**](docs/FunctionsAIDecompilationApi.md#patchAiDecompilationInlineComment) | **PATCH** /v3/functions/{function_id}/ai-decompilation/inline-comments | Update a single inline comment
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationInlineComments**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationInlineComments) | **POST** /v3/functions/{function_id}/ai-decompilation/inline-comments | Regenerate AI decompilation inline comments
*FunctionsAIDecompilationApi* | [**regenerateAiDecompilationSummary**](docs/FunctionsAIDecompilationApi.md#regenerateAiDecompilationSummary) | **POST** /v3/functions/{function_id}/ai-decompilation/summary | Regenerate AI decompilation summary
*FunctionsAIDecompilationApi* | [**streamAiDecompilation**](docs/FunctionsAIDecompilationApi.md#streamAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation/events | Stream live AI decompilation output (SSE)
*FunctionsAIDecompilationApi* | [**upsertAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation
*FunctionsAIDecompilationApi* | [**v3AcceptAiDecompilationTypeSuggestions**](docs/FunctionsAIDecompilationApi.md#v3AcceptAiDecompilationTypeSuggestions) | **POST** /v3/functions/{function_id}/ai-decompilation/type-suggestions/accept | Accept AI decompilation type suggestions
*FunctionsAIDecompilationApi* | [**v3GetAiDecompilationLineAttributions**](docs/FunctionsAIDecompilationApi.md#v3GetAiDecompilationLineAttributions) | **GET** /v3/functions/{function_id}/ai-decompilation/line-attributions | Get AI decompilation line attributions
*FunctionsAIDecompilationApi* | [**v3GetAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#v3GetAiDecompilationRating) | **GET** /v3/functions/{function_id}/ai-decompilation/rating | Get AI decompilation rating
*FunctionsAIDecompilationApi* | [**v3GetAiDecompilationTokens**](docs/FunctionsAIDecompilationApi.md#v3GetAiDecompilationTokens) | **GET** /v3/functions/{function_id}/ai-decompilation/tokens | Get AI decompilation tokens and user overrides
*FunctionsAIDecompilationApi* | [**v3GetAiDecompilationTypeSuggestions**](docs/FunctionsAIDecompilationApi.md#v3GetAiDecompilationTypeSuggestions) | **GET** /v3/functions/{function_id}/ai-decompilation/type-suggestions | Get AI decompilation type suggestions
*FunctionsAIDecompilationApi* | [**v3GetAiDecompilationTypeSuggestionsStatus**](docs/FunctionsAIDecompilationApi.md#v3GetAiDecompilationTypeSuggestionsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/type-suggestions/status | Get type suggestion workflow status
*FunctionsAIDecompilationApi* | [**v3RegenerateAiDecompilationTypeSuggestions**](docs/FunctionsAIDecompilationApi.md#v3RegenerateAiDecompilationTypeSuggestions) | **POST** /v3/functions/{function_id}/ai-decompilation/type-suggestions | Regenerate AI decompilation type suggestions
*FunctionsAIDecompilationApi* | [**v3UpsertAiDecompilationOverrides**](docs/FunctionsAIDecompilationApi.md#v3UpsertAiDecompilationOverrides) | **PATCH** /v3/functions/{function_id}/ai-decompilation/overrides | Upsert variable/function name overrides
*FunctionsAIDecompilationApi* | [**v3UpsertAiDecompilationRating**](docs/FunctionsAIDecompilationApi.md#v3UpsertAiDecompilationRating) | **PATCH** /v3/functions/{function_id}/ai-decompilation/rating | Upsert AI decompilation rating
*FunctionsCoreApi* | [**addFunctionCallee**](docs/FunctionsCoreApi.md#addFunctionCallee) | **POST** /v3/functions/{function_id}/callees | Add a callee to a function
*FunctionsCoreApi* | [**addUserStringToFunction**](docs/FunctionsCoreApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.
*FunctionsCoreApi* | [**getAnalysisStrings**](docs/FunctionsCoreApi.md#getAnalysisStrings) | **GET** /v2/analyses/{analysis_id}/functions/strings | Get string information found in the Analysis
*FunctionsCoreApi* | [**getAnalysisStringsStatus**](docs/FunctionsCoreApi.md#getAnalysisStringsStatus) | **GET** /v2/analyses/{analysis_id}/functions/strings/status | Get string processing state for the Analysis
*FunctionsCoreApi* | [**getFunctionBlocks**](docs/FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v2/functions/{function_id}/blocks | Get disassembly blocks related to the function
*FunctionsCoreApi* | [**getFunctionBlocks_0**](docs/FunctionsCoreApi.md#getFunctionBlocks_0) | **GET** /v3/functions/{function_id}/blocks | Get function disassembly
*FunctionsCoreApi* | [**getFunctionCalleesCallers**](docs/FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v2/functions/{function_id}/callees_callers | Get list of functions that call or are called by the specified function
*FunctionsCoreApi* | [**getFunctionCalleesCallersBulk**](docs/FunctionsCoreApi.md#getFunctionCalleesCallersBulk) | **GET** /v2/functions/callees_callers | Get list of functions that call or are called for a list of functions
*FunctionsCoreApi* | [**getFunctionCalleesCallers_0**](docs/FunctionsCoreApi.md#getFunctionCalleesCallers_0) | **GET** /v3/functions/{function_id}/callees-callers | Get callees and callers for a function
*FunctionsCoreApi* | [**getFunctionCapabilities**](docs/FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v2/functions/{function_id}/capabilities | Retrieve a functions capabilities
*FunctionsCoreApi* | [**getFunctionCapabilities_0**](docs/FunctionsCoreApi.md#getFunctionCapabilities_0) | **GET** /v3/functions/{function_id}/capabilities | Get capabilities for a function
*FunctionsCoreApi* | [**getFunctionDetails**](docs/FunctionsCoreApi.md#getFunctionDetails) | **GET** /v2/functions/{function_id} | Get function details
*FunctionsCoreApi* | [**getFunctionDetails_0**](docs/FunctionsCoreApi.md#getFunctionDetails_0) | **GET** /v3/functions/{function_id} | Get function details
*FunctionsCoreApi* | [**getFunctionIndirectCallSites**](docs/FunctionsCoreApi.md#getFunctionIndirectCallSites) | **GET** /v3/functions/{function_id}/indirect-call-sites | Get indirect call sites for a function
*FunctionsCoreApi* | [**getFunctionStrings**](docs/FunctionsCoreApi.md#getFunctionStrings) | **GET** /v2/functions/{function_id}/strings | Get string information found in the function
*FunctionsCoreApi* | [**getFunctionStrings_0**](docs/FunctionsCoreApi.md#getFunctionStrings_0) | **GET** /v3/functions/{function_id}/strings | List strings for a function.
*FunctionsCoreApi* | [**getFunctionsCalleesCallers**](docs/FunctionsCoreApi.md#getFunctionsCalleesCallers) | **GET** /v3/functions/callees-callers | Get callees and callers for many functions
*FunctionsCoreApi* | [**getFunctionsMatches**](docs/FunctionsCoreApi.md#getFunctionsMatches) | **GET** /v3/functions/matches | Get function-matching results for an explicit set of functions
*FunctionsCoreApi* | [**getFunctionsMatchingStatus**](docs/FunctionsCoreApi.md#getFunctionsMatchingStatus) | **GET** /v3/functions/matches/status | Get function-matching status for an explicit set of functions
*FunctionsCoreApi* | [**getImportedFunction**](docs/FunctionsCoreApi.md#getImportedFunction) | **GET** /v3/analyses/{analysis_id}/imported-functions/{imported_function_id} | Get an imported function with its callers
*FunctionsCoreApi* | [**listAnalysisFunctions**](docs/FunctionsCoreApi.md#listAnalysisFunctions) | **GET** /v3/analyses/{analysis_id}/functions | List functions in an analysis
*FunctionsCoreApi* | [**listImportedFunctions**](docs/FunctionsCoreApi.md#listImportedFunctions) | **GET** /v3/analyses/{analysis_id}/imported-functions | List imported functions in an analysis
*FunctionsCoreApi* | [**startFunctionsMatching**](docs/FunctionsCoreApi.md#startFunctionsMatching) | **POST** /v3/functions/matches | Start function matching for an explicit set of functions
*FunctionsCoreApi* | [**v3CanonicalizeFunctionNames**](docs/FunctionsCoreApi.md#v3CanonicalizeFunctionNames) | **POST** /v3/functions/canonical-names | Canonicalize a batch of function names
*FunctionsCoreApi* | [**v3GetAnalysisFuncMaps**](docs/FunctionsCoreApi.md#v3GetAnalysisFuncMaps) | **GET** /v3/analyses/{analysis_id}/func-maps | Get function ID/address maps for an analysis
*FunctionsCoreApi* | [**v3SearchFunctions**](docs/FunctionsCoreApi.md#v3SearchFunctions) | **GET** /v3/functions | Search functions
*FunctionsRenamingHistoryApi* | [**batchRenameFunction**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunction) | **POST** /v2/functions/rename/batch | Batch Rename Functions
*FunctionsRenamingHistoryApi* | [**batchRenameFunctions**](docs/FunctionsRenamingHistoryApi.md#batchRenameFunctions) | **POST** /v3/functions/rename | Batch rename functions
*FunctionsRenamingHistoryApi* | [**getFunctionHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionHistory) | **GET** /v3/functions/{function_id}/history | Get function name history
*FunctionsRenamingHistoryApi* | [**getFunctionNameHistory**](docs/FunctionsRenamingHistoryApi.md#getFunctionNameHistory) | **GET** /v2/functions/history/{function_id} | Get Function Name History
*FunctionsRenamingHistoryApi* | [**renameFunction**](docs/FunctionsRenamingHistoryApi.md#renameFunction) | **POST** /v3/functions/{function_id}/rename | Rename a function
*FunctionsRenamingHistoryApi* | [**renameFunctionId**](docs/FunctionsRenamingHistoryApi.md#renameFunctionId) | **POST** /v2/functions/rename/{function_id} | Rename Function
*FunctionsRenamingHistoryApi* | [**revertFunctionName**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v2/functions/history/{function_id}/{history_id} | Revert the function name
*FunctionsRenamingHistoryApi* | [**revertFunctionName_0**](docs/FunctionsRenamingHistoryApi.md#revertFunctionName_0) | **POST** /v3/functions/{function_id}/history/{history_id}/revert | Revert function name
*IAMUsersApi* | [**getMe**](docs/IAMUsersApi.md#getMe) | **GET** /v2/iam/me | Get current user
*IAMUsersApi* | [**getMyPermissions**](docs/IAMUsersApi.md#getMyPermissions) | **GET** /v2/iam/me/permissions | Get current user permissions
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
 - [AcceptTypeSuggestionsInputBody](AcceptTypeSuggestionsInputBody.md)
 - [AcceptTypeSuggestionsOutputBody](AcceptTypeSuggestionsOutputBody.md)
 - [AcceptedType](AcceptedType.md)
 - [ActivityBody](ActivityBody.md)
 - [AddCalleeInputBody](AddCalleeInputBody.md)
 - [AddCollectionBinariesInputBody](AddCollectionBinariesInputBody.md)
 - [AddIssuerDomainInputBody](AddIssuerDomainInputBody.md)
 - [AddOwnerInputBody](AddOwnerInputBody.md)
 - [AddTeamMemberInputBody](AddTeamMemberInputBody.md)
 - [AddUserStringInputBody](AddUserStringInputBody.md)
 - [AddUserStringToFunctionInputBody](AddUserStringToFunctionInputBody.md)
 - [AdditionalDetailsStatusResponse](AdditionalDetailsStatusResponse.md)
 - [AgentWorkflowUsageOutputBody](AgentWorkflowUsageOutputBody.md)
 - [AiDecompilationRating](AiDecompilationRating.md)
 - [AnalyseCapabilitiesBody](AnalyseCapabilitiesBody.md)
 - [AnalysisAccessBody](AnalysisAccessBody.md)
 - [AnalysisAccessInfo](AnalysisAccessInfo.md)
 - [AnalysisBasicInfoOutputBody](AnalysisBasicInfoOutputBody.md)
 - [AnalysisBulkAddTagsRequest](AnalysisBulkAddTagsRequest.md)
 - [AnalysisBulkAddTagsResponse](AnalysisBulkAddTagsResponse.md)
 - [AnalysisBulkAddTagsResponseItem](AnalysisBulkAddTagsResponseItem.md)
 - [AnalysisCapabilitiesOutputBody](AnalysisCapabilitiesOutputBody.md)
 - [AnalysisCapabilityBody](AnalysisCapabilityBody.md)
 - [AnalysisConfig](AnalysisConfig.md)
 - [AnalysisConfigSnapshot](AnalysisConfigSnapshot.md)
 - [AnalysisCreateRequest](AnalysisCreateRequest.md)
 - [AnalysisCreateResponse](AnalysisCreateResponse.md)
 - [AnalysisDataTypesGroup](AnalysisDataTypesGroup.md)
 - [AnalysisDataTypesOutputBody](AnalysisDataTypesOutputBody.md)
 - [AnalysisDetailOutputBody](AnalysisDetailOutputBody.md)
 - [AnalysisDetailResponse](AnalysisDetailResponse.md)
 - [AnalysisFunctionEntry](AnalysisFunctionEntry.md)
 - [AnalysisFunctionMapping](AnalysisFunctionMapping.md)
 - [AnalysisFunctions](AnalysisFunctions.md)
 - [AnalysisFunctionsList](AnalysisFunctionsList.md)
 - [AnalysisLogEntry](AnalysisLogEntry.md)
 - [AnalysisLogMessage](AnalysisLogMessage.md)
 - [AnalysisLogs](AnalysisLogs.md)
 - [AnalysisRecord](AnalysisRecord.md)
 - [AnalysisRecordBody](AnalysisRecordBody.md)
 - [AnalysisReport](AnalysisReport.md)
 - [AnalysisRequirement](AnalysisRequirement.md)
 - [AnalysisScope](AnalysisScope.md)
 - [AnalysisStringFunction](AnalysisStringFunction.md)
 - [AnalysisStringInput](AnalysisStringInput.md)
 - [AnalysisStringItem](AnalysisStringItem.md)
 - [AnalysisStringsResponse](AnalysisStringsResponse.md)
 - [AnalysisStringsStatusResponse](AnalysisStringsStatusResponse.md)
 - [AnalysisTagBody](AnalysisTagBody.md)
 - [AnalysisTags](AnalysisTags.md)
 - [AnalysisTagsOutputBody](AnalysisTagsOutputBody.md)
 - [AnalysisUpdateRequest](AnalysisUpdateRequest.md)
 - [AnalysisUpdateTagsRequest](AnalysisUpdateTagsRequest.md)
 - [AnalysisUpdateTagsResponse](AnalysisUpdateTagsResponse.md)
 - [AnalysisXrefOutputBody](AnalysisXrefOutputBody.md)
 - [ApiCall](ApiCall.md)
 - [ApiCombinationEvidence](ApiCombinationEvidence.md)
 - [ApiKeyBody](ApiKeyBody.md)
 - [AppApiRestV2AgentSchemaCapability](AppApiRestV2AgentSchemaCapability.md)
 - [AppApiRestV2AnalysesEnumsOrderBy](AppApiRestV2AnalysesEnumsOrderBy.md)
 - [AppApiRestV2CollectionsEnumsOrderBy](AppApiRestV2CollectionsEnumsOrderBy.md)
 - [AppApiRestV2FunctionsResponsesFunction](AppApiRestV2FunctionsResponsesFunction.md)
 - [AppApiRestV2FunctionsTypesFunction](AppApiRestV2FunctionsTypesFunction.md)
 - [AppApiRestV2InfoTypesCapability](AppApiRestV2InfoTypesCapability.md)
 - [ArchiveContentEntry](ArchiveContentEntry.md)
 - [ArrayDataType](ArrayDataType.md)
 - [ArrayDefinition](ArrayDefinition.md)
 - [Artifact](Artifact.md)
 - [AttemptFailedEvent](AttemptFailedEvent.md)
 - [AttemptStartedEvent](AttemptStartedEvent.md)
 - [AutoRunAgents](AutoRunAgents.md)
 - [AutoRunAgentsBody](AutoRunAgentsBody.md)
 - [AutoUnstripStatusOutputBody](AutoUnstripStatusOutputBody.md)
 - [BaseDataType](BaseDataType.md)
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
 - [BaseResponseFunctionSearchResponse](BaseResponseFunctionSearchResponse.md)
 - [BaseResponseFunctionStringsResponse](BaseResponseFunctionStringsResponse.md)
 - [BaseResponseFunctionsDetailResponse](BaseResponseFunctionsDetailResponse.md)
 - [BaseResponseGetPublicUserResponse](BaseResponseGetPublicUserResponse.md)
 - [BaseResponseListCalleesCallerFunctionsResponse](BaseResponseListCalleesCallerFunctionsResponse.md)
 - [BaseResponseListCollectionResults](BaseResponseListCollectionResults.md)
 - [BaseResponseListCommentResponse](BaseResponseListCommentResponse.md)
 - [BaseResponseListDieMatch](BaseResponseListDieMatch.md)
 - [BaseResponseListFunctionNameHistory](BaseResponseListFunctionNameHistory.md)
 - [BaseResponseListUserActivityResponse](BaseResponseListUserActivityResponse.md)
 - [BaseResponseLogs](BaseResponseLogs.md)
 - [BaseResponseModelsResponse](BaseResponseModelsResponse.md)
 - [BaseResponseParams](BaseResponseParams.md)
 - [BaseResponseProtocolsAgentResponse](BaseResponseProtocolsAgentResponse.md)
 - [BaseResponseQueuedWorkflowTaskResponse](BaseResponseQueuedWorkflowTaskResponse.md)
 - [BaseResponseRecent](BaseResponseRecent.md)
 - [BaseResponseRemediationAgentResponse](BaseResponseRemediationAgentResponse.md)
 - [BaseResponseReportAnalysisResponse](BaseResponseReportAnalysisResponse.md)
 - [BaseResponseSecretsAgentResponse](BaseResponseSecretsAgentResponse.md)
 - [BaseResponseStatus](BaseResponseStatus.md)
 - [BaseResponseStr](BaseResponseStr.md)
 - [BaseResponseTagSearchResponse](BaseResponseTagSearchResponse.md)
 - [BaseResponseTaskResponse](BaseResponseTaskResponse.md)
 - [BaseResponseTaskStatusResponse](BaseResponseTaskStatusResponse.md)
 - [BaseResponseTriageReportResponse](BaseResponseTriageReportResponse.md)
 - [BaseResponseUnionGetAiDecompilationRatingResponseNoneType](BaseResponseUnionGetAiDecompilationRatingResponseNoneType.md)
 - [BaseResponseUploadResponse](BaseResponseUploadResponse.md)
 - [BaseResponseXrefResponse](BaseResponseXrefResponse.md)
 - [Basic](Basic.md)
 - [BatchBinaryMatchResult](BatchBinaryMatchResult.md)
 - [BatchFunctionSignatureEntry](BatchFunctionSignatureEntry.md)
 - [BatchMatchingOutputBody](BatchMatchingOutputBody.md)
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
 - [BinaryExportMetadata](BinaryExportMetadata.md)
 - [BinaryExportResult](BinaryExportResult.md)
 - [BinaryExternalsBody](BinaryExternalsBody.md)
 - [BinaryExternalsResponse](BinaryExternalsResponse.md)
 - [BinarySearchResponse](BinarySearchResponse.md)
 - [BinarySearchResult](BinarySearchResult.md)
 - [BinarySearchResultBody](BinarySearchResultBody.md)
 - [BinaryTaskStatus](BinaryTaskStatus.md)
 - [BitfieldDataType](BitfieldDataType.md)
 - [BulkAddTagsInputBody](BulkAddTagsInputBody.md)
 - [BulkAddTagsOutputBody](BulkAddTagsOutputBody.md)
 - [BulkAddTagsResultBody](BulkAddTagsResultBody.md)
 - [BulkCreateUserResult](BulkCreateUserResult.md)
 - [BulkCreateUsersOutputBody](BulkCreateUsersOutputBody.md)
 - [BulkDeleteAnalysesInputBody](BulkDeleteAnalysesInputBody.md)
 - [BulkDeleteAnalysesRequest](BulkDeleteAnalysesRequest.md)
 - [BytesConstant](BytesConstant.md)
 - [CallChain](CallChain.md)
 - [CallChainEvidence](CallChainEvidence.md)
 - [CallEdge](CallEdge.md)
 - [CallEdgesOutputBody](CallEdgesOutputBody.md)
 - [CalleeFunctionInfo](CalleeFunctionInfo.md)
 - [CalleesCallerFunctionsResponse](CalleesCallerFunctionsResponse.md)
 - [CallerFunctionInfo](CallerFunctionInfo.md)
 - [CanonicalName](CanonicalName.md)
 - [CanonicalizeNamesInputBody](CanonicalizeNamesInputBody.md)
 - [CanonicalizeNamesOutputBody](CanonicalizeNamesOutputBody.md)
 - [Capabilities](Capabilities.md)
 - [CapabilitiesAgentResponse](CapabilitiesAgentResponse.md)
 - [CapabilitiesOutputBody](CapabilitiesOutputBody.md)
 - [CapabilitiesResult](CapabilitiesResult.md)
 - [Capability](Capability.md)
 - [CapabilityEntry](CapabilityEntry.md)
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
 - [Config](Config.md)
 - [ConfigResponse](ConfigResponse.md)
 - [ConfirmToolInputBody](ConfirmToolInputBody.md)
 - [Connection](Connection.md)
 - [ConsoleOutputEntry](ConsoleOutputEntry.md)
 - [Context](Context.md)
 - [Conversation](Conversation.md)
 - [ConversationContext](ConversationContext.md)
 - [ConversationWithEvents](ConversationWithEvents.md)
 - [CopyFunctionSignaturesInputBody](CopyFunctionSignaturesInputBody.md)
 - [CopyFunctionSignaturesOutputBody](CopyFunctionSignaturesOutputBody.md)
 - [CopySignatureItem](CopySignatureItem.md)
 - [CreateAIDecompOutputBody](CreateAIDecompOutputBody.md)
 - [CreateAnalysisDataTypesInputBody](CreateAnalysisDataTypesInputBody.md)
 - [CreateArrayDataType](CreateArrayDataType.md)
 - [CreateBaseDataType](CreateBaseDataType.md)
 - [CreateBitfieldDataType](CreateBitfieldDataType.md)
 - [CreateCheckoutSessionInputBody](CreateCheckoutSessionInputBody.md)
 - [CreateCollectionInputBody](CreateCollectionInputBody.md)
 - [CreateCollectionOutputBody](CreateCollectionOutputBody.md)
 - [CreateConversationRequest](CreateConversationRequest.md)
 - [CreateDataTypeEntry](CreateDataTypeEntry.md)
 - [CreateEnumDataType](CreateEnumDataType.md)
 - [CreateFunctionDataType](CreateFunctionDataType.md)
 - [CreateGroupInputBody](CreateGroupInputBody.md)
 - [CreateIdentityInputBody](CreateIdentityInputBody.md)
 - [CreateIssuerInputBody](CreateIssuerInputBody.md)
 - [CreateMetadata](CreateMetadata.md)
 - [CreateOrganisationInputBody](CreateOrganisationInputBody.md)
 - [CreatePointerDataType](CreatePointerDataType.md)
 - [CreatePortalSessionInputBody](CreatePortalSessionInputBody.md)
 - [CreateRequest](CreateRequest.md)
 - [CreateResult](CreateResult.md)
 - [CreateSecretStoreInputBody](CreateSecretStoreInputBody.md)
 - [CreateStructDataType](CreateStructDataType.md)
 - [CreateTeamInputBody](CreateTeamInputBody.md)
 - [CreateTypedefDataType](CreateTypedefDataType.md)
 - [CreateURLRequest](CreateURLRequest.md)
 - [CreateURLResponse](CreateURLResponse.md)
 - [CreateUnionDataType](CreateUnionDataType.md)
 - [CreateUnknownDataType](CreateUnknownDataType.md)
 - [CreateUserInputBody](CreateUserInputBody.md)
 - [Created](Created.md)
 - [CryptoCall](CryptoCall.md)
 - [CryptoDirectMatch](CryptoDirectMatch.md)
 - [CryptoExplainMetadata](CryptoExplainMetadata.md)
 - [CryptoExplainResult](CryptoExplainResult.md)
 - [CryptoExplainedFunction](CryptoExplainedFunction.md)
 - [CryptoFinding](CryptoFinding.md)
 - [CryptoScanMetadata](CryptoScanMetadata.md)
 - [CryptoScanResult](CryptoScanResult.md)
 - [CryptoVerification](CryptoVerification.md)
 - [DailyAnalysesCountOutputBody](DailyAnalysesCountOutputBody.md)
 - [DailyCountBody](DailyCountBody.md)
 - [DataTypeEntry](DataTypeEntry.md)
 - [DataTypeEnumValueEntry](DataTypeEnumValueEntry.md)
 - [DataTypeFunctionEntry](DataTypeFunctionEntry.md)
 - [DataTypeFunctionParameterEntry](DataTypeFunctionParameterEntry.md)
 - [DataTypeMemberEntry](DataTypeMemberEntry.md)
 - [DataTypeVersion](DataTypeVersion.md)
 - [DecompFailedEvent](DecompFailedEvent.md)
 - [DecompFinishedEvent](DecompFinishedEvent.md)
 - [DecompilationCommentContext](DecompilationCommentContext.md)
 - [DecompilationData](DecompilationData.md)
 - [DecompilerSummary](DecompilerSummary.md)
 - [DecompilerSummaryEvidence](DecompilerSummaryEvidence.md)
 - [DieMatch](DieMatch.md)
 - [DisassemblyOutputBody](DisassemblyOutputBody.md)
 - [Display](Display.md)
 - [DnsQuery](DnsQuery.md)
 - [DrakvufFileMetadata](DrakvufFileMetadata.md)
 - [DynamicExecutionMetadata](DynamicExecutionMetadata.md)
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
 - [Endianness](Endianness.md)
 - [EntrypointModel](EntrypointModel.md)
 - [EnumDataType](EnumDataType.md)
 - [EnumDefinition](EnumDefinition.md)
 - [ErrorBody](ErrorBody.md)
 - [ErrorModel](ErrorModel.md)
 - [Event](Event.md)
 - [EventAttemptFailed](EventAttemptFailed.md)
 - [EventAttemptStarted](EventAttemptStarted.md)
 - [EventCONTEXTCOMPACTED](EventCONTEXTCOMPACTED.md)
 - [EventDecompFailed](EventDecompFailed.md)
 - [EventDecompFinished](EventDecompFinished.md)
 - [EventNamesFinished](EventNamesFinished.md)
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
 - [EventTypesApplied](EventTypesApplied.md)
 - [EventTypesSuggested](EventTypesSuggested.md)
 - [EventWarning](EventWarning.md)
 - [EvidenceEffect](EvidenceEffect.md)
 - [EvidenceStrength](EvidenceStrength.md)
 - [Example](Example.md)
 - [ExecutionCall](ExecutionCall.md)
 - [ExecutionDirectMatch](ExecutionDirectMatch.md)
 - [ExecutionExplainMetadata](ExecutionExplainMetadata.md)
 - [ExecutionExplainResult](ExecutionExplainResult.md)
 - [ExecutionExplainedFunction](ExecutionExplainedFunction.md)
 - [ExecutionFinding](ExecutionFinding.md)
 - [ExecutionScanMetadata](ExecutionScanMetadata.md)
 - [ExecutionScanResult](ExecutionScanResult.md)
 - [ExecutionVerification](ExecutionVerification.md)
 - [ExportModel](ExportModel.md)
 - [ExternalResponse](ExternalResponse.md)
 - [ExtractedBinary](ExtractedBinary.md)
 - [ExtractedURL](ExtractedURL.md)
 - [ExtractionFailure](ExtractionFailure.md)
 - [FeedbackOutputBody](FeedbackOutputBody.md)
 - [FileActivityEntry](FileActivityEntry.md)
 - [FileFormat](FileFormat.md)
 - [FileHashes](FileHashes.md)
 - [FileMetadata](FileMetadata.md)
 - [FilesystemAnalyseMetadata](FilesystemAnalyseMetadata.md)
 - [FilesystemAnalyseResult](FilesystemAnalyseResult.md)
 - [FilesystemCall](FilesystemCall.md)
 - [FilesystemDirectMatch](FilesystemDirectMatch.md)
 - [FilesystemExplainedFunction](FilesystemExplainedFunction.md)
 - [FilesystemFinding](FilesystemFinding.md)
 - [FilesystemScanMetadata](FilesystemScanMetadata.md)
 - [FilesystemScanResult](FilesystemScanResult.md)
 - [FilesystemVerification](FilesystemVerification.md)
 - [Filters](Filters.md)
 - [Finding](Finding.md)
 - [FindingEvidenceInner](FindingEvidenceInner.md)
 - [FormFile](FormFile.md)
 - [FunctionBlockDestinationResponse](FunctionBlockDestinationResponse.md)
 - [FunctionBlockResponse](FunctionBlockResponse.md)
 - [FunctionBlocksResponse](FunctionBlocksResponse.md)
 - [FunctionBoundary](FunctionBoundary.md)
 - [FunctionCallEdges](FunctionCallEdges.md)
 - [FunctionCapabilityResponse](FunctionCapabilityResponse.md)
 - [FunctionDataType](FunctionDataType.md)
 - [FunctionDetailsOutputBody](FunctionDetailsOutputBody.md)
 - [FunctionListItem](FunctionListItem.md)
 - [FunctionLocalVariableResponse](FunctionLocalVariableResponse.md)
 - [FunctionMapping](FunctionMapping.md)
 - [FunctionMatch](FunctionMatch.md)
 - [FunctionNameHistory](FunctionNameHistory.md)
 - [FunctionParamResponse](FunctionParamResponse.md)
 - [FunctionRename](FunctionRename.md)
 - [FunctionRenameMap](FunctionRenameMap.md)
 - [FunctionSearchResponse](FunctionSearchResponse.md)
 - [FunctionSearchResult](FunctionSearchResult.md)
 - [FunctionSearchResultBody](FunctionSearchResultBody.md)
 - [FunctionSignatureBody](FunctionSignatureBody.md)
 - [FunctionSignatureEntry](FunctionSignatureEntry.md)
 - [FunctionSignatureVersion](FunctionSignatureVersion.md)
 - [FunctionSimilarity](FunctionSimilarity.md)
 - [FunctionSimilarityEvidence](FunctionSimilarityEvidence.md)
 - [FunctionSourceType](FunctionSourceType.md)
 - [FunctionString](FunctionString.md)
 - [FunctionStringItem](FunctionStringItem.md)
 - [FunctionStringsResponse](FunctionStringsResponse.md)
 - [FunctionTypeDefinition](FunctionTypeDefinition.md)
 - [FunctionsDetailResponse](FunctionsDetailResponse.md)
 - [FunctionsListRename](FunctionsListRename.md)
 - [FunctionsProgressOutputBody](FunctionsProgressOutputBody.md)
 - [GeneratePDFOutputBody](GeneratePDFOutputBody.md)
 - [GetAPIKeysOutputBody](GetAPIKeysOutputBody.md)
 - [GetAdditionalDetailsOutputBody](GetAdditionalDetailsOutputBody.md)
 - [GetAdditionalDetailsStatusOutputBody](GetAdditionalDetailsStatusOutputBody.md)
 - [GetAiDecompilationRatingResponse](GetAiDecompilationRatingResponse.md)
 - [GetAnalysisLogsOutputBody](GetAnalysisLogsOutputBody.md)
 - [GetAnalysisStringsStatusOutputBody](GetAnalysisStringsStatusOutputBody.md)
 - [GetBinaryExternalsOutputBody](GetBinaryExternalsOutputBody.md)
 - [GetCollectionOutputBody](GetCollectionOutputBody.md)
 - [GetConfigOutputBody](GetConfigOutputBody.md)
 - [GetDataTypeHistoryBody](GetDataTypeHistoryBody.md)
 - [GetDieInfoOutputBody](GetDieInfoOutputBody.md)
 - [GetFunctionMapsOutputBody](GetFunctionMapsOutputBody.md)
 - [GetFunctionSignatureHistoryBody](GetFunctionSignatureHistoryBody.md)
 - [GetMatchesOutputBody](GetMatchesOutputBody.md)
 - [GetMatchesStatusOutputBody](GetMatchesStatusOutputBody.md)
 - [GetModelsOutputBody](GetModelsOutputBody.md)
 - [GetProductsOutputBody](GetProductsOutputBody.md)
 - [GetPublicUserOutputBody](GetPublicUserOutputBody.md)
 - [GetPublicUserResponse](GetPublicUserResponse.md)
 - [GetRelatedBinariesOutputBody](GetRelatedBinariesOutputBody.md)
 - [GetRelatedStatusOutputBody](GetRelatedStatusOutputBody.md)
 - [GetSubscriptionOutputBody](GetSubscriptionOutputBody.md)
 - [GetTokensResponse](GetTokensResponse.md)
 - [GetUserActivityOutputBody](GetUserActivityOutputBody.md)
 - [HardcodedSecretEvidence](HardcodedSecretEvidence.md)
 - [HistoryActor](HistoryActor.md)
 - [HistoryEntry](HistoryEntry.md)
 - [HttpRequest](HttpRequest.md)
 - [IOC](IOC.md)
 - [ISA](ISA.md)
 - [IconModel](IconModel.md)
 - [ImportDynamicExecutionFileOutputBody](ImportDynamicExecutionFileOutputBody.md)
 - [ImportModel](ImportModel.md)
 - [ImportedApi](ImportedApi.md)
 - [ImportedApiCall](ImportedApiCall.md)
 - [ImportedApiCallEvidence](ImportedApiCallEvidence.md)
 - [ImportedFunctionCallerEntry](ImportedFunctionCallerEntry.md)
 - [ImportedFunctionDetailOutputBody](ImportedFunctionDetailOutputBody.md)
 - [ImportedFunctionEntry](ImportedFunctionEntry.md)
 - [IndirectCallSite](IndirectCallSite.md)
 - [IndirectCallSitesOutputBody](IndirectCallSitesOutputBody.md)
 - [InlineComment](InlineComment.md)
 - [InputBody](InputBody.md)
 - [InsertAnalysisLogRequest](InsertAnalysisLogRequest.md)
 - [InviteUserInputBody](InviteUserInputBody.md)
 - [IssuerAllowedDomain](IssuerAllowedDomain.md)
 - [KnownConstantEvidence](KnownConstantEvidence.md)
 - [LineAttributionsData](LineAttributionsData.md)
 - [ListAnalysesOutputBody](ListAnalysesOutputBody.md)
 - [ListAnalysisDataTypesOutputBody](ListAnalysisDataTypesOutputBody.md)
 - [ListAnalysisFunctionsOutputBody](ListAnalysisFunctionsOutputBody.md)
 - [ListAnalysisStringsOutputBody](ListAnalysisStringsOutputBody.md)
 - [ListArchiveContentsOutputBody](ListArchiveContentsOutputBody.md)
 - [ListCollectionResults](ListCollectionResults.md)
 - [ListCollectionsOutputBody](ListCollectionsOutputBody.md)
 - [ListDataTypeFunctionsBody](ListDataTypeFunctionsBody.md)
 - [ListExampleAnalysesOutputBody](ListExampleAnalysesOutputBody.md)
 - [ListFunctionSignaturesOutputBody](ListFunctionSignaturesOutputBody.md)
 - [ListFunctionStringsOutputBody](ListFunctionStringsOutputBody.md)
 - [ListImportedFunctionsOutputBody](ListImportedFunctionsOutputBody.md)
 - [ListSecretStoreOutputBody](ListSecretStoreOutputBody.md)
 - [ListTeamsOutputBody](ListTeamsOutputBody.md)
 - [ListUsersOutputBody](ListUsersOutputBody.md)
 - [LocationOutputBody](LocationOutputBody.md)
 - [Logs](Logs.md)
 - [LookupAnalysisByBinaryIDOutputBody](LookupAnalysisByBinaryIDOutputBody.md)
 - [MITRETechnique](MITRETechnique.md)
 - [MatchFilters](MatchFilters.md)
 - [MatchedFunction](MatchedFunction.md)
 - [MemdumpEntry](MemdumpEntry.md)
 - [MessageBody](MessageBody.md)
 - [Meta](Meta.md)
 - [MetaModel](MetaModel.md)
 - [Metadata](Metadata.md)
 - [ModelInterpretation](ModelInterpretation.md)
 - [ModelInterpretationEvidence](ModelInterpretationEvidence.md)
 - [ModelName](ModelName.md)
 - [ModelsResponse](ModelsResponse.md)
 - [ModuleLoadEntry](ModuleLoadEntry.md)
 - [MutexEntry](MutexEntry.md)
 - [NameConfidence](NameConfidence.md)
 - [NameSourceType](NameSourceType.md)
 - [NamesFinishedEvent](NamesFinishedEvent.md)
 - [NetworkActivity](NetworkActivity.md)
 - [NetworkingCall](NetworkingCall.md)
 - [NetworkingDirectMatch](NetworkingDirectMatch.md)
 - [NetworkingExplainMetadata](NetworkingExplainMetadata.md)
 - [NetworkingExplainResult](NetworkingExplainResult.md)
 - [NetworkingExplainedFunction](NetworkingExplainedFunction.md)
 - [NetworkingFinding](NetworkingFinding.md)
 - [NetworkingScanMetadata](NetworkingScanMetadata.md)
 - [NetworkingScanResult](NetworkingScanResult.md)
 - [NetworkingVerification](NetworkingVerification.md)
 - [OIDCCallbackInputBody](OIDCCallbackInputBody.md)
 - [OperandXref](OperandXref.md)
 - [OperationBinaryExportMetadataBinaryExportResult](OperationBinaryExportMetadataBinaryExportResult.md)
 - [OperationCreateMetadataCreateResult](OperationCreateMetadataCreateResult.md)
 - [OperationCryptoExplainMetadataCryptoExplainResult](OperationCryptoExplainMetadataCryptoExplainResult.md)
 - [OperationCryptoScanMetadataCryptoScanResult](OperationCryptoScanMetadataCryptoScanResult.md)
 - [OperationDynamicExecutionMetadataDynamicExecutionResult](OperationDynamicExecutionMetadataDynamicExecutionResult.md)
 - [OperationExecutionExplainMetadataExecutionExplainResult](OperationExecutionExplainMetadataExecutionExplainResult.md)
 - [OperationExecutionScanMetadataExecutionScanResult](OperationExecutionScanMetadataExecutionScanResult.md)
 - [OperationFilesystemAnalyseMetadataFilesystemAnalyseResult](OperationFilesystemAnalyseMetadataFilesystemAnalyseResult.md)
 - [OperationFilesystemScanMetadataFilesystemScanResult](OperationFilesystemScanMetadataFilesystemScanResult.md)
 - [OperationMetadataCapabilitiesResult](OperationMetadataCapabilitiesResult.md)
 - [OperationMetadataRemediationResult](OperationMetadataRemediationResult.md)
 - [OperationMetadataReportResult](OperationMetadataReportResult.md)
 - [OperationMetadataThreatReportResult](OperationMetadataThreatReportResult.md)
 - [OperationMetadataTriageResult](OperationMetadataTriageResult.md)
 - [OperationNetworkingExplainMetadataNetworkingExplainResult](OperationNetworkingExplainMetadataNetworkingExplainResult.md)
 - [OperationNetworkingScanMetadataNetworkingScanResult](OperationNetworkingScanMetadataNetworkingScanResult.md)
 - [OperationSecurityScanMetadataSecurityScanResult](OperationSecurityScanMetadataSecurityScanResult.md)
 - [OperationVirusTotalScanMetadataVirusTotalScanResult](OperationVirusTotalScanMetadataVirusTotalScanResult.md)
 - [OperationWorkflowProgressResultBody](OperationWorkflowProgressResultBody.md)
 - [Order](Order.md)
 - [Organisation](Organisation.md)
 - [OrganisationGroup](OrganisationGroup.md)
 - [OrganisationIssuer](OrganisationIssuer.md)
 - [OrganisationOwner](OrganisationOwner.md)
 - [PDBDebugModel](PDBDebugModel.md)
 - [PEModel](PEModel.md)
 - [PaginationModel](PaginationModel.md)
 - [Params](Params.md)
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
 - [Platform](Platform.md)
 - [PointerDataType](PointerDataType.md)
 - [PointerDefinition](PointerDefinition.md)
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
 - [ProtocolsAgentResponse](ProtocolsAgentResponse.md)
 - [PutAnalysisStringsRequest](PutAnalysisStringsRequest.md)
 - [QueuedWorkflowTaskResponse](QueuedWorkflowTaskResponse.md)
 - [RatingOutputBody](RatingOutputBody.md)
 - [ReAnalysisForm](ReAnalysisForm.md)
 - [Recent](Recent.md)
 - [ReferencedConstant](ReferencedConstant.md)
 - [ReferencedConstantEvidence](ReferencedConstantEvidence.md)
 - [RefreshBody](RefreshBody.md)
 - [RegenerateOutputBody](RegenerateOutputBody.md)
 - [RegisterUserInputBody](RegisterUserInputBody.md)
 - [RegistryOperation](RegistryOperation.md)
 - [RelatedBinary](RelatedBinary.md)
 - [RelativeBinaryResponse](RelativeBinaryResponse.md)
 - [RemediationAgentResponse](RemediationAgentResponse.md)
 - [RemediationResult](RemediationResult.md)
 - [RemoveCollectionBinariesInputBody](RemoveCollectionBinariesInputBody.md)
 - [RenameAppliedEvent](RenameAppliedEvent.md)
 - [RenameInputBody](RenameInputBody.md)
 - [RenameOutputBody](RenameOutputBody.md)
 - [RenameUnnamedFunctionsResult](RenameUnnamedFunctionsResult.md)
 - [RenderedToken](RenderedToken.md)
 - [ReportAnalysisBody](ReportAnalysisBody.md)
 - [ReportAnalysisResponse](ReportAnalysisResponse.md)
 - [ReportEvent](ReportEvent.md)
 - [ReportInfo](ReportInfo.md)
 - [ReportOptions](ReportOptions.md)
 - [ReportReachabilityStatus](ReportReachabilityStatus.md)
 - [ReportResult](ReportResult.md)
 - [RequestedConfigBody](RequestedConfigBody.md)
 - [ResendVerificationEmailInputBody](ResendVerificationEmailInputBody.md)
 - [ResolvedEntity](ResolvedEntity.md)
 - [ResultBody](ResultBody.md)
 - [RevokeBody](RevokeBody.md)
 - [RuleKind](RuleKind.md)
 - [RunDynamicExecutionInputBody](RunDynamicExecutionInputBody.md)
 - [SSOProvider](SSOProvider.md)
 - [SSOProvidersOutputBody](SSOProvidersOutputBody.md)
 - [SandboxConfig](SandboxConfig.md)
 - [SandboxOptions](SandboxOptions.md)
 - [SandboxStartMethod](SandboxStartMethod.md)
 - [SandboxTimeout](SandboxTimeout.md)
 - [ScheduledTaskEntry](ScheduledTaskEntry.md)
 - [ScrapeThirdPartyConfig](ScrapeThirdPartyConfig.md)
 - [ScreenshotEntry](ScreenshotEntry.md)
 - [ScreenshotsIndex](ScreenshotsIndex.md)
 - [SearchBinariesOutputBody](SearchBinariesOutputBody.md)
 - [SearchFunctionsOutputBody](SearchFunctionsOutputBody.md)
 - [SearchTagsOutputBody](SearchTagsOutputBody.md)
 - [SecretBody](SecretBody.md)
 - [SecretsAgentResponse](SecretsAgentResponse.md)
 - [SectionModel](SectionModel.md)
 - [SecurityFinding](SecurityFinding.md)
 - [SecurityModel](SecurityModel.md)
 - [SecurityScanMetadata](SecurityScanMetadata.md)
 - [SecurityScanResult](SecurityScanResult.md)
 - [SegmentInfo](SegmentInfo.md)
 - [SendMessageRequest](SendMessageRequest.md)
 - [ServiceEntry](ServiceEntry.md)
 - [SessionOutputBody](SessionOutputBody.md)
 - [SignatureParameterEntry](SignatureParameterEntry.md)
 - [SignatureParameterInput](SignatureParameterInput.md)
 - [SignatureStorageEntry](SignatureStorageEntry.md)
 - [SignatureStorageInput](SignatureStorageInput.md)
 - [SingleCodeCertificateModel](SingleCodeCertificateModel.md)
 - [SingleCodeSignatureModel](SingleCodeSignatureModel.md)
 - [SinglePDBEntryModel](SinglePDBEntryModel.md)
 - [SingleSectionModel](SingleSectionModel.md)
 - [SoftwareTypeCountsBody](SoftwareTypeCountsBody.md)
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
 - [Status](Status.md)
 - [StatusBody](StatusBody.md)
 - [StatusInput](StatusInput.md)
 - [StatusOutput](StatusOutput.md)
 - [StatusResponse](StatusResponse.md)
 - [StreamAiDecompilation200ResponseInner](StreamAiDecompilation200ResponseInner.md)
 - [StreamEvents200ResponseInner](StreamEvents200ResponseInner.md)
 - [StringFunctions](StringFunctions.md)
 - [StringMatch](StringMatch.md)
 - [StringMatchEvidence](StringMatchEvidence.md)
 - [StringSource](StringSource.md)
 - [StructDataType](StructDataType.md)
 - [StructDefinition](StructDefinition.md)
 - [Subject](Subject.md)
 - [SubjectAnyOf](SubjectAnyOf.md)
 - [SubjectAnyOf1](SubjectAnyOf1.md)
 - [SubjectAnyOf2](SubjectAnyOf2.md)
 - [SubjectAnyOf3](SubjectAnyOf3.md)
 - [SubmitFeedbackBody](SubmitFeedbackBody.md)
 - [SubmitFeedbackInputBody](SubmitFeedbackInputBody.md)
 - [SubmitFeedbackOutputBody](SubmitFeedbackOutputBody.md)
 - [SubmitUserFeedbackRequest](SubmitUserFeedbackRequest.md)
 - [SuggestedHole](SuggestedHole.md)
 - [SuggestedMemberView](SuggestedMemberView.md)
 - [SuggestedTypeView](SuggestedTypeView.md)
 - [SummaryData](SummaryData.md)
 - [Symbols](Symbols.md)
 - [Tag](Tag.md)
 - [TagItem](TagItem.md)
 - [TagResponse](TagResponse.md)
 - [TagSearchResponse](TagSearchResponse.md)
 - [TagSearchResult](TagSearchResult.md)
 - [TagSearchResultBody](TagSearchResultBody.md)
 - [TaskResponse](TaskResponse.md)
 - [TaskStatus](TaskStatus.md)
 - [TaskStatusResponse](TaskStatusResponse.md)
 - [TcpCarvedFile](TcpCarvedFile.md)
 - [Team](Team.md)
 - [TeamMember](TeamMember.md)
 - [Technique](Technique.md)
 - [ThreatReportResult](ThreatReportResult.md)
 - [TimestampModel](TimestampModel.md)
 - [Token](Token.md)
 - [TokenInputBody](TokenInputBody.md)
 - [TokenResponse](TokenResponse.md)
 - [TokenisedData](TokenisedData.md)
 - [TriageFunction](TriageFunction.md)
 - [TriageFunctionResponse](TriageFunctionResponse.md)
 - [TriageReportResponse](TriageReportResponse.md)
 - [TriageResult](TriageResult.md)
 - [TriggerCryptoScanInputBody](TriggerCryptoScanInputBody.md)
 - [TriggerDynamicExecutionInputBody](TriggerDynamicExecutionInputBody.md)
 - [TriggerExecutionExplainInputBody](TriggerExecutionExplainInputBody.md)
 - [TriggerExecutionScanInputBody](TriggerExecutionScanInputBody.md)
 - [TriggerFilesystemAnalyseInputBody](TriggerFilesystemAnalyseInputBody.md)
 - [TriggerFilesystemScanInputBody](TriggerFilesystemScanInputBody.md)
 - [TriggerNetworkingExplainInputBody](TriggerNetworkingExplainInputBody.md)
 - [TriggerNetworkingScanInputBody](TriggerNetworkingScanInputBody.md)
 - [TriggerRenameUnnamedFunctionsInputBody](TriggerRenameUnnamedFunctionsInputBody.md)
 - [TriggerSecurityScanInputBody](TriggerSecurityScanInputBody.md)
 - [Ttp](Ttp.md)
 - [TypeSuggestionsData](TypeSuggestionsData.md)
 - [TypedefDataType](TypedefDataType.md)
 - [TypedefDefinition](TypedefDefinition.md)
 - [TypesAppliedEvent](TypesAppliedEvent.md)
 - [TypesSuggestedEvent](TypesSuggestedEvent.md)
 - [UnionDataType](UnionDataType.md)
 - [UnionDefinition](UnionDefinition.md)
 - [UnknownDataType](UnknownDataType.md)
 - [UpdateAnalysisDataTypesInputBody](UpdateAnalysisDataTypesInputBody.md)
 - [UpdateAnalysisInputBody](UpdateAnalysisInputBody.md)
 - [UpdateArrayDataType](UpdateArrayDataType.md)
 - [UpdateBaseDataType](UpdateBaseDataType.md)
 - [UpdateBitfieldDataType](UpdateBitfieldDataType.md)
 - [UpdateDataTypeEntry](UpdateDataTypeEntry.md)
 - [UpdateEnumDataType](UpdateEnumDataType.md)
 - [UpdateFunctionDataType](UpdateFunctionDataType.md)
 - [UpdateFunctionSignatureInputBody](UpdateFunctionSignatureInputBody.md)
 - [UpdateIssuerInputBody](UpdateIssuerInputBody.md)
 - [UpdateOrganisationInputBody](UpdateOrganisationInputBody.md)
 - [UpdatePasswordInputBody](UpdatePasswordInputBody.md)
 - [UpdatePointerDataType](UpdatePointerDataType.md)
 - [UpdateProfileInputBody](UpdateProfileInputBody.md)
 - [UpdateSecretStoreInputBody](UpdateSecretStoreInputBody.md)
 - [UpdateStructDataType](UpdateStructDataType.md)
 - [UpdateTagsInputBody](UpdateTagsInputBody.md)
 - [UpdateTeamInputBody](UpdateTeamInputBody.md)
 - [UpdateTypedefDataType](UpdateTypedefDataType.md)
 - [UpdateUnionDataType](UpdateUnionDataType.md)
 - [UpdateUnknownDataType](UpdateUnknownDataType.md)
 - [UpdateUserCreditsInputBody](UpdateUserCreditsInputBody.md)
 - [UpdateUserInputBody](UpdateUserInputBody.md)
 - [UpdateUserPasswordInputBody](UpdateUserPasswordInputBody.md)
 - [UpgradeAnalysisModelOutputBody](UpgradeAnalysisModelOutputBody.md)
 - [UploadFileType](UploadFileType.md)
 - [UploadOutputBody](UploadOutputBody.md)
 - [UploadResponse](UploadResponse.md)
 - [UpsertAiDecomplationRatingRequest](UpsertAiDecomplationRatingRequest.md)
 - [UpsertOverridesData](UpsertOverridesData.md)
 - [UpsertOverridesInputBody](UpsertOverridesInputBody.md)
 - [UpsertRatingInputBody](UpsertRatingInputBody.md)
 - [User](User.md)
 - [UserActivityResponse](UserActivityResponse.md)
 - [UserCredits](UserCredits.md)
 - [UserIdentity](UserIdentity.md)
 - [UserProfile](UserProfile.md)
 - [VirusTotalScanMetadata](VirusTotalScanMetadata.md)
 - [VirusTotalScanResult](VirusTotalScanResult.md)
 - [WarningEvent](WarningEvent.md)
 - [WorkflowDayBody](WorkflowDayBody.md)
 - [WorkflowProgress](WorkflowProgress.md)
 - [Workspace](Workspace.md)
 - [XrefFromBody](XrefFromBody.md)
 - [XrefFromResponse](XrefFromResponse.md)
 - [XrefIntoBody](XrefIntoBody.md)
 - [XrefResponse](XrefResponse.md)
 - [XrefSegmentBody](XrefSegmentBody.md)
 - [XrefToResponse](XrefToResponse.md)
