import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon

export default function Navbar() {
  return (
    <nav className="bg-[#F4EBE7] p-6">
      <ul className="flex items-center justify-between w-full">
        {/* Logo */}
        <li>
          <Link
            href="/"
            className="text-3xl"
            style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
          >
            SWEET DELIGHT<span style={{ color: "#F77F3F" }}>.</span>
          </Link>
        </li>

        {/* Menu Items */}
        <div className="flex gap-10 items-center">
          <li>
            <Link
              href="/"
              className="text-2xl"
              style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/whats-inside"
              className="text-2xl"
              style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
            >
              What's Inside
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-2xl"
              style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/track-order"
              className="text-2xl"
              style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
            >
              Track Your Order
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-2xl"
              style={{ fontFamily: "Impact, sans-serif", color: "#3C1B13" }}
            >
              Contact Us
            </Link>
          </li>

          {/* Profile Icon */}
          <li>
            <Link href="/profile">
              <FaUserCircle
                size={36}
                style={{ color: "#3C1B13" }}
                className="hover:opacity-80 transition"
              />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
