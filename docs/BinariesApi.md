# .BinariesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadZippedBinary**](BinariesApi.md#downloadZippedBinary) | **GET** /v2/binaries/{binary_id}/download-zipped | Downloads a zipped binary with password protection
[**getBinaryAdditionalDetails**](BinariesApi.md#getBinaryAdditionalDetails) | **GET** /v2/binaries/{binary_id}/additional-details | Gets the additional details of a binary
[**getBinaryAdditionalDetailsStatus**](BinariesApi.md#getBinaryAdditionalDetailsStatus) | **GET** /v2/binaries/{binary_id}/additional-details/status | Gets the status of the additional details task for a binary
[**getBinaryDetails**](BinariesApi.md#getBinaryDetails) | **GET** /v2/binaries/{binary_id}/details | Gets the details of a binary
[**getBinaryDieInfo**](BinariesApi.md#getBinaryDieInfo) | **GET** /v2/binaries/{binary_id}/die-info | Gets the die info of a binary
[**getBinaryExternals**](BinariesApi.md#getBinaryExternals) | **GET** /v2/binaries/{binary_id}/externals | Gets the external details of a binary
[**getBinaryRelatedStatus**](BinariesApi.md#getBinaryRelatedStatus) | **GET** /v2/binaries/{binary_id}/related/status | Gets the status of the unpack binary task for a binary
[**getRelatedBinaries**](BinariesApi.md#getRelatedBinaries) | **GET** /v2/binaries/{binary_id}/related | Gets the related binaries of a binary.


# **downloadZippedBinary**
> any downloadZippedBinary()


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


