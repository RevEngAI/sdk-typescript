# .AgentApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet**](AgentApi.md#checkCapabilitiesTaskStatusV2AnalysesAnalysisIdAgentCapabilitiesStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities/status | Check the status of a capabilities analysis workflow
[**checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet**](AgentApi.md#checkReportAnalysisTaskStatusV2AnalysesAnalysisIdAgentReportAnalysisStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis/status | Check the status of a report analysis workflow
[**checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet**](AgentApi.md#checkTriageTaskStatusV2AnalysesAnalysisIdAgentTriageStatusGet) | **GET** /v2/analyses/{analysis_id}/agent/triage/status | Check the status of a triage analysis workflow
[**createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost**](AgentApi.md#createCapabilitiesTaskV2AnalysesAnalysisIdAgentCapabilitiesPost) | **POST** /v2/analyses/{analysis_id}/agent/capabilities | Queues a capabilities analysis workflow process
[**createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost**](AgentApi.md#createReportAnalysisTaskV2AnalysesAnalysisIdAgentReportAnalysisPost) | **POST** /v2/analyses/{analysis_id}/agent/report-analysis | Queues a combined report analysis workflow process
[**createTriageTaskV2AnalysesAnalysisIdAgentTriagePost**](AgentApi.md#createTriageTaskV2AnalysesAnalysisIdAgentTriagePost) | **POST** /v2/analyses/{analysis_id}/agent/triage | Queues a triage analysis workflow process
[**getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet**](AgentApi.md#getCapabilitiesResultV2AnalysesAnalysisIdAgentCapabilitiesGet) | **GET** /v2/analyses/{analysis_id}/agent/capabilities | Get Capabilities Result
[**getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet**](AgentApi.md#getReportAnalysisResultV2AnalysesAnalysisIdAgentReportAnalysisGet) | **GET** /v2/analyses/{analysis_id}/agent/report-analysis | Get Report Analysis Result
[**getTriageResultV2AnalysesAnalysisIdAgentTriageGet**](AgentApi.md#getTriageResultV2AnalysesAnalysisIdAgentTriageGet) | **GET** /v2/analyses/{analysis_id}/agent/triage | Get Triage Result


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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

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

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


