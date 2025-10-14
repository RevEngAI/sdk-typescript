# .FunctionsRenamingHistoryApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchRenameFunction**](FunctionsRenamingHistoryApi.md#batchRenameFunction) | **POST** /v2/functions/rename/batch | Batch Rename Functions
[**getFunctionNameHistory**](FunctionsRenamingHistoryApi.md#getFunctionNameHistory) | **GET** /v2/functions/history/{function_id} | Get Function Name History
[**renameFunctionId**](FunctionsRenamingHistoryApi.md#renameFunctionId) | **POST** /v2/functions/rename/{function_id} | Rename Function
[**revertFunctionName**](FunctionsRenamingHistoryApi.md#revertFunctionName) | **POST** /v2/functions/history/{function_id}/{history_id} | Revert the function name


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
        newName: "",
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

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

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
    newName: "",
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

[APIKey](README.md#APIKey)

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


