export class InMemoryDataService {
  createDb() {
    let todos: any[] = [
      { id: '1', name: 'Todo 1', isCompleted: false},
      { id: '2', name: 'Todo 2', isCompleted: true},
      { id: '3', name: 'Todo 3', isCompleted: false},
      { id: '4', name: 'Todo 4', isCompleted: false},
      { id: '5', name: 'Todo 5', isCompleted: true},
    ];

    return {todos};
  }
}
