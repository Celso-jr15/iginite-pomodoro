import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome ao projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto Sophos EAD" />
        <option value="Projeto Winconcursos" />
        <option value="Projeto Freelancer" />
        <option value="Projeto PCERJ" />
      </datalist>

      <label htmlFor="minutesAmount">durante:</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        /* step={5}
             min={0}
            max={60} */
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
