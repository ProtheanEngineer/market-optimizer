interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return ( 
      <div className=" w-[100%] flex border-b">
        {children}
      </div>
     );
  };
  
  export default Container;
  