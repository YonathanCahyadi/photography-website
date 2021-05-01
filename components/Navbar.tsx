import Link from "next/link";

type NavbarProps = {
  logo: string;
};

function Navbar({ logo }: NavbarProps) {
  return (
    <nav>
      <Link href="/">
        <h1>{logo}</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/galleries">Galleries</Link>
        </li>
      </ul>
      <Link href="/contacts">
        <button>Contact Us</button>
      </Link>
    </nav>
  );
}

export default Navbar;
