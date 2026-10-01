# .AgentApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet**](AgentApi.md#checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities/status | Check the status of a capabilities analysis workflow
[**checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet**](AgentApi.md#checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/protocols/status | Check the status of a protocols discovery workflow
[**checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet**](AgentApi.md#checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/remediation/status | Check the status of a remediation analysis workflow
[**checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet**](AgentApi.md#checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis/status | Check the status of a report analysis workflow
[**checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet**](AgentApi.md#checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/secrets/status | Check the status of a secrets discovery workflow
[**checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet**](AgentApi.md#checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/triage/status | Check the status of a triage analysis workflow
[**createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost**](AgentApi.md#createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost) | **POST** /v2/analyses/{analysis_id}/agent/capabilities | Queues a capabilities analysis workflow process
[**createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost**](AgentApi.md#createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost) | **POST** /v2/analyses/{analysis_id}/agent/protocols | Queues a protocols discovery workflow process
[**createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost**](AgentApi.md#createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost) | **POST** /v2/analyses/{analysis_id}/agent/remediation | Queues a remediation analysis workflow process
[**createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost**](AgentApi.md#createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost) | **POST** /v2/analyses/{analysis_id}/agent/report-analysis | Queues a combined report analysis workflow process
[**createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost**](AgentApi.md#createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost) | **POST** /v2/analyses/{analysis_id}/agent/secrets | Queues a secrets discovery workflow process
[**createTriageTaskV2AnalysesAnalysisIdAgentTriagePost**](AgentApi.md#createTriageTaskV2AnalysesAnalysisIdAgentTriagePost) | **POST** /v2/analyses/{analysis_id}/agent/triage | Queues a triage analysis workflow process
[**getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet**](AgentApi.md#getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities | Get Capabilities Result
[**getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet**](AgentApi.md#getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet) | **GET** /v2/analyses/{analysis_id}/agent/protocols | Get Protocols Result
[**getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet**](AgentApi.md#getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet) | **GET** /v2/analyses/{analysis_id}/agent/remediation | Get Remediation Result
[**getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet**](AgentApi.md#getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis | Get Report Analysis Result
[**getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet**](AgentApi.md#getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet) | **GET** /v2/analyses/{analysis_id}/agent/secrets | Get Secrets Result
[**getTriageResultV2AnalysesAnalysisIdAgentTriageGet**](AgentApi.md#getTriageResultV2AnalysesAnalysisIdAgentTriageGet) | **GET** /v2/analyses/{analysis_id}/agent/triage | Get Triage Result
[**v3CancelRenameUnnamedFunctions**](AgentApi.md#v3CancelRenameUnnamedFunctions) | **POST** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions/cancel | Cancel the rename-unnamed-functions agent.
[**v3CancelSecurityScanOperation**](AgentApi.md#v3CancelSecurityScanOperation) | **POST** /v3/operations/security-scan/{analysis_id}:cancel | Cancel a security-scan operation.
[**v3GetBinaryAgentFeedback**](AgentApi.md#v3GetBinaryAgentFeedback) | **GET** /v3/analyses/{analysis_id}/agents/{agent}/feedback | Get the caller\&#39;s feedback on an agent\&#39;s output.
[**v3GetCapabilitiesOperation**](AgentApi.md#v3GetCapabilitiesOperation) | **GET** /v3/operations/capabilities/{analysis_id} | Get a capabilities operation.
[**v3GetCryptoExplainOperation**](AgentApi.md#v3GetCryptoExplainOperation) | **GET** /v3/operations/crypto-explain/{function_id} | Get a crypto-explain operation.
[**v3GetCryptoScanOperation**](AgentApi.md#v3GetCryptoScanOperation) | **GET** /v3/operations/crypto-scan/{analysis_id} | Get a crypto-scan operation.
[**v3GetExecutionExplainOperation**](AgentApi.md#v3GetExecutionExplainOperation) | **GET** /v3/operations/execution-explain/{function_id} | Get an execution-explain operation.
[**v3GetExecutionScanOperation**](AgentApi.md#v3GetExecutionScanOperation) | **GET** /v3/operations/execution-scan/{analysis_id} | Get an execution-scan operation.
[**v3GetFilesystemAnalyseOperation**](AgentApi.md#v3GetFilesystemAnalyseOperation) | **GET** /v3/operations/filesystem-analyse/{function_id} | Get a filesystem-analyse operation.
[**v3GetFilesystemScanOperation**](AgentApi.md#v3GetFilesystemScanOperation) | **GET** /v3/operations/filesystem-scan/{analysis_id} | Get a filesystem-scan operation.
[**v3GetNetworkingExplainOperation**](AgentApi.md#v3GetNetworkingExplainOperation) | **GET** /v3/operations/networking-explain/{function_id} | Get a networking-explain operation.
[**v3GetNetworkingScanOperation**](AgentApi.md#v3GetNetworkingScanOperation) | **GET** /v3/operations/networking-scan/{analysis_id} | Get a networking-scan operation.
[**v3GetProtocolsOperation**](AgentApi.md#v3GetProtocolsOperation) | **GET** /v3/operations/protocols/{analysis_id} | Get a protocols operation.
[**v3GetRemediationOperation**](AgentApi.md#v3GetRemediationOperation) | **GET** /v3/operations/remediation/{analysis_id} | Get a remediation operation.
[**v3GetRenameUnnamedFunctionsResult**](AgentApi.md#v3GetRenameUnnamedFunctionsResult) | **GET** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions | Get rename-unnamed-functions agent result.
[**v3GetRenameUnnamedFunctionsStatus**](AgentApi.md#v3GetRenameUnnamedFunctionsStatus) | **GET** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions/status | Get rename-unnamed-functions agent status.
[**v3GetReportAnalysisOperation**](AgentApi.md#v3GetReportAnalysisOperation) | **GET** /v3/operations/report-analysis/{analysis_id} | Get a report-analysis operation.
[**v3GetSecretsOperation**](AgentApi.md#v3GetSecretsOperation) | **GET** /v3/operations/secrets/{analysis_id} | Get a secrets operation.
[**v3GetSecurityScanOperation**](AgentApi.md#v3GetSecurityScanOperation) | **GET** /v3/operations/security-scan/{analysis_id} | Get a security-scan operation.
[**v3GetTriageOperation**](AgentApi.md#v3GetTriageOperation) | **GET** /v3/operations/triage/{analysis_id} | Get a triage operation.
[**v3RunCapabilities**](AgentApi.md#v3RunCapabilities) | **POST** /v3/analyses/{analysis_id}/capabilities:run | Run the capabilities agent.
[**v3RunCryptoExplain**](AgentApi.md#v3RunCryptoExplain) | **POST** /v3/functions/{function_id}/crypto-explain:run | Run the crypto-explain agent.
[**v3RunCryptoScan**](AgentApi.md#v3RunCryptoScan) | **POST** /v3/analyses/{analysis_id}/crypto-scan:run | Run the crypto-scan agent.
[**v3RunExecutionExplain**](AgentApi.md#v3RunExecutionExplain) | **POST** /v3/functions/{function_id}/execution-explain:run | Run the execution-explain agent.
[**v3RunExecutionScan**](AgentApi.md#v3RunExecutionScan) | **POST** /v3/analyses/{analysis_id}/execution-scan:run | Run the execution-scan agent.
[**v3RunFilesystemAnalyse**](AgentApi.md#v3RunFilesystemAnalyse) | **POST** /v3/functions/{function_id}/filesystem-analyse:run | Run the filesystem-analyse agent.
[**v3RunFilesystemScan**](AgentApi.md#v3RunFilesystemScan) | **POST** /v3/analyses/{analysis_id}/filesystem-scan:run | Run the filesystem-scan agent.
[**v3RunNetworkingExplain**](AgentApi.md#v3RunNetworkingExplain) | **POST** /v3/functions/{function_id}/networking-explain:run | Run the networking-explain agent.
[**v3RunNetworkingScan**](AgentApi.md#v3RunNetworkingScan) | **POST** /v3/analyses/{analysis_id}/networking-scan:run | Run the networking-scan agent.
[**v3RunProtocols**](AgentApi.md#v3RunProtocols) | **POST** /v3/analyses/{analysis_id}/protocols:run | Run the protocols agent.
[**v3RunRemediation**](AgentApi.md#v3RunRemediation) | **POST** /v3/analyses/{analysis_id}/remediation:run | Run the remediation agent.
[**v3RunReportAnalysis**](AgentApi.md#v3RunReportAnalysis) | **POST** /v3/analyses/{analysis_id}/report-analysis:run | Run the report-analysis agent.
[**v3RunSecrets**](AgentApi.md#v3RunSecrets) | **POST** /v3/analyses/{analysis_id}/secrets:run | Run the secrets agent.
[**v3RunSecurityScan**](AgentApi.md#v3RunSecurityScan) | **POST** /v3/analyses/{analysis_id}/security-scan:run | Run the security-scan agent.
[**v3RunTriage**](AgentApi.md#v3RunTriage) | **POST** /v3/analyses/{analysis_id}/triage:run | Run the triage agent.
[**v3TriggerRenameUnnamedFunctions**](AgentApi.md#v3TriggerRenameUnnamedFunctions) | **POST** /v3/analyses/{analysis_id}/agents/rename-unnamed-functions | Run the rename-unnamed-functions agent.
[**v3UpsertBinaryAgentFeedback**](AgentApi.md#v3UpsertBinaryAgentFeedback) | **PUT** /v3/analyses/{analysis_id}/agents/{agent}/feedback | Record feedback on an agent\&#39;s output.


# **checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet**
> TaskStatusResponse checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet**
> TaskStatusResponse checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkProtocolsTaskStatusV2AnalysesAnalysisIdAgentProtocolsStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet**
> TaskStatusResponse checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkRemediationTaskStatusV2AnalysesAnalysisIdAgentRemediationStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet**
> TaskStatusResponse checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet**
> TaskStatusResponse checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkSecretsTaskStatusV2AnalysesAnalysisIdAgentSecretsStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet**
> TaskStatusResponse checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCheckTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**TaskStatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost**
> BaseResponseQueuedWorkflowTaskResponse createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseQueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost**
> BaseResponseQueuedWorkflowTaskResponse createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createProtocolsTaskV2AnalysesAnalysisIdAgentProtocolsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseQueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost**
> BaseResponseQueuedWorkflowTaskResponse createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateRemediationTaskV2AnalysesAnalysisIdAgentRemediationPostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createRemediationTaskV2AnalysesAnalysisIdAgentRemediationPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseQueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost**
> QueuedWorkflowTaskResponse createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**QueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |
**409** | Task already completed or queued |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost**
> BaseResponseQueuedWorkflowTaskResponse createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateSecretsTaskV2AnalysesAnalysisIdAgentSecretsPostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createSecretsTaskV2AnalysesAnalysisIdAgentSecretsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseQueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTriageTaskV2AnalysesAnalysisIdAgentTriagePost**
> BaseResponseQueuedWorkflowTaskResponse createTriageTaskV2AnalysesAnalysisIdAgentTriagePost()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiCreateTriageTaskV2AnalysesAnalysisIdAgentTriagePostRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiCreateTriageTaskV2AnalysesAnalysisIdAgentTriagePostRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createTriageTaskV2AnalysesAnalysisIdAgentTriagePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseQueuedWorkflowTaskResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet**
> BaseResponseCapabilitiesAgentResponse getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCapabilitiesAgentResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet**
> BaseResponseProtocolsAgentResponse getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet()

Returns the protocols report, including metadata, findings, and evidence.

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getProtocolsResultV2AnalysesAnalysisIdAgentProtocolsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseProtocolsAgentResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet**
> BaseResponseRemediationAgentResponse getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet()

Returns: - A list of generated YARA rules - A list of generated Snort rules - A list of generated STIX rules

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetRemediationResultV2AnalysesAnalysisIdAgentRemediationGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetRemediationResultV2AnalysesAnalysisIdAgentRemediationGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getRemediationResultV2AnalysesAnalysisIdAgentRemediationGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseRemediationAgentResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet**
> BaseResponseReportAnalysisResponse getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet()

Returns: - A summary of the analysis - The software type of the binary - An attack flow summary - List of IOCs - List of MITRE executable techniques - A YARA rule

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseReportAnalysisResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet**
> BaseResponseSecretsAgentResponse getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet()

Returns the secrets report, including metadata, findings, and evidence.

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetSecretsResultV2AnalysesAnalysisIdAgentSecretsGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetSecretsResultV2AnalysesAnalysisIdAgentSecretsGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getSecretsResultV2AnalysesAnalysisIdAgentSecretsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseSecretsAgentResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTriageResultV2AnalysesAnalysisIdAgentTriageGet**
> BaseResponseTriageReportResponse getTriageResultV2AnalysesAnalysisIdAgentTriageGet()


### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiGetTriageResultV2AnalysesAnalysisIdAgentTriageGetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiGetTriageResultV2AnalysesAnalysisIdAgentTriageGetRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getTriageResultV2AnalysesAnalysisIdAgentTriageGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseTriageReportResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3CancelRenameUnnamedFunctions**
> void v3CancelRenameUnnamedFunctions()

Requests cancellation of the currently running rename-unnamed-functions run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3CancelRenameUnnamedFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3CancelRenameUnnamedFunctionsRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3CancelRenameUnnamedFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**void**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3CancelSecurityScanOperation**
> void v3CancelSecurityScanOperation()

Requests cancellation of the currently running security-scan run for the analysis. Returns 404 if no run is in progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3CancelSecurityScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3CancelSecurityScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3CancelSecurityScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**void**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetBinaryAgentFeedback**
> FeedbackOutputBody v3GetBinaryAgentFeedback()

Returns the sentiment the caller recorded for one agent on this analysis, or a null sentiment when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetBinaryAgentFeedbackRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetBinaryAgentFeedbackRequest = {
    // Analysis ID
  analysisId: 1,
    // Which agent\'s output the feedback is about
  agent: "triage",
};

const data = await apiInstance.v3GetBinaryAgentFeedback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **agent** | [**&#39;triage&#39; | &#39;capabilities&#39; | &#39;report-analysis&#39; | &#39;remediation&#39; | &#39;protocols&#39; | &#39;secrets&#39;**]**Array<&#39;triage&#39; &#124; &#39;capabilities&#39; &#124; &#39;report-analysis&#39; &#124; &#39;remediation&#39; &#124; &#39;protocols&#39; &#124; &#39;secrets&#39; &#124; &#39;11184809&#39;>** | Which agent\&#39;s output the feedback is about | defaults to undefined


### Return type

**FeedbackOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetCapabilitiesOperation**
> OperationMetadataCapabilitiesResult v3GetCapabilitiesOperation()

Polls a capabilities run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetCapabilitiesOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetCapabilitiesOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetCapabilitiesOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataCapabilitiesResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetCryptoExplainOperation**
> OperationCryptoExplainMetadataCryptoExplainResult v3GetCryptoExplainOperation()

Returns the current state of the crypto-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetCryptoExplainOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetCryptoExplainOperationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetCryptoExplainOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationCryptoExplainMetadataCryptoExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetCryptoScanOperation**
> OperationCryptoScanMetadataCryptoScanResult v3GetCryptoScanOperation()

Returns the current state of the crypto-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetCryptoScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetCryptoScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetCryptoScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationCryptoScanMetadataCryptoScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetExecutionExplainOperation**
> OperationExecutionExplainMetadataExecutionExplainResult v3GetExecutionExplainOperation()

Returns the current state of the execution-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetExecutionExplainOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetExecutionExplainOperationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetExecutionExplainOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationExecutionExplainMetadataExecutionExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetExecutionScanOperation**
> OperationExecutionScanMetadataExecutionScanResult v3GetExecutionScanOperation()

Returns the current state of the execution-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetExecutionScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetExecutionScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetExecutionScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationExecutionScanMetadataExecutionScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetFilesystemAnalyseOperation**
> OperationFilesystemAnalyseMetadataFilesystemAnalyseResult v3GetFilesystemAnalyseOperation()

Returns the current state of the filesystem-analyse run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetFilesystemAnalyseOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetFilesystemAnalyseOperationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetFilesystemAnalyseOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationFilesystemAnalyseMetadataFilesystemAnalyseResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetFilesystemScanOperation**
> OperationFilesystemScanMetadataFilesystemScanResult v3GetFilesystemScanOperation()

Returns the current state of the filesystem-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetFilesystemScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetFilesystemScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetFilesystemScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationFilesystemScanMetadataFilesystemScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetNetworkingExplainOperation**
> OperationNetworkingExplainMetadataNetworkingExplainResult v3GetNetworkingExplainOperation()

Returns the current state of the networking-explain run for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetNetworkingExplainOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetNetworkingExplainOperationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetNetworkingExplainOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationNetworkingExplainMetadataNetworkingExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetNetworkingScanOperation**
> OperationNetworkingScanMetadataNetworkingScanResult v3GetNetworkingScanOperation()

Returns the current state of the networking-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetNetworkingScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetNetworkingScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetNetworkingScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationNetworkingScanMetadataNetworkingScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetProtocolsOperation**
> OperationMetadataReportResult v3GetProtocolsOperation()

Polls a protocols run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetProtocolsOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetProtocolsOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetProtocolsOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetRemediationOperation**
> OperationMetadataRemediationResult v3GetRemediationOperation()

Polls a remediation run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetRemediationOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetRemediationOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetRemediationOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataRemediationResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetRenameUnnamedFunctionsResult**
> RenameUnnamedFunctionsResult v3GetRenameUnnamedFunctionsResult()

Returns the summary of the most recent completed rename-unnamed-functions run. Returns 409 while a run is still in progress and 404 when the agent has never produced a result for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetRenameUnnamedFunctionsResultRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetRenameUnnamedFunctionsResultRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetRenameUnnamedFunctionsResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**RenameUnnamedFunctionsResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetRenameUnnamedFunctionsStatus**
> StatusBody v3GetRenameUnnamedFunctionsStatus()

Returns the status of the most recent rename-unnamed-functions run for the analysis. `UNINITIALISED` means the agent has never been triggered, so it is safe to start one.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetRenameUnnamedFunctionsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetRenameUnnamedFunctionsStatusRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetRenameUnnamedFunctionsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**StatusBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetReportAnalysisOperation**
> OperationMetadataThreatReportResult v3GetReportAnalysisOperation()

Polls a report-analysis run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetReportAnalysisOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetReportAnalysisOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetReportAnalysisOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataThreatReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetSecretsOperation**
> OperationMetadataReportResult v3GetSecretsOperation()

Polls a secrets run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response.report` is set once the run has completed and carries the findings document as the agent produced it.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetSecretsOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetSecretsOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetSecretsOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetSecurityScanOperation**
> OperationSecurityScanMetadataSecurityScanResult v3GetSecurityScanOperation()

Returns the current state of the security-scan run for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetSecurityScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetSecurityScanOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetSecurityScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationSecurityScanMetadataSecurityScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetTriageOperation**
> OperationMetadataTriageResult v3GetTriageOperation()

Polls a triage run. `metadata.status` tracks the run and `metadata.log_history` carries its progress messages; `response` is set once the run has completed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3GetTriageOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3GetTriageOperationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetTriageOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataTriageResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunCapabilities**
> OperationMetadataCapabilitiesResult v3RunCapabilities()

Starts the capabilities agent, which attributes behavioural capabilities to individual functions, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunCapabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunCapabilitiesRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunCapabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataCapabilitiesResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunCryptoExplain**
> OperationCryptoExplainMetadataCryptoExplainResult v3RunCryptoExplain()

Starts an agent that explains the cryptography the function implements, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunCryptoExplainRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunCryptoExplainRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3RunCryptoExplain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationCryptoExplainMetadataCryptoExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunCryptoScan**
> OperationCryptoScanMetadataCryptoScanResult v3RunCryptoScan(triggerCryptoScanInputBody)

Starts an agent that name-matches the analysis\' functions and their callees against known crypto-library APIs, and returns the operation to poll for its outcome. Purely name-based — never triggers AI decompilation, so it costs no credits and runs in seconds. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunCryptoScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunCryptoScanRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerCryptoScanInputBody: {
    categories: [
      "symmetric",
    ],
    directOnly: true,
    libraries: [
      "openssl",
    ],
  },
};

const data = await apiInstance.v3RunCryptoScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerCryptoScanInputBody** | **TriggerCryptoScanInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationCryptoScanMetadataCryptoScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunExecutionExplain**
> OperationExecutionExplainMetadataExecutionExplainResult v3RunExecutionExplain(triggerExecutionExplainInputBody)

Starts an agent that explains the code execution the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunExecutionExplainRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunExecutionExplainRequest = {
    // Function ID
  functionId: 1,
  
  triggerExecutionExplainInputBody: {
    category: "dynamic-resolve",
  },
};

const data = await apiInstance.v3RunExecutionExplain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerExecutionExplainInputBody** | **TriggerExecutionExplainInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationExecutionExplainMetadataExecutionExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunExecutionScan**
> OperationExecutionScanMetadataExecutionScanResult v3RunExecutionScan(triggerExecutionScanInputBody)

Starts an agent that name-matches the analysis\' functions and their callees against known code-execution APIs, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunExecutionScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunExecutionScanRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerExecutionScanInputBody: {
    categories: [
      "dynamic-resolve",
    ],
    directOnly: true,
    sources: [
      "boost",
    ],
  },
};

const data = await apiInstance.v3RunExecutionScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerExecutionScanInputBody** | **TriggerExecutionScanInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationExecutionScanMetadataExecutionScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunFilesystemAnalyse**
> OperationFilesystemAnalyseMetadataFilesystemAnalyseResult v3RunFilesystemAnalyse(triggerFilesystemAnalyseInputBody)

Starts an agent that explains the filesystem/system access the function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunFilesystemAnalyseRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunFilesystemAnalyseRequest = {
    // Function ID
  functionId: 1,
  
  triggerFilesystemAnalyseInputBody: {
    category: "dir-read",
  },
};

const data = await apiInstance.v3RunFilesystemAnalyse(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerFilesystemAnalyseInputBody** | **TriggerFilesystemAnalyseInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationFilesystemAnalyseMetadataFilesystemAnalyseResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunFilesystemScan**
> OperationFilesystemScanMetadataFilesystemScanResult v3RunFilesystemScan(triggerFilesystemScanInputBody)

Starts an agent that name-matches the analysis\' functions and their callees against known filesystem/system APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunFilesystemScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunFilesystemScanRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerFilesystemScanInputBody: {
    categories: [
      "dir-read",
    ],
    directOnly: true,
    sources: [
      "boost",
    ],
  },
};

const data = await apiInstance.v3RunFilesystemScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerFilesystemScanInputBody** | **TriggerFilesystemScanInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationFilesystemScanMetadataFilesystemScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunNetworkingExplain**
> OperationNetworkingExplainMetadataNetworkingExplainResult v3RunNetworkingExplain(triggerNetworkingExplainInputBody)

Starts an agent that explains the network communication a function performs, and returns the operation to poll for its outcome. Requires credits. Returns 409 while a run is already in progress for this function.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunNetworkingExplainRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunNetworkingExplainRequest = {
    // Function ID
  functionId: 1,
  
  triggerNetworkingExplainInputBody: {
    category: "accept",
  },
};

const data = await apiInstance.v3RunNetworkingExplain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerNetworkingExplainInputBody** | **TriggerNetworkingExplainInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**OperationNetworkingExplainMetadataNetworkingExplainResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunNetworkingScan**
> OperationNetworkingScanMetadataNetworkingScanResult v3RunNetworkingScan(triggerNetworkingScanInputBody)

Starts an agent that name-matches the analysis\' functions and their callees against known networking APIs, and returns the operation to poll for its outcome.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunNetworkingScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunNetworkingScanRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerNetworkingScanInputBody: {
    categories: [
      "accept",
    ],
    directOnly: true,
    sources: [
      "boost",
    ],
  },
};

const data = await apiInstance.v3RunNetworkingScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerNetworkingScanInputBody** | **TriggerNetworkingScanInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationNetworkingScanMetadataNetworkingScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunProtocols**
> OperationMetadataReportResult v3RunProtocols()

Starts the protocols agent, which identifies the network and data protocols the binary implements, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunProtocolsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunProtocolsRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunProtocols(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunRemediation**
> OperationMetadataRemediationResult v3RunRemediation()

Starts the remediation agent, which generates YARA, Snort and STIX detection rules for the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunRemediationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunRemediationRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunRemediation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataRemediationResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunReportAnalysis**
> OperationMetadataThreatReportResult v3RunReportAnalysis()

Starts the report-analysis agent, which produces a combined threat report — summary, software type, attack flow, indicators of compromise, MITRE ATT&CK techniques and a YARA rule — and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunReportAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunReportAnalysisRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunReportAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataThreatReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunSecrets**
> OperationMetadataReportResult v3RunSecrets()

Starts the secrets agent, which finds credentials and other hardcoded secrets in the binary, and returns the operation to poll for its outcome. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunSecretsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunSecretsRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunSecrets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataReportResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunSecurityScan**
> OperationSecurityScanMetadataSecurityScanResult v3RunSecurityScan(triggerSecurityScanInputBody)

Starts an agent that decompiles the analysis\' functions and runs a security scan over the decompiled source, and returns the operation to poll for its outcome. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `max_functions_to_scan` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunSecurityScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunSecurityScanRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerSecurityScanInputBody: {
    maxFunctionsToScan: 1,
  },
};

const data = await apiInstance.v3RunSecurityScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerSecurityScanInputBody** | **TriggerSecurityScanInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationSecurityScanMetadataSecurityScanResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3RunTriage**
> OperationMetadataTriageResult v3RunTriage()

Starts the triage agent, which scores the binary and each of its functions for maliciousness, and returns the operation to poll for its outcome. Unlike the other binary agents this one is not gated on subscription tier. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3RunTriageRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3RunTriageRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3RunTriage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**OperationMetadataTriageResult**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3TriggerRenameUnnamedFunctions**
> StatusBody v3TriggerRenameUnnamedFunctions(triggerRenameUnnamedFunctionsInputBody)

Starts an agent that renames the analysis\' unnamed functions from their AI decompilations. Each function costs an AI decompilation, so a whole-analysis run can be expensive — use `limit` to bound it. Returns 409 while a run is already in progress for this analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3TriggerRenameUnnamedFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3TriggerRenameUnnamedFunctionsRequest = {
    // Analysis ID
  analysisId: 1,
  
  triggerRenameUnnamedFunctionsInputBody: {
    limit: 1,
  },
};

const data = await apiInstance.v3TriggerRenameUnnamedFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerRenameUnnamedFunctionsInputBody** | **TriggerRenameUnnamedFunctionsInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**StatusBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3UpsertBinaryAgentFeedback**
> void v3UpsertBinaryAgentFeedback(submitFeedbackInputBody)

Records how useful the caller found one agent\'s output for this analysis. Replaces any sentiment they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AgentApi } from '@revengai/sdk';
import type { AgentApiV3UpsertBinaryAgentFeedbackRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AgentApi(configuration);

const request: AgentApiV3UpsertBinaryAgentFeedbackRequest = {
    // Analysis ID
  analysisId: 1,
    // Which agent\'s output the feedback is about
  agent: "triage",
  
  submitFeedbackInputBody: {
    sentiment: "POSITIVE",
  },
};

const data = await apiInstance.v3UpsertBinaryAgentFeedback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitFeedbackInputBody** | **SubmitFeedbackInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **agent** | [**&#39;triage&#39; | &#39;capabilities&#39; | &#39;report-analysis&#39; | &#39;remediation&#39; | &#39;protocols&#39; | &#39;secrets&#39;**]**Array<&#39;triage&#39; &#124; &#39;capabilities&#39; &#124; &#39;report-analysis&#39; &#124; &#39;remediation&#39; &#124; &#39;protocols&#39; &#124; &#39;secrets&#39; &#124; &#39;11184809&#39;>** | Which agent\&#39;s output the feedback is about | defaults to undefined


### Return type

**void**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


