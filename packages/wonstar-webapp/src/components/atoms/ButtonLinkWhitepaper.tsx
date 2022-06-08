import { NextPage } from 'next';
import { FaStickyNote } from 'react-icons/fa';
import projectConfig from '@/config/projectConfig';

const ButtonLinkWhitepaper: NextPage = () => {
  return (
    <a
      href={projectConfig.whitepaperUrl}
      aria-label={`${projectConfig.nftName}'s Whitepaper`}
      rel='noopener noreferrer'
      target='_blank'
      className='p-2 rounded-full text-stone-50 bg-stone-700 hover:bg-zinc-500'
    >
      <FaStickyNote />
    </a>
  );
};

export default ButtonLinkWhitepaper;
