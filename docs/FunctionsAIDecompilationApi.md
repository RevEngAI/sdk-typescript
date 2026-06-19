# .FunctionsAIDecompilationApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAiDecompilation**](FunctionsAIDecompilationApi.md#createAiDecompilation) | **POST** /v3/functions/{function_id}/ai-decompilation | Start AI decompilation
[**deleteAiDecompilationInlineComment**](FunctionsAIDecompilationApi.md#deleteAiDecompilationInlineComment) | **DELETE** /v3/functions/{function_id}/ai-decompilation/inline-comments/{line} | Delete a single inline comment
[**getAiDecompilation**](FunctionsAIDecompilationApi.md#getAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation | Get AI decompilation result
[**getAiDecompilationInlineComments**](FunctionsAIDecompilationApi.md#getAiDecompilationInlineComments) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments | Get AI decompilation inline comments
[**getAiDecompilationInlineCommentsStatus**](FunctionsAIDecompilationApi.md#getAiDecompilationInlineCommentsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/inline-comments/status | Get inline comments generation workflow status
[**getAiDecompilationRating**](FunctionsAIDecompilationApi.md#getAiDecompilationRating) | **GET** /v2/functions/{function_id}/ai-decompilation/rating | Get rating for AI decompilation
[**getAiDecompilationStatus**](FunctionsAIDecompilationApi.md#getAiDecompilationStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/status | Get AI decompilation workflow status
[**getAiDecompilationSummary**](FunctionsAIDecompilationApi.md#getAiDecompilationSummary) | **GET** /v3/functions/{function_id}/ai-decompilation/summary | Get AI decompilation summary
[**getAiDecompilationSummaryStatus**](FunctionsAIDecompilationApi.md#getAiDecompilationSummaryStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/summary/status | Get summary generation workflow status
[**getAiDecompilationTokenised**](FunctionsAIDecompilationApi.md#getAiDecompilationTokenised) | **GET** /v3/functions/{function_id}/ai-decompilation/tokenised | Get tokenised AI decompilation with function mapping
[**patchAiDecompilationInlineComment**](FunctionsAIDecompilationApi.md#patchAiDecompilationInlineComment) | **PATCH** /v3/functions/{function_id}/ai-decompilation/inline-comments | Update a single inline comment
[**regenerateAiDecompilationInlineComments**](FunctionsAIDecompilationApi.md#regenerateAiDecompilationInlineComments) | **POST** /v3/functions/{function_id}/ai-decompilation/inline-comments | Regenerate AI decompilation inline comments
[**regenerateAiDecompilationSummary**](FunctionsAIDecompilationApi.md#regenerateAiDecompilationSummary) | **POST** /v3/functions/{function_id}/ai-decompilation/summary | Regenerate AI decompilation summary
[**streamAiDecompilation**](FunctionsAIDecompilationApi.md#streamAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation/events | Stream live AI decompilation output (SSE)
[**upsertAiDecompilationOverrides**](FunctionsAIDecompilationApi.md#upsertAiDecompilationOverrides) | **PATCH** /v3/functions/{function_id}/ai-decompilation/overrides | Upsert variable/function name overrides
[**upsertAiDecompilationRating**](FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation


# **createAiDecompilation**
> CreateAIDecompOutputBody createAiDecompilation()

Begins the AI decompilation process for a function. Charges team credits and starts the workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiCreateAiDecompilationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiCreateAiDecompilationRequest = {
    // Function ID
  functionId: 1,
    // Use context-aware decompilation (optional)
  contextAware: false,
    // LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default. (optional)
  temperature: -1,
};

const data = await apiInstance.createAiDecompilation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **contextAware** | [**boolean**] | Use context-aware decompilation | (optional) defaults to false
 **temperature** | [**number**] | LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default. | (optional) defaults to -1


### Return type

**CreateAIDecompOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAiDecompilationInlineComment**
> CommentsData deleteAiDecompilationInlineComment()

Removes the comment for the given line number. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiDeleteAiDecompilationInlineCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiDeleteAiDecompilationInlineCommentRequest = {
    // Function ID
  functionId: 1,
    // Line number of the comment to delete
  line: 1,
};

const data = await apiInstance.deleteAiDecompilationInlineComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **line** | [**number**] | Line number of the comment to delete | defaults to undefined


### Return type

**CommentsData**

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

# **getAiDecompilation**
> DecompilationData getAiDecompilation()

Returns the decompilation source code.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**DecompilationData**

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

# **getAiDecompilationInlineComments**
> CommentsData getAiDecompilationInlineComments()

Returns the commented source if available. Returns pending status if comments are still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationInlineComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CommentsData**

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

# **getAiDecompilationInlineCommentsStatus**
> WorkflowProgress getAiDecompilationInlineCommentsStatus()

Returns fine-grained progress of the inline comments generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationInlineCommentsStatusRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationInlineCommentsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**WorkflowProgress**

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

# **getAiDecompilationRating**
> BaseResponseUnionGetAiDecompilationRatingResponseNoneType getAiDecompilationRating()


### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationRatingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationRatingRequest = {
    // The ID of the function for which to get the rating
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the function for which to get the rating | defaults to undefined


### Return type

**BaseResponseUnionGetAiDecompilationRatingResponseNoneType**

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

# **getAiDecompilationStatus**
> WorkflowProgress getAiDecompilationStatus()

Returns fine-grained progress of the running workflow including current step, total steps, and messages. Falls back to the database task status when no workflow is running.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationStatusRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**WorkflowProgress**

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

# **getAiDecompilationSummary**
> SummaryData getAiDecompilationSummary()

Returns the summary if available. Returns pending status if summary is still being generated.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationSummaryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationSummaryRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**SummaryData**

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

# **getAiDecompilationSummaryStatus**
> WorkflowProgress getAiDecompilationSummaryStatus()

Returns fine-grained progress of the summary generation workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationSummaryStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationSummaryStatusRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationSummaryStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**WorkflowProgress**

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

# **getAiDecompilationTokenised**
> TokenisedData getAiDecompilationTokenised()

Returns the decompilation with placeholder tokens, the function mapping for token resolution, and the predicted function name.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiGetAiDecompilationTokenisedRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiGetAiDecompilationTokenisedRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getAiDecompilationTokenised(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**TokenisedData**

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

# **patchAiDecompilationInlineComment**
> CommentsData patchAiDecompilationInlineComment(patchCommentBody)

Merges a single line comment into the existing AI-generated inline comments. Requires comments to have been generated first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiPatchAiDecompilationInlineCommentRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiPatchAiDecompilationInlineCommentRequest = {
    // Function ID
  functionId: 1,
  
  patchCommentBody: ,
};

const data = await apiInstance.patchAiDecompilationInlineComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchCommentBody** | **PatchCommentBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CommentsData**

### Authorization

[APIKey](README.md#APIKey)

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

# **regenerateAiDecompilationInlineComments**
> RegenerateOutputBody regenerateAiDecompilationInlineComments()

Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiRegenerateAiDecompilationInlineCommentsRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.regenerateAiDecompilationInlineComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**RegenerateOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **regenerateAiDecompilationSummary**
> RegenerateOutputBody regenerateAiDecompilationSummary()

Starts a new summary generation workflow for the function. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiRegenerateAiDecompilationSummaryRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.regenerateAiDecompilationSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**RegenerateOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamAiDecompilation**
> Array<StreamAiDecompilation200ResponseInner> streamAiDecompilation()

Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`. Terminal events: `decomp_finished` (success) or `decomp_failed` (all retries exhausted). `attempt_failed` is per-attempt and non-terminal — Temporal may retry the activity. Clients should treat `attempt` changes as a reset signal. `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiStreamAiDecompilationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiStreamAiDecompilationRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.streamAiDecompilation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**Array<StreamAiDecompilation200ResponseInner>**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upsertAiDecompilationOverrides**
> UpsertOverridesData upsertAiDecompilationOverrides(upsertOverridesInputBody)

Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiUpsertAiDecompilationOverridesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiUpsertAiDecompilationOverridesRequest = {
    // Function ID
  functionId: 1,
  
  upsertOverridesInputBody: ,
};

const data = await apiInstance.upsertAiDecompilationOverrides(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertOverridesInputBody** | **UpsertOverridesInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**UpsertOverridesData**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

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
};

const data = await apiInstance.upsertAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertAiDecomplationRatingRequest** | **UpsertAiDecomplationRatingRequest**|  |
 **functionId** | [**number**] | The ID of the function being rated | defaults to undefined


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


