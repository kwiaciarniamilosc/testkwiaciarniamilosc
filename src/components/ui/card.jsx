const Card = ({ className, children, ...props }) => {
    return (
      <div className={`bg-white shadow rounded-lg ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const CardHeader = ({ className, children, ...props }) => {
    return (
      <div className={`p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const CardContent = ({ className, children, ...props }) => {
    return (
      <div className={`p-6 pt-0 ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const CardTitle = ({ className, children, ...props }) => {
    return (
      <h3 className={`text-2xl font-semibold ${className}`} {...props}>
        {children}
      </h3>
    );
  };
  
  export { Card, CardHeader, CardContent, CardTitle };