import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao projeto"
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
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}