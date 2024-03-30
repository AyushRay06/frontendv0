/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8iTmLuhn28f
 */
import Link from "next/link"

export function Product() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Shop by Sport</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Find the gear you need for your favorite sport.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <div className="grid gap-4 relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Basketball"
              className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-70 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Basketball</h3>
              <p className="text-sm leading-none">Styles made for your game.</p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Running"
              className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-70 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Running</h3>
              <p className="text-sm leading-none">
                Everything you need for every mile.
              </p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-70 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Football</h3>
              <p className="text-sm leading-none">
                Command the field in game-ready gear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}