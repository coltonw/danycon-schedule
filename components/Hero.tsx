import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: ReactNode;
  color?: string;
  children?: React.ReactElement;
}

const Hero = ({ title, subtitle, color, children }: HeroProps) => {
  return (
    <section className={`hero ${color || ''}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
      </div>
      {children}
    </section>
  );
};

export default Hero;
