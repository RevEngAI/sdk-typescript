# .AuthenticationUsersApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRequesterUserInfo**](AuthenticationUsersApi.md#getRequesterUserInfo) | **GET** /v2/users/me | Get the requesters user information
[**getUser**](AuthenticationUsersApi.md#getUser) | **GET** /v2/users/{user_id} | Get a user\&#39;s public information
[**getUserActivity**](AuthenticationUsersApi.md#getUserActivity) | **GET** /v2/users/activity | Get auth user activity
[**getUserComments**](AuthenticationUsersApi.md#getUserComments) | **GET** /v2/users/me/comments | Get comments by user
[**loginUser**](AuthenticationUsersApi.md#loginUser) | **POST** /v2/auth/login | Authenticate a user


# **getRequesterUserInfo**
> BaseResponseGetUserResponse getRequesterUserInfo()


### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiGetRequesterUserInfoRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiGetRequesterUserInfoRequest = {
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getRequesterUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGetUserResponse**

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

# **getUser**
> BaseResponseGetPublicUserResponse getUser()


### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiGetUserRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiGetUserRequest = {
  
  userId: 1,
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseGetPublicUserResponse**

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

# **getUserActivity**
> BaseResponseListUserActivityResponse getUserActivity()


### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiGetUserActivityRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiGetUserActivityRequest = {
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getUserActivity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseListUserActivityResponse**

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

# **getUserComments**
> BaseResponseListCommentResponse getUserComments()

Retrieves all comments created by a specific user. Only returns comments for resources the requesting user has access to.

### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiGetUserCommentsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiGetUserCommentsRequest = {
  
  apiKey: "api_key_example",
};

const data = await apiInstance.getUserComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseListCommentResponse**

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

# **loginUser**
> BaseResponseLoginResponse loginUser(loginRequest)

Authenticates a user and returns a token.

### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiLoginUserRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiLoginUserRequest = {
  
  loginRequest: {
    username: "username_example",
    password: "password_example",
  },
};

const data = await apiInstance.loginUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**|  |


### Return type

**BaseResponseLoginResponse**

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
**401** | Invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


