import { Header } from './components/header/header';
import plus from '../src/assets/plus.png';
import { ButtonContainer, ContainerCompleted, ContainerInput, ContainerMAGICO, ContainerSpanTask, ContainerTaskCounter, InputStyle, SectionContainer, SpanCompleted, SpanCreate, Task, TaskTable } from './styles';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([]); 

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setCompletedTasks([...completedTasks, false]); 
      setInputValue('');
    }
  };

  const handleCompleteTask = (index: number) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index]; 
    setCompletedTasks(newCompletedTasks);
  };

  const completedCount = completedTasks.filter(task => task).length; 

  return (
    <>
      <Header />
      <SectionContainer>
        <ContainerInput as="form" onSubmit={handleAddTask}>
          <InputStyle
            placeholder="Adicione uma nova tarefa"
            value={inputValue}
            onChange={handleInputValue}
          />
          <ButtonContainer type="submit">
            Criar<img src={plus} alt="plus icon" />
          </ButtonContainer>
        </ContainerInput>
        <ContainerMAGICO>
          <ContainerTaskCounter>
            <ContainerCompleted>
              <SpanCreate>Tarefas criadas</SpanCreate>
              <SpanCreate>{tasks.length}</SpanCreate>
            </ContainerCompleted>
            <ContainerCompleted>
              <SpanCompleted>Concluídas</SpanCompleted>
              <SpanCompleted>{completedCount}</SpanCompleted>
            </ContainerCompleted>
          </ContainerTaskCounter>
          <TaskTable>
            {tasks.map((task, index) => (
              <Task key={index}>
                <ContainerSpanTask>
                  <input
                    type='checkbox'
                    checked={completedTasks[index]} 
                    onChange={() => handleCompleteTask(index)} 
                  />
                  {task}
                </ContainerSpanTask>
              </Task>
            ))}
          </TaskTable>
        </ContainerMAGICO>
      </SectionContainer>
    </>
  );
}

export default App;
