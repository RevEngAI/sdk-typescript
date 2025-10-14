# .AnalysesDynamicExecutionApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDynamicExecutionStatus**](AnalysesDynamicExecutionApi.md#getDynamicExecutionStatus) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/status | Get the status of a dynamic execution task
[**getNetworkOverview**](AnalysesDynamicExecutionApi.md#getNetworkOverview) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/network-overview | Get the dynamic execution results for network overview
[**getProcessDump**](AnalysesDynamicExecutionApi.md#getProcessDump) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-dumps/{dump_name} | Get the dynamic execution results for a specific process dump
[**getProcessDumps**](AnalysesDynamicExecutionApi.md#getProcessDumps) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-dumps | Get the dynamic execution results for process dumps
[**getProcessRegistry**](AnalysesDynamicExecutionApi.md#getProcessRegistry) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-registry | Get the dynamic execution results for process registry
[**getProcessTree**](AnalysesDynamicExecutionApi.md#getProcessTree) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/process-tree | Get the dynamic execution results for process tree
[**getTtps**](AnalysesDynamicExecutionApi.md#getTtps) | **GET** /v2/analyses/{analysis_id}/dynamic-execution/ttps | Get the dynamic execution results for ttps


# **getDynamicExecutionStatus**
> BaseResponseDynamicExecutionStatus getDynamicExecutionStatus()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetDynamicExecutionStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetDynamicExecutionStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getDynamicExecutionStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseDynamicExecutionStatus**

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

# **getNetworkOverview**
> BaseResponseNetworkOverviewResponse getNetworkOverview()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetNetworkOverviewRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetNetworkOverviewRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getNetworkOverview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseNetworkOverviewResponse**

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

# **getProcessDump**
> any getProcessDump()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetProcessDumpRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetProcessDumpRequest = {
  
  analysisId: 1,
  
  dumpName: "dump_name_example",
};

const data = await apiInstance.getProcessDump(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **dumpName** | [**string**] |  | defaults to undefined


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

# **getProcessDumps**
> BaseResponseProcessDumps getProcessDumps()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetProcessDumpsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetProcessDumpsRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getProcessDumps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseProcessDumps**

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

# **getProcessRegistry**
> BaseResponseProcessRegistry getProcessRegistry()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetProcessRegistryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetProcessRegistryRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getProcessRegistry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseProcessRegistry**

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

# **getProcessTree**
> BaseResponseProcessTree getProcessTree()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetProcessTreeRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetProcessTreeRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getProcessTree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseProcessTree**

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

# **getTtps**
> BaseResponseTTPS getTtps()


### Example


```typescript
import { createConfiguration, AnalysesDynamicExecutionApi } from '@revengai/sdk';
import type { AnalysesDynamicExecutionApiGetTtpsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesDynamicExecutionApi(configuration);

const request: AnalysesDynamicExecutionApiGetTtpsRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getTtps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseTTPS**

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


