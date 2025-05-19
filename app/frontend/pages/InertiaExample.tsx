import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@mantine/core';

import cs from './InertiaExample.module.css';

import inertiaSvg from '/assets/inertia.svg';
import reactSvg from '/assets/react.svg';
import viteRubySvg from '/assets/vite_ruby.svg';

export default function InertiaExample({ name }: { name: string }) {
  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <Button>Hello World!</Button>
    </>
  );
}
