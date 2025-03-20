---
sidebar_position: 1
---

# E1 - Inception

> In this introductory episode, we set the stage for your React.js learning adventure. You'll gain an understanding of what React is, its role in modern web development, and why it's a crucial skill. We'll ignite your curiosity and prepare you to dive into the exciting realm of React.

- [E1-Inception Notes](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E1-Inception/E1-Inception.pdf)
- [Assignments - Inception](https://github.com/pravn27/reactjs-tech-doc/blob/master/docs/reactjs-course-tutorials/namaste-reactjs-course/readerDoc/E1-Inception/Assignment-Inception.pdf)

## Reference links from pdf notes & assignments

- [Link to my Code](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [async vs defer attributes in Javascript](https://www.youtube.com/watch?v=IrHmpdORLu8&ab_channel=AkshaySaini)

## key points

- Add React & ReactDOM into simple html page
- Simple Hello world React apps
- Why reactjs is required ?
- React.createElement(), what it returns ?
- ReactDOM.createRoot()
- Too complex HTML structure building with React core React.createElement() & its nested elements is very tedious jobs to developers, so we use JSX to make it easy to build complex HTML structure, developer friendly
- Need of JSX
- React can also be used only with some portion of html page like sections, footer. It is not mandatory to use reactjs in whole html page

## Assignments - Q & A

1. What is VSCode Emmet?
   <details>
      - Emmet is a plugin for Visual Studio Code that allows you to write HTML and CSS code faster by using abbreviations. It can generate complex HTML structures with a few keystrokes, making it easier to build and maintain code.
      - https://code.visualstudio.com/docs/editor/emmet
   <summary>
   View Answer
   </summary>
   </details>

2. what is the difference between **Library & Framework** in frontend UI?
   <details>

   **Library**

   A **library** is a collection of reusable functions, components, or utilities that developers can call as needed. It provides specific functionalities that help in building frontend interfaces but does not enforce a particular structure for the application.

   **Characteristics of a Library:**

   - **Selective Usage:** Developers can pick and use specific functions or components without committing to a particular structure.
   - **Lightweight:** Typically, libraries focus on a specific aspect of UI development (e.g., DOM manipulation, state management, animations).
   - **Greater Flexibility:** The developer has control over how the library is integrated into the project.
   - **Example:** React.js, jQuery, Lodash.

   ***

   **Framework**

   A **framework** is a more opinionated and comprehensive solution that dictates the architecture and flow of an application. It provides built-in structures, patterns, and lifecycle management to streamline UI development.

   **Characteristics of a Framework:**

   - **Inversion of Control:** The framework calls the developer's code rather than the other way around.
   - **Opinionated Structure:** Enforces a specific architecture (e.g., MVC, MVVM).
   - **Comprehensive Feature Set:** Often includes routing, state management, and component-based UI structure.
   - **Example:** Angular, Vue.js, Ember.js.

   ***

   **Key Differences**

   | Feature        | Library                      | Framework                              |
   | -------------- | ---------------------------- | -------------------------------------- |
   | Control        | Developer has full control   | Framework dictates structure           |
   | Flexibility    | High (pick & use components) | Low (must follow framework's approach) |
   | Learning Curve | Generally lower              | Can be steep due to built-in features  |
   | Scope          | Solves specific problems     | Provides a full solution               |
   | Example        | React, jQuery, Lodash        | Angular, Vue, Ember                    |

   **Conclusion**

   Choosing between a library and a framework depends on project requirements. Libraries offer more flexibility but require additional setup, whereas frameworks provide a structured approach, reducing decision fatigue but imposing constraints. Understanding their differences helps in selecting the right tool for frontend UI development.

   ***

   **Analogy**

   - Library: Like picking ingredients to cook your own meal.
   - Framework: Like following a recipe with step-by-step instructions.
   <summary>
   View Answer
   </summary>
   </details>

3. What is CDN, why do we use it ?
   <details>
      - A **Content Delivery Network (CDN)** is a system of distributed servers that work together to deliver web content (such as images, videos, stylesheets, scripts, and other assets) to users quickly and efficiently. CDNs reduce latency and improve load times by serving content from servers that are geographically closer to the user.

   - **How a CDN Works**

   1. **Caching Content**: CDNs store cached versions of content on multiple edge servers worldwide.
   2. **Geographical Distribution**: When a user requests content, the CDN serves it from the nearest edge server instead of the origin server.
   3. **Load Balancing**: CDNs distribute traffic across multiple servers, preventing overload.
   4. **DDoS Protection**: Many CDNs provide security features like DDoS protection, bot filtering, and firewall rules.

   - **Benefits of Using a CDN**

     - **Faster Load Times** – Content is served from the closest server to the user.
     - **Reduced Bandwidth Costs** – Cached content reduces requests to the origin server.
     - **Improved Availability** – Load balancing ensures uptime even during traffic spikes.
     - **Better Security** – CDNs offer DDoS protection and security measures.

   - **Popular CDN Providers**

     - Cloudflare
     - Akamai
     - Amazon CloudFront
     - Fastly
     - Google Cloud CDN

   - check react CDN links (normal / prod links)
     - why its 2 cdn links (react & react-dom) & what there inside cdn links, open in browser & see

   <summary>
   View Answer
   </summary>
   </details>

4. Why React is knows as React ?

5. What is crossorigin in script tag ?

6. What is difference between React & ReactDOM ?

7. What is difference between react.development.js & react.production.min.js in cdn links ?

8. To add react into any web apps, we need 2 js library, `react & react dom`, why its 2 different library?

   - `https://unpkg.com/react@18/umd/react.development.js` - its core of react js library
   - `https://unpkg.com/react-dom@18/umd/react-dom.development.js` - its react dom library, where act a bridge between react & actual browser, useful for dom operations

9. What is the most expensive things / costly operations /time consuming in web apps or frontend apps ?

   - DOM tree manipulation

10. What is React Elements, which returns from React.createElement() ?

    - normal js object, which has type & props

11. What is async & defer ?
