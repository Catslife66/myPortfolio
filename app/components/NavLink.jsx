import Link from "next/link";

export default function NavLink({ title, href, onClick }) {
  return (
    <li className="px-4 py-2 rounded-xl bg-lighter border border-lighter text-primary italic font-semibold hover:border-secondary hover:text-white hover:bg-secondary">
      <Link href={href} onClick={onClick} className="">
        {title}
      </Link>
    </li>
  );
}
