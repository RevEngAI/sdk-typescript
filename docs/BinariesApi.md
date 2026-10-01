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
[**v3DownloadBinaryZipped**](BinariesApi.md#v3DownloadBinaryZipped) | **GET** /v3/binaries/{binary_id}/download-zipped | Download a binary as a password-protected zip.
[**v3GetBinaryDieInfo**](BinariesApi.md#v3GetBinaryDieInfo) | **GET** /v3/binaries/{binary_id}/die-info | Get Detect It Easy matches for a binary.
[**v3GetBinaryExternals**](BinariesApi.md#v3GetBinaryExternals) | **GET** /v3/binaries/{binary_id}/externals | Get third-party threat-intel lookups for a binary.
[**v3GetBinaryRelated**](BinariesApi.md#v3GetBinaryRelated) | **GET** /v3/binaries/{binary_id}/related | Get the binaries related to this one by unpacking.
[**v3GetBinaryRelatedStatus**](BinariesApi.md#v3GetBinaryRelatedStatus) | **GET** /v3/binaries/{binary_id}/related/status | Get the archive-unpacking status for a binary.
[**v3SearchBinaries**](BinariesApi.md#v3SearchBinaries) | **GET** /v3/binaries | Search binaries
[**v3UploadFile**](BinariesApi.md#v3UploadFile) | **POST** /v3/upload | Upload a file.


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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

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

# **v3DownloadBinaryZipped**
> void v3DownloadBinaryZipped()

Streams the binary\'s uploaded file back as a zip archive, encrypted with a fixed password (`infected`) that deters antivirus scanning in transit rather than protecting confidentiality. Only the binary\'s owner, or an admin/superadmin, may download it; an internally-managed account\'s binary can only be downloaded by a superadmin.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3DownloadBinaryZippedRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3DownloadBinaryZippedRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3DownloadBinaryZipped(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**void**

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

# **v3GetBinaryDieInfo**
> GetDieInfoOutputBody v3GetBinaryDieInfo()

Returns the signatures Detect It Easy recognised in the binary — packers, compilers and file types — with the version it could extract. Empty when detection has not run or recognised nothing.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3GetBinaryDieInfoRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3GetBinaryDieInfoRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3GetBinaryDieInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetDieInfoOutputBody**

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

# **v3GetBinaryExternals**
> GetBinaryExternalsOutputBody v3GetBinaryExternals()

Returns VirusTotal and MalwareBazaar lookup results for the binary\'s content hash. `externals` is null until at least one lookup has run.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3GetBinaryExternalsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3GetBinaryExternalsRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3GetBinaryExternals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetBinaryExternalsOutputBody**

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

# **v3GetBinaryRelated**
> GetRelatedBinariesOutputBody v3GetBinaryRelated()

Returns the binaries unpacked out of this one, and the archive it came out of when it was not uploaded directly. A related binary that has never been analysed carries a null `analysis_id`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3GetBinaryRelatedRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3GetBinaryRelatedRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3GetBinaryRelated(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetRelatedBinariesOutputBody**

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

# **v3GetBinaryRelatedStatus**
> GetRelatedStatusOutputBody v3GetBinaryRelatedStatus()

Returns the status of the task that unpacks an archive into its contents, which is what decides whether the related-binary list is still filling up. One of `UNINITIALISED`, `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3GetBinaryRelatedStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3GetBinaryRelatedStatusRequest = {
    // Binary ID
  binaryId: 1,
};

const data = await apiInstance.v3GetBinaryRelatedStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] | Binary ID | defaults to undefined


### Return type

**GetRelatedStatusOutputBody**

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

# **v3SearchBinaries**
> SearchBinariesOutputBody v3SearchBinaries()

Searches for binaries visible to the caller. At least one of partial_name, partial_sha256, tags, or model_name must be provided.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3SearchBinariesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3SearchBinariesRequest = {
    // Partial or full binary name to search for (optional)
  partialName: "partial_name_example",
    // Partial or full SHA-256 hash to search for (optional)
  partialSha256: "partial_sha256_example",
    // Restrict results to binaries carrying at least one of these tags (optional)
  tags: [
    "tags_example",
  ],
    // Restrict results to binaries analysed with this model (optional)
  modelName: "model_name_example",
    // Restrict results to files the caller uploaded themself (optional)
  userFilesOnly: false,
    // A binary ID to exclude from the results (optional)
  excludeBinaryId: 1,
    // Restrict results to binaries owned by one of these user IDs (optional)
  userIds: [
    1,
  ],
    // Maximum results to return (optional)
  limit: 10,
    // Number of results to skip (optional)
  offset: 0,
};

const data = await apiInstance.v3SearchBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialName** | [**string**] | Partial or full binary name to search for | (optional) defaults to undefined
 **partialSha256** | [**string**] | Partial or full SHA-256 hash to search for | (optional) defaults to undefined
 **tags** | **Array&lt;string&gt;** | Restrict results to binaries carrying at least one of these tags | (optional) defaults to undefined
 **modelName** | [**string**] | Restrict results to binaries analysed with this model | (optional) defaults to undefined
 **userFilesOnly** | [**boolean**] | Restrict results to files the caller uploaded themself | (optional) defaults to false
 **excludeBinaryId** | [**number**] | A binary ID to exclude from the results | (optional) defaults to undefined
 **userIds** | **Array&lt;number&gt;** | Restrict results to binaries owned by one of these user IDs | (optional) defaults to undefined
 **limit** | [**number**] | Maximum results to return | (optional) defaults to 10
 **offset** | [**number**] | Number of results to skip | (optional) defaults to 0


### Return type

**SearchBinariesOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3UploadFile**
> UploadOutputBody v3UploadFile()

Uploads a binary, debug symbol, packed sample, or firmware image, keyed by its SHA-256 hash. A BINARY upload from a non-system caller also detects the file\'s architecture and OS so POST /v3/analyses knows whether it can run static analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `413` [`REQUEST_ENTITY_TOO_LARGE`](/errors/REQUEST_ENTITY_TOO_LARGE) — Request Entity Too Large

### Example


```typescript
import { createConfiguration, BinariesApi } from '@revengai/sdk';
import type { BinariesApiV3UploadFileRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BinariesApi(configuration);

const request: BinariesApiV3UploadFileRequest = {
    // The file\\\'s raw bytes.
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // The kind of file being uploaded.
  uploadFileType: "BINARY",
    // Re-upload and overwrite even if a file with this hash already exists. (optional)
  forceOverwrite: true,
};

const data = await apiInstance.v3UploadFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | The file\\\&#39;s raw bytes. | defaults to undefined
 **uploadFileType** | [**string**]**Array<&#39;BINARY&#39; &#124; &#39;DEBUG&#39; &#124; &#39;PACKED&#39; &#124; &#39;FIRMWARE&#39; &#124; &#39;11184809&#39;>** | The kind of file being uploaded. | defaults to undefined
 **forceOverwrite** | [**boolean**] | Re-upload and overwrite even if a file with this hash already exists. | (optional) defaults to undefined


### Return type

**UploadOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**413** | Request Entity Too Large |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


