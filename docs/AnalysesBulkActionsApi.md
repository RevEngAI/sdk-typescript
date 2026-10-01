# .AnalysesBulkActionsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkAddAnalysisTags**](AnalysesBulkActionsApi.md#bulkAddAnalysisTags) | **PATCH** /v2/analyses/tags/add | Bulk Add Analysis Tags
[**bulkDeleteAnalyses**](AnalysesBulkActionsApi.md#bulkDeleteAnalyses) | **PATCH** /v2/analyses/delete | Bulk Delete Analyses
[**v3BatchAddAnalysisTags**](AnalysesBulkActionsApi.md#v3BatchAddAnalysisTags) | **POST** /v3/analyses:batchAddTags | Add tags to multiple analyses.
[**v3BatchDeleteAnalyses**](AnalysesBulkActionsApi.md#v3BatchDeleteAnalyses) | **POST** /v3/analyses:batchDelete | Delete multiple analyses.


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

# **v3BatchAddAnalysisTags**
> BulkAddTagsOutputBody v3BatchAddAnalysisTags(bulkAddTagsInputBody)

Adds tags (origin RevEng) to every given analysis\' binary. The caller must own every analysis, or none are changed.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesBulkActionsApi } from '@revengai/sdk';
import type { AnalysesBulkActionsApiV3BatchAddAnalysisTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesBulkActionsApi(configuration);

const request: AnalysesBulkActionsApiV3BatchAddAnalysisTagsRequest = {
  
  bulkAddTagsInputBody: {
    analysisIds: [
      1,
    ],
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.v3BatchAddAnalysisTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAddTagsInputBody** | **BulkAddTagsInputBody**|  |


### Return type

**BulkAddTagsOutputBody**

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
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3BatchDeleteAnalyses**
> void v3BatchDeleteAnalyses(bulkDeleteAnalysesInputBody)

Deactivates every given analysis. The caller must own all of them, or none are deleted.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesBulkActionsApi } from '@revengai/sdk';
import type { AnalysesBulkActionsApiV3BatchDeleteAnalysesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesBulkActionsApi(configuration);

const request: AnalysesBulkActionsApiV3BatchDeleteAnalysesRequest = {
  
  bulkDeleteAnalysesInputBody: {
    analysisIds: [
      1,
    ],
  },
};

const data = await apiInstance.v3BatchDeleteAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkDeleteAnalysesInputBody** | **BulkDeleteAnalysesInputBody**|  |


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


