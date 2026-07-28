# .FunctionsDataTypesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchUpdateFunctionDataTypes**](FunctionsDataTypesApi.md#batchUpdateFunctionDataTypes) | **PUT** /v3/analyses/{analysis_id}/functions/data-types | Batch update function data types
[**getFunctionDataTypes**](FunctionsDataTypesApi.md#getFunctionDataTypes) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/data-types | Get data types for a single function
[**listAnalysisFunctionsDataTypes**](FunctionsDataTypesApi.md#listAnalysisFunctionsDataTypes) | **GET** /v3/analyses/{analysis_id}/functions/data-types | List data types for all functions in an analysis
[**listFunctionsDataTypes**](FunctionsDataTypesApi.md#listFunctionsDataTypes) | **GET** /v3/functions/data-types | Get data types for many functions
[**updateFunctionDataTypes**](FunctionsDataTypesApi.md#updateFunctionDataTypes) | **PUT** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Update function data types


# **batchUpdateFunctionDataTypes**
> BatchUpdateDataTypesOutputBody batchUpdateFunctionDataTypes(batchUpdateDataTypesInputBody)

Updates data types for multiple functions in one analysis. All function IDs in the body must belong to the analysis. Each item is processed independently and reports its own outcome: a stale `data_types_version` yields `version_conflict` for that item without affecting the rest of the batch.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiBatchUpdateFunctionDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiBatchUpdateFunctionDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
  
  batchUpdateDataTypesInputBody: {
    functions: [
      {
        dataTypes: null,
        dataTypesVersion: 0,
        functionId: 1,
      },
    ],
  },
};

const data = await apiInstance.batchUpdateFunctionDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchUpdateDataTypesInputBody** | **BatchUpdateDataTypesInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**BatchUpdateDataTypesOutputBody**

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

# **getFunctionDataTypes**
> DataTypesEntry getFunctionDataTypes()

Returns the stored data-types blob for one function. The function must belong to the supplied analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiGetFunctionDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiGetFunctionDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**DataTypesEntry**

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

# **listAnalysisFunctionsDataTypes**
> ListAnalysisFunctionsDataTypesOutputBody listAnalysisFunctionsDataTypes()

Paginated read of the stored data-types blob for each function in the analysis.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiListAnalysisFunctionsDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiListAnalysisFunctionsDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
    // Pagination offset. Defaults to 0. (optional)
  offset: 0,
    // Page size. Defaults to 100. (optional)
  limit: 1,
};

const data = await apiInstance.listAnalysisFunctionsDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **offset** | [**number**] | Pagination offset. Defaults to 0. | (optional) defaults to undefined
 **limit** | [**number**] | Page size. Defaults to 100. | (optional) defaults to undefined


### Return type

**ListAnalysisFunctionsDataTypesOutputBody**

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

# **listFunctionsDataTypes**
> ListFunctionsDataTypesOutputBody listFunctionsDataTypes()

Returns the stored data-types blob for each supplied function ID. Caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiListFunctionsDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiListFunctionsDataTypesRequest = {
    // Function IDs to fetch data-types for.
  functionIds: [
    1,
  ],
};

const data = await apiInstance.listFunctionsDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** | Function IDs to fetch data-types for. | defaults to undefined


### Return type

**ListFunctionsDataTypesOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **updateFunctionDataTypes**
> UpdateDataTypesOutputBody updateFunctionDataTypes(updateDataTypesInputBody)

Stores user-specific overrides for a function\'s data types. Uses optimistic concurrency: if the stored version doesn\'t match `data_types_version`, the update is rejected with 409.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiUpdateFunctionDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiUpdateFunctionDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
    // Function ID
  functionId: 1,
  
  updateDataTypesInputBody: {
    dataTypes: null,
    dataTypesVersion: 0,
  },
};

const data = await apiInstance.updateFunctionDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDataTypesInputBody** | **UpdateDataTypesInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**UpdateDataTypesOutputBody**

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


