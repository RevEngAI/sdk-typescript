# .AnalysesCoreApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnalysis**](AnalysesCoreApi.md#createAnalysis) | **POST** /v2/analyses | Create Analysis
[**deleteAnalysis**](AnalysesCoreApi.md#deleteAnalysis) | **DELETE** /v2/analyses/{analysis_id} | Delete Analysis
[**getAnalysisBasicInfo**](AnalysesCoreApi.md#getAnalysisBasicInfo) | **GET** /v2/analyses/{analysis_id}/basic | Gets basic analysis information
[**getAnalysisFunctionMap**](AnalysesCoreApi.md#getAnalysisFunctionMap) | **GET** /v2/analyses/{analysis_id}/func_maps | Get Analysis Function Map
[**getAnalysisLogs**](AnalysesCoreApi.md#getAnalysisLogs) | **GET** /v2/analyses/{analysis_id}/logs | Gets the logs of an analysis
[**getAnalysisParams**](AnalysesCoreApi.md#getAnalysisParams) | **GET** /v2/analyses/{analysis_id}/params | Gets analysis param information
[**getAnalysisStatus**](AnalysesCoreApi.md#getAnalysisStatus) | **GET** /v2/analyses/{analysis_id}/status | Gets the status of an analysis
[**listAnalyses**](AnalysesCoreApi.md#listAnalyses) | **GET** /v2/analyses/list | Gets the most recent analyses
[**lookupBinaryId**](AnalysesCoreApi.md#lookupBinaryId) | **GET** /v2/analyses/lookup/{binary_id} | Gets the analysis ID from binary ID
[**requeueAnalysis**](AnalysesCoreApi.md#requeueAnalysis) | **POST** /v2/analyses/{analysis_id}/requeue | Requeue Analysis
[**updateAnalysis**](AnalysesCoreApi.md#updateAnalysis) | **PATCH** /v2/analyses/{analysis_id} | Update Analysis
[**updateAnalysisTags**](AnalysesCoreApi.md#updateAnalysisTags) | **PATCH** /v2/analyses/{analysis_id}/tags | Update Analysis Tags
[**uploadFile**](AnalysesCoreApi.md#uploadFile) | **POST** /v2/upload | Upload File


# **createAnalysis**
> BaseResponseAnalysisCreateResponse createAnalysis(analysisCreateRequest)

Begins an analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiCreateAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiCreateAnalysisRequest = {
  
  analysisCreateRequest: {
    filename: "filename_example",
    sha256Hash: "sha256Hash_example",
    tags: [
      {
        name: "name_example",
      },
    ],
    analysisScope: "PRIVATE",
    symbols: {
      baseAddress: 1,
      functionBoundaries: [
        {
          mangledName: "mangledName_example",
          startAddress: 1,
          endAddress: 1,
        },
      ],
    },
    debugHash: "debugHash_example",
    analysisConfig: {
      scrapeThirdPartyConfig: {
        enabled: false,
      },
      generateCves: false,
      generateSbom: false,
      generateCapabilities: false,
      noCache: false,
      advancedAnalysis: false,
      sandboxConfig: {
        enabled: false,
        commandLineArgs: "",
      },
    },
    binaryConfig: {
      isa: "x86",
      platform: "linux",
      fileFormat: "pe",
    },
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.createAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisCreateRequest** | **AnalysisCreateRequest**|  |
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseAnalysisCreateResponse**

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
**404** | Not Found |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAnalysis**
> BaseResponseDict deleteAnalysis()

Deletes an analysis based on the provided analysis ID.

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiDeleteAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiDeleteAnalysisRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.deleteAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseDict**

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
**404** | Not Found |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnalysisBasicInfo**
> BaseResponseBasic getAnalysisBasicInfo()

Returns basic analysis information for an analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisBasicInfoRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisBasicInfoRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAnalysisBasicInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseBasic**

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

# **getAnalysisFunctionMap**
> BaseResponseAnalysisFunctionMapping getAnalysisFunctionMap()

Returns three maps: a map of function ids to function addresses, it\'s inverse and a map of function addresses to function names.

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisFunctionMapRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisFunctionMapRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAnalysisFunctionMap(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseAnalysisFunctionMapping**

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

# **getAnalysisLogs**
> BaseResponseLogs getAnalysisLogs()

Given an analysis ID gets the current logs of an analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisLogsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisLogsRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAnalysisLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseLogs**

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

# **getAnalysisParams**
> BaseResponseParams getAnalysisParams()

Gets the params that the analysis was run with

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisParamsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisParamsRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAnalysisParams(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseParams**

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

# **getAnalysisStatus**
> BaseResponseStatus getAnalysisStatus()

Given an analysis ID gets the current status of the analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiGetAnalysisStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiGetAnalysisStatusRequest = {
  
  analysisId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getAnalysisStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseStatus**

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

# **listAnalyses**
> BaseResponseRecent listAnalyses()

Gets the most recent analyses provided a scope, this is then paginated, if pages and limit doesnt fit, it increases the limit

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiListAnalysesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiListAnalysesRequest = {
  
  searchTerm: "",
    // The workspace to be viewed (optional)
  workspace: [
    "["personal"]",
  ],
    // The status of the analysis (optional)
  status: [
    "["All"]",
  ],
    // Show analysis belonging to the model (optional)
  modelName: [
    "binnet-0.7-x86-64-windows",
  ],
    // Show analysis that have a dynamic execution with the given status (optional)
  dynamicExecutionStatus: "PENDING",
    // Show analysis belonging to the user (optional)
  usernames: [],
  
  sha256Hash: "sha256_hash_example",
  
  limit: 20,
  
  offset: 0,
  
  orderBy: "created",
  
  order: "ASC",
  
  apiKey: "api_key_example",
};

const data = await apiInstance.listAnalyses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | [**string**] |  | (optional) defaults to ''
 **workspace** | **Array&lt;Workspace&gt;** | The workspace to be viewed | (optional) defaults to undefined
 **status** | **Array&lt;StatusInput&gt;** | The status of the analysis | (optional) defaults to undefined
 **modelName** | **Array&lt;ModelName&gt;** | Show analysis belonging to the model | (optional) defaults to undefined
 **dynamicExecutionStatus** | **DynamicExecutionStatusInput** | Show analysis that have a dynamic execution with the given status | (optional) defaults to undefined
 **usernames** | **Array&lt;string&gt;** | Show analysis belonging to the user | (optional) defaults to undefined
 **sha256Hash** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0
 **orderBy** | **AppApiRestV2AnalysesEnumsOrderBy** |  | (optional) defaults to undefined
 **order** | **Order** |  | (optional) defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseRecent**

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

# **lookupBinaryId**
> any lookupBinaryId()

Given an binary ID gets the ID of an analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiLookupBinaryIdRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiLookupBinaryIdRequest = {
  
  binaryId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.lookupBinaryId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binaryId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


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

# **requeueAnalysis**
> BaseResponseCreated requeueAnalysis(reAnalysisForm)

Re-queues an already uploaded analysis

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiRequeueAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiRequeueAnalysisRequest = {
  
  analysisId: 1,
  
  reAnalysisForm: {
    tags: [],
    commandLineArgs: "",
    priority: 0,
    essential: true,
    modelName: "modelName_example",
    noCache: false,
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.requeueAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reAnalysisForm** | **ReAnalysisForm**|  |
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseCreated**

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
**404** | Not Found |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAnalysis**
> BaseResponseAnalysisDetailResponse updateAnalysis(analysisUpdateRequest)

Updates analysis attributes (binary_name, analysis_scope). User must be the owner.

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiUpdateAnalysisRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiUpdateAnalysisRequest = {
  
  analysisId: 1,
  
  analysisUpdateRequest: {
    binaryName: "binaryName_example",
    analysisScope: "PUBLIC",
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.updateAnalysis(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisUpdateRequest** | **AnalysisUpdateRequest**|  |
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseAnalysisDetailResponse**

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

# **updateAnalysisTags**
> BaseResponseAnalysisUpdateTagsResponse updateAnalysisTags(analysisUpdateTagsRequest)

Updates analysis tags. User must be the owner.

### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiUpdateAnalysisTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiUpdateAnalysisTagsRequest = {
  
  analysisId: 1,
  
  analysisUpdateTagsRequest: {
    tags: [
      "tags_example",
    ],
  },
  
  apiKey: "api_key_example",
};

const data = await apiInstance.updateAnalysisTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisUpdateTagsRequest** | **AnalysisUpdateTagsRequest**|  |
 **analysisId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseAnalysisUpdateTagsResponse**

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

# **uploadFile**
> BaseResponseUploadResponse uploadFile()


### Example


```typescript
import { createConfiguration, AnalysesCoreApi } from '@revengai/sdk';
import type { AnalysesCoreApiUploadFileRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AnalysesCoreApi(configuration);

const request: AnalysesCoreApiUploadFileRequest = {
  
  uploadFileType: "BINARY",
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  
  packedPassword: "packed_password_example",
  
  apiKey: "api_key_example",
  
  forceOverwrite: false,
};

const data = await apiInstance.uploadFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadFileType** | **UploadFileType** |  | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined
 **packedPassword** | [**string**] |  | (optional) defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **forceOverwrite** | [**boolean**] |  | (optional) defaults to false


### Return type

**BaseResponseUploadResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


