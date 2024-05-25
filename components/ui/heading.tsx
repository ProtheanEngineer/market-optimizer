interface HeadingProps {
    title: string;
    description: string;
    classNameTitle?: string;
    classNameDescripcion?: string;
  }
  
  export const Heading: React.FC<HeadingProps> = ({
    title,
    description, 
    classNameTitle,
    classNameDescripcion
  }) => {
    return ( 
      <div>
        <h2 className={`pl-4 text-2xl font-bold tracking-tight ${classNameTitle}`}>{title}</h2>
        <p className={`p-4 text-sm text-muted-foreground ${classNameDescripcion}`}>
          {description}
        </p>
      </div>
    );
  };
   