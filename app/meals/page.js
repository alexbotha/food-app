import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Check out meal shares</Link>
      </p>
      <p>
        <Link href="/meals/dynamic">Check out dynamic</Link>
      </p>
    </>
  );
}
