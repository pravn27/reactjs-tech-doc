---
sidebar_position: 7
---

# E7 - Finding the Path

> Routing can be mysterious, but we'll unravel the secrets in this episode. You'll gain a deep understanding of routes, paths, and how to navigate to different sections of your app with precision.

- [Finding the Path Notes](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E7-Finding-the-Path/E7-Finding-the-Path.pdf)
- [Assignments - Finding the Path](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E7-Finding-the-Path/Assignments-FindingThePath.pdf)

## Reference links from pdf notes & assignments

- test
- test

## key points

- useEffect life cycle with dependency array
  - If no dependency array is passed, it will run on every render of the component:
    ```javascript
    useEffect(() => {
      console.log("useEffect triggered from Header component");
    });
    ```
  - if empty dependency array is passed as dependency array, it will **run only once** when the component mounts initially
    ```javascript
    useEffect(() => {
      console.log("useEffect triggered from Header component");
    }, []);
    ```
  - if array with dependencies is passed, it will run **when the component mounts and when the dependencies change/updated**
    ```javascript
    useEffect(() => {
      console.log("useEffect triggered from Header component");
    }, [dataList]);
    ```
- useState

  - Never use useState outside of your components, will get error
  - Almost keep useState at begin / top of components
  - Never create useState react variables inside any conditional statements like if else, for loops, inside functions
    ```javascript
    if(){
        const [searchValue, setSearchValue] = useState("");
    }
    ```

- How to use router / navigation to other pages in react apps ?
  - use react-router-dom lib, https://reactrouter.com/home
- Never use anchor tag inside react apps
- Routing in web apps - 2 types
  - client side routing
  - server side routing
- Dynamic routing

## Assignments - Q & A

    1.sada

    2.asda
