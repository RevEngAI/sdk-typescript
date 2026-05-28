# .StringsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserStringToAnalysis**](StringsApi.md#addUserStringToAnalysis) | **POST** /v3/analyses/{analysis_id}/user-provided-strings | Add a user-provided string to an analysis.
[**addUserStringToFunction**](StringsApi.md#addUserStringToFunction) | **POST** /v3/functions/{function_id}/user-provided-strings | Add a user-provided string to a function.


# **addUserStringToAnalysis**
> { [key: string]: any; } addUserStringToAnalysis(addUserStringInputBody)

Attaches a user-provided string to an analysis at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, StringsApi } from '@revengai/sdk';
import type { StringsApiAddUserStringToAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new StringsApi(configuration);

const request: StringsApiAddUserStringToAnalysisRequest = {
    // Analysis ID
  analysisId: 1,
  
  addUserStringInputBody: ,
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

# **addUserStringToFunction**
> { [key: string]: any; } addUserStringToFunction(addUserStringToFunctionInputBody)

Attaches a user-provided string to a function at the given virtual address. The string is stored with source `USER` and complements strings discovered automatically during analysis.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, StringsApi } from '@revengai/sdk';
import type { StringsApiAddUserStringToFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new StringsApi(configuration);

const request: StringsApiAddUserStringToFunctionRequest = {
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


