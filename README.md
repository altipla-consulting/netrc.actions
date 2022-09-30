
# netrc.actions

Authenticate with .netrc in a GitHub Action.


## Usage

```yaml
name: PR

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  ci:
    name: CI
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Configure netrc
      uses: altipla-consulting/netrc.actions@main
      with:
        machine: go.buf.build
        user: altiplabot
        password: ${{ secrets.BUF_TOKEN }}
```
