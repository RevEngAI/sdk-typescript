# .FirmwareApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBinariesForFirmwareTask**](FirmwareApi.md#getBinariesForFirmwareTask) | **GET** /v2/firmware/get-binaries/{task_id} | Upload firmware for unpacking
[**uploadFirmware**](FirmwareApi.md#uploadFirmware) | **POST** /v2/firmware | Upload firmware for unpacking


# **getBinariesForFirmwareTask**
> any getBinariesForFirmwareTask()

Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.

### Example


```typescript
import { createConfiguration, FirmwareApi } from '@revengai/sdk';
import type { FirmwareApiGetBinariesForFirmwareTaskRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiGetBinariesForFirmwareTaskRequest = {
  
  taskId: "task_id_example",
};

const data = await apiInstance.getBinariesForFirmwareTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


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

# **uploadFirmware**
> any uploadFirmware()

Uploads a firmware file and begins a \'Firmware Unpacker\' task. Returns a result identifier, which can be used to poll for the response.

### Example


```typescript
import { createConfiguration, FirmwareApi } from '@revengai/sdk';
import type { FirmwareApiUploadFirmwareRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FirmwareApi(configuration);

const request: FirmwareApiUploadFirmwareRequest = {
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  
  password: "password_example",
};

const data = await apiInstance.uploadFirmware(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | defaults to undefined
 **password** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


