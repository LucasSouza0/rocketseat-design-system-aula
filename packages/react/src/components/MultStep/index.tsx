import { Label, MultStepContainer, Step, Steps } from './styles'

export interface MultStepProps {
  size: number
  currentStep?: number
}

export function MultStep({ size, currentStep = 1 }: MultStepProps) {
  return (
    <MultStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultStepContainer>
  )
}

MultStep.displayName = 'MultStep'
