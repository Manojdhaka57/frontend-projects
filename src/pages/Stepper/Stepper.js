import React from "react";
import CheckoutStepper from "../../components/Stepper/CheckoutStepper/CheckoutStepper";
import { checkoutSteps } from "../../components/Stepper/CheckoutStepper/constants";
// Stepper: the containe for the steps
// Step: an individual step in the sequence
// Step Label: a label for a step
// Step Content : optional content for the step
// Step Button: optional a button for the step
// Step Icon: optional a for the step
// Step Connector: optional a connector between the steps

// props = {activeStep, orientation=[ 'vertical', 'horizontal'] , }
const Stepper = () => {
  return <CheckoutStepper stepsConfig={checkoutSteps} />;
};

export default Stepper;
