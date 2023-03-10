<p align="center">
  <img alt="sklearn ts logo" src="/media/scikit-learn-ts-social.png">
</p>

# scikit-learn-ts <!-- omit in toc -->

> Unlock the full power of Python's #1 ML library from Node.js 🔥

> Python's #1 ML library is now available in Node.js 🔥

> The full power of Python's #1 ML library is now available in Node.js 🔥

> Node.js users can now unlock the full power of Python's #1 ML library – without having to learn Python 🔥

[![Build Status](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Features](#features)
- [Prequisites](#prequisites)
- [Install](#install)
- [Usage](#usage)
- [Why?](#why)
- [How it works](#how-it-works)
- [TODO](#todo)
- [Credit](#credit)
- [License](#license)

## Intro

> This project is new and _experimental_. It works great for local development, but I wouldn't recommend it for production scenarios just yet. If you have feedback, questions, or bug reports, please create a GitHub issue. Any contributions are greatly appreciated!

TODO

## Features

- **Auto-generated from the official python scikit-learn**
- All [259 classes](https://scikit-learn.org/stable/modules/classes.html) are supported along with proper TS types and docs
  - `KMeans`
  - `TSNE`
  - `PCA`
  - `LinearRegression`
  - `LogisticRegression`
  - `DecisionTreeClassifier`
  - `RandomForestClassifier`
  - `XGBClassifier`
  - `DBSCAN`
  - `StandardScaler`
  - `MinMaxScaler`
  - ... _all of them_ 💯

## Prequisites

_This project is meant for Node.js users, so don't worry if you're not familiar with Python. This is the only step where you'll need to touch Python, and it should be pretty straightforward._

Make sure you have Node.js and Python 3 installed and in your `PATH`.

- `node >= 14`
- `python >= 3.7`

In python land, install `numpy` and `scikit-learn` either globally via `pip` or via your favorite virtualenv manager. The shell running your Node.js program will need access to these python modules, so if you're using a virtualenv, make sure it's activated.

If you're not sure what this means, it's okay. First [install python](https://realpython.com/installing-python/), which will also install `pip`, python's package manager. Then run:

```
pip install numpy scikit-learn
```

_Congratulations!_ You've safely navigated Python land, and from here on out, we'll be using Node.js / JS / TS. The `sklearn` NPM package will use your Python installation under the hood — without you needing to know Python! 🤯

## Install

```
npm install sklearn
```

## Usage

<table>
<tr>
<th width="450px"><b>Python</b></th>
<th width="450px"><b>TypeScript</b></th>
</tr>
<tr>
<td>

```python
import numpy as np
from sklearn.manifold import TSNE

data = np.array([
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])

model = TSNE(
  n_components=2,
  learning_rate='auto',
  init='random',
  perplexity=2
)
x = model.fit_transform(data)
```

</td>
<td>

```ts
import { TSNE, createPythonBridge } from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await createPythonBridge()

const model = new TSNE({
  n_components: 2,
  learning_rate: 'auto',
  init: 'random',
  perplexity: 2
})
await model.init(py)

const x = await model.fit_transform({ X: data })
```

</td>
</tr>
</table>

## Why?

<p align="center">
  <a href="https://twitter.com/transitive_bs/status/1616559787101114374">
    <img alt="JS / TS developers are jealous of the Python ML ecosystem" src="/media/python-vs-js-ts.jpg" width="500">
  </a>
</p>

## How it works

This project uses a fork of [python-bridge](https://github.com/Submersible/node-python-bridge) to spawn a Python interpreter as a subprocess and communicates back and forth via standard Unix pipes. The IPC pipes don't interfere with `stdout`/`stderr`/`stdin`, so your Node.js and Python code can print things normally.

The TS library is auto-generated from the Python `scikit-learn` [API docs](https://scikit-learn.org/stable/modules/classes.html). By using the official Python docs as a source of truth, we can guarantee a certain level of compatibility and future-proofing upgradeability.

For each `scikit-learn` HTML page that belongs to an exported Python `class` of `function`, we first parse it's metadata, params, methods, return values, and convert Python types into TypeScript types. We then generate a corresponding `TypeScript` file which wraps an instance of that Python declaration via a `PythonBridge`.

For each `TypeScript` wrapper `class` of `function`, we take special care to handle serializing values back and forth between Node.js and Python, including converting between primitive arrays and `numpy` arrays where necessary. All `numpy` array conversions should be handled automatically for you since we only support serializing primitive JSON types over the `PythonBridge`. There may be some edge cases where the automatic `numpy` inference fails, but we have a regression test suite for parsing these cases, so as long as the official Python docs are correct for a given type, then our implicit `numpy` conversion logic should "just work".

Some related thoughts:

- _This project is objectively pretty hacky_, but I think the premise is very much worth exploring.
- Serializing and copying potentially large arrays between Node.js and Python certainly isn't ideal, but **the Python implementations are so much faster and more robust**, that it ends up being a massive win over JS-based alternatives for common ML algorithims like K-Means and t-SNE
  - Seriously; for a recent data visualization project which was full-stack TypeScript, I tested 6 different t-SNE JS packages, and several k-means packages. None of the t-SNE packages worked for medium-sized inputs, they were 1000x slower in many cases, and I kept running into `NaN` city with the JS-based versions.
  - Case in point; it's _incredibly hard_ to compete with the robustness, speed, and maturity of a foundational Python ML library like `scikit-learn` in JS/TS land.

## TODO

- MVP
  - [x] e2e working example for MinMaxScaler
  - [x] e2e working example for TSNE
  - [x] e2e working example for Kmeans
  - [x] add support for class attributes
  - [x] generate all sklearn classes
  - [x] refactor generated code into namespaces / folders
  - [x] check python `scikit-learn` version
  - [x] generate readme files for each directory
  - [x] port changes to python-bridge...
  - [x] validate generated code via `tsc`
  - [x] refactor into `packages`
  - [ ] test build via CI
  - [ ] generate docs via tsdoc
  - [ ] basic readme w/ usage and examples
  - [ ] contact `scikit-learn` for feedback
- post-MVP
  - add support for sklearn functions (in addition to classes)
  - add support for accessing the built-in datasets
  - add support for better python exception / error handling
  - add support for positional arguments (in addition to the default keyword-based arguments)
  - add support for function exports in addition to class exports
    - "py functions" ([example](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_20newsgroups_vectorized.html))
  - add basic benchmarks
  - add python <> TS unit tests
  - add support for concurrent python requests and multiple python bridges
    - this may work currently, but it's untested and is likely to have race conditions
  - consider changing identifier names from python `snake_case` to JS `camelCase`
  - add support for `pandas`
  - update fork of `python-bridge` to be more modern
    - update deps
    - replace bluebird with native promises
    - fix python warnings
    - etc
- ideas
  - add support for [polars](https://github.com/pola-rs/nodejs-polars) and/or [danfo.js](https://github.com/javascriptdata/danfojs) dataframe formatting
  - explore memory mapping arrays between node.js and python for efficiency
    - would need the two serialized array formats to be byte-equivalent between python and node.js which seems difficult...
  - explore more efficient serialization formats for IPC
  - explore [pyodide](https://github.com/pyodide/pyodide) as a possible alternative
    - the `scikit-learn` team has an [open issue](https://github.com/scikit-learn/scikit-learn/issues/23727) considering support, but it looks stalled
    - it would likely be more performance than the approach used by this project, and it would theoretically support both Node.js and browser via WASM
    - it would, however, also be quite a bit more complicated on the tooling / buildchain side of things (as opposed to this package which punts this complexity to the runtime side of things); tradeoffs...
    - see also this [example issue + code snippet](https://github.com/scikit-learn/scikit-learn/issues/23707)

## Credit

This project is not affiliated with the [official Python scikit-learn project](https://scikit-learn.org/stable/about.html). Hopefully it will be one day. 😄

All of the difficult machine learning work happens under the hood via the [official Python scikit-learn project](https://scikit-learn.org), with full credit given to their [absolutely amazing team](https://scikit-learn.org/stable/about.html). This project is just a small open source experiment to try and leverage the existing `scikit-learn` ecosystem for the Node.js community.

## License

The official Python `scikit-learn` project is licensed under the [BSD 3-Clause](https://github.com/scikit-learn/scikit-learn/blob/main/COPYING).

This project is licensed under MIT © [Travis Fischer](https://transitivebullsh.it).

If you found this project helpful, please consider [donating to the official scikit-learn project](https://scikit-learn.org/stable/about.html#donating-to-the-project), [following @scikit_learn on twitter](https://twitter.com/scikit_learn), or <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
