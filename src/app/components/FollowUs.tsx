// components/FollowUs.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'next/link'

const FollowUs: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-md w-full">
      <strong className="text-black text-xl block mb-4">Follow Us :</strong>
      <ul className="flex space-x-4">
        <li>
          <Link href="#" className="bg-[#004F61] rounded-full  w-10 h-10 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faFacebookF}  size='2x' />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#004F61] rounded-full w-10 h-10 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faXTwitter} size='2x'/>
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#004F61] rounded-full w-10 h-10 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faInstagram} size='2x'/>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FollowUs
