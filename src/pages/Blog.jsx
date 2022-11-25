import React, { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="my-12">
      <div className="container space-y-12 px-2">
        <div>
          <h1 className="text-2xl text-slate-700 font-bold">
            #1 What are the different ways to manage a state in a React
            application?
          </h1>
          <div className="px-8 space-y-2">
            <h4 className="font-bold text-xl mt-4 text-slate-700">
              There are four ways to manage react state.
            </h4>
            <div>
              <p className="text-slate-700">1. Local State</p>
              <p className="text-slate-700">2. Url State</p>
              <p className="text-slate-700">3. Server State</p>
              <p className="text-slate-700">4. Global State</p>
            </div>

            <p className="text-slate-700">
              <strong>Local State:</strong> Local state is data we manage in one
              or another component. Local state is most often managed in React
              using the useState hook.
            </p>
            <p className="text-slate-700">
              <strong>Global State:</strong> Global State is data we manage
              across multiple components. Global State is necessary when we want
              to get and update data anywhere in our app, or in multiple
              components at least.
            </p>
            <p className="text-slate-700">
              <strong>Url State: </strong> Data that exits on our URL, including
              the pathname and query parameter. Url state is often missing as a
              category of state, but it is an important one.
            </p>
            <p className="text-slate-700">
              <strong>Server State: </strong> Data that comes from an external
              server must be integrated with our UI state.
            </p>
          </div>
        </div>
        {/* Second */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold">
            #2 How does prototypical inheritance work?
          </h1>
          <div className="px-8 space-y-2">
            <p className="text-slate-700 mt-4">
              JavaScript is a bit confusing for developers experienced in
              class-based languages , as it is dynamic and does not have static
              types.
            </p>
            <p className="text-slate-700">
              When it comes to inheritance, Javascript only has one construct:
              objects. Each object has a private property which holds link to
              another object called its prototype. That prototype object has a
              prototype of its own, and so on until an object is reached with
              null as its prototype. By definition, null has no prototype, and
              acts as the final link in this prototype chain. It is possible to
              mutate any member of the prototype chain or even swap out the
              prototype at runtime.
            </p>
          </div>
        </div>
        {/* third */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold">
            #3 What is a unit test? Why should we write unit tests?
          </h1>
          <div className="px-8 space-y-2">
            <p className="text-slate-700 mt-4">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
            </p>
            <p className="text-slate-700">
              Any bugs are found easily and quicker.Code covered with tests is
              more reliable than the code without. If a future change breaks
              something in the code, developers will be able to identify the
              root of the problem right away rather than coming through an
              unwieldy codebase to find the issue.Unit tests are a kind of
              living documentation of the product. To learn what functionality
              is provided by one module or another, developers can refer to unit
              tests to get a basic picture of the logic of the module and the
              system as a whole.Unit testing may seem like a tedious process at
              first, but in the long run, its benefits are clear. Unit testing
              ensures that all code meets quality standards before it’s
              deployed.
            </p>
          </div>
        </div>
        {/* {fourth} */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold">
            #4 React vs. Angular vs. Vue?
          </h1>
          <div className="px-8 space-y-2">
            <p className="text-slate-700 mt-4">
              <strong>React vs Angular: </strong> React often requires extra
              modules and components, which keeps the core library small, but
              means there’s extra work involved when incorporating outside
              tools. Angular, on the other hand, is more of a full-fledged
              solution that doesn’t require extras like React often does, though
              it does have a steeper learning curve for its core compared to
              React.React is more suitable for intermediate to advanced
              JavaScript developers who are familiar with concepts from ES6 and
              up, while Angular favors those same developers who are also
              familiar with TypeScript.
            </p>
            <p className="text-slate-700">
              <strong>React vs Vue: </strong> Vue is generally more suited to
              smaller, less complex apps and is easier to learn from scratch
              compared to React. Vue can be easier to integrate into new or
              existing projects and many feel its use of HTML templates along
              with JSX is an advantage.Overall, Vue might be the best choice if
              you’re a newer developer and not as familiar with advanced
              JavaScript concepts, while React is quite well suited for
              experienced programmers and developers who have worked with
              object-oriented JavaScript, functional JavaScript, and similar
              concepts.
            </p>
            <p className="text-slate-700">
              <strong>Angular vs Vue: </strong> A large library like Angular
              would require more diligence in keeping up with what’s new, while
              Vue would be less demanding in this regard and the fact that the
              two most recent major releases of Vue are in separate repositories
              helps.It should also be noted that Vue was created by a developer
              who formerly worked on Angular for Google, so that’s another thing
              to keep in mind, though that wouldn’t have a huge impact on your
              decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
