# .ConfidenceApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalysisTagScore**](ConfidenceApi.md#getAnalysisTagScore) | **POST** /v2/confidence/analysis/{analysis_id}/tag_score | Calculate Tag Confidence Score for an Analysis


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


