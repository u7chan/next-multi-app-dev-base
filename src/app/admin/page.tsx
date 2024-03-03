import { Suspense } from 'react'
import NameField from './components/NameField'

export default function Page() {
  return (
    <>
      <h1>Admin</h1>
      <hr />
      <Suspense fallback={<>Loading...</>}>
        <NameField />
      </Suspense>
    </>
  )
}
