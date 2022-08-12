import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));

const HOME_ROUTE = () => (
  <Suspense fallback={<div>Loading home page...</div>}>
    <Home />
  </Suspense>
)

const ABOUT_ROUTE = () => (
  <Suspense fallback={<div>Loading about page...</div>}>
    <About />
  </Suspense>
)

const ARTICLES_ROUTE = () => (
  <Suspense fallback={<div>Loading articles page...</div>}>
    <Articles />
  </Suspense>
)

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<HOME_ROUTE />} />
        <Route path="about" element={<ABOUT_ROUTE />} />
        <Route path="articles" element={<ARTICLES_ROUTE />} />
      </Route>
    </Routes>
  );
}

export default App;
