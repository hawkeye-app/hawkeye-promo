import React, { ReactNode } from "react";

type FeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <article className="flex items-start justify-start">
      {icon}
      <div className="font-jakarta text-sm">
        <h3 className="font-bold text-brand-1">{title}</h3>
        <p className="font-normal text-grey-2">{description}</p>
      </div>
    </article>
  );
};
export default Feature;
