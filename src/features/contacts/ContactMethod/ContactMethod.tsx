import { ReactNode } from 'react';
import { ContactInfo, Icon, ContactLink } from './ContactMethod.styled';

interface ContactMethodProps {
  icon: string;
  label?: string;
  href: string;
  children: ReactNode;
}
const ContactMethod = ({ icon, label, href, children }: ContactMethodProps) => {
  return (
    <ContactInfo>
      {label}
      <ContactLink href={href}>
        {icon && (
          <Icon>
            <svg aria-hidden="true">
              <use href={`#icon-${icon}`} />
            </svg>
          </Icon>
        )}
        {children}
      </ContactLink>
    </ContactInfo>
  );
};

export { ContactMethod };
