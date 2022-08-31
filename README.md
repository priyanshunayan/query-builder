# query-builder

Currently it's a stand alone package which can be shipped as a resuable package.

To Ship as package:

- in package.json update the version add following lines:
```
  "source": "src/index.tsx",
  "main": "dist/main.js",
  "module": "dist/module.js",
  "scripts": {
    "start": "parcel src/index.tsx",
    "build": "parcel build src/index.tsx"
  },
```
- in index.tsx comment render logic
- in App.tsx remove Provider wrap
- run npm publish


Usage: 

CRA APP:
1. `import {QueryProvider, App as QueryBuilder} from "enterpret-project"`
2. 
```js
// App.js
function App() {
  return (
    <QueryProvider>
      <QueryBuilder/>
      <Submit/>
    </QueryProvider>
  );
}

// Submit.js
import {useQuery} from "enterpret-project"

const Submit = () => {
    const {query} = useQuery()
    return (
        <button onClick={console.log(query)}>
            Submit
        </button>
    )
}
```
