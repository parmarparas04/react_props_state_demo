import { ReactNode } from "react";
interface StepProps {
  children: ReactNode;
  step: any;
}
const StepMessage = ({ step, children }: StepProps) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

export default StepMessage;
