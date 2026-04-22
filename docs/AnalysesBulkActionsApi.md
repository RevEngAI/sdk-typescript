# .AnalysesBulkActionsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkAddAnalysisTags**](AnalysesBulkActionsApi.md#bulkAddAnalysisTags) | **PATCH** /v2/analyses/tags/add | Bulk Add Analysis Tags
[**bulkDeleteAnalyses**](AnalysesBulkActionsApi.md#bulkDeleteAnalyses) | **PATCH** /v2/analyses/delete | Bulk Delete Analyses


# **bulkAddAnalysisTags**
> BaseResponseAnalysisBulkAddTagsResponse bulkAddAnalysisTags(analysisBulkAddTagsRequest)

Updates analysis tags for multiple analyses. User must be the owner.

### Example


```typescript
import { createConfiguration, AnalysesBulkActionsApi } from '@revengai/sdk';
import type { AnalysesBulkActionsApiBulkAddAnalysisTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesBulkActionsApi(configuration);

const request: AnalysesBulkActionsApiBulkAddAnalysisTagsRequest = {
  
  analysisBulkAddTagsRequest: {
    tags: [
      "tags_example",
    ],
    analysisIds: [
      1,
    ],
  },
  
  endpointUrl: "endpoint_url_example",
  
  localCacheDir: "local_cache_dir_example",
  
  localCacheMaxSizeMb: 1,
  
  customerSamplesBucket: "customer_samples_bucket_example",
  
  firmwareSamplesBucket: "firmware_samples_bucket_example",
  
  maxRetryAttempts: 5,
};

const data = await apiInstance.bulkAddAnalysisTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisBulkAddTagsRequest** | **AnalysisBulkAddTagsRequest**|  |
 **endpointUrl** | [**string**] |  | (optional) defaults to undefined
 **localCacheDir** | [**string**] |  | (optional) defaults to undefined
 **localCacheMaxSizeMb** | [**number**] |  | (optional) defaults to undefined
 **customerSamplesBucket** | [**string**] |  | (optional) defaults to undefined
 **firmwareSamplesBucket** | [**string**] |  | (optional) defaults to undefined
 **maxRetryAttempts** | [**number**] |  | (optional) defaults to 5


### Return type

**BaseResponseAnalysisBulkAddTagsResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bulkDeleteAnalyses**
> BaseResponseDict bulkDeleteAnalyses(bulkDeleteAnalysesRequest)

Deletes multiple analyses. User must be the owner of all analyses.

### Example


```typescript
import { createConfiguration, AnalysesBulkActionsApi } from '@revengai/sdk';
import type { AnalysesBulkActionsApiBulkDeleteAnalysesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesBulkActionsApi(configuration);

const request: AnalysesBulkActionsApiBulkDeleteAnalysesRequest = {
  
  bulkDeleteAnalysesRequest: {
    analysisIds: [
      1,
    ],
  },
  
  endpointUrl: "endpoint_url_example",
  
  localCacheDir: "local_cache_dir_example",
  
  localCacheMaxSizeMb: 1,
  
  customerSamplesBucket: "customer_samples_bucket_example",
  
  firmwareSamplesBucket: "firmware_samples_bucket_example",
  
  maxRetryAttempts: 5,
};

const data = await apiInstance.bulkDeleteAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkDeleteAnalysesRequest** | **BulkDeleteAnalysesRequest**|  |
 **endpointUrl** | [**string**] |  | (optional) defaults to undefined
 **localCacheDir** | [**string**] |  | (optional) defaults to undefined
 **localCacheMaxSizeMb** | [**number**] |  | (optional) defaults to undefined
 **customerSamplesBucket** | [**string**] |  | (optional) defaults to undefined
 **firmwareSamplesBucket** | [**string**] |  | (optional) defaults to undefined
 **maxRetryAttempts** | [**number**] |  | (optional) defaults to 5


### Return type

**BaseResponseDict**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |
**404** | Not Found |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


