import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
    todos: Todo[] = [];

    addItem(title: string): void {
      const todo: Todo = {
        title,
        completed: false,
      };
      // Add new todo item to the list
      this.todos.push(todo);
    }

    removeItem(todo: Todo): void {
      const index = this.todos.indexOf(todo);
      if (index > 0) {
        this.todos.splice(index, 1);
      }
    }
    
    clearCompleted(): void {
      this.todos.filter((todo) => !todo.completed); 
    }
    
    toggleAll(completed: boolean): void {
      this.todos.map((todo) => ({ ...todo, completed })); 
    }
    
    getItems(type = 'all'): Todo[] {
      switch (type) {
        case 'active':
          return this.todos.filter((todo) => todo.completed === false);
        case 'completed':
          return this.todos.filter((todo) => todo.completed === true);
        case 'all':
          return this.todos; // ❌ Unnecessary case, redundant with default
      }
    
      return [];
    }
}
