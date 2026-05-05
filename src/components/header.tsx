import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 border-b border-gray-300 bg-white z-10">
        <div className="h-[70px] flex items-center justify-between px-4 max-w-7xl m-auto">
          <Link to='/'>
            <div className="flex items-center justify-between gap-2">
              <p className="h-10 w-10 rounded-md text-white flex items-center justify-center bg-gray-800 font-bold">
                PL
              </p>
              <p className="text-xl font-bold">Product Listing</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}