export default function EmailTemplate() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8fafc', // slate-50
      borderRadius: '8px',
      color: '#1f2937', // gray-800
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px',
      }}>
        <div style={{
          backgroundColor: '#16a34a', // green-600
          color: 'white',
          padding: '8px',
          borderRadius: '6px',
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <h1 style={{
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '800',
        marginBottom: '16px',
        color: '#111827', // gray-900
      }}>
        Confirm Your Email
      </h1>

      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        marginBottom: '24px',
      }}>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '24px',
        }}>
          Thank you for signing up! Please confirm your email address to complete your registration.
        </p>

        <div style={{ textAlign: 'center' }}>
          <a href="{{ .ConfirmationURL }}" style={{
            display: 'inline-block',
            backgroundColor: '#16a34a', // green-600
            backgroundImage: 'linear-gradient(to right, #16a34a, #22c55e)', // green-600 to green-500
            color: 'white',
            fontWeight: '500',
            padding: '12px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'all 0.3s ease',
          }}>
            Confirm Email Address
          </a>
        </div>

        <p style={{
          fontSize: '14px',
          lineHeight: '1.5',
          marginTop: '24px',
          color: '#6b7280', // gray-500
        }}>
          If you didn't create an account, you can safely ignore this email.
        </p>
      </div>

      <div style={{
        textAlign: 'center',
        fontSize: '12px',
        color: '#6b7280', // gray-500
      }}>
        <p>© 2023 Your Company. All rights reserved.</p>
        <p>If you're having trouble clicking the button, copy and paste this URL into your browser:</p>
        <p style={{ wordBreak: 'break-all' }}>{ }</p>
      </div>
    </div>
  );
}