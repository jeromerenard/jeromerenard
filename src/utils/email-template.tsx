import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  role: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, role, text,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
