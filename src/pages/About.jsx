import React, { useState, lazy, Suspense } from "react";

const One = lazy(() => import("../components/One"));
const Two = lazy(() => import("../components/Two"));
const Three = lazy(() => import("../components/Three"));

const About = () => {
    const [toggleComponents, setToggleComponents] = useState(false);

    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
        <h1>About</h1>
        {toggleComponents && (
                <Suspense fallback={<div>Components are loading...</div>}>
                <One />
                <Two />
                <Three />
        </Suspense>
        )}
        <button onClick={() => setToggleComponents(!toggleComponents)}>
            {toggleComponents ? "Hide Components" : "Show Components"}
        </button>
        </div>
    );
}

export default About;
