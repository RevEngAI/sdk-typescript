# .IAMUsersApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMe**](IAMUsersApi.md#getMe) | **GET** /v2/iam/me | Get current user
[**getMyPermissions**](IAMUsersApi.md#getMyPermissions) | **GET** /v2/iam/me/permissions | Get current user permissions


# **getMe**
> User getMe()

Returns the authenticated user\'s own information.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, IAMUsersApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new IAMUsersApi(configuration);

const request = {};

const data = await apiInstance.getMe(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**User**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyPermissions**
> Permissions getMyPermissions()

Returns the feature permissions granted to the authenticated user based on their subscription tier. Use this as the single source of truth for feature gating across web, CLI, and plugin clients.

### Example


```typescript
import { createConfiguration, IAMUsersApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new IAMUsersApi(configuration);

const request = {};

const data = await apiInstance.getMyPermissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Permissions**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


