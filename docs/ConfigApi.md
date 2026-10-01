# .ConfigApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfig**](ConfigApi.md#getConfig) | **GET** /v2/config | Get Config
[**v3GetConfig**](ConfigApi.md#v3GetConfig) | **GET** /v3/config | Get client configuration.
[**v3GetModels**](ConfigApi.md#v3GetModels) | **GET** /v3/models | Get the models available for analysis.


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

# **v3GetConfig**
> GetConfigOutputBody v3GetConfig()

Returns the settings a client needs to configure itself: where to send users to view results, the largest binary the calling user may submit, and what AI decompilation supports. The size limit reflects the caller\'s own role and tier.

### Example


```typescript
import { createConfiguration, ConfigApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.v3GetConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetConfigOutputBody**

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

# **v3GetModels**
> GetModelsOutputBody v3GetModels()

Returns the models a new analysis can be run on, by base name — the architecture and platform variants a model is built for are collapsed into one entry, and models no longer offered are omitted.  **Error codes:** - `500` [`INTERNAL_ERROR`](/errors/INTERNAL_ERROR) — Internal Server Error

### Example


```typescript
import { createConfiguration, ConfigApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.v3GetModels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetModelsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


