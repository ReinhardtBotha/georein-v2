import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  lastName: string
  emailAddress: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  emailAddress,
  message,
}) => (
  <div>
    <h3>
      Contact form message from {firstName} {lastName} {emailAddress}.
    </h3>
    <p>{message}</p>
  </div>
)
