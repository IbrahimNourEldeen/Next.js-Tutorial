export default async function SlowComponent() {
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <ul>
      <li>the first</li>
      <li>the second</li>
    </ul>
  );
}
