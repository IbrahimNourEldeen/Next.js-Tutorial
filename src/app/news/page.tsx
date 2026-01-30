import { Suspense } from "react";
import SlowComponent from "./newslist";
export default function NewsList() {
  return (
    <div>
      <h1>welcome to our store</h1>
      <Suspense fallback={<p>loading....</p>}>
        <SlowComponent />
      </Suspense>
      <section>
        <h2>another categories will be here</h2>
      </section>
    </div>
  );
}
