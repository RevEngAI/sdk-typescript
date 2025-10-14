# .AnalysesCommentsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnalysisComment**](AnalysesCommentsApi.md#createAnalysisComment) | **POST** /v2/analyses/{analysis_id}/comments | Create a comment for this analysis
[**deleteAnalysisComment**](AnalysesCommentsApi.md#deleteAnalysisComment) | **DELETE** /v2/analyses/{analysis_id}/comments/{comment_id} | Delete a comment
[**getAnalysisComments**](AnalysesCommentsApi.md#getAnalysisComments) | **GET** /v2/analyses/{analysis_id}/comments | Get comments for this analysis
[**updateAnalysisComment**](AnalysesCommentsApi.md#updateAnalysisComment) | **PATCH** /v2/analyses/{analysis_id}/comments/{comment_id} | Update a comment


# **createAnalysisComment**
> BaseResponseCommentResponse createAnalysisComment(commentBase)

Creates a comment associated with a specified analysis).

### Example


```typescript
import { createConfiguration, AnalysesCommentsApi } from '@revengai/sdk';
import type { AnalysesCommentsApiCreateAnalysisCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCommentsApi(configuration);

const request: AnalysesCommentsApiCreateAnalysisCommentRequest = {
  
  analysisId: 1,
  
  commentBase: {
    content: "content_example",
  },
};

const data = await apiInstance.createAnalysisComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentBase** | **CommentBase**|  |
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCommentResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAnalysisComment**
> BaseResponseBool deleteAnalysisComment()

Deletes an existing comment. Users can only delete their own comments.

### Example


```typescript
import { createConfiguration, AnalysesCommentsApi } from '@revengai/sdk';
import type { AnalysesCommentsApiDeleteAnalysisCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCommentsApi(configuration);

const request: AnalysesCommentsApiDeleteAnalysisCommentRequest = {
  
  commentId: 1,
  
  analysisId: 1,
};

const data = await apiInstance.deleteAnalysisComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | [**number**] |  | defaults to undefined
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBool**

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
**403** | You can only delete your own comments |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnalysisComments**
> BaseResponseListCommentResponse getAnalysisComments()

Retrieves all comments created for a specific analysis. Only returns comments for resources the requesting user has access to.

### Example


```typescript
import { createConfiguration, AnalysesCommentsApi } from '@revengai/sdk';
import type { AnalysesCommentsApiGetAnalysisCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCommentsApi(configuration);

const request: AnalysesCommentsApiGetAnalysisCommentsRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getAnalysisComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseListCommentResponse**

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

# **updateAnalysisComment**
> BaseResponseCommentResponse updateAnalysisComment(commentUpdateRequest)

Updates the content of an existing comment. Users can only update their own comments.

### Example


```typescript
import { createConfiguration, AnalysesCommentsApi } from '@revengai/sdk';
import type { AnalysesCommentsApiUpdateAnalysisCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCommentsApi(configuration);

const request: AnalysesCommentsApiUpdateAnalysisCommentRequest = {
  
  commentId: 1,
  
  analysisId: 1,
  
  commentUpdateRequest: {
    content: "content_example",
  },
};

const data = await apiInstance.updateAnalysisComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentUpdateRequest** | **CommentUpdateRequest**|  |
 **commentId** | [**number**] |  | defaults to undefined
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCommentResponse**

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
**403** | You can only update your own comments |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


