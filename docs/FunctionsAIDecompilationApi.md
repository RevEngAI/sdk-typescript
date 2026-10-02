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
[**patchAiDecompilationInlineComment**](FunctionsAIDecompilationApi.md#patchAiDecompilationInlineComment) | **PATCH** /v3/functions/{function_id}/ai-decompilation/inline-comments | Update a single inline comment
[**regenerateAiDecompilationInlineComments**](FunctionsAIDecompilationApi.md#regenerateAiDecompilationInlineComments) | **POST** /v3/functions/{function_id}/ai-decompilation/inline-comments | Regenerate AI decompilation inline comments
[**regenerateAiDecompilationSummary**](FunctionsAIDecompilationApi.md#regenerateAiDecompilationSummary) | **POST** /v3/functions/{function_id}/ai-decompilation/summary | Regenerate AI decompilation summary
[**streamAiDecompilation**](FunctionsAIDecompilationApi.md#streamAiDecompilation) | **GET** /v3/functions/{function_id}/ai-decompilation/events | Stream live AI decompilation output (SSE)
[**upsertAiDecompilationRating**](FunctionsAIDecompilationApi.md#upsertAiDecompilationRating) | **PATCH** /v2/functions/{function_id}/ai-decompilation/rating | Upsert rating for AI decompilation
[**v3AcceptAiDecompilationTypeSuggestions**](FunctionsAIDecompilationApi.md#v3AcceptAiDecompilationTypeSuggestions) | **POST** /v3/functions/{function_id}/ai-decompilation/type-suggestions/accept | Accept AI decompilation type suggestions
[**v3GetAiDecompilationLineAttributions**](FunctionsAIDecompilationApi.md#v3GetAiDecompilationLineAttributions) | **GET** /v3/functions/{function_id}/ai-decompilation/line-attributions | Get AI decompilation line attributions
[**v3GetAiDecompilationRating**](FunctionsAIDecompilationApi.md#v3GetAiDecompilationRating) | **GET** /v3/functions/{function_id}/ai-decompilation/rating | Get AI decompilation rating
[**v3GetAiDecompilationTokens**](FunctionsAIDecompilationApi.md#v3GetAiDecompilationTokens) | **GET** /v3/functions/{function_id}/ai-decompilation/tokens | Get AI decompilation tokens and user overrides
[**v3GetAiDecompilationTypeSuggestions**](FunctionsAIDecompilationApi.md#v3GetAiDecompilationTypeSuggestions) | **GET** /v3/functions/{function_id}/ai-decompilation/type-suggestions | Get AI decompilation type suggestions
[**v3GetAiDecompilationTypeSuggestionsStatus**](FunctionsAIDecompilationApi.md#v3GetAiDecompilationTypeSuggestionsStatus) | **GET** /v3/functions/{function_id}/ai-decompilation/type-suggestions/status | Get type suggestion workflow status
[**v3RegenerateAiDecompilationTypeSuggestions**](FunctionsAIDecompilationApi.md#v3RegenerateAiDecompilationTypeSuggestions) | **POST** /v3/functions/{function_id}/ai-decompilation/type-suggestions | Regenerate AI decompilation type suggestions
[**v3UpsertAiDecompilationOverrides**](FunctionsAIDecompilationApi.md#v3UpsertAiDecompilationOverrides) | **PATCH** /v3/functions/{function_id}/ai-decompilation/overrides | Upsert variable/function name overrides
[**v3UpsertAiDecompilationRating**](FunctionsAIDecompilationApi.md#v3UpsertAiDecompilationRating) | **PATCH** /v3/functions/{function_id}/ai-decompilation/rating | Upsert AI decompilation rating


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
    // LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default. (optional)
  temperature: -1,
    // Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off. (optional)
  typeSuggestions: true,
    // Store the suggested types as data types of this function\'s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off. (optional)
  applyTypes: true,
};

const data = await apiInstance.createAiDecompilation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **temperature** | [**number**] | LLM temperature (0.0-1.0). Overrides the server default when set. Omit or set to -1 to use the server default. | (optional) defaults to -1
 **typeSuggestions** | [**boolean**] | Ask the language model to name the suggested types and their members. Set to false to skip the model call; the statically derived layouts are still computed and stored. Cannot re-enable the pass when the server has it off. | (optional) defaults to true
 **applyTypes** | [**boolean**] | Store the suggested types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off. | (optional) defaults to true


### Return type

**CreateAIDecompOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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
  
  patchCommentBody: {
    comment: "comment_example",
    line: 1,
  },
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

# **regenerateAiDecompilationInlineComments**
> RegenerateOutputBody regenerateAiDecompilationInlineComments()

Starts a new inline comments generation workflow for the function. Requires an existing decompilation with a summary. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers the comments would reference. Poll the inline comments status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **regenerateAiDecompilationSummary**
> RegenerateOutputBody regenerateAiDecompilationSummary()

Starts a new summary generation workflow for the function. Requires an existing decompilation. Rejected while a decompilation is running: its naming and type-suggestion passes are still changing the identifiers a summary would describe. Poll the summary status endpoint, which reports PENDING until then.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamAiDecompilation**
> Array<StreamAiDecompilation200ResponseInner> streamAiDecompilation()

Opens a Server-Sent Events stream of incremental decompilation events for the given function. Each event has a `type` discriminator (also used as the SSE `event:` line) and a per-attempt monotonic `seq`.  **Terminal events — the stream closes on these:** `names_finished` (success) and `decomp_failed` (all retries exhausted). `names_finished` is published on every success path, including when the naming pass is disabled, produces nothing, or fails, so a successful run always closes.  **`decomp_finished` is NOT terminal.** It marks the end of the model call, not the end of the run: entity restore, the result write, the placeholder-naming pass and the type-suggestion pass all follow it, and the last two rewrite the identifiers the source renders with. Reading the decompilation at `decomp_finished` therefore returns names that are about to change — wait for `names_finished`. `attempt_failed` is per-attempt and non-terminal too: Temporal may retry, and clients disambiguate on `attempt`, which they should treat as a reset signal.  `last_event_id` is not supported — clients fall back to polling the standard GET endpoint after the stream ends.

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3AcceptAiDecompilationTypeSuggestions**
> AcceptTypeSuggestionsOutputBody v3AcceptAiDecompilationTypeSuggestions(acceptTypeSuggestionsInputBody)

Stores the named type suggestions as data types of this function\'s analysis, with a `source_type` of `AI_DECOMP` and this function as their `source_function_id`.  Each suggestion is stored as the type suggestions endpoint renders it: a `STRUCT` where members were placed and a `TYPEDEF` where the suggestion is a name for a scalar. A suggestion nothing gave a shape to is left out, so `accepted` can be shorter than the keys requested. A member with no offset or width is left out and counted in `skipped_members`. A type expression a member names is matched against the analysis by name alone and created where nothing matches: `char *` creates a `char` `BASE` type and a `POINTER` type pointing at it, reusing either where the analysis already holds it. A member naming another suggestion accepted by the same request resolves to it. Only a trailing `*` is taken apart, so a name like `int &` stands for one type.  No size is stored: the widths a suggestion carries are lower bounds rather than the type\'s own. A suggestion the analysis already holds a type of that name and kind for resolves to it, so repeating a request stores nothing further.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3AcceptAiDecompilationTypeSuggestionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3AcceptAiDecompilationTypeSuggestionsRequest = {
    // Function ID
  functionId: 1,
  
  acceptTypeSuggestionsInputBody: {
    keys: [
      "keys_example",
    ],
  },
};

const data = await apiInstance.v3AcceptAiDecompilationTypeSuggestions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptTypeSuggestionsInputBody** | **AcceptTypeSuggestionsInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**AcceptTypeSuggestionsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetAiDecompilationLineAttributions**
> LineAttributionsData v3GetAiDecompilationLineAttributions()

Returns the correspondence between the function\'s disassembly line numbers and its AI-decompilation line numbers, grouped by disassembly line. Both sides are 0-indexed and the correspondence has a many-to-many relationship. The mapping is empty until a completed run has produced one, and is empty for a run that produced none.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3GetAiDecompilationLineAttributionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3GetAiDecompilationLineAttributionsRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetAiDecompilationLineAttributions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**LineAttributionsData**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3GetAiDecompilationRating**
> RatingOutputBody v3GetAiDecompilationRating()

Returns the caller\'s rating and reason for a function\'s AI decompilation, or null fields when they have not rated it yet.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3GetAiDecompilationRatingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3GetAiDecompilationRatingRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**RatingOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3GetAiDecompilationTokens**
> GetTokensResponse v3GetAiDecompilationTokens()

Returns the tokenised AI-decompilation source, the value each token resolves to, and the user\'s overrides as a separate unmerged map. The source is empty and the overrides are null until a run has succeeded.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3GetAiDecompilationTokensRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3GetAiDecompilationTokensRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetAiDecompilationTokens(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**GetTokensResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3GetAiDecompilationTypeSuggestions**
> TypeSuggestionsData v3GetAiDecompilationTypeSuggestions()

Returns the aggregate types the AI decompilation inferred for this function: a suggested name for each type and each of its members, the members\' offsets and widths, and the gaps between them. Members revealed only by a caller or callee are included and marked by origin, as are members the model placed rather than observed. Nothing here is a data type row — these are proposals, and creating a row from one is the client\'s call. The list is empty until a run has produced suggestions, which is ordinary and not an error.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetAiDecompilationTypeSuggestions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**TypeSuggestionsData**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3GetAiDecompilationTypeSuggestionsStatus**
> WorkflowProgress v3GetAiDecompilationTypeSuggestionsStatus()

Returns fine-grained progress of the type suggestion workflow. Reports PENDING while a decompilation is running, because its own type-naming pass produces the same suggestions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3GetAiDecompilationTypeSuggestionsStatusRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetAiDecompilationTypeSuggestionsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**WorkflowProgress**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3RegenerateAiDecompilationTypeSuggestions**
> RegenerateOutputBody v3RegenerateAiDecompilationTypeSuggestions()

Starts a new type suggestion workflow for the function, discarding the suggestions already stored. Requires a successful decompilation; it re-runs only the type-naming pass, so it costs no decompilation credit. The regenerated types are stored as data types of the analysis unless `apply_types=false`; types a previous run stored are not removed. Rejected while a decompilation is running: it runs the same pass itself once its output settles. Poll the type-suggestions status endpoint, which reports PENDING until then, and read the result from the type-suggestions endpoint.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3RegenerateAiDecompilationTypeSuggestionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3RegenerateAiDecompilationTypeSuggestionsRequest = {
    // Function ID
  functionId: 1,
    // Store the regenerated types as data types of this function\'s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off. (optional)
  applyTypes: true,
};

const data = await apiInstance.v3RegenerateAiDecompilationTypeSuggestions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **applyTypes** | [**boolean**] | Store the regenerated types as data types of this function\&#39;s analysis, with a source_type of AI_DECOMP. Set to false to leave them as suggestions only. Cannot re-enable the pass when the server has it off. | (optional) defaults to true


### Return type

**RegenerateOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3UpsertAiDecompilationOverrides**
> UpsertOverridesData v3UpsertAiDecompilationOverrides(upsertOverridesInputBody)

Applies user-provided name overrides to placeholder tokens in the decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3UpsertAiDecompilationOverridesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3UpsertAiDecompilationOverridesRequest = {
    // Function ID
  functionId: 1,
  
  upsertOverridesInputBody: {
    overrides: {
      "key": {
        source: "user",
        value: "value_example",
      },
    },
  },
};

const data = await apiInstance.v3UpsertAiDecompilationOverrides(request);
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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3UpsertAiDecompilationRating**
> void v3UpsertAiDecompilationRating(upsertRatingInputBody)

Records the caller\'s rating and optional reason for a function\'s AI decompilation, replacing any they recorded before. Requires an existing decompilation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, FunctionsAIDecompilationApi } from '@revengai/sdk';
import type { FunctionsAIDecompilationApiV3UpsertAiDecompilationRatingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsAIDecompilationApi(configuration);

const request: FunctionsAIDecompilationApiV3UpsertAiDecompilationRatingRequest = {
    // Function ID
  functionId: 1,
  
  upsertRatingInputBody: {
    rating: "POSITIVE",
    reason: "reason_example",
  },
};

const data = await apiInstance.v3UpsertAiDecompilationRating(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertRatingInputBody** | **UpsertRatingInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


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


