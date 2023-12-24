import { usePathname } from 'next/navigation';

const NavigationLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={`${isActive ? 'active-nav' : ''} p-2 px-4 fw-medium w-100`}>
      <a href={href} className="link">{children}</a>
    </li>
  );
};

export default NavigationLink;