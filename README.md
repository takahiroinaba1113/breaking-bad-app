# React, axios, hooks practice with breaking-bad-app

References: 
React App - Breaking Bad Api
https://www.youtube.com/watch?v=YaioUnMw0mo

The Breaking Bad API
https://breakingbadapi.com/documentation

## Learnings
### Basic Hooks
#### useState

```javascript
const [state, setState] = useState(initialState);
setState(newState)
```

- returns a stateful value and a function to update it
- during the initial render, the returned state (state) is the same as the value passed as the first argument (initialState)
- the setState function is used to update the state, accepting a new state value and enqueues a re-render of the component

##### Functional updates
- if the new state is computed using the previous state, pass a function to setState(), which receive the previous value and return an updated value

```javascript
<button onClick={() => setState(prevState => prevState + something)} ></button>
```

#### useEffect

```javascript
useEffect(didUpdate);
```

- function passed will run after the render is committeed to the screen/DOM
- used for mutations, subscriptions, timers, logging, and other side effects that are not allowed inside the main body of a function component 
- by default, effects run after every completed render, but can also be fired only when certain values have changed

##### Conditional firing of an effect

```javascript
useEffect(
    () => {
        const subscription = props.source.subscribe();
        reutrn () => {
            subscription.unsubscribe();
        };
    }, [props.source],
);

// in short,
useEffect(function, [array]);
```

- when the second arg which is an array is set, useEffect fires when its values are changed 

### axios
- a library of HTTP client that makes GET and POST requests from the browser
- can make requests to an API, return data from the API, and then utilize the data in the app
- returns a promise which catches errors of 404 or 500
- can directly access to the data fetched
- API calls are made asynchronously since need to wait for the server to return the data to the app (there may be a few seconds of wait time before the API returns data)

```javascript
const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

setItems(result.data);
setIsLoading(false);
}
```

another example
```javascript
componentDidMount() {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
```
- make a GET request to the Dog API using axios.get('endpoint')
- the Dog API returns a random dog photo
- then output the API data response to the browser's console, using console.log



### fetch API
- a web standard builtin in most modern browsers to let us make HTTP requests to the server
- fetch() function to call GET, POST, PUT, PATCH, and DELETE requests, returuning response object (just an HTTP response, not json)
- returns a promise which resolves when the request completes
- cannot directly access to the fetched data, needing to convert to some data format(e.g. json) and to JavaScript object
- does not reject HTTP404 or 500 errors, since returning the error status (which is considered a successful call)
- since fetch() returns a promise, async/await can also be used

```javascript
fetch('http://example.com/example.json')
    . then((response) => {
        return response.json();
    })
```
