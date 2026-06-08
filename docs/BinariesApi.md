# .BinariesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadZippedBinary**](BinariesApi.md#downloadZippedBinary) | **GET** /v2/binaries/{binary_id}/download-zipped | Downloads a zipped binary with password protection
[**getBinaryAdditionalDetails**](BinariesApi.md#getBinaryAdditionalDetails) | **GET** /v2/binaries/{binary_id}/additional-details | Gets the additional details of a binary
[**getBinaryAdditionalDetailsStatus**](BinariesApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v2/binaries/{binary_id}/additional-details/status | Gets the status of the additional details task for a binary
[**getBinaryAdditionalDetailsStatus_0**](BinariesApi.md#getBinaryAdditionalDetailsStatus_0) | **GET** /v3/binaries/{binary_id}/additional-details/status | Get the additional-details extraction status for a binary.
[**getBinaryAdditionalDetails_0**](BinariesApi.md#getBinaryAdditionalDetails_0) | **GET** /v3/binaries/{binary_id}/additional-details | Get additional details for a binary.
[**getBinaryDetails**](BinariesApi.md#getBinaryDetails) | **GET** /v2/binaries/{binary_id}/details | Gets the details of a binary
[**getBinaryDieInfo**](BinariesApi.md#getBinaryDieInfo) | **GET** /v2/binaries/{binary_id}/die-info | Gets the die info of a binary
[**getBinaryExternals**](BinariesApi.md#getBinaryExternals) | **GET** /v2/binaries/{binary_id}/externals | Gets the external details of a binary
[**getBinaryRelatedStatus**](BinariesApi.md#getBinaryRelatedStatus) | **GET** /v2/binaries/{binary_id}/related/status | Gets the status of the unpack binary task for a binary
[**getRelatedBinaries**](BinariesApi.md#getRelatedBinaries) | **GET** /v2/binaries/{binary_id}/related | Gets the related binaries of a binary.


# **downloadZippedBinary**
> HttpFile downloadZippedBinary()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiDownloadZippedBinaryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiDownloadZippedBinaryRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.downloadZippedBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Download file |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaryAdditionalDetails**
> BaseResponseBinaryAdditionalResponse getBinaryAdditionalDetails()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryAdditionalDetailsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryAdditionalDetailsRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBinaryAdditionalResponse**

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

# **getBinaryAdditionalDetailsStatus**
> BaseResponseAdditionalDetailsStatusResponse getBinaryAdditionalDetailsStatus()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryAdditionalDetailsStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryAdditionalDetailsStatusRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetailsStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseAdditionalDetailsStatusResponse**

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

# **getBinaryAdditionalDetailsStatus_0**
> GetAdditionalDetailsStatusOutputBody getBinaryAdditionalDetailsStatus_0()

Returns the status of the additional-details extraction task. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryAdditionalDetailsStatus0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryAdditionalDetailsStatus0Request = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetailsStatus_0(request);
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

# **getBinaryAdditionalDetails_0**
> GetAdditionalDetailsOutputBody getBinaryAdditionalDetails_0()

Returns structured metadata extracted by the additional-details pipeline for the given binary. Returns `null` for `details` when the pipeline has not yet run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryAdditionalDetails0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryAdditionalDetails0Request = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.getBinaryAdditionalDetails_0(request);
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

# **getBinaryDetails**
> BaseResponseBinaryDetailsResponse getBinaryDetails()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryDetailsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryDetailsRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBinaryDetailsResponse**

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

# **getBinaryDieInfo**
> BaseResponseListDieMatch getBinaryDieInfo()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryDieInfoRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryDieInfoRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryDieInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseListDieMatch**

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

# **getBinaryExternals**
> BaseResponseBinaryExternalsResponse getBinaryExternals()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryExternalsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryExternalsRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryExternals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBinaryExternalsResponse**

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

# **getBinaryRelatedStatus**
> BaseResponseBinariesRelatedStatusResponse getBinaryRelatedStatus()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetBinaryRelatedStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetBinaryRelatedStatusRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getBinaryRelatedStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBinariesRelatedStatusResponse**

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

# **getRelatedBinaries**
> BaseResponseChildBinariesResponse getRelatedBinaries()


### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiGetRelatedBinariesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiGetRelatedBinariesRequest = {
  
  binaryId: 1,
};

const data = await apiInstance.getRelatedBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseChildBinariesResponse**

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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


