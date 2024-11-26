declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  declare module '*.svg' {
    import React from 'react';
    const value: React.FC<React.SVGProps<SVGSVGElement>>;
    export default value;
  }
  