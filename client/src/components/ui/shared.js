export const Card = ({ children, className = '', ...props }) => (
    <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ children, className = '', ...props }) => (
    <div className={`p-4 border-b ${className}`} {...props}>
      {children}
    </div>
  );
  
  export const CardTitle = ({ children, className = '', ...props }) => (
    <h3 className={`text-lg font-medium ${className}`} {...props}>
      {children}
    </h3>
  );
  
  export const CardContent = ({ children, className = '', ...props }) => (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
  
  export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-gray-300 hover:bg-gray-50'
    };
  
    return (
      <button 
        className={`px-4 py-2 rounded-md transition-colors ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-4 max-w-md w-full m-4">
          {children}
        </div>
      </div>
    );
  };
  
  export const DialogContent = ({ children }) => children;
  export const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
  export const DialogTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;
  export const DialogFooter = ({ children }) => <div className="mt-4 flex justify-end space-x-2">{children}</div>;
  
  export const Tabs = ({ children }) => <div className="mb-4">{children}</div>;
  export const TabsList = ({ children }) => <div className="flex space-x-2 border-b">{children}</div>;
  export const TabsTrigger = ({ children, value, ...props }) => (
    <button 
      className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300" 
      {...props}
    >
      {children}
    </button>
  );
  export const TabsContent = ({ children, value }) => <div>{children}</div>;