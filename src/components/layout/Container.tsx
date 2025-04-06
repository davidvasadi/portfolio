import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`bg-white dark:bg-zinc-800 px-10 sm:px-12 md:mx-20 lg:mx-24 py-12 ${className}`}>
      <div className=" mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Container;
