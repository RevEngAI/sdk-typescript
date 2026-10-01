# .DataTypesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3CopyFunctionSignatures**](DataTypesApi.md#v3CopyFunctionSignatures) | **POST** /v3/analyses/{analysis_id}/signatures/copy | Copy function signatures
[**v3CreateAnalysisDataTypes**](DataTypesApi.md#v3CreateAnalysisDataTypes) | **POST** /v3/analyses/{analysis_id}/data-types | Create an analysis\&#39;s data types
[**v3GetAnalysisDataType**](DataTypesApi.md#v3GetAnalysisDataType) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id} | Get one of an analysis\&#39;s data types
[**v3GetAnalysisDataTypeHistory**](DataTypesApi.md#v3GetAnalysisDataTypeHistory) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id}/history | Get a data type\&#39;s edit history
[**v3GetFunctionSignature**](DataTypesApi.md#v3GetFunctionSignature) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/signature | Get a function\&#39;s signature
[**v3GetFunctionSignatureHistory**](DataTypesApi.md#v3GetFunctionSignatureHistory) | **GET** /v3/analyses/{analysis_id}/functions/{function_id}/signature/history | Get a function signature\&#39;s edit history
[**v3ListAnalysisDataTypes**](DataTypesApi.md#v3ListAnalysisDataTypes) | **GET** /v3/analyses/{analysis_id}/data-types | List an analysis\&#39;s data types
[**v3ListDataTypeFunctions**](DataTypesApi.md#v3ListDataTypeFunctions) | **GET** /v3/analyses/{analysis_id}/data-types/{data_type_id}/functions | List the functions using a data type
[**v3ListFunctionSignatures**](DataTypesApi.md#v3ListFunctionSignatures) | **GET** /v3/functions/signatures | Get signatures for many functions
[**v3UpdateAnalysisDataTypes**](DataTypesApi.md#v3UpdateAnalysisDataTypes) | **PUT** /v3/analyses/{analysis_id}/data-types | Update an analysis\&#39;s data types
[**v3UpdateFunctionSignature**](DataTypesApi.md#v3UpdateFunctionSignature) | **PUT** /v3/analyses/{analysis_id}/functions/{function_id}/signature | Update a function\&#39;s signature


# **v3CopyFunctionSignatures**
> CopyFunctionSignaturesOutputBody v3CopyFunctionSignatures(copyFunctionSignaturesInputBody)

Replaces each target function\'s signature with a copy of its source\'s parameters, return type and calling convention. Every target must belong to this analysis; a source may belong to any analysis the caller can read. The whole request is rejected if any pair is invalid.  A `data_type_id` means nothing outside the analysis that issued it, so the types a copied signature needs are resolved against this analysis by namespace, name and kind. A type this analysis already has under that key has its definition replaced by the source\'s; a type it lacks is created. Copied signatures get a `source_type` of `USER` and a `source_function_id`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3CopyFunctionSignaturesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3CopyFunctionSignaturesRequest = {
    // Analysis ID
  analysisId: 1,
  
  copyFunctionSignaturesInputBody: {
    copies: [
      {
        sourceFunctionId: 1,
        targetFunctionId: 1,
      },
    ],
  },
};

const data = await apiInstance.v3CopyFunctionSignatures(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copyFunctionSignaturesInputBody** | **CopyFunctionSignaturesInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**CopyFunctionSignaturesOutputBody**

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

# **v3CreateAnalysisDataTypes**
> AnalysisDataTypesOutputBody v3CreateAnalysisDataTypes(createAnalysisDataTypesInputBody)

Adds user-authored types to an analysis. Many types can be created in one request; the whole request is rejected if any of them is invalid. Ids are assigned by the server and returned here. Stored types get a `source_type` of `USER`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3CreateAnalysisDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3CreateAnalysisDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
  
  createAnalysisDataTypesInputBody: {
    dataTypes: [
      null,
    ],
  },
};

const data = await apiInstance.v3CreateAnalysisDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAnalysisDataTypesInputBody** | **CreateAnalysisDataTypesInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisDataTypesOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetAnalysisDataType**
> DataTypeEntry v3GetAnalysisDataType()

Returns a single data type by its `data_type_id`, byte-identical to the entry the data types list returns for it — same variant, same fields, same definition — so a client can cache and invalidate rows from either endpoint interchangeably.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3GetAnalysisDataTypeRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3GetAnalysisDataTypeRequest = {
    // Analysis ID
  analysisId: 1,
    // Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
  dataTypeId: 0,
};

const data = await apiInstance.v3GetAnalysisDataType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **dataTypeId** | [**number**] | Data type ID, as returned by the data types list for this analysis. 0 is a valid id. | defaults to undefined


### Return type

**DataTypeEntry**

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

# **v3GetAnalysisDataTypeHistory**
> GetDataTypeHistoryBody v3GetAnalysisDataTypeHistory()

The versions a data type has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3GetAnalysisDataTypeHistoryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3GetAnalysisDataTypeHistoryRequest = {
    // Analysis ID
  analysisId: 1,
    // Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
  dataTypeId: 0,
};

const data = await apiInstance.v3GetAnalysisDataTypeHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **dataTypeId** | [**number**] | Data type ID, as returned by the data types list for this analysis. 0 is a valid id. | defaults to undefined


### Return type

**GetDataTypeHistoryBody**

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

# **v3GetFunctionSignature**
> FunctionSignatureBody v3GetFunctionSignature()

Returns the extracted signature for one function: its parameters, return type and calling convention. Pass `include_data_types=true` to also get the data types it names.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3GetFunctionSignatureRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3GetFunctionSignatureRequest = {
    // Analysis ID
  analysisId: 1,
    // Function ID
  functionId: 1,
    // Include the data types the signature names in the response. (optional)
  includeDataTypes: true,
};

const data = await apiInstance.v3GetFunctionSignature(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **functionId** | [**number**] | Function ID | defaults to undefined
 **includeDataTypes** | [**boolean**] | Include the data types the signature names in the response. | (optional) defaults to undefined


### Return type

**FunctionSignatureBody**

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

# **v3GetFunctionSignatureHistory**
> GetFunctionSignatureHistoryBody v3GetFunctionSignatureHistory()

The versions a function\'s signature has held, newest first, each attributed to the edit that wrote it. The first value is the current value.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3GetFunctionSignatureHistoryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3GetFunctionSignatureHistoryRequest = {
    // Analysis ID
  analysisId: 1,
    // Function ID
  functionId: 1,
};

const data = await apiInstance.v3GetFunctionSignatureHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**GetFunctionSignatureHistoryBody**

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

# **v3ListAnalysisDataTypes**
> ListAnalysisDataTypesOutputBody v3ListAnalysisDataTypes()

Paginated, filterable list of the data types extracted from the binary — structs, unions, enums, typedefs and the rest. Every entry carries its full definition, so paging this list once resolves every `data_type_id` a definition or signature refers to; no follow-up request per id is needed.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3ListAnalysisDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3ListAnalysisDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
    // Pagination offset. (optional)
  offset: 0,
    // Page size. (optional)
  limit: 100,
    // Only return types of these kinds. Repeat for more than one; empty means no filter. (optional)
  kind: [
    "STRUCT",
  ],
    // Only return types in these namespaces, matched exactly. Omit for no filter; pass an empty value (namespace=) for the binary\'s own types, which have no namespace. (optional)
  namespace: [
    "namespace_example",
  ],
    // Only return types whose name contains this term. Wildcards in the term are matched literally. (optional)
  search: "search_example",
    // Only return types from these sources. Empty means no filter. (optional)
  sourceType: [
    "SYSTEM",
  ],
    // Field to order by. name orders by namespace, then name, then kind; size orders by size with types of unknown size last, then by namespace, name and kind. (optional)
  orderBy: "name",
    // Sort direction. (optional)
  order: "ASC",
};

const data = await apiInstance.v3ListAnalysisDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **offset** | [**number**] | Pagination offset. | (optional) defaults to 0
 **limit** | [**number**] | Page size. | (optional) defaults to 100
 **kind** | **Array<&#39;STRUCT&#39; &#124; &#39;UNION&#39; &#124; &#39;ENUM&#39; &#124; &#39;TYPEDEF&#39; &#124; &#39;POINTER&#39; &#124; &#39;ARRAY&#39; &#124; &#39;FUNCTION_DEFINITION&#39; &#124; &#39;BITFIELD&#39; &#124; &#39;BASE&#39; &#124; &#39;UNKNOWN&#39; &#124; &#39;11184809&#39;>** | Only return types of these kinds. Repeat for more than one; empty means no filter. | (optional) defaults to undefined
 **namespace** | **Array&lt;string&gt;** | Only return types in these namespaces, matched exactly. Omit for no filter; pass an empty value (namespace&#x3D;) for the binary\&#39;s own types, which have no namespace. | (optional) defaults to undefined
 **search** | [**string**] | Only return types whose name contains this term. Wildcards in the term are matched literally. | (optional) defaults to undefined
 **sourceType** | **Array<&#39;SYSTEM&#39; &#124; &#39;USER&#39; &#124; &#39;AUTO_UNSTRIP&#39; &#124; &#39;AI_DECOMP&#39; &#124; &#39;11184809&#39;>** | Only return types from these sources. Empty means no filter. | (optional) defaults to undefined
 **orderBy** | [**&#39;name&#39; | &#39;size&#39;**]**Array<&#39;name&#39; &#124; &#39;size&#39; &#124; &#39;11184809&#39;>** | Field to order by. name orders by namespace, then name, then kind; size orders by size with types of unknown size last, then by namespace, name and kind. | (optional) defaults to 'name'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** | Sort direction. | (optional) defaults to 'ASC'


### Return type

**ListAnalysisDataTypesOutputBody**

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

# **v3ListDataTypeFunctions**
> ListDataTypeFunctionsBody v3ListDataTypeFunctions()

Functions that use this data type as their return type or as a parameter. Matches the `data_type_id` exactly as it appears in the signature, so a function taking `sockaddr_in *` matches the pointer type rather than `sockaddr_in`. Ordered by function ID. There is no total count; page with `after_function_id`.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3ListDataTypeFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3ListDataTypeFunctionsRequest = {
    // Analysis ID
  analysisId: 1,
    // Data type ID, as returned by the data types list for this analysis. 0 is a valid id.
  dataTypeId: 0,
    // Page size. (optional)
  pageSize: 50,
    // Return functions with an ID greater than this. Pass the previous page\'s next_after_function_id; 0 starts at the first function. (optional)
  afterFunctionId: 0,
};

const data = await apiInstance.v3ListDataTypeFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **dataTypeId** | [**number**] | Data type ID, as returned by the data types list for this analysis. 0 is a valid id. | defaults to undefined
 **pageSize** | [**number**] | Page size. | (optional) defaults to 50
 **afterFunctionId** | [**number**] | Return functions with an ID greater than this. Pass the previous page\&#39;s next_after_function_id; 0 starts at the first function. | (optional) defaults to 0


### Return type

**ListDataTypeFunctionsBody**

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

# **v3ListFunctionSignatures**
> ListFunctionSignaturesOutputBody v3ListFunctionSignatures()

Returns the extracted signature for each supplied function ID, in request order. The functions need not share an analysis; each entry names the analysis its `data_type_id`s resolve against. Pass `include_data_types=true` to also get those data types, grouped by analysis. The caller must have read access to every function or the request is rejected.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3ListFunctionSignaturesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3ListFunctionSignaturesRequest = {
    // Function IDs to fetch signatures for.
  functionIds: [
    1,
  ],
    // Include the data types the signatures name in the response. (optional)
  includeDataTypes: true,
};

const data = await apiInstance.v3ListFunctionSignatures(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** | Function IDs to fetch signatures for. | defaults to undefined
 **includeDataTypes** | [**boolean**] | Include the data types the signatures name in the response. | (optional) defaults to undefined


### Return type

**ListFunctionSignaturesOutputBody**

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

# **v3UpdateAnalysisDataTypes**
> AnalysisDataTypesOutputBody v3UpdateAnalysisDataTypes(updateAnalysisDataTypesInputBody)

Replaces stored types in full: a field left out of the request is cleared. Many types can be updated in one request; the whole request is rejected if any of them is invalid. `kind` may be changed, and the definition must then match the new kind. Updated types get a `source_type` of `USER`, and their previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3UpdateAnalysisDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3UpdateAnalysisDataTypesRequest = {
    // Analysis ID
  analysisId: 1,
  
  updateAnalysisDataTypesInputBody: {
    dataTypes: [
      null,
    ],
  },
};

const data = await apiInstance.v3UpdateAnalysisDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAnalysisDataTypesInputBody** | **UpdateAnalysisDataTypesInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisDataTypesOutputBody**

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

# **v3UpdateFunctionSignature**
> FunctionSignatureEntry v3UpdateFunctionSignature(updateFunctionSignatureInputBody)

Replaces a function\'s parameters, return type and calling convention in full — anything left out of the request is cleared. Parameter and return types are `data_type_id`s belonging to this analysis. Edits an extracted signature only: a function with `has_signature` false is rejected with 404. The stored signature gets a `source_type` of `USER`, and its previous value is retained.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, DataTypesApi } from '@revengai/sdk';
import type { DataTypesApiV3UpdateFunctionSignatureRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new DataTypesApi(configuration);

const request: DataTypesApiV3UpdateFunctionSignatureRequest = {
    // Analysis ID
  analysisId: 1,
    // Function ID
  functionId: 1,
  
  updateFunctionSignatureInputBody: {
    callingConvention: "callingConvention_example",
    parameters: [
      {
        bitLength: 0,
        dataTypeId: 0,
        name: "name_example",
        ordinal: 0,
        storage: {
          kind: "kind_example",
          location: "location_example",
        },
      },
    ],
    returnDataTypeId: 0,
  },
};

const data = await apiInstance.v3UpdateFunctionSignature(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFunctionSignatureInputBody** | **UpdateFunctionSignatureInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**FunctionSignatureEntry**

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


