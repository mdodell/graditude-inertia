import { Head } from '@inertiajs/react'
import { useState } from 'react'

import inertiaSvg from '/assets/inertia.svg'
import reactSvg from '/assets/react.svg'
import viteRubySvg from '/assets/vite_ruby.svg'

import cs from './InertiaExample.module.css'
import { Button } from '@mantine/core'

export default function InertiaExample({ name }: { name: string }) {
  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

     <Button>Hello World!</Button>
    </>
  )
}
