# Pluggable

## Options

`fetch(pluginPath)` - custom way to resolve where plugins should be, this will not include resolution of `directories:plugins`

## Config

`directories:plugins` - location to search for when finding plugins, defaults to `cwd`
`plugins` - list of plugins in various formats mapping a name to optional `options` for broadway's `attach`

## Example

### Usage

```js
app.use(require('pluggable'))
```

### Config

```json
{
  "directories": {
    "plugins": "#ROOT/plugins"
  },
  "plugins": {
    "communications-whitelist": {
      "addresses": ["127.0.0.1"]
    }
  }
}
```
