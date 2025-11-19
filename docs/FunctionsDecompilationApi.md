# .FunctionsDecompilationApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDecompilationComment**](FunctionsDecompilationApi.md#createDecompilationComment) | **POST** /v2/functions/{function_id}/decompilation/comments | Create a comment for this function
[**deleteDecompilationComment**](FunctionsDecompilationApi.md#deleteDecompilationComment) | **DELETE** /v2/functions/{function_id}/decompilation/comments/{comment_id} | Delete a comment
[**getDecompilationComments**](FunctionsDecompilationApi.md#getDecompilationComments) | **GET** /v2/functions/{function_id}/decompilation/comments | Get comments for this function
[**updateDecompilationComment**](FunctionsDecompilationApi.md#updateDecompilationComment) | **PATCH** /v2/functions/{function_id}/decompilation/comments/{comment_id} | Update a comment


# **createDecompilationComment**
> BaseResponseCommentResponse createDecompilationComment(functionCommentCreateRequest)

Creates a comment associated with a specified function).

### Example


```typescript
import { createConfiguration, FunctionsDecompilationApi } from '@revengai/sdk';
import type { FunctionsDecompilationApiCreateDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDecompilationApi(configuration);

const request: FunctionsDecompilationApiCreateDecompilationCommentRequest = {
  
  functionId: 1,
  
  functionCommentCreateRequest: {
    content: "content_example",
    context: {
      startLine: 1,
      endLine: 1,
    },
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.createDecompilationComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionCommentCreateRequest** | **FunctionCommentCreateRequest**|  |
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


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

# **deleteDecompilationComment**
> BaseResponseBool deleteDecompilationComment()

Deletes an existing comment. Users can only delete their own comments.

### Example


```typescript
import { createConfiguration, FunctionsDecompilationApi } from '@revengai/sdk';
import type { FunctionsDecompilationApiDeleteDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDecompilationApi(configuration);

const request: FunctionsDecompilationApiDeleteDecompilationCommentRequest = {
  
  commentId: 1,
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.deleteDecompilationComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | [**number**] |  | defaults to undefined
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


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

# **getDecompilationComments**
> BaseResponseListCommentResponse getDecompilationComments()

Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.

### Example


```typescript
import { createConfiguration, FunctionsDecompilationApi } from '@revengai/sdk';
import type { FunctionsDecompilationApiGetDecompilationCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDecompilationApi(configuration);

const request: FunctionsDecompilationApiGetDecompilationCommentsRequest = {
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getDecompilationComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


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

# **updateDecompilationComment**
> BaseResponseCommentResponse updateDecompilationComment(commentUpdateRequest)

Updates the content of an existing comment. Users can only update their own comments.

### Example


```typescript
import { createConfiguration, FunctionsDecompilationApi } from '@revengai/sdk';
import type { FunctionsDecompilationApiUpdateDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDecompilationApi(configuration);

const request: FunctionsDecompilationApiUpdateDecompilationCommentRequest = {
  
  commentId: 1,
  
  functionId: 1,
  
  commentUpdateRequest: {
    content: "content_example",
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.updateDecompilationComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentUpdateRequest** | **CommentUpdateRequest**|  |
 **commentId** | [**number**] |  | defaults to undefined
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


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


