# .ConversationsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRun**](ConversationsApi.md#cancelRun) | **POST** /v2/conversations/{id}/cancel | Cancel an active run
[**confirmTool**](ConversationsApi.md#confirmTool) | **POST** /v2/conversations/{id}/confirm | Approve or reject a pending tool confirmation
[**createConversation**](ConversationsApi.md#createConversation) | **POST** /v2/conversations | Create a new conversation
[**getConversation**](ConversationsApi.md#getConversation) | **GET** /v2/conversations/{id} | Get a conversation with its events
[**listConversations**](ConversationsApi.md#listConversations) | **GET** /v2/conversations | List conversations for the authenticated user
[**sendMessage**](ConversationsApi.md#sendMessage) | **POST** /v2/conversations/{id}/messages | Send a message and start an agentic run
[**streamEvents**](ConversationsApi.md#streamEvents) | **GET** /v2/conversations/{id}/events | Stream conversation events (SSE)


# **cancelRun**
> StatusResponse cancelRun()

Cancels the currently active agentic run for the given conversation. Returns 404 if no run is in progress.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_ACTIVE_RUN`](/errors/NO_ACTIVE_RUN) — No Active Run

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiCancelRunRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiCancelRunRequest = {
    // Conversation UUID
  id: "id_example",
};

const data = await apiInstance.cancelRun(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Conversation UUID | defaults to undefined


### Return type

**StatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **confirmTool**
> StatusResponse confirmTool(confirmToolInputBody)

Responds to a pending tool confirmation request. The agent pauses before executing certain tools and emits a `TOOL_CONFIRMATION_REQUIRED` event. Use this endpoint to approve or reject the tool call. Returns 404 if no confirmation is pending.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `404` [`NO_PENDING_CONFIRMATION`](/errors/NO_PENDING_CONFIRMATION) — No Pending Confirmation

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiConfirmToolRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiConfirmToolRequest = {
    // Conversation UUID
  id: "id_example",
  
  confirmToolInputBody: ,
};

const data = await apiInstance.confirmTool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmToolInputBody** | **ConfirmToolInputBody**|  |
 **id** | [**string**] | Conversation UUID | defaults to undefined


### Return type

**StatusResponse**

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
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createConversation**
> Conversation createConversation(createConversationRequest)

Creates a new conversation for the authenticated user. Optionally include a binary analysis context to scope the assistant to a specific analysis.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiCreateConversationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiCreateConversationRequest = {
  
  createConversationRequest: ,
};

const data = await apiInstance.createConversation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConversationRequest** | **CreateConversationRequest**|  |


### Return type

**Conversation**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConversation**
> ConversationWithEvents getConversation()

Returns the conversation metadata along with all persisted events. Useful for reconstructing the full conversation history on page load.  **Error codes:** - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiGetConversationRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiGetConversationRequest = {
    // Conversation UUID
  id: "id_example",
};

const data = await apiInstance.getConversation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Conversation UUID | defaults to undefined


### Return type

**ConversationWithEvents**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConversations**
> Array<Conversation> listConversations()

Returns all conversations owned by the authenticated user, ordered by most recently updated.

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request = {};

const data = await apiInstance.listConversations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Conversation>**

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

# **sendMessage**
> StatusResponse sendMessage(sendMessageRequest)

Sends a user message to the conversation and kicks off an agentic processing loop in the background. Returns immediately with 202 Accepted. Subscribe to `/v2/conversations/{id}/events` via SSE to receive real-time updates including text deltas, tool calls, and run lifecycle events.  **Error codes:** - `400` [`BAD_REQUEST`](/errors/BAD_REQUEST) — Bad Request - `400` [`INVALID_CONVERSATION_ID`](/errors/INVALID_CONVERSATION_ID) — Invalid Conversation ID - `404` [`CONVERSATION_NOT_FOUND`](/errors/CONVERSATION_NOT_FOUND) — Conversation Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `402` [`INSUFFICIENT_CREDITS`](/errors/INSUFFICIENT_CREDITS) — Insufficient Credits - `409` [`RUN_ALREADY_ACTIVE`](/errors/RUN_ALREADY_ACTIVE) — Run Already Active

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiSendMessageRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiSendMessageRequest = {
    // Conversation UUID
  id: "id_example",
  
  sendMessageRequest: ,
};

const data = await apiInstance.sendMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageRequest** | **SendMessageRequest**|  |
 **id** | [**string**] | Conversation UUID | defaults to undefined


### Return type

**StatusResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamEvents**
> Array<StreamEvents200ResponseInner> streamEvents()

Opens a Server-Sent Events stream for the given conversation. Events include run lifecycle updates, streaming text deltas, tool call progress, and more. Use the `last_event_id` query parameter to replay missed events after a reconnection.

### Example


```typescript
import { createConfiguration, ConversationsApi } from '@revengai/sdk';
import type { ConversationsApiStreamEventsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new ConversationsApi(configuration);

const request: ConversationsApiStreamEventsRequest = {
    // Conversation UUID
  id: "id_example",
    // Replay events after this ID (optional)
  lastEventId: 1,
};

const data = await apiInstance.streamEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Conversation UUID | defaults to undefined
 **lastEventId** | [**number**] | Replay events after this ID | (optional) defaults to undefined


### Return type

**Array<StreamEvents200ResponseInner>**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


