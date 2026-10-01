# .ExternalSourcesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExternalTaskVt**](ExternalSourcesApi.md#createExternalTaskVt) | **POST** /v2/analysis/{analysis_id}/external/vt | Pulls data from VirusTotal
[**getVtData**](ExternalSourcesApi.md#getVtData) | **GET** /v2/analysis/{analysis_id}/external/vt | Get VirusTotal data
[**getVtTaskStatus**](ExternalSourcesApi.md#getVtTaskStatus) | **GET** /v2/analysis/{analysis_id}/external/vt/status | Check the status of VirusTotal data retrieval
[**v3GetVirustotalScanOperation**](ExternalSourcesApi.md#v3GetVirustotalScanOperation) | **GET** /v3/operations/virustotal-scan/{binary_id} | Get a VirusTotal scan operation.
[**v3RunVirustotalScan**](ExternalSourcesApi.md#v3RunVirustotalScan) | **POST** /v3/binaries/{binary_id}/virustotal-scan:run | Trigger a VirusTotal lookup for a binary.


# **createExternalTaskVt**
> BaseResponseStr createExternalTaskVt()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiCreateExternalTaskVtRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiCreateExternalTaskVtRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.createExternalTaskVt(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseStr**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |
**409** | Request already queued |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVtData**
> BaseResponseExternalResponse getVtData()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiGetVtDataRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiGetVtDataRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getVtData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseExternalResponse**

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
**404** | No data retrieved from VirusTotal for the given analysis_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVtTaskStatus**
> BaseResponseTaskResponse getVtTaskStatus()


### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiGetVtTaskStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiGetVtTaskStatusRequest = {
  
  analysisId: 1,
};

const data = await apiInstance.getVtTaskStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseTaskResponse**

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

# **v3GetVirustotalScanOperation**
> OperationVirusTotalScanMetadataVirusTotalScanResult v3GetVirustotalScanOperation()

Returns the current state of the most recently triggered VirusTotal lookup for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiV3GetVirustotalScanOperationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiV3GetVirustotalScanOperationRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3GetVirustotalScanOperation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**OperationVirusTotalScanMetadataVirusTotalScanResult**

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

# **v3RunVirustotalScan**
> OperationVirusTotalScanMetadataVirusTotalScanResult v3RunVirustotalScan()

Starts a lookup of the binary\'s content hash against VirusTotal, using the team\'s registered API key, and returns the operation to poll for its outcome. Returns 403 if the team has no valid key registered, and 409 while a lookup is already in progress for this binary.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict - `403` [`NO_VIRUSTOTAL_KEY`](/errors/NO_VIRUSTOTAL_KEY) — No VirusTotal Key

### Example


```typescript
import { createConfiguration, ExternalSourcesApi } from '@revengai/sdk';
import type { ExternalSourcesApiV3RunVirustotalScanRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ExternalSourcesApi(configuration);

const request: ExternalSourcesApiV3RunVirustotalScanRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3RunVirustotalScan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**OperationVirusTotalScanMetadataVirusTotalScanResult**

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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


