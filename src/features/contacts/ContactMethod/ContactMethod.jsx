import { ContactInfo, Icon, ContactLink } from './ContactMethod.styled';

const ContactMethod = ({ icon, label, href, children }) => {
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
