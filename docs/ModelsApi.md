# .ModelsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModels**](ModelsApi.md#getModels) | **GET** /v2/models | Gets models


# **getModels**
> BaseResponseModelsResponse getModels()

Gets active models available for analysis.

### Example


```typescript
import { createConfiguration, ModelsApi } from '@revengai/sdk';
import type { ModelsApiGetModelsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ModelsApi(configuration);

const request: ModelsApiGetModelsRequest = {
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getModels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseModelsResponse**

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


