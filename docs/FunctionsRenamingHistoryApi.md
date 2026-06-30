# .FunctionsRenamingHistoryApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchRenameFunction**](FunctionsRenamingHistoryApi.md#batchRenameFunction) | **POST** /v2/functions/rename/batch | Batch Rename Functions
[**batchRenameFunctions**](FunctionsRenamingHistoryApi.md#batchRenameFunctions) | **POST** /v3/functions/rename | Batch rename functions
[**getFunctionHistory**](FunctionsRenamingHistoryApi.md#getFunctionHistory) | **GET** /v3/functions/{function_id}/history | Get function name history
[**getFunctionNameHistory**](FunctionsRenamingHistoryApi.md#getFunctionNameHistory) | **GET** /v2/functions/history/{function_id} | Get Function Name History
[**renameFunction**](FunctionsRenamingHistoryApi.md#renameFunction) | **POST** /v3/functions/{function_id}/rename | Rename a function
[**renameFunctionId**](FunctionsRenamingHistoryApi.md#renameFunctionId) | **POST** /v2/functions/rename/{function_id} | Rename Function
[**revertFunctionName**](FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v2/functions/history/{function_id}/{history_id} | Revert the function name
[**revertFunctionName_0**](FunctionsRenamingHistoryApi.md#revertFunctionName_0) | **POST** /v3/functions/{function_id}/history/{history_id}/revert | Revert function name


# **batchRenameFunction**
> BaseResponse batchRenameFunction(functionsListRename)

Renames a list of functions using the function IDs   Will record name changes in history

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiBatchRenameFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiBatchRenameFunctionRequest = {
  
  functionsListRename: {
    functions: [
      {
        functionId: 1,
        newName: "newName_example",
        newMangledName: "newMangledName_example",
      },
    ],
  },
};

const data = await apiInstance.batchRenameFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionsListRename** | **FunctionsListRename**|  |


### Return type

**BaseResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchRenameFunctions**
> BatchRenameOutputBody batchRenameFunctions(batchRenameInputBody)

Renames multiple functions in a single request. Records name changes in history and copies data types from source functions.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiBatchRenameFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiBatchRenameFunctionsRequest = {
  
  batchRenameInputBody: ,
};

const data = await apiInstance.batchRenameFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchRenameInputBody** | **BatchRenameInputBody**|  |


### Return type

**BatchRenameOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFunctionHistory**
> Array<HistoryEntry> getFunctionHistory()

Returns the name change history for a function, newest first.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiGetFunctionHistoryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiGetFunctionHistoryRequest = {
    // Function ID
  functionId: 1,
};

const data = await apiInstance.getFunctionHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**Array<HistoryEntry>**

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

# **getFunctionNameHistory**
> BaseResponseListFunctionNameHistory getFunctionNameHistory()

Gets the name history of a function using the function ID

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiGetFunctionNameHistoryRequest = {
  
  functionId: 1,
};

const data = await apiInstance.getFunctionNameHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseListFunctionNameHistory**

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

# **renameFunction**
> RenameOutputBody renameFunction(renameInputBody)

Renames a single function and records the change in history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiRenameFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiRenameFunctionRequest = {
    // Function ID
  functionId: 1,
  
  renameInputBody: ,
};

const data = await apiInstance.renameFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameInputBody** | **RenameInputBody**|  |
 **functionId** | [**number**] | Function ID | defaults to undefined


### Return type

**RenameOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

# **renameFunctionId**
> BaseResponse renameFunctionId(functionRename)

Renames a function using the function ID   Will record name change history

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiRenameFunctionIdRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiRenameFunctionIdRequest = {
  
  functionId: 1,
  
  functionRename: {
    newName: "newName_example",
    newMangledName: "newMangledName_example",
  },
};

const data = await apiInstance.renameFunctionId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionRename** | **FunctionRename**|  |
 **functionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revertFunctionName**
> BaseResponse revertFunctionName()

Reverts the function name to a previous name using the function ID and history ID

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiRevertFunctionNameRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiRevertFunctionNameRequest = {
  
  functionId: 1,
  
  historyId: 1,
};

const data = await apiInstance.revertFunctionName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined
 **historyId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponse**

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

# **revertFunctionName_0**
> { [key: string]: any; } revertFunctionName_0()

Reverts a function\'s name to a previous value from its history.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, FunctionsRenamingHistoryApi } from '@revengai/sdk';
import type { FunctionsRenamingHistoryApiRevertFunctionName0Request } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsRenamingHistoryApi(configuration);

const request: FunctionsRenamingHistoryApiRevertFunctionName0Request = {
    // Function ID
  functionId: 1,
    // History ID to revert to
  historyId: 1,
};

const data = await apiInstance.revertFunctionName_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | Function ID | defaults to undefined
 **historyId** | [**number**] | History ID to revert to | defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


