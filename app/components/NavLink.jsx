import Link from "next/link";

export default function NavLink({ title, href, onClick }) {
  return (
    <li className="px-4 py-2 rounded-xl bg-white border border-shade text-shade font-light hover:border-light hover:text-shade hover:bg-light">
      <Link href={href} onClick={onClick} className="">
        {title}
      </Link>
    </li>
  );
}
