# .BinariesCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBinaryAdditionalDetails**](BinariesCoreApi.md#getBinaryAdditionalDetails) | **GET** /v3/binaries/{binary_id}/additional-details | Get additional details for a binary.
[**getBinaryAdditionalDetailsStatus**](BinariesCoreApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v3/binaries/{binary_id}/additional-details/status | Get the additional-details extraction status for a binary.


# **getBinaryAdditionalDetails**
> GetAdditionalDetailsOutputBody getBinaryAdditionalDetails()

Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesCoreApi } from '@revengai/sdk';
import type { BinariesCoreApiGetBinaryAdditionalDetailsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesCoreApi(configuration);

const request: BinariesCoreApiGetBinaryAdditionalDetailsRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetAdditionalDetailsOutputBody**

### Authorization

[APIKey](README.md#APIKey)

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

# **getBinaryAdditionalDetailsStatus**
> GetAdditionalDetailsStatusOutputBody getBinaryAdditionalDetailsStatus()

Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesCoreApi } from '@revengai/sdk';
import type { BinariesCoreApiGetBinaryAdditionalDetailsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesCoreApi(configuration);

const request: BinariesCoreApiGetBinaryAdditionalDetailsStatusRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetailsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetAdditionalDetailsStatusOutputBody**

### Authorization

[APIKey](README.md#APIKey)

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


