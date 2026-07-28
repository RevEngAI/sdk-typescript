# .AnalysesCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserStringToAnalysis**](AnalysesCoreApi.md#addUserStringToAnalysis) | **POST** /v3/analyses/{analysis_id}/user-provided-strings | Add a user-provided string to an analysis.
[**getAnalysisBasicInfo**](AnalysesCoreApi.md#getAnalysisBasicInfo) | **GET** /v3/analyses/{analysis_id}/basic | Get basic analysis information
[**getAnalysisBytes**](AnalysesCoreApi.md#getAnalysisBytes) | **GET** /v3/analyses/{analysis_id}/bytes | Get the bytes of a binary
[**getAnalysisFunctionMatches**](AnalysesCoreApi.md#getAnalysisFunctionMatches) | **GET** /v3/analyses/{analysis_id}/functions/matches | Get function-matching results for an analysis
[**getAnalysisFunctionMatchingStatus**](AnalysesCoreApi.md#getAnalysisFunctionMatchingStatus) | **GET** /v3/analyses/{analysis_id}/functions/matches/status | Get function-matching status for an analysis
[**getDynamicExecutionReport**](AnalysesCoreApi.md#getDynamicExecutionReport) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/report | Get dynamic execution report
[**getDynamicExecutionStatus**](AnalysesCoreApi.md#getDynamicExecutionStatus) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/status | Get dynamic execution status
[**startAnalysisFunctionMatching**](AnalysesCoreApi.md#startAnalysisFunctionMatching) | **POST** /v3/analyses/{analysis_id}/functions/matches | Start function matching for an analysis
[**v3GetAnalysisAutoUnstripStatus**](AnalysesCoreApi.md#v3GetAnalysisAutoUnstripStatus) | **GET** /v3/analyses/{analysis_id}/auto-unstrip/status | Get the auto-unstrip status for an analysis.
[**v3GetAnalysisStrings**](AnalysesCoreApi.md#v3GetAnalysisStrings) | **GET** /v3/analyses/{analysis_id}/functions/strings | List strings for an analysis.
[**v3GetAnalysisStringsStatus**](AnalysesCoreApi.md#v3GetAnalysisStringsStatus) | **GET** /v3/analyses/{analysis_id}/functions/strings/status | Get the string-extraction status for an analysis.
[**v3ListAnalyses**](AnalysesCoreApi.md#v3ListAnalyses) | **GET** /v3/analyses | List analyses
[**v3ListExampleAnalyses**](AnalysesCoreApi.md#v3ListExampleAnalyses) | **GET** /v3/analyses/examples | List example analyses


# **addUserStringToAnalysis**
> any addUserStringToAnalysis(addUserStringInputBody)

Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiAddUserStringToAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiAddUserStringToAnalysisRequest = {
    // Analysis ID
  analysisId: 1,
  
  addUserStringInputBody: {
    string: "string_example",
    virtualAddress: 0,
  },
};

const data = await apiInstance.addUserStringToAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUserStringInputBody** | **AddUserStringInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


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

# **getAnalysisBasicInfo**
> AnalysisBasicInfoOutputBody getAnalysisBasicInfo()

Returns basic metadata for the given analysis including binary details, model, owner, and function count.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisBasicInfoRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisBasicInfoRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.getAnalysisBasicInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisBasicInfoOutputBody**

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

# **getAnalysisBytes**
> void getAnalysisBytes()

Returns a 64kb byte page from the binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisBytesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisBytesRequest = {
    // Analysis ID
  analysisId: 1,
    // 64kb page of binary data (optional)
  page: 0,
};

const data = await apiInstance.getAnalysisBytes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **page** | [**number**] | 64kb page of binary data | (optional) defaults to undefined


### Return type

**void**

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

# **getAnalysisFunctionMatches**
> GetMatchesOutputBody getAnalysisFunctionMatches()

Returns the matches blob when the matching workflow has completed. While the workflow is in progress this endpoint returns the current status with no matches; use /matches/status to poll progress.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisFunctionMatchesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisFunctionMatchesRequest = {
    // Analysis ID
  analysisId: 1,
    // Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. (optional)
  matchId: "match_id_example",
};

const data = await apiInstance.getAnalysisFunctionMatches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **matchId** | [**string**] | Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. | (optional) defaults to undefined


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

# **getAnalysisFunctionMatchingStatus**
> GetMatchesStatusOutputBody getAnalysisFunctionMatchingStatus()

Returns the matching workflow\'s current status. Does not include the matches blob — use GET /matches for that.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisFunctionMatchingStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisFunctionMatchingStatusRequest = {
    // Analysis ID
  analysisId: 1,
    // Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. (optional)
  matchId: "match_id_example",
};

const data = await apiInstance.getAnalysisFunctionMatchingStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **matchId** | [**string**] | Opaque token from a start-matching response. When supplied, returns that specific run instead of the latest. | (optional) defaults to undefined


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

# **getDynamicExecutionReport**
> AnalysisReport getDynamicExecutionReport()

Returns the dynamic execution report JSON for the analysis. Requires the task to be in COMPLETED status.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`DYNAMIC_EXECUTION_INCOMPLETE`](/errors/DYNAMIC_EXECUTION_INCOMPLETE) — Dynamic Execution Incomplete

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetDynamicExecutionReportRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetDynamicExecutionReportRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.getDynamicExecutionReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisReport**

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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDynamicExecutionStatus**
> DynamicExecutionStatusResponse getDynamicExecutionStatus()

Returns the status of the most recent dynamic execution task for the analysis. Returns UNINITIALISED if no task has been started.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetDynamicExecutionStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetDynamicExecutionStatusRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.getDynamicExecutionStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**DynamicExecutionStatusResponse**

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
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startAnalysisFunctionMatching**
> StartMatchingOutputBody startAnalysisFunctionMatching(startMatchingForAnalysisInputBody)

Dispatches the function-matching workflow against every function in the analysis. Returns immediately. Poll the status endpoint for progress; fetch results from the matches endpoint when status=COMPLETED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiStartAnalysisFunctionMatchingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiStartAnalysisFunctionMatchingRequest = {
    // Analysis ID
  analysisId: 1,
  
  startMatchingForAnalysisInputBody: {
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
    minSimilarity: 0,
    noCache: true,
    resultsPerFunction: 1,
  },
};

const data = await apiInstance.startAnalysisFunctionMatching(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startMatchingForAnalysisInputBody** | **StartMatchingForAnalysisInputBody**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


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

# **v3GetAnalysisAutoUnstripStatus**
> AutoUnstripStatusOutputBody v3GetAnalysisAutoUnstripStatus()

Returns the status of the auto-unstrip task for the binary backing the analysis. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiV3GetAnalysisAutoUnstripStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiV3GetAnalysisAutoUnstripStatusRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetAnalysisAutoUnstripStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AutoUnstripStatusOutputBody**

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

# **v3GetAnalysisStrings**
> ListAnalysisStringsOutputBody v3GetAnalysisStrings()

Returns the strings discovered in an analysis, combining function-level and analysis-level strings. Supports value/function-name search, sorting and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiV3GetAnalysisStringsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiV3GetAnalysisStringsRequest = {
    // Analysis ID
  analysisId: 1,
    // Page number (1-indexed). (optional)
  page: 1,
    // Number of results per page. (optional)
  pageSize: 100,
    // Filter by string value (case-insensitive substring match). (optional)
  search: "search_example",
    // How the search term matches string values. (optional)
  searchOperator: "CONTAINS",
    // Filter by function name (case-insensitive substring match). (optional)
  functionSearch: "function_search_example",
    // Field to order results by. (optional)
  orderBy: "value",
    // Sort direction. (optional)
  sortOrder: "ASC",
};

const data = await apiInstance.v3GetAnalysisStrings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **page** | [**number**] | Page number (1-indexed). | (optional) defaults to 1
 **pageSize** | [**number**] | Number of results per page. | (optional) defaults to 100
 **search** | [**string**] | Filter by string value (case-insensitive substring match). | (optional) defaults to undefined
 **searchOperator** | [**&#39;CONTAINS&#39; | &#39;STARTS_WITH&#39;**]**Array<&#39;CONTAINS&#39; &#124; &#39;STARTS_WITH&#39; &#124; &#39;11184809&#39;>** | How the search term matches string values. | (optional) defaults to 'CONTAINS'
 **functionSearch** | [**string**] | Filter by function name (case-insensitive substring match). | (optional) defaults to undefined
 **orderBy** | [**&#39;value&#39; | &#39;length&#39;**]**Array<&#39;value&#39; &#124; &#39;length&#39; &#124; &#39;11184809&#39;>** | Field to order results by. | (optional) defaults to 'value'
 **sortOrder** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** | Sort direction. | (optional) defaults to 'ASC'


### Return type

**ListAnalysisStringsOutputBody**

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

# **v3GetAnalysisStringsStatus**
> GetAnalysisStringsStatusOutputBody v3GetAnalysisStringsStatus()

Returns the status of the string-extraction task for the binary backing the analysis. One of UNINITIALISED, PENDING, RUNNING, COMPLETED, FAILED.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiV3GetAnalysisStringsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiV3GetAnalysisStringsStatusRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3GetAnalysisStringsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**GetAnalysisStringsStatusOutputBody**

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

# **v3ListAnalyses**
> ListAnalysesOutputBody v3ListAnalyses()

Returns a page of analyses visible to the caller, filtered and ordered by the query parameters.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiV3ListAnalysesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiV3ListAnalysesRequest = {
  
  searchTerm: "search_term_example",
    // Leave empty for no filter (optional)
  analysisScope: ["PRIVATE"],
  
  status: [
    "Uploaded",
  ],
  
  modelName: [
    "model_name_example",
  ],
  
  usernames: [
    "usernames_example",
  ],
  
  sha256Hash: "sha256_hash_example",
  
  pageSize: 20,
    // Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination). (optional)
  nextPageToken: "next_page_token_example",
  
  orderBy: "created",
  
  order: "DESC",
};

const data = await apiInstance.v3ListAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | [**string**] |  | (optional) defaults to undefined
 **analysisScope** | **Array<&#39;PRIVATE&#39; &#124; &#39;PUBLIC&#39; &#124; &#39;TEAM&#39; &#124; &#39;11184809&#39;>** | Leave empty for no filter | (optional) defaults to undefined
 **status** | **Array<&#39;Uploaded&#39; &#124; &#39;Queued&#39; &#124; &#39;Complete&#39; &#124; &#39;Error&#39; &#124; &#39;Processing&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to undefined
 **modelName** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **usernames** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **sha256Hash** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 20
 **nextPageToken** | [**string**] | Forward-pagination cursor from a prior response. When set, order_by/order are taken from the token (the sort cannot change mid-pagination). | (optional) defaults to undefined
 **orderBy** | [**&#39;created&#39; | &#39;binary_name&#39; | &#39;binary_size&#39;**]**Array<&#39;created&#39; &#124; &#39;binary_name&#39; &#124; &#39;binary_size&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'created'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'DESC'


### Return type

**ListAnalysesOutputBody**

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
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListExampleAnalyses**
> ListExampleAnalysesOutputBody v3ListExampleAnalyses()

Returns the curated example Analyses.

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request = {};

const data = await apiInstance.v3ListExampleAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListExampleAnalysesOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


