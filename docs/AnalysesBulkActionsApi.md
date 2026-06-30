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
};

const data = await apiInstance.bulkAddAnalysisTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisBulkAddTagsRequest** | **AnalysisBulkAddTagsRequest**|  |


### Return type

**BaseResponseAnalysisBulkAddTagsResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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
};

const data = await apiInstance.bulkDeleteAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkDeleteAnalysesRequest** | **BulkDeleteAnalysesRequest**|  |


### Return type

**BaseResponseDict**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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


