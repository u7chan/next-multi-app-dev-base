export default async function NameField() {
  const res = await fetch('http://localhost:3000/admin/api/me', { cache: 'no-store' })
  const data = await res.json()
  return <>Name: {data.name}</>
}
