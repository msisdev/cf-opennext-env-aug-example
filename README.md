# cf-opennext-env-aug-example

>  At `2024.01.02`  
>  Using `"@opennextjs/cloudflare": "^0.3.3"`

## Description
How to augment `CloudflareEnv` in `"@opennextjs/cloudflare"` package:

1. Change `cf-typegen` script to use different interface name.
```json
{
  "scripts": {
    "cf-typegen": "wrangler types --env-interface CloudflareBindings env.d.ts"
  }
}
```

2. Create typescript file:
```ts
// augment-env.d.ts
import "@opennextjs/cloudflare"

declare global {
  interface CloudflareEnv extends CloudflareBindings {}
}
```
