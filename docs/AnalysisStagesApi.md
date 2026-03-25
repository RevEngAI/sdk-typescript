# .AnalysisStagesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalysisStages**](AnalysisStagesApi.md#getAnalysisStages) | **GET** /v2/analysis-stages/{analysis_id} | Get Analysis Stages
[**getPipelineStatus**](AnalysisStagesApi.md#getPipelineStatus) | **GET** /v2/analysis-stages/{analysis_id}/pipeline-status | Get Pipeline Status


# **getAnalysisStages**
> BaseResponseAnalysisStagesResponse getAnalysisStages()

Returns all stage events for an analysis ordered by timestamp.

### Example


```typescript
import { createConfiguration, AnalysisStagesApi } from '@revengai/sdk';
import type { AnalysisStagesApiGetAnalysisStagesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysisStagesApi(configuration);

const request: AnalysisStagesApiGetAnalysisStagesRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getAnalysisStages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseAnalysisStagesResponse**

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

# **getPipelineStatus**
> BaseResponsePipelineStatusResponse getPipelineStatus()

Returns the latest status for each core pipeline stage with the number of analyses ahead in the queue.

### Example


```typescript
import { createConfiguration, AnalysisStagesApi } from '@revengai/sdk';
import type { AnalysisStagesApiGetPipelineStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysisStagesApi(configuration);

const request: AnalysisStagesApiGetPipelineStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getPipelineStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponsePipelineStatusResponse**

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


