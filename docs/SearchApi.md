# .SearchApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchBinaries**](SearchApi.md#searchBinaries) | **GET** /v2/search/binaries | Binaries search
[**searchCollections**](SearchApi.md#searchCollections) | **GET** /v2/search/collections | Collections search
[**searchFunctions**](SearchApi.md#searchFunctions) | **GET** /v2/search/functions | Functions search
[**searchTags**](SearchApi.md#searchTags) | **GET** /v2/search/tags | Tags search


# **searchBinaries**
> BaseResponseBinarySearchResponse searchBinaries()

Searches for a specific binary

### Example


```typescript
import { createConfiguration, SearchApi } from '@revengai/sdk';
import type { SearchApiSearchBinariesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchBinariesRequest = {
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 10,
    // The partial or full name of the binary being searched (optional)
  partialName: "partial_name_example",
    // The partial or full sha256 of the binary being searched (optional)
  partialSha256: "partial_sha256_example",
    // The tags to be searched for (optional)
  tags: [
    "tags_example",
  ],
    // The name of the model used to analyze the binary the function belongs to (optional)
  modelName: "model_name_example",
    // Whether to only search user\'s uploaded files (optional)
  userFilesOnly: false,
};

const data = await apiInstance.searchBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 10
 **partialName** | [**string**] | The partial or full name of the binary being searched | (optional) defaults to undefined
 **partialSha256** | [**string**] | The partial or full sha256 of the binary being searched | (optional) defaults to undefined
 **tags** | **Array&lt;string&gt;** | The tags to be searched for | (optional) defaults to undefined
 **modelName** | [**string**] | The name of the model used to analyze the binary the function belongs to | (optional) defaults to undefined
 **userFilesOnly** | [**boolean**] | Whether to only search user\&#39;s uploaded files | (optional) defaults to false


### Return type

**BaseResponseBinarySearchResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | You must provide at least one of the filters; partial_name, partial_sha256, tags or model_name to search |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchCollections**
> BaseResponseCollectionSearchResponse searchCollections()

Searches for a specific collection

### Example


```typescript
import { createConfiguration, SearchApi } from '@revengai/sdk';
import type { SearchApiSearchCollectionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchCollectionsRequest = {
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 10,
    // The partial or full name of the collection being searched (optional)
  partialCollectionName: "partial_collection_name_example",
    // The partial or full name of the binary belonging to the collection (optional)
  partialBinaryName: "partial_binary_name_example",
    // The partial or full sha256 of the binary belonging to the collection (optional)
  partialBinarySha256: "partial_binary_sha256_example",
    // The tags to be searched for (optional)
  tags: [
    "tags_example",
  ],
    // The name of the model used to analyze the binary the function belongs to (optional)
  modelName: "model_name_example",
    // The filters to be used for the search (optional)
  filters: [
    "official_only",
  ],
    // The field to sort the order by in the results (optional)
  orderBy: "created",
    // The order direction in which to return results (optional)
  orderByDirection: "ASC",
};

const data = await apiInstance.searchCollections(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 10
 **partialCollectionName** | [**string**] | The partial or full name of the collection being searched | (optional) defaults to undefined
 **partialBinaryName** | [**string**] | The partial or full name of the binary belonging to the collection | (optional) defaults to undefined
 **partialBinarySha256** | [**string**] | The partial or full sha256 of the binary belonging to the collection | (optional) defaults to undefined
 **tags** | **Array&lt;string&gt;** | The tags to be searched for | (optional) defaults to undefined
 **modelName** | [**string**] | The name of the model used to analyze the binary the function belongs to | (optional) defaults to undefined
 **filters** | **Array&lt;Filters&gt;** | The filters to be used for the search | (optional) defaults to undefined
 **orderBy** | **AppApiRestV2CollectionsEnumsOrderBy** | The field to sort the order by in the results | (optional) defaults to undefined
 **orderByDirection** | **Order** | The order direction in which to return results | (optional) defaults to undefined


### Return type

**BaseResponseCollectionSearchResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | You must provide at least one of the filters; partial_collection_name, partial_binary_name, partial_binary_sha256, tags or model_name to search |  -  |
**404** | The model name provided does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchFunctions**
> BaseResponseFunctionSearchResponse searchFunctions()

Searches for a specific function

### Example


```typescript
import { createConfiguration, SearchApi } from '@revengai/sdk';
import type { SearchApiSearchFunctionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchFunctionsRequest = {
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 10,
    // The partial or full name of the function being searched (optional)
  partialName: "partial_name_example",
    // The name of the model used to analyze the binary the function belongs to (optional)
  modelName: "model_name_example",
};

const data = await apiInstance.searchFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 10
 **partialName** | [**string**] | The partial or full name of the function being searched | (optional) defaults to undefined
 **modelName** | [**string**] | The name of the model used to analyze the binary the function belongs to | (optional) defaults to undefined


### Return type

**BaseResponseFunctionSearchResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | You must provide at least one of the filters; partial_name, or model_name to search |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchTags**
> BaseResponseTagSearchResponse searchTags()

Searches for tags by there name

### Example


```typescript
import { createConfiguration, SearchApi } from '@revengai/sdk';
import type { SearchApiSearchTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchTagsRequest = {
    // The partial or full name of the tag to search for
  partialName: "partial_name_example",
    // The page number to retrieve. (optional)
  page: 1,
    // Number of items per page. (optional)
  pageSize: 10,
};

const data = await apiInstance.searchTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialName** | [**string**] | The partial or full name of the tag to search for | defaults to undefined
 **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 10


### Return type

**BaseResponseTagSearchResponse**

### Authorization

[APIKey](README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | You must provide a partial_name to search and it must be greater than 3 characters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


