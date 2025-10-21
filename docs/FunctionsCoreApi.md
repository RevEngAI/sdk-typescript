# .FunctionsCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aiUnstrip**](FunctionsCoreApi.md#aiUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/ai-unstrip | Performs matching and auto-unstrip for an analysis and its functions
[**analysisFunctionMatching**](FunctionsCoreApi.md#analysisFunctionMatching) | **POST** /v2/analyses/{analysis_id}/functions/matches | Perform matching for the functions of an analysis
[**autoUnstrip**](FunctionsCoreApi.md#autoUnstrip) | **POST** /v2/analyses/{analysis_id}/functions/auto-unstrip | Performs matching and auto-unstrip for an analysis and its functions
[**batchFunctionMatching**](FunctionsCoreApi.md#batchFunctionMatching) | **POST** /v2/functions/matches | Perform function matching for an arbitrary batch of functions, binaries or collections
[**cancelAiUnstrip**](FunctionsCoreApi.md#cancelAiUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/ai-unstrip/cancel | Cancels a running ai-unstrip
[**cancelAutoUnstrip**](FunctionsCoreApi.md#cancelAutoUnstrip) | **DELETE** /v2/analyses/{analysis_id}/functions/unstrip/cancel | Cancels a running auto-unstrip
[**getAnalysisStrings**](FunctionsCoreApi.md#getAnalysisStrings) | **GET** /v2/analyses/{analysis_id}/functions/strings | Get string information found in the Analysis
[**getFunctionBlocks**](FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v2/functions/{function_id}/blocks | Get disassembly blocks related to the function
[**getFunctionCalleesCallers**](FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v2/functions/{function_id}/callees_callers | Get list of functions that call or are called by the specified function
[**getFunctionCapabilities**](FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v2/functions/{function_id}/capabilities | Retrieve a functions capabilities
[**getFunctionDetails**](FunctionsCoreApi.md#getFunctionDetails) | **GET** /v2/functions/{function_id} | Get function details
[**getFunctionStrings**](FunctionsCoreApi.md#getFunctionStrings) | **GET** /v2/functions/{function_id}/strings | Get string information found in the function


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
> FunctionMatchingBatchResponse analysisFunctionMatching(analysisFunctionMatchingRequest)

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
    minSimilarity: 90.0,
    filters: {
      binaryIds: [],
      collectionIds: [],
      functionIds: [],
      debugTypes: [],
    },
    resultsPerFunction: 1,
    page: 1,
    pageSize: 0,
    noCache: false,
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

**FunctionMatchingBatchResponse**

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
    minSimilarity: 90.0,
    apply: false,
    confidenceThreshold: 90.0,
    minGroupSize: 10,
    noCache: false,
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
> FunctionMatchingBatchResponse batchFunctionMatching(functionMatchingRequest)

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
    minSimilarity: 90.0,
    filters: {
      binaryIds: [],
      collectionIds: [],
      functionIds: [],
      debugTypes: [],
    },
    resultsPerFunction: 1,
    page: 1,
    pageSize: 0,
    noCache: false,
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

**FunctionMatchingBatchResponse**

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


