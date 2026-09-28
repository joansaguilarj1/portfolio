import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  name: string
  email: string
}

export function EmailTemplate({ message, name, email }: EmailTemplateProps) {
  return (
    `<div>
      <p>Name: ${name}<p> 
      <p>From: ${email}<p>
      <p>Message: ${message}<p>
    </div>`
  );
}