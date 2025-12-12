# .ExternalSourcesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExternalTaskVt**](ExternalSourcesApi.md#createExternalTaskVt) | **POST** /v2/analysis/{analysis_id}/external/vt | Pulls data from VirusTotal
[**getVtData**](ExternalSourcesApi.md#getVtData) | **GET** /v2/analysis/{analysis_id}/external/vt | Get VirusTotal data
[**getVtTaskStatus**](ExternalSourcesApi.md#getVtTaskStatus) | **GET** /v2/analysis/{analysis_id}/external/vt/status | Check the status of VirusTotal data retrieval


# **createExternalTaskVt**
> BaseResponseStr createExternalTaskVt()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiCreateExternalTaskVtRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiCreateExternalTaskVtRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createExternalTaskVt(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseStr**

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
**409** | Request already queued |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVtData**
> BaseResponseExternalResponse getVtData()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiGetVtDataRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiGetVtDataRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getVtData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseExternalResponse**

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
**404** | No data retrieved from VirusTotal for the given analysis_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVtTaskStatus**
> BaseResponseTaskResponse getVtTaskStatus()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiGetVtTaskStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiGetVtTaskStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getVtTaskStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseTaskResponse**

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


