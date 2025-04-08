import Link from "next/link"

const page = () => {
  return (
    <div>
        <ul className="mt-10">
          <li><Link href="/about/users/umesh">user - 1</Link></li>
          <li><Link href="/about/users/utkarsha">user - 2</Link></li>
        </ul>
    </div>
  )
}

export default page
