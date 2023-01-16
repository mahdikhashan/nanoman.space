import Image from 'next/image';
import { LinkProps } from 'next/link';

type Props = LinkProps & {
  text: string,
  href: string,
  alt?: string
}

const CustomLink = ({ text, href, alt="custom link", ...props }: Props): JSX.Element => {
  return (
    <>
      <div className="inline-flex underline cursor-pointer">
        <a href={href} {...props}>{text}</a>
        <Image
          src="/link.png"
          unoptimized
          alt={alt}
          width={12}
          height={12}
        />
      </div>
    </>
  )
}

export default CustomLink;
