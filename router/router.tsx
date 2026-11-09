import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import {
  Home,
  DonorFindPage,
  BecomeDonor,
  DonorListPage,
  Importences,
  AwarenessPage,
  FaqPage,
  Contact,
  DonorDetails,
} from "../router/lazyPages";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/DonorFindPage",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <DonorFindPage />
      </Suspense>
    ),
  },
  {
    path: "/BecomeDonor",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <BecomeDonor />
      </Suspense>
    ),
  },
  {
    path: "/DonorListPage",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <DonorListPage />
      </Suspense>
    ),
  },
  {
    path: "/Importences",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <Importences />
      </Suspense>
    ),
  },
  {
    path: "/AwarenessPage",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <AwarenessPage />
      </Suspense>
    ),
  },
  {
    path: "/FaqPage",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <FaqPage />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/DonorDetails/:id",
    element: (
      <Suspense fallback={<h2>পেজ লোড হচ্ছে...</h2>}>
        <DonorDetails />
      </Suspense>
    ),
  },
]);


export default router;
