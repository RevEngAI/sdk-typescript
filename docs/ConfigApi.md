# .ConfigApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfig**](ConfigApi.md#getConfig) | **GET** /v2/config | Get Config


# **getConfig**
> BaseResponseConfigResponse getConfig()

General configuration endpoint

### Example


```typescript
import { createConfiguration, ConfigApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.getConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BaseResponseConfigResponse**

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


