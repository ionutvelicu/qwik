import { useStore, component$ } from '@builder.io/qwik';

export const App = component$(() => {
  function hello() {
    console.log("Hello!");
  }
  return (
    <>
      <button onClick$={hello}>Click me</button>
      <button onClick$={() => console.log("Hello working!")}>Click me working</button>
    </>
  );
});
