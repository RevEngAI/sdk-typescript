# .InvestigationsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3CreateInvestigation**](InvestigationsApi.md#v3CreateInvestigation) | **POST** /v3/investigations | Create an investigation.
[**v3CreateInvestigationConversation**](InvestigationsApi.md#v3CreateInvestigationConversation) | **POST** /v3/investigations/{investigation_id}/conversations | Start a conversation in an investigation.
[**v3DeleteInvestigation**](InvestigationsApi.md#v3DeleteInvestigation) | **DELETE** /v3/investigations/{investigation_id} | Delete an investigation.
[**v3GetInvestigation**](InvestigationsApi.md#v3GetInvestigation) | **GET** /v3/investigations/{investigation_id} | Get an investigation.
[**v3GetInvestigationFinding**](InvestigationsApi.md#v3GetInvestigationFinding) | **GET** /v3/investigations/{investigation_id}/findings/{finding_id} | Get a finding of an investigation.
[**v3ListInvestigationAgentRuns**](InvestigationsApi.md#v3ListInvestigationAgentRuns) | **GET** /v3/investigations/agent-runs | List agent runs on investigations.
[**v3ListInvestigationConversations**](InvestigationsApi.md#v3ListInvestigationConversations) | **GET** /v3/investigations/{investigation_id}/conversations | List the conversations of an investigation.
[**v3ListInvestigationFindings**](InvestigationsApi.md#v3ListInvestigationFindings) | **GET** /v3/investigations/{investigation_id}/findings | List the findings of an investigation.
[**v3ListInvestigationSpend**](InvestigationsApi.md#v3ListInvestigationSpend) | **GET** /v3/investigations/{investigation_id}/spend | List what an investigation spent.
[**v3ListInvestigations**](InvestigationsApi.md#v3ListInvestigations) | **GET** /v3/investigations | List investigations.
[**v3PatchInvestigation**](InvestigationsApi.md#v3PatchInvestigation) | **PATCH** /v3/investigations/{investigation_id} | Update an investigation.
[**v3SetInvestigationBudget**](InvestigationsApi.md#v3SetInvestigationBudget) | **PUT** /v3/investigations/{investigation_id}/budget | Set the budget of an investigation.


# **v3CreateInvestigation**
> InvestigationBody v3CreateInvestigation(createInvestigationInputBody)

Creates an investigation owned by the caller, initially open and empty.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3CreateInvestigationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3CreateInvestigationRequest = {
  
  createInvestigationInputBody: {
    caseType: "REVERSE_ENGINEERING",
    name: "o",
    scope: "PRIVATE",
    severity: "CRITICAL",
  },
};

const data = await apiInstance.v3CreateInvestigation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvestigationInputBody** | **CreateInvestigationInputBody**|  |


### Return type

**InvestigationBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3CreateInvestigationConversation**
> ConversationBody v3CreateInvestigationConversation(createConversationInputBody)

Starts a chat conversation held by the investigation, about the whole investigation or about one of its analyses. Anyone who can see the investigation can start one. Read it, stream it and send messages in it with the /v2/conversations endpoints; only the user who started it can send messages in it. Deleting the investigation deletes its conversations.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3CreateInvestigationConversationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3CreateInvestigationConversationRequest = {
  
  investigationId: 1,
  
  createConversationInputBody: {
    analysisId: 0,
    title: "title_example",
  },
};

const data = await apiInstance.v3CreateInvestigationConversation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConversationInputBody** | **CreateConversationInputBody**|  |
 **investigationId** | [**number**] |  | defaults to undefined


### Return type

**ConversationBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3DeleteInvestigation**
> void v3DeleteInvestigation()

Deletes an investigation and its links to analyses. The analyses themselves are not deleted. Only the owner can delete an investigation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3DeleteInvestigationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3DeleteInvestigationRequest = {
  
  investigationId: 1,
};

const data = await apiInstance.v3DeleteInvestigation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined


### Return type

**void**

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

# **v3GetInvestigation**
> GetInvestigationOutputBody v3GetInvestigation()

Gets a single investigation, including the IDs of the analyses in it that the caller may see.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3GetInvestigationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3GetInvestigationRequest = {
  
  investigationId: 1,
};

const data = await apiInstance.v3GetInvestigation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined


### Return type

**GetInvestigationOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetInvestigationFinding**
> GetFindingOutputBody v3GetInvestigationFinding()

Gets a single finding, including the IDs of the analyses it was derived from that the caller may see.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3GetInvestigationFindingRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3GetInvestigationFindingRequest = {
  
  investigationId: 1,
  
  findingId: 1,
};

const data = await apiInstance.v3GetInvestigationFinding(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined
 **findingId** | [**number**] |  | defaults to undefined


### Return type

**GetFindingOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListInvestigationAgentRuns**
> ListAgentRunsOutputBody v3ListInvestigationAgentRuns()

Lists the runs of agents on the files of the investigations you can see, most recently updated first, each with a summary of its result once it is done. A run on a file held by several investigations is listed once for each. Only files you may see are included. Supports narrowing to one investigation, filtering by the investigations\' owner, status, severity and name, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3ListInvestigationAgentRunsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3ListInvestigationAgentRunsRequest = {
    // Only return runs on the files of this investigation. 0 returns runs across every investigation you can see. (optional)
  investigationId: 0,
    // Only return runs in investigations owned by one of these user IDs. (optional)
  ownerId: [
    1,
  ],
    // Only return runs in investigations in one of these statuses. (optional)
  status: [
    "OPEN",
  ],
    // Only return runs in investigations with one of these severities. (optional)
  severity: [
    "CRITICAL",
  ],
    // Only return runs in investigations whose name contains this text, ignoring case. (optional)
  search: "search_example",
  
  limit: 20,
  
  offset: 0,
};

const data = await apiInstance.v3ListInvestigationAgentRuns(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] | Only return runs on the files of this investigation. 0 returns runs across every investigation you can see. | (optional) defaults to 0
 **ownerId** | **Array&lt;number&gt;** | Only return runs in investigations owned by one of these user IDs. | (optional) defaults to undefined
 **status** | **Array<&#39;OPEN&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;ON_HOLD&#39; &#124; &#39;CLOSED&#39; &#124; &#39;11184809&#39;>** | Only return runs in investigations in one of these statuses. | (optional) defaults to undefined
 **severity** | **Array<&#39;CRITICAL&#39; &#124; &#39;HIGH&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;LOW&#39; &#124; &#39;11184809&#39;>** | Only return runs in investigations with one of these severities. | (optional) defaults to undefined
 **search** | [**string**] | Only return runs in investigations whose name contains this text, ignoring case. | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0


### Return type

**ListAgentRunsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListInvestigationConversations**
> ListConversationsOutputBody v3ListInvestigationConversations()

Lists the chat conversations held by the investigation, whoever started them, most recently active first. Visible to anyone who can see the investigation. Supports pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3ListInvestigationConversationsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3ListInvestigationConversationsRequest = {
  
  investigationId: 1,
  
  limit: 20,
  
  offset: 0,
};

const data = await apiInstance.v3ListInvestigationConversations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0


### Return type

**ListConversationsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListInvestigationFindings**
> ListFindingsOutputBody v3ListInvestigationFindings()

Lists what the investigation has found, most severe first and then most recent first. Visible to anyone who can see the investigation. Supports filtering by finding type and severity, and pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3ListInvestigationFindingsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3ListInvestigationFindingsRequest = {
  
  investigationId: 1,
    // Only return findings of one of these types. (optional)
  findingType: [
    "IOC",
  ],
    // Only return findings with one of these severities. (optional)
  severity: [
    "CRITICAL",
  ],
  
  limit: 20,
  
  offset: 0,
};

const data = await apiInstance.v3ListInvestigationFindings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined
 **findingType** | **Array<&#39;IOC&#39; &#124; &#39;CAPABILITY&#39; &#124; &#39;VULNERABILITY&#39; &#124; &#39;CROSS_FILE_FLOW&#39; &#124; &#39;11184809&#39;>** | Only return findings of one of these types. | (optional) defaults to undefined
 **severity** | **Array<&#39;CRITICAL&#39; &#124; &#39;HIGH&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;LOW&#39; &#124; &#39;11184809&#39;>** | Only return findings with one of these severities. | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0


### Return type

**ListFindingsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListInvestigationSpend**
> ListSpendOutputBody v3ListInvestigationSpend()

Lists the credits charged for the investigation\'s conversation turns and the agents run from it, newest first. Visible to anyone who can see the investigation. Supports pagination.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3ListInvestigationSpendRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3ListInvestigationSpendRequest = {
  
  investigationId: 1,
  
  limit: 20,
  
  offset: 0,
};

const data = await apiInstance.v3ListInvestigationSpend(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investigationId** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0


### Return type

**ListSpendOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ListInvestigations**
> ListInvestigationsOutputBody v3ListInvestigations()

Lists the investigations the caller owns or that are shared with the caller\'s team, most recently updated first by default. Supports filtering by status, severity, case type and owner, a name search, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3ListInvestigationsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3ListInvestigationsRequest = {
    // Only return investigations in one of these statuses. (optional)
  status: [
    "OPEN",
  ],
    // Only return investigations with one of these severities. (optional)
  severity: [
    "CRITICAL",
  ],
    // Only return investigations of one of these case types. (optional)
  caseType: [
    "REVERSE_ENGINEERING",
  ],
    // Only return investigations owned by one of these user IDs. (optional)
  ownerId: [
    1,
  ],
    // Only return investigations whose name contains this text, ignoring case. (optional)
  search: "search_example",
  
  orderBy: "updated",
  
  order: "DESC",
  
  limit: 20,
  
  offset: 0,
};

const data = await apiInstance.v3ListInvestigations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Array<&#39;OPEN&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;ON_HOLD&#39; &#124; &#39;CLOSED&#39; &#124; &#39;11184809&#39;>** | Only return investigations in one of these statuses. | (optional) defaults to undefined
 **severity** | **Array<&#39;CRITICAL&#39; &#124; &#39;HIGH&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;LOW&#39; &#124; &#39;11184809&#39;>** | Only return investigations with one of these severities. | (optional) defaults to undefined
 **caseType** | **Array<&#39;REVERSE_ENGINEERING&#39; &#124; &#39;MALWARE_ANALYSIS&#39; &#124; &#39;VULNERABILITY_DISCOVERY&#39; &#124; &#39;11184809&#39;>** | Only return investigations of one of these case types. | (optional) defaults to undefined
 **ownerId** | **Array&lt;number&gt;** | Only return investigations owned by one of these user IDs. | (optional) defaults to undefined
 **search** | [**string**] | Only return investigations whose name contains this text, ignoring case. | (optional) defaults to undefined
 **orderBy** | [**&#39;updated&#39; | &#39;created&#39; | &#39;name&#39;**]**Array<&#39;updated&#39; &#124; &#39;created&#39; &#124; &#39;name&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'updated'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'DESC'
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0


### Return type

**ListInvestigationsOutputBody**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3PatchInvestigation**
> InvestigationBody v3PatchInvestigation(patchInvestigationInputBody)

Updates an investigation\'s name, case type, severity, status and/or scope. Omitted fields keep their existing values. Only the owner can update an investigation.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3PatchInvestigationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3PatchInvestigationRequest = {
  
  investigationId: 1,
  
  patchInvestigationInputBody: {
    caseType: "REVERSE_ENGINEERING",
    name: "o",
    scope: "PRIVATE",
    severity: "CRITICAL",
    status: "OPEN",
  },
};

const data = await apiInstance.v3PatchInvestigation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchInvestigationInputBody** | **PatchInvestigationInputBody**|  |
 **investigationId** | [**number**] |  | defaults to undefined


### Return type

**InvestigationBody**

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

# **v3SetInvestigationBudget**
> BudgetBody v3SetInvestigationBudget(setBudgetInputBody)

Sets the most credits the investigation may spend on its conversations and the agents run from it, or removes the limit with null. Once the budget is spent, no new message or agent run is started from the investigation; work already under way finishes, so spend can go a little past the budget. Only the owner can set the budget.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, InvestigationsApi } from '@revengai/sdk';
import type { InvestigationsApiV3SetInvestigationBudgetRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new InvestigationsApi(configuration);

const request: InvestigationsApiV3SetInvestigationBudgetRequest = {
  
  investigationId: 1,
  
  setBudgetInputBody: {
    creditBudget: 0,
  },
};

const data = await apiInstance.v3SetInvestigationBudget(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setBudgetInputBody** | **SetBudgetInputBody**|  |
 **investigationId** | [**number**] |  | defaults to undefined


### Return type

**BudgetBody**

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


