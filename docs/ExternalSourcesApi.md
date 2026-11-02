# .ExternalSourcesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3GetVirustotalScanOperation**](ExternalSourcesApi.md#v3GetVirustotalScanOperation) | **GET** /v3/operations/virustotal-scan/{binary_id} | Get a VirusTotal scan operation.
[**v3RunVirustotalScan**](ExternalSourcesApi.md#v3RunVirustotalScan) | **POST** /v3/binaries/{binary_id}/virustotal-scan:run | Trigger a VirusTotal lookup for a binary.


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


