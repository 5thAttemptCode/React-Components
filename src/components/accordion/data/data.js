const FaqData = [
  {
    id: 1,
    title: "What is the difference between state and props in React?",
    content: "Props are read-only data passed from a parent component to a child component, allowing data sharing between components. State is a built-in object that stores data specific to a component and can change over time, triggering re-renders when updated.",
  },
  {
    id: 2,
    title: "How does the Virtual DOM improve performance in React?",
    content: "The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it to the previous version using a diffing algorithm, and applies only the necessary changes to the actual DOM. This reduces costly DOM manipulations and improves performance.",
  },
  {
    id: 3,
    title: "What is the difference between null and undefined in JavaScript?",
    content: "undefined means a variable has been declared but hasn’t been assigned a value. null is an intentional assignment representing the absence of any object value. For example, let x; results in undefined, while let x = null; explicitly sets x to have no value.",
  },
  {
    id: 4,
    title: "When should you use useEffect in React?",
    content: "useEffect is used for handling side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can be controlled with dependency arrays to run on mount, update, or unmount.",
  },
]

export default FaqData