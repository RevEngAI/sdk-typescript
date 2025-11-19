# .FunctionsBlockCommentsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateBlockCommentsForBlockInFunction**](FunctionsBlockCommentsApi.md#generateBlockCommentsForBlockInFunction) | **POST** /v2/functions/{function_id}/block-comments/single | Generate block comments for a specific block in a function
[**generateBlockCommentsForFunction**](FunctionsBlockCommentsApi.md#generateBlockCommentsForFunction) | **POST** /v2/functions/{function_id}/block-comments | Generate block comments for a function
[**generateOverviewCommentForFunction**](FunctionsBlockCommentsApi.md#generateOverviewCommentForFunction) | **POST** /v2/functions/{function_id}/block-comments/overview | Generate overview comment for a function


# **generateBlockCommentsForBlockInFunction**
> BaseResponseBlockCommentsGenerationForFunctionResponse generateBlockCommentsForBlockInFunction(block)


### Example


```typescript
import { createConfiguration, FunctionsBlockCommentsApi } from '@revengai/sdk';
import type { FunctionsBlockCommentsApiGenerateBlockCommentsForBlockInFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsBlockCommentsApi(configuration);

const request: FunctionsBlockCommentsApiGenerateBlockCommentsForBlockInFunctionRequest = {
  
  functionId: 1,
  
  block: {
    virtualAddress: 1,
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.generateBlockCommentsForBlockInFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **block** | **Block**|  |
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseBlockCommentsGenerationForFunctionResponse**

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

# **generateBlockCommentsForFunction**
> BaseResponseBlockCommentsGenerationForFunctionResponse generateBlockCommentsForFunction()


### Example


```typescript
import { createConfiguration, FunctionsBlockCommentsApi } from '@revengai/sdk';
import type { FunctionsBlockCommentsApiGenerateBlockCommentsForFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsBlockCommentsApi(configuration);

const request: FunctionsBlockCommentsApiGenerateBlockCommentsForFunctionRequest = {
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.generateBlockCommentsForFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseBlockCommentsGenerationForFunctionResponse**

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

# **generateOverviewCommentForFunction**
> BaseResponseBlockCommentsOverviewGenerationResponse generateOverviewCommentForFunction()


### Example


```typescript
import { createConfiguration, FunctionsBlockCommentsApi } from '@revengai/sdk';
import type { FunctionsBlockCommentsApiGenerateOverviewCommentForFunctionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new FunctionsBlockCommentsApi(configuration);

const request: FunctionsBlockCommentsApiGenerateOverviewCommentForFunctionRequest = {
  
  functionId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.generateOverviewCommentForFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseBlockCommentsOverviewGenerationResponse**

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


