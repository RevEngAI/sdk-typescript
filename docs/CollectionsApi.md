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


# **createCollection**
> BaseResponseCollectionResponse createCollection(collectionCreateRequest)

A collection is a group of binaries that are related in some way. This endpoint creates a new collection and allows you to add tags and binaries to it. If you add tags or binaries to the collection, they will be returned in the response.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiCreateCollectionRequest } from '';

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

# **deleteCollection**
> BaseResponseBool deleteCollection()

Deletes a collection

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiDeleteCollectionRequest } from '';

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

# **getCollection**
> BaseResponseCollectionResponse getCollection()

Gets a single collection. The collection can include binaries and tags if requested. You can specify whether to include tags and binaries in the response by using the query string parameters defined.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiGetCollectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsApi(configuration);

const request: CollectionsApiGetCollectionRequest = {
  
  collectionId: 1,
  
  includeTags: false,
  
  includeBinaries: false,
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


### Return type

**BaseResponseCollectionResponse**

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

# **listCollections**
> BaseResponseListCollectionResults listCollections()

Returns a list of collections

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiListCollectionsRequest } from '';

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

# **updateCollection**
> BaseResponseCollectionResponse updateCollection(collectionUpdateRequest)

Updates a collection, you can update the collection name, description, and scope

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiUpdateCollectionRequest } from '';

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

# **updateCollectionBinaries**
> BaseResponseCollectionBinariesUpdateResponse updateCollectionBinaries(collectionBinariesUpdateRequest)

Updates/changes a collection binaries to whatever is provided in the request. After this update the collection will only contain the binaries provided in the request.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiUpdateCollectionBinariesRequest } from '';

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

# **updateCollectionTags**
> BaseResponseCollectionTagsUpdateResponse updateCollectionTags(collectionTagsUpdateRequest)

Updates/changes a collection tags to whatever is provided in the request. After this update the collection will only contain the tags provided in the request.

### Example


```typescript
import { createConfiguration, CollectionsApi } from '';
import type { CollectionsApiUpdateCollectionTagsRequest } from '';

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


