# .FunctionsCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFunctionCallee**](FunctionsCoreApi.md#addFunctionCallee) | **POST** /v3/functions/{function_id}/callees | Add a callee to a function
[**addUserStringToFunction**](FunctionsCoreApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.
[**aiUnstrip**](FunctionsCoreApi.md#aiUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/ai-unstrip | Performs matching and auto-unstrip for an analysis and its functions
[**analysisFunctionMatching**](FunctionsCoreApi.md#analysisFunctionMatching) | **POST** /v2/analyses/{analysis_id}/functions/matches | Perform matching for the functions of an analysis
[**autoUnstrip**](FunctionsCoreApi.md#autoUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/auto-unstrip | Performs matching and auto-unstrip for an analysis and its functions
[**batchFunctionMatching**](FunctionsCoreApi.md#batchFunctionMatching) | **POST** /v2/functions/matches | Perform function matching for an arbitrary batch of functions, binaries or collections
[**cancelAiUnstrip**](FunctionsCoreApi.md#cancelAiUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/ai-unstrip/cancel | Cancels a running ai-unstrip
[**cancelAutoUnstrip**](FunctionsCoreApi.md#cancelAutoUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/unstrip/cancel | Cancels a running auto-unstrip
[**getAnalysisStrings**](FunctionsCoreApi.md#getAnalysisStrings) | **GET** /v2/analyses/{analysis_id}/functions/strings | Get string information found in the Analysis
[**getAnalysisStringsStatus**](FunctionsCoreApi.md#getAnalysisStringsStatus) | **GET** /v2/analyses/{analysis_id}/functions/strings/status | Get string processing state for the Analysis
[**getFunctionBlocks**](FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v2/functions/{function_id}/blocks | Get disassembly blocks related to the function
[**getFunctionBlocks_0**](FunctionsCoreApi.md#getFunctionBlocks_0) | **GET** /v3/functions/{function_id}/blocks | Get function disassembly
[**getFunctionCalleesCallers**](FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v2/functions/{function_id}/callees_callers | Get list of functions that call or are called by the specified function
[**getFunctionCalleesCallersBulk**](FunctionsCoreApi.md#getFunctionCalleesCallersBulk) | **GET** /v2/functions/callees_callers | Get list of functions that call or are called for a list of functions
[**getFunctionCalleesCallers_0**](FunctionsCoreApi.md#getFunctionCalleesCallers_0) | **GET** /v3/functions/{function_id}/callees-callers | Get callees and callers for a function
[**getFunctionCapabilities**](FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v2/functions/{function_id}/capabilities | Retrieve a functions capabilities
[**getFunctionCapabilities_0**](FunctionsCoreApi.md#getFunctionCapabilities_0) | **GET** /v3/functions/{function_id}/capabilities | Get capabilities for a function
[**getFunctionDetails**](FunctionsCoreApi.md#getFunctionDetails) | **GET** /v2/functions/{function_id} | Get function details
[**getFunctionDetails_0**](FunctionsCoreApi.md#getFunctionDetails_0) | **GET** /v3/functions/{function_id} | Get function details
[**getFunctionStrings**](FunctionsCoreApi.md#getFunctionStrings) | **GET** /v2/functions/{function_id}/strings | Get string information found in the function
[**getFunctionStrings_0**](FunctionsCoreApi.md#getFunctionStrings_0) | **GET** /v3/functions/{function_id}/strings | List strings for a function.
[**getFunctionsCalleesCallers**](FunctionsCoreApi.md#getFunctionsCalleesCallers) | **GET** /v3/functions/callees-callers | Get callees and callers for many functions
[**getFunctionsMatches**](FunctionsCoreApi.md#getFunctionsMatches) | **GET** /v3/functions/matches | Get function-matching results for an explicit set of functions
[**getFunctionsMatchingStatus**](FunctionsCoreApi.md#getFunctionsMatchingStatus) | **GET** /v3/functions/matches/status | Get function-matching status for an explicit set of functions
[**listAnalysisFunctions**](FunctionsCoreApi.md#listAnalysisFunctions) | **GET** /v3/analyses/{analysis_id}/functions | List functions in an analysis
[**startFunctionsMatching**](FunctionsCoreApi.md#startFunctionsMatching) | **POST** /v3/functions/matches | Start function matching for an explicit set of functions


# **addFunctionCallee**
> { [key: string]: any; } addFunctionCallee(addCalleeInputBody)

Records an outgoing call edge from the given function to a callee.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiAddFunctionCalleeRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiAddFunctionCalleeRequest = {
    // Function ID
  functionId: 1,
  
  addCalleeInputBody: ,
};

const data = await apiInstance.addFunctionCallee(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCalleeInputBody** | **AddCalleeInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addUserStringToFunction**
> { [key: string]: any; } addUserStringToFunction(addUserStringToFunctionInputBody)

Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiAddUserStringToFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiAddUserStringToFunctionRequest = {
    // Function ID
  functionId: 1,
  
  addUserStringToFunctionInputBody: ,
};

const data = await apiInstance.addUserStringToFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUserStringToFunctionInputBody** | **AddUserStringToFunctionInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aiUnstrip**
> AutoUnstripResponse aiUnstrip(aiUnstripRequest)

Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function groups for each function that\'s within the system

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiAiUnstripRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiAiUnstripRequest = {
  
  analysisId: 1,
  
  aiUnstripRequest: {
    apply: false,
  },
};

const data = await apiInstance.aiUnstrip(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aiUnstripRequest** | **AiUnstripRequest**|  |
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**AutoUnstripResponse**

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

# **analysisFunctionMatching**
> FunctionMatchingResponse analysisFunctionMatching(analysisFunctionMatchingRequest)

Takes in an analysis id and settings and matches the nearest functions to the ones associated with it. Results can optionally be filtered by collection, binary, debug type or (other) function ids

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiAnalysisFunctionMatchingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiAnalysisFunctionMatchingRequest = {
  
  analysisId: 1,
  
  analysisFunctionMatchingRequest: {
    minSimilarity: 90,
    filters: {
      binaryIds: [],
      collectionIds: [],
      functionIds: [],
      userIds: [],
      debugTypes: [],
    },
    resultsPerFunction: 1,
    page: 1,
    pageSize: 0,
    statusOnly: false,
    noCache: false,
    useCanonicalNames: false,
  },
};

const data = await apiInstance.analysisFunctionMatching(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisFunctionMatchingRequest** | **AnalysisFunctionMatchingRequest**|  |
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**FunctionMatchingResponse**

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

# **autoUnstrip**
> AutoUnstripResponse autoUnstrip(autoUnstripRequest)

Takes in the analysis ID, uses the functions ID\'s from it and settings to find the nearest function for each function that\'s within the system

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiAutoUnstripRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiAutoUnstripRequest = {
  
  analysisId: 1,
  
  autoUnstripRequest: {
    minSimilarity: 90,
    apply: false,
    confidenceThreshold: 90,
    minGroupSize: 10,
    statusOnly: false,
    noCache: false,
    useCanonicalNames: false,
  },
};

const data = await apiInstance.autoUnstrip(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoUnstripRequest** | **AutoUnstripRequest**|  |
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**AutoUnstripResponse**

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

# **batchFunctionMatching**
> FunctionMatchingResponse batchFunctionMatching(functionMatchingRequest)

Takes in an input of functions ID\'s and settings and finds the nearest functions for each function that\'s within the system

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiBatchFunctionMatchingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiBatchFunctionMatchingRequest = {
  
  functionMatchingRequest: {
    modelId: 1,
    functionIds: [
      1,
    ],
    minSimilarity: 90,
    filters: {
      binaryIds: [],
      collectionIds: [],
      functionIds: [],
      userIds: [],
      debugTypes: [],
    },
    resultsPerFunction: 1,
    page: 1,
    pageSize: 0,
    statusOnly: false,
    noCache: false,
    useCanonicalNames: false,
  },
};

const data = await apiInstance.batchFunctionMatching(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionMatchingRequest** | **FunctionMatchingRequest**|  |


### Return type

**FunctionMatchingResponse**

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

# **cancelAiUnstrip**
> AutoUnstripResponse cancelAiUnstrip()

Takes in the analysis ID and cancels a running ai-unstrip operation

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiCancelAiUnstripRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiCancelAiUnstripRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.cancelAiUnstrip(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**AutoUnstripResponse**

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

# **cancelAutoUnstrip**
> AutoUnstripResponse cancelAutoUnstrip()

Takes in the analysis ID and cancels a running auto-unstrip operation

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiCancelAutoUnstripRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiCancelAutoUnstripRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.cancelAutoUnstrip(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**AutoUnstripResponse**

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

# **getAnalysisStrings**
> BaseResponseAnalysisStringsResponse getAnalysisStrings()

Get string information found in the analysis

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetAnalysisStringsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetAnalysisStringsRequest = {
  
  analysisId: 1,
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 100,
    // Search is applied to string value (optional)
  search: "search_example",
    // Search is applied to function names (optional)
  functionSearch: "function_search_example",
    // Order by field (optional)
  orderBy: "value",
    // Sort order for the results (optional)
  sortOrder: "ASC",
};

const data = await apiInstance.getAnalysisStrings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 100
 **search** | [**string**] | Search is applied to string value | (optional) defaults to undefined
 **functionSearch** | [**string**] | Search is applied to function names | (optional) defaults to undefined
 **orderBy** | [**&#39;length&#39; | &#39;value&#39;**]**Array<&#39;length&#39; &#124; &#39;value&#39; &#124; &#39;11184809&#39;>** | Order by field | (optional) defaults to 'value'
 **sortOrder** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** | Sort order for the results | (optional) defaults to 'ASC'


### Return type

**BaseResponseAnalysisStringsResponse**

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

# **getAnalysisStringsStatus**
> BaseResponseAnalysisStringsStatusResponse getAnalysisStringsStatus()

Get string processing state for the Analysis

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetAnalysisStringsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetAnalysisStringsStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getAnalysisStringsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseAnalysisStringsStatusResponse**

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

# **getFunctionBlocks**
> BaseResponseFunctionBlocksResponse getFunctionBlocks()

Get disassembly blocks related to the function

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionBlocksRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionBlocksRequest = {
  
  functionId: 1,
};

const data = await apiInstance.getFunctionBlocks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseFunctionBlocksResponse**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFunctionBlocks_0**
> DisassemblyOutputBody getFunctionBlocks_0()

Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionBlocks0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionBlocks0Request = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionBlocks_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**DisassemblyOutputBody**

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

# **getFunctionCalleesCallers**
> BaseResponseCalleesCallerFunctionsResponse getFunctionCalleesCallers()


### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCalleesCallersRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCalleesCallersRequest = {
  
  functionId: 1,
};

const data = await apiInstance.getFunctionCalleesCallers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCalleesCallerFunctionsResponse**

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

# **getFunctionCalleesCallersBulk**
> BaseResponseListCalleesCallerFunctionsResponse getFunctionCalleesCallersBulk()


### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCalleesCallersBulkRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCalleesCallersBulkRequest = {
  
  functionIds: [
    1,
  ],
};

const data = await apiInstance.getFunctionCalleesCallersBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** |  | defaults to undefined


### Return type

**BaseResponseListCalleesCallerFunctionsResponse**

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

# **getFunctionCalleesCallers_0**
> CallEdgesOutputBody getFunctionCalleesCallers_0()

Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCalleesCallers0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCalleesCallers0Request = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionCalleesCallers_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CallEdgesOutputBody**

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

# **getFunctionCapabilities**
> BaseResponseFunctionCapabilityResponse getFunctionCapabilities()


### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCapabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCapabilitiesRequest = {
  
  functionId: 1,
};

const data = await apiInstance.getFunctionCapabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseFunctionCapabilityResponse**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFunctionCapabilities_0**
> CapabilitiesOutputBody getFunctionCapabilities_0()

Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCapabilities0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCapabilities0Request = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionCapabilities_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CapabilitiesOutputBody**

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

# **getFunctionDetails**
> BaseResponseFunctionsDetailResponse getFunctionDetails()


### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionDetailsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionDetailsRequest = {
  
  functionId: 1,
};

const data = await apiInstance.getFunctionDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseFunctionsDetailResponse**

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

# **getFunctionDetails_0**
> FunctionDetailsOutputBody getFunctionDetails_0()

Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionDetails0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionDetails0Request = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionDetails_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**FunctionDetailsOutputBody**

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

# **getFunctionStrings**
> BaseResponseFunctionStringsResponse getFunctionStrings()

Get string information found in the function

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionStringsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionStringsRequest = {
  
  functionId: 1,
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 100,
    // Search is applied to string value (optional)
  search: "search_example",
};

const data = await apiInstance.getFunctionStrings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 100
 **search** | [**string**] | Search is applied to string value | (optional) defaults to undefined


### Return type

**BaseResponseFunctionStringsResponse**

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

# **getFunctionStrings_0**
> ListFunctionStringsOutputBody getFunctionStrings_0()

Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionStrings0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionStrings0Request = {
    // Function ID
  functionId: 1,
    // Page number (1-indexed). (optional)
  page: 1,
    // Number of results per page. (optional)
  pageSize: 100,
    // Filter by string value (case-insensitive substring match). (optional)
  search: "search_example",
};

const data = await apiInstance.getFunctionStrings_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **page** | [**number**] | Page number (1-indexed). | (optional) defaults to 1
 **pageSize** | [**number**] | Number of results per page. | (optional) defaults to 100
 **search** | [**string**] | Filter by string value (case-insensitive substring match). | (optional) defaults to undefined


### Return type

**ListFunctionStringsOutputBody**

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

# **getFunctionsCalleesCallers**
> CallEdgesOutputBody getFunctionsCalleesCallers()

Bulk variant — pass `function_ids` as a query parameter (comma-separated or repeated). Caller must have access to every supplied function or the whole request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionsCalleesCallersRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionsCalleesCallersRequest = {
    // Function IDs to fetch edges for.
  functionIds: [
    1,
  ],
};

const data = await apiInstance.getFunctionsCalleesCallers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** | Function IDs to fetch edges for. | defaults to undefined


### Return type

**CallEdgesOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **getFunctionsMatches**
> GetMatchesOutputBody getFunctionsMatches()

Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionsMatchesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionsMatchesRequest = {
    // Source function IDs whose matches to fetch.
  functionIds: [
    1,
  ],
};

const data = await apiInstance.getFunctionsMatches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** | Source function IDs whose matches to fetch. | defaults to undefined


### Return type

**GetMatchesOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **getFunctionsMatchingStatus**
> GetMatchesStatusOutputBody getFunctionsMatchingStatus()

Returns the matching workflow\'s current status for the supplied function IDs. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionsMatchingStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionsMatchingStatusRequest = {
    // Source function IDs whose matches to fetch.
  functionIds: [
    1,
  ],
};

const data = await apiInstance.getFunctionsMatchingStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** | Source function IDs whose matches to fetch. | defaults to undefined


### Return type

**GetMatchesStatusOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **listAnalysisFunctions**
> ListAnalysisFunctionsOutputBody listAnalysisFunctions()

Returns a paginated list of functions belonging to the analysis. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiListAnalysisFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiListAnalysisFunctionsRequest = {
    // Analysis ID
  analysisId: 1,
    // Pagination offset. Defaults to 0. (optional)
  offset: 0,
    // Page size. Defaults to 100. (optional)
  limit: 1,
};

const data = await apiInstance.listAnalysisFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **offset** | [**number**] | Pagination offset. Defaults to 0. | (optional) defaults to undefined
 **limit** | [**number**] | Page size. Defaults to 100. | (optional) defaults to undefined


### Return type

**ListAnalysisFunctionsOutputBody**

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

# **startFunctionsMatching**
> StartMatchingOutputBody startFunctionsMatching(startMatchingForFunctionsInputBody)

Dispatches the function-matching workflow against the provided function IDs. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiStartFunctionsMatchingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiStartFunctionsMatchingRequest = {
  
  startMatchingForFunctionsInputBody: ,
};

const data = await apiInstance.startFunctionsMatching(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startMatchingForFunctionsInputBody** | **StartMatchingForFunctionsInputBody**|  |


### Return type

**StartMatchingOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


