# RocCurveDisplay

ROC Curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new RocCurveDisplay(opts?: object): RocCurveDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator_name?` | `string` | Name of estimator. If `undefined`, the estimator name is not shown. |
| `opts.fpr?` | [`ArrayLike`](../types/ArrayLike.md) | False positive rate. |
| `opts.pos_label?` | `string` \| `number` | The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.roc_auc?` | `number` | Area under ROC curve. If `undefined`, the roc\_auc score is not shown. |
| `opts.tpr?` | [`ArrayLike`](../types/ArrayLike.md) | True positive rate. |

### Returns

[`RocCurveDisplay`](RocCurveDisplay.md)

Defined in:  [generated/metrics/RocCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L114)

### from\_estimator()

Create a ROC Curve display from an estimator.

#### Signature

```ts
from_estimator(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input values. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.drop_intermediate?` | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.  `Default Value`  `true` |
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name of ROC Curve for labeling. If `undefined`, use the name of the estimator. |
| `opts.pos_label?` | `string` \| `number` | The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.response_method?` | `"decision_function"` \| `"auto’} default=’auto"` | Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L131)

### from\_predictions()

Plot ROC curve given the true and predicted values.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.drop_intermediate?` | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.  `Default Value`  `true` |
| `opts.kwargs?` | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name?` | `string` | Name of ROC curve for labeling. If `undefined`, name will be set to `"Classifier"`. |
| `opts.pos_label?` | `string` \| `number` | The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y_pred?` | [`ArrayLike`](../types/ArrayLike.md) | Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by “decision\_function” on some classifiers). |
| `opts.y_true?` | [`ArrayLike`](../types/ArrayLike.md) | True labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L231)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L68)

### plot()

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name of ROC Curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L320)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/RocCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/RocCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/RocCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/RocCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/RocCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with ROC Curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L388)

Defined in:  [generated/metrics/RocCurveDisplay.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L388)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L411)

Defined in:  [generated/metrics/RocCurveDisplay.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L411)

### line\_

ROC Curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L365)

Defined in:  [generated/metrics/RocCurveDisplay.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L365)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/RocCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L55)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/metrics/RocCurveDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L59)

Defined in:  [generated/metrics/RocCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L55) [generated/metrics/RocCurveDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L59)
