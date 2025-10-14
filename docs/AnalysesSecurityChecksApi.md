# .AnalysesSecurityChecksApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScurityChecksTask**](AnalysesSecurityChecksApi.md#createScurityChecksTask) | **POST** /v2/analyses/{analysis_id}/security-checks | Queues a security check process
[**getSecurityChecks**](AnalysesSecurityChecksApi.md#getSecurityChecks) | **GET** /v2/analyses/{analysis_id}/security-checks | Get Security Checks
[**getSecurityChecksTaskStatus**](AnalysesSecurityChecksApi.md#getSecurityChecksTaskStatus) | **GET** /v2/analyses/{analysis_id}/security-checks/status | Check the status of a security check process


# **createScurityChecksTask**
> QueuedSecurityChecksTaskResponse createScurityChecksTask()


### Example


```typescript
import { createConfiguration, AnalysesSecurityChecksApi } from '';
import type { AnalysesSecurityChecksApiCreateScurityChecksTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnalysesSecurityChecksApi(configuration);

const request: AnalysesSecurityChecksApiCreateScurityChecksTaskRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createScurityChecksTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**QueuedSecurityChecksTaskResponse**

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
**409** | Security checks already extracted or queued |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSecurityChecks**
> BaseResponseSecurityChecksResponse getSecurityChecks()

Retrieve security checks results with pagination.

### Example


```typescript
import { createConfiguration, AnalysesSecurityChecksApi } from '';
import type { AnalysesSecurityChecksApiGetSecurityChecksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnalysesSecurityChecksApi(configuration);

const request: AnalysesSecurityChecksApiGetSecurityChecksRequest = {
  
  analysisId: 1,
    // The page number to retrieve.
  page: 1,
    // Number of items per page.
  pageSize: 1,
};

const data = await apiInstance.getSecurityChecks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **page** | [**number**] | The page number to retrieve. | defaults to undefined
 **pageSize** | [**number**] | Number of items per page. | defaults to undefined


### Return type

**BaseResponseSecurityChecksResponse**

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

# **getSecurityChecksTaskStatus**
> CheckSecurityChecksTaskResponse getSecurityChecksTaskStatus()


### Example


```typescript
import { createConfiguration, AnalysesSecurityChecksApi } from '';
import type { AnalysesSecurityChecksApiGetSecurityChecksTaskStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnalysesSecurityChecksApi(configuration);

const request: AnalysesSecurityChecksApiGetSecurityChecksTaskStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getSecurityChecksTaskStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**CheckSecurityChecksTaskResponse**

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


