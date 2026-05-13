# .ReportsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPdfReport**](ReportsApi.md#createPdfReport) | **POST** /v3/analysis/{analysis_id}/pdf | Start PDF report generation
[**downloadPdfReport**](ReportsApi.md#downloadPdfReport) | **GET** /v3/analysis/{analysis_id}/pdf/{task_id} | Download generated PDF report
[**getPdfReportStatus**](ReportsApi.md#getPdfReportStatus) | **GET** /v3/analysis/{analysis_id}/pdf/{task_id}/status | Get PDF report workflow status


# **createPdfReport**
> GeneratePDFOutputBody createPdfReport()

Starts an asynchronous PDF report generation workflow for the given analysis. Returns a deterministic task_id used to poll status and download the resulting PDF. Idempotent: if a workflow is already running for this analysis and user, the same task_id is returned with `already_running: true` so the caller can rejoin the in-flight workflow.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, ReportsApi } from '@revengai/sdk';
import type { ReportsApiCreatePdfReportRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ReportsApi(configuration);

const request: ReportsApiCreatePdfReportRequest = {
    // Analysis ID
  analysisId: 1,
};

const data = await apiInstance.createPdfReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined


### Return type

**GeneratePDFOutputBody**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadPdfReport**
> void downloadPdfReport()

Streams the rendered PDF report. Returns 409 when the workflow is still running and 404 when the task does not exist or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `409` [`ANALYSIS_NOT_READY`](/errors/ANALYSIS_NOT_READY) — Analysis Not Ready - `500` [`REPORT_RENDER_FAILED`](/errors/REPORT_RENDER_FAILED) — Report Render Failed

### Example


```typescript
import { createConfiguration, ReportsApi } from '@revengai/sdk';
import type { ReportsApiDownloadPdfReportRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ReportsApi(configuration);

const request: ReportsApiDownloadPdfReportRequest = {
    // Analysis ID
  analysisId: 1,
    // Task ID returned by the create endpoint
  taskId: "z",
};

const data = await apiInstance.downloadPdfReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **taskId** | [**string**] | Task ID returned by the create endpoint | defaults to undefined


### Return type

**void**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPdfReportStatus**
> WorkflowProgress getPdfReportStatus()

Returns live workflow progress for the given task. Returns 404 when the task does not exist or the caller is not authorised to see it.  **Error codes:** - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, ReportsApi } from '@revengai/sdk';
import type { ReportsApiGetPdfReportStatusRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ReportsApi(configuration);

const request: ReportsApiGetPdfReportStatusRequest = {
    // Analysis ID
  analysisId: 1,
    // Task ID returned by the create endpoint
  taskId: "z",
};

const data = await apiInstance.getPdfReportStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisId** | [**number**] | Analysis ID | defaults to undefined
 **taskId** | [**string**] | Task ID returned by the create endpoint | defaults to undefined


### Return type

**WorkflowProgress**

### Authorization

[APIKey](README.md#APIKey)

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


