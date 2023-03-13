# MiniBatchKMeansFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

Defined in:  [generated/cluster/MiniBatchKMeans.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L680)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

Defined in:  [generated/cluster/MiniBatchKMeans.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L690)

### y?

> `any`

Not used, present here for API consistency by convention.

Defined in:  [generated/cluster/MiniBatchKMeans.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L685)
