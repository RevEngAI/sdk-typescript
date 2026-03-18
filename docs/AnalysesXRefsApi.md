# .AnalysesXRefsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getXrefByVaddr**](AnalysesXRefsApi.md#getXrefByVaddr) | **GET** /v2/analyses/{analysis_id}/xrefs/{vaddr} | [Beta] Look up xrefs by virtual address


# **getXrefByVaddr**
> BaseResponseXrefResponse getXrefByVaddr()

**This endpoint is in beta and may change without notice.**

### Example


```typescript
import { createConfiguration, AnalysesXRefsApi } from '@revengai/sdk';
import type { AnalysesXRefsApiGetXrefByVaddrRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesXRefsApi(configuration);

const request: AnalysesXRefsApiGetXrefByVaddrRequest = {
  
  analysisId: 1,
    // Virtual address to match against xrefs
  vaddr: 1,
};

const data = await apiInstance.getXrefByVaddr(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **vaddr** | [**number**] | Virtual address to match against xrefs | defaults to undefined


### Return type

**BaseResponseXrefResponse**

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
**404** | Xref or analysis cache not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


