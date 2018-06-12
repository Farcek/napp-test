## typescript config

``` typescript
// tsconfig.json
    ...
    
    "baseUrl": "./", 
    "paths": {    
      "@napp-common": [
        "./napp/common"
      ],
      "@napp-meta": [
        "./napp/metadata"
      ],
      "@napp-application": [
        "./napp/napp-application"
      ],
      "@napp-component/*": [
        "./napp/component/*"
      ],
      "@napp-form": [
        "./napp/form-common"
      ],
      "@napp-form-component": [
        "./napp/form-component"
      ],
      "@napp-list": [
        "./napp/list-common"
      ],
      "@napp-list-component": [
        "./napp/list-component"
      ]
    }
    ...
```