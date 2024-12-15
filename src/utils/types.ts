export interface PropsTodo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
}

export interface TodoInputFunction { addTodo: (newTodo: string) => void; }

export interface ChildrenProp {
        children:React.ReactNode;
      }
export interface ThemeContextType {
        theme: string;
        changeTheme: () => void;
      }
      

      