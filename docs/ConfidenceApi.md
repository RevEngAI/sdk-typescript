# .ConfidenceApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalysisTagScore**](ConfidenceApi.md#getAnalysisTagScore) | **POST** /v2/confidence/analysis/{analysis_id}/tag_score | Calculate Tag Confidence Score for an Analysis
[**getAnalysisThreatScore**](ConfidenceApi.md#getAnalysisThreatScore) | **GET** /v2/confidence/analysis/{analysis_id}/threat_score | Calculate Threat Score for Binary
[**getFunctionsNameScore**](ConfidenceApi.md#getFunctionsNameScore) | **POST** /v2/confidence/functions/name_score | Calculate function name confidence for a set of Functions
[**getFunctionsThreatScore**](ConfidenceApi.md#getFunctionsThreatScore) | **POST** /v2/confidence/functions/threat_score | Calculate Threat Score for a set of Functions


# **getAnalysisTagScore**
> BaseResponseListTagOriginBoxPlotConfidence getAnalysisTagScore(tagConfidenceBody)

Accepts a analysis ID and a list of tags, returns the confidence score for each tag in the list

### Example


```typescript
import { createConfiguration, ConfidenceApi } from '@revengai/sdk';
import type { ConfidenceApiGetAnalysisTagScoreRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfidenceApi(configuration);

const request: ConfidenceApiGetAnalysisTagScoreRequest = {
    // The analysis to calculate the tag scores for
  analysisId: 1,
  
  tagConfidenceBody: {
    tags: [
      {
        tag: "tag_example",
        origin: "RevEng-Malware",
      },
    ],
  },
};

const data = await apiInstance.getAnalysisTagScore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagConfidenceBody** | **TagConfidenceBody**|  |
 **analysisId** | [**number**] | The analysis to calculate the tag scores for | defaults to undefined


### Return type

**BaseResponseListTagOriginBoxPlotConfidence**

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

# **getAnalysisThreatScore**
> BaseResponseBoxPlotConfidence getAnalysisThreatScore()

Accepts a binary ID and returns the threat score for that binary

### Example


```typescript
import { createConfiguration, ConfidenceApi } from '@revengai/sdk';
import type { ConfidenceApiGetAnalysisThreatScoreRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfidenceApi(configuration);

const request: ConfidenceApiGetAnalysisThreatScoreRequest = {
    // The analysis to calculate the threat score for
  analysisId: 1,
};

const data = await apiInstance.getAnalysisThreatScore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | The analysis to calculate the threat score for | defaults to undefined


### Return type

**BaseResponseBoxPlotConfidence**

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

# **getFunctionsNameScore**
> BaseResponseListFunctionBoxPlotConfidence getFunctionsNameScore(functionNameConfidenceBody)

Accepts a list of function ids mapped to a function name, for each function we return a confidence score in that being the correct name for each function. Each function must be from the same model, or you may find some functions missing in the return.

### Example


```typescript
import { createConfiguration, ConfidenceApi } from '@revengai/sdk';
import type { ConfidenceApiGetFunctionsNameScoreRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfidenceApi(configuration);

const request: ConfidenceApiGetFunctionsNameScoreRequest = {
  
  functionNameConfidenceBody: {
    functions: [
      {
        functionId: 1,
        functionName: "functionName_example",
      },
    ],
    isDebug: false,
  },
};

const data = await apiInstance.getFunctionsNameScore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionNameConfidenceBody** | **FunctionNameConfidenceBody**|  |


### Return type

**BaseResponseListFunctionBoxPlotConfidence**

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

# **getFunctionsThreatScore**
> BaseResponseListFunctionBoxPlotConfidence getFunctionsThreatScore(threatScoreFunctionBody)

Accepts a list of function ids and returns the threat score for each function. Each function must be from the same model, or you may find some functions missing in the return.

### Example


```typescript
import { createConfiguration, ConfidenceApi } from '@revengai/sdk';
import type { ConfidenceApiGetFunctionsThreatScoreRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConfidenceApi(configuration);

const request: ConfidenceApiGetFunctionsThreatScoreRequest = {
  
  threatScoreFunctionBody: {
    functionIds: [
      1,
    ],
  },
};

const data = await apiInstance.getFunctionsThreatScore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatScoreFunctionBody** | **ThreatScoreFunctionBody**|  |


### Return type

**BaseResponseListFunctionBoxPlotConfidence**

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


