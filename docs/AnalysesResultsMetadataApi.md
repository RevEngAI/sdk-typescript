# .AnalysesResultsMetadataApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCapabilities**](AnalysesResultsMetadataApi.md#getCapabilities) | **GET** /v2/analyses/{analysis_id}/capabilities | Gets the capabilities from the analysis
[**getCommunities**](AnalysesResultsMetadataApi.md#getCommunities) | **GET** /v2/analyses/{analysis_id}/communities | Gets the communities found in the analysis
[**getFunctionsList**](AnalysesResultsMetadataApi.md#getFunctionsList) | **GET** /v2/analyses/{analysis_id}/functions/list | Gets functions from analysis
[**getPdf**](AnalysesResultsMetadataApi.md#getPdf) | **GET** /v2/analyses/{analysis_id}/pdf | Gets the PDF found in the analysis
[**getSbom**](AnalysesResultsMetadataApi.md#getSbom) | **GET** /v2/analyses/{analysis_id}/sbom | Gets the software-bill-of-materials (SBOM) found in the analysis
[**getTags**](AnalysesResultsMetadataApi.md#getTags) | **GET** /v2/analyses/{analysis_id}/tags | Get function tags with maliciousness score
[**getVulnerabilities**](AnalysesResultsMetadataApi.md#getVulnerabilities) | **GET** /v2/analyses/{analysis_id}/vulnerabilities | Gets the vulnerabilities found in the analysis


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

# **getCommunities**
> BaseResponseCommunities getCommunities()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetCommunitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetCommunitiesRequest = {
  
  analysisId: 1,
    // The user name to limit communities to (optional)
  userName: "user_name_example",
};

const data = await apiInstance.getCommunities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **userName** | [**string**] | The user name to limit communities to | (optional) defaults to undefined


### Return type

**BaseResponseCommunities**

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


### Return type

**BaseResponseAnalysisFunctions**

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

# **getPdf**
> any getPdf()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetPdfRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetPdfRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**any**

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

# **getSbom**
> BaseResponseListSBOM getSbom()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetSbomRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetSbomRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getSbom(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseListSBOM**

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

# **getVulnerabilities**
> BaseResponseVulnerabilities getVulnerabilities()


### Example


```typescript
import { createConfiguration, AnalysesResultsMetadataApi } from '@revengai/sdk';
import type { AnalysesResultsMetadataApiGetVulnerabilitiesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesResultsMetadataApi(configuration);

const request: AnalysesResultsMetadataApiGetVulnerabilitiesRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getVulnerabilities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseVulnerabilities**

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


