import React, { lazy, Suspense } from "react";
// import One from "../components/One";
// import Two from "../components/Two";
// import Three from "../components/Three";
const One = lazy(() => import("../components/One"));
const Two = lazy(() => import("../components/Two"));
const Three = lazy(() => import("../components/Three"));

const About = () => {
    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
        <h1>About</h1>
        <Suspense fallback={<div>Components are loading...</div>}>
            <One />
            <Two />
            <Three />
        </Suspense>
        </div>
    );
}

export default About;
