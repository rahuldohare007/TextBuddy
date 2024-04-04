import Logo from "../resources/github_logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-300 shadow sticky w-full mb-0 p-1 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://cyborgcoding007.blogspot.com"
            className="hover:underline"
          >
            CyborgCoding
          </a>
          . All Rights Reserved.
        </span>
        <span className="md:flex text-sm text-gray-900 sm:text-center dark:text-gray-400">
          Made with 🖤 by Rahul Dohare.
          <a href="https://github.com/rahuldohare007">
            <img src={Logo} style={{ marginLeft: "5px" }} />
          </a>
        </span>
      </div>
    </footer>
  );
}
