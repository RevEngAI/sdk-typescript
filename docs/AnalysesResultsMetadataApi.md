# .AnalysesResultsMetadataApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalysisFunctionsPaginated**](AnalysesResultsMetadataApi.md#getAnalysisFunctionsPaginated) | **GET** /v2/analyses/{analysis_id}/functions | Get functions from analysis
[**getCapabilities**](AnalysesResultsMetadataApi.md#getCapabilities) | **GET** /v2/analyses/{analysis_id}/capabilities | Gets the capabilities from the analysis
[**getFunctionsList**](AnalysesResultsMetadataApi.md#getFunctionsList) | **GET** /v2/analyses/{analysis_id}/functions/list | Gets functions from analysis
[**getTags**](AnalysesResultsMetadataApi.md#getTags) | **GET** /v2/analyses/{analysis_id}/tags | Get function tags with maliciousness score
[**v3GetAnalysisFeedback**](AnalysesResultsMetadataApi.md#v3GetAnalysisFeedback) | **GET** /v3/analyses/{analysis_id}/feedback/{type} | Get the caller\&#39;s feedback on an analysis.
[**v3GetAnalysisXref**](AnalysesResultsMetadataApi.md#v3GetAnalysisXref) | **GET** /v3/analyses/{analysis_id}/xrefs/{vaddr} | Look up xrefs by virtual address.
[**v3ListAnalysisCapabilities**](AnalysesResultsMetadataApi.md#v3ListAnalysisCapabilities) | **GET** /v3/analyses/{analysis_id}/capabilities | List the capabilities found in an analysis.
[**v3ListAnalysisTags**](AnalysesResultsMetadataApi.md#v3ListAnalysisTags) | **GET** /v3/analyses/{analysis_id}/tags | List the tags on an analysis.
[**v3UpsertAnalysisFeedback**](AnalysesResultsMetadataApi.md#v3UpsertAnalysisFeedback) | **PUT** /v3/analyses/{analysis_id}/feedback/{type} | Record feedback on an analysis.


# **getAnalysisFunctionsPaginated**
> BaseResponseAnalysisFunctionsList getAnalysisFunctionsPaginated()

Returns a paginated list of functions identified during analysis

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetAnalysisFunctionsPaginatedRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetAnalysisFunctionsPaginatedRequest = {
  
  analysisId: 1,
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 1000,
};

const data = await apiInstance.getAnalysisFunctionsPaginated(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 1000


### Return type

**BaseResponseAnalysisFunctionsList**

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

# **getCapabilities**
> BaseResponseCapabilities getCapabilities()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetCapabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetCapabilitiesRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getCapabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCapabilities**

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

# **getFunctionsList**
> BaseResponseAnalysisFunctions getFunctionsList()

Gets the functions identified during analysis

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetFunctionsListRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetFunctionsListRequest = {
  
  analysisId: 1,
  
  searchTerm: "search_term_example",
  
  minVAddr: 1,
  
  maxVAddr: 1,
  
  includeEmbeddings: true,
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 1000,
};

const data = await apiInstance.getFunctionsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **searchTerm** | [**string**] |  | (optional) defaults to undefined
 **minVAddr** | [**number**] |  | (optional) defaults to undefined
 **maxVAddr** | [**number**] |  | (optional) defaults to undefined
 **includeEmbeddings** | [**boolean**] |  | (optional) defaults to true
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 1000


### Return type

**BaseResponseAnalysisFunctions**

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

# **getTags**
> BaseResponseAnalysisTags getTags()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetTagsRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseAnalysisTags**

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

# **v3GetAnalysisFeedback**
> RecordedFeedback v3GetAnalysisFeedback()

Returns the feedback the caller recorded for one kind of result on this analysis, or null fields when they have not recorded any.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiV3GetAnalysisFeedbackRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiV3GetAnalysisFeedbackRequest = {
    // Analysis ID
  analysisId: 1,
    // What the feedback is about
  type: "function-matching",
};

const data = await apiInstance.v3GetAnalysisFeedback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **type** | [**&#39;function-matching&#39;**]**Array<&#39;function-matching&#39; &#124; &#39;11184809&#39;>** | What the feedback is about | defaults to undefined


### Return type

**RecordedFeedback**

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

# **v3GetAnalysisXref**
> AnalysisXrefOutputBody v3GetAnalysisXref()

Returns every cross-reference into and out of a virtual address, read from the analysis\' cache.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiV3GetAnalysisXrefRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiV3GetAnalysisXrefRequest = {
    // Analysis ID
  analysisId: 1,
    // Virtual address to match against xrefs
  vaddr: 1,
};

const data = await apiInstance.v3GetAnalysisXref(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **vaddr** | [**number**] | Virtual address to match against xrefs | defaults to undefined


### Return type

**AnalysisXrefOutputBody**

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

# **v3ListAnalysisCapabilities**
> AnalysisCapabilitiesOutputBody v3ListAnalysisCapabilities()

Returns the capabilities the binary-analysis pipeline attributed to the analysis\' functions, ordered by function address. This is the static capability set recorded against the binary, not the AI capabilities agent\'s findings, which are triggered by `/v3/analyses/{analysis_id}/capabilities:run`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiV3ListAnalysisCapabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiV3ListAnalysisCapabilitiesRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3ListAnalysisCapabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisCapabilitiesOutputBody**

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

# **v3ListAnalysisTags**
> AnalysisTagsOutputBody v3ListAnalysisTags()

Returns every tag on the analysis\' binary, of any origin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiV3ListAnalysisTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiV3ListAnalysisTagsRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.v3ListAnalysisTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**AnalysisTagsOutputBody**

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

# **v3UpsertAnalysisFeedback**
> void v3UpsertAnalysisFeedback(feedbackSubmission)

Records how useful the caller found one kind of result for this analysis, with any context the client captured. Replaces any feedback they recorded previously.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiV3UpsertAnalysisFeedbackRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiV3UpsertAnalysisFeedbackRequest = {
    // Analysis ID
  analysisId: 1,
    // What the feedback is about
  type: "function-matching",
  
  feedbackSubmission: {
    metadata: {},
    sentiment: "POSITIVE",
  },
};

const data = await apiInstance.v3UpsertAnalysisFeedback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackSubmission** | **FeedbackSubmission**|  |
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **type** | [**&#39;function-matching&#39;**]**Array<&#39;function-matching&#39; &#124; &#39;11184809&#39;>** | What the feedback is about | defaults to undefined


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


