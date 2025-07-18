// components/FollowUs.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'next/link'


const FollowUs: React.FC = () => {
  return (
   <div className="bg-gray-50 py-4  mr-5 ml-5 pl-5 rounded-md ">
  <div className="flex items-center space-x-4">
    <p className="text-black text-md">FOLLOW US :</p>
    <ul className="flex space-x-4">
      <li>
        <Link
          href="#"
          className="bg-[#004F61] rounded-full w-9 h-9 flex items-center justify-center text-white"
        >
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="bg-[#004F61] rounded-full w-9 h-9 flex items-center justify-center text-white"
        >
          <FontAwesomeIcon icon={faXTwitter} size='lg' />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="bg-[#004F61] rounded-full w-9 h-9 flex items-center justify-center text-white"
        >
          <FontAwesomeIcon icon={faInstagram}  size='lg'/>
        </Link>
      </li>
    </ul>
  </div>
</div>
  )
}

export default FollowUs
