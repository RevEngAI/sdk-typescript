# .FunctionsCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFunctionCallee**](FunctionsCoreApi.md#addFunctionCallee) | **POST** /v3/functions/{function_id}/callees | Add a callee to a function
[**addUserStringToFunction**](FunctionsCoreApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.
[**getFunctionBlocks**](FunctionsCoreApi.md#getFunctionBlocks) | **GET** /v3/functions/{function_id}/blocks | Get function disassembly
[**getFunctionCalleesCallers**](FunctionsCoreApi.md#getFunctionCalleesCallers) | **GET** /v3/functions/{function_id}/callees-callers | Get callees and callers for a function
[**getFunctionCapabilities**](FunctionsCoreApi.md#getFunctionCapabilities) | **GET** /v3/functions/{function_id}/capabilities | Get capabilities for a function
[**getFunctionDetails**](FunctionsCoreApi.md#getFunctionDetails) | **GET** /v3/functions/{function_id} | Get function details
[**getFunctionIndirectCallSites**](FunctionsCoreApi.md#getFunctionIndirectCallSites) | **GET** /v3/functions/{function_id}/indirect-call-sites | Get indirect call sites for a function
[**getFunctionStrings**](FunctionsCoreApi.md#getFunctionStrings) | **GET** /v3/functions/{function_id}/strings | List strings for a function.
[**getFunctionsCalleesCallers**](FunctionsCoreApi.md#getFunctionsCalleesCallers) | **GET** /v3/functions/callees-callers | Get callees and callers for many functions
[**getFunctionsMatches**](FunctionsCoreApi.md#getFunctionsMatches) | **GET** /v3/functions/matches | Get function-matching results for an explicit set of functions
[**getFunctionsMatchingStatus**](FunctionsCoreApi.md#getFunctionsMatchingStatus) | **GET** /v3/functions/matches/status | Get function-matching status for an explicit set of functions
[**getImportedFunction**](FunctionsCoreApi.md#getImportedFunction) | **GET** /v3/analyses/{analysis_id}/imported-functions/{imported_function_id} | Get an imported function with its callers
[**listAnalysisFunctions**](FunctionsCoreApi.md#listAnalysisFunctions) | **GET** /v3/analyses/{analysis_id}/functions | List functions in an analysis
[**listImportedFunctions**](FunctionsCoreApi.md#listImportedFunctions) | **GET** /v3/analyses/{analysis_id}/imported-functions | List imported functions in an analysis
[**startFunctionsMatching**](FunctionsCoreApi.md#startFunctionsMatching) | **POST** /v3/functions/matches | Start function matching for an explicit set of functions
[**v3CanonicalizeFunctionNames**](FunctionsCoreApi.md#v3CanonicalizeFunctionNames) | **POST** /v3/functions/canonical-names | Canonicalize a batch of function names


# **addFunctionCallee**
> any addFunctionCallee(addCalleeInputBody)

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
  
  addCalleeInputBody: {
    calleeFunctionId: 0,
    calleeName: "calleeName_example",
    calleeVaddr: 1,
    isExternal: true,
    thunkedVaddr: 0,
  },
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

**any**

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
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addUserStringToFunction**
> any addUserStringToFunction(addUserStringToFunctionInputBody)

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
  
  addUserStringToFunctionInputBody: {
    string: "string_example",
    virtualAddress: 0,
  },
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

**any**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **getFunctionBlocks**
> DisassemblyOutputBody getFunctionBlocks()

Returns the function\'s disassembly metadata (JSON blob containing basic blocks + local variables) along with parameter and return-type info.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionBlocksRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionBlocksRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionBlocks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**DisassemblyOutputBody**

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

# **getFunctionCalleesCallers**
> CallEdgesOutputBody getFunctionCalleesCallers()

Returns both the outgoing call edges (callees) and incoming call edges (callers) for a single function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCalleesCallersRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCalleesCallersRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionCalleesCallers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CallEdgesOutputBody**

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

# **getFunctionCapabilities**
> CapabilitiesOutputBody getFunctionCapabilities()

Returns the capability findings (CAPA-style behaviour matches) associated with the given function.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionCapabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionCapabilitiesRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionCapabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**CapabilitiesOutputBody**

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

# **getFunctionDetails**
> FunctionDetailsOutputBody getFunctionDetails()

Returns metadata for a single function — name, virtual address, size, debug status, binary it belongs to.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionDetailsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionDetailsRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**FunctionDetailsOutputBody**

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

# **getFunctionIndirectCallSites**
> IndirectCallSitesOutputBody getFunctionIndirectCallSites()

Returns the function\'s indirect call instructions with their resolved call target.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionIndirectCallSitesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionIndirectCallSitesRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionIndirectCallSites(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**IndirectCallSitesOutputBody**

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

# **getFunctionStrings**
> ListFunctionStringsOutputBody getFunctionStrings()

Returns the strings discovered in a function. Supports value search and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetFunctionStringsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetFunctionStringsRequest = {
    // Function ID
  functionId: 1,
    // Page number (1-indexed). (optional)
  page: 1,
    // Number of results per page. (optional)
  pageSize: 100,
    // Filter by string value (case-insensitive substring match). (optional)
  search: "search_example",
};

const data = await apiInstance.getFunctionStrings(request);
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
    // Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. (optional)
  matchId: "match_id_example",
    // Source function IDs whose matches to fetch. Required unless match_id is supplied. (optional)
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
 **matchId** | [**string**] | Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. | (optional) defaults to undefined
 **functionIds** | **Array&lt;number&gt;** | Source function IDs whose matches to fetch. Required unless match_id is supplied. | (optional) defaults to undefined


### Return type

**GetMatchesOutputBody**

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
    // Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. (optional)
  matchId: "match_id_example",
    // Source function IDs whose matches to fetch. Required unless match_id is supplied. (optional)
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
 **matchId** | [**string**] | Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. | (optional) defaults to undefined
 **functionIds** | **Array&lt;number&gt;** | Source function IDs whose matches to fetch. Required unless match_id is supplied. | (optional) defaults to undefined


### Return type

**GetMatchesStatusOutputBody**

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

# **getImportedFunction**
> ImportedFunctionDetailOutputBody getImportedFunction()

Returns a single imported symbol plus the internal functions that call it, resolved via the import\'s PLT/stub addresses within the binary. Answers \"which functions call `free`?\" for binary navigation.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiGetImportedFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiGetImportedFunctionRequest = {
    // Analysis ID
  analysisId: 1,
    // Imported function ID
  importedFunctionId: 1,
};

const data = await apiInstance.getImportedFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **importedFunctionId** | [**number**] | Imported function ID | defaults to undefined


### Return type

**ImportedFunctionDetailOutputBody**

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

# **listImportedFunctions**
> ListImportedFunctionsOutputBody listImportedFunctions()

Returns a paginated list of external/imported symbols (e.g. libc\'s `free`) linked by the analysis\'s binary. These are display-only: they carry no embeddings, cannot be renamed, and never participate in match/diff. `total_count` is the full population size, ignoring pagination.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiListImportedFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiListImportedFunctionsRequest = {
    // Analysis ID
  analysisId: 1,
    // Pagination offset. Defaults to 0. (optional)
  offset: 0,
    // Page size. Defaults to 100. (optional)
  limit: 1,
};

const data = await apiInstance.listImportedFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **offset** | [**number**] | Pagination offset. Defaults to 0. | (optional) defaults to undefined
 **limit** | [**number**] | Page size. Defaults to 100. | (optional) defaults to undefined


### Return type

**ListImportedFunctionsOutputBody**

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
  
  startMatchingForFunctionsInputBody: {
    filters: {
      arch: "x86",
      binaryIds: [
        1,
      ],
      bits: 1,
      collectionIds: [
        1,
      ],
      debugTypes: [
        "debugTypes_example",
      ],
      functionIds: [
        1,
      ],
      platform: "linux",
      userIds: [
        1,
      ],
    },
    functionIds: [
      1,
    ],
    minSimilarity: 0,
    noCache: true,
    resultsPerFunction: 1,
    useCanonicalNames: true,
  },
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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3CanonicalizeFunctionNames**
> CanonicalizeNamesOutputBody v3CanonicalizeFunctionNames(canonicalizeNamesInputBody)

Accepts up to 25 raw function names and returns their canonical forms in the same order. A name with no canonical form is returned unchanged.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `503` [`SERVICE_UNAVAILABLE`](/errors/SERVICE_UNAVAILABLE) — Service Unavailable

### Example


```typescript
import { createConfiguration, FunctionsCoreApi } from '@revengai/sdk';
import type { FunctionsCoreApiV3CanonicalizeFunctionNamesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsCoreApi(configuration);

const request: FunctionsCoreApiV3CanonicalizeFunctionNamesRequest = {
  
  canonicalizeNamesInputBody: {
    names: [
      "names_example",
    ],
  },
};

const data = await apiInstance.v3CanonicalizeFunctionNames(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canonicalizeNamesInputBody** | **CanonicalizeNamesInputBody**|  |


### Return type

**CanonicalizeNamesOutputBody**

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
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


