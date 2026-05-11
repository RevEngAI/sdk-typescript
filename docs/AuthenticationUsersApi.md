# .AuthenticationUsersApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRequesterUserInfo**](AuthenticationUsersApi.md#getRequesterUserInfo) | **GET** /v2/users/me | Get the requesters user information
[**getUser**](AuthenticationUsersApi.md#getUser) | **GET** /v2/users/{user_id} | Get a user\&#39;s public information
[**getUserActivity**](AuthenticationUsersApi.md#getUserActivity) | **GET** /v2/users/activity | Get auth user activity
[**getUserComments**](AuthenticationUsersApi.md#getUserComments) | **GET** /v2/users/me/comments | Get comments by user
[**submitUserFeedback**](AuthenticationUsersApi.md#submitUserFeedback) | **POST** /v2/users/feedback | Submit feedback about the application


# **getRequesterUserInfo**
> BaseResponseGetMeResponse getRequesterUserInfo()


### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request = {};

const data = await apiInstance.getRequesterUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BaseResponseGetMeResponse**

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
};

const data = await apiInstance.getUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined


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

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request = {};

const data = await apiInstance.getUserActivity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request = {};

const data = await apiInstance.getUserComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **submitUserFeedback**
> BaseResponse submitUserFeedback(submitUserFeedbackRequest)

Submits feedback about the application and forwards it to the RevEng.ai project management tool.

### Example


```typescript
import { createConfiguration, AuthenticationUsersApi } from '@revengai/sdk';
import type { AuthenticationUsersApiSubmitUserFeedbackRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new AuthenticationUsersApi(configuration);

const request: AuthenticationUsersApiSubmitUserFeedbackRequest = {
  
  submitUserFeedbackRequest: {
    currentRoute: "currentRoute_example",
    feedback: "feedback_example",
    screenCaptureUrl: "screenCaptureUrl_example",
  },
};

const data = await apiInstance.submitUserFeedback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitUserFeedbackRequest** | **SubmitUserFeedbackRequest**|  |


### Return type

**BaseResponse**

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


