# .FunctionsDataTypesApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateFunctionDataTypesForAnalysis**](FunctionsDataTypesApi.md#generateFunctionDataTypesForAnalysis) | **POST** /v2/analyses/{analysis_id}/functions/data_types | Generate Function Data Types
[**generateFunctionDataTypesForFunctions**](FunctionsDataTypesApi.md#generateFunctionDataTypesForFunctions) | **POST** /v2/functions/data_types | Generate Function Data Types for an arbitrary list of functions
[**getFunctionDataTypes**](FunctionsDataTypesApi.md#getFunctionDataTypes) | **GET** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Get Function Data Types
[**listFunctionDataTypesForAnalysis**](FunctionsDataTypesApi.md#listFunctionDataTypesForAnalysis) | **GET** /v2/analyses/{analysis_id}/functions/data_types | List Function Data Types
[**listFunctionDataTypesForFunctions**](FunctionsDataTypesApi.md#listFunctionDataTypesForFunctions) | **GET** /v2/functions/data_types | List Function Data Types
[**updateFunctionDataTypes**](FunctionsDataTypesApi.md#updateFunctionDataTypes) | **PUT** /v2/analyses/{analysis_id}/functions/{function_id}/data_types | Update Function Data Types


# **generateFunctionDataTypesForAnalysis**
> BaseResponseGenerateFunctionDataTypes generateFunctionDataTypesForAnalysis(functionDataTypesParams)

Submits a request to generate the function data types

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiGenerateFunctionDataTypesForAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiGenerateFunctionDataTypesForAnalysisRequest = {
  
  analysisId: 1,
  
  functionDataTypesParams: {
    functionIds: [
      1,
    ],
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.generateFunctionDataTypesForAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionDataTypesParams** | **FunctionDataTypesParams**|  |
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGenerateFunctionDataTypes**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateFunctionDataTypesForFunctions**
> BaseResponseGenerationStatusList generateFunctionDataTypesForFunctions(functionDataTypesParams)

Submits a request to generate the function data types

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiGenerateFunctionDataTypesForFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiGenerateFunctionDataTypesForFunctionsRequest = {
  
  functionDataTypesParams: {
    functionIds: [
      1,
    ],
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.generateFunctionDataTypesForFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionDataTypesParams** | **FunctionDataTypesParams**|  |
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGenerationStatusList**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFunctionDataTypes**
> BaseResponseFunctionDataTypes getFunctionDataTypes()

Polling endpoint which returns the current status of function generation and once completed the data type information

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiGetFunctionDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiGetFunctionDataTypesRequest = {
  
  analysisId: 1,
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getFunctionDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseFunctionDataTypes**

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

# **listFunctionDataTypesForAnalysis**
> BaseResponseFunctionDataTypesList listFunctionDataTypesForAnalysis()

Returns data types for multiple functions with optional function ID filtering

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiListFunctionDataTypesForAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiListFunctionDataTypesForAnalysisRequest = {
  
  analysisId: 1,
  
  functionIds: [
    1,
  ],
  
  apiKey: "api_key_example",
};

const data = await apiInstance.listFunctionDataTypesForAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **functionIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseFunctionDataTypesList**

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

# **listFunctionDataTypesForFunctions**
> BaseResponseFunctionDataTypesList listFunctionDataTypesForFunctions()

Returns data types for multiple function IDs

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiListFunctionDataTypesForFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiListFunctionDataTypesForFunctionsRequest = {
  
  functionIds: [
    1,
  ],
  
  apiKey: "api_key_example",
};

const data = await apiInstance.listFunctionDataTypesForFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseFunctionDataTypesList**

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

# **updateFunctionDataTypes**
> BaseResponseFunctionDataTypes updateFunctionDataTypes(updateFunctionDataTypes)

Updates the function data types for a given function

### Example


```typescript
import { createConfiguration, FunctionsDataTypesApi } from '@revengai/sdk';
import type { FunctionsDataTypesApiUpdateFunctionDataTypesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsDataTypesApi(configuration);

const request: FunctionsDataTypesApiUpdateFunctionDataTypesRequest = {
  
  analysisId: 1,
  
  functionId: 1,
  
  updateFunctionDataTypes: {
    dataTypesVersion: 1,
    dataTypes: {
      funcTypes: {
        lastChange: "lastChange_example",
        addr: 1,
        size: 1,
        header: {
          lastChange: "lastChange_example",
          name: "name_example",
          addr: 1,
          type: "type_example",
          args: {
            "key": {
              lastChange: "lastChange_example",
              offset: 1,
              name: "name_example",
              type: "type_example",
              size: 1,
            },
          },
        },
        stackVars: {
          "key": {
            lastChange: "lastChange_example",
            offset: 1,
            name: "name_example",
            type: "type_example",
            size: 1,
            addr: 1,
          },
        },
        name: "name_example",
        type: "type_example",
        artifactType: "Function",
      },
      funcDeps: [
        null,
      ],
    },
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.updateFunctionDataTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFunctionDataTypes** | **UpdateFunctionDataTypes**|  |
 **analysisId** | [**number**] |  | defaults to undefined
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseFunctionDataTypes**

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


