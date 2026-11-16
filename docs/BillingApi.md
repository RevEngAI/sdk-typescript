# .BillingApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3GetCreditEstimates**](BillingApi.md#v3GetCreditEstimates) | **GET** /v3/credit-estimates | Get credit estimates.


# **v3GetCreditEstimates**
> GetCreditEstimatesOutputBody v3GetCreditEstimates()

Returns the table for estimating, before a binary is analysed, the credits creating an analysis of it will use. Find the size bucket the binary\'s size in bytes falls in; each requested operation, plus `binary-analysis`, is estimated to cost `base_credits + credits_per_function × functions`. The estimate is calibrated to come in at or above most real runs, but it is not a quote: what is charged depends on the binary.

### Example


```typescript
import { createConfiguration, BillingApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request = {};

const data = await apiInstance.v3GetCreditEstimates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCreditEstimatesOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


