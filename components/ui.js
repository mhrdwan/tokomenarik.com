export const Badge = ({ children, className }) => (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${className}`}
    >
      {children}
    </span>
  );
  
  export const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
  );
  
  