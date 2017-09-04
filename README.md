issue with JSPM 0.15.1 & lodash

how I tried installed jspm modules

**method 1**

```bash
$ jspm install angular
$ jspm install lodash
$ jspm install restangular
```

```javascript
import _ from 'lodash'; // imports, but doesn't expose to restangular
import 'angular';
import 'restangular';

```

**method 2**

```bash
$ jspm install angular
$ jspm install restangular
$ jspm install lodash=npm:lodash
```

```javascript
import _ from 'lodash'; // imports, but doesn't expose to restangular
import 'angular';
import 'restangular';

```

**method 3**

```bash
$ jspm install angular
$ jspm install restangular
$ jspm install github:lodash/lodash
```

```javascript
import _ from 'lodash/lodash'; // imports, and exposes to restangular
// import 'lodash/lodash'; // imports and exposes to restangular as well
import 'angular';
import 'restangular';

```

[![Greenkeeper badge](https://badges.greenkeeper.io/vincentbriglia/jspm-lodash.svg)](https://greenkeeper.io/)