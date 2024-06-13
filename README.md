# hono-webc-examples

Samples of [hono-webc middleware](https://github.com/esroyo/hono-webc)

## [001-hello-world](001-hello-world)

Basic usage of this middleware

## [002-counter-button](002-counter-button)

Sampling how WebC scopes styles, scripts and provides a uid attribute to keep
unique id's inside a component

## [003-import-and-use-components](003-import-and-use-components)

How to import one component inside another, so you can modularize your templates

## [004-using-with-other-middlewares](004-using-with-other-middlewares)

Combining several Hono middlewares into the same project, so you get all the
nice stuff from [Hono ecosystem](https://hono.dev/middleware/third-party)

## [005-pass-custom-data](005-pass-custom-data)

In order to offer a more clean way to feed your templates with data, you can
pass extra data to it when defining the middleware and also when calling
ctx.render()

## [006-webc-for-loops](006-webc-for-loops)

Loop syntax landed, this is how it works.

## [007-define-component](007-define-component)

If you don't want to express how to import components explicitly, pass the
`defineComponents` to hono-webc, so it will pass it to WebC so you don't have to
webc:import every single component you wish to use.
