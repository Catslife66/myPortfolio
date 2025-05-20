import Link from "next/link";

export default function NavLink({ title, href, onClick = "" }) {
  return (
    <li className="px-4 py-2 cursor-pointer md:border md:border-lighter text-primary font-semibold md:bg-lighter md:rounded-xl hover:border-secondary hover:text-white hover:bg-secondary">
      <Link href={href} onClick={onClick} className="">
        {title}
      </Link>
    </li>
  );
}
