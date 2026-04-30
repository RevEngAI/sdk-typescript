# .AnalysesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalysisQueuePosition**](AnalysesApi.md#getAnalysisQueuePosition) | **GET** /v2/analyses/{analysis_id}/queue-position | Get the queue position of an analysis


# **getAnalysisQueuePosition**
> QueuePositionResponse getAnalysisQueuePosition()

Returns the number of Processing analyses with a lower analysis_id than the given one. Useful for showing the user where they sit in the processing queue while waiting for their analysis to start.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesApi } from '@revengai/sdk';
import type { AnalysesApiGetAnalysisQueuePositionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesApi(configuration);

const request: AnalysesApiGetAnalysisQueuePositionRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.getAnalysisQueuePosition(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**QueuePositionResponse**

### Authorization

[APIKey](README.md#APIKey)

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


