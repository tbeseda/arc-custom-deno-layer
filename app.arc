@app
deno-hello

@aws
runtime deno
layers
  arn:aws:lambda:us-west-2:455488262213:layer:DenoRuntime:31 # 1.22.0

@plugins
remove-default-deno-layer

@http
get /
