# .CollectionsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3CreateCollection**](CollectionsApi.md#v3CreateCollection) | **POST** /v3/collections | Create a collection.
[**v3DeleteCollection**](CollectionsApi.md#v3DeleteCollection) | **DELETE** /v3/collections/{collection_id} | Delete a collection.
[**v3GetCollection**](CollectionsApi.md#v3GetCollection) | **GET** /v3/collections/{collection_id} | Get a collection.
[**v3ListCollections**](CollectionsApi.md#v3ListCollections) | **GET** /v3/collections | List collections.
[**v3PatchCollection**](CollectionsApi.md#v3PatchCollection) | **PATCH** /v3/collections/{collection_id} | Update a collection.
[**v3PatchCollectionBinaries**](CollectionsApi.md#v3PatchCollectionBinaries) | **PATCH** /v3/collections/{collection_id}/binaries | Replace the binaries in a collection.
[**v3PatchCollectionTags**](CollectionsApi.md#v3PatchCollectionTags) | **PATCH** /v3/collections/{collection_id}/tags | Replace the tags on a collection.


# **v3CreateCollection**
> CreateCollectionOutputBody v3CreateCollection(createCollectionInputBody)

Creates a new collection, optionally tagging it and linking binary IDs to it. Tags and binaries are returned in the response only when they were supplied in the request.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3CreateCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3CreateCollectionRequest = {
  
  createCollectionInputBody: {
    binaries: [
      1,
    ],
    collectionName: "collectionName_example",
    collectionScope: "PRIVATE",
    description: "description_example",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.v3CreateCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCollectionInputBody** | **CreateCollectionInputBody**|  |


### Return type

**CreateCollectionOutputBody**

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

# **v3DeleteCollection**
> void v3DeleteCollection()

Deletes a collection. The collection must not have any linked binaries (call PATCH /v3/collections/{collection_id}/binaries with an empty list first).  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `409` [`CONFLICT`](/errors/CONFLICT) — Conflict

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3DeleteCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3DeleteCollectionRequest = {
  
  collectionId: 1,
};

const data = await apiInstance.v3DeleteCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] |  | defaults to undefined


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
**409** | Conflict |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3GetCollection**
> GetCollectionOutputBody v3GetCollection()

Gets a single collection by ID. Optionally include tags and paginated binaries.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3GetCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3GetCollectionRequest = {
  
  collectionId: 1,
  
  includeTags: true,
  
  includeBinaries: true,
  
  pageSize: 10,
  
  pageNumber: 1,
  
  binarySearchStr: "binary_search_str_example",
};

const data = await apiInstance.v3GetCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] |  | defaults to undefined
 **includeTags** | [**boolean**] |  | (optional) defaults to undefined
 **includeBinaries** | [**boolean**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 10
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **binarySearchStr** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetCollectionOutputBody**

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

# **v3ListCollections**
> ListCollectionsOutputBody v3ListCollections()

Lists collections accessible to the authenticated user. Supports search, filtering, ordering, and pagination.  **Error codes:** - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3ListCollectionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3ListCollectionsRequest = {
  
  searchTerm: "search_term_example",
  
  filters: [
    "official_only",
  ],
  
  limit: 20,
  
  offset: 0,
  
  orderBy: "collection",
  
  order: "ASC",
};

const data = await apiInstance.v3ListCollections(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | [**string**] |  | (optional) defaults to undefined
 **filters** | **Array<&#39;official_only&#39; &#124; &#39;user_only&#39; &#124; &#39;team_only&#39; &#124; &#39;public_only&#39; &#124; &#39;hide_empty&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0
 **orderBy** | [**&#39;created&#39; | &#39;collection&#39; | &#39;collection_size&#39; | &#39;updated&#39; | &#39;owner&#39;**]**Array<&#39;created&#39; &#124; &#39;collection&#39; &#124; &#39;collection_size&#39; &#124; &#39;updated&#39; &#124; &#39;owner&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'collection'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'ASC'


### Return type

**ListCollectionsOutputBody**

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

# **v3PatchCollection**
> PatchCollectionOutputBody v3PatchCollection(patchCollectionInputBody)

Updates a collection\'s name, description, and/or scope. Omitted fields keep their existing values.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3PatchCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3PatchCollectionRequest = {
  
  collectionId: 1,
  
  patchCollectionInputBody: {
    collectionName: "collectionName_example",
    collectionScope: "collectionScope_example",
    description: "description_example",
  },
};

const data = await apiInstance.v3PatchCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchCollectionInputBody** | **PatchCollectionInputBody**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**PatchCollectionOutputBody**

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

# **v3PatchCollectionBinaries**
> PatchCollectionBinariesOutputBody v3PatchCollectionBinaries(patchCollectionBinariesInputBody)

Replaces the binaries linked to a collection with the supplied list. Binaries not present in the request are removed. All supplied binary IDs must belong to the same model as the collection.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied - `422` [`VALIDATION_FAILED`](/errors/VALIDATION_FAILED) — Validation Failed

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3PatchCollectionBinariesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3PatchCollectionBinariesRequest = {
  
  collectionId: 1,
  
  patchCollectionBinariesInputBody: {
    binaries: [
      1,
    ],
  },
};

const data = await apiInstance.v3PatchCollectionBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchCollectionBinariesInputBody** | **PatchCollectionBinariesInputBody**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**PatchCollectionBinariesOutputBody**

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

# **v3PatchCollectionTags**
> PatchCollectionTagsOutputBody v3PatchCollectionTags(patchCollectionTagsInputBody)

Replaces the tags on a collection with the supplied list. Tags not present in the request are removed. Empty or whitespace-only tags are filtered; duplicates are deduplicated.  **Error codes:** - `404` [`NOT_FOUND`](/errors/NOT_FOUND) — Not Found - `403` [`ACCESS_DENIED`](/errors/ACCESS_DENIED) — Access Denied

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiV3PatchCollectionTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiV3PatchCollectionTagsRequest = {
  
  collectionId: 1,
  
  patchCollectionTagsInputBody: {
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.v3PatchCollectionTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchCollectionTagsInputBody** | **PatchCollectionTagsInputBody**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**PatchCollectionTagsOutputBody**

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


