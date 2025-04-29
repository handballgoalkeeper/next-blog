'use client';

import { useRouter } from 'next/navigation';
import {useEffect} from "react";
import {routes, StaticRoute} from "@/app/routes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.home as StaticRoute);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <>
    </>
  );
}
