

why does this happen?

```sh

(master)⚡ % tsc                                                                                                                                                       ~/projects/private-declaration-issue
utils/index.js:1:1 - error TS9006: Declaration emit for this file requires using private name 'FancyError' from module '"/Users/austin/projects/private-declaration-issue/utils/errors"'. An explicit type annotation may unblock declaration emit.

1 const errors = require("./errors");
  ~~~~~


Found 1 error.

```
