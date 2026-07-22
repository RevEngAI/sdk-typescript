# .CollectionsApi

All URIs are relative to *https://api.reveng.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollection**](CollectionsApi.md#createCollection) | **POST** /v2/collections | Creates new collection information
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /v2/collections/{collection_id} | Deletes a collection
[**getCollection**](CollectionsApi.md#getCollection) | **GET** /v2/collections/{collection_id} | Returns a collection
[**listCollections**](CollectionsApi.md#listCollections) | **GET** /v2/collections | Gets basic collections information
[**updateCollection**](CollectionsApi.md#updateCollection) | **PATCH** /v2/collections/{collection_id} | Updates a collection
[**updateCollectionBinaries**](CollectionsApi.md#updateCollectionBinaries) | **PATCH** /v2/collections/{collection_id}/binaries | Updates a collection binaries
[**updateCollectionTags**](CollectionsApi.md#updateCollectionTags) | **PATCH** /v2/collections/{collection_id}/tags | Updates a collection tags
[**v3CreateCollection**](CollectionsApi.md#v3CreateCollection) | **POST** /v3/collections | Create a collection.
[**v3DeleteCollection**](CollectionsApi.md#v3DeleteCollection) | **DELETE** /v3/collections/{collection_id} | Delete a collection.
[**v3GetCollection**](CollectionsApi.md#v3GetCollection) | **GET** /v3/collections/{collection_id} | Get a collection.
[**v3ListCollections**](CollectionsApi.md#v3ListCollections) | **GET** /v3/collections | List collections.
[**v3PatchCollection**](CollectionsApi.md#v3PatchCollection) | **PATCH** /v3/collections/{collection_id} | Update a collection.
[**v3PatchCollectionBinaries**](CollectionsApi.md#v3PatchCollectionBinaries) | **PATCH** /v3/collections/{collection_id}/binaries | Replace the binaries in a collection.
[**v3PatchCollectionTags**](CollectionsApi.md#v3PatchCollectionTags) | **PATCH** /v3/collections/{collection_id}/tags | Replace the tags on a collection.


# **createCollection**
> BaseResponseCollectionResponse createCollection(collectionCreateRequest)

A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiCreateCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiCreateCollectionRequest = {
  
  collectionCreateRequest: {
    collectionName: "collectionName_example",
    description: "description_example",
    collectionScope: "PRIVATE",
    tags: [
      "tags_example",
    ],
    binaries: [
      1,
    ],
    modelId: 1,
  },
};

const data = await apiInstance.createCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionCreateRequest** | **CollectionCreateRequest**|  |


### Return type

**BaseResponseCollectionResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollection**
> BaseResponseBool deleteCollection()

Deletes a collection

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiDeleteCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiDeleteCollectionRequest = {
  
  collectionId: 1,
};

const data = await apiInstance.deleteCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseBool**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCollection**
> BaseResponseCollectionResponse getCollection()

Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiGetCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiGetCollectionRequest = {
  
  collectionId: 1,
  
  includeTags: false,
  
  includeBinaries: false,
  
  pageSize: 10,
  
  pageNumber: 1,
  
  binarySearchStr: "binary_search_str_example",
};

const data = await apiInstance.getCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] |  | defaults to undefined
 **includeTags** | [**boolean**] |  | (optional) defaults to false
 **includeBinaries** | [**boolean**] |  | (optional) defaults to false
 **pageSize** | [**number**] |  | (optional) defaults to 10
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **binarySearchStr** | [**string**] |  | (optional) defaults to undefined


### Return type

**BaseResponseCollectionResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCollections**
> BaseResponseListCollectionResults listCollections()

Returns a list of collections

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiListCollectionsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiListCollectionsRequest = {
  
  searchTerm: "",
  
  filters: [
    "[]",
  ],
  
  limit: 20,
  
  offset: 0,
  
  orderBy: "created",
  
  order: "ASC",
};

const data = await apiInstance.listCollections(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | [**string**] |  | (optional) defaults to ''
 **filters** | **Array&lt;Filters&gt;** |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **offset** | [**number**] |  | (optional) defaults to 0
 **orderBy** | **AppApiRestV2CollectionsEnumsOrderBy** |  | (optional) defaults to undefined
 **order** | **Order** |  | (optional) defaults to undefined


### Return type

**BaseResponseListCollectionResults**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCollection**
> BaseResponseCollectionResponse updateCollection(collectionUpdateRequest)

Updates a collection, you can update the collection name, description, and scope

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiUpdateCollectionRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiUpdateCollectionRequest = {
  
  collectionId: 1,
  
  collectionUpdateRequest: {
    collectionName: "collectionName_example",
    description: "description_example",
    collectionScope: "PRIVATE",
  },
};

const data = await apiInstance.updateCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionUpdateRequest** | **CollectionUpdateRequest**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCollectionResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCollectionBinaries**
> BaseResponseCollectionBinariesUpdateResponse updateCollectionBinaries(collectionBinariesUpdateRequest)

Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiUpdateCollectionBinariesRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiUpdateCollectionBinariesRequest = {
  
  collectionId: 1,
  
  collectionBinariesUpdateRequest: {
    binaries: [
      1,
    ],
  },
};

const data = await apiInstance.updateCollectionBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionBinariesUpdateRequest** | **CollectionBinariesUpdateRequest**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCollectionBinariesUpdateResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCollectionTags**
> BaseResponseCollectionTagsUpdateResponse updateCollectionTags(collectionTagsUpdateRequest)

Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '@revengai/sdk';
import type { CollectionsApiUpdateCollectionTagsRequest } from '@revengai/sdk';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiUpdateCollectionTagsRequest = {
  
  collectionId: 1,
  
  collectionTagsUpdateRequest: {
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.updateCollectionTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionTagsUpdateRequest** | **CollectionTagsUpdateRequest**|  |
 **collectionId** | [**number**] |  | defaults to undefined


### Return type

**BaseResponseCollectionTagsUpdateResponse**

### Authorization

[APIKey](README.md#APIKey), [bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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
  
  createCollectionInputBody: ,
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
 **orderBy** | [**&#39;created&#39; | &#39;collection&#39; | &#39;model&#39; | &#39;collection_size&#39; | &#39;updated&#39; | &#39;owner&#39;**]**Array<&#39;created&#39; &#124; &#39;collection&#39; &#124; &#39;model&#39; &#124; &#39;collection_size&#39; &#124; &#39;updated&#39; &#124; &#39;owner&#39; &#124; &#39;11184809&#39;>** |  | (optional) defaults to 'collection'
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
  
  patchCollectionInputBody: ,
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
  
  patchCollectionBinariesInputBody: ,
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
  
  patchCollectionTagsInputBody: ,
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


