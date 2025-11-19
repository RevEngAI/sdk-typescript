# .FunctionsAIDecompilationApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAiDecompilationComment**](FunctionsAIDecompilationApi.md#createAiDecompilationComment) | **POST** /v2/functions/{function_id}/ai-decompilation/comments | Create a comment for this function
[**createAiDecompilationTask**](FunctionsAIDecompilationApi.md#createAiDecompilationTask) | **POST** /v2/functions/{function_id}/ai-decompilation | Begins AI Decompilation Process
[**deleteAiDecompilationComment**](FunctionsAIDecompilationApi.md#deleteAiDecompilationComment) | **DELETE** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Delete a comment
[**getAiDecompilationComments**](FunctionsAIDecompilationApi.md#getAiDecompilationComments) | **GET** /v2/functions/{function_id}/ai-decompilation/comments | Get comments for this function
[**getAiDecompilationRating**](FunctionsAIDecompilationApi.md#getAiDecompilationRating) | **GET** /v2/functions/{function_id}/ai-decompilation/rating | Get rating for AI decompilation
[**getAiDecompilationTaskResult**](FunctionsAIDecompilationApi.md#getAiDecompilationTaskResult) | **GET** /v2/functions/{function_id}/ai-decompilation | Polls AI Decompilation Process
[**getAiDecompilationTaskStatus**](FunctionsAIDecompilationApi.md#getAiDecompilationTaskStatus) | **GET** /v2/functions/{function_id}/ai-decompilation/status | Check the status of a function ai decompilation
[**updateAiDecompilationComment**](FunctionsAIDecompilationApi.md#updateAiDecompilationComment) | **PATCH** /v2/functions/{function_id}/ai-decompilation/comments/{comment_id} | Update a comment
[**upsertAiDecompilationRating**](FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation


# **createAiDecompilationComment**
> BaseResponseCommentResponse createAiDecompilationComment(functionCommentCreateRequest)

Creates a comment associated with a specified function).

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiCreateAiDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiCreateAiDecompilationCommentRequest = {
  
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

const data = await apiInstance.createAiDecompilationComment(request);
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

# **createAiDecompilationTask**
> BaseResponse createAiDecompilationTask()

Begins the AI Decompilation Process

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiCreateAiDecompilationTaskRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiCreateAiDecompilationTaskRequest = {
    // The ID of the function for which we are creating the decompilation task
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.createAiDecompilationTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the function for which we are creating the decompilation task | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |
**403** | Forbidden |  -  |
**402** | Payment Required |  -  |
**409** | Conflict |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAiDecompilationComment**
> BaseResponseBool deleteAiDecompilationComment()

Deletes an existing comment. Users can only delete their own comments.

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiDeleteAiDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiDeleteAiDecompilationCommentRequest = {
  
  commentId: 1,
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.deleteAiDecompilationComment(request);
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

# **getAiDecompilationComments**
> BaseResponseListCommentResponse getAiDecompilationComments()

Retrieves all comments created for a specific function. Only returns comments for resources the requesting user has access to.

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationCommentsRequest = {
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAiDecompilationComments(request);
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

# **getAiDecompilationRating**
> BaseResponseGetAiDecompilationRatingResponse getAiDecompilationRating()


### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationRatingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationRatingRequest = {
    // The ID of the function for which to get the rating
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the function for which to get the rating | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGetAiDecompilationRatingResponse**

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

# **getAiDecompilationTaskResult**
> BaseResponseGetAiDecompilationTask getAiDecompilationTaskResult()

Polls the AI Decompilation Process

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationTaskResultRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationTaskResultRequest = {
    // The ID of the function being decompiled
  functionId: 1,
    // Generate a summary for the decompilation (optional)
  summarise: true,
    // Generate inline comments for the decompilation (only works if summarise is enabled) (optional)
  generateInlineComments: true,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAiDecompilationTaskResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the function being decompiled | defaults to undefined
 **summarise** | [**boolean**] | Generate a summary for the decompilation | (optional) defaults to true
 **generateInlineComments** | [**boolean**] | Generate inline comments for the decompilation (only works if summarise is enabled) | (optional) defaults to true
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGetAiDecompilationTask**

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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAiDecompilationTaskStatus**
> BaseResponseFunctionTaskResponse getAiDecompilationTaskStatus()


### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationTaskStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationTaskStatusRequest = {
    // The ID of the function being checked
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAiDecompilationTaskStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the function being checked | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseFunctionTaskResponse**

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

# **updateAiDecompilationComment**
> BaseResponseCommentResponse updateAiDecompilationComment(commentUpdateRequest)

Updates the content of an existing comment. Users can only update their own comments.

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiUpdateAiDecompilationCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiUpdateAiDecompilationCommentRequest = {
  
  commentId: 1,
  
  functionId: 1,
  
  commentUpdateRequest: {
    content: "content_example",
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.updateAiDecompilationComment(request);
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

# **upsertAiDecompilationRating**
> BaseResponse upsertAiDecompilationRating(upsertAiDecomplationRatingRequest)


### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiUpsertAiDecompilationRatingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiUpsertAiDecompilationRatingRequest = {
    // The ID of the function being rated
  functionId: 1,
  
  upsertAiDecomplationRatingRequest: {
    rating: "POSITIVE",
    reason: "reason_example",
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.upsertAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertAiDecomplationRatingRequest** | **UpsertAiDecomplationRatingRequest**|  |
 **functionId** | [**number**] | The ID of the function being rated | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


