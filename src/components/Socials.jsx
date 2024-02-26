import {
  ImAmazon,
  ImTwitter,
  ImInstagram,
  ImLinkedin
} from 'react-icons/im'
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className='flex gap-x-4 text-white'>
        <li>
          <a href="https:www.facebook.com/" target='_blank'>
            <ImAmazon />
          </a>
        </li>
        <li>
          <a href="https:www.x.com/" target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="https:www.instagram.com/" target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https:www.linkedin.com/" target='_blank'>
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials